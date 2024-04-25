import Categories from "../components/Categories";
import Pizza from "../components/pizzaBlock/Pizza";
import Skeleton from "../components/pizzaBlock/Skeleton";
import Sort from "../components/Sort";
import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "../redux/slices/filterSlice";
import { fetchPizzas, pizzaSelector } from "../redux/slices/pizzaSlice";
function Home() {
  const { items, status } = useSelector(pizzaSelector);
  const categoryId = useSelector((state) => state.filters.categoryId);
  const sortType = useSelector((state) => state.filters.sortType.sortProperty);

  const dispatch = useDispatch();
  const onClickCat = (idx) => {
    dispatch(setCategoryId(idx));
  };

  const fetch = () => {
    dispatch(fetchPizzas({ sortType, categoryId }));
  };

  React.useEffect(() => {
    fetch();
  }, [categoryId, sortType]);
  return (
    <>
      <div class="content__top">
        <Categories value={categoryId} onClickCategory={onClickCat} />
        <Sort />
      </div>
      <div class="content__items">
        {status === "loading"
          ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
          : items.map((obj) => <Pizza key={obj.id} {...obj} />)}
      </div>
    </>
  );
}
export default Home;
