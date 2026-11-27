# Thanksgiving Invitation (digital product)

Animated, single-file Thanksgiving invitation with a no-code editor and 3 themes. The guest unties a ribbon and a gift-wrapped card opens.

- `index.html` — the invitation. All buyer data is in the `CONFIG` block. Sample data included.
- `editor.html` — visual editor with live preview; downloads a finished `index.html` to publish with Canva.
- `INSTRUCTIONS.md` — buyer guide. Shipped as `INSTRUCTIONS.pdf`.
- `tools/sync-editor.js` — seller only. After editing `index.html`, run `node tools/sync-editor.js`. Do not ship `tools/` or this README.
- `dist/Thanksgiving-Invitation.zip` — the file to upload to Etsy (index.html, editor.html, INSTRUCTIONS.pdf).

Themes: `harvest` (Harvest Night), `rustic` (Rustic Farmhouse), `sage` (Sage & Terracotta).

Event types: Thanksgiving Dinner, Friendsgiving, Thanksgiving Potluck, Thanksgiving Brunch, Office Thanksgiving, Family Thanksgiving.

Listing screenshots: `index.html?preview=card` skips the opening and `?theme=rustic` (etc.) forces a theme.
These link parameters do not work once the invitation is published with Canva.
