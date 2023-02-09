---
id: gray-matter
title: Gray Matter Feature
sidebar_label: Gray Matter
tags:
  - MTE
  - mdx
  - templates
  - features
---

[Related issue: Complex Blocks Issue](https://github.com/LLazyEmail/documentation/blob/main/docs/templates/improvements/gray-matter/complex-blocks-problem.md)



gray-matter 
Pros
- относится к улучшениям в **MTE**, упрощению работи кода
- step forward to **mdx**
mdx использует подобний workflow, которий упростит нашу работу
- упрощение **темплейтов**, 
потому что мі сразу будем знать, как data ходит внутри темлпейта.
- позволяет перейти нам на новий уровень управления контентом для наших темлпейтов. 
например ми можем отправлять контент одним запросом(из єдитора) а єтот конфиг- другим запросом(например при заполнении фронтенд форми). 
- подключение нового темплейта в MTE будет much faster

Упощает проблему добавления большего количества темлпейтов
- задевает MTE c replacers, templates

Areas: MTE, mdx, templates, features looks easy.




## GRAY-MATTER


например секция с рецептами легко создается из массива.


часть с **instruction**, часть c **weekprep**
тут подумаем дальше как разделить контент.


например сделать кастомний таг **[weekly-menu]** в середине темплейта.


### HN
- https://github.com/LLazyEmail/creative/blob/main/content/hn/01-hackernoon-source.md
- https://github.com/LLazyEmail/creative/blob/main/content/hn/02-hackernoon-source.md
- https://github.com/LLazyEmail/creative/blob/main/content/hn/03-hackernoon-source.mdx

### NMTG
- https://github.com/LLazyEmail/creative/blob/main/content/nmtg/01-source.md
- https://github.com/LLazyEmail/creative/blob/main/content/nmtg/02-source-wrapped-recipes.md
- https://github.com/LLazyEmail/creative/blob/main/content/nmtg/03-source-front-matter.md
- https://github.com/LLazyEmail/creative/blob/main/content/nmtg/04-source.mdx
- https://github.com/LLazyEmail/creative/blob/main/content/nmtg/05-source-weekly-menu.md


----

create RegEx [image1], [image2] [image3] искать матч внутри HN template

в NMTG там просто будет [weekly-menu]



gray-matter точно cможем использоваться в МТЕ, но возможно и mdx-node-loader заработает



1. Уменьшится количество кастомних блоков и их логика.

2. Нужно будет обновить replacer. вроде как єто будет сделать несложно, потому что кастомние методи как спонсоршип, превью и т.д.

добавление gm в nmtg будет легко, тк контент однотипний.
целіе секции можно генерировать из config.
в hn прийдется 


What must be done?
1. нужно будет обновить файли source.md.
1.1 добавить bash scripts that will simplify our pkg.json and make easier to pass different source.md files into our generator
https://github.com/LLazyEmail/markdown-to-email/blob/main/package.json#L11-L12

2. установить gray-matter в основной проект

3. нужно обновить state/stateInit/Replacer class

4. нужно создать дополнительние RegEx, и наверное избавиться от тех кастомних regex которие були у нас.

5. посмотреть как ми передаем данні для цих кастомних блоков, чи можна легко замініть old flow to a new flow or not


