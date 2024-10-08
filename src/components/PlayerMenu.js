import Menu from "./Menu";
import Button from "./Button";
import { PeopleSVG } from "./Svg";

export default function PlayerMenu({ onPlayerMenuClose, onPlayerSelect }) {
  return (
    <Menu className="player-menu">
      <Button className="people" onClick={onPlayerMenuClose}>
        <PeopleSVG />
      </Button>
      <Button
        className="player-selector"
        onClick={(e) => onPlayerSelect(Number(e.target.innerText))}
      >
        <p>1</p>
      </Button>
      <Button
        className="player-selector"
        onClick={(e) => onPlayerSelect(Number(e.target.innerText))}
      >
        <p>2</p>
      </Button>
      <Button
        className="player-selector"
        onClick={(e) => onPlayerSelect(Number(e.target.innerText))}
      >
        <p>3</p>
      </Button>
      <Button
        className="player-selector"
        onClick={(e) => onPlayerSelect(Number(e.target.innerText))}
      >
        <p>4</p>
      </Button>
    </Menu>
  );
}
