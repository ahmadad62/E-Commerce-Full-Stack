import { Router, Route, Switch } from 'react-router-dom';
import Pay from './components/Pay'
import Success from './components/Success'
import { createBrowserHistory } from 'history';
import './App.css';

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/pay">
            <Pay />
          </Route>
          <Route path="/success">
            <Success />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;


/* 
NOTE:
  This code creates a new history object using the createBrowserHistory 
  function from the history package, and then passes it down to the Router 
  component as a prop. Make sure that your code is structured similarly, 
  and that the history prop is being passed down correctly.
*/