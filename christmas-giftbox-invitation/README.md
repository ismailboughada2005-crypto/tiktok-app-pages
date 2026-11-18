# Christmas Gift Box Invitation (digital product)

Animated, single-file Christmas invitation with a no-code editor and 5 themes. The guest taps a wrapped gift box, the lid flies off and the card rises out.
This is a separate product from `christmas-invitation/` (envelope opening, 3 themes).

- `index.html` — the invitation. All buyer data is in the `CONFIG` block. Sample data included.
- `editor.html` — visual editor with live preview; downloads a finished `index.html` to publish with Canva.
- `INSTRUCTIONS.md` — buyer guide. Shipped as `INSTRUCTIONS.pdf`.
- `tools/sync-editor.js` — seller only. After editing `index.html`, run `node tools/sync-editor.js`. Do not ship `tools/` or this README.
- `dist/Christmas-Gift-Box-Invitation.zip` — the file to upload to Etsy (index.html, editor.html, INSTRUCTIONS.pdf).

Themes: `velvet` (Red Velvet), `frost` (Winter Frost), `gingerbread` (Gingerbread), `evergreen` (Evergreen), `pink` (Pink Christmas).

Listing screenshots: `index.html?preview=card` skips the opening and `?theme=frost` (etc.) forces a theme.
These link parameters do not work once the invitation is published with Canva.
