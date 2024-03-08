let img;
let mobilenet
function setup() {
    function ready() {
        console.log('Ready');
        mobilenet.classify(img, gotRes);
    }

    function imgReady() {
        image(img, 0, 0, width, height);
    }

    function gotRes(error, results) {
        if(error) {
            console.log(error);
        } else {
            console.log(results);
        }

        let label1 = document.querySelector('.label-1');
        let label2 = document.querySelector('.label-2');
        let label3 = document.querySelector('.label-3');

        label1.textContent = `I am ${(results[0].confidence).toFixed(2) * 100}% confident this is a ${results[0].label}`;
        label2.textContent = `I am ${(results[1].confidence).toFixed(2) * 100}%  confident this is a ${results[1].label}`;
        label3.textContent = `I am ${((results[2].confidence).toFixed(2) * 100).toFixed(2)}%  confident this is a ${results[2].label}`;
    }

    let canvas = createCanvas(800, 600);
    canvas.parent('canvas');
    background(0);
    img = createImg('./images/france.jpeg', imgReady)
    let mobilenet = ml5.imageClassifier('MobileNet', ready)
    img.hide();
}






