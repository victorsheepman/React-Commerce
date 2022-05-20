import priceFormat from "./priceFormat";

export const amount = (array, isFormat)=>{
    let acumulador = [];
    for (let i= 0; i< array.length; i++) {
        acumulador.push(array[i].usd)
    }
    const format = acumulador.reduce((accumulator, current)=>accumulator + current);

   return format;
}