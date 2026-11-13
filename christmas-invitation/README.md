# Christmas Party Invitation (digital product)

Animated, single-file Christmas invitation with a no-code editor.

- `index.html` — the invitation. All buyer data is in the `CONFIG` block. Sample data included.
- `editor.html` — visual editor with live preview; downloads a finished `index.html` to publish with Canva.
- `INSTRUCTIONS.md` — buyer guide (editor, publish with Canva, sharing).
- `preview.jpg` — sample link-preview image.
- `tools/sync-editor.js` — seller only. `editor.html` carries a copy of `index.html` so it works by double-click.
  After editing `index.html`, run `node tools/sync-editor.js`. Do not ship `tools/` or this README to buyers.

Listing screenshots: `index.html?preview=card` skips the envelope, `?theme=elegant` / `?theme=cozy` force a theme,
`?guest=The+Smith+Family` shows a personal link.

Note: `?guest=`, `?theme=` and `?preview=card` do not work when the invitation is published with Canva
(Canva does not pass the link parameters to the page), so the buyer guide and listing do not mention them.
