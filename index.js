
setInterval(() => {
    let d = new Date();
    let htime = d.getHours();
    let mtime = d.getMinutes();
    let stime = d.getSeconds();
    let hr = 30*htime + mtime/2;
    let mr = 6*mtime;
    let sr = 6*stime;

    hour.style.transform = `rotate(${hr}deg)`
    min.style.transform = `rotate(${mr}deg)`
    sec.style.transform = `rotate(${sr}deg)`

}, 1000);