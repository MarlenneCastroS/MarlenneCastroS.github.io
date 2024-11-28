var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Ingeniera Mecatrónica.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('¡Iniciando mi camino en la Tecnología e Ingeniería!')
    .pauseFor(2500)
    //Número de caracteres que se borrarán
    .deleteChars(27)
    .typeString('<strong>STEM!</strong>')
    .pauseFor(2500)
    .start();