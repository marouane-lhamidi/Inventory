export const  changeDesc = tab => {
    let z = JSON.parse(JSON.stringify(tab));
    z.forEach(element =>element.qty = "0");
    return z;
}
export const calcElement = (updatedTableChange, originTable, updatedTableNew) =>{
    for (let i in updatedTableChange){
        if (updatedTableChange[i].qty !== originTable[i].qty && originTable[i].qty - updatedTableChange[i].qty !== 0)
        {
            let valu =  originTable[i].qty - updatedTableChange[i].qty;
            const addElement = {
                value : valu,
                name : originTable[i].title,
                barCode : originTable[i].barCode
            };
            updatedTableNew.push(addElement)
        }
    }
}