document.body.addEventListener('keypress', onKeyPress);
document.querySelector('#playBtn').addEventListener('click', playChannel);
const channel = [];
const recordStart = Date.now();


function onKeyPress(ev) {
    let sound;
    let soundName;
    switch (ev.code) {
        case 'KeyA':
            soundName = 'boom';
            sound = document.querySelector('#boom');
            changeColor(".player1");
            break;
        case 'KeyS':
            soundName = 'clap';
            sound = document.querySelector('#clap');
            changeColor(".player2");
            break;
        case 'KeyD':
            soundName = 'hihat';
            sound = document.querySelector('#hihat');
            changeColor(".player3");
            break;
        case 'KeyE':
            soundName = 'kick';
            sound = document.querySelector('#kick');
            changeColor(".player4");
            break;
        case 'KeyF':
            soundName = 'hat';
            sound = document.querySelector('#hat');
            changeColor(".player5");
            break;
        case 'KeyG':
            soundName = 'ride';
            sound = document.querySelector('#ride');
            changeColor(".player6");
            break;
        case 'KeyH':
            soundName = 'snare';
            sound = document.querySelector('#snare');
            changeColor(".player7");
            break;
        case 'KeyI':
            soundName = 'tink';
            sound = document.querySelector('#tink');
            changeColor(".player8");
            break;
        case 'KeyJ':
            soundName = 'way';
            sound = document.querySelector('#way');
            changeColor(".player9");
            break;
    }


    if (sound) {
        const keyPressTime = Date.now() - recordStart;
        const recordedSound = {
            sound: soundName,
            time: keyPressTime
        };
        channel.push(recordedSound);
        sound.play();
    }
}

function playChannel() {
    for (let index = 0; index < channel.length; index++) {
        const soundObject = channel[index];
        setTimeout(
            () => {
                playSound(soundObject.sound);
            },
            soundObject.time
        );
    }

}

function playSound(soundName) {
    const sound = document.querySelector('#' + soundName);
    sound.play();
}

function changeColor(e) {
    document.querySelector(e).classList.add("press");
    setTimeout(function () {
        document.querySelector(e).classList.remove("press");
    }, 500)
}