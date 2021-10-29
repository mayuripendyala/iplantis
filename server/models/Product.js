const mongoose = require('mongoose');

const { Schema } = mongoose;

// const reviewSchema = new Schema({
//         name: { type: String ,require :true },
//         rating: { type: Number ,require :true },
//         comment: { type: String ,require :true },
//         user: {
//             type: Schema.Types.ObjectId,
//             required: true,
//             ref: 'User',
//         },
//     },
//     {
//         timestamps: true
//     }
// )

const productSchema =new Schema({
        name: { type: String ,require :true },
        image: { type: String ,require :true },
        description: { type: String  },
        // reviews: [reviewSchema],
        // rating: { type: Number ,require :true , default: 0 },
        // numReviews: { type: Number ,require :true , default: 0 },
        price: { type: Number ,require :true , default: 0 },
        quantity: { type: Number ,min: 0 , default: 0 },
        category: {
            type: Schema.Types.ObjectId,
            ref: 'Category',
            required: true
          }

    }
    // { timestamps: true }

);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;