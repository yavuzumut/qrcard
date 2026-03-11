'use client'

import React, { useCallback, useMemo, useRef, useState } from 'react'
import QRWithLogo, { type QRWithLogoRef } from '@/components/QRWithLogo'

type PhoneCountryCode = {
  code: string
  label: string
}

const PHONE_COUNTRY_CODES: PhoneCountryCode[] = [
  { code: '+90', label: '🇹🇷 Türkiye (+90)' },
  { code: '+1', label: '🇺🇸 ABD / Kanada (+1)' },
  { code: '+44', label: '🇬🇧 Birleşik Krallık (+44)' },
  { code: '+49', label: '🇩🇪 Almanya (+49)' },
  { code: '+33', label: '🇫🇷 Fransa (+33)' },
  { code: '+31', label: '🇳🇱 Hollanda (+31)' },
  { code: '+32', label: '🇧🇪 Belçika (+32)' },
  { code: '+41', label: '🇨🇭 İsviçre (+41)' },
  { code: '+43', label: '🇦🇹 Avusturya (+43)' },
  { code: '+34', label: '🇪🇸 İspanya (+34)' },
  { code: '+39', label: '🇮🇹 İtalya (+39)' },
  { code: '+46', label: '🇸🇪 İsveç (+46)' },
  { code: '+47', label: '🇳🇴 Norveç (+47)' },
  { code: '+45', label: '🇩🇰 Danimarka (+45)' },
  { code: '+358', label: '🇫🇮 Finlandiya (+358)' },
  { code: '+48', label: '🇵🇱 Polonya (+48)' },
  { code: '+420', label: '🇨🇿 Çekya (+420)' },
  { code: '+36', label: '🇭🇺 Macaristan (+36)' },
  { code: '+30', label: '🇬🇷 Yunanistan (+30)' },
  { code: '+7', label: '🇷🇺 Rusya (+7)' },
  { code: '+380', label: '🇺🇦 Ukrayna (+380)' },
  { code: '+971', label: '🇦🇪 BAE (+971)' },
  { code: '+966', label: '🇸🇦 Suudi Arabistan (+966)' },
  { code: '+20', label: '🇪🇬 Mısır (+20)' },
  { code: '+212', label: '🇲🇦 Fas (+212)' },
  { code: '+234', label: '🇳🇬 Nijerya (+234)' },
  { code: '+27', label: '🇿🇦 Güney Afrika (+27)' },
  { code: '+91', label: '🇮🇳 Hindistan (+91)' },
  { code: '+86', label: '🇨🇳 Çin (+86)' },
  { code: '+81', label: '🇯🇵 Japonya (+81)' },
  { code: '+82', label: '🇰🇷 Güney Kore (+82)' },
  { code: '+61', label: '🇦🇺 Avustralya (+61)' },
  { code: '+64', label: '🇳🇿 Yeni Zelanda (+64)' },
  { code: '+55', label: '🇧🇷 Brezilya (+55)' },
  { code: '+52', label: '🇲🇽 Meksika (+52)' },
  { code: '+54', label: '🇦🇷 Arjantin (+54)' }
]

type SocialPlatform = {
  id: string
  label: string
}

const SOCIAL_PLATFORMS: SocialPlatform[] = [
  { id: 'website', label: '🌐 Website' },
  { id: 'linkedin', label: 'LinkedIn' },
  { id: 'github', label: 'GitHub' },
  { id: 'x', label: 'X (Twitter)' },
  { id: 'instagram', label: 'Instagram' },
  { id: 'facebook', label: 'Facebook' },
  { id: 'youtube', label: 'YouTube' },
  { id: 'tiktok', label: 'TikTok' },
  { id: 'whatsapp', label: 'WhatsApp' },
  { id: 'telegram', label: 'Telegram' },
  { id: 'discord', label: 'Discord' },
  { id: 'twitch', label: 'Twitch' },
  { id: 'pinterest', label: 'Pinterest' },
  { id: 'snapchat', label: 'Snapchat' },
  { id: 'reddit', label: 'Reddit' },
  { id: 'medium', label: 'Medium' },
  { id: 'behance', label: 'Behance' },
  { id: 'dribbble', label: 'Dribbble' },
  { id: 'figma', label: 'Figma' },
  { id: 'spotify', label: 'Spotify' },
  { id: 'soundcloud', label: 'SoundCloud' },
  { id: 'patreon', label: 'Patreon' },
  { id: 'substack', label: 'Substack' },
  { id: 'mastodon', label: 'Mastodon' },
  { id: 'bluesky', label: 'Bluesky' },
  { id: 'threads', label: 'Threads' },
  { id: 'vk', label: 'VK' },
  { id: 'weibo', label: 'Weibo' },
  { id: 'line', label: 'LINE' },
  { id: 'tumblr', label: 'Tumblr' },
  { id: 'flickr', label: 'Flickr' },
  { id: 'quora', label: 'Quora' },
  { id: 'stackoverflow', label: 'Stack Overflow' },
  { id: 'gitlab', label: 'GitLab' },
  { id: 'bitbucket', label: 'Bitbucket' },
  { id: 'devto', label: 'Dev.to' },
  { id: 'hashnode', label: 'Hashnode' },
  { id: 'producthunt', label: 'Product Hunt' },
  { id: 'slack', label: 'Slack' }
]

