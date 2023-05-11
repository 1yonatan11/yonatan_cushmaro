var x=5;
var y=4;
let z=2;
console.log(x+y);


var d= new Date();
console.log(d);
var y= d.getFullYear();

console.log(y);


var Alon = {
    age : 21,
    Family : "Levy", 
    Time : new Date(),
};
console.log(Alon.Time)


var H=d.getHours();
console.log(H);
var H=21;

if(H<6){
    document.getElementById("greetingH1").innerHTML = "ZZZZZZ";
}

else if (H<12){
    document.getElementById("greetingH1").innerHTML = "GOOD Morning";
    document.getElementsByTagName("body").classList.remove = ("NightStyle");

}

else if (H<16){
    document.getElementById("greetingH1").innerHTML = "good afternone";

}

else if (H<20){
    document.getElementById("greetingH1").innerHTML = "good evening";
    document.getElementById("body").classList.add("NightStyle");
}

else{
    document.getElementById("greetingH1").innerHTML = "good night";

}

function TimeFunk() {
    document.getElementById("time").innerHTML = d;
    document.getElementById("BTN").innerHTML = "thats it";
    for (let i = 0; i < carsIMG.length; i++) {
        const element = array[i];
        document.getElementById("IMG_cars").src = carsIMG[1];
    }

}
    var cars =["yoni", "boni", "jony", "jhony", "avi" ];
console.log(cars[3]);

    for (let i = 0; i < cars.length; i++) {
    var text= ""; 
    text+= cars[i] + "<br>"
    document.getElementById("time").innerHTML = "BTN";
    
    console.log(text);
    }



    var carIMG =[
        https://orient.tm/storage/app/media/ru/2022/12/28122022jony.png alt"cars", 
    ]    