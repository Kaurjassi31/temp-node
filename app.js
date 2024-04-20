// CommonJS, every file is module (by default)
// Modules-Encapsulated Code (only share minimum)

// const names = require('./names')
// const sayHi = require('./utils')
// const data = require('./alternative-flavour')
// require('./mind-grenade')
// sayHi('susan')
// sayHi(names.jassi)
// sayHi(names.peter)


const _ =require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);