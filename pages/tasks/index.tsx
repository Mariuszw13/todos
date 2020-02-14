import React, {FunctionComponent} from 'react';
import Header from "../../src/components/Header/Header";
import NavigationItem from "../../src/components/NavigationItem";
import {Box} from "@material-ui/core";
import styled from "@material-ui/core/styles/styled";

const NavigationContainer = styled(Box)({
    display: "flex",
    alignItems: "center",
    maxHeight: "90vh",
    flexDirection: "column"
});

const Tasks: FunctionComponent = () =>
    <>
        <Header/>
        <NavigationContainer>
            <NavigationItem href={"/tasks/todo"} imgSource="/todo.jpg" label="To do"/>
            <NavigationItem href={"/tasks/articles"} imgSource="/articles.jpg" label="Articles"/>
        </NavigationContainer>
    </>;

export default Tasks
