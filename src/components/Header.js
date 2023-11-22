import './header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <Link to={'/'} className='header'>
            <h1 className='header'>Book Reviews</h1>
        </Link>
    )
}

export default Header