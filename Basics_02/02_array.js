const marvel_heros=["thor","spiderman",'IronMan']

const dc_heros=["batman","superman"]
// marvel_heros.push(dc_heros);

console.log(marvel_heros);

const all_heros=[...dc_heros,...marvel_heros]

console.log(all_heros)