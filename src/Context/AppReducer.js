export default (state,action) => {
    
    console.log("State in App Reducer:",state);
    switch (action.type) {
        
        case 'REMOVE_ITEM':
            
            return {
                
                items: state.items.filter(item => {
                    return item.id !== action.payload
                })    
            }
        
        case 'ADD_ITEM':
            return{
                items: [action.payload, ...state.items],
                deletionArray:state.deletionArray
            }

        case 'EDIT_ITEM':
            const updatedItem=action.payload;
            console.log("deletion array in EDIT Item is: ", state.deletionArray);
            const updateditems=state.items.map(item =>{
                if(item.id === updatedItem.id){
                    return updatedItem;
                }
                return item
            })
            return{
                items:updateditems
            }    
        
        //Code for Deleting Entire List of Items
        case 'REMOVE_ALL':
            return {
                items: []    
            }
        

        //Code for Deleting Selected Items
        case 'DELETE_SELECTED':
            let curArray=state.items;
            let tempDel=state.deletionArray
            for(let i=tempDel.length-1;i>=0;i--){
                curArray.splice(tempDel[i],1);
                tempDel.splice(i,1)
            }
            return {
                items:curArray,
                deletionArray:tempDel
            }
         
        //Code to Select Items    
        case 'SELECT_SINGLE':
         
            console.log("deletion array is: ", state.deletionArray);
            let tempArray=state.deletionArray;
            let selectedItem=action.payload;
            let itemIndex=selectedItem;
            
            console.log(selectedItem)
            if(tempArray.includes(selectedItem))
            {
                tempArray.splice(itemIndex,1);
            }
            else{
                tempArray.push(selectedItem);
            }
            console.log("Temp Array is: ",tempArray)
            return{
                items:state.items,
                deletionArray:tempArray
            }
        default:
            return state;
    }
}