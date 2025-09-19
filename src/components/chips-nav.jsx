import { useEffect, useRef, useState } from "react";

export default function ChipsNav({ services }) {
  const [active, setActive] = useState(services[0]?.id ?? "");
  const railRef = useRef(null);
  const chipRefs = useRef({});
  const leftPadRef = useRef(null);
  const rightPadRef = useRef(null);

  // active by section in view
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-20% 0px -70% 0px" }
    );
    services.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [services]);

  // dynamic gutters (center first/last)
  useEffect(() => {
    if (!railRef.current) return;
    const setGutters = () => {
      const w = railRef.current.clientWidth;
      const pad = Math.floor(w / 2);
      if (leftPadRef.current) leftPadRef.current.style.width = `${pad}px`;
      if (rightPadRef.current) rightPadRef.current.style.width = `${pad}px`;
    };
    setGutters();
    const ro = new ResizeObserver(setGutters);
    ro.observe(railRef.current);
    addEventListener("resize", setGutters);
    addEventListener("orientationchange", setGutters);
    return () => {
      ro.disconnect();
      removeEventListener("resize", setGutters);
      removeEventListener("orientationchange", setGutters);
    };
  }, []);

  // center the active chip
  const centerActive = (smooth = true) => {
    const rail = railRef.current;
    const chip = chipRefs.current[active];
    if (!rail || !chip) return;
    const railRect = rail.getBoundingClientRect();
    const chipRect = chip.getBoundingClientRect();
    const current = rail.scrollLeft;
    const target = current + (chipRect.left - railRect.left) + chipRect.width / 2 - railRect.width / 2;
    const max = rail.scrollWidth - rail.clientWidth;
    rail.scrollTo({ left: Math.max(0, Math.min(max, target)), behavior: smooth ? "smooth" : "auto" });
  };

  useEffect(() => {
    centerActive(true);
    const t = setTimeout(() => centerActive(true), 60);
    return () => clearTimeout(t);
  }, [active]);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    requestAnimationFrame(() => centerActive(true));
  };

  return (
    <div className="sticky top-16 z-40">
      <div className="relative">
        {/* bar albă cu blur */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-screen
                     bg-white/80 backdrop-blur-md ring-1 ring-black/5
                     shadow-[0_1px_12px_rgba(15,23,42,.06)]"
        />
        <div className="relative max-w-7xl mx-auto px-4 md:px-6">
          <div ref={railRef} className="flex items-center gap-2 overflow-x-auto overflow-y-hidden scrollbar-hide py-2">
            <div ref={leftPadRef} aria-hidden="true" />
            {services.map((s) => {
              const isActive = active === s.id;

              const base =
                "px-4 py-2 text-sm font-semibold rounded-full whitespace-nowrap transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white";
              const cls = isActive
                ? // SELECTAT: alb + text verde + contur verde (fără galben)
                  `${base} bg-white text-[#4CAF50] ring-2 ring-[#4CAF50]`
                : // Neselectat: alb + text închis + contur discret
                  `${base} bg-white text-slate-700 ring-1 ring-slate-300 hover:bg-slate-50 hover:ring-slate-400`;

              return (
                <button
                  key={s.id}
                  ref={(el) => (chipRefs.current[s.id] = el)}
                  onClick={() => go(s.id)}
                  aria-current={isActive ? "page" : undefined}
                  className={cls}
                >
                  {s.chip}
                </button>
              );
            })}
            <div ref={rightPadRef} aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  );
}
