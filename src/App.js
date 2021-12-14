import { useState } from 'react';
import MenuAppBar from './Menubar';
import './App.css';
import theContext from './theContext';
import { Neo4jContext } from 'use-neo4j';

function App() {
  const [gloproject,setGloProject] = useState('');
  const {Provider} = theContext;
  return (
    <div className="App">
      <Provider value={{gloproject,setGloProject}}>
        <MenuAppBar />
        <h1>This is {gloproject}</h1>
      </Provider>
    </div>
  );
}

export default App;
