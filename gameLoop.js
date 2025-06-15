class GameLoop {
    constructor({ update, render }) {
        this.update = update;
        this.render = render;
        this.lastTime = 0;
        this.accumulator = 0;
        this.timeStep = 1000 / 60; // 60 FPS
        this.running = false;
    }

    start() {
        if (!this.running) {
            this.running = true;
            requestAnimationFrame(this.gameLoop.bind(this));
        }
    }

    stop() {
        this.running = false;
    }

    gameLoop(currentTime) {
        if (!this.running) return;

        // Calculate delta time
        const deltaTime = currentTime - this.lastTime;
        this.lastTime = currentTime;

        // Update game state
        this.update(deltaTime / 1000); // Convert to seconds

        // Render game
        this.render();

        // Continue the loop
        requestAnimationFrame(this.gameLoop.bind(this));
    }
} 