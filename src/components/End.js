import "./End.css";
const End = (props) => {
  var isVictory = null;
  if (props.result.status == "victory") {
    isVictory = true;
  } else {
    isVictory = false;
  }
  return (
    <div>
      {isVictory ? <h1>You won!</h1> : <h1>You lost!</h1>}

      <img src={props.poke.img} />
      <h2> {props.poke.name} </h2>
    </div>
  );
};
export default End;
