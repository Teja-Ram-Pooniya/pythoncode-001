def on_received_string(receivedString):
    basic.show_string(receivedString)
radio.on_received_string(on_received_string)

def on_button_pressed_b():
    radio.send_string(":)")
input.on_button_pressed(Button.B, on_button_pressed_b)

radio.set_group(223)
for index in range(25):
    led.plot(index, 0)