---
id: gray-matter
title: Gray Matter Feature
sidebar_label: Gray Matter
---

[Related issue: Complex Blocks Issue](https://github.com/LLazyEmail/documentation/blob/main/docs/templates/improvements/gray-matter/complex-blocks-problem.md)



gray-matter 
Pros
- относится к улучшениям в **MTE**
- step forward to **mdx**, that might use it.
- упрощение **темплейтов**, потому что мі сразу будем знать, как data ходит внутри темлпейта.

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



gray-matter точно cможем использовать в МТЕ, но возможно и mdx-node-loader заработает



1. Уменьшится количество кастомних блоков и их логика.

2. Нужно будет обновить replacer. 

добавление gm в nmtg будет легко, тк контент однотипний.
целіе секции можно генерировать из config.
в hn прийдется 



нужно будет обновить файли source.md.

нужно обновить




