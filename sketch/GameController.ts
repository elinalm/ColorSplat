class GameController {
    public startMenu =  new StartMenu();

    public printText(inText: string){
        console.log(inText);
        this.startMenu.showStartMenu();
        this.startMenu.closeStartMenu();

    }

    public showLayer(layer: p5): any{
        layer.fill(0);
        return layer;
    }

}