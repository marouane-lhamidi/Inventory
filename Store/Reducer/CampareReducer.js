import {TOGGLE_CAMPER} from "../Actions/CampareAction";
import {calcElement} from "../../Components/ourComponets/AidFonction";


const initialState = {
    elementResult : []
}

const CamperReducer = (state = initialState, action) =>{

    switch (action.type){
        case TOGGLE_CAMPER :
            const updatedTableChange = [ ...action.inventory];
            const originTable = [ ...action.stock];
            const updatedTableNew = [];
            calcElement(updatedTableChange, originTable, updatedTableNew);
            return {...state, elementResult : updatedTableNew}

        default :
            return state
    }
}

export default CamperReducer;
