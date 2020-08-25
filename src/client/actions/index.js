import axios from 'axios'

export const fetchUsers = () => async dispatch => {
    const res = await axios.get("http://react-ssr-api.com/users")
    
    dispatch({
        type : "FETCH_USERS",
        payload : res
    })
}