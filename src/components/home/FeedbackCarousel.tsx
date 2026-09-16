"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Feedback = { name: string; role: string; image: string; quote: string };

export function FeedbackCarousel({ items }: { items: Feedback[] }) {
  const count = items.length;
  const [position, setPosition] = useState(count);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  const pointerStart = useRef<number | null>(null);
  const moving = useRef(false);
  const active = count ? ((position % count) + count) % count : 0;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (paused || hovered || focused || reducedMotion || count < 2) return;
    const timer = window.setInterval(() => {
      if (document.hidden || moving.current) return;
      moving.current = true;
      setAnimate(true);
      setPosition((value) => value + 1);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [paused, hovered, focused, reducedMotion, count]);

  function goTo(next: number) {
    if (moving.current || count < 2 || next === position) return;
    if (reducedMotion) {
      setAnimate(false);
      setPosition(count + ((next % count) + count) % count);
    } else {
      moving.current = true;
      setAnimate(true);
      setPosition(next);
    }
  }

  if (!count) return null;

  return (
    <div className="mt-12" role="region" aria-roledescription="băng chuyền" aria-label="Phản hồi học viên" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocusCapture={() => setFocused(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
      <div className="overflow-hidden" onTouchStart={(event) => { pointerStart.current = event.touches[0].clientX; }} onTouchEnd={(event) => { const start = pointerStart.current; pointerStart.current = null; if (start !== null && Math.abs(start - event.changedTouches[0].clientX) > 45) goTo(position + (start > event.changedTouches[0].clientX ? 1 : -1)); }}>
        <div className={`flex [--slide-width:100%] md:[--slide-width:50%] lg:[--slide-width:33.333333%] ${animate ? "transition-transform duration-500 ease-out" : ""}`} style={{ transform: `translateX(calc(-${position} * var(--slide-width)))` }} onTransitionEnd={(event) => {
          if (event.target !== event.currentTarget || event.propertyName !== "transform") return;
          moving.current = false;
          if (position >= count * 2 || position < count) {
            setAnimate(false);
            setPosition(count + ((position % count) + count) % count);
          }
        }}>
          {[...items, ...items, ...items].map((item, index) => (
            <div key={`${item.name}-${index}`} className="w-full shrink-0 px-2 md:w-1/2 lg:w-1/3 lg:px-3" aria-hidden={index < count || index >= count * 2 ? true : undefined}>
              <article className="h-full min-h-[330px] rounded-[32px] border border-line bg-surface p-7 sm:p-8">
                <div className="flex items-center gap-4">
                  <Image src={item.image} alt={item.name} width={80} height={80} className="size-16 shrink-0 rounded-full object-cover sm:size-20" />
                  <div><h3 className="text-2xl font-bold leading-tight">{item.name}</h3><p className="mt-1 text-base">{item.role}</p></div>
                </div>
                <blockquote className="mt-9 text-lg leading-8 text-muted">{item.quote}</blockquote>
              </article>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <button type="button" onClick={() => goTo(position - 1)} aria-label="Phản hồi trước" className="grid size-10 place-items-center rounded-full border border-line hover:bg-tint">←</button>
        <div className="flex" aria-label="Chọn phản hồi">
          {items.map((item, index) => <button key={item.name} type="button" onClick={() => goTo(count + index)} aria-label={`Xem phản hồi của ${item.name}`} aria-current={active === index ? "true" : undefined} className="grid size-8 place-items-center rounded-full focus-visible:outline-2 focus-visible:outline-primary"><span className={`size-2.5 rounded-full ${active === index ? "brand-panel bg-primary" : "bg-tint"}`} /></button>)}
        </div>
        <button type="button" onClick={() => goTo(position + 1)} aria-label="Phản hồi tiếp theo" className="grid size-10 place-items-center rounded-full border border-line hover:bg-tint">→</button>
        {!reducedMotion && <button type="button" onClick={() => setPaused(!paused)} className="rounded-full px-3 py-2 text-sm text-muted hover:bg-tint">{paused ? "Tiếp tục trượt" : "Tạm dừng"}</button>}
      </div>
    </div>
  );
}
