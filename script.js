for (var i = 0; i < 4; i++) {
    document.addEventListener('keypress', function (event) {
        var text = event.key;
        console.log(text)

        // Audio play
        switch (text) {
            case 'a':
                var audio = new Audio('/sounds/A.wav');
                audio.play();
                break;
            case 'b':
                var audio = new Audio('/sounds/B.wav');
                audio.play();
                break;
            case 'c':
                var audio = new Audio('/sounds/C.wav');
                audio.play();
                break;
            case 'd':
                var audio = new Audio('/sounds/D.wav');
                audio.play();
                break;
            case 'e':
                var audio = new Audio('/sounds/E.wav');
                audio.play();
                break;
            case 'f':
                var audio = new Audio('/sounds/F.wav');
                audio.play();
                break;
            case 'g':
                var audio = new Audio('/sounds/G.wav');
                audio.play();
                break;
            case 'h':
                var audio = new Audio('/sounds/H.wav');
                audio.play();
                break;
            case 'i':
                var audio = new Audio('/sounds/I.wav');
                audio.play();
                break;
            case 'j':
                var audio = new Audio('/sounds/J.wav');
                audio.play();
                break;
            case 'k':
                var audio = new Audio('/sounds/K.wav');
                audio.play();
                break;
            case 'l':
                var audio = new Audio('/sounds/L.wav');
                audio.play();
                break;
            case 'm':
                var audio = new Audio('/sounds/M.wav');
                audio.play();
                break;
            case 'n':
                var audio = new Audio('/sounds/N.wav');
                audio.play();
                break;
            case 'o':
                var audio = new Audio('/sounds/O.wav');
                audio.play();
                break;
            case 'p':
                var audio = new Audio('/sounds/P.wav');
                audio.play();
                break;
            case 'q':
                var audio = new Audio('/sounds/Q.wav');
                audio.play();
                break;
            case 'r':
                var audio = new Audio('/sounds/R.wav');
                audio.play();
                break;
            case 's':
                var audio = new Audio('/sounds/S.wav');
                audio.play();
                break;
            case 't':
                var audio = new Audio('/sounds/T.wav');
                audio.play();
                break;
            case 'u':
                var audio = new Audio('/sounds/U.wav');
                audio.play();
                break;
            case 'v':
                var audio = new Audio('/sounds/V.wav');
                audio.play();
                break;
            case 'w':
                var audio = new Audio('/sounds/W.wav');
                audio.play();
                break;
            case 'x':
                var audio = new Audio('/sounds/X.wav');
                audio.play();
                break;
            case 'y':
                var audio = new Audio('/sounds/Y.wav');
                audio.play();
                break;
            case 'z':
                var audio = new Audio('/sounds/Z.wav');
                audio.play();
                break;
        };

        // Animation
        var selectedButton = document.querySelector("." + text);
        console.log(selectedButton)
        selectedButton.classList.add("anim");

        setTimeout(function () {
            selectedButton.classList.remove("anim");
            heading.classList.remove('text-style');
        }, 500);

        // Text color
        var heading = document.querySelector('h1');
        heading.innerHTML='You are pressed '+text.toUpperCase()+' key';
        heading.classList.add('text-style');
    });
};