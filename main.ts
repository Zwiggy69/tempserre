let temperatuur = 24
basic.forever(function () {
    if (temperatuur > input.temperature()) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.showLeds(`
            # . # . #
            # . # . #
            # . # . #
            # . # . #
            # . # . #
            `)
    }
})
basic.forever(function () {
    if (temperatuur == input.temperature()) {
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
basic.forever(function () {
    if (temperatuur == input.temperature()) {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
basic.forever(function () {
    if (temperatuur < input.temperature()) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.showLeds(`
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            `)
    }
})
loops.everyInterval(5000, function () {
    basic.showNumber(temperatuur)
})
