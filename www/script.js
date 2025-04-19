window.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("grid");
  const scoreDisplay = document.getElementById("score");
  const bestScoreDisplay = document.getElementById("best-score");
  const newGameBtn = document.getElementById("new-game");

  let boardData = [];
  let score = 0;
  let bestScore = localStorage.getItem("bestScore") || 0;
  let touchStartX = 0;
  let touchStartY = 0;

  bestScoreDisplay.textContent = bestScore;

  function initBoard() {
    // Clear the grid
    grid.innerHTML = "";
    boardData = [];
    
    // Create empty cells first
    for (let i = 0; i < 16; i++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      grid.appendChild(cell);
    }

    // Initialize the board data
    for (let i = 0; i < 4; i++) {
      boardData[i] = Array(4).fill(0);
    }

    // Add initial tiles
    addRandomTile();
    addRandomTile();
    updateBoard();
  }

  function addRandomTile() {
    const emptyTiles = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (boardData[i][j] === 0) {
          emptyTiles.push({ i, j });
        }
      }
    }
    if (emptyTiles.length > 0) {
      const { i, j } = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
      boardData[i][j] = Math.random() < 0.9 ? 2 : 4;
    }
  }
  document.getElementById("try-again").addEventListener("click", () => {
    document.getElementById("game-over").style.display = "none";
    score = 0;
    initBoard();
  });
  
  function updateBoard() {
    const cells = document.querySelectorAll(".cell");
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        const cell = cells[i * 4 + j];
        const value = boardData[i][j];
        
        // Remove existing tile if any
        const existingTile = cell.querySelector(".tile");
        if (existingTile) {
          existingTile.remove();
        }

        // Create new tile if value exists
        if (value !== 0) {
          const tile = document.createElement("div");
          tile.className = `tile tile-${value}`;
          tile.textContent = value;
          cell.appendChild(tile);
        }
      }
    }
    scoreDisplay.textContent = score;
    if (score > bestScore) {
      bestScore = score;
      localStorage.setItem("bestScore", bestScore);
      bestScoreDisplay.textContent = bestScore;
    }
  }

  function checkGameOver() {
    // Check if any moves are possible
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (boardData[i][j] === 0) return false; // Empty cell exists
        
        // Check adjacent cells for possible merges
        if (i < 3 && boardData[i][j] === boardData[i + 1][j]) return false;
        if (j < 3 && boardData[i][j] === boardData[i][j + 1]) return false;
      }
    }
    // No moves left, game over
    document.getElementById("game-over").style.display = "flex";
    return true;
  }

  function move(direction) {
    let moved = false;
    for (let i = 0; i < 4; i++) {
      let line = [];
      for (let j = 0; j < 4; j++) {
        let value;
        switch (direction) {
          case "left":
            value = boardData[i][j];
            break;
          case "right":
            value = boardData[i][3 - j];
            break;
          case "up":
            value = boardData[j][i];
            break;
          case "down":
            value = boardData[3 - j][i];
            break;
        }
        if (value !== 0) line.push(value);
      }

      for (let k = 0; k < line.length - 1; k++) {
        if (line[k] === line[k + 1]) {
          line[k] *= 2;
          score += line[k];
          line.splice(k + 1, 1);
        }
      }

      while (line.length < 4) line.push(0);

      for (let j = 0; j < 4; j++) {
        let value = line[j];
        let target;
        switch (direction) {
          case "left":
            target = boardData[i][j];
            if (value !== target) moved = true;
            boardData[i][j] = value;
            break;
          case "right":
            target = boardData[i][3 - j];
            if (value !== target) moved = true;
            boardData[i][3 - j] = value;
            break;
          case "up":
            target = boardData[j][i];
            if (value !== target) moved = true;
            boardData[j][i] = value;
            break;
          case "down":
            target = boardData[3 - j][i];
            if (value !== target) moved = true;
            boardData[3 - j][i] = value;
            break;
        }
      }
    }
    if (moved) {
      addRandomTile();
      updateBoard();
      checkGameOver();
    }
  }
  
  document.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowLeft":
        move("left");
        break;
      case "ArrowRight":
        move("right");
        break;
      case "ArrowUp":
        move("up");
        break;
      case "ArrowDown":
        move("down");
        break;
    }
  });

  newGameBtn.addEventListener("click", () => {
    score = 0;
    initBoard();
  });

  // Add touch controls
  grid.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  grid.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const dx = touchEndX - touchStartX;
    const dy = touchEndY - touchStartY;

    // Minimum swipe distance threshold
    const minSwipeDistance = 30;

    if (Math.abs(dx) > minSwipeDistance || Math.abs(dy) > minSwipeDistance) {
      if (Math.abs(dx) > Math.abs(dy)) {
        // Horizontal swipe
        move(dx > 0 ? "right" : "left");
      } else {
        // Vertical swipe
        move(dy > 0 ? "down" : "up");
      }
    }
  }, { passive: true });

  initBoard();
});
