var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Entrepreneurship Studies')
    .pauseFor(2000)
    .deleteAll()
    .typeString('Computer Appreciation')
    .pauseFor(2000)
    .deleteChars(9)
    .typeString('lication')
    .pauseFor(2000)
    .deleteAll()
    .typeString('Graphics Design')
    .pauseFor(2000)
    .deleteAll()
    .typeString('Web Design')
    .pauseFor(2000)
    .deleteChars(4)
    .typeString('velopment')
    .pauseFor(2000)
    .start();