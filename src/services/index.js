import axios from "axios";

export default {
    // products() {
    //     let apiURL = 'http://localhost:3000/';
    //     return axios.get(apiURL + `products/`)
    // },
    productsPost(post) {
        let apiURL = 'http://localhost:3000/';
        return axios.post(apiURL + `products/${post}`)
    },
    // uploads(images) {
    //     let apiURL = 'http://localhost:3000/';
    //     return axios.get(apiURL + `uploads/${images}`)
    // },
    // search(texts) {
    //     let apiURL = 'http://localhost:3000/';
    //     return axios.get(apiURL + `products/search/${texts}`)
    // }
}