let ship, curs, pl

new Phaser.Game({

  width: 683,  //
  height: 384,

  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 1600 },
      debug: false,
    },
  },

  scene: {

    preload() {      // functions can be vales
      this.load.image("bg", "./assets/star-bg.png")
      this.load.image("ship", "./assets/ship.png")
      this.load.image("pl", "./assets/platform.png")
    },
    create() {
      this.add.image(0, 0, "bg").setOrigin(0, 0)
      ship = this.physics.add.sprite(100, 100, "ship").setOrigin(0, 0)
      ship.setCollideWorldBounds(true)
      ship.setBounce(0)

      pl = this.physics.add.staticGroup()
      pl.create(400,300, 'pl')
      pl.create(150,250, 'pl').setScale(1.5,1).refreshBody()
      pl.create(350,100, 'pl')

      this.physics.add.collider(ship, pl)

      curs = this.input.keyboard.createCursorKeys()
    },
    update() {
      if (curs.left.isDown) {
        ship.setVelocityX(-300)
      } else if (curs.right.isDown) {
        ship.setVelocityX(300)
      }

      if (ship.body.onFloor()) {
        ship.setDragX(1300)
        if (curs.up.isDown) {
          ship.setVelocityY(-700)
        
        }
      }   else {
        ship.setDragX(0)
      }
    },
  }
})

