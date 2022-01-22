import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getImagesThunk, setProductLimit } from "../../Redux/Actions/product.action";
import productStyle from './Product.module.scss'

function Product() {

  const product = useSelector(state => state.productReducer.products)
  const productLimit = useSelector(state => state.productReducer.productLimit)
  const activeCategory = useSelector(state => state.productCategoriesReducer.activeCategory)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getImagesThunk())
  }, [dispatch])


  const getMoreProduct = () => {
    dispatch(setProductLimit(productLimit + 10))
    dispatch(getImagesThunk(activeCategory, productLimit + 10))
  }

  return (
    <div className={productStyle.container} >
      <div className={productStyle.products} >
        {product.map(item => {
          return <div key={item.id} >
            <img src={item.url} height="200" width="200" alt="" />
          </div>
        })}
      </div>
      <div className={productStyle.moreBTN} >
        <span onClick={() => {
          setProductLimit(productLimit + 10)
          getMoreProduct()
        }} >
          More
        </span>
      </div>
    </div>
  );
}

export default Product;
