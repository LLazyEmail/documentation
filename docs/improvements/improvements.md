---
id: improvements
title: improvements
sidebar_label: improvements
---

# Table of Contents

- [Husky and eslint as actions #933](#husky-and-eslint-as-actions-933)

- [Task 1: Apply husky git hook to specific branch only #186](#task-1-apply-husky-git-hook-to-specific-branch-only-186)

- [Task 2: Import no cycle issue #1286](#task-2-import-no-cycle-issue-1286)

- [Task 3: Enable and connect react parser #1279](#task-3-enable-and-connect-react-parser-1279)

- [Task 4: Well it is not good. can be improved with lodash #1246](#task-4-well-it-is-not-good-can-be-improved-with-lodash-1246)

- [Task 5: I propose to move inner things of this method into Replace runConfigure #1166](#task-5-i-propose-to-move-inner-things-of-this-method-into-replace-runconfigure-1166)

- [Task 7: Enable const messages #1110](#task-7-enable-const-messages-1110)


- [Task 9: Add here error handlers from domain error handle #1021](#task-9-add-here-error-handlers-from-domain-error-handle-1021)

- [Husky and eslint as actions #9333](#husky-and-eslint-as-actions-9333)

- [Task 10: Logger](#task-10-logger)

- [Task 11](#task-11)


- [Task 14](#task-14)

- [Task 15](#task-15)

- [Task 16: If I comment any of those cases i wouldnt get any warning or something in our #1433](#task-16-if-i-comment-any-of-those-cases-i-wouldnt-get-any-warning-or-something-in-our-1433)

- [Task 17: DDD #1003](#task-17-ddd-1003)

- [Task 18: Replace md](#task-18-replace-md)

- [Task 19: Index](#task-19-index)

- [Task 20: Simple tasks for main branch #403](#task-20-simple-tasks-for-main-branch-403)

- [Task 21: Подумать о простых компонентах, которые делаются в typography и их связи с markdown-regex #67](#task-21-подумать-о-простых-компонентах-которые-делаются-в-typography-и-их-связи-с-markdown-regex-67)


# Husky and eslint as actions
Task [#933](https://github.com/LLazyEmail/markdown-to-email/issues/933)

## Task 1: Apply husky git hook to specific branch only #186

| Name   | About  | Title  | Labels  | Assignees  |
| :-----: | :-----: | :-----: | :-----: | :-----: |
| Apply husky git hook to specific branch only | husky git hook | "" | "" | "" |

## Reason or Problem



## Proposal or Solution

Links: 

- https://github.com/typicode/husky/issues/186

- https://stackoverflow.com/questions/53895745/use-git-hooks-for-certain-branches-with-husky-and-git-branch-is

- https://blog.theodo.com/2018/07/protect-git-branches-husky/

- https://blog.logrocket.com/build-robust-react-app-husky-pre-commit-hooks-github-actions/

- https://npm.io/package/validate-branch-name

- https://www.freecodecamp.org/news/how-to-add-commit-hooks-to-git-with-husky-to-automate-code-tasks/

### Design

UMLs or describe entities involved, their behaviors and relationships.

### Sample usage

Clear set of instructions

## Alternatives solutions

A clear and concise description of any alternative solutions or features you've considered.

## Stakeholders and Dependent software components

## Testing plan

## Acceptance scenarios



## Husky and eslint as actions #9333

typicode/husky#186

https://stackoverflow.com/questions/53895745/use-git-hooks-for-certain-branches-with-husky-and-git-branch-is
https://blog.theodo.com/2018/07/protect-git-branches-husky/

https://blog.logrocket.com/build-robust-react-app-husky-pre-commit-hooks-github-actions/

https://npm.io/package/validate-branch-name

https://www.freecodecamp.org/news/how-to-add-commit-hooks-to-git-with-husky-to-automate-code-tasks/

---

## Task 2: Import no cycle issue #1286

| Name   | About  | Title  | Labels  | Assignees  |
| :-----: | :-----: | :-----: | :-----: | :-----: |
| Import no cycle issue | Import no cycle issue | "" | "" | "" |

## Reason or Problem

![import/no-cycle issue #1286](https://user-images.githubusercontent.com/1469198/178752138-476b7e4d-f251-4887-94ce-b903f0621b5a.png "import/no-cycle issue #1286")

я пока просто уберу эту ошибку, но нужно будет подумать. вохможно моя структура хрень

## Proposal or Solution

A clear and concise description of what you want to happen.

### Design

UMLs or describe entities involved, their behaviors and relationships.

### Sample usage

Clear set of instructions

## Alternatives solutions

A clear and concise description of any alternative solutions or features you've considered.

## Stakeholders and Dependent software components

## Testing plan



----

## Task 3: Enable and connect react parser #1279

| Name   | About  | Title  | Labels  | Assignees  |
| :-----: | :-----: | :-----: | :-----: | :-----: |
| Enable and connect react parser | Enable and connect react parser | "" | "" | "" |

## Reason or Problem

![5](https://user-images.githubusercontent.com/1469198/179402426-6952843f-ae94-4f1a-87c0-f8563c448eab.png "5")

## Proposal or Solution

A clear and concise description of what you want to happen.

### Design

UMLs or describe entities involved, their behaviors and relationships.

### Sample usage

Clear set of instructions

## Alternatives solutions

A clear and concise description of any alternative solutions or features you've considered.

## Stakeholders and Dependent software components



----

## Task 4: Well it is not good can be improved with lodash #1246

| Name   | About  | Title  | Labels  | Assignees  |
| :-----: | :-----: | :-----: | :-----: | :-----: |
| Well it is not good can be improved with lodash | Well it is not good can be improved with lodash | "" | "" | "" |

## Reason or Problem

markdown-to-email/src/callbacks/html/methods/br.js

Line 11 in 
```
 // TODO well, it's not good. can be improved with lodash 
 
 
import { newLine } from '../helpers';

import { commonReplace } from '../../../domain/replace-wrapper3.0';

// TODO figure out `text` argument
export function _br(text, newLines) {
  // TODO move out this regex into constants file.
  const regex = new RegExp(newLine, 'g');
  const arrNewLines = newLines.match(regex);

  // TODO well, it's not good. can be improved with lodash
  const result = arrNewLines.reduce(
    (acc, current, index) => (index > 0 ? `${acc}<br/>${current}` : current),
    '',
  );
  
  // console.log(result);
  return result;

  // TODO upgrade this method so it fix with out main logic
  
  
  // NOT FINISHED

  // debug: true
  // const params = {};

  // try {
  //   const replaced = commonReplace(config);

  //   return newLine + replaced;
  // } catch (error) {
  //   catch_error_trace_output(error);
  // }
}

export default _br;
```

## Proposal or Solution

A clear and concise description of what you want to happen.

### Design

UMLs or describe entities involved, their behaviors and relationships.

### Sample usage

Clear set of instructions

## Alternatives solutions

A clear and concise description of any alternative solutions or features you've considered.

## Stakeholders and Dependent software components

## Testing plan



----

## Task 5: I propose to move inner things of this method into Replace runConfigure #1166

| Name   | About  | Title  | Labels  | Assignees  |
| :-----: | :-----: | :-----: | :-----: | :-----: |
| I propose to move inner things of this method into Replace runConfigure | I propose to move inner things of this method into Replace runConfigure | "" | "" | "" |

## Reason or Problem

```
Replacer.replaceMDBindedPreviewText = replaceMarkdownPreviewText.bind(state);

markdown-to-email/src/domain/replacer-class/configuration-plain.js

Line 13 

 // TODO I propose to move inner things of this method into Replace -> runConfigure() 
 

import {
    replaceMarkdown,
    // replaceMarkdownPreviewText,
  } from '../replace-markdown/replace-md';
  
  
   
  import Replacer from '../../parserMDHtml/replace';
  
  function configureReplacer(state) {


    // TODO I propose to move inner things of this method into Replace -> runConfigure()


    // CAN WE MOVE OUT CALLBACKS INTO REPLACER?????
    Replacer.replaceMDBinded = replaceMarkdown.bind(state);
  
    // I think this version isnt working well
    // Replacer.replaceMDBindedPreviewText = replaceMarkdownPreviewText.bind(state);
  
    // TODO crashed when here in FULL mode, needs to be fixed
    Replacer.previewText();
    // Replacer.replaceMDBindedPreviewText();
    // Replacer.comments();
    // ---
    Replacer.typography();
    Replacer.template();
  
    Replacer.miscellaneous();

  }

  export default configureReplacer;
```

## Proposal or Solution

A clear and concise description of what you want to happen.

### Design

UMLs or describe entities involved, their behaviors and relationships.

### Sample usage

Clear set of instructions

## Alternatives solutions

A clear and concise description of any alternative solutions or features you've considered.

## Stakeholders and Dependent software components

## Testing plan





----

## Task 7: Enable const messages #1110

| Name   | About  | Title  | Labels  | Assignees  |
| :-----: | :-----: | :-----: | :-----: | :-----: |
| Enable const messages | Enable const messages | "" | "" | "" |

## Reason or Problem

```
import { WARNING_IMAGE_VERSION, ERROR_SOURCE_DONT_HAVE, FULL_TEMPLATE_ERROR, HTML_EMAIL_SUCCESS, HTML_EMAIL_ERROR } from './constants';

markdown-to-email/src/helper/command-line-methods.js

Line 9 in a052695

 // TODO enable const messages
 ```
 
```
/* eslint-disable no-use-before-define */
import chalk from 'chalk';
import { forEach } from 'lodash';

// import { readSourceFile } from './utils';

// TODO should we remake whole state as a class with "frozen" methods?

// TODO enable const messages
// import { WARNING_IMAGE_VERSION, ERROR_SOURCE_DONT_HAVE, FULL_TEMPLATE_ERROR, HTML_EMAIL_SUCCESS, HTML_EMAIL_ERROR } from './constants';

function checkWarnings(warnings) {
  forEach(warnings, (index, element) => {
    if (index) {
```

## Proposal or Solution

A clear and concise description of what you want to happen.

### Design

UMLs or describe entities involved, their behaviors and relationships.

### Sample usage

Clear set of instructions

## Alternatives solutions

A clear and concise description of any alternative solutions or features you've considered.

## Stakeholders and Dependent software components

## Testing plan

## Acceptance scenarios



----

## Task 9: Add here error handlers from domain error handle #1021

| Name   | About  | Title  | Labels  | Assignees  |
| :-----: | :-----: | :-----: | :-----: | :-----: |
| Add here error handlers from domain error handle | Add here error handlers from domain error handle | "" | "" | "" |

## Reason or Problem

removing them from this file

markdown-to-email/src/domain/replace-markdown/pre-replace-objects.js

Line 80 in a7f26e5

 // TODO add here error handlers from domain/error-handle. 
 
```
import _ from 'lodash';
import { _previewText } from '../../callbacks/callbacksHtml/methods/simple';
import {
  _strong,
  
  _link,

  _br,
  _separator,
} from '../../callbacks/callbacksHtml/index';

import {
  REGEXP_HEADER,

  REGEXP_PARAGRAPH,
  REGEXP_SEPARATOR,
} from '../../constants/index';

// import misc from '../templates/OuterTemplate/layouts/misc';



import body from '../../templates/PlainJSOuterTemplate/layouts/body';

const { sponsorLiteral, previewTextLiteral } = body;



// import {
  // sponsor as sponsorLiteral 
  // sponsorComponent
  
  
// TODO add here error handlers from domain/error-handle.
// removing them from this file

import {
  headingLiteral,
  separatorLiteral 
} from '../plainjs-template/typography/index';

  
// console.log(paragraphLiteral);



  //strongLiteral,
const strong = objectBuilder(REGEXP_STRONG, _strong, strongLiteral);
// console.log(strong);


// as linkLiteral,  
const link = objectBuilder(REGEXP_LINK, _link, linkLiteral)

export default { 
  strong,   
  link, 

  memes ,
  separator, 
} 
```

## Proposal or Solution

A clear and concise description of what you want to happen.

### Design

UMLs or describe entities involved, their behaviors and relationships.

### Sample usage

Clear set of instructions

## Alternatives solutions

A clear and concise description of any alternative solutions or features you've considered.

## Stakeholders and Dependent software components

## Testing plan

## Acceptance scenarios



----

## Task 10: Logger

| Name   | About  | Title  | Labels  | Assignees  |
| :-----: | :-----: | :-----: | :-----: | :-----: |
| Logger | Logger | "" | "" | "" |

## Reason or Problem

- [Designing Error Messages and a Logging Strategy in Node.js](https://blog.appsignal.com/2021/11/03/designing-error-messages-and-a-logging-strategy-in-nodejs.html)
- [Npmlog](https://www.npmjs.com/package/npmlog)
- [How to use levels function in Logger](https://www.tabnine.com/code/javascript/functions/npmlog/Logger/levels)
- [Comparing Node.js logging tools](https://blog.logrocket.com/comparing-node-js-logging-tools/)
- [How to handle log events with the npmlog library?](https://stackoverflow.com/questions/72506435/how-to-handle-log-events-with-the-npmlog-library)

## Proposal or Solution

A clear and concise description of what you want to happen.

### Design

UMLs or describe entities involved, their behaviors and relationships.

### Sample usage

Clear set of instructions

## Alternatives solutions

A clear and concise description of any alternative solutions or features you've considered.

## Stakeholders and Dependent software components

## Testing plan

## Acceptance scenarios


----

## Task 11

| Name   | About  | Title  | Labels  | Assignees  |
| :-----: | :-----: | :-----: | :-----: | :-----: |
| - | - | "" | "" | "" |

## Reason or Problem

почему работа с подмодулями мне нравится. Потому что я легко могу раскидать модули на разные репозитории, настроить простые билды и легко дебажить и фиксить код.
делать коммиты и небоятся что все зафейлится.

нужно просто все настроить.

## Proposal or Solution

A clear and concise description of what you want to happen.

### Design

UMLs or describe entities involved, their behaviors and relationships.

### Sample usage

Clear set of instructions



----


## Task 14

| Name   | About  | Title  | Labels  | Assignees  |
| :-----: | :-----: | :-----: | :-----: | :-----: |
| - | - | "" | "" | "" |

## Reason or Problem

Адаптер для подключения наших тем.
Например в основном генераторе нам не нужно устанавливать тысячу тем. Скорее это долно работать в обратном направлении.
Есть generator, есть тема, есть темплейт проекта который ты установил и там юзаешь.

https://github.com/LLazyEmail/documentation/blob/main/docs/generator/test/improvements-entities.md


## Proposal or Solution

A clear and concise description of what you want to happen.

### Design

UMLs or describe entities involved, their behaviors and relationships.



---

## Task 15

| Name   | About  | Title  | Labels  | Assignees  |
| :-----: | :-----: | :-----: | :-----: | :-----: |
| - | - | "" | "" | "" |

## Reason or Problem

Тесты приводить в порядок. 
- Есть централизация
- есть улучшение в процессе работы
- берем и дебажим

## Proposal or Solution

A clear and concise description of what you want to happen.

### Design

UMLs or describe entities involved, their behaviors and relationships.

### Sample usage

Clear set of instructions

## Alternatives solutions

A clear and concise description of any alternative solutions or features you've considered.

## Stakeholders and Dependent software components

## Testing plan



---

create a separated method that will generate a tree of components for content only case...

### create a custom tag that will skip our generator
sometimes everything is not ideal and i want to put something, like comment, that must be skipped and not wrapped with some blocks.

###

наверное нам нужно попробывать сделать\закончить отдельный метод, который позволит внутри текущего модуля генерировать DOM из react components. Основная идея простая - мне ненравится то что мы храним куски нашего email template в js файлах. это глупо. и в 2021 году есть гораздо более удобные и специфические задачи для этого. мы в ноябре начали подготовку к версии 2.0 генератора - которая темлейт будет хранить в react components и позволит нам играться
с другими вариантами layouts - при этом ничего не ломая.

Чуть позже нам нужно будет перегнать весь процесс на react - если захотите, можете посмотреть код внутри react ветки

чтобы не начинать переходить на версию 2.0 генератора и проверить - можем ли мы сделать дерево из react тегов - я перенес их в отдельную папку, с похожей структурой.

модуль, в котором хранится старая версия react components находится тут.
https://github.com/atherdon/markdown-to-email/blob/master/package/generator-react-components/package.json
нам этой версии сейчас будет достаточно, чтобы понять что эта идея работает, и что можно легко заменить на react components

probably it will be a great idea for doing it.


### validator of tags

https://github.com/pluralsight/htmlTagValidator

### add parameter ref to url of links

?ref=noonifications.tech
https://www.npmjs.com/package/url-parse
https://www.npmjs.com/package/use-query-params

```
Url.set(key, value)
query
```


### image resizing

- image should be resized or applied like 300x300 or something


### remark 

Remark plugins to try later later later
- https://github.com/remarkjs/remark-html

- https://github.com/remarkjs/remark-breaks

- https://github.com/vercel/remark-capitalize

- https://github.com/laat/remark-first-heading

- https://github.com/remarkjs/remark-images

- https://github.com/remarkjs/remark-lint

- https://github.com/remarkjs/remark-inline-links

- https://github.com/dimerapp/remark-macro

- https://github.com/remarkjs/remark-normalize-headings

- https://github.com/remarkjs/remark-rehype

- https://github.com/sergioramos/remark-hint

- https://github.com/markedjs/marked

- https://github.com/mdx-js/mdx

- https://github.com/LLazyEmail/markdown-to-email/discussions/751

----


- https://www.npmjs.com/package//sanitize-html

- https://www.npmjs.com/package/html-element-attributes

- https://www.npmjs.com/package/html-tag

- https://github.com/breakdance/breakdance

- https://github.com/here-be/snapdragon

- https://github.com/wooorm/html-element-attributes

- https://www.npmjs.com/package/element-mold

-----

- https://www.npmjs.com/package/yargs

- https://www.npmjs.com/package/commander

- https://tomassetti.me/parsing-in-javascript/ https://github.com/aaditmshah/lexer https://github.com/zaach/jison

---

- add html linter
because it's hard to understand if everything is good or not

https://www.npmjs.com/package/eslint-plugin-html

we can use https://www.freeformatter.com/html-validator.html and see errors. not sure if they actually valid, but will be cool to pay attention to some of them

![image](https://user-images.githubusercontent.com/1469198/96992186-2fd57b00-1532-11eb-8709-f18dde099c7c.png)

- add links checker

![image](https://user-images.githubusercontent.com/1469198/101926544-f937ea80-3bdb-11eb-8df8-0ca4250c54b0.png)


---


Maizzle 

https://maizzle.com/docs/introduction
+ https://maizzle.com/docs/introduction#byohtml

----

## Task 16: If I comment any of those cases i wouldnt get any warning or something in our
 [#1433](https://github.com/LLazyEmail/markdown-to-email/issues/1433)

| Name   | About  | Title  | Labels  | Assignees  |
| :-----: | :-----: | :-----: | :-----: | :-----: |
| If I comment any of those cases i wouldnt get any warning or something in our | If I comment any of those cases i wouldnt get any warning or something in our | "" | "" | "" |

## Reason or Problem

reactFull: () => generateReactFullTemplate(FULL_SOURCE),

markdown-to-email/src/index.js

Line 14 in 54325ce

 // TODO if I comment any of those cases - i wouldnt get any warning or something in our command line. 
 
 ```
 
import { isFolderExists } from './domain/write';

import { generateReactFullTemplate } from './templates/NewsletterReactTemplate';
import { generateFullTemplateHackernoon } from './templates/HackernoonTemplate';
//-------------------
// @TODO add path package, in order to make it work PERFECTLY
const FULL_SOURCE = 'source/source.md';

isFolderExists('./generated');
isFolderExists('./tests/_generated');

console.log('Mode', process.env.PARSE);

// TODO if I comment any of those cases - i wouldnt get any warning or something in our command line.

const modeMap = {
  full: () => generateFullTemplateHackernoon(FULL_SOURCE),
  // reactContentOnly: () => generateReactContent(CONTENT_SOURCE),
  reactFull: () => generateReactFullTemplate(FULL_SOURCE),
};

modeMap[process.env.PARSE ?? 'full']();
```

_vadim9999:_

@atherdon the problem was with printMessage, because you have wrapped params into object, but didn't change call of this function

_atherdon:_

hmm. I mean, probably there was an issue with my code, but the reason why I created this issue is different.

i mean that it's hard to manage items from this array. while we protected our main page - we still don't have a proper way to get an error. Imagine this situation - this generator was used for creating 100 different templates - do you think this structure will be able to handle that?

Do you want to explore this issue deeper?

_vadim9999:_

I don't think that the object can cause any errors. switch is not so good, because it's hard to read and understand what is going on. also there are some troubles with switch block, and it's recommended to use object instead

_atherdon:_

here i totally agree with you. switch sucks.

ok, let me move this part of our conversation into "improvements.md"
document that I'm still working on.

## Proposal or Solution

A clear and concise description of what you want to happen.

### Design

UMLs or describe entities involved, their behaviors and relationships.

### Sample usage

Clear set of instructions

## Alternatives solutions

A clear and concise description of any alternative solutions or features you've considered.

## Stakeholders and Dependent software components

## Testing plan



----

## Task 17: DDD [#1003](https://github.com/LLazyEmail/markdown-to-email/issues/1003)

| Name   | About  | Title  | Labels  | Assignees  |
| :-----: | :-----: | :-----: | :-----: | :-----: |
| DDD | DDD | "" | "" | "" |

## Reason or Problem

- https://medium.com/spotlight-on-javascript/domain-driven-design-for-javascript-developers-9fc3f681931a

- https://khalilstemmler.com/articles/domain-driven-design-intro/

- https://en.wikipedia.org/wiki/Domain-driven_design

## Proposal or Solution

A clear and concise description of what you want to happen.

### Design

UMLs or describe entities involved, their behaviors and relationships.

### Sample usage

Clear set of instructions

## Alternatives solutions

A clear and concise description of any alternative solutions or features you've considered.

## Stakeholders and Dependent software components

## Testing plan



----

---

## Task 18: [Replace md](https://github.com/LLazyEmail/markdown-to-email/blob/main/src/domain/react/replace-markdown/replace-md.js)

| Name   | About  | Title  | Labels  | Assignees  |
| :-----: | :-----: | :-----: | :-----: | :-----: |
| Replace md | Replace md | "" | "" | "" |

## Reason or Problem

markdown-to-email/src/domain/react/replace-markdown/replace-md.js /

```
// import debuggingReplacer from './debugging';
import mainObject from '../pre-replace-object/index';
// import { replaceMarkdown } from '../../replace-class';

const prepOurCallback = (name) => {
  if (!name) {
    throw new Error(`name of ${name} is undefined or empty`);
  }

  const settings = mainObject[name];

  if (!settings) {
    throw new Error(`object by name ${name} not found`);
  }

  return settings;
};

// if (debug) {
//   //--------------
//   if (!settings.literal) {
//     console.log(callbackName, settings.constant);
//     console.log('-----------------');
//   }
//   //---------------
// }
// TODO we finally can replaceMarkdown()*** for this one.

export function replaceMarkdownReact(callback_name) {
  // const debugging = new replaceMarkdownDebug(callback_name);

  const singleElement = prepOurCallback(callback_name, false);

  // --------- comment for debugging purposes
  // // --- You can comment this when you debugging our wrapper
  // const _replacer = singleElement.replacer.bind(this);
  // this.content = this.content.replace(singleElement.constant, _replacer);

  const _replacer = singleElement.replacer.bind(this);
  this.content = this.content.replace(singleElement.constant, _replacer);

  //   // -------------- Uncomment for debugging reasons
  // if (debuggingReplacer(callback_name)) {
  //   // console.log(callback_name);

  //   //     console.log(replacedString);

  //   //     // TODO another case why i dont like this solution
  //   //     // with string.replace - when you forget to return something it's hard to catch
  // }
  // return '';
  //-----------------------
}

// function replaceMarkdownDebug(callback_name) {
//   // -------------- Uncomment for debugging reasons
//   if (debuggingReplacer(callback_name)) {

//     console.log(callback_name);

//     const _replacer = singleElement.replacer.bind(this);

//     console.log(replacedString);

//     // TODO another case why i dont like this solution
//     // with string.replace - when you forget to return something it's hard to catch
//     this.content = this.content.replace(singleElement.constant, _replacer);
//   }
//   return '';
//   //--------------
// }

// TODO mayber replace it with class?
// class replaceMarkdownReact {
//   constructor(callback_name) {
//     const singleElement = prepOurCallback(callback_name, false);
//     // --------- comment for debugging purposes
//     // // --- You can comment this when you debugging our wrapper
//     // const _replacer = singleElement.replacer.bind(this);
//     // this.content = this.content.replace(singleElement.constant, _replacer);
//     //   // -------------- Uncomment for debugging reasons
//     if (debuggingReplacer(callback_name)) {

//       // console.log(callback_name);
//       const _replacer = singleElement.replacer.bind(this);

//       //     console.log(replacedString);
//       //     // TODO another case why i dont like this solution
//       //     // with string.replace - when you forget to return something it's hard to catch
//       this.content = this.content.replace(singleElement.constant, _replacer);

//     }
//     return '';
//     //   //-----------------------
//   }
// }
```

## Proposal or Solution

A clear and concise description of what you want to happen.

### Design

UMLs or describe entities involved, their behaviors and relationships.

### Sample usage

Clear set of instructions

## Alternatives solutions

A clear and concise description of any alternative solutions or features you've considered.

## Stakeholders and Dependent software components

## Testing plan



----

## Task 19: [Callbacks Factory Index](https://github.com/LLazyEmail/markdown-to-email/blob/main/src/domain/callbacks-factory/index.js)

| Name   | About  | Title  | Labels  | Assignees  |
| :-----: | :-----: | :-----: | :-----: | :-----: |
| Index | Index | "" | "" | "" |

## Reason or Problem

markdown-to-email/src/domain/callbacks-factory/index.js /

```
//-------------------
// ----- examples below

// import { catchErrorTraceOutput, inspector } from '../error-handle';

// import { WR3_generateNewString, WR3_getWrapper } from '../replace-wrapper3.0';

// class CallbackFactory {
//   error = false;

//   create = (settings) => {
//     // if(inspector(settings) throw new Error('nooooo settings')

//     // if (!settings)
//     // add error checking here.. probably few versions to test
//     // error = false;

//     const { params, name, valuesObj, replacerMethod, debug } =
//       settings || false;

//     const { regex, replacer, literal } = valuesObj;

//     const configCopy = Object.assign(
//       settings,
//       WR3_getWrapper(name),
//       // this.getWrapper(name)
//     );

//     // params: {
//     //   content: title.trim(),
//     //   href: href.trim(),
//     // };

//     // let partial;

//     // here i want to apply a check and see if everything is fine, if not we generate error = true
//     try {
//       // or
//       // let newString = WR3_generateNewString(configCopy);
//       // console.log(newString);
//       //     return newString;
//       // or
//       // let newString = this.WR3_generateNewString(configCopy);
//       // console.log(newString);
//     } catch (error) {
//       catchErrorTraceOutput(error);
//     }
//   };

//   // WR4_getWrapper = (name) => {
//   //   return {
//   //     literal: mainObj[name]['literal']
//   //   }
//   // }

//   // partial = '';

//   // isError = () => {
//   //     return this.error;
//   // }
//   // setPartial = (string) => {
//   //   this.partial = string;
//   // }

//   // getPartial = () => {
//   //   return this.partial;
//   // }

//   // display = () => {
//   //   this.getPartial();
//   // }
// }

// export default CallbackFactory;
```

## Proposal or Solution

A clear and concise description of what you want to happen.

### Design

UMLs or describe entities involved, their behaviors and relationships.

### Sample usage

Clear set of instructions

## Alternatives solutions

A clear and concise description of any alternative solutions or features you've considered.

## Stakeholders and Dependent software components

## Testing plan



----

## Task 20: Simple tasks for main branch

### [#403](https://github.com/LLazyEmail/markdown-to-email/issues/403)

| Name   | About  | Title  | Labels  | Assignees  |
| :-----: | :-----: | :-----: | :-----: | :-----: |
| Simple tasks for main branch | Simple tasks for main branch | "" | "" | "" |

## Reason or Problem


### Part one
create 3 npm calls for generating full-template for 3 different cases(only plain version is necessary right now):

- full-template with advertising
- full template with advertising placeholders
- full-template without sponsors

https://github.com/atherdon/markdown-to-email/blob/main/package.json#L8

---

### Part two

maybe we should do a custom markdown tag "[separator]" that will be replaced with `***`?
[#355](https://github.com/LLazyEmail/markdown-to-email/issues/355)

---

### Part three

Can we add some warnings for preview text, for advertising blocks too?
[#355](https://github.com/LLazyEmail/markdown-to-email/issues/355)

---


### Part four
can we clean up our constants package? [#356](https://github.com/LLazyEmail/markdown-to-email/issues/356)

---


### Part five
switch from default RegExp that we have for links and create custom_link constant.

our goal will be to add URL param like `?ref=noonifications.tech` but let's use some working module, aka extension of `path` module.
because there can be tons of stupid issues that I want to skip

https://github.com/sindresorhus/query-string#stringifyobject-options

### Part six



**"create 3 npm calls for generating full-template for 3 different cases(only plain version is necessary right now)"** - Этот момент не оч понятен

сейчас у нас вызывается генератор с помощью одной команды.
и генерирует он темплейт только в том случае, когда есть вся информация сразу. - это первая команда.

но т.к. клиенты иногда тупят - мы генерируем темплейт, но не имеет в этот момент данных от спонсоров.
это будет вторая команда.

третья команда в package.json будет тоже генерировать темплейт, но в котором нету блоков от спонсора совсем. пример: https://www.noonifications.tech/w/FrS0z4j1mwy0iPFsU6N2Ig
Сейчас, с помощью нашего генератора, такой layout не просто сделать. приходится потом руками удалять блоки


**"Can we add some warnings for preview text, for advertising blocks too?"**
 Для previwText есть warning - когда парсим фулл контент в консоли выводится красным что previwText нету

**can we clean up our constants package? [#356](https://github.com/LLazyEmail/markdown-to-email/issues/356)** - В этом не очень уверен


---


## Proposal or Solution

A clear and concise description of what you want to happen.

### Design

UMLs or describe entities involved, their behaviors and relationships.

### Sample usage

Clear set of instructions

## Alternatives solutions

A clear and concise description of any alternative solutions or features you've considered.

## Stakeholders and Dependent software components

## Testing plan



----


Одним из плюсов модульной системы является более простая миграция функционала на typescript
если искать фрилансера на фх является сложной задачей для MTE, то для работы в минимодулях это реально и будет проще/дешевле.

---



## Task 21: Подумать о простых компонентах, которые делаются в typography и их связи с markdown-regex 
[#67](https://github.com/LLazyEmail/nomoretogo_email_template/issues/67)

| Name   | About  | Title  | Labels  | Assignees  |
| :-----: | :-----: | :-----: | :-----: | :-----: |
| Подумать о простых компонентах, которые делаются в typography и их связи с markdown-regex | Подумать о простых компонентах, которые делаются в typography и их связи с markdown-regex | "" | "" | "" |

## Reason or Problem

- https://github.com/LLazyEmail/markdown-regex/blob/main/readme.md

- https://github.com/LLazyEmail/nomoretogo_email_template/tree/main/components/typography/src/components

- https://github.com/LLazyEmail/_trying_simple_tags

- https://github.com/lit/lit/tree/main/packages/lit-starter-js

- https://codelabs.developers.google.com/codelabs/lit-brick-viewer#6

- https://codelabs.developers.google.com/codelabs/the-lit-path#0

- https://open-wc.org/codelabs/basics/lit-html.html#0

- https://github.com/fernandopasik/hello-web-components

- https://open-wc.org/docs/development/generator/

- https://open-wc.org/guides/developing-components/code-examples/

## Proposal or Solution

A clear and concise description of what you want to happen.

### Design

UMLs or describe entities involved, their behaviors and relationships.

### Sample usage

Clear set of instructions

## Alternatives solutions

A clear and concise description of any alternative solutions or features you've considered.

## Stakeholders and Dependent software components

## Testing plan



----


Enable and fix ESLint warnings. Right now they are disabled @ MTE repository




### [Linkedin page of LLazyEmail](https://www.linkedin.com/company/llazyemail/)
