export const addItemToCart = (currentCartItems, cartItemToAdd) => {
  const existingCartItem = currentCartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return currentCartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...currentCartItems, { ...cartItemToAdd, quantity: 1 }];
};
