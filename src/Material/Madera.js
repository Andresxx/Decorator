export class Madera{
    constructor(arma){
        this.arma=arma;
    }
    
    obtenerDano(){
        return this.arma.obtenerDano() + 5;
    }
}