class Jugador extends Punto{
    #nombre;
    #ancho;
    #alto;
    #puntaje;

    constructor(nombre, x, y, velX, velY, ancho, alto, estilo){
        super(x, y, velX, velY, estilo);
        this.#nombre  = nombre || "Jugador NN";
        this.#ancho   = ancho  || 20;
        this.#alto    = alto   || 50;
        this.#puntaje = 0;
    }

    dibujar(ctx){
        ctx.beginPath();
        ctx.fillStyle = super.estilo[1];
        ctx.fillRect(super.coordenadaX, super.coordenadaY, this.#ancho, this.#alto);
        ctx.closePath();
    }

    incrementarPuntaje(){
        this.#puntaje += 1;
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