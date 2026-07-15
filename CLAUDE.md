@AGENTS.md
# Project Rules

## Git
- NEVER perform any git actions (add, commit, push, branch, merge, stash, etc.) — not even as steps in an implementation plan — unless developer explicitly asks for it himself.
- The developer manages git. Claude's job ends at the code changes.

## Build & Verification
- Do NOT run builds (`npm run build`, `vite build`, etc.) to verify that code compiles.
- Instead, check for errors using the linter (e.g. `npm run lint` / ESLint) and TypeScript diagnostics.

## Humanizer
- Use /humanizer skill for every copy writing text