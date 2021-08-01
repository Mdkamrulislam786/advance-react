## Styled Components Docs + Best practices

Getting started
Docs: https://styled-components.com/docs

```
# with npm
npm install --save styled-components

# with yarn
yarn add styled-components
```

### Rules

1. Define Styled Components outside of the render method

You can write Regular CSS in Styled component and also SCSS and it will work just fine.

<b> Pass props </b>

```
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
`;

render(
  <div>
    <Button>Normal</Button>
    <Button primary>Primary</Button>
  </div>
);
```

<b>Extend styles </b>

```
// The Button from the last section without the interpolations
const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;
```

You can use the "as" polymorphic prop to dynamically swap out the element that receives the styles you wrote:

```
 <TomatoButton as="a" href="#">Link with Tomato Button styles</TomatoButton>
```

This works perfectly fine with custom components too!

```
const ReversedButton = props => <Button {...props} children={props.children.split('').reverse()} />

<Button as={ReversedButton}>Custom Button with Normal Button styles</Button>
```

<b>Pseudoelements, pseudoselectors, and nesting </b>
https://sass-lang.com/documentation/style-rules  
https://gist.github.com/hofmannsven/b219051467f86f2ac469

<b>Theming</b>  
https://css-tricks.com/theming-and-theme-switching-with-react-and-styled-components/#top-of-site

### Blog

https://www.robinwieruch.de/styled-components  
https://css-tricks.com/theming-and-theme-switching-with-react-and-styled-components/#top-of-site
