# Birthday Evite (digital product)

Animated, single-file birthday invitation with a no-code editor and 5 themes.

- `index.html` — the invitation. All buyer data is in the `CONFIG` block. Sample data included.
- `editor.html` — visual editor with live preview; downloads a finished `index.html` to publish with Canva.
- `INSTRUCTIONS.md` — buyer guide (editor, publish with Canva, sharing). Shipped as `INSTRUCTIONS.pdf`.
- `tools/sync-editor.js` — seller only. `editor.html` carries a copy of `index.html` so it works by double-click.
  After editing `index.html`, run `node tools/sync-editor.js`. Do not ship `tools/` or this README to buyers.
- `dist/Birthday-Evite.zip` — the file to upload to Etsy (index.html, editor.html, INSTRUCTIONS.pdf).
- `dist/etsy-listing/` — listing photos and videos.

Themes: `confetti` (Confetti Pop), `pastel` (Pastel Rainbow), `blue` (Blue Skies), `rosegold` (Rose Gold), `blackgold` (Black & Gold).

Event types: Birthday Party, Kids Birthday Party, First Birthday, Milestone Birthday, Surprise Party, Birthday Dinner.

Listing screenshots: `index.html?preview=card` skips the envelope and `?theme=pastel` (etc.) forces a theme.
These link parameters do not work once the invitation is published with Canva, so the buyer guide does not mention them.
