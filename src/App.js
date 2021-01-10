import React from 'react';
import { useDispatch } from 'react-redux';
import exios from 'axios';
import './scss/app.scss';
import { setPizzas } from './redux/actions/pizzas';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';

function App() {
  const dispatch = useDispatch();
  // const state = useSelector(({ filters, pizzas }) => {
  //   return {
  //     sortBy: filters.sortBy,
  //     items: pizzas.items,
  //   };
  // });
  React.useEffect(() => {
    exios.get('http://localhost:3000/db.json').then(({ data }) => {
      dispatch(setPizzas(data.pizzas));
    });

    // fetch('http://localhost:3000/db.json')
    //   .then((resp) => resp.json())
    //   .then((resp) => setPizzas(resp.pizzas));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;
