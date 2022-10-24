// alert("Welcome, Lets begin!");

var n1=Math.floor(Math.random()*6)+1;   //ranges from 1-6

var image1="dice" + n1 + ".png";          //all 6 images show up

var folder1="images/" + image1;

var i1=document.querySelectorAll("img")[0];

i1.setAttribute("src",folder1);          //changes first image on refreshing

var n2=Math.floor(Math.random()*6)+1;

var image2="dice" + n2 + ".png"; 

var folder2="images/" + image2;

var i2=document.querySelectorAll("img")[1];

i2.setAttribute("src",folder2);         //changes second image on refreshing


if(n1>n2)
{
	document.querySelector("h1").innerHTML="Player 1 wins!";
}

else if(n2>n1)
{

	document.querySelector("h1").innerHTML="Player 2 wins!";
}
else
{
	document.querySelector("h1").innerHTML="Tie!";
}