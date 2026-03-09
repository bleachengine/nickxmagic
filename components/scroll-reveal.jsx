"use client"

import { useEffect, useRef } from "react"

export function ScrollReveal({ children, className = "", delay = 0 }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const containerElement = containerRef.current
    if (!containerElement) return

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    if (prefersReducedMotion) {
      containerElement.classList.add("visible")
      return
    }

    let revealTimeoutId
    const intersectionObserver = new IntersectionObserver(
      ([intersectionEntry]) => {
        if (intersectionEntry.isIntersecting) {
          revealTimeoutId = window.setTimeout(() => {
            containerElement.classList.add("visible")
          }, delay)
          intersectionObserver.unobserve(containerElement)
        }
      },
      { threshold: 0.15 }
    )

    intersectionObserver.observe(containerElement)
    return () => {
      intersectionObserver.disconnect()
      if (revealTimeoutId) {
        window.clearTimeout(revealTimeoutId)
      }
    }
  }, [delay])

  return (
    <div ref={containerRef} className={`reveal ${className}`}>
      {children}
    </div>
  )
}
