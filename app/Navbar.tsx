"use client";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

interface NavbarProps {
  title: string;
  showBack?: boolean;
  onBack?: () => void;
  onLogout?: () => void;
}

export default function Navbar({ title, showBack, onBack, onLogout }: NavbarProps) {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    }
    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  return (
    <nav style={{ width: "100%", background: "#1a357a", color: "#fff", padding: "18px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", boxShadow: "0 2px 8px #b3c6e6", position: "relative", zIndex: 2 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {showBack && (
          <button onClick={onBack} style={{ background: "none", border: "none", color: "#fff", fontSize: 22, marginRight: 8, cursor: "pointer", padding: 0 }} title="Kembali">
            ←
          </button>
        )}
        <span style={{ fontSize: 28 }}>✝️</span>
        <span style={{ fontSize: 22, fontWeight: 600 }}>{title}</span>
      </div>
      {onLogout && (
        <div style={{ position: "relative" }} ref={menuRef}>
          <span
            style={{ fontSize: 28, opacity: 0.7, cursor: "pointer", userSelect: "none" }}
            onClick={() => setShowMenu((v) => !v)}
            tabIndex={0}
            aria-label="Menu"
          >
            ☰
          </span>
          {showMenu && (
            <div style={{ position: "absolute", right: 0, top: 36, background: "#fff", color: "#222", borderRadius: 12, boxShadow: "0 2px 16px #b3c6e6", minWidth: 120, zIndex: 10 }}>
              <button
                style={{ width: "100%", padding: "12px 0", background: "none", border: "none", color: "#222", fontWeight: 500, fontSize: 16, borderRadius: 12, cursor: "pointer", textAlign: "left", paddingLeft: 18 }}
                onClick={() => { setShowMenu(false); onLogout(); }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
} 