export default (state,action) => {
    switch (action.type) {

        case 'REMOVE_ITEM':
            return {
                items: state.items.filter(item => {
                    return item.id !== action.payload
                })
            }

        default:
            return state;
    }
}