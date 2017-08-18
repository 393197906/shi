const one_coll = "烟,倾,萧,墨,歌,弦,痴,泠,幽,离,覆,寂,情,思,恋,醉,浅,尘,念,葬,负,梦,韶,陌,落,琴,夜,君,殇".split(',');
const two_coll = "朱砂,韶华,江南,烟雨,迷离,红尘,寂寞,繁华,风华,苍老,红颜,天下,彼岸,浮生,伊人,青丝,白首,陌上,微凉,千年,倾城,断弦,长歌,悲欢,沧海,天涯,尘缘,情殇,忘川,碧落,奈何,指尖,盛世,长安,青鸾,凤凰,桃花,海棠,红妆,婆娑,轻狂,朱砂,韶华,江南,烟雨,迷离,红尘,寂寞,繁华,风华,苍老,红颜,天下,彼岸,浮生,伊人,青丝,白首,陌上,微凉,千年,倾城,断弦,长歌,悲欢,沧海,天涯,尘缘,情殇,忘川,碧落,奈何,指尖,盛世,长安,青鸾,凤凰,桃花,海棠,红妆,婆娑,轻狂,未央".split(',');

require('./ci/ci'); return;

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

