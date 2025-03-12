// add products to user cart
import userModel from "../models/userModel.js";

// Add products to user cart (WITHOUT SIZES)
const addToCart = async (req, res) => {
    try {
        const { userId, itemId } = req.body;

        const userData = await userModel.findById(userId);
        let cartData = userData.cartData || {}; // Ensure cartData is initialized

        //Increment quantity or set to 1 if new item
        cartData[itemId] = (cartData[itemId] || 0) + 1;

        await userModel.findByIdAndUpdate(userId, { cartData });

        res.json({ success: true, message: "Added To Cart" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};


// update user cart
// Update user cart (WITHOUT SIZES)
const updateCart = async (req, res) => {
    try {
        const { userId, itemId, quantity } = req.body;

        const userData = await userModel.findById(userId);
        let cartData = userData.cartData || {}; // Ensure cartData is initialized

        // ✅ Update quantity directly
        if (quantity > 0) {
            cartData[itemId] = quantity;
        } else {
            delete cartData[itemId]; // ✅ Remove item if quantity is 0
        }

        await userModel.findByIdAndUpdate(userId, { cartData });
        res.json({ success: true, message: "Cart Updated" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};



// get user cart data
const getUserCart = async (req, res) => {
    try {
        const { userId } = req.body;

        const userData = await userModel.findById(userId);
        let cartData = userData.cartData || {}; // Ensure cartData is initialized

        res.json({ success: true, cartData });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export { addToCart, updateCart, getUserCart }