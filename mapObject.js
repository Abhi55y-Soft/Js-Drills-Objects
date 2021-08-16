function mapObject(object, cb){
    let newObject = {};
    for (let name in object){
       newObject[name] = cb(object[name]);
    }
    return newObject;
}
module.exports.mapObject = mapObject;