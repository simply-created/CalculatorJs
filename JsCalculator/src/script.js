// finds id of an element easier
const FIND = (id) => document.getElementById(id);
// state buttons (7 -> off, 6 -> on)
const STATE = [FIND("7"), FIND("6")];
// screen ids (0-> screen, 1-> text in screen, 2-> text above)
const SCREEN = [FIND("0"), FIND("1"), FIND("2")];
// numpad array (0 -> 9)
const NUMPAD = [
  FIND("33"),
  FIND("28"),
  FIND("29"),
  FIND("30"),
  FIND("23"),
  FIND("24"),
  FIND("25"),
  FIND("18"),
  FIND("19"),
  FIND("20"),
];
const OPERATIONS = [FIND("31"), FIND("32"), FIND("26"), FIND("27")];

// Maybe Convert to Class syntax? for other types of calculators?

function toggleState([isOff, isOn]) {
  // creates an array from 0 to 37
  let id_array = [...Array(38).keys()];

  // sets pointer events to none, when isOff is false
  STATE[0].style.pointerEvents = isOff === false ? "none" : "";
  // sets all pointer events to none when isOff is false
  if (isOff) for (let i in id_array) FIND(i).style.pointerEvents = "none";
  // sets all pointer events to auto by default
  STATE[1].style.pointerEvents = isOn === true ? "auto" : "";
  // sets all pointer events to auto when isOn is true
  if (isOn) for (let i in id_array) FIND(i).style.pointerEvents = "auto";
}
function setScreenColor(color) {
  // sets background color for the screen
  SCREEN[0].style.backgroundColor = color;
}
function initialize(reset_state) {
  switch (reset_state) {
    case "on":
      SCREEN[1].placeholder = [];
      break;
    case "off":
      SCREEN[1].placeholder = [];
      break;
  }
}

// OFF BUTTON HANDLER
STATE[0].addEventListener("click", (event) => {
  setScreenColor("rgb(123, 121, 121)");
  initialize((reset_state = "on"));
  toggleState([true, false]);
});
// ON BUTTON HANDLER
STATE[1].addEventListener("click", (event) => {
  setScreenColor("rgb(255,255,255)");
  initialize((reset_state = "off"));
  toggleState([false, true]);
});

// All buttons are off at default
toggleState([true, false]);

// NUMPAD FOREACH LOOP
NUMPAD.forEach((value, index) => {
  // assigns handler to each value (the id)
  value.addEventListener("click", () => {
    // adds the integer index to the screen text
    SCREEN[1].placeholder += index;
  });
});
