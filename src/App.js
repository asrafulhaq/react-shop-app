import { Route, Routes } from 'react-router-dom';
import './_assets/css/bundle.css';
import './_assets/css/style.css';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Pages/Home';
import Shop from './components/Pages/Shop';
import ProductSingle from './components/Pages/ProductSingle';
import Dashboard from './components/Admin/Dashboard';
import Category from './components/Admin/Category';
import Tag from './components/Admin/Tag';
import Products from './components/Admin/Products';
import Dash from './components/Admin/Dash';

function App() {
  return (
    <>      
      <Header />        
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/shop' element={ <Shop /> } />
          <Route path='/shop/:name' element={ <ProductSingle /> } /> 
          <Route path='/admin' element={ <Dashboard /> } >              
              <Route path='/admin/dashboard' element={ <Dash /> } /> 
              <Route path='/admin/products' element={ <Products /> } />
              <Route path='/admin/category' element={ <Category /> } />
              <Route path='/admin/tag' element={ <Tag /> } />
          </Route>             
        </Routes>
      <Footer />      
         
    </>
  );
}

export default App;
