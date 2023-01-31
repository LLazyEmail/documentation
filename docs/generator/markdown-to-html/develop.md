### callbacks-factory/adapter.js

// import { map } from 'lodash';

// const callbacksAdapter = (
//   callbacks,
//   // Replacer
// ) => {
//   // eslint-disable-next-line no-unused-vars
//   const newObject = map(callbacks, {
//     // callback --> we need to find same part at Replacer
//     // return ... https://www.velotio.com/engineering-blog/design-patterns-in-es6
//   });
// };

// export default callbacksAdapter;


### callbacks-factory/factory.js


// function callbacksFactory(name = "Hello", regEx = "World", replace = "", isError = false) {
//   return {
//     log: () => `${regEx}, ${name}`,

//     get: () => {
//       name:name,
//       regEx: regEx,
//       replace: replace(),
//       isError: false
//     },

//     combine: () => {return {name:name, regEx:regEx, replace:replace()}},

//     // I want to have a better way to report errors, so each callback can report an issue, so we can track it better
//     isError: () => 'errror is here'
//   }
// }

// function callbacksArray(names, replaceArr){
//   const data = map(replaceArr, {

//       name, regEx, replace

//       let element = callcabacksFactory(name, regEx, replace);
//       element.log();

//   })

// }
