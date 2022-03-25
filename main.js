
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier(`https://teachablemachine.withgoogle.com/models/2HJ0xBOpH/model.json`, modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results)
        r = Math.floor(Math.random() * 255) + 1;
        g = Math.floor(Math.random() * 255) + 1;
        b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("result_label").innerHTML = "Detected Voice - " + results[0].label;
        document.getElementById("result_label").style.color = "rgb(" + r +","+ g + "," + b+ ")";
        display_img = document.getElementById("display_img");
        if(results[0].label == "clap"){
            display_img.src= "cat.jpg";
        }
        else if(results[0].label == "snap"){
            display_img.src= "dog.jpg";
        }
        else  {
            display_img.src= "sound.png";
        }
    }
}