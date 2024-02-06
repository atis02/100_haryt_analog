const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case 'ADDPRODUCT':
            const axistItem = state.find((x) => x.p_id === product.p_id);
            if (axistItem) {
                return state.map((x) => x.p_id === product.p_id ? { ...x, quantity: x.quantity + 1 } : x);
            }
            else {
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        quantity: 1,
                    }
                ]
            }
            break;
        case 'ALLDELETE':
            return state = [];
            break;
        case 'DELPRODUCT':
            const existItem = state.find((x) => x.p_id === product.p_id);
            return state.filter((x) => x.p_id !== existItem.p_id);
            break;
        case 'DECPRODUCT':
            const exist1 = state.find((x) => x.p_id === product.p_id);
            if (exist1.quantity != 1) {
                return state.map((x) =>
                    x.p_id === product.p_id ? { ...x, quantity: x.quantity - 1 } : x
                );
            }
            break;
        default:
            return state;
            break;
    }
}

export default handleCart;