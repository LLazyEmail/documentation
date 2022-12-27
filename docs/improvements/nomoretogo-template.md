---
id: nomoretogo-template
title: nmtg template
sidebar_label: No More To Go template
---

Repository: https://github.com/LLazyEmail/nomoretogo_email_template



### Examples of source.md files
- https://github.com/LLazyEmail/nomoretogo_email_template/blob/main/data/source.md
- https://github.com/LLazyEmail/nomoretogo_email_template/blob/main/data/source-wrapped-recipes.md
- https://github.com/LLazyEmail/nomoretogo_email_template/blob/main/data/source-front-matter.md


Errors & Params assertion


- checking create-html-element, ow for simplifying logic of our code



NMTG template

- закончить в текущем состоянии

1. Errors handling
2. template вложенность
3. config
4. добавление NMTG в генератор

### Проблемы
- много времени иногда занимает дебаг компонентов
- динамические компоненты сложно делать
- большая вложенность 
- много багов, даже при том, что логика очень понятная.

Template 
  --> errors / ow
  --> typography upgrade, create-html-elements
  --> can React -> html for simple shit?
  -- front matter, gray matter stuff


Как должен выглядеть md для Стейси?
положить его в data для того, чтобы видеть эти варианты

## MD Recipes + NMTG Template + Generator + Domain ==> working stuff

typography separate sounds funny to try.


- Окончание работы над темплейтом
- Освобождение меня
- Перенос информации в documentation, чтобі все лежало в одном месте


из documentation потом можно делать статейки


Source.md
- 



# Title
Content
Recipes
Button
Instructions

при обновлении source.md - перенести рабочий пример в проект генератора

При следующем темплейте, начинать нужно с source.md чтобі понятны были движущие части

Добавление front-matter должно упростить работу нашего парсинга и убрать работу со сложными кастомными тегами.

