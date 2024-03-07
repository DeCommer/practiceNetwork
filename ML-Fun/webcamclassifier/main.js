let video;
let mobilenet
let detector

function setup() {
    function ready() {
        console.log('Ready');
        mobilenet.predict(gotRes)
    }

    function gotRes(error, results) {
        if(error) {
            console.log(error);
        } else {
            mobilenet.predict(gotRes)
        }

        let label1 = document.querySelector('.label-1');
        label1.textContent = `Is this a ${results[0].label}?`;
    }

    let canvas = createCanvas(800, 600);
    canvas.parent('canvas');
    background(0);
    video = createCapture(VIDEO)
    let mobilenet = ml5.imageClassifier('MobileNet', video, ready)
    video.hide();


}

function draw() {
    image(video, 0, 0, width, height)
}






