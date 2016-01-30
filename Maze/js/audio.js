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
loadSound("sound/music.mp3");



















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