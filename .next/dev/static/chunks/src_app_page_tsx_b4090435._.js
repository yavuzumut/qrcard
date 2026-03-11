(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html2canvas$2f$dist$2f$html2canvas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/html2canvas/dist/html2canvas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$qr$2d$code$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-qr-code/lib/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const PHONE_COUNTRY_CODES = [
    {
        code: '+90',
        label: '🇹🇷 Türkiye (+90)'
    },
    {
        code: '+1',
        label: '🇺🇸 ABD / Kanada (+1)'
    },
    {
        code: '+44',
        label: '🇬🇧 Birleşik Krallık (+44)'
    },
    {
        code: '+49',
        label: '🇩🇪 Almanya (+49)'
    },
    {
        code: '+33',
        label: '🇫🇷 Fransa (+33)'
    },
    {
        code: '+31',
        label: '🇳🇱 Hollanda (+31)'
    },
    {
        code: '+32',
        label: '🇧🇪 Belçika (+32)'
    },
    {
        code: '+41',
        label: '🇨🇭 İsviçre (+41)'
    },
    {
        code: '+43',
        label: '🇦🇹 Avusturya (+43)'
    },
    {
        code: '+34',
        label: '🇪🇸 İspanya (+34)'
    },
    {
        code: '+39',
        label: '🇮🇹 İtalya (+39)'
    },
    {
        code: '+46',
        label: '🇸🇪 İsveç (+46)'
    },
    {
        code: '+47',
        label: '🇳🇴 Norveç (+47)'
    },
    {
        code: '+45',
        label: '🇩🇰 Danimarka (+45)'
    },
    {
        code: '+358',
        label: '🇫🇮 Finlandiya (+358)'
    },
    {
        code: '+48',
        label: '🇵🇱 Polonya (+48)'
    },
    {
        code: '+420',
        label: '🇨🇿 Çekya (+420)'
    },
    {
        code: '+36',
        label: '🇭🇺 Macaristan (+36)'
    },
    {
        code: '+30',
        label: '🇬🇷 Yunanistan (+30)'
    },
    {
        code: '+7',
        label: '🇷🇺 Rusya (+7)'
    },
    {
        code: '+380',
        label: '🇺🇦 Ukrayna (+380)'
    },
    {
        code: '+971',
        label: '🇦🇪 BAE (+971)'
    },
    {
        code: '+966',
        label: '🇸🇦 Suudi Arabistan (+966)'
    },
    {
        code: '+20',
        label: '🇪🇬 Mısır (+20)'
    },
    {
        code: '+212',
        label: '🇲🇦 Fas (+212)'
    },
    {
        code: '+234',
        label: '🇳🇬 Nijerya (+234)'
    },
    {
        code: '+27',
        label: '🇿🇦 Güney Afrika (+27)'
    },
    {
        code: '+91',
        label: '🇮🇳 Hindistan (+91)'
    },
    {
        code: '+86',
        label: '🇨🇳 Çin (+86)'
    },
    {
        code: '+81',
        label: '🇯🇵 Japonya (+81)'
    },
    {
        code: '+82',
        label: '🇰🇷 Güney Kore (+82)'
    },
    {
        code: '+61',
        label: '🇦🇺 Avustralya (+61)'
    },
    {
        code: '+64',
        label: '🇳🇿 Yeni Zelanda (+64)'
    },
    {
        code: '+55',
        label: '🇧🇷 Brezilya (+55)'
    },
    {
        code: '+52',
        label: '🇲🇽 Meksika (+52)'
    },
    {
        code: '+54',
        label: '🇦🇷 Arjantin (+54)'
    }
];
const SOCIAL_PLATFORMS = [
    {
        id: 'website',
        label: '🌐 Website'
    },
    {
        id: 'linkedin',
        label: 'LinkedIn'
    },
    {
        id: 'github',
        label: 'GitHub'
    },
    {
        id: 'x',
        label: 'X (Twitter)'
    },
    {
        id: 'instagram',
        label: 'Instagram'
    },
    {
        id: 'facebook',
        label: 'Facebook'
    },
    {
        id: 'youtube',
        label: 'YouTube'
    },
    {
        id: 'tiktok',
        label: 'TikTok'
    },
    {
        id: 'whatsapp',
        label: 'WhatsApp'
    },
    {
        id: 'telegram',
        label: 'Telegram'
    },
    {
        id: 'discord',
        label: 'Discord'
    },
    {
        id: 'twitch',
        label: 'Twitch'
    },
    {
        id: 'pinterest',
        label: 'Pinterest'
    },
    {
        id: 'snapchat',
        label: 'Snapchat'
    },
    {
        id: 'reddit',
        label: 'Reddit'
    },
    {
        id: 'medium',
        label: 'Medium'
    },
    {
        id: 'behance',
        label: 'Behance'
    },
    {
        id: 'dribbble',
        label: 'Dribbble'
    },
    {
        id: 'figma',
        label: 'Figma'
    },
    {
        id: 'spotify',
        label: 'Spotify'
    },
    {
        id: 'soundcloud',
        label: 'SoundCloud'
    },
    {
        id: 'patreon',
        label: 'Patreon'
    },
    {
        id: 'substack',
        label: 'Substack'
    },
    {
        id: 'mastodon',
        label: 'Mastodon'
    },
    {
        id: 'bluesky',
        label: 'Bluesky'
    },
    {
        id: 'threads',
        label: 'Threads'
    },
    {
        id: 'vk',
        label: 'VK'
    },
    {
        id: 'weibo',
        label: 'Weibo'
    },
    {
        id: 'line',
        label: 'LINE'
    },
    {
        id: 'tumblr',
        label: 'Tumblr'
    },
    {
        id: 'flickr',
        label: 'Flickr'
    },
    {
        id: 'quora',
        label: 'Quora'
    },
    {
        id: 'stackoverflow',
        label: 'Stack Overflow'
    },
    {
        id: 'gitlab',
        label: 'GitLab'
    },
    {
        id: 'bitbucket',
        label: 'Bitbucket'
    },
    {
        id: 'devto',
        label: 'Dev.to'
    },
    {
        id: 'hashnode',
        label: 'Hashnode'
    },
    {
        id: 'producthunt',
        label: 'Product Hunt'
    },
    {
        id: 'slack',
        label: 'Slack'
    }
];
const initialFormValues = {
    firstName: '',
    lastName: '',
    phoneCountryCode: '+90',
    phoneNumber: '',
    emailAddress: '',
    title: '',
    company: '',
    socialLinks: []
};
const buildVCardFromValues = (values)=>{
    const trimmedValues = {
        firstName: values.firstName.trim(),
        lastName: values.lastName.trim(),
        phoneCountryCode: values.phoneCountryCode.trim(),
        phoneNumber: values.phoneNumber.trim(),
        emailAddress: values.emailAddress.trim(),
        title: values.title.trim(),
        company: values.company.trim(),
        socialLinks: values.socialLinks.map((entry)=>({
                ...entry,
                url: entry.url.trim()
            }))
    };
    const contentKeys = [
        'firstName',
        'lastName',
        'phoneNumber',
        'emailAddress',
        'title',
        'company'
    ];
    const hasContentFields = contentKeys.some((key)=>(trimmedValues[key]?.length ?? 0) > 0);
    const hasSocialLinks = trimmedValues.socialLinks.some((entry)=>entry.url.length > 0);
    const hasAnyValue = hasContentFields || hasSocialLinks;
    if (!hasAnyValue) {
        return '';
    }
    const fullName = [
        trimmedValues.firstName,
        trimmedValues.lastName
    ].filter(Boolean).join(' ');
    const lines = [];
    lines.push('BEGIN:VCARD');
    lines.push('VERSION:3.0');
    if (trimmedValues.lastName || trimmedValues.firstName) {
        lines.push(`N:${trimmedValues.lastName};${trimmedValues.firstName};;;`);
    }
    if (fullName) {
        lines.push(`FN:${fullName}`);
    }
    if (trimmedValues.title || trimmedValues.company) {
        const organization = trimmedValues.company || '';
        const role = trimmedValues.title || '';
        if (organization) {
            lines.push(`ORG:${organization}`);
        }
        if (role) {
            lines.push(`TITLE:${role}`);
        }
    }
    if (trimmedValues.phoneNumber) {
        const countryCode = trimmedValues.phoneCountryCode || '+90';
        const digitsOnly = trimmedValues.phoneNumber.replace(/\D/g, '');
        const fullNumber = `${countryCode}${digitsOnly}`;
        lines.push(`TEL;TYPE=CELL:${fullNumber}`);
    }
    if (trimmedValues.emailAddress) {
        lines.push(`EMAIL;TYPE=INTERNET:${trimmedValues.emailAddress}`);
    }
    for (const entry of trimmedValues.socialLinks){
        if (!entry.url) continue;
        const typeLabel = entry.platformId.charAt(0).toUpperCase() + entry.platformId.slice(1);
        lines.push(`URL;TYPE=${typeLabel}:${entry.url}`);
    }
    lines.push('END:VCARD');
    return lines.join('\n');
};
const HomePage = ()=>{
    _s();
    const [formValues, setFormValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialFormValues);
    const [selectedPlatformId, setSelectedPlatformId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(SOCIAL_PLATFORMS[0].id);
    const [generatedVCard, setGeneratedVCard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [logoDataUrl, setLogoDataUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('/qrcard-logo.png');
    const qrContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleInputChange = (fieldName, fieldValue)=>{
        setFormValues((prev)=>({
                ...prev,
                [fieldName]: fieldValue
            }));
    };
    const handleAddSocialLink = ()=>{
        const newEntry = {
            id: `${selectedPlatformId}-${Date.now()}`,
            platformId: selectedPlatformId,
            url: ''
        };
        setFormValues((prev)=>({
                ...prev,
                socialLinks: [
                    ...prev.socialLinks,
                    newEntry
                ]
            }));
    };
    const handleRemoveSocialLink = (entryId)=>{
        setFormValues((prev)=>({
                ...prev,
                socialLinks: prev.socialLinks.filter((e)=>e.id !== entryId)
            }));
    };
    const handleSocialLinkUrlChange = (entryId, url)=>{
        setFormValues((prev)=>({
                ...prev,
                socialLinks: prev.socialLinks.map((e)=>e.id === entryId ? {
                        ...e,
                        url
                    } : e)
            }));
    };
    const hasGeneratedVCard = generatedVCard.length > 0;
    const handleLogoUpload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HomePage.useCallback[handleLogoUpload]": (event)=>{
            const file = event.target.files?.[0];
            if (!file || !file.type.startsWith('image/')) return;
            const reader = new FileReader();
            reader.onload = ({
                "HomePage.useCallback[handleLogoUpload]": ()=>setLogoDataUrl(reader.result)
            })["HomePage.useCallback[handleLogoUpload]"];
            reader.readAsDataURL(file);
        }
    }["HomePage.useCallback[handleLogoUpload]"], []);
    const handleRemoveLogo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HomePage.useCallback[handleRemoveLogo]": ()=>{
            setLogoDataUrl(null);
        }
    }["HomePage.useCallback[handleRemoveLogo]"], []);
    const handleDownloadQR = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HomePage.useCallback[handleDownloadQR]": async ()=>{
            const el = qrContainerRef.current;
            if (!el || !hasGeneratedVCard) return;
            try {
                const canvas = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html2canvas$2f$dist$2f$html2canvas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(el, {
                    backgroundColor: '#020617',
                    scale: 2
                });
                const dataUrl = canvas.toDataURL('image/png');
                const anchor = document.createElement('a');
                anchor.href = dataUrl;
                anchor.download = 'qrcard-qr.png';
                anchor.click();
            } catch  {
                // fallback: open in new tab
                const svg = el.querySelector('svg');
                if (svg) {
                    const s = new XMLSerializer().serializeToString(svg);
                    const dataUrl = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(s)));
                    const anchor = document.createElement('a');
                    anchor.href = dataUrl;
                    anchor.download = 'qrcard-qr.svg';
                    anchor.click();
                }
            }
        }
    }["HomePage.useCallback[handleDownloadQR]"], [
        hasGeneratedVCard
    ]);
    const handleGenerateClick = ()=>{
        const vCardContent = buildVCardFromValues(formValues);
        setGeneratedVCard(vCardContent);
    };
    const handleDownloadVCard = ()=>{
        if (!generatedVCard) {
            return;
        }
        const fileBlob = new Blob([
            generatedVCard
        ], {
            type: 'text/vcard;charset=utf-8'
        });
        const url = URL.createObjectURL(fileBlob);
        const anchorElement = document.createElement('a');
        anchorElement.href = url;
        anchorElement.download = 'contact.vcf';
        anchorElement.click();
        URL.revokeObjectURL(url);
    };
    const vCardPreviewLines = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HomePage.useMemo[vCardPreviewLines]": ()=>generatedVCard ? generatedVCard.split('\n') : []
    }["HomePage.useMemo[vCardPreviewLines]"], [
        generatedVCard
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "flex min-h-screen items-center justify-center bg-slate-950 px-4 py-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-5xl rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl shadow-slate-900/60 backdrop-blur",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "mb-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-xl font-semibold tracking-tight text-slate-50 md:text-2xl",
                                    children: "QR VCF Oluşturucu"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 317,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-slate-400 md:text-base",
                                    children: "Kişisel ve sosyal medya bilgilerinle saniyeler içinde dijital kartvizit (vCard) oluştur"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 320,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 316,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "mt-2 inline-flex items-center gap-1 rounded-full border border-primary-500/40 bg-primary-500/10 px-3 py-1 text-xs font-medium text-primary-300 md:mt-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "h-2 w-2 rounded-full bg-emerald-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 326,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Üyelik yok, veriler tarayıcıda işlenir"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 325,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 315,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-xl border border-slate-800 bg-slate-900/60 p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "mb-3 text-sm font-semibold uppercase tracking-wide text-slate-400",
                                    children: "Bilgilerini Gir"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 333,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-4 text-xs text-slate-500",
                                    children: "Hiçbir alan zorunlu değildir. Boş bıraktığın alanlar vCard içinde hiç yer almayacak."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 336,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    className: "flex flex-col gap-4",
                                    onSubmit: (event)=>{
                                        event.preventDefault();
                                        handleGenerateClick();
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-4 md:grid-cols-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "firstName",
                                                            className: "text-xs font-medium text-slate-300",
                                                            children: "Ad"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 349,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            id: "firstName",
                                                            name: "firstName",
                                                            type: "text",
                                                            className: "h-9 rounded-md border border-slate-700 bg-slate-900 px-3 text-sm text-slate-50 outline-none ring-primary-500/40 placeholder:text-slate-500 focus:ring-2",
                                                            placeholder: "Umut",
                                                            value: formValues.firstName,
                                                            onChange: (event)=>handleInputChange('firstName', event.target.value)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 355,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 348,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "lastName",
                                                            className: "text-xs font-medium text-slate-300",
                                                            children: "Soyad"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 369,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            id: "lastName",
                                                            name: "lastName",
                                                            type: "text",
                                                            className: "h-9 rounded-md border border-slate-700 bg-slate-900 px-3 text-sm text-slate-50 outline-none ring-primary-500/40 placeholder:text-slate-500 focus:ring-2",
                                                            placeholder: "Yılmaz",
                                                            value: formValues.lastName,
                                                            onChange: (event)=>handleInputChange('lastName', event.target.value)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 375,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 368,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 347,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-4 md:grid-cols-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "phoneNumber",
                                                            className: "text-xs font-medium text-slate-300",
                                                            children: "Telefon"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 391,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    id: "phoneCountryCode",
                                                                    name: "phoneCountryCode",
                                                                    "aria-label": "Ülke alan kodu seç",
                                                                    className: "h-9 w-[140px] shrink-0 rounded-md border border-slate-700 bg-slate-900 px-2 text-sm text-slate-50 outline-none ring-primary-500/40 focus:ring-2",
                                                                    value: formValues.phoneCountryCode,
                                                                    onChange: (event)=>handleInputChange('phoneCountryCode', event.target.value),
                                                                    children: PHONE_COUNTRY_CODES.map(({ code, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: code,
                                                                            children: label
                                                                        }, `${code}-${label}`, false, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 409,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 398,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    id: "phoneNumber",
                                                                    name: "phoneNumber",
                                                                    type: "tel",
                                                                    inputMode: "tel",
                                                                    className: "min-w-0 flex-1 rounded-md border border-slate-700 bg-slate-900 px-3 text-sm text-slate-50 outline-none ring-primary-500/40 placeholder:text-slate-500 focus:ring-2",
                                                                    placeholder: "555 123 45 67",
                                                                    value: formValues.phoneNumber,
                                                                    onChange: (event)=>handleInputChange('phoneNumber', event.target.value)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 414,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 397,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 390,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "emailAddress",
                                                            className: "text-xs font-medium text-slate-300",
                                                            children: "E-posta"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 430,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            id: "emailAddress",
                                                            name: "emailAddress",
                                                            type: "email",
                                                            className: "h-9 rounded-md border border-slate-700 bg-slate-900 px-3 text-sm text-slate-50 outline-none ring-primary-500/40 placeholder:text-slate-500 focus:ring-2",
                                                            placeholder: "umut@example.com",
                                                            value: formValues.emailAddress,
                                                            onChange: (event)=>handleInputChange('emailAddress', event.target.value)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 436,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 429,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 389,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-4 md:grid-cols-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "title",
                                                            className: "text-xs font-medium text-slate-300",
                                                            children: "Unvan"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 452,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            id: "title",
                                                            name: "title",
                                                            type: "text",
                                                            className: "h-9 rounded-md border border-slate-700 bg-slate-900 px-3 text-sm text-slate-50 outline-none ring-primary-500/40 placeholder:text-slate-500 focus:ring-2",
                                                            placeholder: "Frontend Developer",
                                                            value: formValues.title,
                                                            onChange: (event)=>handleInputChange('title', event.target.value)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 458,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 451,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "company",
                                                            className: "text-xs font-medium text-slate-300",
                                                            children: "Şirket"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 472,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            id: "company",
                                                            name: "company",
                                                            type: "text",
                                                            className: "h-9 rounded-md border border-slate-700 bg-slate-900 px-3 text-sm text-slate-50 outline-none ring-primary-500/40 placeholder:text-slate-500 focus:ring-2",
                                                            placeholder: "Örn. QRCARD",
                                                            value: formValues.company,
                                                            onChange: (event)=>handleInputChange('company', event.target.value)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 478,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 471,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 450,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "socialPlatform",
                                                    className: "text-xs font-medium text-slate-300",
                                                    children: "Sosyal Medya & Bağlantılar"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 493,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            id: "socialPlatform",
                                                            name: "socialPlatform",
                                                            "aria-label": "Sosyal medya platformu seç",
                                                            className: "h-9 min-w-0 flex-1 rounded-md border border-slate-700 bg-slate-900 px-3 text-sm text-slate-50 outline-none ring-primary-500/40 focus:ring-2",
                                                            value: selectedPlatformId,
                                                            onChange: (event)=>setSelectedPlatformId(event.target.value),
                                                            children: SOCIAL_PLATFORMS.map((platform)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: platform.id,
                                                                    children: platform.label
                                                                }, platform.id, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 511,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 500,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            "aria-label": "Sosyal medya linki ekle",
                                                            tabIndex: 0,
                                                            className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-primary-500/50 bg-primary-500/20 text-lg font-medium text-primary-300 transition hover:bg-primary-500/30 focus:ring-2 focus:ring-primary-400/60",
                                                            onClick: handleAddSocialLink,
                                                            children: "+"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 516,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 499,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-2 flex flex-col gap-2",
                                                    children: formValues.socialLinks.map((entry)=>{
                                                        const platform = SOCIAL_PLATFORMS.find((p)=>p.id === entry.platformId);
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap items-center gap-2 rounded-md border border-slate-700 bg-slate-900/60 p-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-28 shrink-0 truncate text-xs font-medium text-slate-400",
                                                                    children: platform?.label ?? entry.platformId
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 534,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "url",
                                                                    className: "min-w-0 flex-1 rounded border border-slate-700 bg-slate-900 px-2 py-1.5 text-sm text-slate-50 outline-none ring-primary-500/40 placeholder:text-slate-500 focus:ring-2",
                                                                    placeholder: "https://...",
                                                                    value: entry.url,
                                                                    onChange: (event)=>handleSocialLinkUrlChange(entry.id, event.target.value)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 537,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    "aria-label": "Bu linki kaldır",
                                                                    tabIndex: 0,
                                                                    className: "flex h-7 w-7 shrink-0 items-center justify-center rounded text-slate-400 transition hover:bg-slate-700 hover:text-red-400",
                                                                    onClick: ()=>handleRemoveSocialLink(entry.id),
                                                                    children: "×"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 546,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, entry.id, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 530,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0));
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 526,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 492,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 flex flex-wrap items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    className: "inline-flex items-center justify-center rounded-md bg-primary-500 px-4 py-2 text-sm font-medium text-white shadow-sm outline-none ring-primary-400/60 transition hover:bg-primary-600 focus:ring-2",
                                                    "aria-label": "Girilen bilgilerle vCard QR kodu oluştur",
                                                    children: "Oluştur"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 562,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: "inline-flex items-center justify-center rounded-md border border-slate-600 px-4 py-2 text-sm font-medium text-slate-100 outline-none ring-primary-400/60 transition hover:bg-slate-800 focus:ring-2 disabled:cursor-not-allowed disabled:opacity-60",
                                                    "aria-label": "Oluşturulan vCard dosyasını indir",
                                                    onClick: handleDownloadVCard,
                                                    disabled: !hasGeneratedVCard,
                                                    children: ".vcf indir"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 570,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                !hasGeneratedVCard && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-500",
                                                    children: [
                                                        "Önce bilgilerini doldurup ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold text-slate-300",
                                                            children: "Oluştur"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 582,
                                                            columnNumber: 47
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " butonuna tıkla."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 581,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 561,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 340,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 332,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-4 rounded-xl border border-slate-800 bg-slate-900/60 p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "mb-3 text-sm font-semibold uppercase tracking-wide text-slate-400",
                                            children: "QR & Önizleme"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 591,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500",
                                            children: "Oluşturduğun vCard'ın QR kodu ve ham metni burada görünecek. QR kodu telefonla okuttuğunda kişi bilgileri rehbere kaydedilebilir."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 594,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 590,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-1 flex-col gap-4 md:flex-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-1 flex-col items-center gap-3 rounded-lg border border-slate-700 bg-slate-900/60 p-4",
                                            children: hasGeneratedVCard ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        ref: qrContainerRef,
                                                        className: "relative inline-flex items-center justify-center rounded-xl bg-white p-4 shadow-lg",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$qr$2d$code$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                value: generatedVCard,
                                                                size: 200,
                                                                level: "H",
                                                                bgColor: "#ffffff",
                                                                fgColor: "#0f172a"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 608,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            logoDataUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute inset-0 flex items-center justify-center",
                                                                style: {
                                                                    pointerEvents: 'none'
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-md ring-2 ring-slate-200",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        src: logoDataUrl,
                                                                        alt: "",
                                                                        className: "h-10 w-10 object-contain"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 621,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 620,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 616,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 604,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap items-center justify-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "inline-flex cursor-pointer items-center gap-2 rounded-md border border-slate-600 px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:bg-slate-800",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: logoDataUrl ? 'Logo değiştir' : 'Logo ekle'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 632,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "file",
                                                                        accept: "image/*",
                                                                        className: "sr-only",
                                                                        onChange: handleLogoUpload
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 633,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 631,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            logoDataUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                className: "rounded-md border border-slate-600 px-3 py-1.5 text-xs font-medium text-slate-400 transition hover:bg-slate-800 hover:text-red-400",
                                                                onClick: handleRemoveLogo,
                                                                children: "Logoyu kaldır"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 641,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                className: "rounded-md bg-primary-500/20 px-3 py-1.5 text-xs font-medium text-primary-300 transition hover:bg-primary-500/30",
                                                                onClick: handleDownloadQR,
                                                                "aria-label": "QR kodunu PNG olarak indir",
                                                                children: "QR indir (PNG)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 649,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 630,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-md border border-slate-700 bg-slate-950/60 px-3 py-2 text-center text-xs text-slate-500",
                                                        title: "Bu QR vCard verisi taşır; taramada sunucuya istek gönderilmez. Tarama sayısını takip etmek için URL tabanlı bir yönlendirme hizmeti gerekir.",
                                                        children: "Taranma sayısı: — (sunucu gerektirir)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 658,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-slate-500",
                                                children: [
                                                    "Henüz QR kod oluşturulmadı. Formu doldurup ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold text-slate-300",
                                                        children: "Oluştur"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 667,
                                                        columnNumber: 64
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    ' ',
                                                    "butonuna tıkladığında burada görünecek."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 666,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 601,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 rounded-lg border border-slate-700 bg-slate-950/60 p-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-2 text-xs font-medium text-slate-400",
                                                    children: "vCard Önizleme"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 674,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-40 overflow-auto rounded border border-slate-800 bg-slate-950 p-2 text-[11px] font-mono leading-relaxed text-slate-300",
                                                    children: hasGeneratedVCard ? vCardPreviewLines.map((line)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: line
                                                        }, line, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 680,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-600",
                                                        children: "vCard metni burada satır satır görünecek."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 683,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 677,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 673,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 600,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 589,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 331,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 314,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 313,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(HomePage, "4mf1/hPj7RcjFz3Fz61PSsbgIDA=");
_c = HomePage;
const __TURBOPACK__default__export__ = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_page_tsx_b4090435._.js.map