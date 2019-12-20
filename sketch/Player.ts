class MenuPlayer implements Player {
    // Class attributes
    color = 'hello'

    // Class constructor


    // Class functions
    draw(): void {
        //Insert draw logic here
    }
}

interface ApplyPowerUp {
    applyPowerUp: (powerUp: string) => void
}

class GamePlayer implements Player {
    // Class attributes
    color = 'hello'

    // Class constructor
    update(): PlayerProjectile {
        const projectile = new PlayerProjectile(1, 1, this.applyPowerUp, this.color)

        return projectile;
    }

    private applyPowerUp = (powerUp: string) => {
        // this.powerUp = powerUp
        // todo....
    }

    // Class functions
    draw(): void {
        //Insert draw logic here
    }

}