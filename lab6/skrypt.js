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


//zadanie 4 dokończ
// function PorFig(f1,f2,f3)
// if(f1.pole()!= f2.pole()){
//     if(f1.pole()>f2.pole()){
//         console.log("większa figura " +f1.nazwa + "o polu"+ f2.pole());
//     }

}
// PorFig(p2,t2,tr2)

