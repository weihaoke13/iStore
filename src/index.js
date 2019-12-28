import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import {ProductProvider} from "./context"; 
import './styles.css';


// function App(){
//     return(
//         <div className='App'>
//            <App></App>

//         </div>
//     )
// }


// const rootElement = document.getElementById("root");
ReactDOM.render(

    <ProductProvider>
        <Router>
            <App />
        </Router>
    </ProductProvider>
    
  ,
     document.getElementById('root'));
