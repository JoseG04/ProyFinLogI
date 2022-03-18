class Punto{
    #coordenadaX;
    #coordenadaY;
    #velocidadX;
    #VelocidadY;
    #estilo;

    constructor(x, y, velX, velY, estilo){
        this.#coordenadaX = x      || 50;
        this.#coordenadaY = y      || 50;
        this.#velocidadX  = velX   || 1;
        this.#VelocidadY  = velY   || 1;
        this.#estilo      = estilo || "#FFFFFF";
    }

    desplazarArriba(){
        this.#coordenadaY -= 5 * this.#velocidadY; 
    }

    desplazarAbajo(){
        this.#coordenadaY += 5 * this.#velocidadY; 
    }

    desplazarDerecha(){
        this.#coordenadaX += 5 * this.#velocidadX; 
    }

    desplazarIzquierda(){
        this.#coordenadaX -= 5 * this.#velocidadX; 
    }

    invertirVelX(){
        this.#velocidadX = this.#velocidadX * -1;
    }

    invertirVelY(){
        this.#VelocidadY = this.#VelocidadY * -1;
    }

    // Getters
    get coordenadaX(){
        return this.#coordenadaX;
    }

    get coordenadaY(){
        return this.#coordenadaY;
    }

    get velocidadX(){
        return this.#VelocidadX;
    }
    
    get velocidadY(){
        return this.#VelocidadY;
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
        this.#VelocidadY = velY;
    }

    set estilo(estilo){
        this.#estilo = estilo;
    }
}