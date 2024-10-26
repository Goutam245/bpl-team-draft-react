import PropTypes from 'prop-types';
const Players = ({ players, handleChoosePlayer}) => {
    const { country, handedness, image, name, player_role, price, rating } = players;
    return (
        <div>
            <div className='border p-4 rounded-xl flex flex-col gap-2'>
                <img className='w-full h-96 object-cover rounded-xl' src={image} alt="" />
                <div className='flex items-center gap-2'>
                    <i className="fa-solid fa-user text-lg"></i>
                    <h1 className='text-lg font-semibold'>{name}</h1>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <i className="fa-regular fa-flag text-xl"></i>
                        <span>{country}</span>
                    </div>
                    <p className='border-2 p-1 rounded-md'>{player_role}</p>
                </div>
                <div className='border-b-2 my-2'></div>
                <div className='flex items-center justify-between'>
                    <h5 className='font-bold'>Rating</h5>
                    <p className='font-bold'>{rating}</p>
                </div>
                <div className='flex items-center justify-between'>
                    <h6>Handness</h6>
                    <p>{handedness}</p>
                </div>
                <div className='flex items-center justify-between'>
                    <p className='font-bold'>Price: {price}</p>
                    <button onClick={()=>handleChoosePlayer(players)} className='btn hover:bg-warning border border-slate-300'>Choose Player</button>
                </div>
            </div>
        </div>
    );
};
Players.propTypes = {
    players: PropTypes.object.isRequired,
    handleChoosePlayer: PropTypes.func.isRequired
}
export default Players;