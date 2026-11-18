#!/usr/bin/env node
/* SELLER TOOL (buyers never need this).
   editor.html carries a copy of index.html inside it, so it works by double-click with no server.
   After you change index.html, run:   node tools/sync-editor.js
   to refresh that copy. */
const fs = require("fs"), path = require("path");
const dir = path.join(__dirname, "..");
const tpl = fs.readFileSync(path.join(dir, "index.html"));
const file = path.join(dir, "editor.html");
const html = fs.readFileSync(file, "utf8");
const re = /\/\*TPL:START\*\/[\s\S]*?\/\*TPL:END\*\//;
if (!re.test(html)) throw new Error("Template markers not found in editor.html");
fs.writeFileSync(file, html.replace(re, () => "/*TPL:START*/" + tpl.toString("base64") + "/*TPL:END*/"));
console.log("editor.html updated with index.html (" + tpl.length + " bytes)");
