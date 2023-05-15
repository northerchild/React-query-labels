import axios from "axios";

export const githubApi = axios.create({
    baseURL:'https://api.github.com/repos/facebook/react',
    headers:{
        Authorization: 'Bearer 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'
    }
})