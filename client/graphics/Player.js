import { Container, Sprite } from 'pixi.js'

class Player extends Container {
    constructor() {
        super()


        // hhhh i should have gotten teammates
        //const sprite = PIXI.Loader
        //.add("images/sharksprite.json")
        //.load(setup);

        const sprite = Sprite.from('/images/shark_final.png')
        sprite.scale.set(3, 3)
        sprite.anchor.set(0.5, 0.5)
        sprite.rotation = 0
        this.addChild(sprite)
    }
}


function setup() {
    // get a reference to the sprite sheet we've just loaded:
    let sheet = PIXI.Loader.shared.resources["images/sharksprite.json"].spritesheet;
    animatedSprite = new PIXI.AnimatedSprite(sheet.animations["image_sequence"]);

    return animatedSprite
}

export default Player
