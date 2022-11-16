import "./Type.css";
const Type = ({ types }) => {
  return (
    <div className="grid grid-cols-5 gap-3 content-center">
      {types.map((type) => (
        <div key={type.name} className={`rounded-lg text-white text-center ${type.name} ${type.status} `}>{type.name}</div>
      ))}
    </div>
  );
};
export default Type;
