class PlayerFactory {
    // Class attributes
    players: Array<ply_.Player> = [
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
    public buildMenuPlayer(noOfplayers: number): Array<ply_.MenuPlayer> {
        let playerArray: Array<ply_.MenuPlayer> = []
        for (let i = 0; i < noOfplayers; i++) {
            let player: ply_.Player = this.players[i]
            playerArray.push(new ply_.MenuPlayer(player.name, player.color, player.aimLeft, player.fireButton, player.aimRight))
        }
        return playerArray
    }

    public buildGamePlayer() {

    }
}