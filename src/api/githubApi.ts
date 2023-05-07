import axios from "axios";

export const githubApi = axios.create({
    baseURL:'https://api.github.com/repos/facebook/react',
    headers:{
        Authorization: 'Bearer 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'
    }
})