
var Car = function(company, color, year, course) {
    this.company = company;
    this.color = color;
    this.year = year;
    this.course = course;
    
}


Car.prototype.driving = function(km) {
    this.course += km;     
    console.log('Dotychczasowy przebieg'+this.course);

    if(this.course>=10000) {
        console.log('wymiana oleju')
    }
}

Car.prototype.ChangeColor = function(color) {
    if (typeof color =='String') {
        this.color =color;
        console.log(color)
     

    }
}

var Samochod = new Car('BMW' , 'red' , '2009' , 678);






    






//Zaproponuj strukturę obiektu dla samochodów.
//a) właściwości z wartościami nadawanymi w trakcie tworzenia obiektu: marka, kolor, rok produkcji, przebieg
//b) metody korzystające z podanych własciwości:
//a) drive([liczba kilometrów]) - metoda zwiekszajaca przebieg o podaną liczbę kilometrów. Wynikiem metody powinna być informacja wyświetlana 
//w konsoli informująca o pokonanym dystansie. Po każdorazowym przekroczenie 10,000 km dodatkowo musi zostać wyświetlona informacja o konieczności zmiany oleju
//b) changeColor([kolor]) - metoda zmieniająca kolor na podany w argumencie. Kolor musi być Stringiem.
//c) metody zwracające poszczególne właściwości w postaci Stringa o treści:
"Przebiegi samochodu o marce" wynosi:
