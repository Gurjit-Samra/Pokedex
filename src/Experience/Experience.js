import * as THREE from 'three';
import Sizes from "./Utils/Sizes";
import Time from "./Utils/Time";
import Camera from "./Camera";
import World from "./World/World";
import Renderer from './Renderer';
import Environment from './World/Environment';
import Resources from './Utils/Resources';
import sources from './sources';

export default class Experience{
    constructor(canvas){

        // Global access
        window.experience = this;

        console.log('Soon to be a great Pokedex Experience');

        //Options
        this.canvas = canvas;

        //Setup
        this.sizes = new Sizes();
        this.time = new Time();
        this.scene = new THREE.Scene();
        this.resources = new Resources(sources);
        this.camera = new Camera(this);
        this.renderer = new Renderer(this);
        this.world = new World();

        //Listeners
        this.sizes.on('resize', () => 
        {
            this.resize();
        })

        this.time.on('tick', () => 
        {
            this.update();
        })
    }


    //Resize the experience
    resize(){
        this.camera.resize();
        this.renderer.resize();
    }

    //Update the experience
    update(){
        this.camera.update();
        this.renderer.update();
    }

}