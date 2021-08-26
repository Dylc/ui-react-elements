# UI-React-Elements

**Table of Contents**

- [Examples](#-examples--https---dylcgithubio-ui-react-elements--)
- [List of UI elements](#list-of-ui-elements)
  - [DoubleButton](#doublebutton)
    - [Config](#config)
    - [Usage](#usage)

## [Examples](https://dylc.github.io/ui-react-elements/)

## List of UI elements

### DoubleButton

[Examples](https://dylc.github.io/ui-react-elements/?path=/story/components-button--default)

The button that consist of 2 parts - one is regular button and another one (default is icon buttpon with drop down arrow)
Any of the buttons are accept all values from material

#### Config

| Value       | Optional                       | Type                    | Description                                                                      | Example                                         | More                                                          |
| ----------------------------------- | -- |----------------------- | -------------------------------------------------------------------------------- | ----------------------------------------------- | ------------------------------------------------------------- |
| mainButtonTitle  | -                  | string                  | title of the main button                                                         | `mainButtonTitle="Click me"`                    |                                                               |
| mainButtonOnClickHandler | V |  function                | handler of the main button                                                       | `mainButtonOnClickHandler={onClickHandler}`     |                                                               |
| secButtonOnClickHandler   | V | function                | handler of the secondary button - will be used only if no children passed        | `secButtonOnClickHandler={onClickHandler}`      |                                                               |
| children                 | V | React Element(s)        | the children is the content of the popper once secondaty button has been clicked | `<h3 style={{ margin: 8 }}> Hello there </h3> ` | has any ts type                                               |
| borderRadius         | V | number                  | border radius applied to outer button group                                      | `borderRadius={12}`                             | default is 4                                                  |
| buttonGroupProps   | V | ButtonGroupProps        | props from material Button group                                                 | `buttonGroupProps={{}}`                         | [Button Group API](https://material-ui.com/api/button-group/) |
| mainButtonProps       | V | ButtonProps             | props from material Button                                                       | `mainButtonProps={{}}`                          | [Button API](https://material-ui.com/api/button/)             |
| secButtonProps        | V | ButtonProps             | props from material Button                                                       | `secButtonProps={{}}`                           | [Button API](https://material-ui.com/api/button/)             |
| fadeProps              | V | FadeProps               | props from material Fade element                                                 | `fadeProps={{}}`                                | [Fade API](https://material-ui.com/api/fade/)                 |
| popperProps            | V | PopperProps             | props from material Popper                                                       | `popperProps={{}}`                              | [Popper API](https://material-ui.com/api/popper/)             |
| paperProps            | V | PaperProps              | props from material Paper                                                        | `paperProps={{}}`                               | [Paper API](https://material-ui.com/api/paper/)               |
| secButtonTitle          | V | string or material-icon | Can be string or any icon. Default is drop down arrow icon                       | `buttonGroupProps={{}}`                         |                                                               |

#### Usage

Import 
```javascript
  import { DoubleButton } from '@dylc/dylc-ui';
```

1. Minimnal Configuration
```javascript
  <DoubleButton mainButtonTitle="Merge" />
```

2. With custom events for main and secondary buttons
```javascript
  // important NOT to pass children
  // e.g DO NOT <DoubleButton ...> </DoubleButton >
  <DoubleButton 
    mainButtonTitle="Merge"
    mainButtonOnClickHandler={mainButtonOnClickHandler}
    secButtonOnClickHandler={secButtonOnClickHandler}
  />
```


3. To use default handler for secondary button
```javascript
  // important to pass children
  // it will be rendered on sec.but. handler
  <DoubleButton 
    mainButtonTitle="Merge"
    mainButtonOnClickHandler={mainButtonOnClickHandler}
  > 
    <h4> See me on secondary button click </h4>
  </DoubleButton> 
```



4. To use custom material icon for sec.button
```javascript
  // important to pass children
  // it will be rendered on sec.but. handler

  import AddIcon from '@material-ui/icons/Add';

  <DoubleButton 
    mainButtonTitle="Merge"
    mainButtonOnClickHandler={mainButtonOnClickHandler}
    secButtonTitle={<AddIcon/>} // or use string
  > 
    <h4> See me on secondary button click </h4>
  </DoubleButton> 
```