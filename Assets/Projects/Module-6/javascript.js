document.getElementById("button1").addEventListener("click", function(){

    document.getElementById("box").style.height = "300px";
    document.getElementById("box").style.width = "300px";

});

document.getElementById("button2").addEventListener("click", function(){

    document.getElementById("box").style.backgroundColor = "blue";

});

document.getElementById("button3").addEventListener("click", function(){

    document.getElementById("box").style.opacity = "0.5";

});

document.getElementById("button4").addEventListener("click", function(){

    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.width = "150px";
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.opacity = "1.0";

});

function mOver(obj) {
    obj.innerHTML = Date()
}

function mOut(obj) {
    obj.innerHTML = "Today's Date"
}

function changeHeight() {
    var box2 = document.getElementById("box2");
    if (box2.style.height === "175px") {
      box2.style.height = "300px";
    } else {
      box2.style.height = "175px";
    }
  }