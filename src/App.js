import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import Footer from './Pages/Footer/Footer';
import Booking from './Pages/Home/Booking/Booking';
import Home from './Pages/Home/Home/Home';
import LogIn from './Pages/LogIn/LogIn';
import PrivateRoute from './Pages/LogIn/PrivateRoute/PrivateRoute';
import Nothing from './Pages/Nothing/Nothing';
import Order from './Pages/Order/Order';
import Register from './Pages/Register/Register';
import Header from './Pages/Shared/Header/Header';
import Shipping from './Pages/Shipping/Shipping';





function App() {
  return (
    <div className="App">
    <AuthProvider>
    <Router>
    <Header></Header>
    
      <Switch>
        <Route exact path="/">
        <Home></Home>
        </Route>
        
        <Route path="/home">
        <Home></Home>
        </Route>

        <Route path="/login">
        <LogIn></LogIn>
        </Route>

        <Route path="/register">
        <Register></Register>
        </Route>

        <PrivateRoute path="/shipping">
        <Shipping></Shipping>
        </PrivateRoute>

        <PrivateRoute path="/order">
        <Order></Order>
        </PrivateRoute>

        <PrivateRoute path="/booking/:id">
        <Booking></Booking>
        </PrivateRoute>


        <Route path="*">
        <Nothing></Nothing>
        </Route>


      </Switch>
      
    </Router>
    </AuthProvider>
      
    </div>
  );
}

export default App;
