<!-- .github/copilot-instructions.md - guidance for AI coding agents -->
# Copilot instructions for this repository

Purpose
- Help AI agents become productive quickly in this small Node.js tutorial repo.

Big picture
- This workspace is a set of Node.js learning examples under `01-fundamentos`.
- Primary files: `01-fundamentos/app.js`, `01-fundamentos/app2.js`, and `01-fundamentos/Readme.md`.
- Code is minimal tutorial code (CommonJS `require`, sync file I/O) rather than a production app.

Run / debug
- No `package.json` or test runner present. Use plain Node to run examples:
  - `node 01-fundamentos/app.js`
  - `node 01-fundamentos/app2.js`
- `app2.js` reads `Readme.md` with `fs.readFileSync('Readme.md','utf-8')` — keep filename casing and relative location when editing.

Project-specific conventions and patterns
- Uses CommonJS modules (`require`) not ES modules. Keep new files consistent with CommonJS unless explicitly modernizing the whole repo.
- Files are tutorial snippets: prefer very small, focused changes and preserve Spanish inline comments (e.g., `//imprimir mensaje`).
- Synchronous file APIs appear in examples; do not convert to async unless the user asks for modernization.

Integration points & external dependencies
- No external packages are declared. If you add dependencies, also add a `package.json` and document the `node` engine.

Editing and PR guidance for AI agents
- Make minimal diffs that preserve the learning intent of examples.
- When renaming files, update any relative `fs` reads (see `app2.js`).
- Avoid adding build tooling unless requested. If adding, include `package.json` and a short README section with run commands.

Examples (use concrete edits)
- To change the message in `app.js`, edit the `message` constant and keep the `console.log` call.
- To demonstrate async I/O without removing the tutorial value, add a new file `01-fundamentos/app2-async.js` that uses `fs.promises.readFile` rather than editing `app2.js` in-place.

When merging existing instructions
- If `.github/copilot-instructions.md` already exists, merge these bullets preserving any repository-specific rules already present.

If anything in these notes is unclear, ask the maintainer which tutorial outcome they expect (preserve synchronous examples or modernize to async/ESM).
