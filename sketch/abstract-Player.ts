namespace _ply {
    export abstract class Player {
        // Interface attributes
        name: string
        color: string
        aimLeft: string
        fireButton: string
        aimRight: string
    
        constructor (name: string, color: string, aimLeft: string, fireButton: string, aimRight: string) {
            this.name = name
            this.color = color
            this.aimLeft = aimLeft
            this.fireButton = fireButton
            this.aimRight = aimRight
        }
    }
}