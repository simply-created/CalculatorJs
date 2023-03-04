const FIND = id => document.getElementById(id)


const MAIN = {
    // Contains all labeled Ids for calc project
    screen: FIND("screen"),
    textInScreen: FIND("textInScreen"),
    SquareRoot: FIND("SquareRoot"),
    TENn: FIND("TENn"),
    En: FIND("En"),
    On: FIND("On"),
    Off: FIND("Off"),
    Operations: FIND("Operations"),
    delete: FIND("delete"),
    logic: FIND("logic"),
    XposN: FIND("XposN"),
    XnegN: FIND("XnegN"),
    changeValue: FIND("changeValue"),
    sin: FIND("sin"),
    cos: FIND("cos"),
    tan: FIND("tan"),
    symbol: FIND("symbol"),
    seven: FIND("7"),
    eight: FIND("8"),
    nine: FIND("9"),
    four: FIND("4"),
    five: FIND("5"),
    six: FIND("6"),
    one: FIND("1"),
    two: FIND("2"),
    three: FIND("3"),
    zero: FIND("0"),
    clear: FIND("clear"),
    allClear: FIND("allClear"),
    multiply: FIND("multiply"),
    divide: FIND("divide"),
    add: FIND("add"),
    subtract: FIND("subtract"),
    decimal: FIND("decimal"),
    exponent: FIND("exponent"),
    equal: FIND("equal"),
    enter: FIND("enter")
}


MAIN.On.addEventListener('click', () => {

    MAIN.screen.style.backgroundColor = 'rgb(255,255,255)'
    MAIN.On.style.pointerEvents = 'none'

    let num_pad = [
        MAIN.zero, MAIN.one, MAIN.two, MAIN.three, MAIN.four,
        MAIN.five, MAIN.six, MAIN.seven, MAIN.eight, MAIN.nine
    ]

    // Loops through the num_pad array and adds the assigned index or number
    num_pad.forEach((element, index) => {
        element.addEventListener('click', () => {
            MAIN.textInScreen.innerHTML += index
        })
    });

    // Clears screen
    MAIN.clear.addEventListener('click', () => {
        MAIN.textInScreen.innerHTML = ""
    })
})


MAIN.Off.addEventListener('click', () => {

    MAIN.screen.style.backgroundColor = 'rgb(70, 70, 70)'
    MAIN.On.style.pointerEvents = 'auto'

    // turns off all calculator buttons, initializes all buttons

    // Dims screen
    MAIN.textInScreen.innerHTML = ""


})