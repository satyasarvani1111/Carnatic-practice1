const audio = document.getElementById("audioPlayer");

const saraliSelect = document.getElementById("saraliSelect");
const speedSelect = document.getElementById("speedSelect");

const notesDisplay = document.getElementById("notesDisplay");

const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const restartBtn = document.getElementById("restartBtn");

const status = document.getElementById("status");
const talaText = document.getElementById("talaText");

const beats = document.querySelectorAll(".talaBeat");



// ===========================
// CARNATIC SPEED SETTINGS
// ===========================

const BPM = 60;

const beatDuration = 60 / BPM;

const preparationTime = 4;




const saraliData = {


sarali1: {

notation:[
["S","R","G","M"],
["P","D"],
["N","S'"],
"||",
["S'","N","D","P"],
["M","G"],
["R","S"],
"||"
],

audio:{
speed1:"audio/sarali1_speed1.mp3",
speed2:"audio/sarali1_speed2.mp3",
speed3:"audio/sarali1_speed3.mp3"
}

},




sarali2: {

notation:[
["S","R","S","R"],
["S","R"],
["G","M"],
"||",

["S","R","G","M"],
["P","D"],
["N","S'"],
"||",

["S'","N","S'","N"],
["S'","N"],
["D","P"],
"||",

["S'","N","D","P"],
["M","G"],
["R","S"],
"||"
],

audio:{
speed1:"audio/sarali2_speed1.mp3",
speed2:"audio/sarali2_speed2.mp3",
speed3:"audio/sarali2_speed3.mp3"
}

},




sarali3: {

notation:[
["S","R","G","S"],
["R","G"],
["S","R"],
"||",

["S","R","G","M"],
["P","D"],
["N","S'"],
"||",

["S'","N","D","S'"],
["N","D"],
["S'","N"],
"||",

["S'","N","D","P"],
["M","G"],
["R","S"],
"||"
],

audio:{
speed1:"audio/sarali3_speed1.mp3",
speed2:"audio/sarali3_speed2.mp3",
speed3:"audio/sarali3_speed3.mp3"
}

},

sarali4: {

notation:[
["S","R","G","M"],
["S","R"],
["G","M"],
"||",

["S","R","G","M"],
["P","D"],
["N","S'"],
"||",

["S'","N","D","P"],
["S'","N"],
["D","P"],
"||",

["S'","N","D","P"],
["M","G"],
["R","S"],
"||"
],

audio:{
speed1:"audio/sarali4_speed1.mp3",
speed2:"audio/sarali4_speed2.mp3",
speed3:"audio/sarali4_speed3.mp3"
}

},



sarali5: {

notation:[
["S","R","G","M"],
["P","."],
["S","R"],
"||",

["S","R","G","M"],
["P","D"],
["N","S'"],
"||",

["S'","N","D","P"],
["M","."],
["S'","N"],
"||",

["S'","N","D","P"],
["M","G"],
["R","S"],
"||"
],

audio:{
speed1:"audio/sarali5_speed1.mp3",
speed2:"audio/sarali5_speed2.mp3",
speed3:"audio/sarali5_speed3.mp3"
}

},



sarali6: {

notation:[
["S","R","G","M"],
["P","D"],
["S","R"],
"||",

["S","R","G","M"],
["P","D"],
["N","S'"],
"||",

["S'","N","D","P"],
["M","G"],
["S","R"],
"||",

["S'","N","D","P"],
["M","G"],
["R","S"],
"||"
],

audio:{
speed1:"audio/sarali6_speed1.mp3",
speed2:"audio/sarali6_speed2.mp3",
speed3:"audio/sarali6_speed3.mp3"
}

},



sarali7: {

notation:[
["S","R","G","M"],
["P","D"],
["N","."],
"||",

["S","R","G","M"],
["P","D"],
["N","S'"],
"||",

["S'","N","D","P"],
["M","G"],
["R","."],
"||",

["S'","N","D","P"],
["M","G"],
["R","S"],
"||"
],

audio:{
speed1:"audio/sarali7_speed1.mp3",
speed2:"audio/sarali7_speed2.mp3",
speed3:"audio/sarali7_speed3.mp3"
}

},



sarali8: {

notation:[
["S","R","G","M"],
["P","M"],
["G","R"],
"||",

["S","R","G","M"],
["P","D"],
["N","S'"],
"||",

["S'","N","D","P"],
["M","P"],
["D","N"],
"||",

["S'","N","D","P"],
["M","G"],
["R","S"],
"||"
],

audio:{
speed1:"audio/sarali8_speed1.mp3",
speed2:"audio/sarali8_speed2.mp3",
speed3:"audio/sarali8_speed3.mp3"
}

},

sarali9: {

notation:[
["S","R","G","M"],
["P","M"],
["D","P"],
"||",

["S","R","G","M"],
["P","D"],
["N","S'"],
"||",

["S'","N","D","P"],
["M","P"],
["G","M"],
"||",

["S'","N","D","P"],
["M","G"],
["R","S"],
"||"
],

audio:{
speed1:"audio/sarali9_speed1.mp3",
speed2:"audio/sarali9_speed2.mp3",
speed3:"audio/sarali9_speed3.mp3"
}

},



sarali10: {

notation:[
["S","R","G","M"],
["P","."],
["G","M"],
"||",

["P",".",".","."],
["P","."],
[".","."],
"||",

["G","M","P","D"],
["N","D"],
["P","M"],
"||",

["G","M","P","G"],
["M","G"],
["R","S"],
"||"
],

audio:{
speed1:"audio/sarali10_speed1.mp3",
speed2:"audio/sarali10_speed2.mp3",
speed3:"audio/sarali10_speed3.mp3"
}

},



sarali11: {

notation:[
["S'",".","N","D"],
["N","."],
["D","P"],
"||",

["D",".","P","M"],
["P","."],
["P","."],
"||",

["G","M","P","D"],
["N","D"],
["P","M"],
"||",

["G","M","P","G"],
["M","G"],
["R","S"],
"||"
],

audio:{
speed1:"audio/sarali11_speed1.mp3",
speed2:"audio/sarali11_speed2.mp3",
speed3:"audio/sarali11_speed3.mp3"
}

},



sarali12: {

notation:[
["S'","S'","N","D"],
["N","N"],
["D","P"],
"||",

["D","D","P","M"],
["P","."],
["P","."],
"||",

["G","M","P","D"],
["N","D"],
["P","M"],
"||",

["G","M","P","G"],
["M","G"],
["R","S"],
"||"
],

audio:{
speed1:"audio/sarali12_speed1.mp3",
speed2:"audio/sarali12_speed2.mp3",
speed3:"audio/sarali12_speed3.mp3"
}

}

};



