const checkGeneration = (id) => {
    var gen = 0;
    if (id <= 151) {
      gen = 1;
    } else if (id <= 251) {
      gen = 2;
    } else if (id <= 386) {
      gen = 3;
    } else if (id <= 493) {
      gen = 4;
    } else if (id <= 649) {
      gen = 5;
    } else if (id <= 721) {
      gen = 6;
    } else if (id <= 809) {
      gen = 7;
    } else if (id > 809) {
      gen = 8;
    }
    return gen;
  };

export default checkGeneration