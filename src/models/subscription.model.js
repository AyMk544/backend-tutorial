import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new Schema({
    subcriber: {
        type: Schema.Types.ObjectId, // the one who is subscribing
        ref: "User"
    },
    channel: {
        type: Schema.Types.ObjectId, // the one to whom, the subcriber is subcribing
        ref: "User"
    }
})

export const Subscription = mongoose.model("Subscription", subscriptionSchema)