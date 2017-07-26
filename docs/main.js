"use strict"

const video = document.querySelector("video");
const canvas = document.querySelector(".video");
const ctx = canvas.getContext('2d');
const laughingMan = document.querySelector(".laughing-man");
let classfier;

canvas.width = 480;
canvas.height = 320;

navigator.getUserMedia = navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia ||
    navigator.oGetUserMedia;

const updateCanvas = (faces) => {
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const face = faces[0];
    if (!face) return laughingMan.style.display = "none";
    // TODO:
    // faces.forEach((face) => {
    // ctx.strokeRect(face.x, face.y, face.width, face.height);
    laughingMan.style.display = "block";
    laughingMan.style.top = `${face.y - (face.height / 3)}px`;
    laughingMan.style.left = `${face.x - (face.width / 3)}px`;
    laughingMan.setAttribute('scale', face.width / 360 * 1.6);
    // });
}

const tick = () => {
    requestAnimationFrame(() => {
        const faces = detectFaces();
        updateCanvas(faces);
        tick();
    });
};

const detectFaces = () => {
    if (!classfier) {
        classfier = new cv.CascadeClassifier();
        classfier.load('../../test/data/haarcascade_frontalface_default.xml');
    }
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const img = cv.matFromArray(imageData, 24);
    const imgGray = new cv.Mat();
    const rect = [];
    cv.cvtColor(img, imgGray, cv.ColorConversionCodes.COLOR_RGBA2GRAY.value, 0);
    const faces = new cv.RectVector();
    classfier.detectMultiScale(imgGray, faces, 1.1, 3, 0, [0, 0], [0, 0]);
    for (let i = 0; i < faces.size(); i += 1) {
        rect.push(faces.get(i));
    }
    img.delete();
    faces.delete();
    imgGray.delete();
    return rect;
};

if (navigator.getUserMedia) {
    navigator.getUserMedia(
        { video: true },
        (stream) => {
            video.src = URL.createObjectURL(stream);
            tick();
        },
        (e) => console.error(e),
    );
}