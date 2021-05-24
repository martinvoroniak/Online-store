import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Categories from '../components/Categories';
import SortPopup from '../components/SortPopup';

import ProductBlock from '../components/ProductBlock/ProductBlock';
import LoadingBlock from '../components/ProductBlock/LoadingBlock';

import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchProducts } from '../redux/actions/products';

const categoryNames = ['продовльчі', 'побутові', 'різні', 'інші'];
const sortIems = [
    { name: 'популярності', type: 'popular', order: 'desc' },
    { name: 'ціні', type: 'price', order: 'desc' },
    { name: 'алфавіту', type: 'name', order: 'asc' },
];

function Home() {
    const dispatch = useDispatch();
    const items = useSelector(({ products }) => products.items);
    const cartItems = useSelector(({ cart }) => cart.items);
    const isLoaded = useSelector(({ products }) => products.isLoaded);
    const { category, sortBy } = useSelector(({ filters }) => filters);

    React.useEffect(() => {
        dispatch(fetchProducts(sortBy, category));
    }, [category, sortBy]);

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index));
    }, []);

    const onSelectSortType = React.useCallback((type) => {
        dispatch(setSortBy(type));
    }, []);

    return (
        <div>
            <div>
                <Categories
                    activeCategory={category}
                    onClickCategory={onSelectCategory}
                    items={categoryNames}
                />
                <SortPopup
                    activeSortType={sortBy.type}
                    items={sortIems}
                    onClickSortType={onSelectSortType}
                />
            </div>
            <h2>Всі продукти</h2>
            <div>
                {isLoaded
                    ? items.map((obj) => (
                          <ProductBlock
                              key={obj.id}
                              addedCount={
                                  cartItems[obj.id] &&
                                  cartItems[obj.id].items.length
                              }
                              {...obj}
                          />
                      ))
                    : Array(12)
                          .fill(0)
                          .map((_, index) => <LoadingBlock key={index} />)}
            </div>
        </div>
    );
}

export default Home;
