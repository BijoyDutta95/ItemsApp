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

        case 'EDIT_ITEM':
            const updatedItem=action.payload;
            const updateditems=state.items.map(item =>{
                if(item.id === updatedItem.id){
                    return updatedItem;
                }
                return item
            })
            return{
                items:updateditems
            }    
        default:
            return state;
    }
}