import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {SET_CHARACTERS} from './Redux/types'
// import { connect } from 'react-redux'

function App() {

  const dispatch = useDispatch()
  const characters = useSelector(state => state.characters)

  function showCharacters(){
    return characters.map(character => <h1>{character.name}</h1>)
  }

  useEffect(getCharacters, [])

  function getCharacters(){
    fetch('https://rickandmortyapi.com/api/character/?page=7')
      .then(response => response.json())
      .then(({results}) => dispatch({
        type: "SET_CHARACTERS", 
        characters: results 
      }))
      // .then(({results}) => props.setCharacters(results))
  }
  return (
    <div className="App">
      {showCharacters()}
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     characters: state.characters
//   }
// }

export default (App);
// export default connect(mapStateToProps, null)(App);
