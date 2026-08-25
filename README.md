# Responsive Internship Board

A beginner-friendly, framework-free internship listing interface 

## Live Demo

Replace this placeholder with your deployed preview URL:

`https://YOUR-DEPLOYED-URL.example`

## Repository

Replace this placeholder with your public GitHub repository URL:

`https://github.com/YOUR-USERNAME/responsive-internship-board`

## Features

- Semantic HTML5 structure
- Responsive layout for mobile, tablet, and desktop
- Vanilla JavaScript DOM rendering
- Search across internship title, company, domain, location, type, duration, and description
- Domain filtering generated from the internship data
- Empty-results state
- Error state
- Accessible form labels
- Skip-to-content link
- Keyboard-friendly native controls
- Visible keyboard focus indicators
- Screen-reader-friendly live result count
- No CSS or JavaScript framework

## Project Structure

```text
responsive-internship-board/
├── index.html
├── styles.css
├── app.js
└── README.md
```

## Run Locally

No build tools are required.

1. Download or clone the repository.
2. Open `index.html` in a browser.

For a local server, you can also use VS Code Live Server or any simple static HTTP server.

## Responsive Testing Checklist

- [ ] Test at mobile width
- [ ] Test at tablet width
- [ ] Test at desktop width
- [ ] Test search with a matching keyword
- [ ] Test search with no results
- [ ] Test every domain filter
- [ ] Test Clear filters
- [ ] Navigate through controls using Tab
- [ ] Verify visible focus states
- [ ] Test the Skip to main content link
- [ ] Check the result count announcement
- [ ] Confirm cards remain readable at narrow widths

## README Screenshots

Add screenshots after deploying the project. Suggested files:

```text
screenshots/
├── desktop.png
├── tablet.png
└── mobile.png
```

Then add them here:

```md
## Screenshots

### Desktop
![Desktop screenshot](screenshots/desktop.png)

### Tablet
![Tablet screenshot](screenshots/tablet.png)

### Mobile
![Mobile screenshot](screenshots/mobile.png)
```

## Internship Data

The cards in this demo are fictional sample records created for the interface. They are stored in `app.js` and rendered into the DOM at runtime.

## Task 02 Acceptance Checklist

- [x] Plan page structure
- [x] Create reusable internship card data
- [x] Build semantic HTML
- [x] Build responsive CSS without a framework
- [x] Render cards through JavaScript
- [x] Add search
- [x] Add domain filter
- [x] Add empty state
- [x] Add error state
- [x] Add keyboard-accessible controls
- [x] Add form labels
- [ ] Deploy preview
- [ ] Add public GitHub repository URL
- [ ] Add README screenshots