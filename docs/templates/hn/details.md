---
id: hn-js-template
title: HN JS Plain Template
sidebar_label: HN Template
---


Repository: https://github.com/LLazyEmail/hn_email_template

Interesting to try: https://www.npmjs.com/package/typography









```
import typography from 'atherdon-newsletter-js-layouts-typography';

import body from 'atherdon-newsletter-js-layouts-body';

const {
  headingComponent,
  titleComponent,
  imageComponent,
  italicComponent,
  linkComponent,
  listComponent,
  listItemComponent,
  paragraphComponent,
  subtitleComponent,
  separatorComponent,
  strongComponent,
} = typography;

const { sponsorComponent, previewTextComponent } = body;


```

Main object: `import TObject from 'atherdon-old-newsletter-js-outertemplate';`





---

```markdown
# Template Components Documentation

This documentation describes various reusable components designed for building email templates with clear, semantic, and customizable HTML structures. Each component is built as a simple, composable element, enabling flexible email design.

---

## Button

A styled button component with customizable text, link, and styles.

**Usage:**

```jsx
<Button href="https://example.com">Click Me</Button>
```

**HTML Output:**

```html
<a href="https://example.com" style="background-color:#007bff; color:#ffffff; padding:10px 20px; text-decoration:none; border-radius:4px;">
  Click Me
</a>
```

---

## Heading

Represents a section heading with semantic styling.

**Usage:**

```jsx
<Heading level={2}>Section Title</Heading>
```

**HTML Output:**

```html
<h2 style="font-size:24px; margin:20px 0;">Section Title</h2>
```

---

## Image

Displays an image with optional styling.

**Usage:**

```jsx
<Image src="https://via.placeholder.com/600x200" alt="Sample Image" />
```

**HTML Output:**

```html
<img src="https://via.placeholder.com/600x200" alt="Sample Image" style="max-width:100%; height:auto; display:block;"/>
```

---

## Italic

Applies italic styling to its children text.

**Usage:**

```jsx
<Italic>This text is italicized.</Italic>
```

**HTML Output:**

```html
<span style="font-style:italic;">This text is italicized.</span>
```

---

## Link

A styled link component.

**Usage:**

```jsx
<Link href="https://example.com">Visit our site</Link>
```

**HTML Output:**

```html
<a href="https://example.com" style="color:#0066cc; text-decoration:underline;">Visit our site</a>
```

---

## List

Creates an unordered list.

**Usage:**

```jsx
<List>
  <ListItem>Item 1</ListItem>
  <ListItem>Item 2</ListItem>
</List>
```

**HTML Output:**

```html
<ul style="padding-left:20px; margin:10px 0;">
  <li style="margin-bottom:5px;">Item 1</li>
  <li style="margin-bottom:5px;">Item 2</li>
