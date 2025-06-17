document.addEventListener('DOMContentLoaded', function() {
    const userBestTime = document.getElementById('best-time');

    if (typeof localStorage !== 'undefined') {
        let bestTime = localStorage.getItem('best');

        if (!bestTime || isNaN(parseFloat(bestTime))) {
            bestTime = Infinity;
        }

        userBestTime.textContent = formatTime(bestTime);
    } else {
        userBestTime.textContent = 'LocalStorage não suportado';
    }
});

function formatTime(time) {
    if (time === Infinity) {
        return '00.000';
    }

    time = Math.round(time);
    let outputTime = time / 1000;
    if (time < 10000) {
        outputTime = '0' + outputTime;
    }
    while (outputTime.length < 6) {
        outputTime += '0';
    }
    return outputTime;
}
