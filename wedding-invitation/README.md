# Wedding Invitation Website (digital product)

Animated, single-file wedding invitation with a no-code editor. Same structure as `../christmas-invitation`.

- `index.html`: the invitation. All buyer data is in the `CONFIG` block. Sample data included.
  Themes: `burgundy`, `navy`, `olive`. Flowers, envelope and placeholders are drawn in code (no image files).
- `editor.html`: visual editor with live preview; downloads a finished `index.html` to publish with Canva.
- `INSTRUCTIONS.md`: buyer guide (shipped as `INSTRUCTIONS.pdf`).
- `tools/sync-editor.js`: seller only. `editor.html` carries a copy of `index.html` so it works by double-click.
  After editing `index.html`, run `node tools/sync-editor.js`. Do not ship `tools/` or this README to buyers.

Listing screenshots: `index.html?preview=card` skips the envelope and `?theme=navy` / `?theme=olive` force a theme.
These URL options (and `?guest=`) do not work once published with Canva, so the buyer guide does not mention them.
