"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { EXTENSIONS } from "@/lib/domain/extensions";
import { checkAvailability } from "@/lib/domain/api";
import type { DomainResult } from "@/lib/domain/types";

export type SortMode = "default" | "price-asc" | "price-desc";

export function useResults(baseDomain: string) {
  const [results, setResults] = useState<DomainResult[]>([]);
  const [selectedExts, setSelectedExts] = useState<Set<string>>(new Set());
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);
  const [sortBy, setSortBy] = useState<SortMode>("default");

  const runChecks = useCallback(async () => {
    if (!baseDomain) {
      setResults([]);
      return;
    }

    setResults(
      EXTENSIONS.map((e) => ({
        ...e,
        available: null,
        loading: true,
      }))
    );

    await Promise.all(
      EXTENSIONS.map(async (ext, idx) => {
        const available = await checkAvailability(
          `${baseDomain}${ext.ext}`
        );

        setResults((prev) => {
          const next = [...prev];
          next[idx] = {
            ...next[idx],
            available,
            loading: false,
          };
          return next;
        });
      })
    );
  }, [baseDomain]);

  
  useEffect(() => {
    const t = setTimeout(() => {
      runChecks();
    }, 250);

    return () => clearTimeout(t);
  }, [runChecks]);


  const filtered = useMemo(() => {
    let list = [...results];

    if (selectedExts.size > 0) {
      list = list.filter((r) => selectedExts.has(r.ext));
    }

    if (showAvailableOnly) {
      list = list.filter(
        (r) => r.available === true || r.loading
      );
    }

    if (sortBy === "price-asc") {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      list.sort((a, b) => b.price - a.price);
    }

    return list;
  }, [results, selectedExts, showAvailableOnly, sortBy]);

 
  const toggleExt = (ext: string) => {
    setSelectedExts((prev) => {
      const next = new Set(prev);
      if (next.has(ext)) next.delete(ext);
      else next.add(ext);
      return next;
    });
  };

  const clearFilters = () => {
    setSelectedExts(new Set());
    setShowAvailableOnly(false);
    setSortBy("default");
  };

  const activeFilterCount =
    selectedExts.size +
    (showAvailableOnly ? 1 : 0) +
    (sortBy !== "default" ? 1 : 0);

  const loadedCount = results.filter((r) => !r.loading).length;
  const availableCount = results.filter(
    (r) => r.available === true
  ).length;

  return {
    results,
    filtered,
    selectedExts,
    setSelectedExts,
    toggleExt,
    showAvailableOnly,
    setShowAvailableOnly,
    sortBy,
    setSortBy,
    clearFilters,
    activeFilterCount,
    loadedCount,
    availableCount,
  };
}