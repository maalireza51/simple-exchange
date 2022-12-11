import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL
axios.defaults.headers.common['apikey'] = "BcRMrAYZgfmQMmNwDM9I5qLSMvlu6hiE"

export const get = async (url, config = {}) => {

    try {
        //Json To QueryString Converter
        config = '?' +
            Object.keys(config).map(function (key) {
                return encodeURIComponent(key) + '=' +
                    encodeURIComponent(config[key]);
            }).join('&');

        const response = await axios.get(url + config, {})
            .then(response => response.data)
        return response
    } catch (error) {
        throw Error(error)
    }

}