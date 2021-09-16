import React from 'react';
import './Home.css';
import OrderDrinks from './components/OrderDrinks';
import 'bootstrap/dist/css/bootstrap.css';


class Home extends React.Component {
  render() {
    return (
      <>
        <OrderDrinks />
      </>
    );
  }
}

export default Home;
