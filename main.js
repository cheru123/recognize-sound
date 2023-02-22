function start_classification (){
    navigator.mediaDevices.getUserMedia({ 
     audio:true
    });
    classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/suWu7zAPi/model.json")

    
}
