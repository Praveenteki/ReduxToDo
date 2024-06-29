// import logo from './logo.svg';
import './App.css';
import store from '../src/app/store';
import { Provider } from 'react-redux';
import Counter from './features/counter/counter';
import Todolist from './features/TodoList/todolist';


function App() {
  return (
    <Provider  store = {store}>
       <div className="App">
      <h1>welcome redux toolkit</h1>
      <Counter/>
      <Todolist/>
     </div>
    </Provider>
   
  );
}

export default App;