type SocialLinkEntry = {
  id: string
  platformId: string
  url: string
}

type VCardFormValues = {
  firstName: string
  lastName: string
  phoneCountryCode: string
  phoneNumber: string
  emailAddress: string
  title: string
  company: string
  socialLinks: SocialLinkEntry[]
}

const initialFormValues: VCardFormValues = {
  firstName: '',
  lastName: '',
  phoneCountryCode: '+90',
  phoneNumber: '',
  emailAddress: '',
  title: '',
  company: '',
  socialLinks: []
}

const buildVCardFromValues = (values: VCardFormValues) => {
  const trimmedValues: VCardFormValues = {
    firstName: values.firstName.trim(),
    lastName: values.lastName.trim(),
    phoneCountryCode: values.phoneCountryCode.trim(),
    phoneNumber: values.phoneNumber.trim(),
    emailAddress: values.emailAddress.trim(),
    title: values.title.trim(),
    company: values.company.trim(),
    socialLinks: values.socialLinks.map((entry) => ({
      ...entry,
      url: entry.url.trim()
    }))
  }

  const contentKeys: (keyof Omit<VCardFormValues, 'socialLinks'>)[] = [
    'firstName', 'lastName', 'phoneNumber', 'emailAddress', 'title', 'company'
  ]
  const hasContentFields = contentKeys.some((key) => (trimmedValues[key]?.length ?? 0) > 0)
  const hasSocialLinks = trimmedValues.socialLinks.some((entry) => entry.url.length > 0)
  const hasAnyValue = hasContentFields || hasSocialLinks

  if (!hasAnyValue) {
    return ''
  }

  const fullName = [trimmedValues.firstName, trimmedValues.lastName].filter(Boolean).join(' ')

  const lines: string[] = []

  lines.push('BEGIN:VCARD')
  lines.push('VERSION:3.0')

  if (trimmedValues.lastName || trimmedValues.firstName) {
    lines.push(`N:${trimmedValues.lastName};${trimmedValues.firstName};;;`)
  }

  if (fullName) {
    lines.push(`FN:${fullName}`)
  }

  if (trimmedValues.title || trimmedValues.company) {
    const organization = trimmedValues.company || ''
    const role = trimmedValues.title || ''

    if (organization) {
      lines.push(`ORG:${organization}`)
    }

    if (role) {
      lines.push(`TITLE:${role}`)
    }
  }

  if (trimmedValues.phoneNumber) {
    const countryCode = trimmedValues.phoneCountryCode || '+90'
    const digitsOnly = trimmedValues.phoneNumber.replace(/\D/g, '')
    const fullNumber = `${countryCode}${digitsOnly}`
    lines.push(`TEL;TYPE=CELL:${fullNumber}`)
  }

  if (trimmedValues.emailAddress) {
    lines.push(`EMAIL;TYPE=INTERNET:${trimmedValues.emailAddress}`)
  }

  for (const entry of trimmedValues.socialLinks) {
    if (!entry.url) continue
    const typeLabel = entry.platformId.charAt(0).toUpperCase() + entry.platformId.slice(1)
    lines.push(`URL;TYPE=${typeLabel}:${entry.url}`)
  }

  lines.push('END:VCARD')

  return lines.join('\n')
}

