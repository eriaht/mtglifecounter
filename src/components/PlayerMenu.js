import Menu from "./Menu";
import Button from "./Button";
import { PeopleSVG } from "./Svg";

export default function PlayerMenu({ onPlayerMenuClose, onPlayerSelect }) {
  return (
    <Menu className="player-menu">
      <Button className="people" onClick={onPlayerMenuClose}>
        <PeopleSVG />
      </Button>
      {Array.from({ length: 4 }).map((_, i) => (
        <Button
          className="player-selector"
          onClick={(e) => onPlayerSelect(Number(e.target.innerText))}
        >
          <p>{i + 1}</p>
        </Button>
      ))}
    </Menu>
  );
}
