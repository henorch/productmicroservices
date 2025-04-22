import mongoose from "mongoose"; 
const Schema = mongoose.Schema



const productSchema =  new mongoose.Schema({
   code: {
      type: Number,
   },
         name: {
           type: String,
           required: true,
           trim: true     
        },
        price:{
           type: Number,
           required: true,
           min:0 
        },
        image: {
           type: String,  
        },
        description: {
           type: String,
           required: true,   
        },
        make:{
           type: String,   
        },
        
})

const Products = mongoose.model('Products', productSchema)
export default Products