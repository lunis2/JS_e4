function ElectroDevice(powerConsumption, powerTime) {
    this.powerConsumption = powerConsumption
    this.powerTime = powerTime
}

ElectroDevice.prototype.powerOn = function () {
    console.log(`Activated. Consumption: ${this.powerConsumption * this.powerTime} watt`)
}
ElectroDevice.prototype.powerOff = function () {
    console.log(`Deactivated. Consumption: 0 watt`)
}

function VacuumRobot(powerConsumption, powerTime) {
    this.powerConsumption = powerConsumption
    this.powerTime = powerTime
    this.dustVolume = 0
}

VacuumRobot.prototype = new ElectroDevice()

VacuumRobot.prototype.isContainerFull = function () {
    return this.dustVolume > 90
}

function TV(powerConsumption, powerTime) {
    this.powerConsumption = powerConsumption
    this.powerTime = powerTime
    this.sleepModeOn = false
}

TV.prototype = new ElectroDevice()

TV.prototype.sleepModeEnable = function () {
    this.sleepModeOn = true
    console.log('Sleep Mode enabled')
}


const hdtv = new TV(85, 2)
const roomba = new VacuumRobot(240, 1)

hdtv.powerOn()
hdtv.sleepModeEnable()

roomba.powerOn()
if (!roomba.isContainerFull()) {
    console.log('Container is empty')
} else {
    console.log('Container is full')
}

hdtv.powerOff()
roomba.powerOff()