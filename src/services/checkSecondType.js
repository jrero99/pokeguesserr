const checkSecondType = (types) => {
    var type2 = null;
    if (types.length == 2) {
      type2 = types[1].type.name;
    }
    return type2;
};
export default checkSecondType