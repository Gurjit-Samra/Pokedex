import * as THREE from "three";
import Environment from "./Environment";
import Floor from "./Floor";
import Fox from "./Fox";

export default class World{
    constructor(experience){

        this.experience = window.experience;
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;

        // Test Mesh
        //this.createTestMesh()

        this.resources.on('resources loaded', () => 
            {
                //Setup
                this.floor = new Floor()
                this.fox = new Fox()
                this.createEnvironment()
                
            }
            )

        
    }

    createTestMesh(){
        this.testMesh = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshStandardMaterial()
        );
        this.scene.add(this.testMesh)
    }

    createPokedex(){
        this.pokedex = new Pokedex()
    }

    createEnvironment(){
        this.Environment = new Environment()
    }
}