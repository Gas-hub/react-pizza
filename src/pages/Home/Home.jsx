import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Categories from '../../components/Categories/Categories';
import SortPopup from '../../components/SortPopup/SortPopup';
import PizaaBlock from '../../components/PizzaBlock/PizaaBlock';
import { setCategoryBy } from '../../redux/actions/filters';

const arrCotegory = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'alphabet' },
];

function Home() {
  const dispatch = useDispatch();

  const items = useSelector(({ pizzas }) => {
    return pizzas.items;
  });

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategoryBy(index));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={onSelectCategory} items={arrCotegory} />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map((obj) => (
          <PizaaBlock key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
}

export default Home;
