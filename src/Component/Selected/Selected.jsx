import PropTypes from 'prop-types';
const Selected = ({ selectedPlayer, handleRemoveBtn,handleAvailableBtn }) => {
    return (
        <div className='w-full grid col-span-3 space-y-2'>
            {
                selectedPlayer.map((player, idx) => (
                    <div key={idx} className='border p-2 rounded-lg flex justify-between items-center'>
                        <div className='flex items-center gap-4'>
                            <img className='w-20 h-20 rounded-full object-cover' src={player.image} alt="" />
                            <div>
                                <h5 className='font-semibold'>{player.name}</h5>
                                <p>{player.handedness}</p>
                            </div>
                        </div>
                        <div>
                            <button className='btn text-xl mr-5' onClick={()=>handleRemoveBtn(player.id)}><i className="fa-solid fa-trash text-[#4d4fcc]"></i></button>
                        </div>
                    </div>
                ))
            }
            <div>
                <button onClick={()=>handleAvailableBtn('available')} className='btn hover:btn-info'>Add More Player</button>
            </div>
        </div>
    );
};
Selected.propTypes = {
    selectedPlayer: PropTypes.array.isRequired,
    handleRemoveBtn: PropTypes.func.isRequired,
    handleAvailableBtn: PropTypes.func.isRequired
}
export default Selected;