import axios from "axios";

const http = axios.create({
    baseURL: 'https://newsapi.org/v2'
})
export class NewsApiService {
    apiKey = '2c474ace8ad3413fb73b18534c6a057e'

    getSources() {
        return http.get(`/top-headlines/sources?&apiKey=${this.apiKey}`)
    }

    getArticlesForSource(sourceId) {
        return http.get(`/top-headlines?sources=${sourceId}&apiKey=${this.apiKey}`)
    }
}