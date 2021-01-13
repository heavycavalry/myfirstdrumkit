document.body.addEventListener('keypress', onKeyPress);

class Channel {
    constructor(nr) {
        this.number = nr;
        this.music = [];
        this.playBtn = document.getElementById(`play${nr}`);
        this.playBtn.addEventListener("click", ev => this.playChannel(this))

        this.recordBtn = document.getElementById(`rec${nr}`);
        console.log(`#rec${nr}`);
        console.dir(this.recordBtn);
        this.recordBtn.addEventListener("click", ev => this.recordChannel(this));

        this.isRecorded = false;
        this.recordStart;
        this.stopBtn = document.getElementById(`stop${nr}`)
        this.stopBtn.addEventListener("click", ev => this.stopChannel(this));
    }

    playChannel(channel) {
        for (let index = 0; index < this.music.length; index++) {
            const soundObject = this.music[index];
            setTimeout(
                () => {
                    playSound(soundObject.sound);
                },
                soundObject.time
            );
        }
    }

    recordChannel(channel) {
        channel.music = [];
        channel.isRecorded = true;
        channel.recordStart = Date.now();
        channel.recordBtn.style.backgroundColor = "red";
    }

    stopChannel(channel) {
        channel.isRecorded = false;
        channel.recordBtn.style.backgroundColor = "blue";
    }


    recordSound(soundName) {
        if (this.isRecorded) {
            const keyPressTime = Date.now() - this.recordStart;
            const recordedSound = {
                sound: soundName,
                time: keyPressTime
            };
            this.music.push(recordedSound);
        }
    }
}



channels = [new Channel(1), new Channel(2), new Channel(3), new Channel(4)]

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
        case 'KeyF':
            soundName = 'kick';
            sound = document.querySelector('#kick');
            changeColor(".player4");
            break;
        case 'KeyG':
            soundName = 'hat';
            sound = document.querySelector('#hat');
            changeColor(".player5");
            break;
        case 'KeyH':
            soundName = 'ride';
            sound = document.querySelector('#ride');
            changeColor(".player6");
            break;
        case 'KeyJ':
            soundName = 'snare';
            sound = document.querySelector('#snare');
            changeColor(".player7");
            break;
        case 'KeyK':
            soundName = 'tink';
            sound = document.querySelector('#tink');
            changeColor(".player8");
            break;
        case 'KeyL':
            soundName = 'way';
            sound = document.querySelector('#way');
            changeColor(".player9");
            break;
    }

    if (sound) {
        channels.forEach(channel => {
            channel.recordSound(soundName)
        });
        sound.play();
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