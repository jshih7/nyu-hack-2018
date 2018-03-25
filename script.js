//Task 1
var canvas = document.getElementById('c1');
canvas.width = 100;
canvas.height = 20;
var c = canvas.getContext('2d');
c.fillStyle="#ccc";
c.fillRect(0, 0, 100, 20);
c.fillStyle="#9797e5";
c.fillRect(0, 0, 70, 20);
  c.fillStyle="#222";
c.font = "14px Share Tech";
c.fillText("$3160/$4210",14,15);          

var canvas2 = document.getElementById('c2');
canvas2.width = 100;
canvas2.height = 100;
var c2 = canvas2.getContext('2d');
c2.beginPath();
c2.arc(50,50,42,0,2*Math.PI);
c2.lineWidth=16;
c2.strokeStyle='#ccc';
c2.stroke();

c2.beginPath();
c2.arc(50,50,42,1.5*Math.PI,1*Math.PI);
c2.lineWidth=16;
c2.strokeStyle='#b3cf3c';
c2.stroke();

c2.fillStyle='#000'; // For text color
c2.textAlign='center';
c2.font = '16pt Share Tech'; // for font specifying
c2.fillText('75%',53,57); //text value & text position

//Task 2

var canvas3 = document.getElementById('c3');
canvas3.width = 100;
canvas3.height = 20;
var c3 = canvas3.getContext('2d');
c3.fillStyle="#ccc";
c3.fillRect(0, 0, 100, 20);
c3.fillStyle="#9797e5";
c3.fillRect(0, 0, 20, 20);
  c3.fillStyle="#222";
c3.font = "14px Share Tech";
c3.fillText("$1160/$6120",14,15);          

var canvas4 = document.getElementById('c4');
canvas4.width = 100;
canvas4.height = 100;
var c4 = canvas4.getContext('2d');
c4.beginPath();
c4.arc(50,50,42,0,2*Math.PI);
c4.lineWidth=16;
c4.strokeStyle='#ccc';
c4.stroke();

c4.beginPath();
c4.arc(50,50,42,1.5*Math.PI,0.5*Math.PI);
c4.lineWidth=16;
c4.strokeStyle='#b3cf3c';
c4.stroke();

c4.fillStyle='#000'; // For text color
c4.textAlign='center';
c4.font = '16pt Share Tech'; // for font specifying
c4.fillText('50%',53,57); //text value & text position

//Task 3

var canvas5 = document.getElementById('c5');
canvas5.width = 100;
canvas5.height = 20;
var c5 = canvas5.getContext('2d');
c5.fillStyle="#ccc";
c5.fillRect(0, 0, 100, 20);
c5.fillStyle="#9797e5";
c5.fillRect(0, 0, 35, 20);
  c5.fillStyle="#222";
c5.font = "14px Share Tech";
c5.fillText("$6210/$18000",14,15);  

var canvas6 = document.getElementById('c6');
canvas6.width = 100;
canvas6.height = 100;
var c6 = canvas6.getContext('2d');
c6.beginPath();
c6.arc(50,50,42,0,2*Math.PI);
c6.lineWidth=16;
c6.strokeStyle='#ccc';
c6.stroke();
c6.beginPath();
c6.arc(50,50,42,1.5*Math.PI,0.17*Math.PI);
c6.lineWidth=16;
c6.strokeStyle='#b3cf3c';
c6.stroke();

c6.fillStyle='#000'; // For text color
c6.textAlign='center';
c6.font = '16pt Share Tech'; // for font specifying
c6.fillText('30%',53,57); //text value & text position

function show1() {
  document.getElementById("d2").style.display = "none";
  document.getElementById("d1").style.display = "block";
  document.getElementById("d3").style.display = "none";
  document.getElementById("task1").style.opacity = "1";
  document.getElementById("task2").style.opacity = "0.5";
  document.getElementById("task3").style.opacity = "0.5";
  document.getElementById("task1").style.cursor = "auto";
  document.getElementById("task2").style.cursor = "pointer";
  document.getElementById("task3").style.cursor = "pointer";
}

function show2() {
  document.getElementById("d1").style.display = "none";
  document.getElementById("d2").style.display = "block";
  document.getElementById("d3").style.display = "none";
  document.getElementById("task2").style.opacity = "1";
  document.getElementById("task1").style.opacity = "0.5";
  document.getElementById("task3").style.opacity = "0.5";
  document.getElementById("task2").style.cursor = "auto";
  document.getElementById("task1").style.cursor = "pointer";
  document.getElementById("task3").style.cursor = "pointer";
  document.getElementById("task1:hover").style.opacity = "1";
}

function show3() {
  document.getElementById("d2").style.display = "none";
  document.getElementById("d3").style.display = "block";
  document.getElementById("d1").style.display = "none";
  document.getElementById("task3").style.opacity = "1";
  document.getElementById("task2").style.opacity = "0.5";
  document.getElementById("task1").style.opacity = "0.5";
  document.getElementById("task3").style.cursor = "auto";
  document.getElementById("task2").style.cursor = "pointer";
  document.getElementById("task1").style.cursor = "pointer";
}
