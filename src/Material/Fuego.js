export class Fuego{
    constructor(arma){
        this.arma=arma;
    }
    
    obtenerDano(){
        return this.arma.obtenerDano() + 15;
    }
}