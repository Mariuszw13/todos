import axios, {AxiosInstance} from 'axios'

type Response = {
    config: object,
    headers: object,
    request: XMLHttpRequest,
    status: number,
    statusText: string
}

type ArticlesResponse = Response & {
    data: [Article]
}

type SingleArticleResponse = Response & {
    data: Article
}

export type Article = {
    userId: number,
    id: number,
    title: string,
    body: string
}

const instance: AxiosInstance = axios.create({baseURL: "https://jsonplaceholder.typicode.com"});

export const getArticles = async (onSuccess: (result: [Article]) => void) => {
    try {
        const response: ArticlesResponse = await instance.get("/posts");
        onSuccess(response.data)
    } catch (e) {
        console.log(e)
    }
};

export const getArticle = async (articleId: number, onSuccess: (result: Article) => void) => {
    try {
        const response: SingleArticleResponse = await instance.get(`/posts/${articleId}`);
        onSuccess(response.data)
    } catch (e) {
        console.log(e)
    }
};