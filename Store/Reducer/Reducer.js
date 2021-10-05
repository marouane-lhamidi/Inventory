import {CATEGORIES} from "../../Data/data";
import {changeDesc} from "../../Components/ourComponets/AidFonction";
import {TOGGLE_CHANGE,ADD_PRODUCT,DELETE_PRODUCT} from "../Actions/Action";
import Category from "../../Models/Category";

const initialState = {
    stockElements : CATEGORIES,
    inventoryElements : changeDesc(CATEGORIES),
}

const elementsReducer = (state = initialState, action) =>{
    switch (action.type){
        case TOGGLE_CHANGE :
            console.log(action.user)
            let updatedTable;
            if (action.user === 'Admin')
             updatedTable = [ ...state.stockElements];
            else
                updatedTable = [ ...state.inventoryElements];

            updatedTable.forEach(element => {
                if (element.barCode === action.id)
                    element.qty = action.val
            })
            if (action.user === 'Admin')
                return {...state, stockElements: updatedTable}
            return {...state, inventoryElements: updatedTable}

        case ADD_PRODUCT :
            const newProduct = new Category(
                action.product.codeBare,
                action.product.name,
                action.product.Qty,
                action.product.imageUrl
            );
            const UpdatedTable = state.stockElements.concat(newProduct)
            return {
                ...state,
                stockElements: UpdatedTable,
                inventoryElements: changeDesc(UpdatedTable)
            }
        case DELETE_PRODUCT :
            return {
                ...state,
                stockElements: state.stockElements.filter(item => item.barCode !== action.id ),
                inventoryElements: state.inventoryElements .filter(item => item.barCode !== action.id )
            }


        default :
            return state
    }
}



export default elementsReducer;