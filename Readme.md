2048 Game — Electron App 🧠🔢
This is a desktop version of the classic 2048 game, built using HTML, CSS, and JavaScript, and wrapped with Electron to run as a native desktop application. Developed with the help of Cursor AI, this project serves as both a fun game and a showcase of how web apps can be packaged as desktop apps.

📁 Project Structure

2048/
├── dist/                  # Auto-generated build folder (after packaging)
├── node_modules/          # Installed dependencies
├── www/                   # Contains HTML, CSS, images (UI assets)
│   └── images/
│       └── 2048.ico       # Icon for packaging (must be .ico format)
├── main.js                # Electron main process script
├── package.json           # Project metadata and scripts
├── package-lock.json      # Locked dependency versions
└── Readme.md              # Project documentation


🛠️ Installation & Setup

Step 1: Clone the Repository
git clone https://github.com/sadiyabhokare/2048-game.git
cd 2048-game

Step 2: Install Dependencies
npm install

Step 3: Run the App (Development Mode)
npm start

📦 Package the App for Windows
To generate a distributable Windows app:

Ensure your icon is a valid .ico file: Place it in the www/images/ directory and name it 2048.ico.

Run the following command to package the app:
npm run package

This will create the packaged version in the dist/ folder.

🔧 Available Scripts
npm start — Launch the Electron app in development mode.

npm run package — Package the app for Windows using electron-packager.

🎮 Features
Fully functional 2048 game with arrow key controls.

Clean and responsive user interface.

Cross-platform compatible (Electron-powered).

Easily extendable and customizable with themes.

📄 License
This project is licensed under the MIT License.

👩‍💻 Developer
Sadiya Bhokare
Made with ❤️ using Cursor AI

📸 Preview
(If you have a screenshot, include it here)

🙋‍♀️ Contributions
If you'd like to improve this game, feel free to fork the repo and create a pull request!

