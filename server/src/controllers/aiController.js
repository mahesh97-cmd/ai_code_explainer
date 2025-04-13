const {getExplaination}=require("../services/aiService")

const explainCodeWithGemini =async(req,res)=>{
   try {
    const {code,language}=req.body;
    if(!code){
        return res.status(400).json({ error: "code is required" });

    }
    const explained=await getExplaination(code,language)
    const explainedCode=explained.replace(/<br\/>/g, '\n')
    res.status(200).json({explainedCode})
   } catch (error) {
    console.error(error)
   }

}

module.exports={explainCodeWithGemini};