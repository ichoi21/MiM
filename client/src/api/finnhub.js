import axios from "axios";

export default {
    getData: (props) =>
    axios({
        'method':'GET',
        url: `/users/quote/${props}`,
        params: props,
    })
}