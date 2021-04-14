import logo from './logo.svg';
import './App.css';
import * as axios from 'axios';
import { Route } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/header/Header';
import People from './Components/People';
import Korabl from './Components/Korabl';
import Planets from './Components/Planets';


function App() {
  return (
    <div className="App">
      <Header/>
      <div  >
        <Route path='/people' exact render={()=> <People/>}/>
        <Route path='/people/:id' exact render={()=> <People/>}/>
        <Route path='/korabl' exact render={()=> <Korabl/>}/>
        <Route path='/planets' exact render={()=> <Planets/>}/>
        
      </div>
    </div>
  );
}

export default App;
