Генератор. Мне тоже не хочется трогать генератор без понимания next steps.

Общие идеи наших дальнейших шагов с технической точки зрения я описывал в слайдах, могу найти их и закинуть в документацию.


---

Если вместо nmtg typography, мі подключили оба модуля typo, nmtg-typo. Будет ли єто работать внутри MTE?

Получится ли, собирая Template, відавать его в формате строки, в которую нужно засунуть только контент?

Можно ли обновить source HN, до уровня front-matter? 

---

1) надо понять продолжаем ли мы или закрываемся или ставим все на паузу. 
Для меня этот генератор есть самая стабильная часть жизни за последние пару лет.
но меня одного недостаточно. При этом с фуллтайм роботой я несмогу сам тратить время. Но я хочу продолжать тратить деньги на этот проект.


---

Если нужна мотивация, можете посмотреть на сайт документации наш. Я сделал дохуя усилий, чтобы организовать информацию и начать подготовку к next steps, когда появятся клиенты, деньги и будет понятно что мы продолжаем


---

a) @Vadim can help with:
- nmtg typescript template classes
- some improves @ MTE project
- integrate gray-matter (have all details)
- publish documentation under our domain

b) @Ivan - server for hosting + connecting our domain

c) @Arthur - complete nmtg template, complete and publish our one page website

so we have domain + website + documentation website to get indexed



---
**Вадим**

нужны чёткие задачи, и всё что  запускаеться нужно хотя бы на хероку задеплоить , чтобы можно было показать демо что что-то работает и не нужно лезть в код. даже тот генератор который в html превращает с маркдауна, написать мальнький сервер на ноде и html страница с полем для загрузки файла и кнопкой сгенерировать и задеплоить на хероку - в результате будет видно что уже сделано и работает

должны быть какие-то точки, допустим потратили 40 часов, задать вопрос есть ли тот результат или нет? если его нету то сколько ещё нужно времени? и будет ли вообще достигнут результат?


не хватает большого графа или дерева с тасками, чтобы была видна зависимость между ними и понимать на каком мы этапе

----


реакт

а насчет реакта - можно пойти в ету сторону тебе. 
1. у нас була ідея перейти на реакт, но все время не хватало енергии.
постоянно крутились внутри генератора, чтото чинили, чтото ломали,

2. я ж намагався створити набір простих компонентів, щоб генерувати реакт дом, а не хтмл. не думаю що ти захочеш спочатку в моему коді порзатися, але можна щось придумати.
наприклад можна поставити цель трахнути(зробити краще) того тіпа що https://github.com/pavkout/react-mailkit робив.


3. на реакті/нехті можна сервер підняти, який буде штовхати данні потім в генератор.




а что с асаной и гитхаб доской? где таски двигать?
