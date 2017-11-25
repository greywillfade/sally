//The DeviceLightEvent interface provides information about the ambient light levels, as detected by the device's light detector, in terms of lux units.
window.addEventListener('devicelight', function(e) {
    var lux;
    lux = e.value;
    document.querySelector('#devicelightresult').textContent = lux + ' lux';

    //Levels correspond to the recommended values as per the spec, but readings will vary per device
    if (lux < 50) {
        document.body.className = "dim";
        document.getElementById("brightness").className = "dim";
    }
    if (lux >= 50 && lux <= 10000) {
        document.body.className = "normal";
        document.getElementById("brightness").className = "normal";
    }
    if (lux > 10000) {
        document.body.className = "washed";
        document.getElementById("brightness").className = "washed";
    }
});

//Note that we could do the call for window.addEventListener('lightlevel', function(e) {}, but this has not yet been implemented by browsers. The event would return a value of either "dim", "normal" or "bright".

//Disco mode!
/*window.setInterval(function() {
    var lightArr, lightVal;
    lightArr = ['dim', 'normal', 'washed']; 
    lightVal = lightArr[Math.floor(Math.random() * lightArr.length)];
    document.body.className = lightVal;
    document.getElementById("brightness").className = lightVal;
}, 200);*/