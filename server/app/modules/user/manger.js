import UserModel from "../../models/user"

export default class Manger {
    loginUser = async (requestData) => {
        let userData = await UserModel.findOneData({email: requestData.email})
        if (!userData) {
            userData = new UserModel(requestData)
            await userData.saveData()
        }
        return userData;
    }
    updateUser = async (requestData) => {
        // API business logic
        return undefined;
    }
}
