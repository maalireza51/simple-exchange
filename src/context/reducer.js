export const actiontypes = {
    TEXT_INPUT:"TEXT_INPUT",
    GET_LIST: "GET_LIST",
    GET_CONVERT:"GET_CONVERT",
    LOADING:"LOADING"
}

export const initialState = {
    From:null,
    To:null,
    amount:"",
    convert:null,
    currencies:[],
    loading:true
}

export function reducer(state,action){
    switch (action.type) {
        case "TEXT_INPUT":
            const {key,value} = action.payload;
            return {
                ...state,
                [key]: value
            }
        case "GET_LIST":
            const {currencies} = action.payload;
            return {
                ...state,
                currencies: currencies,
                loading:false
            }
        case "GET_CONVERT":
            const {convert} = action.payload;
            return {
                ...state,
                convert: convert,
                loading:false
            }
        case "LOADING":
            return {
                ...state,
                loading:true
            }
        default:
            break;
    }
}