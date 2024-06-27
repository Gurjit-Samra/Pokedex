import * as THREE from "three";
import Experience from "../Experience";

export default class World{
    constructor(experience){
        this.experience = window.experience;
        this.scene = this.experience.scene;

        // Test Mesh
        this.createTestMesh();
    }

    createTestMesh(){
        this.testMesh = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshBasicMaterial({ wireframe: true})
        );
        this.scene.add(this.testMesh);
    }
}