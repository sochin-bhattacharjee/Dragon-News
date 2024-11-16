import moment from 'moment';
import logo from '../assets/logo.png';
import { useEffect, useState } from 'react';

const Header = () => {
    const [currentTime, setCurrentTime] = useState(moment().format('MMMM Do YYYY, h:mm:ss a'));

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(moment().format('MMMM Do YYYY, h:mm:ss a'));
        }, 1000); 

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='flex flex-col justify-center items-center gap-2 py-3'>
            <div className='logo'><img src={logo} alt="" /> </div>
            <p className='text-lg text-gray-500'>Journalism Without Fear or Favour</p>
            <p>{currentTime}</p>
        </div>
    );
};

export default Header;