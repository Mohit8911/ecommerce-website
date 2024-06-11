import { BrowserRouter  as Router , Switch , Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Notfound from './components/Notfound/Notfound';
import OrderReview from './components/OrderReview/OrderReview';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Shop from './components/Shop/Shop';
import { useState } from 'react';
import { useEffect } from 'react';


function App() {

  const [cartQuantity, setCartQuantity] = useState(0);

  useEffect(() => {console.log('Cart quantity: ' + cartQuantity) }, [cartQuantity])


  return (
    <div>
      
      
      
      <Router>
      <Header cartQuantity={cartQuantity}></Header>
       <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/order">
            <OrderReview setCartQuantity={setCartQuantity}></OrderReview>
          </Route>
          <Route path="/placeorder">
            <PlaceOrder></PlaceOrder>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
