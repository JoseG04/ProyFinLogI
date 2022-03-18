class Pelota extends Punto{
    #radio;

    constructor(x, y, velX, velY, estilo){
        super(x, y, velX, velY, estilo);
        this.#radio = 20;
    }

    dibujar(){

    }

    colisionarConJugador(){

    }

    colisionarArriba(){

    }

    colisionarAbajo(){

    }

    salirIzquierda(){
        if(super.coordenadaX < 0){
            return true;
        }
        else{
            return false;
        }
    }

    salirDerecha(anchoVentana){
        if(super.coordenadaX > anchoVentana){
            return true;
        }
        else{
            return false;
        }
    }

    // Métodos heredados
    desplazarArriba(){
        super.desplazarAbajo()
    }

    desplazarAbajo(){
        super.desplazarAbajo();
    }

    desplazarDerecha(){
        super.desplazarDerecha();
    }

    desplazarIzquierda(){
        super.desplazarIzquierda();
    }

    invertirVelX(){
        super.invertirVelX();
    }

    invertirVelY(){
        super.velocidadY();
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