import * as THREE from 'three';
import Sizes from "./Utils/Sizes";
import Time from "./Utils/Time";
import Camera from "./Camera";
import World from "./World/World";
import Renderer from './Renderer';
import Environment from './World/Environment';
import Resources from './Utils/Resources';
import sources from './sources';
import Debug from './Utils/Debug';

export default class Experience{
    constructor(canvas){

        // Global access
        window.experience = this;

        console.log('Soon to be a great Pokedex Experience');

        //Options
        this.canvas = canvas;

        //Setup
        this.debug = new Debug();
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
        this.world.update();
        this.renderer.update();
    }

    destroy(){
        this.sizes.off('resize');
        this.time.off('tick');
        
        // Traverse the whole scene 
        this.scene.traverse(child => 
        {
            if(child instanceof THREE.Mesh)
            {
                child.geometry.dispose();

                for (const key in child.materials)
                {
                    const value = child.material[key]
                    if(value && typeof value.dispose === 'function')
                    {
                        value.dispose();
                    }
                }

            }
        })

        this.camera.controls.dispose()
        this.renderer.instance.dispose()

        if (this.debug.active)
        {
            this.debug.ui.destroy()
        }

    }

}