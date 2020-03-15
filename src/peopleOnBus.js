const peopleOnBus = (array) => {
 return array.map(a => a[1] * -1 + a[0]).reduce((total, currentValue) => total + currentValue); 
};

module.exports = peopleOnBus;