function keys(object){
    let list = [];
    for (let name in object){
        list.push(name);
    }
    return list;
}
module.exports.keys = keys;