const HomePage = () => {
  const [formValues, setFormValues] = useState<VCardFormValues>(initialFormValues)
  const [selectedPlatformId, setSelectedPlatformId] = useState(SOCIAL_PLATFORMS[0].id)
  const [generatedVCard, setGeneratedVCard] = useState('')
  const [logoDataUrl, setLogoDataUrl] = useState<string | null>('/qrcard-logo.png')
  const qrWithLogoRef = useRef<QRWithLogoRef>(null)

  const handleInputChange = (fieldName: keyof Omit<VCardFormValues, 'socialLinks'>, fieldValue: string) => {
    setFormValues((prev) => ({ ...prev, [fieldName]: fieldValue }))
  }

  const handleAddSocialLink = () => {
    const newEntry: SocialLinkEntry = {
      id: `${selectedPlatformId}-${Date.now()}`,
      platformId: selectedPlatformId,
      url: ''
    }
    setFormValues((prev) => ({
      ...prev,
      socialLinks: [...prev.socialLinks, newEntry]
    }))
  }

  const handleRemoveSocialLink = (entryId: string) => {
    setFormValues((prev) => ({
      ...prev,
      socialLinks: prev.socialLinks.filter((e) => e.id !== entryId)
    }))
  }

  const handleSocialLinkUrlChange = (entryId: string, url: string) => {
    setFormValues((prev) => ({
      ...prev,
      socialLinks: prev.socialLinks.map((e) =>
        e.id === entryId ? { ...e, url } : e
      )
    }))
  }

  const hasGeneratedVCard = generatedVCard.length > 0

  const handleLogoUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file || !file.type.startsWith('image/')) return
    const reader = new FileReader()
    reader.onload = () => setLogoDataUrl(reader.result as string)
    reader.readAsDataURL(file)
  }, [])

  const handleRemoveLogo = useCallback(() => {
    setLogoDataUrl(null)
  }, [])

  const handleDownloadQR = useCallback(() => {
    qrWithLogoRef.current?.downloadAsPng('qrcard-qr.png')
  }, [])

  const handleGenerateClick = () => {
    const vCardContent = buildVCardFromValues(formValues)

    setGeneratedVCard(vCardContent)
  }

  const handleDownloadVCard = () => {
    if (!generatedVCard) {
      return
    }

    const fileBlob = new Blob([generatedVCard], {
      type: 'text/vcard;charset=utf-8'
    })

    const url = URL.createObjectURL(fileBlob)
    const anchorElement = document.createElement('a')

    anchorElement.href = url
    anchorElement.download = 'contact.vcf'
    anchorElement.click()

    URL.revokeObjectURL(url)
  }

  const vCardPreviewLines = useMemo(
    () => (generatedVCard ? generatedVCard.split('\n') : []),
    [generatedVCard]
  )

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-8">
      <div className="w-full max-w-5xl rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl shadow-slate-900/60 backdrop-blur">
        <header className="mb-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-xl font-semibold tracking-tight text-slate-50 md:text-2xl">
              QR VCF Oluşturucu
            </h1>
            <p className="text-sm text-slate-400 md:text-base">
              Kişisel ve sosyal medya bilgilerinle saniyeler içinde dijital kartvizit (vCard) oluştur
            </p>
          </div>

          <span className="mt-2 inline-flex items-center gap-1 rounded-full border border-primary-500/40 bg-primary-500/10 px-3 py-1 text-xs font-medium text-primary-300 md:mt-0">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Üyelik yok, veriler tarayıcıda işlenir
          </span>
        </header>

        <section className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-400">
              Bilgilerini Gir
            </h2>
            <p className="mb-4 text-xs text-slate-500">
              Hiçbir alan zorunlu değildir. Boş bıraktığın alanlar vCard içinde hiç yer almayacak.
            </p>

            <form
              className="flex flex-col gap-4"
              onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault()
                handleGenerateClick()
              }}
            >
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="firstName"
                    className="text-xs font-medium text-slate-300"
                  >
                    Ad
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    className="h-9 rounded-md border border-slate-700 bg-slate-900 px-3 text-sm text-slate-50 outline-none ring-primary-500/40 placeholder:text-slate-500 focus:ring-2"
                    placeholder="Umut"
                    value={formValues.firstName}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      handleInputChange('firstName', event.target.value)
                    }
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="lastName"
                    className="text-xs font-medium text-slate-300"
                  >
                    Soyad
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    className="h-9 rounded-md border border-slate-700 bg-slate-900 px-3 text-sm text-slate-50 outline-none ring-primary-500/40 placeholder:text-slate-500 focus:ring-2"
                    placeholder="Yılmaz"
                    value={formValues.lastName}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      handleInputChange('lastName', event.target.value)
                    }
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="phoneNumber"
                    className="text-xs font-medium text-slate-300"
                  >
                    Telefon
                  </label>
                  <div className="flex gap-2">
                    <select
                      id="phoneCountryCode"
                      name="phoneCountryCode"
                      aria-label="Ülke alan kodu seç"
                      className="h-9 w-[140px] shrink-0 rounded-md border border-slate-700 bg-slate-900 px-2 text-sm text-slate-50 outline-none ring-primary-500/40 focus:ring-2"
                      value={formValues.phoneCountryCode}
                      onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                        handleInputChange('phoneCountryCode', event.target.value)
                      }
                    >
                      {PHONE_COUNTRY_CODES.map(({ code, label }) => (
                        <option key={`${code}-${label}`} value={code}>
                          {label}
                        </option>
                      ))}
                    </select>
                    <input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      inputMode="tel"
                      className="min-w-0 flex-1 rounded-md border border-slate-700 bg-slate-900 px-3 text-sm text-slate-50 outline-none ring-primary-500/40 placeholder:text-slate-500 focus:ring-2"
                      placeholder="555 123 45 67"
                      value={formValues.phoneNumber}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        handleInputChange('phoneNumber', event.target.value)
                      }
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="emailAddress"
                    className="text-xs font-medium text-slate-300"
                  >
                    E-posta
                  </label>
                  <input
                    id="emailAddress"
                    name="emailAddress"
                    type="email"
                    className="h-9 rounded-md border border-slate-700 bg-slate-900 px-3 text-sm text-slate-50 outline-none ring-primary-500/40 placeholder:text-slate-500 focus:ring-2"
                    placeholder="umut@example.com"
                    value={formValues.emailAddress}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      handleInputChange('emailAddress', event.target.value)
                    }
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="title"
                    className="text-xs font-medium text-slate-300"
                  >
                    Unvan
                  </label>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    className="h-9 rounded-md border border-slate-700 bg-slate-900 px-3 text-sm text-slate-50 outline-none ring-primary-500/40 placeholder:text-slate-500 focus:ring-2"
                    placeholder="Frontend Developer"
                    value={formValues.title}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      handleInputChange('title', event.target.value)
                    }
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="company"
                    className="text-xs font-medium text-slate-300"
                  >
                    Şirket
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    className="h-9 rounded-md border border-slate-700 bg-slate-900 px-3 text-sm text-slate-50 outline-none ring-primary-500/40 placeholder:text-slate-500 focus:ring-2"
                    placeholder="Örn. QRCARD"
                    value={formValues.company}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      handleInputChange('company', event.target.value)
                    }
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="socialPlatform"
                  className="text-xs font-medium text-slate-300"
                >
                  Sosyal Medya & Bağlantılar
                </label>
                <div className="flex gap-2">
                  <select
                    id="socialPlatform"
                    name="socialPlatform"
                    aria-label="Sosyal medya platformu seç"
                    className="h-9 min-w-0 flex-1 rounded-md border border-slate-700 bg-slate-900 px-3 text-sm text-slate-50 outline-none ring-primary-500/40 focus:ring-2"
                    value={selectedPlatformId}
                    onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                      setSelectedPlatformId(event.target.value)
                    }
                  >
                    {SOCIAL_PLATFORMS.map((platform) => (
                      <option key={platform.id} value={platform.id}>
                        {platform.label}
                      </option>
                    ))}
                  </select>
                  <button
                    type="button"
                    aria-label="Sosyal medya linki ekle"
                    tabIndex={0}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-primary-500/50 bg-primary-500/20 text-lg font-medium text-primary-300 transition hover:bg-primary-500/30 focus:ring-2 focus:ring-primary-400/60"
                    onClick={handleAddSocialLink}
                  >
                    +
                  </button>
                </div>
                <div className="mt-2 flex flex-col gap-2">
                  {formValues.socialLinks.map((entry) => {
                    const platform = SOCIAL_PLATFORMS.find((p) => p.id === entry.platformId)
                    return (
                      <div
                        key={entry.id}
                        className="flex flex-wrap items-center gap-2 rounded-md border border-slate-700 bg-slate-900/60 p-2"
                      >
                        <span className="w-28 shrink-0 truncate text-xs font-medium text-slate-400">
                          {platform?.label ?? entry.platformId}
                        </span>
                        <input
                          type="url"
                          className="min-w-0 flex-1 rounded border border-slate-700 bg-slate-900 px-2 py-1.5 text-sm text-slate-50 outline-none ring-primary-500/40 placeholder:text-slate-500 focus:ring-2"
                          placeholder="https://..."
                          value={entry.url}
                          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                            handleSocialLinkUrlChange(entry.id, event.target.value)
                          }
                        />
                        <button
                          type="button"
                          aria-label="Bu linki kaldır"
                          tabIndex={0}
                          className="flex h-7 w-7 shrink-0 items-center justify-center rounded text-slate-400 transition hover:bg-slate-700 hover:text-red-400"
                          onClick={() => handleRemoveSocialLink(entry.id)}
                        >
                          ×
                        </button>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="mt-2 flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md bg-primary-500 px-4 py-2 text-sm font-medium text-white shadow-sm outline-none ring-primary-400/60 transition hover:bg-primary-600 focus:ring-2"
                  aria-label="Girilen bilgilerle vCard QR kodu oluştur"
                >
                  Oluştur
                </button>

                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md border border-slate-600 px-4 py-2 text-sm font-medium text-slate-100 outline-none ring-primary-400/60 transition hover:bg-slate-800 focus:ring-2 disabled:cursor-not-allowed disabled:opacity-60"
                  aria-label="Oluşturulan vCard dosyasını indir"
                  onClick={handleDownloadVCard}
                  disabled={!hasGeneratedVCard}
                >
                  .vcf indir
                </button>

                {!hasGeneratedVCard && (
                  <p className="text-xs text-slate-500">
                    Önce bilgilerini doldurup <span className="font-semibold text-slate-300">Oluştur</span> butonuna tıkla.
                  </p>
                )}
              </div>
            </form>
          </div>

          <div className="flex flex-col gap-4 rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <div>
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-400">
                QR & Önizleme
              </h2>
              <p className="text-xs text-slate-500">
                Oluşturduğun vCard&apos;ın QR kodu ve ham metni burada görünecek. QR kodu telefonla okuttuğunda kişi bilgileri
                rehbere kaydedilebilir.
              </p>
            </div>

            <div className="flex flex-1 flex-col gap-4 md:flex-row">
              <div className="flex flex-1 flex-col items-center gap-3 rounded-lg border border-slate-700 bg-slate-900/60 p-4">
                {hasGeneratedVCard ? (
                  <>
                    <div className="inline-flex items-center justify-center rounded-xl bg-white p-4 shadow-lg">
                      <QRWithLogo
                        ref={qrWithLogoRef}
                        value={generatedVCard}
                        logoSrc={logoDataUrl}
                        size={200}
                        className="rounded-lg"
                      />
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-2">
                      <label className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-slate-600 px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:bg-slate-800">
                        <span>{logoDataUrl ? 'Logo değiştir' : 'Logo ekle'}</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="sr-only"
                          onChange={handleLogoUpload}
                        />
                      </label>
                      {logoDataUrl && (
                        <button
                          type="button"
                          className="rounded-md border border-slate-600 px-3 py-1.5 text-xs font-medium text-slate-400 transition hover:bg-slate-800 hover:text-red-400"
                          onClick={handleRemoveLogo}
                        >
                          Logoyu kaldır
                        </button>
                      )}
                      <button
                        type="button"
                        className="rounded-md bg-primary-500/20 px-3 py-1.5 text-xs font-medium text-primary-300 transition hover:bg-primary-500/30"
                        onClick={handleDownloadQR}
                        aria-label="QR kodunu PNG olarak indir"
                      >
                        QR indir (PNG)
                      </button>
                    </div>
                    <div
                      className="rounded-md border border-slate-700 bg-slate-950/60 px-3 py-2 text-center text-xs text-slate-500"
                      title="Bu QR vCard verisi taşır; taramada sunucuya istek gönderilmez. Tarama sayısını takip etmek için URL tabanlı bir yönlendirme hizmeti gerekir."
                    >
                      Taranma sayısı: — (sunucu gerektirir)
                    </div>
                  </>
                ) : (
                  <span className="text-xs text-slate-500">
                    Henüz QR kod oluşturulmadı. Formu doldurup <span className="font-semibold text-slate-300">Oluştur</span>{' '}
                    butonuna tıkladığında burada görünecek.
                  </span>
                )}
              </div>

              <div className="flex-1 rounded-lg border border-slate-700 bg-slate-950/60 p-3">
                <p className="mb-2 text-xs font-medium text-slate-400">
                  vCard Önizleme
                </p>
                <div className="h-40 overflow-auto rounded border border-slate-800 bg-slate-950 p-2 text-[11px] font-mono leading-relaxed text-slate-300">
                  {hasGeneratedVCard ? (
                    vCardPreviewLines.map((line: string) => (
                      <div key={line}>{line}</div>
                    ))
                  ) : (
                    <span className="text-slate-600">
                      vCard metni burada satır satır görünecek.
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default HomePage

