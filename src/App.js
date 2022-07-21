import './App.css';
import Header from './containers/Header';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';


function App() {
  return (
      <div className='App'>
        <BrowserRouter>
           <Header/>
           <Routes>
              <Route path='/' exact element={<ProductListing/>}/>
              <Route path='/product/:productId' element={<ProductDetail/>}/>
              <Route>404 not found!</Route>
            </Routes> 
        </BrowserRouter>
      </div>
  );
}

export default App;
