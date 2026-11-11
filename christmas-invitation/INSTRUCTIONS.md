# Your Christmas Invitation: step by step

No coding needed. You fill in a form, download your invitation, and put it online with a free Canva account. It takes about 10 minutes.

**What is in your download**

| File | What it is |
| --- | --- |
| `editor.html` | The editor. **Start here.** |
| `index.html` | The invitation itself, with sample details (the editor makes your own copy) |
| `preview.jpg` | Sample picture for link previews (only used with Netlify) |
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

Press the red **Download my invitation** button. A file called **`index.html`** lands in your Downloads folder.

## Step 4: Put it online with Canva

1. Go to **https://www.canva.com** and sign in. A free account is fine.
2. Drag **`index.html`** from your Downloads folder onto the Canva home page. It opens as a new design showing your invitation.
3. Click **Share** at the top right, then publish it as a website.
4. Canva gives you your link. Copy it.
5. Open the link on your phone and tap through the envelope once to check everything looks right.

## Step 5: Share

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
https://your-invitation-link/?guest=Sarah
https://your-invitation-link/?guest=The+Smith+Family
```

The name also fills in the RSVP form for the guest. **Open one personal link on your phone before sending them all**, to check the name appears.

---

## Changing something later

1. Open `editor.html` again. Your draft is remembered.
2. Make your changes and press **Download my invitation** again.
3. Drag the new `index.html` into Canva and publish it the same way. If the link changes, send guests the new one.

---

## Prefer Netlify instead of Canva?

Netlify is another free way to put the invitation online. It also shows your preview picture when the link is shared.

1. In the editor press **Download zip folder (for Netlify)**.
2. Open the zip: on a Mac double-click it; on Windows right-click it, choose **Extract All**, then **Extract**. You now have a folder called **`my-invitation`**.
3. Go to **https://app.netlify.com/drop** and drag the **`my-invitation` folder** onto the page.
4. Netlify shows your link, like `https://jolly-elf-12345.netlify.app`. **Create the free account when Netlify asks**, so your invitation stays online.
5. For the preview picture: paste your Netlify link into **12 · Link preview → Your invitation link** in the editor, download the zip again, unzip it, then in Netlify open your site → **Deploys** and drag the new folder onto the box at the bottom.

---

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
