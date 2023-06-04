import axios from "axios";

export const githubApi = axios.create({
    baseURL:'https://api.github.com/repos/facebook/react',
    headers:{
        Authorization: 'Bearer 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'
    }
})