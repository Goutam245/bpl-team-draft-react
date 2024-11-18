import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import Players from "../Players/Players";
import Selected from '../Selected/Selected';

const AllPlayers = ({handleAvailableBtn, available, handleChoosePlayer, selectedPlayer, handleRemoveBtn}) => {
    const [allPlayers, setAllPlayers] = useState([]);

    useEffect(()=>{
        fetch('players.json')
        .then(res => res.json())
        .then(data => setAllPlayers(data));
    },[])
    return (
        <div>
            <div className="flex justify-between">
                {
                    available ?  <h2 className="text-3xl font-bold">Available Players</h2> :<h2 className="text-3xl font-bold">Selected Players (<span>{selectedPlayer.length}/6</span>)</h2>
                }
                <div className="flex flex-col sm:flex-row gap-2 z-10">
                    <button onClick={()=>handleAvailableBtn('available')} className={`${available ? "btn btn-error" : "btn"}`}>Available</button>
                    <button onClick={()=>handleAvailableBtn('selected')} className={`${available ? "btn" : "btn btn-error"} w-32 md:w-auto`}>Selected<span>({selectedPlayer.length})</span></button>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 pb-40">
                {
                    available ? allPlayers.map((players, idx) => <Players
                    key={idx}
                    players={players}
                    handleChoosePlayer={handleChoosePlayer}
                    ></Players>) : <Selected 
                    selectedPlayer={selectedPlayer}
                    handleRemoveBtn={handleRemoveBtn}
                    handleAvailableBtn={handleAvailableBtn}
                    ></Selected>
                }
            </div>
        </div>
    );
};
AllPlayers.propTypes = {
    handleAvailableBtn: PropTypes.func.isRequired,
    available: PropTypes.bool.isRequired,
    handleChoosePlayer: PropTypes.func.isRequired,
    selectedPlayer: PropTypes.array.isRequired,
    handleRemoveBtn: PropTypes.func.isRequired
}
export default AllPlayers;