"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const sections = [
  ["The Settlement", "#settlement"],
  ["Daily Life", "#daily-life"],
  ["The Economy", "#economy"],
  ["The World", "#world"],
]

export function Header() {
  const [open, setOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 901px)")
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
        <a href="#top" className="brand" onClick={() => setOpen(false)} aria-label="Bannerford home">
          <Image src="/crest.svg" alt="" width={34} height={38} />
          <span>Bannerford</span>
        </a>
        <button className="menu-button" type="button" ref={menuButton} aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
          <span className="menu-mark" aria-hidden="true"><i /><i /></span>
        </button>
        <nav aria-label="Main navigation" id="site-navigation" data-open={open} className="main-nav">
          {sections.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="nav-journal" href="#journal" onClick={() => setOpen(false)}>Dev Journal</a>
        </nav>
      </div>
    </header>
  )
}
