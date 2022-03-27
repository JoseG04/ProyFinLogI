window.addEventListener("load", main)

function main(){
    let btnInicio          = document.getElementById('btnInicio');
    let btnPausar          = document.getElementById('btnPausar');
    let escenarioInicial   = document.getElementById('escenarioInicial');
    let selectorDificultad = document.getElementById('selectorDificultad');
    let btnJugar           = document.getElementById('btnJugar');
    let btnEditorEstilos   = document.getElementById('btnEditorEstilos');
    let escenarioDeEstilos = document.getElementById('escenarioDeEstilos');
    let escenarioDeJuego   = document.getElementById('escenarioDeJuego');
    let canvasJuego        = document.getElementById('canvasJuego');
    let puntajeJugador1    = document.getElementById('puntajeJugador1');
    let puntajeJugador2    = document.getElementById('puntajeJugador2');
    let contadorRondas     = document.getElementById('contadorRondas');
    let juegoPausado       = document.getElementById('juegoPausado');
    let juegoTerminado     = document.getElementById('juegoTerminado');
    let msJuegoTerminado   = document.getElementById('msJuegoTerminado');
    let btnVolverInicio    = document.getElementById('btnVolverInicio');
    let btnVolverAJugar    = document.getElementById('btnVolverAJugar');
    let ctx                = canvasJuego.getContext("2d");
    let anchoCanvas        = canvasJuego.width;
    let altoCanvas         = canvasJuego.height;
    let dificultad         = 0.5;
    let nombreJugador1, nombreJugador2;

    let juego     = new Juego();
    let jugadores = new Array();
    jugadores.push(new Jugador("Jugador 1", 50, altoCanvas/2 - 30, 4, 4, 20, 60, ["color", "red"]));
    jugadores.push(new Jugador("Jugador 2", anchoCanvas - 70, altoCanvas/2 - 30, 4, 4, 20, 60, ["color", "blue"]));
    let pelota    = new Pelota(anchoCanvas/2, altoCanvas/2, dificultad, 0, ["sprite", [0, 0]]);

    btnJugar.addEventListener('click', registrarJugadores);

    btnEditorEstilos.addEventListener('click', ()=>{
        escenarioInicial.classList.remove('active');
        escenarioDeEstilos.classList.add('active');
        btnInicio.classList.add('active');
    });

    btnInicio.addEventListener('click', volverAlInicio);

    btnPausar.addEventListener('click', pausarJuego);

    selectorDificultad.addEventListener('click', (event)=>{
        if (event.path[0].classList[0] == "btnDificultad") {
            let btnFacil   = document.getElementById('facil');
            let btnMedio   = document.getElementById('medio');
            let btnDificil = document.getElementById('dificil');
            btnFacil.classList.remove('active');
            btnMedio.classList.remove('active');
            btnDificil.classList.remove('active');
            switch (event.path[0].id) {
                case "facil":
                    dificultad = 0.5 * 1;
                    btnFacil.classList.add('active');
                    break;
                case "medio":
                    dificultad = 0.5 * 2;
                    btnMedio.classList.add('active');
                    break;
                case "dificil":
                    dificultad = 0.5 * 3;
                    btnDificil.classList.add('active');
                    break;
            }
            pelota.velocidadX = dificultad;
        }
    });

    escenarioDeEstilos.addEventListener('click', (event)=>{
        let idEstiloSelecionado;
        let estiloSelecionado;
        if (event.path[0].classList[0] == "modEstilo1") {
            idEstiloSelecionado = event.path[0].id;
            let colorSelecionado = idEstiloSelecionado.split('-');
            estiloSelecionado = document.getElementsByClassName(event.path[0].classList[0]);
            for (i = 0; i < estiloSelecionado.length; i++) {
                estiloSelecionado[i].classList.remove('active');
            }
            document.getElementById(event.path[0].id).classList.add('active');
            jugadores[0].estilo = ["color", colorSelecionado[0]];
        }else if(event.path[0].classList[0] == "modEstilo2"){
            idEstiloSelecionado = event.path[0].id;
            let colorSelecionado = idEstiloSelecionado.split('-');
            estiloSelecionado = document.getElementsByClassName(event.path[0].classList[0]);
            for (i = 0; i < estiloSelecionado.length; i++) {
                estiloSelecionado[i].classList.remove('active');
            }
            document.getElementById(event.path[0].id).classList.add('active');
            jugadores[1].estilo = ["color", colorSelecionado[0]];
        }
    });

    btnVolverInicio.addEventListener('click', ()=>{
        volverAlInicio();
        juegoTerminado.classList.remove('active');
    });

    btnVolverAJugar.addEventListener('click', ()=>{
        juegoTerminado.classList.remove('active');
        juego.ronda = 1;
        jugadores[0].puntaje = 0;
        jugadores[1].puntaje = 0;
        contadorRondas.innerHTML = 'RONDA ' + juego.ronda;
        puntajeJugador1.innerHTML = jugadores[0].puntaje;
        puntajeJugador2.innerHTML = jugadores[1].puntaje;
        reiniciar();
        requestAnimationFrame(moverPelota);
    });

    window.addEventListener("keydown", (e)=>{
        if (juego.estado == "jugando") {
            ctx.clearRect(0, 0, 600, 400);
            switch(e.code){
                case "ArrowUp":
                case "KeyI":
                    if (jugadores[1].coordenadaY > 0) {
                        jugadores[1].desplazarArriba();
                    }
                    break;
                case "ArrowDown":
                case "KeyK":
                    if(jugadores[1].coordenadaY + jugadores[1].alto < altoCanvas){
                        jugadores[1].desplazarAbajo(); 
                    }
                    break;
                case "KeyW":
                    if (jugadores[0].coordenadaY > 0) {
                        jugadores[0].desplazarArriba();
                    }
                    break;
                case "KeyS":
                    if(jugadores[0].coordenadaY + jugadores[0].alto < altoCanvas){
                        jugadores[0].desplazarAbajo(); 
                    }
                    break;
                case "Space":
                    pausarJuego();
                    break;
                case "Enter":
                    break;
            }
            dibujarTodo();
        }else if(juego.estado == "pausado"){
            if (e.code == "Space") {
                juego.cambiarEstadoDeJuego();
                juegoPausado.classList.remove('active');
                requestAnimationFrame(moverPelota);
                btnPausar.disabled = false;
            }
        }
    })

    function moverPelota() {
        if (juego.estado == "jugando") {
            if (juego.ronda <= juego.maxRondas) {
                ctx.clearRect(0, 0, anchoCanvas, altoCanvas);
                pelota.colisionarArriba(0);
                pelota.colisionarAbajo(altoCanvas);
                pelota.colisionarConJugador(jugadores[0], dificultad);
                pelota.colisionarConJugador(jugadores[1], dificultad);
                pelota.desplazarDerecha();
                pelota.desplazarArriba();
                dibujarTodo();

                if (pelota.salirDerecha(anchoCanvas)) {
                    jugadores[0].incrementarPuntaje();
                    juego.cambiarRonda();
                    puntajeJugador1.innerHTML = jugadores[0].puntaje;
                    if (juego.ronda == juego.maxRondas) {
                        contadorRondas.innerHTML = 'RONDA FINAL';
                    }else{
                        contadorRondas.innerHTML = 'RONDA ' + juego.ronda;
                    }
                    cancelAnimationFrame(moverPelota);
                    reiniciar();
                }
                if (pelota.salirIzquierda(0)) {
                    jugadores[1].incrementarPuntaje();
                    juego.cambiarRonda();
                    puntajeJugador2.innerHTML = jugadores[1].puntaje;
                    if (juego.ronda == juego.maxRondas) {
                        contadorRondas.innerHTML = 'RONDA FINAL';
                    }else{
                        contadorRondas.innerHTML = 'RONDA ' + juego.ronda;
                    }
                    cancelAnimationFrame(moverPelota);
                    reiniciar();
                }
                requestAnimationFrame(moverPelota);
            }else{
                if (jugadores[0].puntaje > jugadores[1].puntaje) {
                    finalizarJuego(jugadores[0].nombre);
                }else{
                    finalizarJuego(jugadores[1].nombre);
                }
            }
        }
    }

    function dibujarTodo() {
        juego.aplicarEstilo(ctx, canvasJuego, escenarioDeJuego, anchoCanvas, altoCanvas);
        jugadores[0].dibujar(ctx);
        jugadores[1].dibujar(ctx);
        pelota.dibujar(ctx)
    }

    function reiniciar() {
        pelota.coordenadaX = anchoCanvas/2;
        pelota.coordenadaY = altoCanvas/2;
        jugadores[0].coordenadaY = altoCanvas/2 - jugadores[0].alto/2;
        jugadores[1].coordenadaY = altoCanvas/2 - jugadores[1].alto/2;
        pelota.velocidadY = 0;
        pelota.estilo = ["sprite", [random(0,2), random(0,3)]]
    }

    function pausarJuego() {
        juegoPausado.classList.add('active');
        juego.cambiarEstadoDeJuego();
        cancelAnimationFrame(moverPelota);
        btnPausar.disabled = true;
    }

    function volverAlInicio() {
        escenarioDeEstilos.classList.remove('active');
        escenarioDeJuego.classList.remove('active');
        escenarioInicial.classList.add('active');
        btnInicio.classList.remove('active');
        btnPausar.classList.remove('active');
        jugadores[0].puntaje = 0;
        jugadores[1].puntaje = 0;
        juego.estado = "inicial";
        juego.ronda  = 1;
        reiniciar();
    }

    function registrarJugadores() {
        nombreJugador1  = document.getElementById('nombreJugador1').value;
        nombreJugador2  = document.getElementById('nombreJugador2').value;
        let nomJugador1 = document.getElementById('nomJugador1');
        let nomJugador2 = document.getElementById('nomJugador2');
        if (nombreJugador1 != "" && nombreJugador2 != "") {
            escenarioInicial.classList.remove('active');
            escenarioDeJuego.classList.add('active');
            btnInicio.classList.add('active');
            btnPausar.classList.add('active');
            jugadores[0].nombre = nombreJugador1;
            jugadores[1].nombre = nombreJugador2;
            nomJugador1.innerHTML = nombreJugador1;
            nomJugador2.innerHTML = nombreJugador2;
            juego.cambiarEstadoDeJuego();
            dibujarTodo();
        }else{
            alert("Debes introducir un nombre para cada jugador");
        }
        moverPelota();
        puntajeJugador1.innerHTML = jugadores[0].puntaje;
        puntajeJugador2.innerHTML = jugadores[1].puntaje;
        contadorRondas.innerHTML = 'RONDA ' + juego.ronda;
    }

    function finalizarJuego(nombreGanador) {
        juegoTerminado.classList.add('active');
        msJuegoTerminado.innerHTML = nombreGanador.toUpperCase() + ' ES EL GANADOR';
    }

    function random(min, max) {
        return Math.floor(Math.random() * (1 + max - min) + min);
    }
}