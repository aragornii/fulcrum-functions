var array = ['llegada','estado'];
var icons = [];

var dict = {
    llegada: '🟩',
    uso: '🟥',
    estado: '📝',
};

//Create an array and a string in which are shown only tne icons inclued in the dictionary 'dict' based on the items in the array 'array'.
for (const [key, value] of Object.entries(dict)) {
    if (array.indexOf(key) >= 0) {
        var item = value;
    } else {
        var item = null;
    }
    icons.push(item);
}

var result = icons.filter(Boolean);

console.log(result);
console.log(result.join(' '));
//console.log(dict);