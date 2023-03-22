// zad1
var a=20;
var b=10;
var dod=a+b;
var odj=a-b;
var mno=a*b;
var dziel=a/b;
console.log(dod,odj,mno,dziel);

//zad 1 dohtml

document.getElementById("lol").
innerHTML = dod
document.getElementById("lol").
innerHTML = " wynik odejmowania "+odj+" wynik dodawania"+dod+" wynik mnorzenia"+mno+" wynik dzielenia"+dziel


// zad2
var a=3;
var b=4;
var c=2;
var p=(a+b+c)/2;
console.log(p);
var Ps=Math.sqrt(p*(p-a)*(p-b)*(p-c));
console.log(Ps);

document.getElementById("lol2").
innerHTML = "p wynosi "+p+" P wynsi "+Ps+" z boków"+a+"   "+b+"   "+c

// //zad3
// var los=Math.ceil(Math.random()*10);
// var u=prompt("tu daj liczbe ");
// console.log(los,u);
// document.getElementById("lol3").
// innerHTML = " losowy numer "+los+" numer urzytkowanika"+u

// if (los==num){
// console.log("nice")

// }else{
// console.log("aj jajaj")
// }
// zad4

var u1=prompt("tu daj liczbe 1 ");

var u2=prompt("tu daj liczbe 2 ");

var u3=prompt("tu daj liczbe 3 ");

if (u1==u2 && u1==u3){
    console.log("są równe "+u1);
    document.getElementById("lol4").
    innerHTML = "są równe "+u1

}
else if (u1>=u2 && u1>=u3){
    console.log("największa 1 wartosć "+u1);
    document.getElementById("lol4").
    innerHTML = "największa 1 wartosć "+u1




}
else if (u2>=u1 && u2>=u3){
    console.log("największa 2 wartosć "+u2);
    document.getElementById("lol4").
    innerHTML = "największa 2 wartosć "+u2




}else{
console.log("największa 3 wartosć "+u3);

document.getElementById("lol4").
innerHTML = "największa 3 wartosć  "+u3


}