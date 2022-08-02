db = connect("mongodb://localhost:27017/shelter");


function numberOfDogsByBreed(b){
    return db.dogs.find({ breed: { $eq: b }}).count();
}
function dogsByAge(a){
    return db.dogs.find({ age: { $eq: a }});
}

function findOldestDog(){
    return db.dogs.find().sort({ "age" : -1 }).limit(1);
}
function findYoungestDog(){
    return db.dogs.find().sort({ "age" : 1 }).limit(1);
}
