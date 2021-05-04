
import React from 'react';
import './App.css';
import data from './contacts.json'


let actors = []
data.map((e)=>{
  if(actors.length<5){
    actors.push(e)
  }
})
class App extends React.Component{

  state = {
    celebs: actors
  }



  handlerAddRandom =()=>{
    let randomIndex = Math.floor(Math.random()*data.length)
    let elem = data[randomIndex]
  

    this.setState({
      celebs: [elem, ...this.state.celebs]
  })
}
  

  render(){
    const {celebs} = this.state
    return (
      <div className="App">
        <button onClick={this.handlerAddRandom}>Add Random Contact</button>
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
}

export default App;
