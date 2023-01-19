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

        return `${hours.toString().padStart(2,0)}:${minutes}:${seconds} ${amOrPm} ${'// JM'}`;

    }

    setInterval(() => {
        const now = new Date();
        time.textContent = formatTime(now);
    }, 1000);

    // DELAY CONTENT LOAD
    const homeContent = document.querySelector('.home-container');
    const tsr = document.querySelector('.tsr');

    function delayedLoad () {

        setTimeout(() => {
            homeContent.style.opacity = '1';
            homeContent.style.transition = '500ms ease';
        }, 500);

        setTimeout(() => {
            tsr.style.opacity = '1';
            tsr.style.transition = '500ms ease';
            tsr.classList.add('tsr-displayed');
        }, 750);

    }

    delayedLoad();

    const images = document.querySelectorAll('.img-iterate');
    let i = 0;
    images[i].style.opacity = '1';

    
    function loadImg() {
        images[i].style.opacity = '0';
        i = (i + 1) % images.length;
        images[i].style.opacity = '1';
    }
    setTimeout(() => {
        setInterval(loadImg, 3000);
    }, 500);    

});
