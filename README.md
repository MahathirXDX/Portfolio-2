# CSE Student Portfolio

A modern, dark, glassmorphism portfolio site built with plain HTML, CSS, and JavaScript — no frameworks, no build step. Every section is rendered from JSON files, so you can update your portfolio just by editing data, never the page code.

## Files

```
index.html          the page structure (do not need to edit this to add content)
style.css            all styling
script.js             loads the JSON files and renders every section
profile.json        name, photo, roles, short intro
contact.json         email / github / linkedin / facebook
services.json        "what I can help with" cards
learning.json         "currently learning" timeline
skills.json           skills grouped by category
projects.json        project cards
achievements.json     certificates, contests, hackathons, open source, awards
```

## How to update your portfolio

You never need to touch `index.html`, `style.css`, or `script.js` for normal updates. Just edit the relevant JSON file and save.

### Add a new project
Open `projects.json` and add a new object to the array:

```json
{
  "title": "My New Project",
  "description": "One or two sentences about what it does.",
  "screenshot": "https://raw.githubusercontent.com/you/repo/main/preview.png",
  "technologies": ["HTML5", "CSS3", "JavaScript"],
  "github": "https://github.com/you/repo",
  "liveDemo": "https://you.github.io/repo",
  "date": "2026-07",
  "status": "completed"
}
```

- `status` can be `"completed"`, `"in-progress"`, or any short word — it's shown as a badge.
- `screenshot` accepts a normal image URL (e.g. a GitHub raw URL) **or** a Google Drive share link — the site converts Drive links automatically. To get a Drive link: right‑click the image in Drive → Share → "Anyone with the link" → copy the link and paste it as-is.
- Leave `liveDemo` as `""` if you don't have one yet — the button simply won't show.

### Add a new skill
Open `skills.json`. Pick an existing category (or add a new one — it will appear automatically) and add:

```json
{ "icon": "python", "name": "Django (basics)", "progress": 20 }
```

Available `icon` names: `python, javascript, c, java, html, css, git, github, terminal, database, users, book, clock, message, code, layout, globe, bug`. Using an unknown icon name falls back to a default icon, so nothing breaks.

### Update your learning progress
Open `learning.json` and adjust `progress` (0–100) and `status` (`"completed"`, `"in-progress"`, `"upcoming"`) on any item, or add a new item to the array.

### Add an achievement
Open `achievements.json` and add an object with a `category` (`Certificates`, `Competitions`, `Hackathons`, `Open Source`, `Awards`, or any new category you invent), `title`, `issuer`, `date`, and optional `link`.

### Update your profile or contact info
Edit `profile.json` and `contact.json` directly — every field maps to something on the page (hero photo, name, typed role list, intro paragraph, and the contact/footer links).

## Running it locally

Because the page loads JSON with `fetch()`, opening `index.html` directly from your file system (`file://`) will be blocked by the browser's security rules. Run a tiny local server from this folder instead:

```bash
# Python 3
python -m http.server 8000

# or Node
npx serve .
```

Then visit `http://localhost:8000`.

## Deploying to GitHub Pages

1. Create a new GitHub repository and push all files in this folder to the root (no subfolders needed).
2. Go to **Settings → Pages**.
3. Under **Source**, choose the `main` branch and `/ (root)` folder.
4. Save — your site will be live at `https://<your-username>.github.io/<repo-name>/` within a minute or two.
5. Any time you edit a JSON file and push, the live site updates automatically — no rebuild step.

## Notes

- All animations respect `prefers-reduced-motion` for accessibility.
- Images use `loading="lazy"` (except the hero photo) to keep the page fast.
- The "Last updated" text in the footer is generated automatically from the file's last-modified date.
- Replace `profile.json`'s `photo` field with your own image URL (GitHub raw link or Google Drive share link) to swap the hero photo.
