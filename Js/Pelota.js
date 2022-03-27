class Pelota extends Punto{
    #radio;
    #sprite;

    constructor(x, y, velX, velY, estilo){
        super(x, y, velX, velY, estilo);
        this.#radio      = 15;
        this.#sprite     = new Image();
        this.#sprite.src = "images/spritePelotas.png";
    }

    dibujar(ctx){
        ctx.drawImage(this.#sprite, super.estilo[1][0]*100, super.estilo[1][1]*100, 100, 100, super.coordenadaX - this.#radio, super.coordenadaY - this.#radio, this.#radio*2, this.#radio*2);
    }

    colisionarConJugador(jugador, dificultad){
        if(    super.coordenadaX - this.#radio >= jugador.coordenadaX
            && super.coordenadaX - this.#radio <= jugador.coordenadaX + jugador.ancho
            || super.coordenadaX + this.#radio >= jugador.coordenadaX
            && super.coordenadaX + this.#radio <= jugador.coordenadaX + jugador.ancho){
                if(      super.coordenadaY - this.#radio >= jugador.coordenadaY
                      && super.coordenadaY - this.#radio <= jugador.coordenadaY + jugador.alto
                      || super.coordenadaY + this.#radio >= jugador.coordenadaY
                      && super.coordenadaY + this.#radio <= jugador.coordenadaY + jugador.alto){

                        // Condicional para que rebote en diferentes direcciones según su posición de colisión con los jugadores 
                        this.invertirVelX()
                        if (super.coordenadaY < jugador.coordenadaY + jugador.alto/2) {
                            super.velocidadY =  1 * dificultad;
                        }else if(super.coordenadaY > jugador.coordenadaY + jugador.alto/2){
                            super.velocidadY = -1 * dificultad;
                        }else if(super.coordenadaY == jugador.coordenadaY){
                            super.velocidadY = 0;
                        }

                    }

        }
    }

    colisionarArriba(limeteSuperior){
        if (super.coordenadaY - this.#radio <= limeteSuperior) {
            super.invertirVelY();
        }
    }

    colisionarAbajo(limiteInferior){
        if (super.coordenadaY + this.#radio >= limiteInferior) {
            super.invertirVelY();
        }
    }

    salirIzquierda(limiteIzquierda){
        if(super.coordenadaX < limiteIzquierda){
            return true;
        }
        else{
            return false;
        }
    }

    salirDerecha(limiteDerecho){
        if(super.coordenadaX > limiteDerecho){
            return true;
        }
        else{
            return false;
        }
    }

    // Getters
    get radio(){
        return this.#radio;
    }

    get coordenadaX(){
        return super.coordenadaX;
    }

    get coordenadaY(){
        return super.coordenadaY;
    }

    get velocidadX(){
        return super.velocidadX;
    }

    get velocidadY(){
        return super.velocidadY;
    }

    get estilo(){
        return super.estilo;
    }

    //Setters
    set radio(r){
        this.#radio = r;
    }

    set coordenadaX(x){
        super.coordenadaX = x;
    }

    set coordenadaY(y){
        super.coordenadaY = y;
    }

    set velocidadX(velX){
        super.velocidadX = velX;
    }

    set velocidadY(velY){
        super.velocidadY = velY;
    }

    set estilo(estilo){
        super.estilo = estilo; 
    }
}