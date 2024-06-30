import * as THREE from 'three';


export default class Fox
{
    constructor()
    {
        this.experience = window.experience;
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;

        //Setup
        this.createFox();
        this.setModel();
        this.setAnimation();
    }

    createFox()
    {
        this.resource = this.resources.items.foxModel
    }

    setModel()
    {
        this.model = this.resource.scene;
        this.model.scale.set(0.02, 0.02, 0.02);
        this.scene.add(this.model);

        this.model.traverse(child => 
        {
            if(child instanceof THREE.Mesh)
            {
                child.castShadow = true;
            }
        })
    }

    setAnimation()
    {
        this.animation = {}
        this.animation.mixer = new THREE.AnimationMixer(this.model);
        this.animation.action = this.animation.mixer.clipAction(this.resource.animations[0]);
        this.animation.action.play();
    }

}