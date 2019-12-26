namespace _ply {
    export abstract class Player {
        // Interface attributes
        name: string
        color: string
        aimLeft: Array<any>
        fireButton: Array<any>
        aimRight: Array<any>
    
        constructor (name: string, color: string, aimLeft: Array<any>, fireButton: Array<any>, aimRight: Array<string>) {
            this.name = name
            this.color = color
            this.aimLeft = aimLeft
            this.fireButton = fireButton
            this.aimRight = aimRight
        }
    }
}