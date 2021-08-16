function pairs(object){
    let list = [];
    for (let name in object){
        list.push([name,object[name]]);
    }
    return list;
}
module.exports.pairs = pairs;