import PropTypes from 'prop-types';
import logo from '../../assets/image/logo.png'
import coin from '../../assets/image/coin-dollar.png'
const Header = ({ count }) => {
    return (
        <div className='bg-gray-200 shadow-md fixed w-full z-50'>
            <div className='lg:max-w-7xl mx-auto px-4 py-2 md:py-3 flex items-center justify-between'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <ul className='hidden sm:flex gap-5 md:gap-10 text-lg font-semibold'>
                    <li className="link link-hover">Home</li>
                    <li className="link link-hover">Fixture</li>
                    <li className="link link-hover">Teams</li>
                    <li className="link link-hover">Schedules</li>
                </ul>
             
                <div className='flex items-center gap-1 border border-slate-400 px-2 py-1 rounded-lg'>
                    <span className='text-lg font-bold'>{count} Coin</span>
                    <img className='w-7' src={coin} alt="" />
                </div>
            </div>
        </div>
    );
};
Header.propTypes = {
    count: PropTypes.number.isRequired
}
export default Header;