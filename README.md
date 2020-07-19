# <>CSS</>

**CSS-in-JSX** is yet another approach for style in react. 

> ⚠️ This is a proof of concept and should not be used on any production website. ⚠️

## Principles

### Interpolation
Unlike most CSS-in-JS libraries, styles interpolation is not powered by template literals, but rather by JSX itself. That means:

```js
`color: ${PRIMARY_COLOR};`
````

Becomes:

```jsx
<>color: {LINK_COLOR};</>
```

The interpolation is  powered by the `{`AssignmentExpression`}` from jsx.

```js
css`color: ${props => props.active ? PRIMARY_COLOR: 'white'};`
````

Becomes:

```jsx
<>color: {props.active ? PRIMARY_COLOR: 'white'};</>
```

### CSS blocks

CSS blocks are usually shaped using the `{` and `}` characters.  Since they are used for JSX assignment expressions, we leverage on fragments in order to write our CSS blocks. 

#### Why fragments ?

Fragments create quite a small footprint when writing CSS. With indentation, it becomes as readable as the original CSS syntax.

Fragments can also be used for interpolated CSS properties. This creates a nice visual consistency:
```jsx
<>
	display: block;
	color: white;
	&:hover <>
		color: blue;
	</>
	{active && <>
		color: red;
	</>}
</>

```

### Styling a component

In order to style a react component, this component need to be "stylable". When a component is stylable, it accepts a style tag as children.

Base stylable element can be created like this.

```jsx
import Stylable from 'css-in-jsx';

function MyComponent() {
    return (
        <Stylable.div>
          <style>
              text-align: center;
              .link <>
                color: {LINK_COLOR};
              </>
          </style>
          Lorem <a className='link'>ipsum</a>...
        </Stylable.div>
    );
}
```

You can also style any component that accept a `className` prop like so:

```jsx
import Stylable from 'css-in-jsx';
import Card from './components/card'; 

const StylableCard = Stylable(Card);

function MyComponent() {
    return (
        <StylableCard>
          <style>
              text-align: center;
              .link <>
                color: {LINK_COLOR};
              </>
          </style>
          Lorem <a className='link'>ipsum</a>...
        </StylableCard>
    );
}
```

## Motivations

As much as I find the styled-components powerful, I do not find it pleasing to write nor to read.

Template litterals are especially a pain in the ass to write using AZERTY keyboard and this was the initial motivation behind the concept of CSS in JSX.

I started to ask myself, how a frictionless syntax for CSS in JS would look like ?

The idea of styles in JSX was a good place to start. For example, [styled-jsx](https://github.com/vercel/styled-jsx) showcases the benefits of not naming, neither the styles, nor the props used for interpolation.

However the use of template litterals was a deal breaker for me. From there came the idea of using fragments to structure the CSS.

## Evolution

In order to make this tool production-ready, some milestones need to be overcame.

- implement tests
- add proper module packaging
- improve fragments parsing (the initial goal was to create a stylis plugin)
- add proper styles injection which support SSR
- create documentation
- ...

## How to use

If you want to try this concept, please first clone this repository.

Then build the library.
```sh
npm run-script build
```

Link the module globally.
```sh
npm link
```

In your project link the module.
```sh
npm link css-in-jsx
```

You should now be able to import the module in your project:
```js
import Stylable from 'css-in-jsx';
```
