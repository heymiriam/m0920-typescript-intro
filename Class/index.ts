class Vehicle {
    // protected drive(): void {
    //     console.log('vroooom')
    // }

    protected honk(): void {
        console.log('beeep!')
    }
}

const vehicle = new Vehicle()
// vehicle.drive()
// vehicle.honk()

class Car extends Vehicle{

    constructor(public wheels: number, public color: string){
        super()
    }

    private drive(): void {
        console.log('choo choo')
    }

    startDrivingProcess(): void {
        this.drive()
        this.honk()
    }
}

const car = new Car(4, 'red')
// car.drive()
car.startDrivingProcess()
// car.honk()
