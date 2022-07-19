const { Schema, model } = require("mongoose");

const reviewSchema = new Schema({
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    review: { type: String, maxlength: 200, required: true },
    date: {type: Date, default: Date.now}
});

const Review = model("Review", reviewSchema);

module.exports = Review;