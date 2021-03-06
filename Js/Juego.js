class Juego{
    #estado;
    #maxRondas;
    #ronda;
    #dificuldad;
    #estilo;

    constructor(){
        this.#estado     = "inicial";
        this.#maxRondas  = 5;
        this.#ronda      = 1;
        this.#dificuldad = 1;
        this.#estilo     = ["#000", "#FFF"];
    }

    aplicarEstilo(ctx, canvas, fondo, ancho, alto){
        //Aplicar los estilos del diseño
        canvas.style.backgroundColor = this.#estilo[0];
        fondo.style.backgroundColor  = this.#estilo[0];
        
        //Dibujar elementos del escenario(cancha)
        ctx.beginPath();
        ctx.fillStyle = this.#estilo[1];
        ctx.fillRect(ancho/2 - 5, 0, 10, alto);
        ctx.arc(ancho/2, alto/2, 60, 0, 2.0 * Math.PI);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = this.#estilo[0];
        ctx.arc(ancho/2, alto/2, 50, 0, 2.0 * Math.PI);
        ctx.fill();
        ctx.closePath();

    }

    cambiarEstadoDeJuego(){
        switch (this.#estado) {
            case "inicial":
                this.#estado = "jugando"
                break;
            case "jugando":
                    this.#estado = "pausado"
                    break;
            case "pausado":
                this.#estado = "jugando"
                break;
        }
    }

    cambiarRonda(){
        this.#ronda += 1;
    }

    // Getters
    get estado(){
        return this.#estado;
    }

    get maxRondas(){
        return this.#maxRondas;
    }

    get ronda(){
        return this.#ronda;
    }

    get dificultad(){
        return this.#dificuldad;
    }

    get estilo(){
        return this.#estilo;
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

    set dificultad(dificultad){
        this.#dificuldad = dificultad;
    }

    set estilo(estilo){
        this.#estilo = estilo;
    }
}