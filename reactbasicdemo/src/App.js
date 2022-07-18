import './App.css';
import Employee from './components/Employee';

import Footer from './components/Footer';

import Greetme from './components/Greetme.js';

// import Greetme2 from './components/Greetme2';

import Header from './components/Header';
import LifeCycleB from './components/LifeCycleB';
import ReactHookDemo from './components/ReactHookDemo';
import RefDemo from './components/RefDemo';
import ProductReviewForm from "./components/ProductReviewForm"

function App() {

  return (

    <div className="App">
{/* 
      <Header compName="Capgemini" />

      {/* <Greetme2 firstName="Akshay" lastName="Sajgule" /> */}
{/* 
      <Greetme firstName="Ganesh" lastName="Adarkar" />

      <Footer country="INdia" brand="DQ " /> 
      <LifeCycleB location="mumbai"/> */}


 <ProductReviewForm />

    </div>

  );

}



export default App;
