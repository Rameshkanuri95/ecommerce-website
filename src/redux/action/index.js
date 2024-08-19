// Add the Item
export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  }
}
// Delete the Item
export const delCart = (product) => {
  return {
    type: "DELETEITEM",
    payload: product,
  }
}
