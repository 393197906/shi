const rule = require('./rule');
const {one_coll,two_coll} = require('../data/data');

const loop_word = (tott = 0,coll=two_coll)=> {
    const co = [];
    for(let i = 0 ; i<tott;i++){
        let str = coll[parseInt(Math.random()*coll.length)];
        co.push(str);
    }
    return co.join('');
}

const row = (num)=>{
    if(!num){
        return '\n';
    }else if(num%2===0){
        return loop_word(num/2);
    }else if(num === 1){
       return loop_word(1,one_coll);
    }else{
        return `${loop_word(parseInt(num/2))}${loop_word(1,one_coll)}`
    }
}

const ci = (obj = rule[0])=>{
    const {chinese,rule} = obj
    const {top,bottom} = rule;
    const top_arr = top.map((item)=>{
         return row(item);
    })
    top_arr.unshift('');

    const bottom_arr = bottom.map((item)=>{
        return row(item);
   })
   bottom_arr.unshift('');
   
   return [` ${chinese} ${loop_word(1)}`,top_arr.join(' '),bottom_arr.join(' ')].join('\n\n');
}

const ppkey = (chinese = '雨霖铃')=>{
    for(let i = 0;i<rule.length;i++){
        if(chinese === rule[i].chinese){
            return ci(rule[i]);
        }
    }
    return '词牌暂未收录'
} 

module.exports = ppkey;


