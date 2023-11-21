const connectDB = require("./modules/db.js")
connectDB(true)
let  modelUser = require("./models/CreateUserSchema.js")
modelUser.findOneAndDelete({id:1}).then(
function(user){
        console.log(`Name : ${user.name} (${user.email})`)
    connectDB(false);
}
)