import React, {FunctionComponent} from 'react'
import Link from 'next/link';
import {makeStyles} from '@material-ui/core/styles';

type NavigationItemProps = {
    href: string,
    imgSource: string,
    label: string
}

const useStyles = makeStyles({
    container: {
        position: "relative",
        display: "inline-block",
        "&:hover img": {
            opacity: '0.6'
        },
        "&:hover div": {
            opacity: "1",
            width: "100%",
            cursor: "pointer",
        }
    },
    image: {
        opacity: '1',
        display: "block",
        width: "100%",
        height: "auto",
        transition: ".5s ease",
        backfaceVisibility: "hidden",
    },
    textBlock: {
        position: "absolute",
        bottom: "0",
        left: "0",
        right: "0",
        overflow: "hidden",
        width: "0",
        height: "100%",
        transition: ".5s ease"
    },
    text: {
        backgroundColor: "rgba(50, 50, 50, 0.8)",
        color: "white",
        fontSize: "20px",
        fontWeight: "bold",
        position: "absolute",
        padding: "20px",
        width: "300px",
        textAlign: "center",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    }
});
const NavigationItem: FunctionComponent<NavigationItemProps> = ({href, imgSource, label}) => {
    const classes = useStyles();
    return (
        <Link href={href}>
            <div className={classes.container}>
                <img className={classes.image} src={imgSource} alt=""/>
                <div className={classes.textBlock}>
                    <div className={classes.text}>{label}</div>
                </div>
            </div>
        </Link>
    );
};

export default NavigationItem;