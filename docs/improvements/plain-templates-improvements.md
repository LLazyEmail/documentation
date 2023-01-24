---
id: plain-js-improvements
title: Plain JS Templates improvements
sidebar_label:  Plain JS Templates
---


## 1. Decide to use functions inside of template or just strings

![image](https://user-images.githubusercontent.com/1469198/207774818-bed47381-0c9c-4d3c-8635-7174b1625803.png)


![image](https://user-images.githubusercontent.com/1469198/207774888-3d8bd1aa-00c4-4d9c-848c-3392e2a12e53.png)



## 2. Executable commands drives me crazy


### 1. I need a command for updating subpackages quickly. 
for it i created a [script](https://github.com/LLazyEmail/nomoretogo_email_template/blob/main/bash/update-packages.sh) and it works awesome for me




### 2. i want to try to use meow for that, but i think it's too much for a pretty simple code that we are trying to have

![image](https://user-images.githubusercontent.com/1469198/207000827-e565c77b-7806-4c3d-9fe6-9a66373f2dd8.png)


### 3. i need to have a script for calling test files separately, when i'm debugging things


![image](https://user-images.githubusercontent.com/1469198/207996499-80ece9c1-84e7-4bb3-bbf6-c08306b11a4c.png)



### 4. organize validation process correctly and save some space in our methods + line tracing

![image](https://user-images.githubusercontent.com/1469198/208203452-94a532b3-d3ee-4b19-950b-17c2978cb7c5.png)


Right now i'm testing [OW](https://github.com/sindresorhus/ow)

something like
```
const topPanelViewInBrows = (link) => {

  // const error = new Errors('topPanelViewInBrows');

  // if (link == '') {
  //   error.add('No link');
  // }

  ow(link, ow.string);
 ```


---


try later and see if it simplify the work with "literals"

https://www.npmjs.com/package/htm


https://preactjs.com/guide/v10/getting-started/#alternatives-to-jsx


https://gist.github.com/developit/699c8d8f180a1e4eed58167f9c6711be


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates


https://github.com/motss/lit-ntml
