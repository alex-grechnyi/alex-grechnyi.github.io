window.addEventListener('load', () => {
    const keys = document.querySelectorAll('.key');
    const playButton = document.querySelector('.play');
    const song = ['KeyG', 'KeyK', 'KeyP', 'KeyL', 'KeyK', 'KeyP', 'KeyK', 'KeyL', 'KeyK', 'KeyY', 'KeyU', 'KeyG'];
    const piano = new Piano(playButton, song);
    bindDemoPlayListener();
    bindClickListener(keys);
    bindKeyDownListener();
    bindKeyUpListener();

    function bindDemoPlayListener() {
        playButton.addEventListener('click', (e) => {
            piano.demoPlay(e);
        });
    }

    function bindClickListener (keys) {
        keys.forEach(key => {
            key.addEventListener('mousedown', e => {
                key = e.target;
                piano.playNote(key);
            });
            key.addEventListener('mouseup', () => {
                keys.forEach(key => {
                    piano.removeActiveClass(key)
                })
            });
        });
    }

    function bindKeyDownListener() {
        document.addEventListener('keydown', e => {
            const key = document.querySelector(`.key[data-key="${e.code}"]`);
            if (key === null) return;
            piano.playNote(key);
        });
    }

    function bindKeyUpListener() {
        document.addEventListener('keyup', e => {
            const key = document.querySelector(`.key[data-key="${e.code}"]`);
            if (key === null)return;
            piano.removeActiveClass(key);
        });
    }
});