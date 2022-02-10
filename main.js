Webcam.set({
    width: 400,
    height: 300,
    image_format: "png",
    png_quality: 100
});
Webcam.attach("#userwebcam")

function clickpic() {
    Webcam.snap(function(imagelocation) {
        document.getElementById("userimg").innerHTML = '<img id="finalpic" src="' + imagelocation + '">'
    });
}

console.log(ml5.version);
var mymodel = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/qNxC_pPAj/model.json", modelloaded);

function modelloaded() {
    console.log("Model has loaded");
}

function identifyitem() {
    var finalimg = document.getElementById("finalpic");
    mymodel.classify(finalimg, getresult);
}



function getresult(resulterror, resultarray) {
    if (resulterror) {
        console.error(resulterror);
    } else {
        console.log(resultarray);
        document.getElementById("itemname").innerHTML = resultarray[0].label;
        document.getElementById("itemaccuracy").innerHTML = resultarray[0].confidence * 100 + "%";
    }
}