window.addEventListener('load', () => {

    // CURSOR
    const mycursor = document.querySelector('.cursor');

    window.addEventListener('mousemove', (e) => {
        mycursor.style.left = e.clientX + 'px';
        mycursor.style.top = e.clientY + 'px';
    });

    // CURRENT TIME DISPLAYED
    const time = document.querySelector('.time');

    /**
     * @param {Date} date 
     */
    function formatTime(date) {
        const hours = date.getHours() % 12 || 12;
        const minutes = date.getMinutes().toString().padStart(2,0);
        const seconds = date.getSeconds().toString().padStart(2,0);
        const amOrPm = date.getHours() < 12 ? "AM" : "PM";

        return `${hours.toString().padStart(2,0)}:${minutes}:${seconds} ${amOrPm} ${'// CDT'}`;

    }

    setInterval(() => {
        const now = new Date();
        time.textContent = formatTime(now);
    }, 1000);

    // DELAY CONTENT LOAD
    const conceptsContainer = document.querySelector('.concepts-inner-container');
    const tsr = document.querySelector('.tsr');

    function delayedLoad () {

        setTimeout(() => {
            conceptsContainer.style.opacity = '1';
            conceptsContainer.style.transition = '500ms ease';
        }, 500);

        setTimeout(() => {
            tsr.style.opacity = '1';
            tsr.style.transition = '500ms ease';
            tsr.classList.add('tsr-displayed');
        }, 750);

    }

    delayedLoad();

    const conceptsBtns = document.querySelectorAll('.concepts-button');

    conceptsBtns.forEach(conceptsBtn => {
        conceptsBtn.addEventListener('click', (e) => {
            const btnContent = conceptsBtn.nextElementSibling;
            conceptsBtn.classList.toggle('concepts-button-active');
            if(conceptsBtn.classList.contains('concepts-button-active')) {
                btnContent.style.height = 'max-content';
                btnContent.style.transform = 'scaleY(1)';
            } else {
                btnContent.style.height = '0';
                btnContent.style.transform = 'scaleY(0)';
            }
        });
    });


});