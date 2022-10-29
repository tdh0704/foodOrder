import { fetchUser } from "../untils/fetchLocalStorageData"

const userInfo = fetchUser()

export const initialState = {
    user: userInfo,
    foodItems : null,

};