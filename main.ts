radio.onReceivedString(function on_received_string(receivedString: string) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    radio.sendString(":)")
})
radio.setGroup(223)
for (let index = 0; index < 25; index++) {
    led.plot(index, 0)
}
