
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

 const handlerAddRandom =()=>{
    let randomIndex = Math.floor(Math.random()*data.length)
    let elem = data[randomIndex]
  

    updateCelebs( [elem, ...celebs])
}
  

  return (
      <div className="App">
        <button onClick={handlerAddRandom}>Add Random Contact</button>
        {
          celebs.map((e,i)=>{
            return <ul key={i}>
                      <li><img src={e.pictureUrl} width="10%"/>,{e.name} ,{e.popularity.toFixed(2)}</li>
                    </ul>
          })
        }
    </div>
    )
  };


export default App;
