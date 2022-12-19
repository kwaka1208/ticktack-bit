input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 12; index++) {
        TickTack(5)
        led.plot(calcX(), calcY())
        tick += 1
    }
})
function calcY () {
    return Math.floor(tick / 5)
}
function TickTack (回数: number) {
    for (let index = 0; index < 回数; index++) {
        led.plot(calcX(), calcY())
        basic.pause(500)
        led.unplot(calcX(), calcY())
        basic.pause(500)
    }
}
function calcX () {
    return tick % 5
}
let tick = 0
let min = 0
let sec = 0
tick = 0
