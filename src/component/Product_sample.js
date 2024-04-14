
const Product_sample = () => {
  return (
     <>
        <div className="container mx-auto p-4 ">
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <div className="md:flex">
            <div className="md:flex-shrink-0">
                <img className="h-48 w-full object-cover md:w-48" src="../images/peproni.png" alt="Product Image"/>
            </div>
            <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Product Name</div>
                <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at massa in ligula aliquam condimentum.</p>
                <div className="mt-4">
                <span className="text-gray-500">Price:</span>
                <span className="font-semibold text-gray-800">$XX.XX</span>
                </div>
                <div className="mt-4">
                <button className="bg-indigo-500 text-white font-semibold py-2 px-4 rounded">Add to Cart</button>
                </div>
            </div>
            </div>
        </div>
        </div>

     </>
  )
}

export default Product_sample
