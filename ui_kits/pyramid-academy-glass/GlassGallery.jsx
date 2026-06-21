// Gallery — a draggable, snap-scrolling carousel of lesson & classroom photos
// in glass frames. Arrows, drag-to-scroll, dots, and parallax depth.
// Photo tiles are styled placeholders the user swaps for real photos
// (drop files into ./assets and set the `src` of each item).
function GlassGallery() {
  const trackRef = React.useRef(null);
  const [idx, setIdx] = React.useState(0);

  const items = [
    { label: "IELTS darsi",          tag: "Asosiy filial", tint: "59,130,246",  icon: <G_Cap /> },
    { label: "Speaking klubi",       tag: "Jonli amaliyot", tint: "168,85,247",  icon: <G_Mic /> },
    { label: "Zamonaviy sinfxona",   tag: "2-filial",       tint: "245,158,11",  icon: <G_Users /> },
    { label: "Mental arifmetika",    tag: "Bolalar guruhi", tint: "16,185,129",  icon: <G_Brain /> },
    { label: "Matematika darsi",     tag: "Aniq fanlar",    tint: "59,130,246",  icon: <G_Sigma /> },
    { label: "Bitiruv marosimi",     tag: "Natijalar",      tint: "245,158,11",  icon: <G_Award /> },
  ];

  function scrollToCard(i) {
    const track = trackRef.current; if (!track) return;
    const clamped = Math.max(0, Math.min(items.length - 1, i));
    const card = track.children[clamped];
    if (card) track.scrollTo({ left: card.offsetLeft - track.offsetLeft - 4, behavior: "smooth" });
    setIdx(clamped);
  }

  // Sync active dot with manual scroll.
  React.useEffect(() => {
    const track = trackRef.current; if (!track) return;
    let raf;
    function onScroll() {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const cards = [...track.children];
        const center = track.scrollLeft + track.clientWidth / 2;
        let best = 0, bestD = Infinity;
        cards.forEach((c, i) => {
          const cc = c.offsetLeft + c.clientWidth / 2 - track.offsetLeft;
          const d = Math.abs(cc - center);
          if (d < bestD) { bestD = d; best = i; }
        });
        setIdx(best);
      });
    }
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  // Drag-to-scroll (pointer).
  React.useEffect(() => {
    const track = trackRef.current; if (!track) return;
    let down = false, startX = 0, startLeft = 0, moved = false;
    function pd(e) { down = true; moved = false; startX = e.pageX; startLeft = track.scrollLeft; track.style.cursor = "grabbing"; }
    function pm(e) { if (!down) return; const dx = e.pageX - startX; if (Math.abs(dx) > 4) moved = true; track.scrollLeft = startLeft - dx; }
    function pu() { down = false; track.style.cursor = "grab"; }
    function clickGuard(e) { if (moved) { e.preventDefault(); e.stopPropagation(); } }
    track.addEventListener("pointerdown", pd);
    window.addEventListener("pointermove", pm);
    window.addEventListener("pointerup", pu);
    track.addEventListener("click", clickGuard, true);
    return () => {
      track.removeEventListener("pointerdown", pd);
      window.removeEventListener("pointermove", pm);
      window.removeEventListener("pointerup", pu);
      track.removeEventListener("click", clickGuard, true);
    };
  }, []);

  return (
    <section id="gallery" style={{ position: "relative", padding: "96px 0 96px", margin: "0 auto" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 36 }}>
          <div>
            <span className="gbadge gbadge--blue" style={{ marginBottom: 16 }}>Galereya</span>
            <h2 className="glass-text" style={{
              fontSize: "clamp(32px, 4vw, 44px)", fontWeight: 700, lineHeight: 1.15,
              letterSpacing: "-0.02em", margin: 0, color: "var(--glass-text-primary)", maxWidth: 620,
            }}>
              Darslarimiz va o'quv xonalarimiz
            </h2>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <button className="gbtn gbtn--ghost" aria-label="Oldingi" onClick={() => scrollToCard(idx - 1)} style={{ width: 52, height: 52, padding: 0, borderRadius: 16 }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <button className="gbtn gbtn--primary" aria-label="Keyingi" onClick={() => scrollToCard(idx + 1)} style={{ width: 52, height: 52, padding: 0, borderRadius: 16 }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Carousel track — full-bleed, scroll-snap */}
      <div
        ref={trackRef}
        className="g-gallery-track"
        style={{
          display: "flex", gap: 20,
          overflowX: "auto", scrollSnapType: "x mandatory",
          padding: "8px max(24px, calc((100vw - 1280px) / 2 + 24px))",
          cursor: "grab",
          scrollbarWidth: "none",
        }}
      >
        {items.map((it, i) => (
          <figure key={i}
            className="glass glass--lg glass--interactive glass--liquid g-gallery-card"
            data-parallax data-speed={(0.015 * (i % 3)).toFixed(3)}
            style={{
              flex: "0 0 auto", width: 460, maxWidth: "82vw",
              scrollSnapAlign: "center", margin: 0, padding: 12,
              background: "rgba(15,23,42,0.42)",
            }}
          >
            <div style={{
              position: "relative", borderRadius: 20, overflow: "hidden",
              aspectRatio: "4 / 3", border: "1px solid rgba(255,255,255,0.16)",
              background: `linear-gradient(145deg, rgba(${it.tint},0.42), rgba(15,23,42,0.85))`,
            }}>
              {/* swap this block's bg for <img src="..."> when real photos arrive */}
              <div style={{
                position: "absolute", inset: 0, opacity: 0.5,
                backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.25) 1px, transparent 0)",
                backgroundSize: "26px 26px",
                maskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 80%)",
                WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 80%)",
              }} />
              <div style={{
                position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-58%)",
                color: "rgba(255,255,255,0.9)",
                filter: `drop-shadow(0 0 24px rgba(${it.tint},0.8))`,
              }}>
                {React.cloneElement(it.icon, { size: 64, strokeWidth: 1.4 })}
              </div>
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(180deg, transparent 50%, rgba(5,11,31,0.78) 100%)",
              }} />
              <figcaption style={{
                position: "absolute", left: 18, right: 18, bottom: 16,
                display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 12,
                color: "white",
              }}>
                <span className="glass-text" style={{ fontSize: 19, fontWeight: 700, letterSpacing: "-0.01em" }}>{it.label}</span>
                <span className="gbadge" style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(10px)", borderColor: "rgba(255,255,255,0.28)", flexShrink: 0 }}>{it.tag}</span>
              </figcaption>
            </div>
          </figure>
        ))}
      </div>

      {/* Dots */}
      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 28 }}>
        {items.map((_, i) => (
          <button key={i} aria-label={"Rasm " + (i + 1)} onClick={() => scrollToCard(i)} style={{
            width: i === idx ? 28 : 9, height: 9, borderRadius: 999, border: "none", cursor: "pointer", padding: 0,
            background: i === idx ? "linear-gradient(90deg,#FCD34D,#F59E0B)" : "rgba(255,255,255,0.25)",
            transition: "all 300ms cubic-bezier(.4,0,.2,1)",
          }} />
        ))}
      </div>

      <style>{`
        .g-gallery-track::-webkit-scrollbar { display: none; }
        @media (max-width: 560px) { .g-gallery-card { width: 82vw !important; } }
      `}</style>
    </section>
  );
}
window.GlassGallery = GlassGallery;
