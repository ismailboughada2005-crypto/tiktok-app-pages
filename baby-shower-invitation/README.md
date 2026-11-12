# Baby Shower Invitation Website (digital product)

Animated, single-file baby shower invitation with a no-code editor. Same structure as `../wedding-invitation`.

- `index.html`: the invitation. All buyer data is in the `CONFIG` block. Sample data included.
  Themes: `girl` (pink) and `boy` (blue). Teddy bear, balloons, bunting, flowers and the bow seal are drawn in code (no image files).
- `editor.html`: visual editor with live preview; downloads a finished `index.html` to publish with Canva.
- `INSTRUCTIONS.md`: buyer guide (shipped as `INSTRUCTIONS.pdf`).
- `tools/sync-editor.js`: seller only. After editing `index.html`, run `node tools/sync-editor.js`. Do not ship `tools/` or this README.

Listing screenshots: `index.html?preview=card` skips the envelope and `?theme=boy` forces a theme.
These URL options (and `?guest=`) do not work once published with Canva, so the buyer guide does not mention them.
