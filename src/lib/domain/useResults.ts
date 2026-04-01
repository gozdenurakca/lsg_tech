"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { EXTENSIONS } from "@/lib/domain/extensions";
import { checkAvailabilityBulk } from "@/lib/domain/api";
import type { DomainResult } from "@/lib/domain/types";

export type SortMode = "default" | "price-asc" | "price-desc";

export function useResults(baseDomain: string) {
  const [results, setResults] = useState<DomainResult[]>([]);
  const [selectedExts, setSelectedExts] = useState<Set<string>>(new Set());
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);
  const [sortBy, setSortBy] = useState<SortMode>("default");

  // 🔥 BULK DOMAIN CHECK
  const runChecks = useCallback(async () => {
    if (!baseDomain) {
      setResults([]);
      return;
    }

    const domains = EXTENSIONS.map(
      (e) => `${baseDomain}${e.ext}`
    );

    // loading state
    setResults(
      EXTENSIONS.map((e) => ({
        ...e,
        available: null,
        loading: true,
      }))
    );

    try {
      const data = await checkAvailabilityBulk(domains);

      setResults((prev) =>
        prev.map((item) => {
          const fullDomain = `${baseDomain}${item.ext}`;

          const found = data.find(
            (d) => d.domain === fullDomain
          );

          return {
            ...item,
            available: found?.available ?? false,
            premium: found?.premium ?? false,
            loading: false,
          };
        })
      );
    } catch (err) {
      console.error("CHECK ERROR:", err);

      setResults((prev) =>
        prev.map((item) => ({
          ...item,
          available: false,
          loading: false,
        }))
      );
    }
  }, [baseDomain]);

  // debounce
  useEffect(() => {
    const t = setTimeout(() => {
      runChecks();
    }, 250);

    return () => clearTimeout(t);
  }, [runChecks]);

  // 🔍 FILTER + SORT
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

  // 🎛 FILTER ACTIONS
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