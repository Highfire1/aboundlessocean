import { Container, Graphics } from 'pixi.js'

class BackgroundGrid extends Container {
    constructor() {
        super()
        
        //this.fillStyle="rgb(0,0,255)"
        //var canvas = document.getElementById("canvas");
        //var ctx = this.getContext("2d");
        //ctx.fillStyle = "blue";
        //ctx.fillRect(0, 0, this.width, this.height);
        
        let circle = new Graphics()
        circle.lineStyle(2, 0x333333)
        circle.drawCircle(0, 0, 100)
        circle.fillStyle = "blue"; // ????
        this.addChild(circle)
        
        // pain tm
        circle.drawCircle(500, -240, 200)
        this.addChild(circle)

        circle.drawCircle(300, 300, 20)
        this.addChild(circle)

        circle.drawCircle(-30, -400, 50)
        this.addChild(circle)

        circle.drawCircle(-600, 100, 300)
        this.addChild(circle)

        /*
        for (let i = 0; i < 11; i++) {
            let line = new Graphics()
            line.lineStyle(2, 0x333333)
            line.moveTo(i * 100, 0)
            line.lineTo(i * 100, 1000)
            this.addChild(line)
        }

        for (let i = 0; i < 30; i++) {
            let line = new Graphics()
            line.lineStyle(2, 0x333333)
            line.moveTo(0, i * 100)
            line.lineTo(1000, i * 100)
            this.addChild(line)
        }
        */
    }
}

export default BackgroundGrid

// gsutil cp -r gs://aboundlessocean-data .