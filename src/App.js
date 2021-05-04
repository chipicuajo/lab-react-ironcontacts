
import React, {useState} from 'react';
import './App.css';
import data from './contacts.json'



let actors = []
data.map((e)=>{
  if(actors.length<5){
    actors.push(e)
  }
})

function App (){

  const [celebs, updateCelebs] = useState(actors)




  const handleSortName = () => {
    
    let clonedCelebs = JSON.parse(JSON.stringify(celebs))

    clonedCelebs.sort((a, b) => {
        if (a.name > b.name) {
            return 1
        }
        else if(a.name < b.name) {
            return -1
        }
        else {
            return 0
        }
    })
    updateCelebs(clonedCelebs)
  }

  const handleSortPop = () => {
    
    let clonedCelebs = JSON.parse(JSON.stringify(celebs))

    clonedCelebs.sort((a, b) => {
        if (a.popularity > b.popularity) {
            return 1
        }
        else if(a.popularity < b.popularity) {
            return -1
        }
        else {
            return 0
        }
    })
    updateCelebs(clonedCelebs)
  }

  const handlerAddRandom =()=>{
    let randomIndex = Math.floor(Math.random()*data.length)
    let elem = data[randomIndex]
  

    updateCelebs( [elem, ...celebs])
  }
  
  const handlerDelete = (i) => {
    console.log(i)
    let filteredCelebs = celebs.filter((e, index)=>{
      return celebs.indexOf(e) !== i
    })
    updateCelebs( filteredCelebs)
  }
  


  return (
      <div className="App">
        <button onClick={handlerAddRandom}>Add Random Celeb</button>
        <button onClick={handleSortName}>Sort Celeb Name</button>
        <button onClick={handleSortPop}>Sort Celeb Popularity</button>
        {
          celebs.map((e,i)=>{
            return <ul key={i}>
                      <li><img src={e.pictureUrl} width="8%"/> {e.name} - {e.popularity.toFixed(2)} - <button onClick={() =>handlerDelete(i)}>Delete</button></li>
                    </ul>
          })
        }
    </div>
    )
}
      


export default App;
