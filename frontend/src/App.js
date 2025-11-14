import React from 'react';
import DataForm from './components/DataForm';
import DataList from './components/DataList';

function App(){
  return (
    <div style={{maxWidth:800, margin:'0 auto'}}>
      <h1>Data Entry Manager</h1>
      <DataForm />
      <hr/>
      <DataList />
    </div>
  );
}

export default App;
