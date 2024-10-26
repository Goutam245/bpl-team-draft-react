import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react"
import AllPlayers from "./Component/AllPlayers/AllPlayers"
import Banner from "./Component/Banner/Banner"
import Fotter from "./Component/Fotter/Fotter"
import Header from "./Component/Header/Header"
function App() {

  const [count, setCount] = useState(0);
  const [available, setAvailable] = useState(true);
  const [selectedPlayer, setSelectedPlayer] = useState([]);

  const handelAddCoin = (coin) => {
    setCount(coin + count);
    toast.success('Credit Added to your Account.', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  const handleAvailableBtn = (check) => {
    if (check === 'available') {
      setAvailable(true);
    }
    else {
      setAvailable(false);
    }
  }

  const handleChoosePlayer = (players) => {
    const isExist = selectedPlayer.find(select => select.id === players.id);
    if (isExist) {
      toast.error('Player have Already selected', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    else {
      if (count >= players.price) {
        if (selectedPlayer.length <= 5) {
          setCount(count - players.price)
          setSelectedPlayer([...selectedPlayer, players]);
          toast.success(`Congrates!! ${players.name} is now your squard.`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
        else {
          toast.error('Sorry!! You can not select the player. Because of your limit has crossed.', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      }
      else {
        return (toast.error('Not enough to buy this player claim some credit', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }))
      }
    }
  }

  const handleRemoveBtn = (id) => {
    const remainingPlayers = selectedPlayer.filter(player => player.id !== id);
    setSelectedPlayer(remainingPlayers);
    toast.warn('Player Removed', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  return (
    <>
      <Header count={count}></Header>
      <Banner handelAddCoin={handelAddCoin}></Banner>
      <ToastContainer />
      <div className="lg:max-w-7xl mx-auto p-5">
        <AllPlayers
          handleAvailableBtn={handleAvailableBtn}
          available={available}
          handleChoosePlayer={handleChoosePlayer}
          selectedPlayer={selectedPlayer}
          handleRemoveBtn={handleRemoveBtn}
        ></AllPlayers>
      </div>
      <Fotter></Fotter>
    </>
  )
}

export default App

