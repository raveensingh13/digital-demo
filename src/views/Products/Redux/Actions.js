/**
 * called when a particular product is clicked
 * @param {object} data 
 * @returns action which can be passed to reducer
 */
export const makeItemsData = (data) => {
  return {
      type: 'make_data',
      payload: data,
    }
}