import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import Greeting from './components/ItemListContainer';

const App = () => {
  return (
   <> 
   <NavBar />   

   <CartWidget />  

   <Greeting />
   </>
  );
}

export default App;
