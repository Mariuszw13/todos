import React, {FunctionComponent, ReactNode} from 'react'
import {styled, Typography} from "@material-ui/core";

type TitleProps = {
    children: ReactNode
}

const StyledTitle = styled(Typography)({
    padding: "10px",
    textAlign: "center",
    fontSize: "20px",
    fontWeight: 600,
});

const Title: FunctionComponent<TitleProps> = ({children}) => {
    return (<StyledTitle gutterBottom>
        {children}
    </StyledTitle>)
}

export default Title;