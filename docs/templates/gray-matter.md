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

например секция с рецептами легко создается из массива.

часть с **instruction**, часть c **weekprep**
тут подумаем дальше как разделить контент.

например сделать кастомний таг **[weekly-menu]** в середине темплейта.


create RegEx [image1-2-3] искать матч внутри recipes. C HN прийдется поиграться.

what we have for markdown parser?
Can we upgrade MTE stuff like ....

улучшенная версия для создания нових темплейтов.

[Template TS class Link]

может setting for Template, where we have abstract stuff for
- Head
- Footer
- Body / Content
- Main


подключение функции и работа с subcomponents.



Что стоит нам перейти в React? Начать с простіх компонентов, обїединить их в один repository?
Цель: сделать лучше, чем сделать react-email repo?
