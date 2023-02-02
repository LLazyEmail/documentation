---
id: nomoretogo-js-template
title: NMTG Plain JS template
sidebar_label: NMTG template
---

Repository: https://github.com/LLazyEmail/nomoretogo_email_template



### I created a few examples of source.md files, that we might be able to conver and incorporate into MTE
- [Current File](https://github.com/LLazyEmail/nomoretogo_email_template/blob/main/data/01-source.md)
- [Second Version](https://github.com/LLazyEmail/nomoretogo_email_template/blob/main/data/02-source-wrapped-recipes.md)
- [Front Matter version, simplified](https://github.com/LLazyEmail/nomoretogo_email_template/blob/main/data/03-source-front-matter.md)


Errors & Params assertion


- checking create-html-element, ow for simplifying logic of our code


---

NMTG template next steps

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
- https://github.com/LLazyEmail/nomoretogo_email_template/blob/main/data/01-source.md
- https://github.com/LLazyEmail/nomoretogo_email_template/blob/main/data/02-source-wrapped-recipes.md
- https://github.com/LLazyEmail/nomoretogo_email_template/blob/main/data/03-source-front-matter.md



# Title
# Content
# Recipes
# Button
# Instructions

при обновлении source.md - перенести рабочий пример в проект генератора

При следующем темплейте, начинать нужно с source.md чтобі понятны были движущие части

Добавление front-matter должно упростить работу нашего парсинга и убрать работу со сложными кастомными тегами.

---

Общие проблемі, замеченные при окончании работы темплейта
- работа модулей
- конфигурация модулей
- тестирование внутри модулей

---

Возможно нам нужно попробывать другие билдеры кода, чтобы и дев проще был, и чтобы npm login + publish работал и общая установка кода была простой.

- скрипты и т.д.
- планы по sub-modules



---

```
:::
![Recipe One](https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/recipe1.jpeg)
[recipe](https://www.nomoretogo.com/weekly-meal-plan-menu-122214/)
## Grilled Salmon with Chipotle Cream Sauce
### over Potato Poblano Hash and Broccolini

:::
```

**REGEXP_IMAGE, REGEXP_LINK, REGEXP_H2, REGEXP_H3**

---

https://github.com/LLazyEmail/documentation/blob/main/docs/generator/organized-tasks.md

- https://github.com/LLazyEmail/markdown-to-email/issues/1384
- https://github.com/LLazyEmail/nomoretogo_email_template/issues/192

---
