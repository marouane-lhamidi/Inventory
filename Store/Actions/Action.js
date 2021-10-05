export const TOGGLE_CHANGE = 'TOGGLE_CHANGE'
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'

export const changeFunc = (id, val, user) => {
    return {
        type : TOGGLE_CHANGE,
        id,
        val,
        user
    }
}
export const addProduct = (codeBare, name, Qty, imageUrl) => {
    return {
        type : ADD_PRODUCT,
        product : {
            codeBare,
            name,
            Qty,
            imageUrl
        }
    }
}

export const deleteProduct = (id) => {
    return {
        type : DELETE_PRODUCT,
        id
    }
}