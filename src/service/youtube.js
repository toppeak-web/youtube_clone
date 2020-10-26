import Axios from "axios";

class Youtube {
    constructor(key) {
        this.youtube = Axios.create({
            baseURL: `https://www.googleapis.com//youtube/v3`,
            params: {key: key},
        })
    }
    async mostPopular() {
        const response = await this.youtube.get(`videos`, {
            params:{
                part: "snippet",
                chart: `mostPopular`,
                maxResults: 25,
            }
        })
        return response.data.items
    }
    async search(q) {
        const response = await this.youtube.get(`search`, {
            params:{
                part: "snippet",
                maxResults: 25,
                type:"video",
                q: q,
            }
        })
        return response.data.items.map(item => ({ ...item, id: item.id.videoId }));
    }

}
export default Youtube