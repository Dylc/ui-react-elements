import { jsxs, jsx } from 'react/jsx-runtime';
import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var useStyles = makeStyles({
    root: {
        borderRadius: function (props) { return props.borderRadius; },
    },
    secButRoot: {
        paddingLeft: 4,
        paddingRight: 4,
    },
    paper: {
        marginTop: 8,
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.15)!important",
        border: "0.5px solid #D5DFE9!important",
    },
});
var DoubleButton = function (props) {
    var classes = useStyles(props);
    var _a = React.useState(null), anchorEl = _a[0], setAnchorEl = _a[1];
    var open = Boolean(anchorEl);
    var children = props.children, buttonGroupProps = props.buttonGroupProps, mainButtonOnClickHandler = props.mainButtonOnClickHandler, secButtonOnClickHandler = props.secButtonOnClickHandler, mainButtonProps = props.mainButtonProps, secButtonProps = props.secButtonProps, fadeProps = props.fadeProps, popperProps = props.popperProps, paperProps = props.paperProps, mainButtonTitle = props.mainButtonTitle, secButtonTitle = props.secButtonTitle;
    var handleOnSecButtonClick = function (event) {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    return (jsxs("div", { children: [jsxs(ButtonGroup, __assign({ classes: { root: classes.root } }, buttonGroupProps, { children: [jsx(Button, __assign({ classes: { root: classes.root }, onClick: mainButtonOnClickHandler }, mainButtonProps, { children: mainButtonTitle }), void 0), jsx(Button, __assign({ classes: {
                            root: classes.root + " " + (typeof secButtonTitle === "string" ? "" : classes.secButRoot),
                        }, onClick: children
                            ? function (e) { return handleOnSecButtonClick(e); }
                            : secButtonOnClickHandler }, secButtonProps, { children: secButtonTitle || jsx(ArrowDropDownIcon, {}, void 0) }), void 0)] }), void 0), jsx(Popper, __assign({ open: open, anchorEl: anchorEl, transition: true }, popperProps, { children: function (_a) {
                    var TransitionProps = _a.TransitionProps;
                    return (jsx(Fade, __assign({}, TransitionProps, { timeout: 350 }, fadeProps, { children: jsx(Paper, __assign({ className: classes.paper }, paperProps, { children: children }), void 0) }), void 0));
                } }), void 0)] }, void 0));
};

export { DoubleButton };
