import { useState } from "react";

import Player from "./Player";
import Button from "./Button";
import Menu from "./Menu";
import SettingsModal from "./SettingsModal";
import { RefreshSVG, SettingsSVG, PeopleSVG } from "./Svg";
import PlayerMenu from "./PlayerMenu";

const DEFAULT_PLAYERS = 4;
const DEFAULT_LIFE = 40;
const PlayerLayouts = Object.freeze(["one", "two", "three", "four"]);

export default function App() {
  const [playerLife, setPlayerLife] = useState(DEFAULT_LIFE);
  const [numPlayers, setNumPlayers] = useState(DEFAULT_PLAYERS);
  const [playersLife, setPlayersLife] = useState(
    Array.from({ length: numPlayers }, () => playerLife)
  );
  const [playersMenuIsOpen, setPlayersMenuIsOpen] = useState(false);

  // useEffect initalize numPlayers and playersLife from localStorage API

  function handlePlayerLifeSubtract(playerNumber) {
    setPlayersLife((playersLife) =>
      playersLife.map((life, i) => {
        return i === playerNumber - 1 ? life - 1 : life;
      })
    );
  }

  function handlePlayerLifeAdd(playerNumber) {
    setPlayersLife((playersLife) =>
      playersLife.map((life, i) => {
        return i === playerNumber - 1 ? life + 1 : life;
      })
    );
  }

  function handleNumPlayers(numPlayers) {
    setNumPlayers(numPlayers);
    handlePlayerMenu();
  }

  function handlePlayerLifeReset() {
    setPlayersLife((playersLife) => playersLife.map((_) => playerLife));
  }

  function handlePlayerMenu() {
    setPlayersMenuIsOpen((playersMenuIsOpen) => !playersMenuIsOpen);
  }

  return (
    <main className={`app ${PlayerLayouts[numPlayers - 1]}`}>
      {Array.from({ length: numPlayers }).map((_, i) => (
        <Player
          key={`player${i + 1}`}
          playerNumber={i + 1}
          playerLife={playersLife[i]}
          onAddLife={handlePlayerLifeAdd}
          onSubtractLife={handlePlayerLifeSubtract}
        />
      ))}
      {playersMenuIsOpen ? (
        <PlayerMenu
          onPlayerSelect={handleNumPlayers}
          onPlayerMenuClose={handlePlayerMenu}
        />
      ) : (
        <Menu>
          <Button className="refresh" onClick={handlePlayerLifeReset}>
            <RefreshSVG />
          </Button>
          {/* <Button className="settings">
          <SettingsSVG />
        </Button> */}
          <Button className="people" onClick={handlePlayerMenu}>
            <PeopleSVG />
          </Button>
        </Menu>
      )}
    </main>
  );
}
