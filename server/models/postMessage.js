import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title:{type:String},
  message:{type:String},
  creater:{type:String},
  tags:{type:[String]},
  selectedFile:{type:String},
  likeCount:{type:Number,default:0},
  createdAt:{type:Date,default:new Date()},
});

const postMessage = mongoose.model('postMessage',postSchema);

export default postMessage;