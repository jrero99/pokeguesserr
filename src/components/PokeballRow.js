import { useState } from "react";
import Pokeball from "./Pokeball";
import "./PokeballRow.css";
const PokeballRow = (props) => {
  var type2 = props.results.searchedType2 != null ? props.results.searchedType2 : 'none'
  const [showMessage, setShowMessage] = useState(false);
  const handleOnMouseEnter = () => {
    setShowMessage(true);
  };
  const handleOnMouseLeave = () => {
    setShowMessage(false);
  };
  return (
    <div className="grid grid-cols-6 gap-1 content-center">
      <Pokeball status={props.results.gen} />
      <Pokeball status={props.results.type1} />
      <Pokeball status={props.results.type2} />
      <Pokeball status={props.results.height} />
      <Pokeball status={props.results.weight} />
      <a
        className="text-center text-white underline"
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      >
        {props.results.searchedName}<span className={`tooltiptext ${showMessage ? "" : "invisible"}`}>
          <p><b>Gen: </b>{props.results.searchedGen}</p>
          <p><b>Type 1: </b>{props.results.searchedType1}</p>
          <p><b>Type 2: </b>{type2}</p>
          <p><b>Height: </b>{props.results.searchedHeight}</p>
          <p><b>Weight: </b>{props.results.searchedHeight}</p>
        </span>
        
      </a>
    </div>
  );
};
export default PokeballRow;
