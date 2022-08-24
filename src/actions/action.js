let numbers = JSON.parse(localStorage.getItem('numbers'))
// const initState = []
const initState = numbers
// console.log(initState);

function getItem(state = initState, action) {
    if (action.type === 'addItem') {
        let result = [...state]
        let storageNumbers = JSON.parse(localStorage.getItem('numbers'))
        console.log(action.payload);
        // let sanoq = 0 
        // let son = 0 
        // if (son === 0) {
        //     storageNumbers.push(action.payload)
        //     son++
        // }
        // result.map(item =>{
          
        //     if (item.id === action.payload.id) {
        //         sanoq++
        //     }
        //     if (sanoq > 0) {
        //         console.log('bu obeject bor');
        //     }else{
        //         storageNumbers.push(action.payload)
        //         localStorage.setItem('numbers', JSON.stringify(storageNumbers))
        //     }
        //     console.log(item.id);
        // })
        // let sanoq = 0
        // if(storageNumbers.length > 1){
            
        // }
        // storageNumbers.map(item =>{
        //     if (item.title === action.payload.title) {
        //         sanoq++
        //     }(sanoq > 0){
        //         storageNumbers.push(action.payload)
        //     }
        // })
        console.log(storageNumbers);    
        let sanoq = storageNumbers.filter((arr)=>{
            return arr.title === action.payload.title
            
        })
        if(sanoq.length == 0){
            storageNumbers.push(action.payload)
        }
        
        localStorage.setItem('numbers', JSON.stringify(storageNumbers))
        console.log(action.payload.id);
        
        // result.push(action.payload)
        result = storageNumbers
        return state = result
    }
    if (action.type === 'delFun') {
        let result = [...state]
        let storageNumbers = JSON.parse(localStorage.getItem('numbers'))
        console.log();
        storageNumbers.splice(action.payload, 1)
        localStorage.setItem('numbers', JSON.stringify(storageNumbers))
        result = storageNumbers
        return state = result
    }
    return state
}

export default getItem