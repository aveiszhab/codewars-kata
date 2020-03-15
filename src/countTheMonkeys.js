const countTheMonkeys = (n) => {
    
    const array = [];
    for (i = 1; i < n + 1; i++) {
      array.push(i);
    };
    return array;

};

module.exports = countTheMonkeys;