import axios from 'axios'

const KEY = "AIzaSyCo9bAuI6vBYS4W9egkioL8mzAR-Y7mI6U";
const youtubeApi = axios.create({
    baseURL : "https://youtube.googleapis.com/youtube/v3",
    params : {
        part : "snippet, statistics",
        key : KEY
    }
})


export default youtubeApi;