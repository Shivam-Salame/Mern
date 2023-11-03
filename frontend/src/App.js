import logo from './logo.svg';
import './App.css';
import  Greet  from './Greet';
import Props from './Props';
import Test from './Classtest';
import Change from './Message';

function App() {
  return (
    <div className="App">
      <Greet></Greet>
      <Props name='shivam'>
        <p>salame</p>
      </Props>
      <Props name='navy'></Props>
      <Test name="donn"></Test>

      <Change></Change>
    </div>
  );
}

export default App;
