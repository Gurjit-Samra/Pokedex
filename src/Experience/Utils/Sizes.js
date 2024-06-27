import EventEmitter from "./EventEmitter";

export default class Sizes extends EventEmitter{
    constructor(){

        super();

        // Assuming Full viewport size
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.pixelRatio = Math.min(window.devicePixelRatio, 2);

        // Resize event listener
        window.addEventListener('resize', () => 
        {
            this.resize();
            this.trigger('resize');
        });
    }

    //Resize
    resize(){
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.pixelRatio = Math.min(window.devicePixelRatio, 2);
    }
}