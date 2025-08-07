import { Link } from 'react-router-dom';

function Navigation(){
    return (
        <nav> 
            <Link id="expenses" to="/"> Home </Link> 
        </nav>
    );
}

export default Navigation;
