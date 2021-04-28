'use strict';

function timeExecuted() {
    const firstTime = new Date();
    const interval = setInterval(() => {
        const regularTime = new Date();
        const time = regularTime - firstTime;
        console.log(formatTime(time));
    }, 5000);
}

timeExecuted();

function formatTime(duration) {
    const milliseconds = parseInt((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24),
        days = Math.floor((duration / (1000 * 60 * 60 * 24)) % 365);

    return `Days ${days} - hours ${hours} - minutes ${minutes} - seconds ${seconds} - milliseconds ${milliseconds}`;
}
formatTime();
