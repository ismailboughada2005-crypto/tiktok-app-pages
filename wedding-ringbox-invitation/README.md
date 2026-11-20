# Wedding Ring Box Invitation (digital product)

Animated, single-file wedding invitation with a no-code editor and 5 themes. The guest taps a velvet ring box, the lid opens, the ring sparkles and the card appears with falling rose petals.
This is a separate product from `wedding-invitation/` (envelope opening, burgundy/navy/olive).

- `index.html` — the invitation. All buyer data is in the `CONFIG` block. Sample data included.
- `editor.html` — visual editor with live preview; downloads a finished `index.html` to publish with Canva.
- `INSTRUCTIONS.md` — buyer guide. Shipped as `INSTRUCTIONS.pdf`.
- `tools/sync-editor.js` — seller only. After editing `index.html`, run `node tools/sync-editor.js`. Do not ship `tools/` or this README.
- `dist/Wedding-Ring-Box-Invitation.zip` — the file to upload to Etsy (index.html, editor.html, INSTRUCTIONS.pdf).

Themes: `ivory` (Ivory & Gold), `sage` (Sage Garden), `dusty` (Dusty Blue), `blush` (Blush Pink), `burgundy` (Burgundy).

Listing screenshots: `index.html?preview=card` skips the opening and `?theme=blush` (etc.) forces a theme.
These link parameters do not work once the invitation is published with Canva.
