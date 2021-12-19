Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

var camera = document.getElementById("camera");
Webcam.attach('#camera')

function capture_image() {
    Webcam.snap(function(data_uri) {
        document.getElementById("reasult").src = data_uri;
        document.getElementById("reasult").style.display = "block";
    });
}

console.log("Ml5 version: " + ml5.version);

var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/qt9277Wea/model.json', model_loaded);
function model_loaded() {
    console.log("Model has successfully loaded");
}