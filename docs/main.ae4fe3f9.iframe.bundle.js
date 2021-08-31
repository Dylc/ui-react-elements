(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{515:function(module,exports,__webpack_require__){__webpack_require__(516),__webpack_require__(677),__webpack_require__(678),__webpack_require__(881),__webpack_require__(882),__webpack_require__(888),__webpack_require__(889),__webpack_require__(887),__webpack_require__(884),__webpack_require__(890),__webpack_require__(885),__webpack_require__(886),__webpack_require__(891),module.exports=__webpack_require__(874)},583:function(module,exports){},678:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(370)},874:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(370).configure)([__webpack_require__(875),__webpack_require__(876)],module,!1)}).call(this,__webpack_require__(214)(module))},875:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=875},876:function(module,exports,__webpack_require__){var map={"./lib/components/Button.stories.tsx":892,"./lib/components/DoubleButton.stories.tsx":893,"./lib/components/Switch.stories.tsx":894};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=876},891:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));var client_api=__webpack_require__(929),esm=__webpack_require__(5),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(client_api.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))},892:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"DefaultWithoutBorder",(function(){return DefaultWithoutBorder})),__webpack_require__.d(__webpack_exports__,"WithDefaultBorder",(function(){return WithDefaultBorder})),__webpack_require__.d(__webpack_exports__,"WithCustomBorder",(function(){return WithCustomBorder})),__webpack_require__.d(__webpack_exports__,"ButtonList",(function(){return ButtonList}));var objectSpread2=__webpack_require__(19),Button_Button=(__webpack_require__(0),__webpack_require__(895)),makeStyles=__webpack_require__(920),jsx_runtime=__webpack_require__(28),useStyles=Object(makeStyles.a)({button:{padding:"10px 16px !important",fontFamily:"Nunito",fontWeight:"normal",fontSize:"16px !important",lineHeight:"22px !important",letterSpacing:"-1.30385e-09px !important",color:"#1B1D1F!important",margin:4,opacity:.9,textTransform:"capitalize!important","&:hover":{background:"#EEF3F9!important"},"& span":{justifyContent:"left!important"}},withBorder:{boxShadow:"0px 2px 10px rgba(0, 0, 0, 0.15)!important",border:function border(props){return props.border||"0.5px solid #D5DFE9!important"}}}),components_Button_Button=function Button(props){var classes=useStyles(props),title=props.title,border=props.border;return Object(jsx_runtime.jsx)(Button_Button.a,{className:"".concat(classes.button," ").concat(border?classes.withBorder:""),children:title})},components_Button=components_Button_Button;try{components_Button_Button.displayName="Button",components_Button_Button.__docgenInfo={description:"",displayName:"Button",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},border:{defaultValue:null,description:"",name:"border",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/lib/components/Button.tsx#Button"]={docgenInfo:components_Button_Button.__docgenInfo,name:"Button",path:"src/lib/components/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={parameters:{storySource:{source:'import React, { ComponentProps } from "react";\n\nimport { Story, Meta } from "@storybook/react";\n\n// import Paper from \'@material-ui/core/Paper\';\nimport Button from "./Button";\n\n//👇 This default export determines where your story goes in the story list\nexport default {\n  title: "Components/Button",\n  component: Button\n} as Meta;\n\nconst Template: Story<ComponentProps<typeof Button>> = (args) => (\n  <Button {...args} />\n);\n\nexport const DefaultWithoutBorder = Template.bind({});\n\nDefaultWithoutBorder.args = {\n  title: \'Click me\'\n};\n\n\nexport const WithDefaultBorder = Template.bind({});\n\nWithDefaultBorder.args = {\n  border: true,\n  title: \'Click me\'\n};\n\nexport const WithCustomBorder = Template.bind({});\n\nWithCustomBorder.args = {\n  border: \'3px solid #D5DFE9!important\',\n  title: \'Click me\'\n};\n\nexport const ButtonList = Template.bind({});\n\nButtonList.decorators = [\n  (MStory) => (\n    <div\n      style={{\n        width: "fit-content",\n        display: "flex",\n        flexDirection: "column",\n        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.15)",\n      }}\n    >\n      <MStory />\n      <MStory />\n    </div>\n  ),\n];\nButtonList.args = {\n  title: \'Option\'\n};\n\n\n',locationsMap:{"default-without-border":{startLoc:{col:55,line:14},endLoc:{col:1,line:16},startBody:{col:55,line:14},endBody:{col:1,line:16}},"with-default-border":{startLoc:{col:55,line:14},endLoc:{col:1,line:16},startBody:{col:55,line:14},endBody:{col:1,line:16}},"with-custom-border":{startLoc:{col:55,line:14},endLoc:{col:1,line:16},startBody:{col:55,line:14},endBody:{col:1,line:16}},"button-list":{startLoc:{col:55,line:14},endLoc:{col:1,line:16},startBody:{col:55,line:14},endBody:{col:1,line:16}}}}},title:"Components/Button",component:components_Button};var Button_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(components_Button,Object(objectSpread2.a)({},args))},DefaultWithoutBorder=Button_stories_Template.bind({});DefaultWithoutBorder.args={title:"Click me"};var WithDefaultBorder=Button_stories_Template.bind({});WithDefaultBorder.args={border:!0,title:"Click me"};var WithCustomBorder=Button_stories_Template.bind({});WithCustomBorder.args={border:"3px solid #D5DFE9!important",title:"Click me"};var ButtonList=Button_stories_Template.bind({});ButtonList.decorators=[function(MStory){return Object(jsx_runtime.jsxs)("div",{style:{width:"fit-content",display:"flex",flexDirection:"column",boxShadow:"0px 2px 10px rgba(0, 0, 0, 0.15)"},children:[Object(jsx_runtime.jsx)(MStory,{}),Object(jsx_runtime.jsx)(MStory,{})]})}],ButtonList.args={title:"Option"},DefaultWithoutBorder.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => (\n  <Button {...args} />\n)"}},DefaultWithoutBorder.parameters),WithDefaultBorder.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => (\n  <Button {...args} />\n)"}},WithDefaultBorder.parameters),WithCustomBorder.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => (\n  <Button {...args} />\n)"}},WithCustomBorder.parameters),ButtonList.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => (\n  <Button {...args} />\n)"}},ButtonList.parameters)},893:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"PrimaryContained",(function(){return PrimaryContained})),__webpack_require__.d(__webpack_exports__,"PrimaryOutlined",(function(){return PrimaryOutlined})),__webpack_require__.d(__webpack_exports__,"CustomRadius",(function(){return CustomRadius})),__webpack_require__.d(__webpack_exports__,"CustomTitleString",(function(){return CustomTitleString})),__webpack_require__.d(__webpack_exports__,"CustomTitleIcon",(function(){return CustomTitleIcon})),__webpack_require__.d(__webpack_exports__,"DefaultWithSimplePopper",(function(){return DefaultWithSimplePopper})),__webpack_require__.d(__webpack_exports__,"DefaultWithListPopper",(function(){return DefaultWithListPopper}));var objectSpread2=__webpack_require__(19),react=__webpack_require__(0),react_default=__webpack_require__.n(react),AttachMoney=__webpack_require__(487),AttachMoney_default=__webpack_require__.n(AttachMoney),Inbox=__webpack_require__(488),Inbox_default=__webpack_require__.n(Inbox),Drafts=__webpack_require__(489),Drafts_default=__webpack_require__.n(Drafts),List=__webpack_require__(924),ListItem=__webpack_require__(925),ListItemIcon=__webpack_require__(926),ListItemText=__webpack_require__(931),slicedToArray=__webpack_require__(118),Button=__webpack_require__(895),ButtonGroup=__webpack_require__(922),ArrowDropDown=__webpack_require__(485),ArrowDropDown_default=__webpack_require__.n(ArrowDropDown),Popper=__webpack_require__(930),Fade=__webpack_require__(928),Paper=__webpack_require__(923),makeStyles=__webpack_require__(920),jsx_runtime=__webpack_require__(28),useStyles=Object(makeStyles.a)({root:{borderRadius:function borderRadius(props){return props.borderRadius}},secButRoot:{paddingLeft:4,paddingRight:4},paper:{marginTop:8,boxShadow:"0px 2px 10px rgba(0, 0, 0, 0.15)!important",border:"0.5px solid #D5DFE9!important"}}),DoubleButton_DoubleButton=function DoubleButton(props){var classes=useStyles(props),_React$useState=react_default.a.useState(null),_React$useState2=Object(slicedToArray.a)(_React$useState,2),anchorEl=_React$useState2[0],setAnchorEl=_React$useState2[1],open=Boolean(anchorEl),_children=props.children,buttonGroupProps=props.buttonGroupProps,mainButtonOnClickHandler=props.mainButtonOnClickHandler,secButtonOnClickHandler=props.secButtonOnClickHandler,mainButtonProps=props.mainButtonProps,secButtonProps=props.secButtonProps,fadeProps=props.fadeProps,popperProps=props.popperProps,paperProps=props.paperProps,mainButtonTitle=props.mainButtonTitle,secButtonTitle=props.secButtonTitle;return Object(jsx_runtime.jsxs)("div",{children:[Object(jsx_runtime.jsxs)(ButtonGroup.a,Object(objectSpread2.a)(Object(objectSpread2.a)({classes:{root:classes.root}},buttonGroupProps),{},{children:[Object(jsx_runtime.jsx)(Button.a,Object(objectSpread2.a)(Object(objectSpread2.a)({classes:{root:classes.root},onClick:mainButtonOnClickHandler},mainButtonProps),{},{children:mainButtonTitle})),Object(jsx_runtime.jsx)(Button.a,Object(objectSpread2.a)(Object(objectSpread2.a)({classes:{root:"".concat(classes.root," ").concat("string"==typeof secButtonTitle?"":classes.secButRoot)},onClick:_children?function(e){return function handleOnSecButtonClick(event){setAnchorEl(anchorEl?null:event.currentTarget)}(e)}:secButtonOnClickHandler},secButtonProps),{},{children:secButtonTitle||Object(jsx_runtime.jsx)(ArrowDropDown_default.a,{})}))]})),Object(jsx_runtime.jsx)(Popper.a,Object(objectSpread2.a)(Object(objectSpread2.a)({open:open,anchorEl:anchorEl,transition:!0},popperProps),{},{children:function children(_ref){var TransitionProps=_ref.TransitionProps;return Object(jsx_runtime.jsx)(Fade.a,Object(objectSpread2.a)(Object(objectSpread2.a)(Object(objectSpread2.a)({},TransitionProps),{},{timeout:350},fadeProps),{},{children:Object(jsx_runtime.jsx)(Paper.a,Object(objectSpread2.a)(Object(objectSpread2.a)({className:classes.paper},paperProps),{},{children:_children}))}))}}))]})},components_DoubleButton=DoubleButton_DoubleButton;try{DoubleButton_DoubleButton.displayName="DoubleButton",DoubleButton_DoubleButton.__docgenInfo={description:"",displayName:"DoubleButton",props:{mainButtonTitle:{defaultValue:null,description:"",name:"mainButtonTitle",required:!0,type:{name:"string"}},mainButtonOnClickHandler:{defaultValue:null,description:"",name:"mainButtonOnClickHandler",required:!1,type:{name:"(() => void)"}},secButtonOnClickHandler:{defaultValue:null,description:"",name:"secButtonOnClickHandler",required:!1,type:{name:"(() => void)"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"number"}},buttonGroupProps:{defaultValue:null,description:"",name:"buttonGroupProps",required:!1,type:{name:'ButtonGroupProps<"div", {}>'}},mainButtonProps:{defaultValue:null,description:"",name:"mainButtonProps",required:!1,type:{name:'ButtonProps<"button", {}>'}},secButtonProps:{defaultValue:null,description:"",name:"secButtonProps",required:!1,type:{name:'ButtonProps<"button", {}>'}},fadeProps:{defaultValue:null,description:"",name:"fadeProps",required:!1,type:{name:"FadeProps"}},popperProps:{defaultValue:null,description:"",name:"popperProps",required:!1,type:{name:"PopperProps"}},paperProps:{defaultValue:null,description:"",name:"paperProps",required:!1,type:{name:"PaperProps"}},secButtonTitle:{defaultValue:null,description:"",name:"secButtonTitle",required:!1,type:{name:'string | ReactElement<SvgIconProps<"svg", {}>, string | JSXElementConstructor<any>>'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/lib/components/DoubleButton.tsx#DoubleButton"]={docgenInfo:DoubleButton_DoubleButton.__docgenInfo,name:"DoubleButton",path:"src/lib/components/DoubleButton.tsx#DoubleButton"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={parameters:{storySource:{source:'import React, { ComponentProps } from "react";\n\nimport { Story, Meta } from "@storybook/react";\n\nimport AttachMoneyIcon from "@material-ui/icons/AttachMoney";\nimport InboxIcon from "@material-ui/icons/Inbox";\nimport DraftsIcon from "@material-ui/icons/Drafts";\nimport { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";\n\nimport DoubleButton from "./DoubleButton";\n\n//👇 This default export determines where your story goes in the story list\nexport default {\n  title: "Components/DoubleButton",\n  component: DoubleButton,\n} as Meta;\n\n//👇 We create a “template” of how args map to rendering\nconst Template: Story<ComponentProps<typeof DoubleButton>> = (args) => (\n  <DoubleButton {...args} />\n);\n\nexport const Default = Template.bind({});\n\nDefault.args = {\n  mainButtonTitle: "Merge",\n};\n\nexport const PrimaryContained = Template.bind({});\n\nPrimaryContained.args = {\n  ...Default.args,\n  buttonGroupProps: {\n    color: "primary",\n    variant: "contained",\n  },\n};\n\nexport const PrimaryOutlined = Template.bind({});\n\nPrimaryOutlined.args = {\n  ...Default.args,\n  buttonGroupProps: {\n    color: "primary",\n    variant: "outlined",\n  },\n};\n\nexport const CustomRadius = Template.bind({});\n\nCustomRadius.args = {\n  ...Default.args,\n  borderRadius: 22,\n};\n\nexport const CustomTitleString = Template.bind({});\n\nCustomTitleString.args = {\n  ...Default.args,\n  secButtonTitle: "More",\n};\n\nexport const CustomTitleIcon = Template.bind({});\n\nCustomTitleIcon.args = {\n  ...Default.args,\n  secButtonTitle: <AttachMoneyIcon />,\n};\n\n//👇 We create a “template” of how args map to rendering\nconst TemplateWithChildren: Story<ComponentProps<typeof DoubleButton>> = (\n  args\n) => (\n  <DoubleButton {...args}>\n    <p style={{ margin: 8 }}> Hello there </p>\n  </DoubleButton>\n);\n\nexport const DefaultWithSimplePopper = TemplateWithChildren.bind({});\n\nDefaultWithSimplePopper.args = {\n  ...PrimaryOutlined.args,\n};\n//👇 We create a “template” of how args map to rendering\nconst TemplateWithListChildren: Story<ComponentProps<typeof DoubleButton>> = (\n  args\n) => (\n  <DoubleButton {...args}>\n    <List component="nav" aria-label="main mailbox folders">\n      <ListItem button>\n        <ListItemIcon>\n          <InboxIcon />\n        </ListItemIcon>\n        <ListItemText primary="Inbox" />\n      </ListItem>\n      <ListItem button>\n        <ListItemIcon>\n          <DraftsIcon />\n        </ListItemIcon>\n        <ListItemText primary="Drafts" />\n      </ListItem>\n    </List>\n  </DoubleButton>\n);\n\nexport const DefaultWithListPopper = TemplateWithListChildren.bind({});\n\nDefaultWithListPopper.args = {\n  ...PrimaryOutlined.args,\n};\n',locationsMap:{default:{startLoc:{col:61,line:19},endLoc:{col:1,line:21},startBody:{col:61,line:19},endBody:{col:1,line:21}},"primary-contained":{startLoc:{col:61,line:19},endLoc:{col:1,line:21},startBody:{col:61,line:19},endBody:{col:1,line:21}},"primary-outlined":{startLoc:{col:61,line:19},endLoc:{col:1,line:21},startBody:{col:61,line:19},endBody:{col:1,line:21}},"custom-radius":{startLoc:{col:61,line:19},endLoc:{col:1,line:21},startBody:{col:61,line:19},endBody:{col:1,line:21}},"custom-title-string":{startLoc:{col:61,line:19},endLoc:{col:1,line:21},startBody:{col:61,line:19},endBody:{col:1,line:21}},"custom-title-icon":{startLoc:{col:61,line:19},endLoc:{col:1,line:21},startBody:{col:61,line:19},endBody:{col:1,line:21}},"default-with-simple-popper":{startLoc:{col:73,line:71},endLoc:{col:1,line:77},startBody:{col:73,line:71},endBody:{col:1,line:77}},"default-with-list-popper":{startLoc:{col:77,line:85},endLoc:{col:1,line:104},startBody:{col:77,line:85},endBody:{col:1,line:104}}}}},title:"Components/DoubleButton",component:components_DoubleButton};var DoubleButton_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(components_DoubleButton,Object(objectSpread2.a)({},args))},Default=DoubleButton_stories_Template.bind({});Default.args={mainButtonTitle:"Merge"};var PrimaryContained=DoubleButton_stories_Template.bind({});PrimaryContained.args=Object(objectSpread2.a)(Object(objectSpread2.a)({},Default.args),{},{buttonGroupProps:{color:"primary",variant:"contained"}});var PrimaryOutlined=DoubleButton_stories_Template.bind({});PrimaryOutlined.args=Object(objectSpread2.a)(Object(objectSpread2.a)({},Default.args),{},{buttonGroupProps:{color:"primary",variant:"outlined"}});var CustomRadius=DoubleButton_stories_Template.bind({});CustomRadius.args=Object(objectSpread2.a)(Object(objectSpread2.a)({},Default.args),{},{borderRadius:22});var CustomTitleString=DoubleButton_stories_Template.bind({});CustomTitleString.args=Object(objectSpread2.a)(Object(objectSpread2.a)({},Default.args),{},{secButtonTitle:"More"});var CustomTitleIcon=DoubleButton_stories_Template.bind({});CustomTitleIcon.args=Object(objectSpread2.a)(Object(objectSpread2.a)({},Default.args),{},{secButtonTitle:Object(jsx_runtime.jsx)(AttachMoney_default.a,{})});var DefaultWithSimplePopper=function TemplateWithChildren(args){return Object(jsx_runtime.jsx)(components_DoubleButton,Object(objectSpread2.a)(Object(objectSpread2.a)({},args),{},{children:Object(jsx_runtime.jsx)("p",{style:{margin:8},children:" Hello there "})}))}.bind({});DefaultWithSimplePopper.args=Object(objectSpread2.a)({},PrimaryOutlined.args);var DefaultWithListPopper=function TemplateWithListChildren(args){return Object(jsx_runtime.jsx)(components_DoubleButton,Object(objectSpread2.a)(Object(objectSpread2.a)({},args),{},{children:Object(jsx_runtime.jsxs)(List.a,{component:"nav","aria-label":"main mailbox folders",children:[Object(jsx_runtime.jsxs)(ListItem.a,{button:!0,children:[Object(jsx_runtime.jsx)(ListItemIcon.a,{children:Object(jsx_runtime.jsx)(Inbox_default.a,{})}),Object(jsx_runtime.jsx)(ListItemText.a,{primary:"Inbox"})]}),Object(jsx_runtime.jsxs)(ListItem.a,{button:!0,children:[Object(jsx_runtime.jsx)(ListItemIcon.a,{children:Object(jsx_runtime.jsx)(Drafts_default.a,{})}),Object(jsx_runtime.jsx)(ListItemText.a,{primary:"Drafts"})]})]})}))}.bind({});DefaultWithListPopper.args=Object(objectSpread2.a)({},PrimaryOutlined.args),Default.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => (\n  <DoubleButton {...args} />\n)"}},Default.parameters),PrimaryContained.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => (\n  <DoubleButton {...args} />\n)"}},PrimaryContained.parameters),PrimaryOutlined.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => (\n  <DoubleButton {...args} />\n)"}},PrimaryOutlined.parameters),CustomRadius.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => (\n  <DoubleButton {...args} />\n)"}},CustomRadius.parameters),CustomTitleString.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => (\n  <DoubleButton {...args} />\n)"}},CustomTitleString.parameters),CustomTitleIcon.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => (\n  <DoubleButton {...args} />\n)"}},CustomTitleIcon.parameters),DefaultWithSimplePopper.parameters=Object(objectSpread2.a)({storySource:{source:"(\n  args\n) => (\n  <DoubleButton {...args}>\n    <p style={{ margin: 8 }}> Hello there </p>\n  </DoubleButton>\n)"}},DefaultWithSimplePopper.parameters),DefaultWithListPopper.parameters=Object(objectSpread2.a)({storySource:{source:'(\n  args\n) => (\n  <DoubleButton {...args}>\n    <List component="nav" aria-label="main mailbox folders">\n      <ListItem button>\n        <ListItemIcon>\n          <InboxIcon />\n        </ListItemIcon>\n        <ListItemText primary="Inbox" />\n      </ListItem>\n      <ListItem button>\n        <ListItemIcon>\n          <DraftsIcon />\n        </ListItemIcon>\n        <ListItemText primary="Drafts" />\n      </ListItem>\n    </List>\n  </DoubleButton>\n)'}},DefaultWithListPopper.parameters)},894:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"MultiItems",(function(){return MultiItems})),__webpack_require__.d(__webpack_exports__,"Selected",(function(){return Selected}));var objectSpread2=__webpack_require__(19),react=__webpack_require__(0),slicedToArray=__webpack_require__(118),makeStyles=__webpack_require__(920),Grid=__webpack_require__(927),Button=__webpack_require__(895),jsx_runtime=__webpack_require__(28),useStyles=Object(makeStyles.a)({fitContent:{width:"fit-content"},container:{backgroundColor:"#EEEEEF",borderRadius:100,padding:2},selected:{fontWeight:600,color:"#2A323C !important",backgroundColor:"#FFFFFF !important",background:"#FFFFFF",boxShadow:"0px 2px 10px rgba(0, 0, 0, 0.15)!important",borderRadius:100,"&:hover":{borderRadius:100}},button:{"&:hover":{borderRadius:100}}}),Switch_Switch=function Switch(props){var classes=useStyles(props),items=props.items,_useState=Object(react.useState)(props.selected||0),_useState2=Object(slicedToArray.a)(_useState,2),selected=_useState2[0],setSelected=_useState2[1];return Object(jsx_runtime.jsx)(Grid.a,{container:!0,className:"".concat(classes.fitContent," ").concat(classes.container),children:items.map((function(item,key){return Object(jsx_runtime.jsx)(Grid.a,{item:!0,children:Object(jsx_runtime.jsx)(Button.a,{className:"".concat(classes.button," ").concat(selected===key?classes.selected:""),disableFocusRipple:!0,onClick:function onClick(){return function handleOnSelectClick(val,handler){setSelected(val),handler()}(key,item.handler)},children:item.label})},item.label)}))})},components_Switch=Switch_Switch;try{Switch_Switch.displayName="Switch",Switch_Switch.__docgenInfo={description:"",displayName:"Switch",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"IItem[]"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/lib/components/Switch.tsx#Switch"]={docgenInfo:Switch_Switch.__docgenInfo,name:"Switch",path:"src/lib/components/Switch.tsx#Switch"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={parameters:{storySource:{source:"import React, { ComponentProps } from \"react\";\n\nimport { Story, Meta } from \"@storybook/react\";\n\n// import Paper from '@material-ui/core/Paper';\nimport Switch from \"./Switch\";\n\n//👇 This default export determines where your story goes in the story list\nexport default {\n  title: \"Components/Switch\",\n  component: Switch\n} as Meta;\n\nconst Template: Story<ComponentProps<typeof Switch>> = (args) => (\n  <Switch {...args} />\n);\n\nexport const Default = Template.bind({});\n\nDefault.args = {\n  items: [\n    {\n      label: 'Start',\n      handler: () => {console.log('Start')}\n    },\n    {\n      label: 'End',\n      handler: () => {console.log('End')}\n    }\n  ]\n};\n\n\nexport const MultiItems = Template.bind({});\n\nMultiItems.args = {\n  items: [\n    {\n      label: 'First',\n      handler: () => {console.log('First')}\n    },\n    {\n      label: 'Second',\n      handler: () => {console.log('Second')}\n    },\n    {\n      label: 'Third',\n      handler: () => {console.log('Third')}\n    }\n  ]\n};\n\n\nexport const Selected = Template.bind({});\n\nSelected.args = {\n  items: [\n    {\n      label: 'First',\n      handler: () => {console.log('First')}\n    },\n    {\n      label: 'Second',\n      handler: () => {console.log('Second')}\n    },\n    {\n      label: 'Third',\n      handler: () => {console.log('Third')}\n    }\n  ],\n  selected: 1\n};\n\n\n\n",locationsMap:{default:{startLoc:{col:55,line:14},endLoc:{col:1,line:16},startBody:{col:55,line:14},endBody:{col:1,line:16}},"multi-items":{startLoc:{col:55,line:14},endLoc:{col:1,line:16},startBody:{col:55,line:14},endBody:{col:1,line:16}},selected:{startLoc:{col:55,line:14},endLoc:{col:1,line:16},startBody:{col:55,line:14},endBody:{col:1,line:16}}}}},title:"Components/Switch",component:components_Switch};var Switch_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(components_Switch,Object(objectSpread2.a)({},args))},Default=Switch_stories_Template.bind({});Default.args={items:[{label:"Start",handler:function handler(){console.log("Start")}},{label:"End",handler:function handler(){console.log("End")}}]};var MultiItems=Switch_stories_Template.bind({});MultiItems.args={items:[{label:"First",handler:function handler(){console.log("First")}},{label:"Second",handler:function handler(){console.log("Second")}},{label:"Third",handler:function handler(){console.log("Third")}}]};var Selected=Switch_stories_Template.bind({});Selected.args={items:[{label:"First",handler:function handler(){console.log("First")}},{label:"Second",handler:function handler(){console.log("Second")}},{label:"Third",handler:function handler(){console.log("Third")}}],selected:1},Default.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => (\n  <Switch {...args} />\n)"}},Default.parameters),MultiItems.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => (\n  <Switch {...args} />\n)"}},MultiItems.parameters),Selected.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => (\n  <Switch {...args} />\n)"}},Selected.parameters)}},[[515,2,3]]]);