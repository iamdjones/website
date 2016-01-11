// check if the default naming is enabled, if not use the chrome one.
if (!window.AudioContext) {
    if (!window.webkitAudioContext) {
        alert('no audiocontext found');
    }
    window.AudioContext = window.webkitAudioContext;
}
var audioCtx = new AudioContext();
var audioBuffer;
var sourceNode;

// load the sound
setupAudioNodes();
loadSound("sound/music.m4a");



















function setupAudioNodes() {
    // create a buffer source node
    sourceNode = audioCtx.createBufferSource();
    // and connect to destination
    sourceNode.connect(audioCtx.destination);
}

// load the specified sound
function loadSound(url) {


    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'arraybuffer';

    // When loaded decode the data
    request.onload = function () {

        // decode the data
        audioCtx.decodeAudioData(request.response, function (buffer) {
            // when the audio is decoded play the sound

            playSound(buffer);
        }, onError);

    };
    request.send();
}


function playSound(buffer) {
    sourceNode.buffer = buffer;
    sourceNode.start(0);
}

// log if an error occurs
function onError(e) {
    console.log(e);
}
//
//
//var analyser = audioCtx.createAnalyser();
//
//analyser.fftSize = 2048;
//var bufferLength = analyser.fftSize;
//var dataArray = new Uint8Array(bufferLength);
//analyser.getByteTimeDomainData(dataArray);
//// draw an oscilloscope of the current audio source
//
//    var canvas = document.getElementById('poo');
//    var canvasCtx = canvas.getContext('2d');
//
//    console.log('let\' see what\'s in here:', canvas);
function draw() {
    WIDTH = 500;
    HEIGHT = 400;

    // Get the drawing context
    

    // Then you can do stuff, e.g.:
    canvasCtx.fillStyle = '#f00';
    canvasCtx.fillRect(20,10,80,50);

    drawVisual = requestAnimationFrame(draw);

    analyser.getByteTimeDomainData(dataArray);

    canvasCtx.fillStyle = 'rgb(200, 200, 200)';
    canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

    canvasCtx.lineWidth = 2;
    canvasCtx.strokeStyle = 'rgb(0, 0, 0)';

    canvasCtx.beginPath();
    console.log('hi:', bufferLength);
    var sliceWidth = WIDTH * 1.0 / bufferLength;
    var x = 0;

    for(var i = 0; i < bufferLength; i++) {
   
        var v = dataArray[i] / 128.0;
        var y = v * HEIGHT/2;

        if(i === 0) {
          canvasCtx.moveTo(x, y);
        } else {
          canvasCtx.lineTo(x, y);
        }

        x += sliceWidth;
    }

    canvasCtx.lineTo(canvas.width, canvas.height/2);
    canvasCtx.stroke();
};

//draw();
