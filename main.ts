namespace SpriteKind {
    export const BAckground = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`PowerShotIce`, mySprite, 100, 0)
    animation.runImageAnimation(
    projectile,
    [img`
        . . . . 9 9 . . . . . . . . . . 
        . . . 6 . . 9 . 6 . 1 . . . . . 
        . 1 1 . 1 1 . 6 9 6 . 6 9 1 . . 
        . . . 6 . . 9 . 6 . 1 . . . . . 
        . . . . 9 9 . . . . . . . . . . 
        `,img`
        . . . . . 9 . . 6 . . . . . . . 
        . . . . 9 . 9 . . . . 1 . . . . 
        . 1 1 6 1 1 . 6 9 . 6 . 6 9 1 . 
        . . . . 9 . 9 . . . . 1 . . . . 
        . . . . . 9 . . 6 . . . . . . . 
        `,img`
        . . . . 9 . . . . . . . . . . . 
        . . . 9 . 9 . 6 . 1 . . . . . . 
        . 1 1 6 1 1 6 1 6 6 . 6 9 1 . . 
        . . . 9 . 9 . 6 . 1 . . . . . . 
        . . . . 9 . . . . . . . . . . . 
        `],
    500,
    false
    )
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy(effects.spray, 500)
    otherSprite.destroy(effects.spray, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.spray, 500)
})
let Fireball: Sprite = null
let ShootingStar: Sprite = null
let PLanet: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
info.setLife(10)
info.setScore(0)
mySprite = sprites.create(assets.image`Player`, SpriteKind.Player)
animation.runImageAnimation(
mySprite,
assets.animation`PLayer_Animate`,
100,
true
)
mySprite.setPosition(10, 60)
controller.moveSprite(mySprite, 0, 150)
mySprite.setStayInScreen(true)
game.onUpdateInterval(5000, function () {
    PLanet = sprites.create(img`
        . . . 4 2 2 2 . . . 
        . . 4 2 2 2 5 5 . . 
        . 5 2 2 2 2 2 2 2 . 
        5 4 2 2 2 2 2 2 2 2 
        5 4 4 4 5 5 2 5 5 2 
        5 4 4 5 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 
        . 2 2 2 2 4 4 4 2 . 
        . . 2 2 2 2 2 2 . . 
        . . . 2 2 2 2 . . . 
        `, SpriteKind.BAckground)
    PLanet.vx = -25
    PLanet.setPosition(155, randint(15, 150))
})
game.onUpdateInterval(2000, function () {
    ShootingStar = sprites.create(img`
        . . . 4 . . . . . . 
        . . 4 . . . . . . . 
        . 5 5 . . . . . . . 
        5 4 4 5 . . . . . . 
        5 4 4 4 5 5 5 5 5 5 
        5 4 4 5 . . . . . . 
        . 5 5 . . . . . . . 
        . . 4 . . . . . . . 
        . . . 4 . . . . . . 
        . . . . . . . . . . 
        `, SpriteKind.BAckground)
    ShootingStar.ax = -25
    ShootingStar.setPosition(155, randint(15, 150))
})
forever(function () {
	
})
game.onUpdateInterval(3000, function () {
    Fireball = sprites.create(assets.image`Fireballs`, SpriteKind.Enemy)
    Fireball.ax = -25
    Fireball.setPosition(155, randint(0, 150))
})
