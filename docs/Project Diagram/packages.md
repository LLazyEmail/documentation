---
id: project-diagram
title: Markdown to Email Project Diagram
sidebar_label: Project Diagram
---

[Purpose]()

[Scope]()

[Work Practice](https://github.com/hillaryfraley/jobbriefings#work-practice)

[Daily Briefing](https://github.com/hillaryfraley/jobbriefings#daily-briefing)



---


Module description:


- активній или outdated, replaced at MTE/domain folder
MTE/domain list packages
works mostly as subdomains inside main project



- list of repositories and modules

- add an explainer for each module

- create a list of folders that we have inside of our MTE/Domain


https://github.com/LLazyEmail/markdown-to-email/tree/main/src


# Packages inside MTE/domain folder

- [Deliver]()
- [error-handle]()
- [helper-methods]()
- [regular-expressions]()
- [replace-markdown]()
- [replace-wrapper3.0]()
- [state]()
- [write]()
- [objectBuilder.js]()
- [parse.js]()



- [deliver](https://github.com/LLazyEmail/markdown-to-email/tree/main/src/domain/deliver)


- [error-handle](https://github.com/LLazyEmail/markdown-to-email/tree/main/src/domain/error-handle)
модуль который должен помочь нам с обработкой ошибок


error-handle stores method for output of errors in a way, that fine for us.


- [helper-methods](https://github.com/LLazyEmail/markdown-to-email/tree/main/src/domain/helper-methods)
общие методы, которые вызываются в разных местах\под-модулях

- [regular-expressions](https://github.com/LLazyEmail/markdown-to-email/tree/main/src/domain/regular-expressions)
обновленная версия модуля с регулярными выражениями. прошлая версия хранится в маркдаун-регЭкс.

- [replace-markdown](https://github.com/LLazyEmail/markdown-to-email/tree/main/src/domain/replace-markdown)
функционал для раьботы реплейсера


- _replace-markdown_ keeps 2 versions for our templates. Main files is replace-md.js. Also we have a file debgging.js, that can be used for disabling work of some specific callbacks in order to debug other callbacks.



- [replace-wrapper3.0](https://github.com/LLazyEmail/markdown-to-email/tree/main/src/domain/replace-wrapper3.0)
функционал для работы реплейсера


_replace-wrapper_ before were keeping a lot of different files/methods, but after a clean up, we have onle commonReplace method. and a few main methods for replacing HTML strings.


- [state](https://github.com/LLazyEmail/markdown-to-email/tree/main/src/domain/state)
стейт это наш аналог стейта в реакте. 
логика его как синглтона, который является хранилищем всех данных которые нам нужны для того, чтобы генератор отработал один раз.


Inside **state** folder we creating a **state object** and connect tracking of errors and warnings.



- [write](https://github.com/LLazyEmail/markdown-to-email/tree/main/src/domain/write)


Both versions of _write_ are used in our work. one version is used in MTE. 
Second version from a separate repository is used in my Jest tests in our template (3 times).



- [objectBuilder.js](https://github.com/LLazyEmail/markdown-to-email/blob/main/src/domain/objectBuilder.js)

_objectBuilder_ creating an object from different constants for a better access of it.


- [parse.js](https://github.com/LLazyEmail/markdown-to-email/blob/main/src/domain/parse.js)




## MTE packages


- [callbacks]()
- [callbacksReact]()
- [constants]()
- [domain]()
- [helper]()
- [templates]()

- [callbacks](https://github.com/LLazyEmail/markdown-to-email/tree/main/src/callbacks)
наши коллбеки для plain js 


- _callbacks_ connects RegEx with strings that must be wrapper in HTML



- [callbacksReact](https://github.com/LLazyEmail/markdown-to-email/tree/main/src/callbacksReact)
наши коллбеки для react

- [constants](https://github.com/LLazyEmail/markdown-to-email/tree/main/src/constants)
constants for 

- [domain](https://github.com/LLazyEmail/markdown-to-email/tree/main/src/domain)
domain єто папка в которой хранится изолированній функицонал, которій легко можно будет превратить в отдельніе модули

- [helper](https://github.com/LLazyEmail/markdown-to-email/tree/main/src/helper)


- [templates](https://github.com/LLazyEmail/markdown-to-email/tree/main/src/templates)
папка для хранени кода разніх темплейтов
