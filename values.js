function values(object){
    let list = [];
    for (let name in object){
        list.push(object[name]);
    }
    return list;
}
module.exports.values = values;