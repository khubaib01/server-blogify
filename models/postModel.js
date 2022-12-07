import mongoose, { Schema, model } from "mongoose";

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    tags: [
      {
        type: String,
      },
    ],
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
      },
    ],
    unlikes: [
      {
        type: mongoose.Schema.Types.ObjectId,
      },
    ],
    private: {
      type: Boolean,
      default: false,
    },
    writtenBy: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Post = model("Post", postSchema);
