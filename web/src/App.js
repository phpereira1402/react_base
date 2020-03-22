import React, {useState, useEffect} from 'react';
import api from './services/api';

import DevForm from './components/DevForm';
import DevItem from './components/DevItem';


import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';


//Components: Bloco de html, css, e js.
//Estado:
//Propriedade: passagem de parametros entre components , exemplo o title do comp header. 
function App() {

  const [devs, setDevs] = useState([]);

  useEffect(() =>{
    handleGetDev();
  });

  async function handleGetDev(){
    const response = await api.get('/devs', {});
    setDevs(response.data);
    console.log(response.data);
  };

  
  async function handleAddDev(data){

    const response = await api.post('/devs', data);


    setDevs([...devs, response.data]);

    //console.log(response.data);

  };

  
  
  
  return (
    <div id="app">
      <aside>
        <DevForm onSubmit={handleAddDev} />

      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}                     
        </ul>
      </main>
    </div>
        // <Header title="Dashboard"/>
        // <Header title="Título 1"/>
        // <Header title={contador}/>
        // <button>{contador}</button>
        // <br/>
        // <button onClick={incrementCounter}>Incrementar saporra</button>
  );
}

export default App;

