import "./End.css";
const End = (props) => {

  const handleOnClick = () =>  {
    window.location.reload(false)
  }
  var isVictory = null;
  if (props.result.status == "victory") {
    isVictory = true;
  } else {
    isVictory = false;
  }
  return (
    <div className="text-center">
      {isVictory ? <h1 className = "text-6xl font-normal leading-normal mt-0 mb-2 text-white">You won!</h1> : <h1 className = "text-6xl font-normal leading-normal mt-0 mb-2 text-white">You lost!</h1>}

      <img src={props.poke.img} />
      <h2 className = "text-4xl font-normal leading-normal mt-0 mb-2 text-white" > {props.poke.name} </h2>
      <button onClick = {handleOnClick} className = "bg-red-500 hover:bg-red-700  py-2 px-4 text-white">Play again</button>
    </div>
  );
};
export default End;
