const {one_coll,two_coll} = require('../data/data');
const shi = (one,two)=>{
    const l1 = one.length;
    const l2 = two.length;
    const row = ()=>{
    return `${two[parseInt(Math.random()*l2)]}${two[parseInt(Math.random()*l2)]}${two[parseInt(Math.random()*l2)]}${one[parseInt(Math.random()*l1)]}`
    }
    const title = ()=>{
    return `    ${two[parseInt(Math.random()*l2)]}`;
    }
    const result = [];
      result.push(title(one,two));
    for(let i =0; i <4;i++){
       result.push(row(one,two))
    }
    return result.join('\n');
}

console.log(shi(one_coll,two_coll));

