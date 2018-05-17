var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addSum =document.getElementById("add-sum");

numOne.addEventListener("input", add);
numTwo.addEventListener("input",add);

function add() {
	var one= numOne.value||0;
	var two= numTwo.value||0;

	addSum.innerHTML=parseInt(one)+parseInt(two);
}

// simon = document.getElementById("simon");
// simonPic= document.getElementById("simon-pic");
// bruce =document.getElementById("bruce");
// brucePic =document.getElementById("bruce-pic");
// ben= document.getElementById("ben");
// benPic= document.getElementById("ben-pic");

simon.addEventListener("click",pickLink);
bruce.addEventListener("click",pickLink);
ben.addEventListener("click",pickLink);

function pickLink(){
   var allImages= document.querySelectorAll("img");

    for(var a=0; a<allImages.length; a++){
    	allImages[a].className="hide";
    }
   
	var picId = this.attributes["data-img"].value;
	var pic = document.getElementById(picId);
	if(pic.className==="hide"){
		pic.className="";
	}else{
        pic.className="hide";

	}

}

var checklist = document.getElementById("checklist");
var items = checklist.querySelectorAll("li");
var inputs = checklist.querySelectorAll("input");

for(var i=0; i<items.length; i++){
	items[i].addEventListener("click",editItem);
	inputs[i].addEventListener("blur",updateItem);
	inputs[i].addEventListener("keypress",itemKeypress);
}

function editItem(){

	this.className ="edit";
	var input = this.querySelector("input");
	input.focus();
	input.setSelectionRange(0,input.value.length);
}

function updateItem(){
	this.previousElementSibling.innerHTML=this.value;
	this.parentNode.className="";
}

function itemKeypress(event){

if(event.which===13){
  updateItem.call(this);
}
}