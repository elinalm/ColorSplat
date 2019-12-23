class PlayerFactory {
    // Class attributes
    players: Array<_ply.Player> = [
        {
            name: 'blue', 
            color: '#4A7CDD', 
            aimLeft: ['1', 49],
            fireButton: ['2', 50],
            aimRight: ['3', 51]
        },
        {
            name: 'purple',
            color: '#CA5ED3',
            aimLeft: [',', 188],
            fireButton: ['.', 190],
            aimRight: ['-', 189]
        },
        {
            name: 'green',
            color: '#66E945',
            aimLeft: ['z', 90],
            fireButton: ['x', 88],
            aimRight: ['c', 67]
        },
        {
            name: 'yellow',
            color: '#E7FF57',
            aimLeft: ['8', 56],
            fireButton: ['9', 57],
            aimRight: ['0', '48']
        }
    ]

    // Class functions
    public buildMenuPlayer(noOfPlayers: number): Array<_ply.MenuPlayer> {
        let playerArray: Array<_ply.MenuPlayer> = []
        for (let i = 0; i < noOfPlayers; i++) {
            let player: _ply.Player = this.players[i]
            playerArray.push(new _ply.MenuPlayer(player.name, player.color, player.aimLeft, player.fireButton, player.aimRight))
        }
        return playerArray
    }

    public buildGamePlayer(noOfPlayers: number): Array<_ply.GamePlayer> {
        let playerArray: Array<_ply.GamePlayer> = []
        for (let i = 0; i < noOfPlayers; i++) {
            let player: _ply.Player = this.players[i]
            playerArray.push(new _ply.GamePlayer(player.name, player.color, player.aimLeft, player.fireButton, player.aimRight))
        }
        return playerArray
    }
}