const isAllClientDataValids = (clientData)=>{
    for(const key in clientData){
        if(clientData[key] == "" || clientData[key] == null){
            return false
        }
    }

    return true
}

module.exports = isAllClientDataValids