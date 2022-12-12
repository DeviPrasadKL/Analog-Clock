
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
    digitalTime.innerHTML = `${htime}:${mtime}:${stime}`;
    
//     Date

    let day = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    let fullday = d.getDay();

    let h2 = document.getElementById("fullDate");
    h2.innerHTML = `${day}/${month+1}/${year}`;

    let h3 = document.getElementById("fullDay");
    let key = fullday;
    switch (key) {
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
