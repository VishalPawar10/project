export const cartReducer = (state, action) => {
    switch (action.type) {
        // case "ADD_TO_CART":
        //     return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
        case "ADD_TO_CART":
            const existingProduct = state.cart.find((item) => item.product_id === action.payload.product_id);
        
            if (existingProduct) {
                // If the product already exists in the cart, update the quantity
                const updatedCart = state.cart.map((item) =>
                    item.product_id === action.payload.product_id ? { ...item, qty: item.qty + 1 } : item
                );
        
                return { ...state, cart: updatedCart };
            } else {
                // If the product does not exist in the cart, add it with a quantity of 1
                return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
            }
        


        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter((c) => c.product_id !== action.payload.product_id),
            };
        // case "CHANGE_CART_QTY":
        //     return {
        //         ...state,
        //         cart: state.cart.filter((c) =>
        //             c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        //         ),
        //     };
        case "CHANGE_CART_QTY":
    return {
        ...state,
        cart: state.cart.map((product) =>
            product.product_id === action.payload.id
                ? { ...product, qty: action.payload.qty }
                : product
        ),
    };

        default:
            return state;
    }
};

export const productReducer = (state, action) => {
    switch (action.type) {
        case "SORT_BY_PRICE":
            return { ...state, sort: action.payload };
        case "FILTER_BY_STOCK":
            return { ...state, byStock: !state.byStock };

        case "FILTER_BY_RATING":
            return { ...state, byRating: action.payload };
        case "FILTER_BY_SEARCH":
            return { ...state, searchQuery: action.payload };
        case "CLEAR_FILTERS":
            return { byStock: false, byFastDelivery: false, byRating: 0 };
        default:
            return state;
    }
};
