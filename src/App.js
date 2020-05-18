import React from 'react';
import data from './data.json';
import './App.css';
import Group from './components/group';
import Services from './services';

function App() {
  const services = new Services();
  const DATA = services.createNewData(data);
  const groups = Object.keys(DATA).map((keyName) => {
    return <Group group={DATA[keyName]} key={keyName} group_name={keyName} />
  })
  return (
    <div className="App">
      <div className="table">
        {groups}
      </div>
    </div>
  );
}

export default App;
