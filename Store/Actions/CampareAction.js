export const TOGGLE_CAMPER = 'TOGGLE_CAMPER'

export const camperFunc = (stock, inventory) => {
    console.log('hi')

    return {
        type : TOGGLE_CAMPER,
        stock,
        inventory
    }
}
