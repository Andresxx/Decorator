export class Hierro{
    constructor(arma){
        this.arma=arma;
    }
    
    obtenerDano(){
        return this.arma.obtenerDano() + 10;
    }
}