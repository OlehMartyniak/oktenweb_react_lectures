import {useNavigate} from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();

    return (
        <div className='header'>
            <div className='navButtons'>
            <button onClick={()=>navigate('/login')}>Login</button>
            <button onClick={()=>navigate('/register')}>Register</button>
            </div> 
        </div>
    );
};

export {Header};