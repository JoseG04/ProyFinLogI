window.addEventListener("load", main)

function main(){
    let canvasJuego = document.getElementById('canvasJuego');
    let escenarioDeJuego  = document.getElementById('escenarioDeJuego')
    let ctx = canvasJuego.getContext("2d");
    let anchoCanvas = canvasJuego.clientWidth;
    let altoCanvas  = canvasJuego.clientHeight;
    let dificultad = 0.5;

    let juego = new Juego();
    let jugador1 = new Jugador("Jose", 50, altoCanvas/2 - 30, 4, 4, 20, 60, ["color", "#ff0000"]);
    let jugador2 = new Jugador("David", anchoCanvas - 70, altoCanvas/2 - 30, 4, 4, 20, 60, ["color", "#fff"]);
    let pelota   = new Pelota(anchoCanvas/2, altoCanvas/2, 1*dificultad, 0, ["sprite", [0, 0]]);

    juego.aplicarEstilo(ctx, canvasJuego, escenarioDeJuego, anchoCanvas, altoCanvas);
    jugador1.dibujar(ctx);
    jugador2.dibujar(ctx);
    pelota.dibujar(ctx);

    function moverPelota() {
        ctx.clearRect(0, 0, anchoCanvas, altoCanvas);
        pelota.colisionarArriba(0);
        pelota.colisionarAbajo(altoCanvas);
        pelota.colisionarConJugador(jugador1, dificultad);
        pelota.colisionarConJugador(jugador2, dificultad);
        pelota.desplazarDerecha();
        pelota.desplazarArriba();
        juego.aplicarEstilo(ctx, canvasJuego, escenarioDeJuego, anchoCanvas, altoCanvas);
        pelota.dibujar(ctx);
        jugador1.dibujar(ctx);
        jugador2.dibujar(ctx);

        if (pelota.salirDerecha(anchoCanvas)) {
            alert("Jugador 1 Gana");
            cancelAnimationFrame(moverPelota);
            pelota.coordenadaX = anchoCanvas/2;
            pelota.coordenadaY = altoCanvas/2;
            jugador1.coordenadaY = altoCanvas/2 - jugador1.alto/2;
            jugador2.coordenadaY = altoCanvas/2 - jugador2.alto/2;
            pelota.velocidadY = 0;
        }
        if (pelota.salirIzquierda(0)) {
            alert("Jugador 2 Gana");
            cancelAnimationFrame(moverPelota);
            pelota.coordenadaX = anchoCanvas/2;
            pelota.coordenadaY = altoCanvas/2
            jugador1.coordenadaY = altoCanvas/2 - jugador1.alto/2;
            jugador2.coordenadaY = altoCanvas/2 - jugador2.alto/2;
            pelota.velocidadY = 0;
        }
        requestAnimationFrame(moverPelota)
    }

    moverPelota();

    window.addEventListener("keydown", (e)=>{
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
                if (jugador2.coordenadaY > 0) {
                    jugador1.desplazarArriba();
                }
                break;
            case "KeyS":
                if(jugador1.coordenadaY + jugador1.alto < altoCanvas){
                    jugador1.desplazarAbajo(); 
                }
                    break;
        }
        juego.aplicarEstilo(ctx, canvasJuego, escenarioDeJuego, anchoCanvas, altoCanvas);
        jugador1.dibujar(ctx);
        jugador2.dibujar(ctx);
        pelota.dibujar(ctx)
    })

    function rellenarEstilo() {
        let contEsilosPelota = document.getElementById('contEsilosPelota');
        let imagenPelotas = new Image();
        imagenPelotas.src = "images/spritePelotas.png";
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 4; j++) {
                let nombreCanvas = 'canvas' + i + '-' + j;
                contEsilosPelota.innerHTML += '<canvas id="' + nombreCanvas + '"width="50px" height="50px"></canvas>'
            }
        }
        setInterval(() => {
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 4; j++) {
                    let nombreCanvas = 'canvas' + i + '-' + j;
                    let canvasEstiloPelota = document.getElementById(nombreCanvas);
                    let ctxEstilos = canvasEstiloPelota.getContext('2d');
                    ctxEstilos.drawImage(imagenPelotas, 100*i, 100*j, 100, 100, 0, 0, 50, 50);
                }
            }
        }, 1);
    }

    rellenarEstilo();
}