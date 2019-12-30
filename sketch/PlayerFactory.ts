class PlayerFactory {
    // Class attributes
    players: Array<_ply.Player> = [
        {
            name: 'blue', 
            color: '74, 124, 221', 
            aimLeft: ['1', 49],
            fireButton: ['2', 50],
            aimRight: ['3', 51]
        },
        {
            name: 'purple',
            color: '202, 94, 211',
            aimLeft: [',', 188],
            fireButton: ['.', 190],
            aimRight: ['-', 189]
        },
        {
            name: 'green',
            color: '102, 233, 69',
            aimLeft: ['z', 90],
            fireButton: ['x', 88],
            aimRight: ['c', 67]
        },
        {
            name: 'yellow',
            color: '231, 255, 87',
            aimLeft: ['8', 56],
            fireButton: ['9', 57],
            aimRight: ['0', '48']
        }
    ]
    private cOM: PassByFire

    constructor(cOM: CollidableObjectManager) {
        this.cOM = cOM
    }

    // Class functions
    public buildMenuPlayer(noOfPlayers: number): Array<_ply.MenuPlayer> {
        let playerArray: Array<_ply.MenuPlayer> = []
        for (let i = 0; i < noOfPlayers; i++) {
            let player: _ply.Player = this.players[i]
            playerArray.push(new _ply.MenuPlayer(player.name, player.color, player.aimLeft, player.fireButton, player.aimRight))
        }
        return playerArray
    }

    public buildGamePlayer(noOfPlayers: number, posArray: Array<{x: number, y:number}>): Array<_ply.GamePlayer> {
        let playerArray: Array<_ply.GamePlayer> = []
        for (let i = 0; i < noOfPlayers; i++) {
            let player: _ply.Player = this.players[i]
            let position = posArray[i]
            playerArray.push(new _ply.GamePlayer(player.name, player.color, player.aimLeft, player.fireButton, player.aimRight, this.cOM, position))
        }
        return playerArray
    }
}