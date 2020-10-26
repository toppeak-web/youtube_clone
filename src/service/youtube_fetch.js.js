class Youtubefetch {
    constructor(key) {
        this.key = key;
        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
    }
    async mostPopular() {
        const response = await fetch(`https://www.googleapis.com//youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&key=${this.key}`,
            this.getRequestOptions);
        const result = await response.json();
        return result.items;
    }
    async search(q) {
        const response = await fetch(`https://www.googleapis.com//youtube/v3/search?part=snippet&maxResults=25&q=${q}&type=video&key=${this.key}`,
            this.getRequestOptions);
        const result = await response.json();
        return result.items.map(item => ({ ...item, id: item.id.videoId }));
    }

}
export default Youtube