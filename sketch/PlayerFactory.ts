class PlayerFactory {
    // Class attributes
    players: Array<_ply.Player> = [
        {
            name: 'blue', 
            color: '#4A7CDD', 
            aimLeft: '1',
            fireButton: '2',
            aimRight: '3'
        },
        {
            name: 'purple',
            color: '#CA5ED3',
            aimLeft: ',',
            fireButton: '.',
            aimRight: '-'
        },
        {
            name: 'green',
            color: '#66E945',
            aimLeft: 'Z',
            fireButton: 'X',
            aimRight: 'C'
        },
        {
            name: 'yellow',
            color: '#E7FF57',
            aimLeft: '8',
            fireButton: '9',
            aimRight: '0'
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