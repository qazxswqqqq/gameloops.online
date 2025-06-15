# GameLoop

A simple game loop implementation in JavaScript.

## Features

- Basic game loop implementation
- FPS (Frames Per Second) counter
- Delta time calculation
- Smooth animation handling

## Usage

```javascript
const gameLoop = new GameLoop({
    update: (deltaTime) => {
        // Update game state
    },
    render: () => {
        // Render game
    }
});

gameLoop.start();
```

## License

MIT 