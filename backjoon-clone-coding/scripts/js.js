document.querySelector('.icon').addEventListener('click', function () {
    if (document.querySelector('.nav').classList.contains('clicked')) {
        document.querySelector('.nav').classList.remove('clicked')
        document.querySelector('.icon2').classList.remove('clicked')
    }
    else {
        document.querySelector('.nav').classList.add('clicked')
        document.querySelector('.icon2').classList.add('clicked')
    }
});