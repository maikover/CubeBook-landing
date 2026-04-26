(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push(["chunks/[root-of-the-server]__11vei~3._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/Downloads/Desarrollo/reader/web landing/src/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "middleware",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desarrollo$2f$reader$2f$web__landing$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/Desarrollo/reader/web landing/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desarrollo$2f$reader$2f$web__landing$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desarrollo/reader/web landing/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware-edge] (ecmascript)");
;
const locales = [
    'en',
    'es'
];
const defaultLocale = 'en';
function middleware(request) {
    const pathname = request.nextUrl.pathname;
    // Check if pathname already includes a locale
    const pathnameHasLocale = locales.some((locale)=>pathname.startsWith(`/${locale}`) || pathname === `/${locale}`);
    // Get locale from cookie if available
    const localeCookie = request.cookies.get('NEXT_LOCALE')?.value;
    const acceptLanguage = request.headers.get('accept-language') || '';
    // Determine the preferred locale
    let locale = localeCookie;
    if (!locale || !locales.includes(locale)) {
        locale = detectPreferredLocale(acceptLanguage);
    }
    // If pathname doesn't have locale, redirect to locale-prefixed URL
    if (!pathnameHasLocale && pathname !== '/favicon.ico') {
        const localePath = `/${locale}${pathname}`;
        const url = request.nextUrl.clone();
        url.pathname = localePath;
        const response = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desarrollo$2f$reader$2f$web__landing$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(url);
        // Set cookie to remember the user's language preference
        response.cookies.set('NEXT_LOCALE', locale, {
            maxAge: 60 * 60 * 24 * 30,
            path: '/',
            sameSite: 'lax'
        });
        return response;
    }
    // If the pathname has a valid locale, ensure cookie is set
    if (pathnameHasLocale) {
        const pathLocale = locales.find((loc)=>pathname.startsWith(`/${loc}`));
        if (pathLocale) {
            const response = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desarrollo$2f$reader$2f$web__landing$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
            response.cookies.set('NEXT_LOCALE', pathLocale, {
                maxAge: 60 * 60 * 24 * 30,
                path: '/',
                sameSite: 'lax'
            });
            return response;
        }
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desarrollo$2f$reader$2f$web__landing$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
}
function detectPreferredLocale(acceptLanguage) {
    if (!acceptLanguage) return defaultLocale;
    const languages = acceptLanguage.split(',').map((lang)=>{
        const [code, q] = lang.trim().split(';');
        return {
            code: code.toLowerCase().split('-')[0],
            quality: q ? parseFloat(q.replace('q=', '')) : 1.0
        };
    }).sort((a, b)=>b.quality - a.quality);
    for (const lang of languages){
        if (locales.includes(lang.code)) {
            return lang.code;
        }
    }
    return defaultLocale;
}
const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|svg|gif|webp|ico)$|_next|images).*)'
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__11vei~3._.js.map