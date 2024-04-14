 import Products from "../component/Products"

const Home = () => {
  return (
    <>
        <div className="container flex relative">
            <div className="containerLeft h-96 w-3/4 ">
                <div className="pizzLine h-30 w-80 pt-100 absolute top-1/2 transform translate-x-1/2 translate-x-1/2">
                    <h2><i><b>pizza...</b></i></h2>
                Indulge in a slice of heaven with our irresistible pizzas, crafted with love and topped with the finest ingredients.
                </div>
            </div>
            <div className="containerRight h-96 w-2/4 mt-20">
                <img src="../images/pizza.png" className="w-full h-full object-contain"></img>
            </div>
        </div>
        <br/>
        <hr color="blasck" width="100%"></hr>
        <br/>
        <Products/>
    </>
  )
}

export default Home
