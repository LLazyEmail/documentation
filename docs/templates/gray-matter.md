## Connecting NMTG template with MTE

What must be done?

NMTG template must work for the first place

- typography + nmtg
- display stuff

- Сделать описание в докс
- проверить работу всех мд. Все віводится, все работает.
- записать видео с тем, как работает gray-matter. его ми точно можем использовать в МТЕ, но возможно и mdx-node-loader заработает
- умеьшится количество кастомних блоков и их логика.
- есть вопрос по обновлению replacer.

- in nmtg вообще легко должно работать, потому что там целіе секции можно генерировать из config.

---

---


### what we have for markdown parser?

Can we upgrade MTE stuff like ....







### [Template TS class Link](https://github.com/LLazyEmail/documentation/blob/main/docs/templates/template-class-typescript.md)




### **Что стоит нам перейти в React?** 

Начать с простих компонентов, обїединить их в один repository?

Цель: сделать лучше, чем сделать react-email repo?


----

Gray-Matter: https://github.com/LLazyEmail/documentation/blob/main/docs/templates/yaml-config.md

==========


## Generator v3.

Goals:
- more templates
- easy next steps
- better debugging
- -better error reporting
- better modularity


Features:
- API
- React integration for templates production
- React for template Preview

упрощение работі replacer
moving into MDX

усложнение кода, но при єтом развитие CI/CD, testing, etc.

организация информации в более удобном формате.


СОздать больше Indexes, меньше папок, чтобі удобнее біло делать. Использовать темплейті, чтоби улучшать описание.


=====


## Generator V3
small fixes, которие уже біли обработани, описани і пріорітізованні.

integration MTE with nmtg-template

nx vs nodejs vs Nextjs

описание routes, API urls.


## Templates
now we have 3 repositories.

2 of them works, old version, integrated with MTE
1 not working, updated version, can cause updates @ old templates, but it's not necessary.

