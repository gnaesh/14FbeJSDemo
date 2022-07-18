
import './App.css';
import {BrowserRouter as Router ,Routes,Route ,Link,NavLink, Switch } from 'react-router-dom';
import ShowAllEmpComp from "./component/ShowAllEmpComp";
import ShowAddEmpPageComp from './component/ShowAddEmpPageComp';
import ShowUpdateEmpPage from './component/ShowUpdateEmpPage';
function App() {
  return (
    <Router>
    <div>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/ShowAddEmpPage">AddEmp</Link></li>
      <li><Link to="/ShowAllEmpPage">ShowAllEmp</Link></li>
      <li><Link to="">DeleteEmp</Link></li>
      <li><Link to="/ShowUpdateEmpPage/:idd">UpdateEmp</Link></li>
    </div>
    <hr color="green" size="5"></hr>
    <Routes>
      <Route path="/" element={<ShowAllEmpComp/>}></Route>
      <Route path="/ShowAllEmpPage" element={<ShowAllEmpComp/>}></Route>
      <Route path="/ShowAddEmpPage" element={<ShowAddEmpPageComp/>}></Route>
      <Route path="/ShowUpdateEmpPage/:idd" element={<ShowUpdateEmpPage/>}></Route>
    </Routes>
    </Router>

  );
}

export default App;
