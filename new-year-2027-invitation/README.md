# New Year's Eve 2027 Party Invitation (digital product)

Animated, single-file New Year's Eve invitation with a no-code editor. Built from `../christmas-invitation`
with the same structure; only the theme and content changed.

- `index.html`: the invitation. All buyer data is in the `CONFIG` block. Sample data included.
  One theme, `gold` (black #0B0B0F, gold #D4AF37, light gold #F5E6B8, white text). Fireworks, stars, clock,
  champagne glasses and confetti are drawn in code (no image files).
- `editor.html`: visual editor with live preview; downloads a finished `index.html` to publish with Canva.
- `INSTRUCTIONS.md`: buyer guide (shipped as `INSTRUCTIONS.pdf`).
- `tools/sync-editor.js`: seller only. `editor.html` carries a copy of `index.html` so it works by double-click.
  After editing `index.html`, run `node tools/sync-editor.js`. Do not ship `tools/` or this README to buyers.

Music: built-in Auld Lang Syne music box. To use your own track, set `music.source` to `"mp3"` and paste the
link in `music.mp3Url` (see the NEW YEAR TRACK PLACEHOLDER comment in the CONFIG block), or use the editor.

Listing screenshots: `index.html?preview=card` skips the envelope.
URL options (`?preview=`, `?guest=`) do not work once published with Canva, so the buyer guide does not mention them.
