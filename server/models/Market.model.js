const { Schema, model } = require("mongoose")

const marketSchema = new Schema(
    {
        name: {type: String, require: true},
        imageUrl: String,
        location: {
            city: String,
            country: String,
            type: { type: String },
            coordinates: [Number]
        },
        type: {
            type: String,
            enum: ["Farmers market", "Fresh Food market", "Flea market", "Street Food market", "Bazaar"]
        },
        Description: String,
        opening_days: {
            type: String,
            enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Every day"]
        },
        website: String,
        stars: Number,
        author: {type: Schema.Types.ObjectId, ref: "User"},
        reviews: [{type: Schema.Types.ObjectId, ref: "Review"}]
    }
)

const Market = model("Market", marketSchema)

module.exports = Market