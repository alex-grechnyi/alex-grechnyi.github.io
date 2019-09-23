window.addEventListener('load', () => {
    const keys = document.querySelectorAll('.key');
    for (let i = 0; i < keys.length; i++) {
        keys[i].addEventListener('mousedown', function (e) {
            const key = e.target;
            if (key === null) {
                return
            }
            addActiveClass(key);
        });
        keys[i].addEventListener('mouseup', function (e) {
            const key = e.target;
            if (key === null) {
                return
            }
            removeActiveClass(key);
        });
    }
    document.addEventListener('keydown', function (e) {
        const key = document.querySelector(`.key[data-key="${e.key}"]`);
        if (key === null) {
            return
        }
        addActiveClass(key);
    });
    document.addEventListener('keyup', function (e) {
        const key = document.querySelector(`.key[data-key="${e.key}"]`);
        if (key === null) {
            return
        }
        removeActiveClass(key);
    });

    const addActiveClass = (key) => {
        key.classList.add('key-active');
    };
    const removeActiveClass = (key) => {
        key.classList.remove('key-active');
    };

});