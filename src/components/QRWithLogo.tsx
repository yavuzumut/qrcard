'use client'

import React, { useCallback, useEffect, useImperativeHandle, useRef, forwardRef } from 'react'
import QRCode from 'qrcode'

type QRWithLogoProps = {
  value: string
  logoSrc: string | null
  size?: number
  className?: string
}

export type QRWithLogoRef = {
  downloadAsPng: (filename?: string) => void
}

const drawRoundedRect = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) => {
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.lineTo(x + w - r, y)
  ctx.quadraticCurveTo(x + w, y, x + w, y + r)
  ctx.lineTo(x + w, y + h - r)
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h)
  ctx.lineTo(x + r, y + h)
  ctx.quadraticCurveTo(x, y + h, x, y + h - r)
  ctx.lineTo(x, y + r)
  ctx.quadraticCurveTo(x, y, x + r, y)
  ctx.closePath()
}

const QRWithLogo = forwardRef<QRWithLogoRef, QRWithLogoProps>(
  ({ value, logoSrc, size = 200, className = '' }, ref) => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    const draw = useCallback(async () => {
      const canvas = canvasRef.current
      if (!canvas || !value) return

      const ctx = canvas.getContext('2d')
      if (!ctx) return

      const dpr = 2
      const pixelSize = size * dpr
      canvas.width = pixelSize
      canvas.height = pixelSize
      canvas.style.width = `${size}px`
      canvas.style.height = `${size}px`

      try {
        await QRCode.toCanvas(canvas, value, {
          width: pixelSize,
          margin: 1,
          color: { dark: '#0f172a', light: '#ffffff' },
          errorCorrectionLevel: 'H'
        })
      } catch {
        return
      }

      if (!logoSrc) return

      try {
        const logoSize = pixelSize * 0.2
        const padding = pixelSize * 0.04
        const boxSize = logoSize + padding * 2
        const x = (pixelSize - boxSize) / 2
        const y = (pixelSize - boxSize) / 2
        const radius = pixelSize * 0.04

        ctx.save()
        drawRoundedRect(ctx, x, y, boxSize, boxSize, radius)
        ctx.fillStyle = '#ffffff'
        ctx.fill()
        ctx.restore()

        const img = new Image()
        img.crossOrigin = 'anonymous'
        img.src = logoSrc
        await new Promise<void>((resolve, reject) => {
          img.onload = () => resolve()
          img.onerror = () => reject()
        })

        const logoPadding = padding * 1.2
        const logoDrawSize = boxSize - logoPadding * 2
        ctx.drawImage(
          img,
          x + logoPadding,
          y + logoPadding,
          logoDrawSize,
          logoDrawSize
        )
      } catch {
        // Logo failed to load; QR without logo is already drawn
      }
    }, [value, logoSrc, size])

    useEffect(() => {
      draw()
    }, [draw])

    const downloadAsPng = useCallback(
      (filename = 'qrcard-qr.png') => {
        const canvas = canvasRef.current
        if (!canvas || !value) return
        const dataUrl = canvas.toDataURL('image/png')
        const anchor = document.createElement('a')
        anchor.href = dataUrl
        anchor.download = filename
        anchor.click()
      },
      [value]
    )

    useImperativeHandle(ref, () => ({
      downloadAsPng
    }), [downloadAsPng])

    if (!value) return null

    return (
      <canvas
        ref={canvasRef}
        className={className}
        aria-label="QR code with logo"
      />
    )
  }
)

QRWithLogo.displayName = 'QRWithLogo'

export default QRWithLogo