let currentSarali="sarali1";

let currentSpeed="speed1";


let swaraElements=[];



// ===========================
// LOAD PRACTICE
// ===========================

function loadPractice(){

    let data=saraliData[currentSarali];

    audio.src=data.audio[currentSpeed];

    audio.load();

    createNotation(data.notation);

    clearBeat();

    clearSwara();

}

function createNotation(notation){

    notesDisplay.innerHTML="";

    swaraElements=[];


    let line=document.createElement("div");

    line.className="note-line";


    notation.forEach(item=>{


        if(item==="||"){


            notesDisplay.appendChild(line);


            line=document.createElement("div");

            line.className="note-line";


            return;

        }



        item.forEach(note=>{


            let span=document.createElement("span");


            span.className="swara";


            span.innerHTML=note;


            swaraElements.push(span);


            line.appendChild(span);


            line.appendChild(
                document.createTextNode(" ")
            );


        });


        line.appendChild(
            document.createTextNode(" | ")
        );


    });


    notesDisplay.appendChild(line);

}







saraliSelect.onchange=function(){

    currentSarali=this.value;

    loadPractice();

};





speedSelect.onchange=function(){

    currentSpeed=this.value;

    loadPractice();

};






startBtn.onclick=function(){

    audio.currentTime=0;

    clearBeat();

    clearSwara();

    audio.play();

    status.innerHTML="🎵 Practice Started";

};







pauseBtn.onclick=function(){

    audio.pause();

    status.innerHTML="⏸ Paused";

};







restartBtn.onclick=function(){

    audio.currentTime=0;

    clearBeat();

    clearSwara();

    audio.play();

    status.innerHTML="🔄 Restarted";

};








audio.addEventListener("timeupdate",function(){


    let time=audio.currentTime;



    // PREPARATION TIME

    if(time < preparationTime){


        talaText.innerHTML =
        "Get Ready : " +
        Math.ceil(preparationTime-time);


        clearBeat();

        clearSwara();


        return;

    }





    let practiceTime=time-preparationTime;



    // ===========================
    // ADI TALA
    // ===========================

    let beat=Math.floor(practiceTime / beatDuration)%8;


    clearBeat();


    if(beats[beat]){

        beats[beat].classList.add("active");

    }


    talaText.innerHTML =
    "Adi Tala Beat " + (beat+1);






    // ===========================
    // CARNATIC SPEED LOGIC
    // ===========================


    let notesPerBeat;



    if(currentSpeed==="speed1"){

        notesPerBeat=1;

    }

    else if(currentSpeed==="speed2"){

        notesPerBeat=2;

    }

    else{

        notesPerBeat=4;

    }





    let noteDuration =
    beatDuration / notesPerBeat;



    let index =
    Math.floor(practiceTime / noteDuration);




    highlightSwara(index);



});









function highlightSwara(index){


    clearSwara();



    if(swaraElements[index]){


        swaraElements[index].classList.add("active");


    }

}







function clearSwara(){


    swaraElements.forEach(item=>{


        item.classList.remove("active");


    });


}







function clearBeat(){


    beats.forEach(item=>{


        item.classList.remove("active");


    });


}







loadPractice();