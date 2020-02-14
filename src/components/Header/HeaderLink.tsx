import React, {FunctionComponent} from 'react'
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import {Typography} from "@material-ui/core";

const useStyles = makeStyles({
    link: {
        padding: '10px',
        "& a": {
            color: 'white',
            textDecoration: 'none',
            "&:hover": {
                color: 'coral'
            }
        },
    },
});

type HeaderLinkProps = {
    href: string,
    label: string
}

const HeaderLink: FunctionComponent<HeaderLinkProps> = ({href, label}) => {
    const classes = useStyles();
    return (
        <Typography className={classes.link} variant="h6">
            <Link href={href}>
                <a>{label}</a>
            </Link>
        </Typography>
    );
};

export default HeaderLink;