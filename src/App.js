import React from 'react';
import exios from 'axios';
import './scss/app.scss';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';

function App() {
  const [pizzas, setPizzas] = React.useState([]);
  React.useEffect(() => {
    exios.get('http://localhost:3000/db.json').then(({ data }) => {
      setPizzas(data.pizzas);
    });

    // fetch('http://localhost:3000/db.json')
    //   .then((resp) => resp.json())
    //   .then((resp) => setPizzas(resp.pizzas));
  }, []);

  // console.log(pizzas);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" render={() => <Home items={pizzas} />} exact />
        <Route path="/cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;
