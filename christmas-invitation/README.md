# Christmas Party Invitation (digital product)

Animated, single-file Christmas invitation with a no-code editor.

- `index.html` — the invitation. All buyer data is in the `CONFIG` block. Sample data included.
- `editor.html` — visual editor with live preview; downloads a ready-to-host folder (zip) or just `index.html`.
- `INSTRUCTIONS.md` — buyer guide (editor, Netlify Drop, sharing, personal guest links).
- `preview.jpg` — sample link-preview image.
- `tools/sync-editor.js` — seller only. `editor.html` carries a copy of `index.html` so it works by double-click.
  After editing `index.html`, run `node tools/sync-editor.js`. Do not ship `tools/` or this README to buyers.

Listing screenshots: `index.html?preview=card` skips the envelope, `?theme=elegant` / `?theme=cozy` force a theme,
`?guest=The+Smith+Family` shows a personal link.
