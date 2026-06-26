"use client";

import { useEffect } from "react";

export function ClearStaleCache() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "development") return;

    const clearStaleAssets = async () => {
      if ("serviceWorker" in navigator) {
        const registrations = await navigator.serviceWorker.getRegistrations();
        await Promise.all(
          registrations.map((registration) => registration.unregister())
        );
      }

      if ("caches" in window) {
        const cacheNames = await caches.keys();
        await Promise.all(cacheNames.map((cacheName) => caches.delete(cacheName)));
      }
    };

    clearStaleAssets().catch(() => {
      // Browser cache cleanup should never block the app from rendering.
    });
  }, []);

  return null;
}
