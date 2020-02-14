import React, { FunctionComponent } from 'react'
import {AppBar, Toolbar} from "@material-ui/core";
import HeaderLink from "./HeaderLink";

const Header: FunctionComponent = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <HeaderLink href="/" label="Home"/>
                <HeaderLink href="/tasks" label="Tasks"/>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
