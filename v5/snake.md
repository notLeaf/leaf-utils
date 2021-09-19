# Snake Command

## Example
```js
module.exports = {
    name: "snake",
    code: `$djsEval[(async () => {
const { Leafsnake } = require('leaf-utils')

new Leafsnake({
  message: message,
  embed: {
    title: 'Snake Game',
    color: '#7289da',
    OverTitle: "Game Over",
  },
  snake: { head: '🟢', body: '🟩', tail: '🟢' },
  emojis: {
    board: '⬛', 
    food: '🍎',
    up: '⬆️', 
    right: '➡️',
    down: '⬇️',
    left: '⬅️',
  },
}).startGame()
})()]
$suppressErrors`
}
```
