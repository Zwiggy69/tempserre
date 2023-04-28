let temperatuur = input.temperature()
basic.showNumber(temperatuur)
loops.everyInterval(60000, function () {
    basic.showNumber(temperatuur)
})
basic.forever(function () {
    if (temperatuur > input.temperature()) {
        pins.digitalWritePin(DigitalPin.P2, 1)
    }
})
basic.forever(function () {
    if (temperatuur == input.temperature()) {
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
basic.forever(function () {
    if (temperatuur < input.temperature()) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    }
})
basic.forever(function () {
    if (temperatuur == input.temperature()) {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
