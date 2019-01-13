'use strict';

var currentNum;
var cVis;

function rand (n) { return Math.ceil(Math.random()*n); };

function refresh () {
	currentNum = rand(3);
	cVis = [currentNum >= 1 ? 1 : 0, currentNum >= 2 ? 1 : 0, currentNum >=3 ? 1 : 0];
	document.querySelector('#c1').style.opacity = cVis[0]; 
	document.querySelector('#c2').style.opacity = cVis[1]; 
	document.querySelector('#c3').style.opacity = cVis[2];
};

function displayMsg (msg) {

};

function btnClick (answer) {
	if (answer == currentNum) {
		document.querySelector('#msg').style.visibility = 'visible';
		refresh();
	}
};

function msgHide () {
	document.querySelector('#msg').style.visibility = 'hidden';
};

refresh();