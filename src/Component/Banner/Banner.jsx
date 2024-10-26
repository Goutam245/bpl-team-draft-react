import PropTypes from 'prop-types';
import criket from '../../assets/image/banner-main.png'
const Banner = ({handelAddCoin}) => {
    return (
        <div className="lg:max-w-7xl mx-auto px-4 pt-36 pb-10">
            <div className="bg-hero-pattern bg-no-repeat bg-cover rounded-3xl flex flex-col justify-between items-center gap-4 py-14">
                <img src={criket} alt="Criket.png" />
                <h1 className='text-white font-bold text-5xl text-center'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className='text-white'>Beyond Boundaries Beyond Limits</p>
                <button onClick={()=>handelAddCoin(10000000)} className='btn btn-outline btn-warning'>Claim Free Credit</button>
            </div>
        </div>
    );
};
Banner.propTypes = {
    handelAddCoin: PropTypes.func.isRequired
}
export default Banner;