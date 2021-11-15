var mongoose= require("mongoose")
//const monngodb_url="mongodb+srv://1234:1234@cluster0.ddfyz.mongodb.net/Inmobiliaria?retryWrites=true&w=majority"
const monngodb_url="mongodb+srv://alejamoraleso:Aleja780308@grupo16.t9scv.mongodb.net/Inmobiliaria?retryWrites=true&w=majority"

mongoose.connect(monngodb_url, {useNewUrlParser: true,useUnifiedTopology: true}).then(()=>{
    console.log("mongodb is connected");
}).catch((error)=>{
    console.log("mongodb not connected");
    console.log(error);
});