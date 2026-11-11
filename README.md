# Tzu-Hsien (Ben) Lee - Personal Website Repository

This repository contains the source code for my personal academic portfolio, built using Jekyll and hosted on GitHub Pages. 

Live website: [https://bentzuhsien.github.io/](https://bentzuhsien.github.io/)

---

## Maintenance Guide

This section tracks where specific elements of the website are configured and updated. Because Jekyll generates many files automatically, use this as a reference for the core files that require manual editing.

### Navigation & Layout

**Top Navigation Bar (The Tabs)**
* **File:** `_data/navigation.yml`
* **Purpose:** Controls which links appear in the top header menu (e.g., Publications, CV, etc.). Add, remove, or reorder tabs here.

**The Browser Tab Title (Global Site Title)**
* **File:** `_config.yml`
* **Purpose:** The `title:` variable under "Basic Site Settings" controls the short name that appears on the browser tab and in Google Search results.

**The Top-Left Corner Greeting**
* **Files:** `_config.yml` and `_includes/masthead.html`
* **Purpose:** The friendly greeting in the top-left corner is separated from the browser tab title using a custom variable.
* **How to update:** Change the `masthead_greeting:` variable in `_config.yml`. The `_includes/masthead.html` file automatically pulls this text using the `{{ site.masthead_greeting }}` liquid tag.

### Pages Content

**Site Pages (Homepage, Experiences, Publications, CV, etc.)**
* **Folder:** `_pages/`
* **Purpose:** Each page's content lives here: `about.md` (homepage), `experiences.html`, `publications.html`, and `cv.md`. Files such as `talks.html`, `teaching.html`, and `markdown.md` are leftovers from the AcademicPages template.

### Styling & Assets

**Profile Picture & Images**
* **Folder:** `images/`
* **Purpose:** All static images (like `profile.png`) should be placed here. They are referenced in markdown files using the path `/images/[filename]`.

**Videos**
* **Folders:** `images/experience/` and `images/publication/`
* **Purpose:** Teaser videos for the Experiences and Publications pages. GitHub blocks any file over 100 MiB (and warns above 50 MiB), and the whole published site must stay under 1 GB.

**Favicon & Site Icons**
* **Folder:** `images/`
* **Purpose:** `icon_original.png` is the master image. `favicon.svg`, `favicon.ico`, and the PNG icons are made from it, and they are linked in `_includes/head/custom.html`.
* **Site name:** `images/manifest.json` sets the name shown when someone adds the site to a phone's home screen (`name` for the full name, `short_name` for the label under the icon).
> [!NOTE]
> When replacing icons, keep the same filenames. Then there is no need to edit `_includes/head/custom.html`.

**Theme CSS/Colors**
* **Folder:** `_sass/`
* **Purpose:** While inline HTML styling (`style="..."`) is used for the homepage and publication buttons to override defaults safely, global color or font changes require editing the SCSS files here.

### Jekyll Cheat Sheet

* **Starting the local server:** `bundle exec jekyll serve -l -H localhost`
* **Rebuilding:** Most changes to `.md` or `.html` files update instantly. However, changes to `_config.yml` or `_data/navigation.yml` require you to stop and restart the server before they take effect.