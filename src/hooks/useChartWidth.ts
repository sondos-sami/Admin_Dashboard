import { useEffect, useRef, useState } from "react";

/** Measures container width for MUI X charts that need numeric width. */
export function useChartWidth() {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(320);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      setWidth(Math.max(200, Math.floor(el.clientWidth)));
    });
    ro.observe(el);
    setWidth(Math.max(200, Math.floor(el.clientWidth)));
    return () => ro.disconnect();
  }, []);

  return [ref, width] as const;
}
