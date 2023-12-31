import React, { useEffect } from 'react';
import './breakout.css';

const Breakout = () => {
  useEffect(() => {
    let board;
    let boardWidth = 350;
    let boardHeight = 350;
    let context;

    // player
    let playerWidth = 60;//
    let playerHeight = 10;
    let playerVelocityX = 10;
    let player = {
      x: boardWidth / 2 - playerWidth / 2,
      y: boardHeight - playerHeight - 5,
      width: playerWidth,
      height: playerHeight,
      velocityX: playerVelocityX,
    };
    // ball
    let ballWidth = 10;
    let ballHeight = 10;
    let ballVelocityX = 3;//
    let ballVelocityY = 2;//
    let ball = {
      x: boardWidth / 2,
      y: boardHeight / 2,
      width: ballWidth,
      height: ballHeight,
      velocityX: ballVelocityX,
      velocityY: ballVelocityY,
    };
    // blocks
    let blockArray = [];
    let blockWidth = 35;
    let blockHeight = 10;
    let blockColumns = 8;
    let blockRows = 3;
    let blockMaxRows = 10;
    let blockCount = 0;

    //starting block
    let blockX = 15;
    let blockY = 45;

    //score
    let score = 0;
    //gameover
    let gameOver = false;

    let currentLevel = 1;
    const maxLevels = 3;


    const update = () => {
      requestAnimationFrame(update);
      if (gameOver){
        return;
      }
      context.clearRect(0, 0, board.width, board.height);
      // player
      context.fillStyle = "orange";
      context.fillRect(player.x, player.y, player.width, player.height);
      // ball
      context.fillStyle = "black";
      ball.x += ball.velocityX;
      ball.y += ball.velocityY;
      context.fillRect(ball.x, ball.y, ball.width, ball.height);
      // bounce ball
      if (ball.y <= 0) {
        ball.velocityY *= -1;
      } else if (ball.x <= 0 || ball.x + ball.width >= boardWidth) {
        ball.velocityX *= -1;
      } else if (ball.y + ball.height >= boardHeight) {
        context.font = "14px verdana";
        context.fillText("Game Over: Press 'Space' or Click Here to Restart", -2, 300);
        gameOver = true
      }
      // bouncing ball on paddle
      if (topCollision(ball, player) || bottomCollision(ball, player)) {
        ball.velocityY *= -1;
      } else if (leftCollision(ball, player) || rightCollision(ball, player)) {
        ball.velocityX *= -1;
      }
      //blocks
      context.fillStyle = "#43b";
      for(let i = 0; i < blockArray.length; i++){
        let block = blockArray[i];
        if (!block.break){
            if (topCollision(ball, block)|| bottomCollision(ball, block)){
                block.break = true;
                ball.velocityY *= -1;
                blockCount -= 1;
                score +=100;
            }
            else if (leftCollision(ball, block)|| rightCollision(ball, block)){
                block.break = true;
                ball.velocityX *= -1;
                blockCount -= 1;
                score +=100;
            }
            context.fillRect(block.x, block.y, block.width, block.height)
        }
      }
       // Next level logic
       if (blockCount === 0 && currentLevel < maxLevels) {
        currentLevel += 1;
        score += 100 * blockRows * blockColumns;
        blockRows = Math.min(blockRows + 1, blockMaxRows);

        // Reset ball position and velocity
        ball = {
          x: boardWidth / 2,
          y: boardHeight / 2,
          width: ballWidth,
          height: ballHeight,
          velocityX: ballVelocityX,
          velocityY: ballVelocityY,
        };

        // Recreate blocks for the next level
        createBlocks();
      } else if (blockCount === 0 && currentLevel === maxLevels) {
        // Display game over screen for the final level
        context.font = "14px verdana";
        context.fillStyle = "black";
        context.fillText("Congratulations! You completed all levels.", -2, 300);
        context.fillText("Press 'Space' or Click Here to Restart", -2, 320);
        gameOver = true;
      }

      //score
      context.font = "20px verdana";
      context.fillText(score, 10, 25)
    };
    const handleMouseMove = (e) => {
      // Calculate the distance moved
      const mouseX = e.clientX;
      const distanceX = mouseX - board.offsetLeft - player.width / 2;

      // Update the player position based on mouse movement
      let nextPlayerX = distanceX;
      if (!outOfBounds(nextPlayerX)) {
        player.x = nextPlayerX;
      }
    };
    const setupBoard = () => {
      board = document.getElementById("board");
      board.height = boardHeight;
      board.width = boardWidth;
      context = board.getContext("2d");

      // player
      context.fillStyle = "orange";
      context.fillRect(player.x, player.y, player.width, player.height);

      requestAnimationFrame(update);
      document.addEventListener("keydown", movePlayer);
      board.addEventListener("touchstart", handleTouchStart);
      board.addEventListener("touchmove", handleTouchMove);
      board.addEventListener("click", handleClick);
      board.addEventListener("mousemove", handleMouseMove);

      //createBlocks
      createBlocks();
    };

    const outOfBounds = (xPosition) => {
      return xPosition < 0 || xPosition + player.width > boardWidth;
    };
    const detectCollisions = (a, b) => {
      return (
        a.x < b.x + b.width &&
        a.x + a.width > b.x &&
        a.y < b.y + b.height &&
        a.y + a.height > b.y
      );
    };
    const topCollision = (ball, block) => {
      return detectCollisions(ball, block) && ball.y + ball.height >= block.y;
    };
    const bottomCollision = (ball, block) => {
      return detectCollisions(ball, block) && block.y + block.height >= ball.y;
    };
    const leftCollision = (ball, block) => {
      return detectCollisions(ball, block) && ball.x + ball.width >= block.x;
    };
    const rightCollision = (ball, block) => {
      return detectCollisions(ball, block) && block.x + block.width >= ball.x;
    };

    const movePlayer = (e) => {
        if(gameOver){
            if (e.code === "Space") {
                resetGame();
            }
        }
      if (e.code === "ArrowLeft") {
        let nextPlayerX = player.x - player.velocityX;
        if (!outOfBounds(nextPlayerX)) {
          player.x = nextPlayerX;
        }
      } else if (e.code === "ArrowRight") {
        let nextPlayerX = player.x + player.velocityX;
        if (!outOfBounds(nextPlayerX)) {
          player.x = nextPlayerX;
        }
      }
    };

    const handleTouchStart = (e) => {
      // Store the initial touch position
      initialTouchX = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
      // Calculate the distance moved
      const touchX = e.touches[0].clientX;
      const distanceX = touchX - initialTouchX;

      // Update the player position based on touch movement
      let nextPlayerX = player.x + distanceX;
      if (!outOfBounds(nextPlayerX)) {
        player.x = nextPlayerX;
      }

      // Update initial touch position for the next move
      initialTouchX = touchX;
    };

    let initialTouchX;


const createBlocks = () => {
  blockArray = [];

  // Different block structures for each level
  switch (currentLevel) {
    case 1:
      // Original structure
      for (let c = 0; c < blockColumns; c++) {
        for (let r = 0; r < blockRows; r++) {
          let block = {
            x: blockX + c * (blockWidth + 7),
            y: blockY + r * (blockHeight + 7),
            width: blockWidth,
            height: blockHeight,
            break: false,
          };
          blockArray.push(block);
        }
      }
      break;

    case 2:
      // Pyramid structure
      for (let r = 0; r < blockRows; r++) {
        for (let c = 0; c <= r; c++) {
          let block = {
            x: blockX + (c - r / 2) * (blockWidth + 7) + boardWidth / 2,
            y: blockY + r * (blockHeight + 7),
            width: blockWidth,
            height: blockHeight,
            break: false,
          };
          blockArray.push(block);
        }
      }
      break;

    case 3:
      // Custom designed structure (centered cross pattern)
      for (let c = 0; c < blockColumns; c++) {
        for (let r = 0; r < blockRows; r++) {
          if (c === blockColumns / 2 || r === blockRows / 2) {
            let block = {
              x: blockX + c * (blockWidth + 7) + boardWidth / 4,
              y: blockY + r * (blockHeight + 7) + boardHeight / 4,
              width: blockWidth,
              height: blockHeight,
              break: false,
            };
            blockArray.push(block);
          }
        }
      }
      break;

    default:
      break;
  }

  blockCount = blockArray.length;
};

const resetGame = () => {
    gameOver = false 
    currentLevel = 1
    // player
    let playerWidth = 60;
    let playerHeight = 10;
    let playerVelocityX = 10;
    player = {
      x: boardWidth / 2 - playerWidth / 2,
      y: boardHeight - playerHeight - 5,
      width: playerWidth,
      height: playerHeight,
      velocityX: playerVelocityX,
    };
    // ball
    let ballWidth = 10;
    let ballHeight = 10;
    let ballVelocityX = 3;
    let ballVelocityY = 2;
    ball = {
      x: boardWidth / 2,
      y: boardHeight / 2,
      width: ballWidth,
      height: ballHeight,
      velocityX: ballVelocityX,
      velocityY: ballVelocityY,
    };
    blockArray = [];
    blockRows=3;
    score = 0;
    createBlocks();
}
const handleClick = () => {
    if (gameOver) {
      resetGame();
    }
  };


    setupBoard();
    return () => {
      board.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <canvas className='all' id="board"></canvas>;
};

export default Breakout;
