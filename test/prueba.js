    
var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

import {Espada} from "../src/Armas/Espada";
import {Arco} from "../src/Armas/Arco";


describe('Armas', function() {

    beforeEach(function() {
     });

    it('Una espada tendria que hacer 10 de dano', function(){
        let espada = new Espada();
        expect(espada.obteneDano()).equal(10);
    });

    
    it('Un arco tendria que hacer 5 de dano', function(){
        let arco = new Arco();
        expect(arco.obteneDano()).equal(5);
    });
});
