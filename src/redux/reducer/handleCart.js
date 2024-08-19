const cart = []

const handleCart = (state = cart, action) => {
  const product = action.payload
  switch (action.type) {
    case "ADDITEM":
      // Check if product already in cart
      // eslint-disable-next-line no-case-declarations
      const exist = state.find((x) => x.id === product.id)
      if (exist) {
        // Increase the quantity
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        )
      } else {
        return [...state, { ...product, qty: 1 }]
      }
      // eslint-disable-next-line no-unreachable
      break;
    case "DELITEM":
      // eslint-disable-next-line no-case-declarations
      const exist2 = state.find((x) => x.id === product.id)
      if (exist2.qty === 1) {
        return state.filter((x) => x.id !== exist2.id)
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        )
      }
      // eslint-disable-next-line no-unreachable
      break;

    default:
      return state
      // eslint-disable-next-line no-unreachable
      break;
  }
}

export default handleCart
