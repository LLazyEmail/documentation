
### Reason or Problem

В typography у нас сейчас мало компонентов. А Вадим хочет попробывать работу этого модуля и подклюить его к основному генератору.


Вначале надо перенести:

- image

- heading - там где Weekly Menu

![1](https://user-images.githubusercontent.com/1469198/180827517-63b945c7-0215-41c7-a7a1-5d7521fe433a.png "1")

- subheading

![2](https://user-images.githubusercontent.com/1469198/180827555-972da0cd-84d6-406b-95c3-aae75360aa05.png "2")

- paragraph

![3](https://user-images.githubusercontent.com/1469198/180827591-28046adb-cb22-4334-a5b1-6d1d22cefe47.png "3")

- strong

![4](https://user-images.githubusercontent.com/1469198/180827704-e67d8e22-79d3-4424-bb8d-ece5413a8990.png "4")


---


- html-typography-tags

- nmtg-template-mailerlite-typography

- nmtg-template-mailerlite-outertemplate

- nmtg-template-layout-weekly

- nmtg-template-mailerlite-inner

- nmtg-template-display


```
CHECK CASES WHEN CONTENT CAN HAVE EMPTY LISTS OR BLOCKQUOTE

Replacer.emptyUl();

Replacer.emptyOl();

Replacer.emptyBlockquote();

Replacer.separator();
```

### Proposal or Solution

A clear and concise description of what you want to happen.

#### Design

UMLs or describe entities involved, their behaviors and relationships.

#### Sample usage

Clear set of instructions

### Alternatives solutions

A clear and concise description of any alternative solutions or features you've considered.

### Stakeholders and Dependent software components

### Testing plan

### Acceptance scenarios


html-typography-tags

```
button.js

div.js

heading-nmtg.js

heading.js

headingOne.js

image.js

imageLink.js

italic.js

link.js

list.js

listItem.js

paragraph.js

strong.js
```
