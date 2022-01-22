import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getImagesThunk, setProductLimit } from "../../Redux/Actions/product.action";
import { getCategoriesThunk, setActiveCategory } from "../../Redux/Actions/productCategories.action";
import categoresStyle from './Categories.module.scss'

function Categories() {

  const categories = useSelector(state => state.productCategoriesReducer.categories)
  const activeCategory = useSelector(state => state.productCategoriesReducer.activeCategory)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getCategoriesThunk())
  }, [dispatch])

  const getCategoriesProduct = (category_id) => {
    dispatch(getImagesThunk(category_id))
  }

  const setActiveCategoryFnc = (category_id) => {
    dispatch(setProductLimit(10))
    dispatch(setActiveCategory(category_id))
  }

  return (
    <div className={categoresStyle.container} >
      <div className={categoresStyle.categories} >
        {categories.map(item => {
          return <div
            key={item.id}
            className={ activeCategory === item.id && categoresStyle.activeCategory }
            onClick={() => {
              setActiveCategoryFnc(item.id)
              getCategoriesProduct(item.id)
            }}
          >
            {item.name}
          </div>
        })}
      </div>
    </div>
  );
}

export default Categories;
