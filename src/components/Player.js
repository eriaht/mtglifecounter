import Button from "./Button";
import { PlusSVG, MinusSVG } from "./Svg";

export default function Player({
  playerNumber,
  playerLife,
  onAddLife,
  onSubtractLife,
}) {
  return (
    <div className={`player player${playerNumber}`}>
      <Button className="subtract" onClick={() => onSubtractLife(playerNumber)}>
        <MinusSVG />
      </Button>
      <p>{playerLife}</p>
      <Button className="add" onClick={() => onAddLife(playerNumber)}>
        <PlusSVG />
      </Button>
    </div>
  );
}
