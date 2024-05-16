const mongoose = require('mongoose')

const MemberSchema = new mongoose.Schema({
  username: { type: String, required: false },
  _id: { type: mongoose.Schema.Types.ObjectId, required: false }
})

const CommunitySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: false },
    ownerID: { type: String, required: false, unique: false },
    isOwner: { type: Boolean, required: false, unique: false },
    members: [MemberSchema],
    files: { type: Array, required: false }
  },
  { timestamps: true }
)


const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    community: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Community', 
        required: true
    }
});


const Community = mongoose.model('Community', CommunitySchema)

module.exports = Community







