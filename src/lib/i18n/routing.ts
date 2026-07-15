// Pure routing decisions for the locale proxy and language toggle.
// Indonesian is canonical at root URLs; English lives under /en.

const isEnPath = (p: string) => p === "/en" || p.startsWith("/en/");
const isIdPath = (p: string) => p === "/id" || p.startsWith("/id/");

export function resolveLocaleRouting(
  pathname: string
):
  | { action: "passthrough" }
  | { action: "redirect"; target: string }
  | { action: "rewrite"; target: string } {
  if (isEnPath(pathname)) return { action: "passthrough" };
  if (isIdPath(pathname)) {
    return { action: "redirect", target: pathname.slice(3) || "/" };
  }
  return { action: "rewrite", target: `/id${pathname === "/" ? "" : pathname}` };
}

export function toggleHref(pathname: string): string {
  if (isEnPath(pathname)) return pathname.slice(3) || "/";
  return pathname === "/" ? "/en" : `/en${pathname}`;
}
