import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';

export default class Pokedex {

    constructor(region) {
        this.region = region;
        createBody(region);
        const gltfLoader = new GLTFLoader();
    }

    createBody(region) {
        switch (region) {
            case 'kanto':
                break;
            case 'johto':
                this.body = 'johto';
                break;
            case 'hoenn':
                this.body = 'hoenn';
                break;
            case 'sinnoh':
                this.body = 'sinnoh';
                break;
            case 'unova':
                this.body = 'unova';
                break;
            case 'kalos':
                this.body = 'kalos';
                break;
            case 'alola':
                this.body = 'alola';
                break;
            case 'galar':
                this.body = 'galar';
                break;
        }
    }

    searchPokemon(name) {
        // implement pokeAPI
    }

    searchPokemon(id) {
        // implement pokeAPI
    }
}