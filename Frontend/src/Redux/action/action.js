// add product to cart
export const addProduct = (product) => {
    return {
        type: 'ADDPRODUCT',
        payload: product
    }
}
// delete product to cart
export const delProduct = (product) => {
    return {
        type: 'DELPRODUCT',
        payload: product
    }
}
// decrease product to cart
export const decreaseProduct = (product) => {
    return {
        type: 'DECPRODUCT',
        payload: product
    }
}
// delete all products
export const allDelete = (product) => {
    return {
        type: 'ALLDELETE',
        payload: product
    }
}