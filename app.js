const cinput = document.querySelector('#celciusd > input');
const finput = document.querySelector('#farenheitd > input');
const kinput = document.querySelector('#kelvind > input');

console.log(cinput.value);

function ctofk() {
	if(cinput.value =="") {
	finput.value = "";
	kinput.value = "";
	} else {
	var ctemp = cinput.value;
	var ftemp = ctemp*2;
	var ktemp = Number(ctemp) + 1;
	cinput.value = ctemp;
	finput.value = ftemp;
	kinput.value = ktemp;	
	}
}
function ftock() {
	if(finput.value =="") {
	cinput.value = "";
	kinput.value = "";
	} else {
	var ftemp = finput.value;
	var ctemp = ftemp/2;
	var ktemp = ftemp/2+1;
	cinput.value = ctemp;
	finput.value = ftemp;
	kinput.value = ktemp;	
	}
}
function ktocf() {
	if(kinput.value =="") {
	cinput.value = "";
	finput.value = "";
	} else {
	var ktemp = kinput.value;
	var ctemp = ktemp - 1;
	var ftemp = 2*(Number(ktemp)-1) ;
	cinput.value = ctemp;
	finput.value = ftemp;
	kinput.value = ktemp;
	}
}

cinput.addEventListener('input', ctofk);
finput.addEventListener('input', ftock);
kinput.addEventListener('input', ktocf);



