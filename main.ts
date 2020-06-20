input.onButtonPressed(Button.A, function () {
    if (ze1 == 1) {
        ze1 = 0
        zl1 = 1
        ce1 = 0
    } else if (ce1 == 0 && zl1 == 1) {
        ze1 = 0
        zl1 = 0
        ce1 = 1
    } else if (zl1 == 0 && ce1 == 1) {
        ce1 = 1
        zl1 = 1
        ze1 = 0
    } else if (zl1 == 1 && ce1 == 1) {
        ce1 = 0
        zl1 = 0
        ze1 = 1
    }
    if (chyba == 1) {
        ce1 = 1
        zl1 = 0
        ze1 = 0
        chyba = 0
    }
})
input.onButtonPressed(Button.B, function () {
    chyba = 1
})
let chyba = 0
let ce1 = 0
let zl1 = 0
let ze1 = 0
ze1 = 1
zl1 = 0
ce1 = 0
chyba = 0
basic.forever(function () {
    if (chyba == 0) {
        pins.digitalWritePin(DigitalPin.P0, ze1)
        pins.digitalWritePin(DigitalPin.P1, zl1)
        pins.digitalWritePin(DigitalPin.P2, ce1)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(200)
    }
})
