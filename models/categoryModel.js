const mongoose=require('mongoose')
const categorySchema = mongoose.Schema({
    categoryId:{
        type:String||Number,
        unique:true,
        required:[true,'please Enter the Id of category']
    },
    categoryName:{
        type:String,
        maxLength:[12,'name cannot exceeds 12 characters'],
        minLength:[3,'name should contains at least 3 characters']
    }
})
exports.module = mongoose.model("Category",categorySchema);