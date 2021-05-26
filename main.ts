function goForward () {
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Forward, 80)
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor2, kitronik_klip_motor.MotorDirection.Forward, 80)
    basic.showLeds(`
        . # # # .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
}
function stop () {
    kitronik_klip_motor.motorOff(kitronik_klip_motor.Motors.Motor1)
    kitronik_klip_motor.motorOff(kitronik_klip_motor.Motors.Motor2)
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)
}
input.onButtonPressed(Button.A, function () {
    radio.sendString("G")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "G") {
        goForward()
    } else {
        stop()
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("S")
})
radio.setGroup(123)
