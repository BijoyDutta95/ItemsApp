export default (state,action) => {
    switch (action.type) {

        case 'REMOVE_ITEM':
            return {
                items: state.items.filter(item => {
                    return item.id !== action.payload
                })
            }

        case 'ADD_ITEM':
            return{
                items: [action.payload, ...state.items]
            }
        default:
            return state;
    }
}