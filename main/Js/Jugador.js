class Jugador extends Punto{
    #nombre;
    #ancho;
    #alto;
    #puntaje;

    constructor(nombre, x, y, velX, velY, estilo){
        super(x, y, velX, velY, estilo);
        this.#nombre  = nombre || "Jugador NN";
        this.#ancho   = ancho  || 20;
        this.#alto    = alto   || 50;
        this.#puntaje = 0;
    }

    dibujar(){

    }

    incrementarPuntaje(){
        this.#puntaje += 1;
    }

    //Métodos heredados

    desplazarArriba(){
        super.desplazarArriba();
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

    // Getters

    get nombre(){
        return this.#nombre;
    }

    get ancho(){
        return this.#ancho;
    }

    get alto(){
        return this.#alto;
    }

    get puntaje(){
        return this.#puntaje;
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

    // Setters
    set nombre(nombre){
        this.#nombre = nombre; 
    }

    set ancho(ancho){
        this.#ancho = ancho;
    }

    set alto(alto){
        this.#alto = alto;
    }

    set puntaje(puntaje){
        this.#puntaje = puntaje;
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