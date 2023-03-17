scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.setGameOverEffect(true, effects.dissolve)
    game.setGameOverMessage(true, "Perdiste")
    game.gameOver(true)
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    if (inicio == 0) {
        timer.background(function () {
            Vel = 70
            inicio = 1
            Posy = 12
            puntos = 0
            info.setScore(0)
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . 8 . . 5 6 6 6 . . . . . . . . 
                . 8 8 . . 6 6 6 6 . . . . . . . 
                . 8 8 8 8 8 8 8 8 9 9 . . . . . 
                . . 8 8 8 6 6 6 6 8 8 . . . . . 
                . . . . 5 6 6 6 . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . 8 . . 6 6 6 6 . . . . . . . . 
                . 8 8 . . 6 6 6 6 . . . . . . . 
                . 8 8 8 8 8 8 8 8 9 9 . . . . . 
                . . 8 8 8 6 6 6 6 8 8 . . . . . 
                . . . . 6 6 6 6 . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . 8 . . 2 6 6 6 . . . . . . . . 
                . 8 8 . . 6 6 6 6 . . . . . . . 
                . 8 8 8 8 8 8 8 8 9 9 . . . . . 
                . . 8 8 8 6 6 6 6 8 8 . . . . . 
                . . . . 2 6 6 6 . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . 8 . . 6 6 6 6 . . . . . . . . 
                . 8 8 . . 6 6 6 6 . . . . . . . 
                . 8 8 8 8 8 8 8 8 9 9 . . . . . 
                . . 8 8 8 6 6 6 6 8 8 . . . . . 
                . . . . 6 6 6 6 . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `],
            500,
            true
            )
            scene.cameraFollowSprite(mySprite)
            mySprite.setVelocity(Vel, 50)
        })
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    mySprite.setPosition(20, 55)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    timer.background(function () {
        mySprite.setVelocity(Vel, -125)
        timer.after(150, function () {
            mySprite.setVelocity(Vel, 50)
        })
    })
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    timer.background(function () {
        mySprite.setVelocity(Vel, -125)
        timer.after(150, function () {
            mySprite.setVelocity(Vel, 50)
        })
    })
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    if (info.score() == puntos) {
        info.changeScoreBy(1)
        if (Posy < 254) {
            if (Math.percentChance(33.333)) {
                tiles.setTileAt(tiles.getTileLocation(Posy, 0), assets.tile`myTile0`)
                tiles.setTileAt(tiles.getTileLocation(Posy, 1), assets.tile`myTile0`)
                tiles.setTileAt(tiles.getTileLocation(Posy, 2), assets.tile`myTile1`)
                tiles.setTileAt(tiles.getTileLocation(Posy, 3), assets.tile`myTile2`)
                tiles.setTileAt(tiles.getTileLocation(Posy, 4), assets.tile`myTile2`)
                tiles.setTileAt(tiles.getTileLocation(Posy, 5), assets.tile`myTile`)
                tiles.setTileAt(tiles.getTileLocation(Posy, 6), assets.tile`myTile0`)
                tiles.setTileAt(tiles.getTileLocation(Posy, 7), assets.tile`myTile0`)
                tiles.setTileAt(tiles.getTileLocation(Posy, 8), assets.tile`myTile0`)
            } else {
                if (Math.percentChance(66.666)) {
                    tiles.setTileAt(tiles.getTileLocation(Posy, 0), assets.tile`myTile0`)
                    tiles.setTileAt(tiles.getTileLocation(Posy, 1), assets.tile`myTile1`)
                    tiles.setTileAt(tiles.getTileLocation(Posy, 2), assets.tile`myTile2`)
                    tiles.setTileAt(tiles.getTileLocation(Posy, 3), assets.tile`myTile2`)
                    tiles.setTileAt(tiles.getTileLocation(Posy, 4), assets.tile`myTile`)
                    tiles.setTileAt(tiles.getTileLocation(Posy, 5), assets.tile`myTile0`)
                    tiles.setTileAt(tiles.getTileLocation(Posy, 6), assets.tile`myTile0`)
                    tiles.setTileAt(tiles.getTileLocation(Posy, 7), assets.tile`myTile0`)
                    tiles.setTileAt(tiles.getTileLocation(Posy, 8), assets.tile`myTile0`)
                } else {
                    if (Math.percentChance(100)) {
                        tiles.setTileAt(tiles.getTileLocation(Posy, 0), assets.tile`myTile0`)
                        tiles.setTileAt(tiles.getTileLocation(Posy, 1), assets.tile`myTile0`)
                        tiles.setTileAt(tiles.getTileLocation(Posy, 2), assets.tile`myTile0`)
                        tiles.setTileAt(tiles.getTileLocation(Posy, 3), assets.tile`myTile1`)
                        tiles.setTileAt(tiles.getTileLocation(Posy, 4), assets.tile`myTile2`)
                        tiles.setTileAt(tiles.getTileLocation(Posy, 5), assets.tile`myTile2`)
                        tiles.setTileAt(tiles.getTileLocation(Posy, 6), assets.tile`myTile`)
                        tiles.setTileAt(tiles.getTileLocation(Posy, 7), assets.tile`myTile0`)
                        tiles.setTileAt(tiles.getTileLocation(Posy, 8), assets.tile`myTile0`)
                    }
                }
            }
            Vel += 1
            Posy += 5
        }
    } else if (info.score() == puntos + 1) {
        timer.after(500, function () {
            puntos = info.score() + 0
        })
        tiles.setTileAt(tiles.getTileLocation(254, 0), assets.tile`myTile3`)
        tiles.setTileAt(tiles.getTileLocation(254, 1), assets.tile`myTile3`)
        tiles.setTileAt(tiles.getTileLocation(254, 2), assets.tile`myTile3`)
        tiles.setTileAt(tiles.getTileLocation(254, 3), assets.tile`myTile3`)
        tiles.setTileAt(tiles.getTileLocation(254, 4), assets.tile`myTile3`)
        tiles.setTileAt(tiles.getTileLocation(254, 5), assets.tile`myTile3`)
        tiles.setTileAt(tiles.getTileLocation(254, 6), assets.tile`myTile3`)
        tiles.setTileAt(tiles.getTileLocation(254, 7), assets.tile`myTile3`)
        tiles.setTileAt(tiles.getTileLocation(254, 8), assets.tile`myTile3`)
    }
})
let puntos = 0
let Posy = 0
let Vel = 0
let inicio = 0
let mySprite: Sprite = null
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`nivel1`)
mySprite = sprites.create(assets.image`Avion`, SpriteKind.Player)
scene.setBackgroundColor(9)
forever(function () {
    tiles.setTileAt(tiles.getTileLocation(254, 0), assets.tile`myTile3`)
    tiles.setTileAt(tiles.getTileLocation(254, 1), assets.tile`myTile3`)
    tiles.setTileAt(tiles.getTileLocation(254, 2), assets.tile`myTile3`)
    tiles.setTileAt(tiles.getTileLocation(254, 3), assets.tile`myTile3`)
    tiles.setTileAt(tiles.getTileLocation(254, 4), assets.tile`myTile3`)
    tiles.setTileAt(tiles.getTileLocation(254, 5), assets.tile`myTile3`)
    tiles.setTileAt(tiles.getTileLocation(254, 6), assets.tile`myTile3`)
    tiles.setTileAt(tiles.getTileLocation(254, 7), assets.tile`myTile3`)
    tiles.setTileAt(tiles.getTileLocation(254, 8), assets.tile`myTile3`)
})
