// Snake game implementation

// Initialize the canvas
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Set up the game variables
const gridSize = 20;
const tileCount = canvas.width / gridSize;
let snake = [{ x: 10, y: 10 }];
let food = { x: 5, y: 5 };
let dx = 0;
let dy = 0;
let score = 0;

// Handle keyboard input
document.addEventListener("keydown", changeDirection);

function changeDirection(event) {
    const keyPressed = event.keyCode;
    const up = 38;
    const down = 40;
    const left = 37;
    const right = 39;

    if (keyPressed === up && dy !== 1) {
        dx = 0;
        dy = -1;
    }

    if (keyPressed === down && dy !== -1) {
        dx = 0;
        dy = 1;
    }

    if (keyPressed === left && dx !== 1) {
        dx = -1;
        dy = 0;
    }

    if (keyPressed === right && dx !== -1) {
        dx = 1;
        dy = 0;
    }
}

// Main game loop
function gameLoop() {
    clearCanvas();
    moveSnake();
    drawSnake();
    drawFood();
    checkCollision();

    // Call the game loop again
    setTimeout(gameLoop, 100);
}

// Clear the canvas
function clearCanvas() {
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Move the snake
function moveSnake() {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(head);

    // Remove the tail if the snake didn't eat food
    if (snake[0].x !== food.x || snake[0].y !== food.y) {
        snake.pop();
    } else {
        // Generate new food position
        food.x = Math.floor(Math.random() * tileCount);
        food.y = Math.floor(Math.random() * tileCount);
        score++;
    }
}

// Draw the snake
function drawSnake() {
    snake.forEach((segment) => {
        ctx.fillStyle = "#000";
        ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
    });
}

// Draw the food
function drawFood() {
    ctx.fillStyle = "#f00";
    ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);
}

// Check for collision with walls or self
function checkCollision() {
    const head = snake[0];

    if (
        head.x < 0 ||
        head.x >= tileCount ||
        head.y < 0 ||
        head.y >= tileCount ||
        snake.slice(1).some((segment) => segment.x === head.x && segment.y === head.y)
    ) {
        // Game over
        alert("Game over!");
        resetGame();
    }
}

// Reset the game
function resetGame() {
    snake = [{ x: 10, y: 10 }];
    food = { x: 5, y: 5 };
    dx = 0;
    dy = 0;
    score = 0;
}

// Start the game loop
gameLoop();
