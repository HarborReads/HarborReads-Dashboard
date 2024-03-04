// profileController.js
const UserProfile = require('../models/userProfile');

exports.getEditProfileForm = async (req, res) => {
    try {
        const userId = req.session.user.id;
        let userProfile = await UserProfile.findOne({ user: userId });

        if (!userProfile) {
            // Create a new user profile based on the schema in userProfile.js
            userProfile = new UserProfile({
                user: userId,
                gender: '',
                dob: new Date()
            });
            await userProfile.save();
        }

        res.json({ userProfile });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.updateProfile = async (req, res) => {
    const {  gender, dob } = req.body;

    try {
        let userProfile = await UserProfile.findOne({ user: req.session.user.id });

        if (!userProfile) {
            userProfile = new UserProfile({
                user: req.session.user.id,
                gender,
                dob
            });
        } else {
            userProfile.gender = gender;
            userProfile.dob = dob;
        }

        await userProfile.save();

        res.status(200).json({ message: 'Profile updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};


