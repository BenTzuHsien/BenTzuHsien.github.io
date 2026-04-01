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
* **Purpose:** The `title:` variable under "Site Settings" controls the short name that appears on the browser tab and in Google Search results.

**The Top-Left Corner Greeting**
* **Files:** `_config.yml` and `_includes/masthead.html`
* **Purpose:** The friendly greeting in the top-left corner is separated from the browser tab title using a custom variable.
* **How to update:** Change the `masthead_greeting:` variable in `_config.yml`. The `_includes/masthead.html` file automatically pulls this text using the `{{ site.masthead_greeting }}` liquid tag.

### Pages Content

**Site Pages (Homepage, Publications, CV, etc.)**
* **Folder:** `_pages/`
* **Purpose:** All the Markdown files that control the main content of the website's pages are located in this folder (e.g., `about.md` for the homepage, `publications.md` for the publications list).

### Styling & Assets

**Profile Picture & Images**
* **Folder:** `images/`
* **Purpose:** All static images (like `profile.png` or `teaser.png`) should be placed here. They are referenced in markdown files using the path `/images/[filename]`.

**Theme CSS/Colors**
* **File:** `_sass/` folder
* **Purpose:** While inline HTML styling (`style="..."`) is used for the homepage and publication buttons to override defaults safely, global color or font changes require editing the SCSS files here.

### Jekyll Cheat Sheet

* **Starting the local server:** `bundle exec jekyll serve -l -H localhost`
* **Rebuilding:** Most changes to `.md` or `.html` files update instantly. However, changes to `_config.yml` or `_data/navigation.yml` require you to stop and restart the server before they take effect.