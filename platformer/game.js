const keys = 'LEFT,RIGHT,UP,DOWN,SPACE,W,A,S,D'
let pl, plats, k, bad, coins

class Main extends Phaser.Scene {


  preload() {
    this.load.image("bg", "./assets/star-bg.png")
    this.load.image("pl", "./assets/ship.png")
    this.load.image("plat", "./assets/platform.png")
    this.load.image("bad", "./assets/doge.png")
    this.load.image("coin", "./assets/dcoin.png")
  }

  create() {
    this.add.image(0, 0, "bg").setOrigin(0, 0)
    pl = this.physics.add.sprite(100, 100, "pl").setOrigin(0, 0)
    pl.setCollideWorldBounds(true)
    pl.setVelocity(400)
    pl.setScale(1)
    pl.setGravityY(1200)

    bad = this.physics.add.sprite(100, 100, "bad").setOrigin(0, 0)
    bad.setCollideWorldBounds(true)
    bad.setScale(0.2)
    bad.setVelocity(300)
    bad.setBounce(1)

    plats = this.physics.add.staticGroup()
    plats.create(400, 300, 'plat')
    plats.create(150, 250, 'plat').setScale(1.5, 1).refreshBody()
    plats.create(350, 100, 'plat')


    let c
    coins = this.physics.add.group()
    c = coins.create(400, 20, 'coin')
    c.setScale(0.1)
    c.setCollideWorldBounds(true)
    c.setGravityY(1200)

    c = coins.create(450, 20, 'coin')
    c.setScale(0.1)
    c.setCollideWorldBounds(true)
    c.setGravityY(1200)

    c = coins.create(200, 20, 'coin')
    c.setScale(0.1)
    c.setCollideWorldBounds(true)
    c.setGravityY(1200)

    this.physics.add.collider(pl, plats)
    this.physics.add.collider(bad, plats)
    this.physics.add.collider(pl, bad)
    this.physics.add.collider(pl, coins)
    this.physics.add.collider(coins, plats)

    k = this.input.keyboard.addKeys(keys)
  }

  update() {
    this.add.image(0, 0, "bg").setOrigin(0, 0)
    pl = this.physics.add.sprite(100, 100, "pl").setOrigin(0, 0)
    pl.setCollideWorldBounds(true)
    pl.setVelocity(400)
    pl.setScale(1)
    pl.setGravityY(1200)

    bad = this.physics.add.sprite(100, 100, "bad").setOrigin(0, 0)
    bad.setCollideWorldBounds(true)
    bad.setScale(0.2)
    bad.setVelocity(300)
    bad.setBounce(1)

    plats = this.physics.add.staticGroup()
    plats.create(400, 300, 'plat')
    plats.create(150, 250, 'plat').setScale(1.5, 1).refreshBody()
    plats.create(350, 100, 'plat')


    let c
    coins = this.physics.add.group()
    c = coins.create(400, 20, 'coin')
    c.setScale(0.1)
    c.setCollideWorldBounds(true)
    c.setGravityY(1200)

    c = coins.create(450, 20, 'coin')
    c.setScale(0.1)
    c.setCollideWorldBounds(true)
    c.setGravityY(1200)

    c = coins.create(200, 20, 'coin')
    c.setScale(0.1)
    c.setCollideWorldBounds(true)
    c.setGravityY(1200)

    this.physics.add.collider(pl, plats)
    this.physics.add.collider(bad, plats)
    this.physics.add.collider(pl, bad)
    this.physics.add.collider(pl, coins)
    this.physics.add.collider(coins, plats)

    k = this.input.keyboard.addKeys(keys)
  }

}


const game = new Phaser.Game({
  scene: Main,
  physics: { default: 'arcade' },
  pixelArt: true,
})
