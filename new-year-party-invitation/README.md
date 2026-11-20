# New Year Party Invitation (digital product)

Animated, single-file New Year's Eve invitation with a no-code editor and 5 themes. The guest taps a champagne bottle, the cork pops with bubbles and the card appears with fireworks.
This is a separate product from `new-year-2027-invitation/` (black & gold envelope, 3·2·1 countdown).

- `index.html` — the invitation. All buyer data is in the `CONFIG` block. Sample data included.
- `editor.html` — visual editor with live preview; downloads a finished `index.html` to publish with Canva.
- `INSTRUCTIONS.md` — buyer guide. Shipped as `INSTRUCTIONS.pdf`.
- `tools/sync-editor.js` — seller only. After editing `index.html`, run `node tools/sync-editor.js`. Do not ship `tools/` or this README.
- `dist/New-Year-Party-Invitation.zip` — the file to upload to Etsy (index.html, editor.html, INSTRUCTIONS.pdf).

Themes: `midnight` (Midnight Blue), `champagne` (Champagne Blush), `disco` (Disco Night), `neon` (Neon Glow), `emerald` (Emerald Gatsby).

Listing screenshots: `index.html?preview=card` skips the opening and `?theme=neon` (etc.) forces a theme.
These link parameters do not work once the invitation is published with Canva.
