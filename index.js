
setInterval(() => {
    let d = new Date();
    let htime = d.getHours();
    let mtime = d.getMinutes();
    let stime = d.getSeconds();
    let hr = 30 * htime + mtime / 2;
    let mr = 6 * mtime;
    let sr = 6 * stime;

    hour.style.transform = `rotate(${hr}deg)`
    min.style.transform = `rotate(${mr}deg)`
    sec.style.transform = `rotate(${sr}deg)`

    // DIgital TIme
    let digitalTime = document.getElementById("digitalTime");
    if (htime > 12) {
        htime -= 12;
    }
    if (htime < 10) {
        htime = `0` + htime;
    }
    if (mtime < 10) {
        mtime = `0` + mtime;
    }
    if (stime < 10) {
        stime = `0` + stime;
    }
    digitalTime.innerHTML = `${htime}:${mtime}:${stime}`;

    // Digitsl Date
    let day = d.getDate();
    let month = d.getMonth() + 1;
    let year = d.getFullYear();
    let fullday = d.getDay();

    if (day < 10) {
        day = `0` + day;
    }
    if (month < 10) {
        month = `0` + month;
    }

    let h2 = document.getElementById("fullDate");
    h2.innerHTML = `${day}/${month}/${year}`;

    let h3 = document.getElementById("fullDay");
    switch (fullday) {
        case 0: h3.innerHTML = `Sunday`
            break;
        case 1: h3.innerHTML = `Monday`
            break;
        case 2: h3.innerHTML = `Tuesday`
            break;
        case 3: h3.innerHTML = `Wednesday`
            break;
        case 4: h3.innerHTML = `Thrusday`
            break;
        case 5: h3.innerHTML = `Friday`
            break;
        case 6: h3.innerHTML = `Saturday`
            break;
        default: h3.innerHTML = `Good Day`
            break;
    }
}, 1000);
