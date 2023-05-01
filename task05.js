class ElectroDevice {
    constructor(powerConsumption, powerTime) {
        this.powerConsumption = powerConsumption;
        this.powerTime = powerTime;
    }

    powerOn() {
        console.log(`Activated. Consumption: ${this.powerConsumption * this.powerTime} watt`);
    }

    powerOff() {
        console.log(`Deactivated. Consumption: 0 watt`);
    }
}

class VacuumRobot extends ElectroDevice {
    constructor(powerConsumption, powerTime) {
        super(powerConsumption, powerTime);
        this.dustVolume = 0;
    }

    isContainerFull() {
        return this.dustVolume > 90;
    }
}

class TV extends ElectroDevice {
    constructor(powerConsumption, powerTime) {
        super(powerConsumption, powerTime);
        this.sleepModeOn = false;
    }

    sleepModeEnable() {
        this.sleepModeOn = true;
        console.log("Sleep Mode enabled");
    }
}

const hdtv = new TV(85, 2);
const roomba = new VacuumRobot(240, 1);

hdtv.powerOn();
hdtv.sleepModeEnable();

roomba.powerOn();
if (!roomba.isContainerFull()) {
    console.log("Container is empty");
} else {
    console.log("Container is full");
}

hdtv.powerOff();
roomba.powerOff();
