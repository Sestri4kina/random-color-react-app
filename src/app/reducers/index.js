const chooseColor = () => {
  for (var i = 0, random = []; i < 3; i++) {
    random.push(Math.floor(Math.random()*256));
  }
  return random;
}

 export default (state =  {
  color: [135, 19, 119]
}, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      state = {
        color: chooseColor()
      };
      return state;
      break;
    default:
      return state;
  }
};
