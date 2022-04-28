/**
 * Created by AyushK on 18/09/21.
 */
import * as ValidationManger from "../middleware/validation";
import UserModule from "../app/modules/user";
import CategoryModule from "../app/modules/categories";
import TransactionModule from "../app/modules/transaction";
import {stringConstants} from "../app/common/constants";

module.exports = (app) => {
    app.get("/", (req, res) => res.send(stringConstants.SERVICE_STATUS_HTML));

    // user routes
    app.post("/login", ValidationManger.validateUserLogin, new UserModule().loginUser);
    app.put("/user", ValidationManger.validateUpdateUser, new UserModule().updateUser);

    // user categories routes
    app.post("/category", ValidationManger.validateAddCategory, new CategoryModule().addCategory);
    app.put("/category", ValidationManger.validateUpdateCategory, new CategoryModule().updateCategory);
    app.get("/category-list", ValidationManger.validateGetCategoryList, new CategoryModule().getCategoryList);

    // user transactions routes
    app.post("/transaction", ValidationManger.validateAddTransaction, new TransactionModule().addTransaction);
    app.put("/transaction", ValidationManger.validateUserLogin, new TransactionModule().updateTransaction);
    app.get("/transaction-list", ValidationManger.validateGetCategoryList, new TransactionModule().getTxnList);
};
