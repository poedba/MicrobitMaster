input.onButtonPressed(Button.A, function () {
    if (MsgSent == 1) {
        inString = ""
    }
    basic.showString("" + (text_list[iArrayLocation]))
    cArrayChar = text_list[iArrayLocation]
    iArrayLocation += 1
    if (iArrayLocation >= text_list.length) {
        iArrayLocation = 0
    }
    LastCharSet = 0
    MsgSent = 0
})
function fnMorseAlphabet (inChar: string) {
    if (inChar == "A") {
        fnDot()
        fnDash()
        basic.pause(durPause)
    } else if (inChar == "B") {
        fnDash()
        fnDot()
        fnDot()
        fnDot()
        basic.pause(durPause)
    } else if (inChar == "C") {
        fnDash()
        fnDot()
        fnDash()
        fnDot()
        basic.pause(durPause)
    } else if (inChar == "D") {
        fnDash()
        fnDot()
        fnDot()
        basic.pause(durPause)
    } else if (inChar == "E") {
        fnDot()
        basic.pause(durPause)
    } else if (inChar == "F") {
        fnDot()
        fnDot()
        fnDash()
        fnDot()
        basic.pause(durPause)
    } else if (inChar == "G") {
        fnDash()
        fnDash()
        fnDot()
        basic.pause(durPause)
    } else if (inChar == "H") {
        fnDot()
        fnDot()
        fnDot()
        fnDot()
        basic.pause(durPause)
    } else if (inChar == "I") {
        fnDot()
        fnDot()
        basic.pause(durPause)
    } else if (inChar == "J") {
        fnDot()
        fnDash()
        fnDash()
        fnDash()
        basic.pause(durPause)
    } else if (inChar == "K") {
        fnDash()
        fnDot()
        fnDash()
        basic.pause(durPause)
    } else if (inChar == "L") {
        fnDot()
        fnDash()
        fnDot()
        fnDot()
        basic.pause(durPause)
    } else if (inChar == "M") {
        fnDash()
        fnDash()
        basic.pause(durPause)
    } else if (inChar == "N") {
        fnDash()
        fnDot()
        basic.pause(durPause)
    } else if (inChar == "O") {
        fnDash()
        fnDash()
        fnDash()
        basic.pause(durPause)
    } else if (inChar == "P") {
        fnDot()
        fnDash()
        fnDash()
        fnDot()
        basic.pause(durPause)
    } else if (inChar == "Q") {
        fnDash()
        fnDash()
        fnDot()
        fnDash()
        basic.pause(durPause)
    } else if (inChar == "R") {
        fnDot()
        fnDash()
        fnDot()
        basic.pause(durPause)
    } else if (inChar == "S") {
        fnDot()
        fnDot()
        fnDot()
        basic.pause(durPause)
    } else if (inChar == "T") {
        fnDash()
        basic.pause(durPause)
    } else if (inChar == "U") {
        fnDot()
        fnDot()
        fnDash()
        basic.pause(durPause)
    } else if (inChar == "V") {
        fnDot()
        fnDot()
        fnDot()
        fnDash()
        basic.pause(durPause)
    } else if (inChar == "W") {
        fnDot()
        fnDash()
        fnDash()
        basic.pause(durPause)
    } else if (inChar == "X") {
        fnDash()
        fnDot()
        fnDot()
        fnDash()
        basic.pause(durPause)
    } else if (inChar == "Y") {
        fnDash()
        fnDot()
        fnDash()
        fnDash()
        basic.pause(durPause)
    } else if (inChar == "Z") {
        fnDash()
        fnDash()
        fnDot()
        fnDot()
        basic.pause(durPause)
    }
}
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
    if (LastCharSet == 0) {
        inString = "" + inString + cArrayChar
        LastCharSet = 1
    }
    iArrayLocation = 0
    durPause = 1000
    currChar = 0
    lenString = inString.length
    while (currChar < lenString) {
        fnMorseAlphabet(inString.charAt(currChar))
        currChar += 1
    }
    MsgSent = 1
})
input.onButtonPressed(Button.B, function () {
    inString = "" + inString + cArrayChar
    iArrayLocation = 0
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    LastCharSet = 1
    MsgSent = 0
})
function fnDash () {
    hummingbird.setLED(ThreePort.One, 100)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
    hummingbird.setLED(ThreePort.One, 0)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
function fnDot () {
    hummingbird.setLED(ThreePort.One, 100)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.pause(10)
    hummingbird.setLED(ThreePort.One, 0)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
let lenString = 0
let currChar = 0
let durPause = 0
let LastCharSet = 0
let cArrayChar = ""
let MsgSent = 0
let inString = ""
let iArrayLocation = 0
let text_list: string[] = []
text_list = [
"A",
"B",
"C",
"D",
"E",
"F",
"G",
"H",
"I",
"J",
"K",
"L",
"M",
"N",
"O",
"P",
"Q",
"R",
"S",
"T",
"U",
"V",
"W",
"X",
"Y",
"Z",
"_"
]
iArrayLocation = 0
inString = ""
MsgSent = 0
