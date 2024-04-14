import Product_sample from "./Product_sample"
const Products = () => {
  return (
     <>
        <div className="product_list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Product_sample/>
        <Product_sample/>
        <Product_sample/>
        <Product_sample/>
        <Product_sample/>
        <Product_sample/>
        <Product_sample/>
        </div>
     </>
  )
}

export default Products
