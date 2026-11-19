"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Symbol } from "./symbol"

const sections = [
  ["Home", "#top"],
  ["The Game", "#settlement"],
  ["Features", "#features"],
  ["Dev Journal", "#journal"],
  ["Community", "#community"],
]

export function Header({ repository }: { repository: string }) {
  const [open, setOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1001px)")
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false)
    }
    desktop.addEventListener("change", closeOnDesktop)
    return () => desktop.removeEventListener("change", closeOnDesktop)
  }, [])

  return (
    <header className="site-header" onKeyDown={(event) => {
      if (event.key === "Escape" && open) {
        setOpen(false)
        menuButton.current?.focus()
      }
    }}>
      <div className="header-inner">
        <a href="#top" className="masthead-brand" onClick={() => setOpen(false)} aria-label="Bannerford home">
          <Image src="/art/masthead-logo.webp" alt="" width={560} height={319} priority />
        </a>
        <button className="menu-button" type="button" ref={menuButton} aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
          <span className="menu-mark" aria-hidden="true"><i /><i /></span>
        </button>
        <nav aria-label="Main navigation" id="site-navigation" data-open={open} className="main-nav">
          <div className="nav-sections">
            {sections.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          </div>
          <div className="nav-actions">
            <a className="nav-github" href={repository} aria-label="Bannerford website on GitHub"><Symbol name="github" size={20} /></a>
            <a className="nav-journal" href="#journal" onClick={() => setOpen(false)}><Symbol name="star" size={16} />Follow Development</a>
          </div>
        </nav>
      </div>
    </header>
  )
}
