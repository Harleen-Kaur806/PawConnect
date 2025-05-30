const CrouselImage=require("../Model/CrouselImg");

const cloudinary=require("cloudinary").v2;
const path=require("path");

const SaveCrouselImage=async(req,res)=>{

    try {
            let filename = "nopic.jpg";

        if (req.files != null && req.files.Url) {
            const imageFile = req.files.Url;
            const filepath = path.join(__dirname, "..", "uploads", imageFile.name);
            
            // Save the file locally
            await imageFile.mv(filepath);
            console.log("File saved locally at:", filepath);

            // Upload to Cloudinary
            const result = await cloudinary.uploader.upload(filepath);
            console.log("Cloudinary result:", result);
            filename = result.secure_url; // use secure URL
        }

        req.body.Url = filename;

            console.log(req.body)
            const response=await CrouselImage.create(req.body);
            if (!response)
            {
                return res.status(400).json({message:"Failed to Save Crousel Image"});
            }
            res.status(201).json({message:"Crousel Image saved successfully",data:response});
    }
    catch (error) {
        res.status(500).json({message:"Internal Server Error"});
    }
}

const GetCrouselImages=async(req,res)=>{
    try {
        const response=await CrouselImage.find();
        if (!response)
        {
            return res.status(400).json({message:"Failed to get Crousel Images"});
        }
        res.status(200).json({message:"Crousel Images fetched successfully",data:response});
    }
    catch (error) {
        res.status(500).json({message:"Internal Server Error"});
    }
}

const DeleteCrouselImage=async(req,res)=>{
    try {
        const id=req.params.id;
        const response
        =await
        CrouselImage.findByIdAndDelete(id);
        if (!response)
        {
            return res.status(400).json({message:"Failed to delete Crousel Image"});
        }
        res.status(200).json({message:"Crousel Image deleted successfully"});
    }
    catch (error) {
        res.status(500).json({message:"Internal Server Error"});
    }
}

const UpdateCrouselImage=async(req,res)=>{
    const id=req.params.id;
    const data=req.body;
    try {
        const response=await CrouselImage.findByIdAndUpdate(id,data);    
        if (!response)
        {
            return res.status(400).json({message:"Failed to update Crousel Image"});
        }
        res.status(200).json({message:"Crousel Image updated successfully",data:response});
    }
    catch (error) {
        res.status(500).json({message:"Internal Server Error"});
    }
}   

module.exports={    
    SaveCrouselImage,
    GetCrouselImages,
    DeleteCrouselImage,
    UpdateCrouselImage
}
