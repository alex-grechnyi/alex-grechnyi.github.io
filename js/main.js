window.addEventListener('load', () => {
    const keys = document.querySelectorAll('.key');
    bindClickListener(keys);
    bindKeyDownListener();
    bindKeyUpListener();
    

    function bindClickListener (keys) {
        for (let i = 0; i < keys.length; i++) {
            let key;
            keys[i].addEventListener('mousedown', function (e) {
                key = e.target;
                playNote(key);
            });
            keys[i].addEventListener('mouseup', function (e) {
                removeActiveClass(key);
            });
        }
    }
    function bindKeyDownListener() {
        document.addEventListener('keydown', function (e) {
            const key = document.querySelector(`.key[data-key="${e.code}"]`);
            if (key === null) {
                return
            }
            playNote(key);
        });
    }
    function bindKeyUpListener() {
        document.addEventListener('keyup', function (e) {
            const key = document.querySelector(`.key[data-key="${e.code}"]`);
            if (key === null) {
                return
            }
            removeActiveClass(key);
        });
    }

    const addActiveClass = (key) => {
        key.classList.add('key-active');
    };
    const removeActiveClass = (key) => {
        key.classList.remove('key-active');
    };
    const playNote = (key) => {
        const currentNote = key.getAttribute('data-key');
        const currentNoteSound = new Audio(`audio/${currentNote}.mp3`);
        console.log(currentNoteSound);
        currentNoteSound.play();
        addActiveClass(key);
    };



});