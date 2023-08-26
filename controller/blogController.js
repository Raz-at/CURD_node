import blogModel from "../models/blogModel.js"

export default class blogController{
     async addBlog(req,res) {
        const {title , desc} = req.body;
        try{
            const data = await blogModel.create({
                title,
                desc
            })
            // console.log(data)
            res.json(data)
        }
        catch (err)
        {
            res.json(err)
        }
    }

    async show(req,res){
        const {id} = req.params
        try{
            const response = await blogModel.findOne({
                _id:id
            })
            res.json({response})
        }
        catch(err)
        {
            res.json(err)
        }
    }

    async update(req,res) {
        const { id } = req.params;
        const {title , desc} = req.body;
        try
        {
            const response = await blogModel.updateOne({_id:id},{ title , desc})
            res.json({response})
        }
        catch (err)
        {
            res.json(err)
        }

    }

    async del(req,res){
        const { id } = req.params
        try
        {
            const response = await blogModel.deleteOne({
            _id:id
        })
        res.json({status:true,message:"Id Deleted"})
        }
        catch(err)
        {
            res.json(err)
        }
        
    }
}