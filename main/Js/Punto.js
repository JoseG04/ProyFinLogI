class Punto{
    #coordenadaX;
    #coordenadaY;
    #velocidadX;
    #velocidadY;
    #estilo;

    constructor(x, y, velX, velY, estilo){
        this.#coordenadaX = x      || 50;
        this.#coordenadaY = y      || 50;
        this.#velocidadX  = velX;
        this.#velocidadY  = velY;
        this.#estilo      = estilo || ["color", "#FFFFFF"];
    }

    desplazarArriba(){
        this.#coordenadaY -= (5 * this.#velocidadY); 
    }

    desplazarAbajo(){
        this.#coordenadaY += (5 * this.#velocidadY); 
    }

    desplazarDerecha(){
        this.#coordenadaX += (5 * this.#velocidadX); 
    }

    desplazarIzquierda(){
        this.#coordenadaX -= (5 * this.#velocidadX); 
    }

    invertirVelX(){
        this.#velocidadX = this.#velocidadX * -1;
    }

    invertirVelY(){
        this.#velocidadY = this.#velocidadY * -1;
    }

    // Getters
    get coordenadaX(){
        return this.#coordenadaX;
    }

    get coordenadaY(){
        return this.#coordenadaY;
    }

    get velocidadX(){
        return this.#velocidadX;
    }
    
    get velocidadY(){
        return this.#velocidadY;
    }

    get estilo(){
        return this.#estilo;
    }

    // Setters

    set coordenadaX(x){
        this.#coordenadaX = x;
    }

    set coordenadaY(y){
        this.#coordenadaY = y;
    }

    set velocidadX(velX){
        this.#velocidadX = velX;
    }

    set velocidadY(velY){
        this.#velocidadY = velY;
    }

    set estilo(estilo){
        this.#estilo = estilo;
    }
}