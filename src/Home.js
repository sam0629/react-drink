import React from 'react';
import './Home.css';
import OrderDrinks from './components/OrderDrinks';

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
