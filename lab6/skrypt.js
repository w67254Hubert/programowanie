class prostokąt{

    constructor(x, y, nazwa,){
        this.dlugosc= x;
        this.szerokosc= y;
        this.nazwa= nazwa;
    }
    //c
    obwod(){
        // instrukcja
        return (this.dlugosc*this.szerokosc)*2
    }
    //d
    pole(){
        return this.dlugosc*this.szerokosc
    }
    //e
    poruwnaj(innyprostokat){
        if(this.pole() > innyprostokat.pole()){
            return this.nazwa
        }else if(this.pole() < innyprostokat.pole()){
            return innyprostokat.nazwa
        }else{
            return "prostokąty są równe";
        }

        
    }
// zadanie 6

    ZmianNaz(NewNnaz){
        this.nazwa=NewNnaz
        return this.nazwa
    }
}        
const p1 = new prostokąt(2,4,"prostokąt 1");
const p2 = new prostokąt(2,4,"prostokąt 2");
const p3 = new prostokąt(5,2,"prostokąt 3");

console.log(p1.nazwa);

console.log(p1.obwod());
console.log(p1.pole());

console.log(p2.poruwnaj(p1));

// zadanie 6
console.log(p1.ZmianNaz("nowa nazwa"));


console.log("----------------------------trujkont");


class trujkont{

    constructor(x, y, nazwa,){
        this.wys= x;
        this.dluPod= y;
        this.nazwa= nazwa;
    }
    pole(){
        return (this.wys*this.dluPod)/2
    }
    //e
    poruwnaj(innytruj){
        if(this.pole() > innytruj.pole()){
            return this.nazwa
        }else if(this.pole() < innytruj.pole()){
            return innytruj.nazwa
        }else{
            return "trujkąty są równe";
        }

        
    }

}        
const t1 = new trujkont(2,4,"tru 1");
const t2 = new trujkont(1,4,"tru 2");
const t3 = new trujkont(5,2,"tru 3");

console.log(t1.nazwa);

console.log(t1.pole());

console.log(t2.poruwnaj(t1));

console.log("----------------------------trapez");


class trap{

    constructor(x, y, z, nazwa,){
        this.wys1= x;
        this.Pod1= y;
        this.Pod2= z;
        this.nazwa= nazwa;
    }
    pole(){
        return ((this.Pod1+this.Pod2)*this.wys1)/2
    }

}        
const tr1 = new trap(2,4,4,"trap 1");
const tr2 = new trap(1,4,4,"trap 2");
const tr3 = new trap(5,2,4,"trap 3");

console.log(tr1.nazwa);

console.log(tr1.pole());


// zadanie 4 
function PorFig (f1, f2,f3){
    if(f1.pole()==f2.pole() && f1.pole()==f3.pole() ){
        console.log("są równe")
    }else{
        if(f1.pole()>f2.pole() && f1.pole()>f3.pole() ){
            console.log("większa jest fugura " + f1.nazwa+ " o polu "+ f1.pole());

        }else if (f2.pole()>f1.pole() && f2.pole()>f3.pole()){
            console.log("większa jest fugura " + f2.nazwa+ " o polu "+ f2.pole());

        }else if (f3.pole()>f1.pole() && f3.pole()>f2.pole()){
            console.log("większa jest fugura " + f3.nazwa+ " o polu "+ f3.pole());
        }
        else if(f1.pole()==f2.pole()){
                console.log(f1.nazwa+ " i " +f2.nazwa+" są równe i wynoszą "+f1.pole())
        }else if(f1.pole()==f3.pole()){
            console.log(f1.nazwa+ " i " +f3.nazwa+" są równe i wynoszą "+f1.pole())
        }else if(f2.pole()==f3.pole()){
            console.log(f2.nazwa+ " i " +f3.nazwa+" są równe i wynoszą "+f2.pole())
        }else{
            console.log("jak tu doszło to chyba nie masz liczby w tym XD")
        }
    }
}

PorFig(p2,t2,tr2)

console.log("----------------------------pdf2");


//lab6+ zadanie 1
const tab1 = [1, 2, 3, 4]; 
//sumowanie
var sum = 0;
var i = 0;
while (i < tab1.length) {
  sum += tab1[i];
  i++;  
}
console.log(sum+" suma tablicy ");
//parzyste pokarz
var i = 0;
while (i < tab1.length) {
  if(tab1[i]%2)
  console.log(tab1[i]+" jest parzysta ");
  i++;
}
//mnorzenie *3
var i = 0;
while (i < tab1.length) {
        tab1[i]=tab1[i]*3;
  i++;
}
console.log(tab1)

//dodanie nr alb i jego index
tab1.push(67254)

var i = 0;
while (i < tab1.length) {
    if(tab1[i]==67254){
        console.log("numer almumu jesnt na indeksie nr: "+i )
    }
    i++;
}
//średnia arytmetyczna tablicy?

var sum = 0;
var i = 0;
while (i < tab1.length) {
  sum += tab1[i];
  i++;  
}
aryt=sum/tab1.length;
console.log("średnia arytmetyczna tablicy wynosi "+aryt)

//max liczba z tab

var i = 1;
var max=tab1[0];
while(i < tab1.length){
    if (max<tab1[i]){

        max=tab1[i]
    }
    i++;
}
console.log("max liczba w tablicy wynosi: "+ max)

//ile razy wystapiła 2??

const tab2 = [1, 2, 3,2 ,2, 4]; 

var i = 0;
var x=0
while(i < tab2.length){
    if (tab2[i]==2){
        x++;
    }
    i++;
}
console.log("2 wystąpiła "+ x +" razy w tablicy")