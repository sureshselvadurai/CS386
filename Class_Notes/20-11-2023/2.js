const connectDB = require("./modules/db.js")
connectDB(true)
let  modelUser = require("./models/CreateUserSchema.js")
let dataUser = modelUser.create({id:1,name:"John Doe",email:"jd@a.com"})
dataUser.then(
function(){
    console.log(dataUser)
    connectDB(false)

},function(error){
    console.log(error + "Error")
        connectDB(false)
}
)
