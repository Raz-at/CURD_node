import mongoose from "mongoose";
import { stringify } from "querystring";

const Blogschema = new mongoose.Schema({
    title:
    {   type:String,
        required : true
    },
    desc:
    {   
        type:String
    }

}
)

const blogModel = mongoose.model("blogs",Blogschema)

export default blogModel