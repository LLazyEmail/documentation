---
id: react-main
title: React Design System
sidebar_label: React Design System
---


### React Design System
modules that we developing right now

- [Typography](https://github.com/LLazyEmail/react-email-typography-components)
Basic components, like headings, links, buttons, images with links.
[Schema](#typography-components)

- [Nextjs-preview](https://github.com/LLazyEmail/nextjs-preview)
Repository with nextJS framework for previewing templates

- [Miscellaneous](https://github.com/LLazyEmail/react-email-miscellaneous-components)
Small components, related to email templates, like unsubscribe links, social media panel, etc.
[Components](#list-of-miscellaneous-components)

- [Template](https://github.com/LLazyEmail/react-email-template)
Default repository with backbone project that you can use as starting point
[Folders structure](#email-template-folders-structure)

- [Table](https://github.com/LLazyEmail/react-email-table)
Set of components, related to basic tables. Can be used for containers.

- [Email-template-react](https://github.com/LLazyEmail/email-template-react)
- [React-email-letter-components](https://github.com/LLazyEmail/react-email-letter-components)
- [Form](https://github.com/LLazyEmail/react-sendgrid-form)

### Remix-* templates

- [Hn react email template](https://github.com/LLazyEmail/remix-hn-react-email-template)

- [Venmo react email template](https://github.com/LLazyEmail/remix-venmo-react-email-template)

- [Taskrabbit react email template](https://github.com/LLazyEmail/remix-taskrabbit-react-email-template)

- [Uber react email template](https://github.com/LLazyEmail/remix-uber-react-email-template)

- [Ecommerce react email template](https://github.com/LLazyEmail/remix-ecommerce-react-email-template)

- [Google billing email template](https://github.com/LLazyEmail/remix-google-billing-email-template)

- [Amazon billing email template](https://github.com/LLazyEmail/remix-amazon-billing-email-template)

- [Stripe billing email template](https://github.com/LLazyEmail/remix-stripe-billing-email-template)


### Links to templates

- <a href="/templates/amazon.html" target="_parent">Billing - Amazon</a>
- <a href="/templates/google.html" target="_parent">Billing - Google</a>
- <a href="/templates/stripe.html" target="_parent">Billing - Stripe</a>

- <a href="/templates/HN1.html" target="_parent">HN 1</a>
- <a href="/templates/HN2.html" target="_parent">HN 2</a>
- <a href="/templates/HN3.html" target="_parent">HN 3</a>
- <a href="/templates/nomoretogo.html" target="_parent">nomoretogo</a>
- <a href="/templates/taskrabbit.html" target="_parent">taskrabbit</a>
- <a href="/templates/uber.html" target="_parent">uber</a>
- <a href="/templates/venmo.html" target="_parent">venmo</a>
- <a href="/templates/vouchful.html" target="_parent">vouchful</a>


### Major Release steps (stretch goals)
- complete table repo 
- work on the typography repository
- to check what is going on with the NextJS preview repository
- to review the current state of the HN template and what is necessary to complete to meet our goals

- at the same time, maybe it will be easier to complete & release a few "billing" templates that we have.


I started to organize information on our documentation website.


Separating and organizing templates into a better code
naming we react templates and organizing repositories

---

My goal a year ago was to clean up our markdown-to-email repository. 
We have a 2nd branch, packed with react stuff, now it's separated but needs input to finish things.

---

A generator is using the outer template and inner components(Interior) separately.  
This is why we split things that way. While the generator is creating content dynamically, the outer template is static.

## Inner Template folders structure

![1](https://raw.githubusercontent.com/LLazyEmail/documentation/main/static/img/react/interior-components.jpg)

## List of Miscellaneous components

![2](https://raw.githubusercontent.com/LLazyEmail/documentation/main/static/img/react/miscellaneous.jpg)

## Email Template Folders structure

![3](https://raw.githubusercontent.com/LLazyEmail/documentation/main/static/img/react/outer-template.jpg)

## React Templates structure

![4](https://raw.githubusercontent.com/LLazyEmail/documentation/main/static/img/react/templates-in-progress.jpg)

## Typography Components 

![5](https://raw.githubusercontent.com/LLazyEmail/documentation/main/static/img/react/typography.jpg)
