"use client"

import { useEffect, useRef } from "react"

export function MagicSparkles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvasElement = canvasRef.current
    if (!canvasElement) return

    const canvasContext = canvasElement.getContext("2d")
    if (!canvasContext) return

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
    const isMobileViewport = window.innerWidth < 768

    if (prefersReducedMotion || isMobileViewport) {
      return
    }

    let animationId = 0
    let lastFrameTime = 0
    let isPageVisible = true
    let pixelRatio = 1
    const sparkleParticles = []
    const targetFrameDuration = 1000 / 30
    const maxParticles = Math.min(40, Math.floor(window.innerWidth / 35))

    const resizeCanvas = () => {
      pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5)
      canvasElement.width = Math.floor(window.innerWidth * pixelRatio)
      canvasElement.height = Math.floor(window.innerHeight * pixelRatio)
      canvasElement.style.width = `${window.innerWidth}px`
      canvasElement.style.height = `${window.innerHeight}px`
      canvasContext.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
    }

    resizeCanvas()

    window.addEventListener("resize", resizeCanvas)

    const createSparkleParticle = () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: -Math.random() * 0.5 - 0.1,
      opacity: 0,
      life: 0,
      maxLife: Math.random() * 140 + 90,
    })

    const handleVisibilityChange = () => {
      isPageVisible = !document.hidden
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)

    const renderSparkles = (currentTime) => {
      if (!isPageVisible) {
        animationId = requestAnimationFrame(renderSparkles)
        return
      }

      if (currentTime - lastFrameTime < targetFrameDuration) {
        animationId = requestAnimationFrame(renderSparkles)
        return
      }

      lastFrameTime = currentTime
      canvasContext.clearRect(0, 0, window.innerWidth, window.innerHeight)

      if (sparkleParticles.length < maxParticles && Math.random() > 0.95) {
        sparkleParticles.push(createSparkleParticle())
      }

      for (
        let particleIndex = sparkleParticles.length - 1;
        particleIndex >= 0;
        particleIndex -= 1
      ) {
        const particle = sparkleParticles[particleIndex]
        particle.life += 1
        particle.x += particle.speedX
        particle.y += particle.speedY

        const progress = particle.life / particle.maxLife
        if (progress < 0.2) {
          particle.opacity = progress / 0.2
        } else if (progress > 0.8) {
          particle.opacity = (1 - progress) / 0.2
        }

        canvasContext.beginPath()
        canvasContext.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        canvasContext.fillStyle = `rgba(212, 175, 55, ${particle.opacity * 0.55})`
        canvasContext.fill()

        canvasContext.beginPath()
        canvasContext.arc(
          particle.x,
          particle.y,
          particle.size * 2.2,
          0,
          Math.PI * 2
        )
        canvasContext.fillStyle = `rgba(212, 175, 55, ${particle.opacity * 0.08})`
        canvasContext.fill()

        if (particle.life >= particle.maxLife) {
          sparkleParticles.splice(particleIndex, 1)
        }
      }

      animationId = requestAnimationFrame(renderSparkles)
    }

    animationId = requestAnimationFrame(renderSparkles)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resizeCanvas)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50"
      aria-hidden="true"
    />
  )
}
