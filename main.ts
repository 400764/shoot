input.onButtonPressed(Button.A, function () {
    豬腳.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    搗蛋 = game.createSprite(豬腳.get(LedSpriteProperty.X), 豬腳.get(LedSpriteProperty.Y))
    for (let index = 0; index < 5; index++) {
        basic.pause(100)
        搗蛋.change(LedSpriteProperty.Y, -1)
    }
    搗蛋.delete()
})
input.onButtonPressed(Button.B, function () {
    豬腳.change(LedSpriteProperty.X, 1)
})
let 搗蛋: game.LedSprite = null
let 豬腳: game.LedSprite = null
basic.clearScreen()
game.setLife(3)
game.setScore(0)
豬腳 = game.createSprite(2, 4)
let 被霸凌的鐵 = game.createSprite(0, 0)
basic.forever(function () {
    if (被霸凌的鐵.isTouching(豬腳)) {
        game.removeLife(1)
        被霸凌的鐵 = game.createSprite(0, 0)
    }
})
basic.forever(function () {
    if (搗蛋) {
        if (被霸凌的鐵.isTouching(搗蛋)) {
            被霸凌的鐵.delete()
            搗蛋.delete()
            豬腳.delete()
            game.addScore(1)
            被霸凌的鐵 = game.createSprite(0, 0)
            豬腳 = game.createSprite(2, 4)
        }
    }
})
basic.forever(function () {
    for (let index = 0; index < 5; index++) {
        basic.pause(randint(50, 150))
        被霸凌的鐵.change(LedSpriteProperty.X, 1)
    }
    被霸凌的鐵.set(LedSpriteProperty.X, 0)
    被霸凌的鐵.change(LedSpriteProperty.Y, 1)
})
