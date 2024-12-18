const User = require("../Models/User");
const asyncErrorWrapper = require("express-async-handler");

const getSingleUser = asyncErrorWrapper(async (req, res, next) => {
    const { id } = req.params;
    const user = await User.findById(id);

    return res.status(200).json({
        success: true,
        data: user
    });
});

const gettAllUser = asyncErrorWrapper(async (req, res, next) => {
    return res.status(200).json(res.queryResult);
});

module.exports = {
    getSingleUser,
    gettAllUser
};
