function Vehical(make,model,year,color,weight,maximumspeed){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.weight = weight;
    this.maximumspeed = maximumspeed;
}
Vehical.prototype.startEngine = function(){
    console.log("Starting the engine")
}
Vehical.prototype.stopEngine = function(){
    console.log("stopping the engine")
}
Vehical.prototype.accelerator = function(){
    console.log("accelerating")
}
Vehical.prototype.break = function(){
    console.log("braking")
}



function Automobile(make,model,year,color,weight,maximumspeed,doors,seating_capacity,fuel_type){
    Vehical.call(this,make,model,year,color,weight,maximumspeed)
    this.doors = doors;
    this.seating_capacity = seating_capacity;
    this.fuel_type = fuel_type;
}
 
Automobile.prototype.controleLight = function(){
    console.log("Controlling Lights")
}
Automobile.prototype.ac = function(){
    console.log("Air Conditioning on Auto Mode")
}
Object.setPrototypeOf(Automobile.prototype,Vehical.prototype)




function Car(make,model,year,color,weight,maximumspeed,doors,seating_capacity,fuel_type,body,transmission,horsepower){
    Automobile.call(this,make,model,year,color,weight,maximumspeed,doors,seating_capacity,fuel_type)
    this.body = body;
    this.transmission = transmission;
    this.horsepower = horsepower;
}
Car.prototype.lock_doors = function(){
    console.log("Now doors has locked")
}
Car.prototype.unlock_doors = function(){
    console.log("Now doors has unlocked")
}
Car.prototype.auto_sunroof = function(){
    console.log("Auto Sunroof enabled")
}

Object.setPrototypeOf(Car.prototype,Automobile.prototype)

let car1 = new Car(2022,"Top Model",2023,"black","N/A,220","Four Doors",6,"Diesel","SUV","Automatic","167.62bhp@3750rpm")
console.log(car1)
car1.startEngine()
car1.stopEngine()
car1.accelerator()
car1.break()
car1.controleLight()
car1.ac()
car1.lock_doors()
car1.unlock_doors()
car1.auto_sunroof()

