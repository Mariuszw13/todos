import React, {FunctionComponent, useEffect, useState} from 'react'
import {useRouter} from 'next/router';
import Header from "../../../src/components/Header/Header";
import {Article, getArticle} from "../../../src/services";
import {Container} from "@material-ui/core";
import Title from "../../../src/components/Title";

const ArticlePage: FunctionComponent = () => {
    const router = useRouter();
    const [article, setArticle] = useState<Article | null>(null);
    useEffect(() => {
        getArticle(+router.query.id, setArticle);
    }, [router.query.id]);
    return (
        <>
            <Header/>
            <Container>
                <Title>
                    {article && article.title}
                </Title>
                {article && article.body}
            </Container>
        </>
    );
};

export default ArticlePage;