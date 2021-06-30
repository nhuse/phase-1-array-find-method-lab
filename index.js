function superbowlWin(record) {
    let objAW = record.find(element => { return element.result === "W"});
    if(objAW) {
        return objAW.year;
    }
    else {
        return undefined;
    }  
}