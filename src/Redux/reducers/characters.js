export default (state=[], action) => {
  switch(action.type){
    case "SET_CHARACTERS": 
      return action.characters
    default: 
      return state
  }
}