</ul>
```

---

## ListItem

Represents an individual item in a list.

**Usage:**

See above within `List`.

---

## MainTitle

Represents a large, prominent main title.

**Usage:**

```jsx
<MainTitle>Primary Heading</MainTitle>
```

**HTML Output:**

```html
<h1 style="font-size:32px; margin:30px 0;">Primary Heading</h1>
```

---

## Paragraph

A block of paragraph text.

**Usage:**

```jsx
<Paragraph>This is a paragraph of text.</Paragraph>
```

**HTML Output:**

```html
<p style="margin:15px 0; line-height:1.5;">This is a paragraph of text.</p>
```

---

## Separator

A horizontal line used to separate content sections.

**Usage:**

```jsx
<Separator />
```

**HTML Output:**

```html
<hr style="border:none; border-top:1px solid #ccc; margin:20px 0;">
```

---

## Strong

Bold text for emphasis.

**Usage:**

```jsx
<Strong>This is important</Strong>
```

**HTML Output:**

```html
<strong>This is important</strong>
```

---

## Subtitle

Secondary heading or sub-section title.

**Usage:**

```jsx
<Subtitle>Subsection Title</Subtitle>
```

**HTML Output:**

```html
<h3 style="font-size:20px; margin:20px 0;">Subsection Title</h3>
```

---

## Summary

These components help create clean, semantic, and visually appealing email templates. Each component offers customization options while maintaining compatibility with most email clients.

---


---



## 2nd VERSION

 a refined version of the documentation with example usage that matches how your components are designed — they are functions that take an `attributes` object and `children` (inner content), returning HTML strings.


# Template Components Documentation

This documentation describes various components implemented as functions that generate HTML strings for email templates. These components accept attribute objects for customization and inner content as arguments, simplifying the process of building dynamic, styled email content.



## Button

**Function signature:**

```js
Button(attributes, children)
```

**Attributes:** `href`, `style` (optional).

**Usage example:**

```js
const btnHTML = Button({ href: "https://example.com", style: "background:#007bff; color:#fff; padding:10px 20px; border-radius:4px; text-decoration:none;" }, "Click Me");
```

**Generated HTML:**

```html
<a href="https://example.com" style="background:#007bff; color:#fff; padding:10px 20px; border-radius:4px; text-decoration:none;">Click Me</a>
```

---

## Heading

**Function signature:**

```js
Heading(attributes, children)
```

**Attributes:** `level` (e.g., 1, 2, 3).

**Usage example:**

```js
const headingHTML = Heading({ level: 2 }, "Section Title");
```

**Generated HTML:**

```html
<h2 style="font-size:24px; margin:20px 0;">Section Title</h2>
```

---

## Image

**Function signature:**

```js
Image(attributes)
```

**Attributes:** `src`, `alt`, `style` (optional).

**Example:**

```js
const imgHTML = Image({ src: "https://via.placeholder.com/600x200", alt: "Sample Image", style: "max-width:100%; height:auto; display:block;" });
```

**Output:**

```html
<img src="https://via.placeholder.com/600x200" alt="Sample Image" style="max-width:100%; height:auto; display:block;">
```

---

## Italic

**Function signature:**

```js
Italic(attributes, children)
```

**Attributes:** none or styling.

**Example:**

```js
const italicHTML = Italic({}, "This is italic text");
```

**Output:**

```html
<span style="font-style:italic;">This is italic text</span>
```

---

## Link

**Function signature:**

```js
Link(attributes, children)
```

**Attributes:** `href`, `style` (optional).

**Example:**

```js
const linkHTML = Link({ href: "https://example.com", style: "color:#0066cc; text-decoration:underline;" }, "Visit our site");
```

**Output:**

```html
<a href="https://example.com" style="color:#0066cc; text-decoration:underline;">Visit our site</a>
```

---

## List

**Function signature:**

```js
List(attributes, children)
```

**Attributes:** optional.

**Children:** array of `ListItem` strings or elements.

**Example:**

```js
const listHTML = List({},
  ListItem({}, "Item 1") +
  ListItem({}, "Item 2")
);
```

**Output:**

```html
<ul style="padding-left:20px; margin:10px 0;">
  <li style="margin-bottom:5px;">Item 1</li>
  <li style="margin-bottom:5px;">Item 2</li>
</ul>
```

---

## ListItem

**Function signature:**

```js
ListItem(attributes, children)
```

**Example:**

```js
const itemHTML = ListItem({}, "Item 1");
```

**Output:**

```html
<li style="margin-bottom:5px;">Item 1</li>
```

---

## MainTitle

**Function signature:**

```js
MainTitle(attributes, children)
```

**Example:**

```js
const titleHTML = MainTitle({}, "Primary Heading");
```

**Output:**

```html
<h1 style="font-size:32px; margin:30px 0;">Primary Heading</h1>
```

---

## Paragraph

**Function signature:**

```js
Paragraph(attributes, children)
```

**Example:**

```js
const pHTML = Paragraph({}, "This is a paragraph of text.");
```

**Output:**

```html
<p style="margin:15px 0; line-height:1.5;">This is a paragraph of text.</p>
```


---



Certainly! Continuing with the functions for **Separator**, **Strong**, and **Subtitle**, here are their descriptions, usage examples, and generated HTML, based on the style of your code:

---

## Separator

**Function signature:**

```js
Separator(attributes)
```

**Attributes:** optional, e.g., `style`.

**Usage example:**

```js
const separatorHTML = Separator({});
```

**Generated HTML:**

```html
<hr style="border:none; border-top:1px solid #ccc; margin:20px 0;">
```

*Note:* You can pass custom styles via attributes if needed.

---

## Strong

**Function signature:**

```js
Strong(attributes, children)
```

**Attributes:** optional.

**Usage example:**

```js
const strongHTML = Strong({}, "Important text");
```

**Generated HTML:**

```html
<strong>Important text</strong>
```

---

## Subtitle

**Function signature:**

```js
Subtitle(attributes, children)
```

**Attributes:** optional.

**Usage example:**

```js
const subtitleHTML = Subtitle({}, "Subsection Title");
```

**Generated HTML:**

```html
<h3 style="font-size:20px; margin:20px 0;">Subsection Title</h3>
```

---


