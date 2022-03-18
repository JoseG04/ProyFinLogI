class Juego{
    #estado;
    #maxRondas;
    #ronda;
    #estilo;
    #ganador;

    constructor(){
        this.#estado    = "inicial";
        this.#maxRondas = 5;
        this.#ronda     = 1;
        this.#estilo    = ["Blck", "White"];
        this.#ganador   = undefined;
    }

    aplicarEstilo(){

    }

    reiniciar(){

    }

    cambiarEstadoDeJuego(){

    }

    // Getters
    get estado(){
        return this.#estado;
    }

    get maxRondas(){
        this.#maxRondas;
    }

    get ronda(){
        return this.#ronda;
    }

    get estilo(){
        return this.#estilo;
    }

    get ganador(){
        return this.#ganador;
    }

    // Setters
    set estado(estado){
        this.#estado = estado;
    }

    set maxRondas(rondas){
        this.#maxRondas = rondas;
    }

    set ronda(ronda){
        this.#ronda = ronda;
    }

    set estilo(estilo){
        this.#estilo = estilo;
    }

    set ganador(ganador){
        this.#ganador = ganador;
    }
}