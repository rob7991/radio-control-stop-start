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
    radio.sendString("GO")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "GO") {
        goForward()
    } else {
        stop()
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("STOP")
})
radio.setGroup(123)
