const connectDB = require("./modules/db.js")
connectDB(true)
let  modelUser = require("./models/CreateUserSchema.js")
modelUser.findOneAndUpdate({id:1},{name:"UpdateUser"},{new:true}).then(
function(user){
        console.log(`Name : ${user.name} (${user.email})`)
    connectDB(false);
}
)