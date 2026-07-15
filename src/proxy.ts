import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { resolveLocaleRouting } from "@/lib/i18n/routing";

export function proxy(request: NextRequest) {
  const decision = resolveLocaleRouting(request.nextUrl.pathname);

  if (decision.action === "redirect") {
    const url = request.nextUrl.clone();
    url.pathname = decision.target;
    return NextResponse.redirect(url, 308);
  }

  if (decision.action === "rewrite") {
    const url = request.nextUrl.clone();
    url.pathname = decision.target;
    return NextResponse.rewrite(url);
  }

  // passthrough: /en/* is served as-is
}

export const config = {
  // Skip Next internals, API routes, and public files (anything with a dot).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
