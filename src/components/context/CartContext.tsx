"use client";

// Tüm site boyunca paylaşılan sepet state'i.
// Domain, SSL ve Hosting ürünlerini destekler.
// localStorage ile persist edilir — sayfa yenilemede kaybolmaz.

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

export type CartItem =
  | { id: string; type: "domain"; name: string; price: number; period: number }
  | { id: string; type: "ssl"; plan: string; price: number; period: number }
  | {
      id: string;
      type: "hosting";
      plan: string;
      price: number;
      period: number;
    };

export type CartItemInput =
  | { type: "domain"; name: string; price: number; period: number }
  | { type: "ssl"; plan: string; price: number; period: number }
  | { type: "hosting"; plan: string; price: number; period: number };

interface CartContextValue {
  items: CartItem[];
  addItem: (item: CartItemInput) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  isInCart: (identifier: string) => boolean;
  total: number;
  count: number;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lsg-cart");
      if (saved) setItems(JSON.parse(saved));
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem("lsg-cart", JSON.stringify(items));
  }, [items, hydrated]);

  const addItem = (item: CartItemInput) => {
    const id = `${item.type}-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    setItems((prev) => [...prev, { ...item, id } as CartItem]);
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const clearCart = () => setItems([]);

  const isInCart = (identifier: string) =>
    items.some((i) =>
      i.type === "domain" ? i.name === identifier : i.plan === identifier,
    );

  const total = items.reduce((sum, i) => sum + i.price * i.period, 0);
  const count = items.length;

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, clearCart, isInCart, total, count }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
