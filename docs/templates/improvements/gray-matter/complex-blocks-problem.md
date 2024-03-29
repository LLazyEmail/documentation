---
id: complex-blocks-problem
title: Complex Blocks Issue
sidebar_label: Custom Blocks
---

# Сложные, "кастомные" блоки email темлпейта и сборные callbacks.


в markdown нету такого тега, который бы помог соединить image / title / link.

мы уже делали кастомные теги для markdown. если блок sponsorship. Наверное нам нужно соединить 2 задачи - работу над компонентом, который возвращает правильный HTML и созданием RegEx для парсинга.

детали upon request



Пока мы не попробывали использовать mdx для наших темлпейтов, у нас будут возникать вопросы и проблемы с кастомными тегами для markdown.

**Проблема**: для каждого сложного блока прийдется:
1. "создавать свою" версию тега 
2. для этой версии писать кастомный regEx 
3. писать "сложный" callback, который будет обрабатывать параметры, которые regex "вырезает" из нашего контента.

В темлпейте для hackernoon у нас уже **sponsorship**, **preview text**, **memes** и т.д.

при этом, большинство кастомных блоков имеют внутри себя стандартные объекты из typography.
Например:
- sponsorship: это image + link, heading + link внутри кастомного html блока.
- memes: это image + link

**Предложение**: рассмотреть возможность создания сборных, вложенных реплейсеров.
Что я имею ввиду? 

Сделать какой то универсальный вариант, который внутрь [_sponshorship](https://github.com/LLazyEmail/markdown-to-email/blob/main/src/callbacks/html/methods/sponsor.js) бахнет _text, _link, _image, с их параметрами.


Я понимаю, что легче от этого не станет. Но мы сможем использовать эту логику в nmtg темплейте.


Я считаю что частично, логика сборных реплейсеров была сделана в блоке со сложными lists.
посути там несколько реплейсеров которые позволяют сделать лист внутри листа. 
При этом, код работы с листами нужно тоже обновить, чтобы он работал по предложенной мной выше логике.
т.е код внутри листа должен состоять их 5-8 строк из них 3 строки - это просто вызов `_subList, _listItem` методов

[Можешь посмотреть в код, что я имею ввиду](https://github.com/LLazyEmail/markdown-to-email/blob/main/src/callbacks/html/methods/lists.js)

---


Как я пришел к этой проблеме?


в nmtg есть блок рецептов, посути это сборный блок в котором 4 переменные внутри:
- image
- link
- title
- subtitle


### Я записал видео: 
https://user-images.githubusercontent.com/1469198/180642690-d6ca3af5-f9eb-4a55-a7c3-cc851c342a3a.mp4




### [sub task] trying to parse custom markdown tags
https://github.com/LLazyEmail/markdown-to-email/issues/1384






Мини-идея это посмотреть как работает [markdown-it](https://github.com/markdown-it/markdown-it#plugins-load), но я думаю даже если начнем использовать его,  это просто будет промежуточный вариант и возможно нам нужно просто пропускать его и сразу идти в MDX. потому что вместе с mdx можно будет пойти в transition из текущей конфигурации как rollup модуль и вызов через CLI в сторону проекта на nextjs с приятным деплоем и давать возможность "звать" генератор через API.



Я придумал такой кастомный блок, который можно будет засунуть в source.md

```
:::
![Recipe One](https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/recipe1.jpeg)
[recipe](https://www.nomoretogo.com/weekly-meal-plan-menu-122214/)
## Grilled Salmon with Chipotle Cream Sauce
### over Potato Poblano Hash and Broccolini

:::
```

ну и круто было бы чтобы внутри реплейсера

_recipe

находились вызовы реплейсеров

```
_image
_link
_title
_subtitle
```

в идеале б конечно еще использовать уже существующие RegEx а не создавать очередного монстра.
**REGEXP_IMAGE, REGEXP_LINK, REGEXP_H2, REGEXP_H3**


Плюс Еще я бы ввел понятие section.

например сейчас у нас 6 рецептов  по два в каждой секции. на данный момент не принципиально, но возможно в будущем этот блок бы нам пригодился.




https://user-images.githubusercontent.com/1469198/180642690-d6ca3af5-f9eb-4a55-a7c3-cc851c342a3a.mp4



```
:::
![Recipe One](https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/recipe1.jpeg)
[recipe](https://www.nomoretogo.com/weekly-meal-plan-menu-122214/)
## Grilled Salmon with Chipotle Cream Sauce
### over Potato Poblano Hash and Broccolini

:::
```

**REGEXP_IMAGE, REGEXP_LINK, REGEXP_H2, REGEXP_H3**





### [complex callbacks](https://app.asana.com/0/1201360899207493/1202700806644230)
```
у меня есть вопрос/идея которую бы я хотел обсудить.
я записал видео в этом таске. 

Если кратко - я немного торможу окончание работу над nmtg/typography потому что мне лень просто добить этот модуль без каких то импрувментов.

и у меня есть вопрос насчет создание сложных кастомных элементов, которые мне непонятно как "правильно" сделать
```

Task with video: https://github.com/LLazyEmail/nomoretogo_email_template/issues/192

Sub-task: https://github.com/LLazyEmail/markdown-to-email/issues/1384




---
