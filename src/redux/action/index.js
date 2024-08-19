// Add the Item
export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  }
}
// Delete the Item
export const delcart = (product) => {
  return {
    type: "DELETEITEM",
    payload: product,
  }
}
