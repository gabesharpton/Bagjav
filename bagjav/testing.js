// const isEqual = (obj1, obj2) => {
//     const obj1Keys = Object.keys(obj1);
//     const obj2Keys = Object.keys(obj2);
//     if(obj1Keys.length !== obj2Keys.length){
//         return false
//     }
//     for (let objKey of obj1Keys){
//         if(obj1Keys)
//     }
// }

// let arr1 = [1, 2]
// let arr2 = [2, 3]

// if(arr1.includes(arr2, 2)){
//     return 
// }
// isEqual(arr1, arr2)
//import React from 'react'

let arr = [{type: "span", key: "51", ref: null, props: {children: "6"}}, { type: "span", key: "51", ref: null, props: {children: "6"}}, { type: "span", key: "51", ref: null, props: {children: "6"}}]
let arr2 = [{ type: "span", key: "51", ref: null, props: {children: "6"}}]

let result = arr.filter((card) => {
    return arr2.some(function(card2){
        return card2.props.children === card.props.children
    })
})
console.log(result)