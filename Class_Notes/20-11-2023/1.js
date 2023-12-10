const connectDB = require("./modules/db.js")
connectDB(true)
let  modelUser = require("./models/CreateUserSchema.js")
let dataUser = new modelUser({id:1,name:"John Doe",email:"jd@a.com"})
dataUser.save().then(
function(){
    console.log(dataUser)
    connectDB(false)

},function(error){
    console.log(error + "Error")
}
)
//testfile