let supported = DailyIframe.supportedBrowser().supported;
console.log(supported);

let call = DailyIframe.createCallObject();

let HARDCODED = {
    id: 'abc32008-e61b-45c4-9e1f-ea7507c8ed4f',
    url: 'https://virtualteamgame.daily.co/FX4Sd6yybjjcZ1Tij3Wu'
}


const daily_api = `https://api.daily.co/v1`;

async function CreateRoom() {
    let room = fetch(`${daily_api}/rooms/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer b101370bc0d768f964509186d0bbe8e3586b0c88e6741885315f97a23c86525d`
        },
        body: JSON.stringify({
            privacy: 'public',
            properties: {
                max_participants: 5,
                autojoin: true,
                lang: 'en'
            }
        })
    })
}

function SetTracks() {
    let participants = call.participants();
    let names = Object.keys(participants);

    console.log(participants);

    for (let i = 0; i < names.length; i++) {
        console.log("Playing video: ", names[i]);

        let participant = participants[names[i]];

        if (participant.videoTrack) {
            let elem = document.getElementById('video' + i);
            let stream = new MediaStream(participant.videoTrack);

            elem.srcObject = stream;
            elem.play();
        }
    }
}

call.on('error', console.log);
call.on('joined-meeting', (e) => {
    console.log('JOINED: ', e);
    SetTracks();
});
call.on('track-started', (e) => {
    console.log('JOINED: ', e);

    if (e.track.kind == 'video') {
        setTimeout(() => {
            SetTracks();
        }, 0);
    }
});

call.join({ url: HARDCODED.url });
