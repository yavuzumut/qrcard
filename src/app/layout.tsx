import type { Metadata } from 'next'
import React from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'QR VCF Oluşturucu',
  description:
    'Kişisel iletişim ve sosyal medya bilgilerinle dijital kartvizit (vCard) oluştur ve QR kod ile paylaş'
}

type RootLayoutProps = {
  children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="tr">
      <body className="min-h-screen bg-slate-950 text-slate-50">
        {children}
      </body>
    </html>
  )
}

export default RootLayout
