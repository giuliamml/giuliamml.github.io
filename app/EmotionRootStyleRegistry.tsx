"use client";

import { CacheProvider } from "@emotion/react";
import { GlobalStyles } from "./theme/GlobalStyles";
import { useServerInsertedHTML } from "next/navigation";
import { useState } from "react";
import createCache from "@emotion/cache";
import { ThemeProvider } from "./ThemeProvider";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

export default function RootStyleRegistry({ children }: { children }) {
  const [{ cache, flush }] = useState(() => {
    const cache = createCache({ key: "my" });
    cache.compat = true;
    const prevInsert = cache.insert;
    let inserted: string[] = [];
    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }

      return prevInsert(...args);
    };
    const flush = () => {
      const prevInsert = inserted;
      inserted = [];

      return prevInsert;
    };

    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) return null;
    let styles = "";
    for (const name of names) {
      styles += cache.inserted[name];
    }

    return (
      <style
        data-emotion={`${cache.key} ${names.join(" ")}`}
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider>
        <GlobalStyles />
        <Header />
        {children}
        <Footer />
      </ThemeProvider>
    </CacheProvider>
  );
}
