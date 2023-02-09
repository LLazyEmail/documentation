## Errors and Validators


https://dev.to/darkmavis1980/a-practical-example-of-how-to-use-custom-errors-in-javascript-1175
https://javascript.info/custom-errors



https://www.npmjs.com/package/ajv


https://joi.dev/api/?v=17.7.0

We using ow as vslidator right now




Arguments assertion 

https://www.npmjs.com/package/check-types#why-would-i-want-that


**create and manage errors milestone in github**


```
export default function (src) {
  if (src == '') {
    createError('src');
  }
  return mainBlock(src);
}

```
Данный подход используется почти во всех компонентах. Это является на данном этапе я бы сказал "аля шаблон",
возможно придет время и мы заменим(поиск/вывод ошибок) на более универсальное решение во всех компонентах. А на сейчас может  все-таки пусть останется, по крайнем мере все пока по одной логике, пусть и не совсем хорошей.
