export const useFilter = (filter, array) => {
    if(filter === 'todo'){
       return array
    } 
    return array.filter(i=> i.node.product.metadata.type === filter)
}