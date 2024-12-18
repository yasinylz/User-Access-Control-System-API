const CustomError = require("../../Helpers/Error/CustomError");

const CustomErrorHandler=(err,req,res,next)=>{
let customError=err;
if(err.name==="SyntaxError"){
    customError = new CustomError("Beklenmeyen sözdizimi !",400);
}
if(err.name==="ValidationError"){
customError=new CustomError(err.message,400);
}
if(err.code===11000){
    customError = new CustomError("Lütfen başka bir e-posta ile deneyin !",400);

}
if(err.name==="CastError"){
    customError = new CustomError("Lütfen uygun bir id girin !",400);

}
res.status(customError.status||500).json({
success:false,
message:customError.message
});

}

module.exports=CustomErrorHandler;