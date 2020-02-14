import React, {useEffect, useState, FunctionComponent} from 'react'
import {Article, getArticles} from "../../../src/services";
import {styled} from '@material-ui/core/styles';
import {Grid, Paper, Typography} from "@material-ui/core";
import Header from "../../../src/components/Header/Header";
import Link from "next/link";
import Title from "../../../src/components/Title";

const ArticlePaper = styled(Paper)({
    padding: "10px",
    "&:hover": {
        backgroundColor: "mintcream",
        cursor: "pointer"
    }
});

const Articles: FunctionComponent = () => {
    const [articles, setArticles] = useState<[Article] | []>([]);
    useEffect(() => {
        getArticles(setArticles);
    }, []);
    return (
        <>
            <Header/>
            <Title>
                Articles
            </Title>
            <Grid container spacing={4}>
                {articles.length && articles.map((art: Article) =>
                    (<Link href={"/tasks/articles/[id]"} as={`/tasks/articles/${art.id}`}>
                        <Grid item xs={6}>
                            <ArticlePaper>{art.title}</ArticlePaper>
                        </Grid>
                    </Link>))}
            </Grid>
        </>
    )
}

export default Articles;