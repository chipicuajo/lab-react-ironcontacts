import './App.css';
import data from './contacts.json'

function App() {
  
  return (
    <div className="App">
      {
        data.map((e,i)=>{
            return <ul key={i}>
                      <li><img src={ e.pictureUrl} width="10%"/>,{e.name} ,{e.popularity.toFixed(2)}</li>
                    </ul>
          })
        }
    

    </div>
  );
}

export default App;
