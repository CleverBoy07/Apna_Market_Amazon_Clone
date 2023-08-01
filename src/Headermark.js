import React from 'react'
import Home from './Home';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
function Headermark() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div>
            <div className='Headermark'>
                <Link to="/">
                    <img className="header_logo" src="https://upload.wikimedia.org/wikipedia/commons/6/62/Amazon.com-Logo.svg" />

                </Link>

                <div className="header_delever">
                    <span className='header_optline1'>Deliver to</span>
                    <span className='header_optline2'>India</span>
                    <LocationOnIcon className="header_locat">India</LocationOnIcon>
                </div>
                <div className="header_search">
                    <input className="header_searchInput" type="text" />
                    <SearchIcon className="header_searchIcon" />
                </div>
                <div className="header_nav">
                    <div className='header_option'>
                        <span className='header_optline1'>Hello Guest</span>
                        <span className='header_optline2'>Sign In</span>
                    </div>

                    <div className='header_option'>
                        <span className='header_optline1'>Return</span>
                        <span className='header_optline2'>& Orders</span>
                    </div>
                    <div className='header_option'>
                        <span className='header_optline1'>Your</span>
                        <span className='header_optline2'>Prime</span>
                    </div>
                    <Link to="/checkout">
                        <div className="header_optbasket">
                            <ShoppingCartIcon />
                            <span className="header_optline2 header_basketCount">{basket?.length}</span>
                        </div>
                    </Link>

                </div>

            </div>
        </div>
    )
}

export default Headermark
