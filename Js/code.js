window.addEventListener("load", main)

function main(){
    let btnInicio          = document.getElementById('btnInicio');
    let btnPausar          = document.getElementById('btnPausar');
    let escenarioInicial   = document.getElementById('escenarioInicial');
    let selectorDificultad = document.getElementById('selectorDificultad');
    let btnJugar           = document.getElementById('btnJugar');
    let btnEditorEstilos   = document.getElementById('btnEditorEstilos');
    let escenarioDeEstilos = document.getElementById('escenarioDeEstilos');
    let canvasJuego        = document.getElementById('canvasJuego');
    let escenarioDeJuego   = document.getElementById('escenarioDeJuego');
    let ctx                = canvasJuego.getContext("2d");
    let anchoCanvas        = canvasJuego.width;
    let altoCanvas         = canvasJuego.height;
    let dificultad         = 0.5;
    let nombreJugador1, nombreJugador2;

    let juego    = new Juego();
    let jugador1 = new Jugador("Jugador 1", 50, altoCanvas/2 - 30, 4, 4, 20, 60, ["color", "red"]);
    let jugador2 = new Jugador("Jugador 2", anchoCanvas - 70, altoCanvas/2 - 30, 4, 4, 20, 60, ["color", "blue"]);
    let pelota   = new Pelota(anchoCanvas/2, altoCanvas/2, dificultad, 0, ["sprite", [0, 0]]);

    btnJugar.addEventListener('click', registrarJugadores);

    btnEditorEstilos.addEventListener('click', ()=>{
        escenarioInicial.classList.remove('active');
        escenarioDeEstilos.classList.add('active');
        btnInicio.classList.add('active');
    });

    btnInicio.addEventListener('click', ()=>{
        escenarioDeEstilos.classList.remove('active');
        escenarioDeJuego.classList.remove('active');
        escenarioInicial.classList.add('active');
        btnInicio.classList.remove('active');
        btnPausar.classList.remove('active');
        juego.estado = "inicial";
        reiniciar();
    });

    selectorDificultad.addEventListener('click', (e)=>{
        if (e.path[0].classList[0] == "btnDificultad") {
            let btnFacil   = document.getElementById('facil');
            let btnMedio   = document.getElementById('medio');
            let btnDificil = document.getElementById('dificil');
            btnFacil.classList.remove('active');
            btnMedio.classList.remove('active');
            btnDificil.classList.remove('active');
            switch (e.path[0].id) {
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

    window.addEventListener("keydown", (e)=>{
        if (juego.estado == "jugando") {
            ctx.clearRect(0, 0, 600, 400);
            switch(e.code){
                case "ArrowUp":
                    if (jugador2.coordenadaY > 0) {
                        jugador2.desplazarArriba();
                    }
                    break;
                case "ArrowDown":
                    if(jugador2.coordenadaY + jugador2.alto < altoCanvas){
                        jugador2.desplazarAbajo(); 
                    }
                    break;
                case "KeyW":
                    if (jugador1.coordenadaY > 0) {
                        jugador1.desplazarArriba();
                    }
                    break;
                case "KeyS":
                    if(jugador1.coordenadaY + jugador1.alto < altoCanvas){
                        jugador1.desplazarAbajo(); 
                    }
                    break;
                case "Space":
                    break;
            }
            dibujarTodo();
        }
    })

    function moverPelota() {
        if (juego.estado == "jugando") {
            ctx.clearRect(0, 0, anchoCanvas, altoCanvas);
            pelota.colisionarArriba(0);
            pelota.colisionarAbajo(altoCanvas);
            pelota.colisionarConJugador(jugador1, dificultad);
            pelota.colisionarConJugador(jugador2, dificultad);
            pelota.desplazarDerecha();
            pelota.desplazarArriba();
            dibujarTodo();

            if (pelota.salirDerecha(anchoCanvas)) {
                alert(jugador1.nombre + " es el ganador");
                cancelAnimationFrame(moverPelota);
                reiniciar();
            }
            if (pelota.salirIzquierda(0)) {
                alert(jugador2.nombre + " es el ganador");
                cancelAnimationFrame(moverPelota);
                reiniciar();
            }
            requestAnimationFrame(moverPelota);
        }
    }

    function dibujarTodo() {
        juego.aplicarEstilo(ctx, canvasJuego, escenarioDeJuego, anchoCanvas, altoCanvas);
        jugador1.dibujar(ctx);
        jugador2.dibujar(ctx);
        pelota.dibujar(ctx)
    }

    function reiniciar() {
        pelota.coordenadaX = anchoCanvas/2;
        pelota.coordenadaY = altoCanvas/2;
        jugador1.coordenadaY = altoCanvas/2 - jugador1.alto/2;
        jugador2.coordenadaY = altoCanvas/2 - jugador2.alto/2;
        pelota.velocidadY = 0;
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
            jugador1.nombre = nombreJugador1;
            jugador2.nombre = nombreJugador2;
            nomJugador1.innerHTML = nombreJugador1;
            nomJugador2.innerHTML = nombreJugador2;
            juego.cambiarEstadoDeJuego();
            dibujarTodo();
        }else{
            alert("Debes introducir un nombre para cada jugador");
        }
        moverPelota();
    }

    function random(min, max) {
        return Math.floor(Math.random() * (1 + max - min) + min);
    }
}