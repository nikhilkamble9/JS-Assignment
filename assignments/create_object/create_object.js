function CreateObject(arr) {
    // Write your code here
    let person = new Object();
    for(let i=0;i<arr.length -1;i++){
        if(i%2===0){
            person[arr[i]] = arr[i+1];
        }
    }
    return person
}

module.exports = CreateObject;
