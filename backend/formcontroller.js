const model = require('./formmodel')

// post api
const add= async(req,res)=>{
    const { fname,
        lname,
        adress,
        email,
        mobile,
        password
    }=req.body;

    try{

        const userData=new model({
            fname,
            lname,
            adress,
            email,
            mobile,
            password
        })

        const data=await userData.save();
        res.status(200).send({data});

    }

    catch(error)
    {
        console.log(error);
    }
}

// get api
const test=async(req,res)=>{
    try{
        const data=await model.find({});
        res.status(200).send({data});
    }

    catch(error)
    {
        console.log(error);
    }
}

// get one api
const getOne=async(req,res)=>{
    try{
        const{id}=req.params;
        const data=await model.findOne({ _id: id });
        res.status(200).send(data);
    }
    catch(error)
    {
        console.log(error);
    }
}

// get one api from id
const getOneId=async(req,res)=>{
    try{
        const{id}=req.params;
        const data=await model.findById({_id:id});
        res.status(200).send(data);
    }
    catch(error)
    {
        console.log(error);
    }
}

// delete the data from with id
const deleteOne=async(req,res)=>{
    try{
        const{id}=req.params;
        const data=await model.deleteOne({ _id: id });
        res.status(200).send(data);
    }
    catch(error)
    {
        console.log(error);
    }
}


// update data with id
const updateOne=async(req,res)=>{
const {fname,
    lname,
    adress,
    email,
    mobile, password}=req.body;

    try
    {
        const data=await model.updateOne(
            {_id:req.params.id},

            {
                $set:{
                    fname,
                    lname,
                    adress,
                    email,
                    mobile,
                    password
                }
            },
        )

        res.status(200).send(data);   
    }
    catch(error)
    {
        console.log(error);
    }


}

module.exports={add,test,getOne,getOneId,deleteOne,updateOne};
