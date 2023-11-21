const connectDB = require("./modules/db.js")
connectDB(true)
let  modelUser = require("./models/CreateUserSchema.js")
modelUser.find({active:true}).then(
function(users){
    for(let user of users){
        console.log(`Name : ${user.name} (${user.email})`)
    }
    connectDB(false);
}
)