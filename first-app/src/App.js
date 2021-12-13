import React, {useState} from 'react'
import ClassCounter from './components/ClassCounter'

function App() {
    const [value, setValue] = useState('Текст в импуте');
    

  return (
    <div className="App">
      <ClassCounter />
    </div>
  );
}

export default App;
