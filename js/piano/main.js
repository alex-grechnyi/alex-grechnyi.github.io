window.addEventListener('load', () => {
    const keys = document.querySelectorAll('.key');
    const playButton = document.querySelector('.play');
    bindClickListener(keys);
    bindKeyDownListener();
    bindKeyUpListener();
    playButton.addEventListener('click', demoPlay);

    function bindClickListener (keys) {
        for (let i = 0; i < keys.length; i++) {
            let key;
            keys[i].addEventListener('mousedown', function (e) {
                key = e.target;
                playNote(key);
            });
            keys[i].addEventListener('mouseup', function () {
                removeActiveClass(key);
            });
        }
    }

    function bindKeyDownListener() {
        document.addEventListener('keydown', function (e) {
            const key = document.querySelector(`.key[data-key="${e.code}"]`);
            if (key === null) return;
            playNote(key);
        });
    }

    function bindKeyUpListener() {
        document.addEventListener('keyup', function (e) {
            const key = document.querySelector(`.key[data-key="${e.code}"]`);
            if (key === null)return;
            removeActiveClass(key);
        });
    }

    function demoPlay (e) {
        const song = ['Semicolon', 'KeyP', 'Semicolon', 'KeyP', 'Semicolon', 'KeyJ', 'KeyL', 'KeyK', 'KeyH'];
        let isEnd = false;
        let button = e.target;
        button.disabled = true;
        let i = 0;
        let key = document.querySelector(`.key[data-key="${song[i]}"]`);
        let currentNote = new Audio(`audio/${song[i]}.mp3`);
        currentNote.play();
        currentNote.addEventListener('pause', next);
        addActiveClass(key);
        //force active class removing
        setTimeout(() => {
            removeActiveClass(key);
        },570);

        const pause = setInterval(() => {
            isEnd && clearInterval(pause);
            i += 1;
            currentNote.pause();
            key = document.querySelector(`.key[data-key="${song[i]}"]`);
            removeActiveClass(key);
        }, 580);

        function next() {
            if (isEnd) return;
            addActiveClass(key);
            currentNote.src = `audio/${song[i]}.mp3`;
            currentNote.play();
            const removeActiveClassInterval = setInterval(() => {
                key = document.querySelector(`.key[data-key="${song[i]}"]`);
                removeActiveClass(key);
                isEnd && clearInterval(removeActiveClassInterval);
            }, 560);
            if (i > song.length-2) {
                isEnd = true;
                button.disabled = false;
            }
        }
    }
    const addActiveClass = (key) => {
        key.classList.add('key-active');
    };
    const removeActiveClass = (key) => {
        key.classList.remove('key-active');
    };
    const playNote = (key) => {
        const currentNoteKey = key.getAttribute('data-key');
        const currentNote = new Audio(`audio/${currentNoteKey}.mp3`);
        currentNote.play();
        addActiveClass(key);
    };
});