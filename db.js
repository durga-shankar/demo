const MongoClient = require("mongodb").MomgoClient;
const ObjectId = require("mongodb").ObjectId;
const dbmane = "curd_mongodb";
const url = "mongodb://localhost:27017";
const mongoOptions = {useNewUrlParser : true};
const state ={
    db : null
};
const connect = (cb) =>{
    if(state.db)
        cb();
    else{
        MongoClient.connect(url,mongoOptions,(err,client)=>{
            if(err)
                cb(err);
                else{
                    state.db = client.db(dbname);
                    cb();
                }
        });
        }
}

const getPrimaryKey = (_id) =>{
    return ObjectId(_id);
}

const getDB = ()=>{
    return state.db;
}

module.exports = {getDB, connect, getPrimaryKey};
