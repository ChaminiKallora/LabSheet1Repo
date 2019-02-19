//1
var first = function(){
    console.log("Hello World");
}

function second(arg){
    arg()
}

second(first);

//2
var car = {
    color : "Red",
    id : "CDFVG",
    printColor : function(){
        console.log(this.color);
    }

}

console.log(car.color);
car.printColor();

//3
var vehicleName = "Car";

function printVehicleName(){
    console.log(this.vehicleName);
}

var vehicle = {
    vehicleName : "Motorbike",
    getVehicleName : printVehicleName,
}

vehicle.getVehicleName();
printVehicleName();

//4
function taxPrecentage(amount){

    return function(tax){
        amount = amount + (amount * tax / 100);
        return amount;
    }


}

var taxAmount = taxPrecentage(2000);
console.log(taxAmount(10));


//5
function githubAPI(cback){
    $.getJSON('https://api.github.com/users', cback);
}

function user(info){
    info.forEach(element => {
        if(element.id == 1){
            console.log(element.url)
        }
    });
}

githubAPI(user);
