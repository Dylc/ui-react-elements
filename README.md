# UI-React-Elements

**Table of Contents**

- [Examples](#-examples--https---dylcgithubio-ui-react-elements--)
- [List of UI elements](#list-of-ui-elements)
  - [DoubleButton](#doublebutton)
    - [Config](#config)

## [Examples](https://dylc.github.io/ui-react-elements/)

## List of UI elements

### DoubleButton

[Example](https://dylc.github.io/ui-react-elements/?path=/story/components-button--default)

The button that consist of 2 parts - one is regular button and another one (default is icon buttpon with drop down arrow)
Any of the buttons are accept all values from material

#### Config

| Value                               | Type                    | Description                                                                      | Example                                         | More                                                          |
| ----------------------------------- | ----------------------- | -------------------------------------------------------------------------------- | ----------------------------------------------- | ------------------------------------------------------------- |
| mainButtonTitle                     | string                  | title of the main button                                                         | `mainButtonTitle="Click me"`                    |                                                               |
| mainButtonOnClickHandler (optional) | function                | handler of the main button                                                       | `mainButtonOnClickHandler={onClickHandler}`     |                                                               |
| secButtonOnClickHandler (optional)  | function                | handler of the secondary button - will be used only if no children passed        | `secButtonOnClickHandler={onClickHandler}`      |                                                               |
| children (optional)                 | React Element(s)        | the children is the content of the popper once secondaty button has been clicked | `<h3 style={{ margin: 8 }}> Hello there </h3> ` | has any ts type                                               |
| borderRadius (optional)             | number                  | border radius applied to outer button group                                      | `borderRadius={12}`                             | default is 4                                                  |
| buttonGroupProps (optional)         | ButtonGroupProps        | props from material Button group                                                 | `buttonGroupProps={{}}`                         | [Button Group API](https://material-ui.com/api/button-group/) |
| mainButtonProps (optional)          | ButtonProps             | props from material Button                                                       | `mainButtonProps={{}}`                          | [Button API](https://material-ui.com/api/button/)             |
| secButtonProps (optional)           | ButtonProps             | props from material Button                                                       | `secButtonProps={{}}`                           | [Button API](https://material-ui.com/api/button/)             |
| fadeProps (optional)                | FadeProps               | props from material Fade element                                                 | `fadeProps={{}}`                                | [Fade API](https://material-ui.com/api/fade/)                 |
| popperProps (optional)              | PopperProps             | props from material Popper                                                       | `popperProps={{}}`                              | [Popper API](https://material-ui.com/api/popper/)             |
| paperProps (optional)               | PaperProps              | props from material Paper                                                        | `paperProps={{}}`                               | [Paper API](https://material-ui.com/api/paper/)               |
| secButtonTitle (optional)           | string or material-icon | Can be string or any icon. Default is drop down arrow icon                       | `buttonGroupProps={{}}`                         |                                                               |
