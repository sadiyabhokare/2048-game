# 🎮 2048 Game — Electron Desktop App

A sleek and responsive desktop version of the classic 2048 puzzle game. Built using **HTML**, **CSS**, and **JavaScript**, and powered by **Electron.js**. Developed with assistance from **Cursor AI**.

---

## 🚀 Features

- Classic 2048 puzzle gameplay
- Score and Best Score tracking with `localStorage`
- New Game functionality
- Fully responsive grid layout
- Packaged as a standalone Windows desktop app
- Touch support for swipes

---

## 📁 Project Structure

```

2048/
├── dist/                        # Output folder for packaged app
│   └── 2048Game-win32-x64/     # Windows build
├── node\_modules/               # Dependencies
├── www/                        # Frontend UI
│   ├── images/
│   │   ├── 2048.ico            # App icon for Windows packaging
│   │   └── 2048.png            # Icon
│   │   └── screenshot.png      # screenshot/ Preview
│   ├── index.html              # Game layout
│   ├── script.js               # Game logic
│   └── style.css               # Game styles
├── main.js                     # Electron main process
├── package.json                # App metadata and scripts
├── package-lock.json           # Dependency lock
├── LICENSE                     # MIT License
└── README.md                   # This file

````

---

## 🛠️ Getting Started

### Clone & Install

```bash
git clone https://github.com/sadiyabhokare/2048-game.git
cd 2048-game
npm install
````

### Run in Development

```bash
npm start
```

---

## 📦 Package for Windows

Ensure the icon is a valid `.ico` file:

```bash
npm run package
```

The final build will appear inside the `dist/` directory.

---

## 🎮 Controls

* Use **arrow keys** to move tiles
* **New Game** button resets the board (score retained)
* Game ends when no moves are left
* Touch gestures work on supported devices

---

## 📸 Adding a Screenshot

```markdown
## 🖼️ Preview

![Screenshot](./www/images/screenshot.png)


```

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👩‍💻 Author

**Sadiya Bhokare**
Built with ❤️ using [Cursor AI](https://www.cursor.so/)

