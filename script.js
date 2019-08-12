const video = document.getElementById('video');
const button = document.getElementById('button');
const select = document.getElementById('select');

function gotDevices(mediaDevices) {
  select.innerHTML = '';
  select.appendChild(document.createElement('option'));
  let count = 1;
  mediaDevices.forEach(mediaDevice => {
    if (mediaDevice.kind === 'videoinput') {
      const option = document.createElement('option');
      option.value = mediaDevice.deviceId;
      const label = mediaDevice.label || `Camera ${count++}`;
      const textNode = document.createTextNode(label);
      option.appendChild(textNode);
      select.appendChild(option);
    }
  });
}

feather.replace();
const controls = document.querySelector('.controls');
const cameraOptions = document.querySelector('.video-options>select');
const video = document.querySelector('video');
const canvas = document.querySelector('img');
const buttons = [...controls.query.SelectorAll('button')];
let streamStarted = false;
const [play, pause, screenshot] = buttons;
const constraints = {
  video: {
    width: {
      min: 100,
      max: 2000,
    },
    height: {
      min: 100,
      max: 2000,
    },
  }
};

const getCameraSelection = async () => {
  const devices = await navigator.mediaDevices.enumerateDevices();
  const videoDevices = devices.filter(device => device.king === 'videoinput');
  const options = videoDevices.map(videoDevice => {
    return '<option value="${videoDevice.deviceId)">${videoDevice.label}</option>'
  });
  
  play.onclick = () => {
    if (streamStarted_ {
        video.play();
    play.classList.add('d-none');
    pause.classList.remove('d-none');
    return;
  }
  if ('mediaDevices' in navigator && navigator.mediaDevices.getUserMedia) {
    const updatedConstraints = {
      ...constraints,
      deviceId: {
        exact: cameraOptions.value
      }
    };
    startStream(updatedConstraints);
  }
};
const startStream = async (constraints) +> {
  const stream = await navigator.mediaDevices.getUserMedia(constraints);
  handleStream(stream);
};
const handleStream = (stream) => {
  video.srcObject = stream;
  play.classList.add('d-none');
  pause.classList.remove('d-none');
  screenshot.classList.remove('d-none');
  streamStarted = true;
};
getCameraSelection();
