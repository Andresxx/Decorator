    
var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

import {Espada} from "../src/Armas/Espada";
import {Arco} from "../src/Armas/Arco";
import {Fuego} from "../src/Material/Fuego";
import {Hierro} from "../src/Material/Hierro";
import {Madera} from "../src/Material/Madera";



describe('Armas', function() {

    beforeEach(function() {
     });

    it('Una espada tendria que hacer 10 de dano', function(){
        let espada = new Espada();
        expect(espada.obtenerDano()).equal(10);
    });

    
    it('Un arco tendria que hacer 5 de dano', function(){
        let arco = new Arco();
        expect(arco.obtenerDano()).equal(5);
    });
});



describe('Materiales', function() {

    beforeEach(function() {
     });

    it('Una espada con fuego tendria que hacer 25 de dano', function(){
        let espada = new Espada();
        let espadaDeFuego = new Fuego(espada);
        expect(espadaDeFuego.obtenerDano()).equal(25);
    });
    it('Una espada de hierrro tendria que hacer 20 de dano', function(){
        let espada = new Espada();
        let espadaDeHierro = new Hierro(espada);
        expect(espadaDeHierro.obtenerDano()).equal(20);
    });
    it('Una espada de madera tendria que hacer 15 de dano', function(){
        let espada = new Espada();
        let espadaDeMadera = new Madera(espada);
        expect(espadaDeMadera.obtenerDano()).equal(15);
    });

    it('Una espada de madera y fuego tendria que hacer 30 de dano', function(){
        let espada = new Espada();
        let espadaDeMadera = new Madera(espada);
        let espadaDeMaderaConFuego = new Fuego(espadaDeMadera);
        expect(espadaDeMaderaConFuego.obtenerDano()).equal(30);
    });
});