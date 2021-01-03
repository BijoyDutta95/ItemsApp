import './App.css';
import Home from './components/Home'
import AddItem from './components/AddItem'
import EditItem from './components/EditItem'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component= {Home}/>
          <Route path="/add" component= {AddItem}/>
          <Route path="/edit/:id" component= {EditItem}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
