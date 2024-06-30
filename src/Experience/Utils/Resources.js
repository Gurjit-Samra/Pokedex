import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import EventEmitter from "./EventEmitter";


export default class Resources extends EventEmitter{

    constructor(sources)
    {
        super();

        //Options
        this.sources = sources;

        //Setup
        this.items = {};
        this.toLoad = this.sources.length;
        this.loaded = 0;

        //Loaders
        this.setLoaders();
        this.startLoading();
    }

    setLoaders()
    {
        this.loaders = {};
        this.loaders.gltfLoader = new GLTFLoader(); 
        this.loaders.textureLoader = new THREE.TextureLoader();
        this.loaders.cubeTextureLoader = new THREE.CubeTextureLoader();
        this.loaders.objLoader = new OBJLoader();
    }

    startLoading()
    {        
        // Load each source
        for(const source of this.sources)
        {
            switch (source.type) {
                case 'gltfModel':
                    this.loaders.gltfLoader.load(
                        source.path,
                        (file) => {
                            this.sourceLoaded(source, file);
                        },
                        undefined,
                        (error) => {
                            console.error('Error loading GLTF:', error);
                        }
                    );
                    break;
                case 'texture':
                    this.loaders.textureLoader.load(
                        source.path,
                        (file) => {
                            this.sourceLoaded(source, file);
                        },
                        undefined,
                        (error) => {
                            console.error('Error loading Texture:', error);
                        }

                    );
                    break;
                case 'cubeTexture':
                    this.loaders.cubeTextureLoader.load(
                        source.path,
                        (file) => {
                            this.sourceLoaded(source, file);
                        },
                        undefined,
                        (error) => {
                            console.error('Error loading cubeTexture:', error);
                        }
                    );
                    break;
                case 'obj':
                    this.loaders.objLoader.load(
                        source.path,
                        (file) => {
                            this.sourceLoaded(source, file);
                        },
                        undefined,
                        (error) => {
                            console.error('Error loading object:', error);
                        }
                    );
                    break;
                    
            }
        }  
    } 

    sourceLoaded(source, file)
    {
     this.items[source.name] = file

     this.loaded++;

     if(this.loaded === this.toLoad)
     {
        this.trigger('resources loaded')
     }

    }
}

