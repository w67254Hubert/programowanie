

class Person:
    def __init__(self, pesel, imie, nazwisko):
        self.pesel = pesel
        self.imie = imie 
        self. nazwisko = nazwisko
        self.set_data_urodzenia() 

    def set_nazwisko(self, nazwisko): 
        self.nazwisko =nazwisko
    def get_nazwisko(self):
        return self.nazwisko
    
    def set_data_urodzenia(self): 
        mc = int(self.pesel[2:4]) 
        dz = int(self.pesel[4:6]) 
        if mc>12:
            rok = 2000+int(self.pesel[0:2]) 
            mc = mc-10 
        else:
            rok= 1900+int(self.pesel[0:2])
        self.data_ur = (dz, mc, rok)
    def get_data_urodzenia(self):
        return self.data_ur 
    def __str__(self): 
        return "imie i nazwisko: "+self.imie+" "+self.nazwisko +"\n pesel (data): "+ self.pesel+ " "+ str(self.data_ur) 
ja =Person("861512301234", "Ala", "Makaota") 
print(ja.get_data_urodzenia()) 
print(ja)


class Klient(Person):
    def __init__(self, pesel, imie, nazwisko, nr_klienta):
        super().__init__(pesel, imie, nazwisko)
        self.nr_klienta = nr_klienta 
    def __str__(self): 
        p = Person(self.pesel, self.imie, self.nazwisko) 
        return "dane kilenta nr" + self.nr_klienta + " "+p.__str__() 
nowy = Klient("861512301234", "Ala", "Makaota", "AB12345") 
print(nowy)


import random as rd
import os
from datetime import date 
from datetime import datetime 

class Konto: 
        def __init__(self, klient, stan=0): 
            self.nr_konta = (datetime.now()).strftime("%d%m%Y")+str(rd.randint(1000,2000)+int()) 
            #self.stan = stan  #zaczytać z pliku o nazwie konta, jeśli nie istnieje utworzyć ze stanem
            if os.path.exists("C:\\Users\\hubla\\Documents\\studia-pliki\\repozytoria\\programowanie\\prog2zad\\konta.txt"):
                with open("C:\\Users\\hubla\\Documents\\studia-pliki\\repozytoria\\programowanie\\prog2zad\\konta.txt", 'r') as plik:
                    self.stan = int(plik.read())
            else:
                self.stan = stan
                with open("C:\\Users\\hubla\\Documents\\studia-pliki\\repozytoria\\programowanie\\prog2zad\\konta.txt", 'w') as plik:
                    plik.write(str(stan))


            

            self.klient = klient
        def __str__(self): 
            return "nr: "+self.nr_konta+"\n stan:"+str(self.stan)+"\n"+self.klient.__str__() 


        def zmiana_salda(self, ile, op="O"): 
            if op == "O": 
                if self.stan >= ile: 
                    self.stan = self.stan - ile 
                else: 
                    raise Exception("Przekroczono stan konta") 
            elif op == "I": 
                self.stan +=ile 
            else: 
                raise Exception("Konto na minusie/Nieznana operacja")
            
            with open("C:\\Users\\hubla\\Documents\\studia-pliki\\repozytoria\\programowanie\\prog2zad\\konta.txt", 'w') as plik:
                     plik.write(str(self.stan))


            # zapis1=str(self.stan)
            # zapis2=str(self.nr_konta)
            # zapis="Kwota: "+zapis1+", Konto:"+zapis2
            
            # with open("C:\\Users\\hubla\\Documents\\studia-pliki\\repozytoria\\programowanie\\prog2zad\\konta.txt", 'w') as plik:
            #          plik.write(str(zapis))

            

        def get_stan_konta(self): 
            return self.stan

def losuj_akcje():
    return rd.choice(["O", "I", "W"])
def losuj_kwota():
    return rd.randint(1, 1000) 



nowy = Klient("861512301234", "Ala", "Makaota", "AB12345") 
print(nowy) 
kt = Konto(nowy)
zmiana = losuj_akcje() # "O","I","W"
kwota = losuj_kwota()
print("początkowy stan konta:")
print(kt.get_stan_konta())

# for i in range(2):
#     kt.zmiana_salda(kwota, zmiana)
#     print(kt.get_stan_konta())


kt.zmiana_salda(124,"I")
print("Końcowy stan konta:")
print(kt.get_stan_konta())

#print(kt) 
#kt.zmiana_salda(300, "I") 
#print(kt.get_stan_konta()) 
#kt.zmiana_salda(100) 
#print(kt.get_stan_konta()) 
#kt.zmiana_salda(1000, "O")

# https://ddeby.pl/blog/wyjatki-w-python
# https://docs.python.org/3/library/logging.html#logging-levels

import logging as log
import sys

def multiplication(a, b):
    '''
        Mnożenie dwóch liczb całkowitych
        Raises:
            TypeError: W przypadku, gdy parametry nie będą liczbami
    '''
    return a * b


#multiplication('a', 'b')
logger = log.getLogger()

#log.basicConfig(filename='myapp.log', level=log.ERROR)
log.basicConfig(filename='myapp1.log', filemode='a', format='%(asctime)s,%(msecs)d %(name)s %(levelname)s %(message)s',
                datefmt='%H:%M:%S',level=log.DEBUG)

formatter = log.Formatter('%(asctime)s | %(levelname)s | %(message)s')

stdout_handler = log.StreamHandler(sys.stdout)
stdout_handler.setLevel(log.DEBUG)
stdout_handler.setFormatter(formatter)

file_handler = log.FileHandler('logs.log')
file_handler.setLevel(log.DEBUG)
file_handler.setFormatter(formatter)

logger.addHandler(file_handler)

try:
    t=7/0
    #multiplication('a', 'b')
except TypeError as e:
    log.error('Niedozwolona operacja'+ str(e))
except ZeroDivisionError as e:
    log.warning("something raised an exception: " + str(e))

a=5
b='a'

try:
    result = a / b 
except ZeroDivisionError:
    print("Wyjątek: Dzielenie przez zero")
except TypeError:
    print("Wyjątek: Błąd typu danych")
#except
else:
    print("Brak wyjątku, kod działa poprawnie")






