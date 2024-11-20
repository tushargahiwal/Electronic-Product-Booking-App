const model = require('./imagemodel')

// POST API
const addImage = async (req, res) => {
    const { uname,
        email,hobbies} = req.body;
        hobbiearray = JSON.parse(req.body.hobbies);

    try {
        const Userdata = new model({
            uname,
            email,
            image: req.file.filename,
            hobbies:hobbiearray,
        })
        const data = await Userdata.save()
        res.status(200).send({ data })
    }
    catch (err) {
        console.log(err)
    }
}

// GET API
const getImage = async (req, res) => {
    try {
        const userData = await model.find()
        res.status(200).send({ userData })

    } catch (err) {
        res.status(400).send(err)
    }
}


// DELETE API
const deleteImage = async (req, res) => {

    try {
        const data = await model.deleteOne({ _id: req.params._id })
        res.status(200).send({ data })
    } catch (err) {
        res.status(500).send(err)
    }
}

const updateImage = async (req, res) => {
    const {  uname,
        email,hobbies } = req.body;
    try {
        

        const data = await model.updateOne(
            { _id: req.params._id }, 
            {
                $set: {
                    uname,
        email,
                    image: req.file.filename,
                    hobbies,

                         }
            }, 
        );

        if (data) {
            res.status(200).send({ message: "User updated found" });
        } else {
            res.status(404).send({ message: "User not found" });
        }
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: "Internal server error" });
    }
};



module.exports = { addImage,getImage,updateImage,deleteImage}