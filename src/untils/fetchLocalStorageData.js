export const fetchUser = () => {
    const userInfo = localStorage.getItem('user') !== "undefine" ?
    JSON.parse(localStorage.getItem('user'))
    : localStorage.clear();

    return userInfo;
};

export const fetchCart = () => {
    const cartInfo = localStorage.getItem('cartItems') !== "undefine" ?
    JSON.parse(localStorage.getItem('cartItems'))
    : localStorage.clear();

    return cartInfo ? cartInfo : [];
};