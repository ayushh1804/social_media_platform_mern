import User from "../models/User.js";

//read

export const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);   //find user by id
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });

    }
}


export const getUserFriends = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);   //find user by id
        const friends = await Promise.all(
            user.friends.map((id) => {
                return User.findById(id);
            })
        );
        const formatFriends = friends.map(({ _id, firstname, lastname, picture, occupation, location }) => {
            return { _id, firstname, lastname, picture, occupation, location };
        });
        res.status(200).json(formatFriends);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

//update

export const addRemoveFriends = async (req, res) => {
    try {
        const { id, friendId } = req.params;
        const user = await User.findById(id);
        const friend = await User.findById(friendId);
        if (user.friends.includes(friendId)) {
            user.friends = user.friends.filter((id) => id !== friendId)
            friend.friends = friend.friends.filter((id) => id !== id)
        } else {
            user.friends.push(friendId);
            friend.friends.push(id);
        }
        await user.save();
        await friend.save();
        const friends = await Promise.all(
            user.friends.map((id) => {
                return User.findById(id);
            })
        );
        const formatFriends = friends.map(({ _id, firstname, lastname, picture, occupation, location }) => {
            return { _id, firstname, lastname, picture, occupation, location };
        });


        res.status(200).json(formatFriends);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }


}