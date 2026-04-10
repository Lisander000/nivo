"use client";

import { useEffect, useState } from "react";
import Avatar from "./Avatar";
import { liveActivity } from "@/data/community";

export default function LiveActivity() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % liveActivity.length), 3500);
    return () => clearInterval(id);
  }, []);

  const item = liveActivity[index];

  return (
    <div className="inline-flex items-center gap-3 bg-white rounded-full pl-1.5 pr-5 py-1.5 shadow-[0_8px_28px_rgba(0,70,190,0.12)] border border-border">
      <Avatar name={item.name} size={32} />
      <div className="flex items-center gap-2 min-w-0">
        <div className="flex items-center gap-1.5">
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex w-full h-full rounded-full bg-success opacity-75 animate-ping" />
            <span className="relative inline-flex w-2 h-2 rounded-full bg-success" />
          </span>
          <span className="text-[11px] font-extrabold text-success uppercase tracking-wider">Live</span>
        </div>
        <div className="text-[12px] text-ink-secondary whitespace-nowrap">
          <span className="font-extrabold text-ink">{item.name}</span>
          <span className="text-ink-muted"> from {item.city} {item.action} </span>
          <span className="font-bold text-ink">{item.product}</span>
        </div>
      </div>
    </div>
  );
}
