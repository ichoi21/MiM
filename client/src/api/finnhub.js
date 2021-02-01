import axios from "axios";

export default {
    getData: (props) =>
    axios({
        method:'get',
        url: `/users/quote/${props}`,
        params: props,
    })
}