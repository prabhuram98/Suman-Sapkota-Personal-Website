# Personal Website — GitHub Pages

A polished, responsive personal website built with plain HTML, CSS and JavaScript. It includes:

- Responsive layout for phone, tablet and desktop
- Your four supplied travel/personal photos
- Animated sections and image lightbox
- About section
- Gallery
- Contact form ready for Formspree
- Social links
- No build step — perfect for GitHub Pages

## 1. Personalize it

Open `script.js` and change:

```js
const PERSON = {
  name: "YOUR NAME",
  initials: "YN",
  email: "YOUR.EMAIL@example.com",
  linkedin: "https://www.linkedin.com/in/YOUR-USERNAME/",
  instagram: "https://www.instagram.com/YOUR-USERNAME/",
  github: "https://github.com/YOUR-USERNAME/"
};
```

You can also edit the text in `index.html` if you want to change the About or hero copy.

## 2. Activate the contact form

GitHub Pages can host the form UI, but it does not run server-side code.

The included form is prepared for **Formspree**:

1. Go to https://formspree.io/
2. Create an account and a new form.
3. Copy your form endpoint. It looks like:
   `https://formspree.io/f/xxxxxxxx`
4. In `index.html`, find:
   `action="YOUR_FORMSPREE_ENDPOINT"`
5. Replace it with your real Formspree endpoint.

After that, messages submitted through the website will be delivered through Formspree.

## 3. Test locally

You can simply open `index.html` in a browser.

For a more accurate local test, run a tiny local server from this folder:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000

## 4. Put it on GitHub Pages

### Easiest method

1. Create a new GitHub repository, e.g. `my-website`.
2. Upload all files and folders from this project.
3. Push to the `main` branch.
4. On GitHub, open:
   **Settings → Pages**
5. Under **Build and deployment**, select:
   **Deploy from a branch**
6. Choose:
   **main / root**
7. Save.
8. GitHub will give you a public URL.

### Optional custom domain

If you own a domain, you can add it under the same GitHub Pages settings and then point your domain's DNS records to GitHub.

## Project structure

```text
personal-website/
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    └── photos/
        ├── photo-1.webp
        ├── photo-2.webp
        ├── photo-3.webp
        └── photo-4.webp
```

## Design

The site uses a warm editorial style: large serif typography, generous whitespace, subtle motion, a lime accent and full-bleed photography. It is intentionally framework-free so it stays fast and easy to maintain.
