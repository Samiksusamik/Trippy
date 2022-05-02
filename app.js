// Better querySelector because i'm lazy
const find = arg => (document.querySelector(arg))

// Define Canvas
const canvas = find('#canvas')
const ctx = canvas.getContext('2d')

canvas.width = 1000
canvas.height = 500

ctx.strokeRect(0, 0, 1000, 500)

// Clear Canvas
function clearCanvas() {
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, 1000, 600)
    ctx.strokeStyle = 'black'
    ctx.strokeRect(0, 0, 1000, 500)
}

// Get Random Direction for cube.move()
function getRandomDirection() {
    let direction;
    const rand = Math.floor(Math.random() * 8) + 1
    switch(rand) {
        case 1:
            direction = 'up'
            break;
        case 2:
            direction = 'upright'
            break;
        case 3:
            direction = 'right'
            break;
        case 4:
            direction = 'downright'
            break;
        case 5:
            direction = 'down'
            break;
        case 6: 
            direction = 'downleft'
            break;
        case 7: 
            direction = 'left'
            break;
        case 8: 
            direction = 'upleft'
    }
    return direction;
}

// Define Class Cube
class Cube {
    constructor() {
        this.x = (Math.floor(Math.random() * 100) + 1) * 10
        this.y = (Math.floor(Math.random() * 50) + 1) * 10
    }
    // Draw Cube
    draw() {
        ctx.fillStyle = 'blue'
        ctx.fillRect(this.x, this.y, 10, 10)
        ctx.strokeStyle = 'black'
        ctx.strokeRect(this.x, this.y, 10, 10)
    }
    // Move Cube
    move() {
        const direction = getRandomDirection()
        // Add or Subtract X & Y based on direction
        switch(direction) {
            case 'up':
                this.y += 10
                break;
            case 'upright':
                this.y += 10
                this.x += 10
                break;
            case 'right':
                this.x += 10
                break;
            case 'downright':
                this.x += 10
                this.y -= 10
                break;
            case 'down':
                this.y -= 10
                break;
            case 'downleft':
                this.x -= 10
                this.y -= 10
                break;
            case 'left':
                this.x -= 10
                break;
            case 'upleft':
                this.x -= 10
                this.y += 10
        }
        // Check if outside of range and fix
        if(this.x > 1000) {
            this.x = 1000
        } else if(this.x < 0) {
            this.x = 0
        }

        if(this.y > 500) {
            this.y = 500
        } else if(this.y < 0) {
            this.y = 0
        }
    }
}

// Define cubes
const cubes = []

// Populate cubes
for(i = 0; i < 5000; i++) {
    const cube = new Cube()
    cubes.push(cube)
}

// Render cubes at the start
for(let cube of cubes) {
    cube.draw()
}

// Main refresh function
function main() {
    clearCanvas()
    for(let cube of cubes) {
        cube.move()
        cube.draw()
    }
}

setInterval(() => main(), 10)