 import {Link} from 'react-router-dom';

const Navigation = () => {
  return (
    <>
        <div className='navbar flex justify-between bg-red-200'>
            <img className='logo h-8' src='../img/logo.png'></img>

            <ul className='navtool w-40 flex justify-around items-center'>
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/cart">
                <div className='cartbg bg-orange-500 px-2 py-1 rounded-lg'>
                <span>10</span>
                <img className='cart h-4 inline-block' src='../img/cart.png'></img>
                </div>
            </Link>
            </ul>

        </div>
    </>
  )
}

export default Navigation
