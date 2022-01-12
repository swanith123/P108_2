function classify_sound(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/-q_hKG6c1/model.json", modelReady);
    }
    
    function modelReady(){
        classifier.classify(gotResults);
    }

    function gotResults(error, results){
        if(error){
            console.error(error);
        }
    else{
        console.log(results);
        random_number_R = Math.floor(Math.random() * 255) + 1;
        random_number_G = Math.floor(Math.random() * 255) + 1;
        random_number_B = Math.floor(Math.random() * 255) + 1;
    
        document.getElementById("label_result").innerHTML = 'I can hear- '+ results[0].label;
        document.getElementById("label_accuracy").innerHTML = 'Accuracy- '+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("label_result").style.color = "rgb("+random_number_R+","+random_number_G+","+random_number_B+")";
        document.getElementById("label_accuracy").style.color = "rgb("+random_number_R+","+random_number_G+","+random_number_B+")";
    a1 = document.getElementById('dog');
    a2 = document.getElementById('cat');
    a3 = document.getElementById('wolf');
    a4 = document.getElementById('horse');
    a5 = document.getElementById('frog');
    
    if (results[0].label == "Dog"){
        a1.src="dog.gif";
        a2.src="cat.jpg";
        a3.src="wolf.jpg";
        a4.src="horse.jpg";
        a5.src="frog.webp";
        } else if(results[0].label =="Cat") {
            a1.src="dog.png";
            a2.src="cat.gif";
            a3.src="wolf.jpg";
            a4.src="horse.jpg";
            a5.src="frog.webp";
        } else if(results[0].label =="Wolf") {
            a1.src="dog.png";
            a2.src="cat.gif";
            a3.src="wolf.gif";
            a4.src="horse.gif";
            a5.src="frog.webp";
        } else if(results[0].label =="Horse") {
            a1.src="dog.png";
            a2.src="cat.gif";
            a3.src="wolf.png";
            a4.src="horse.gif";
            a5.src="frog.webp";
        } else if(results[0].label =="Frog") {
            a1.src="dog.png";
            a2.src="cat.gif";
            a3.src="wolf.jpg";
            a4.src="horse.gif";
            a5.src="frog.gif";   
        }
    }
    }
