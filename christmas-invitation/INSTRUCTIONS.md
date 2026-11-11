# Your Christmas Invitation: step by step

No coding needed. You fill in a form, download your invitation, and put it online for free. It takes about 10 minutes.

**What is in your download**

| File | What it is |
| --- | --- |
| `editor.html` | The editor. **Start here.** |
| `index.html` | The invitation itself, with sample details (the editor makes your own copy) |
| `preview.jpg` | Sample picture for link previews |
| `INSTRUCTIONS.md` | This guide |

---

## Step 1: Open the editor

1. Use a computer (laptop or desktop) for this part.
2. Double-click **`editor.html`**. It opens in your web browser (Chrome, Safari, Edge or Firefox).
3. Nothing is uploaded anywhere. Everything stays on your computer.

## Step 2: Fill in your details

Work down the numbered boxes on the left. Your invitation updates in the phone preview as you type.

- **Style & occasion**: pick Classic, Elegant or Cozy, and the kind of party.
- **Your photo**: press **Choose a photo**. It is resized for you.
- **RSVP**: choose where replies go: your WhatsApp, your email, or your own form link (for example a Google Form).
- Every optional section (menu, schedule, Secret Santa and so on) has a **Show** switch. Turn off what you do not need.
- Above the preview, **Envelope** shows the opening animation and **As "Sarah"** shows how a personal link looks.

Your work saves itself in the browser. **Save draft** keeps a copy you can return to with **Load draft**. **Export draft file** makes a backup file you can **Import** later or on another computer.

## Step 3: Download

1. Press the red **Download my invitation** button.
2. A file called **`my-invitation.zip`** lands in your Downloads folder.
3. Open it:
   - **Mac**: double-click the zip.
   - **Windows**: right-click the zip, choose **Extract All**, then **Extract**.
4. You now have a folder called **`my-invitation`** with two files inside: `index.html` and `preview.jpg`.

## Step 4: Put it online with Netlify Drop (free)

1. Go to **https://app.netlify.com/drop**
2. Drag the **`my-invitation` folder** onto the page. Wait a few seconds.
3. Netlify shows your link. It looks like `https://jolly-elf-12345.netlify.app`.
4. **Create the free account when Netlify asks.** Without an account the invitation is removed after a short time.
5. Optional, for a nicer link: in Netlify open your site, find **Change site name** (under Site configuration), and type something like `hartwell-christmas`. Your link becomes `https://hartwell-christmas.netlify.app`.

## Step 5: Turn on the picture in link previews

WhatsApp and iMessage only show your preview picture once the invitation knows its own link.

1. Copy your link from Netlify.
2. In the editor open **12 · Link preview** and paste it into **Your invitation link**.
3. Press **Download my invitation** again and unzip it as in Step 3.
4. In Netlify open your site, click **Deploys**, and drag the new folder onto the box at the bottom of that page.

Your link stays the same. Tip: WhatsApp remembers old previews for a while. If the picture does not show at once, add `?v=2` to the end of the link when you share it.

## Step 6: Share

Paste your link into WhatsApp, a text message, an email or anywhere else. Guests tap it, the envelope opens, and they can reply from the RSVP section.

---

## Personal links for each guest

Each guest can see their own name on the envelope ("Dear Sarah").

**The easy way**

1. In the editor open **Personal links for each guest**.
2. Paste your invitation link.
3. Type your guest names, one per line.
4. Press **Make the links**, then **Copy** next to each name and send that link to that guest.

**By hand**

Add `?guest=` and the name to the end of your link. Use `+` where there is a space.

```
https://hartwell-christmas.netlify.app/?guest=Sarah
https://hartwell-christmas.netlify.app/?guest=The+Smith+Family
```

The name also fills in the RSVP form for the guest.

---

## Changing something later

1. Open `editor.html` again. Your draft is remembered.
2. Make your changes and download again.
3. In Netlify: your site, then **Deploys**, then drag the new folder onto the box.

## Questions

**Where do the RSVPs go?**
There is no account or database. When a guest presses send, their reply opens as a ready-written WhatsApp message or email addressed to you, and they press send. With "my own form link" guests are taken to your form.

**Can I use my own music?**
Yes. In **11 · Music & sounds** choose **My own MP3 link** and paste a link that ends in `.mp3`. Make sure you have the right to use the song. The built-in music box melodies are traditional carols and free to use. Music only plays after a guest taps the ♪ button.

**The countdown shows the wrong time.**
The invitation shows the date and time exactly as you typed them, on every guest's phone.

**Handy extras for your link**

- `?preview=card` skips the envelope and goes straight to the invitation.
- `?theme=classic`, `?theme=elegant` or `?theme=cozy` shows another look without changing your file.
- Combine them with `&`, for example `?guest=Sarah&theme=elegant`.

**I am comfortable with code. Can I edit the file directly?**
Yes. Open `index.html` in a text editor. All your details are in the `CONFIG` block near the bottom of the file, with a note on every line.
