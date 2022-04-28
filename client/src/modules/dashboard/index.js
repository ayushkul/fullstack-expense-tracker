import {dashboardMenuImages, genericConstants} from "../../constants";
import styled, {css} from "styled-components";
import Utility from "../../utility"
import {history} from "../../managers/history"
import Home from "../home";
import Transactions from "../transactions";
import Categories from "../categories";
import Analytics from "../analytics";
import Settings from "../settings";
import AddTransaction from "../transactions/addTransaction";

const MenuImage = styled.img`
  width: 24px;
  height: 27px;
  margin-right: 10px;
  display: none;
`;

const DashboardComponent = (props) => {
    const onMenuClick = (e) => {
        history.push(e.target.id)
    }
    return (
        <div className="display-flex w-100 flex-column overflow-hidden">
            <div className="w-100 p-4 fs-24 fc-azure fw-700 bg-white card-shadow">
                {genericConstants.APP_NAME}
            </div>
            <div className="display-flex-row">
                <div className="w-250 card-shadow h-82vh pt-5 display-flex-column">
                    <div id="dashboard" onClick={onMenuClick}
                         className={Utility.isMenuActive("dashboard") ? "p-2 fs-20 cursor-pointer bg-azure br-menu fc-white" : "p-2 fs-20 cursor-pointer fc-brownish-grey"}>
                        <MenuImage
                            alt="dashboard"
                            src={dashboardMenuImages.HOME[Utility.isMenuActive("/dashboard")]}
                        />
                        Dashboard
                    </div>
                    <div id="transactions" onClick={onMenuClick}
                         className={Utility.isMenuActive("transactions") || Utility.isMenuActive("add-transaction") ? "p-2 fs-20 cursor-pointer bg-azure br-menu fc-white" : "p-2 fs-20 cursor-pointer fc-brownish-grey"}>
                        <MenuImage
                            alt="transactions"
                            src={dashboardMenuImages.ADVERTISERS[Utility.isMenuActive("/transactions")||Utility.isMenuActive("/add-transaction")]}
                        />
                        Transactions
                    </div>
                    <div id="categories" onClick={onMenuClick}
                         className={Utility.isMenuActive("categories") ? "p-2 fs-20 cursor-pointer bg-azure br-menu fc-white" : "p-2 fs-20 cursor-pointer fc-brownish-grey"}>
                        <MenuImage
                            alt="categories"
                            src={dashboardMenuImages.CATEGORIES[Utility.isMenuActive("/categories")]}
                        />
                        Categories
                    </div>
                    <div id="analytics" onClick={onMenuClick}
                         className={Utility.isMenuActive("analytics") ? "p-2 fs-20 cursor-pointer bg-azure br-menu fc-white" : "p-2 fs-20 cursor-pointer fc-brownish-grey"}>
                        <MenuImage
                            alt="analytics"
                            src={dashboardMenuImages.ANALYTICS[Utility.isMenuActive("/analytics")]}
                        />
                        Analytics
                    </div>
                    <div id="settings" onClick={onMenuClick}
                         className={Utility.isMenuActive("settings") ? "p-2 fs-20 cursor-pointer bg-azure br-menu fc-white" : "p-2 fs-20 cursor-pointer fc-brownish-grey"}>
                        <MenuImage
                            alt="settings"
                            src={dashboardMenuImages.SETTINGS[Utility.isMenuActive("/settings")]}
                        />
                        Settings
                    </div>
                </div>
                <div className="overflow-y-auto w-100">
                    {Utility.isMenuActive("dashboard") && <Home/>}
                    {Utility.isMenuActive("transactions") && <Transactions/>}
                    {Utility.isMenuActive("add-transaction") && <AddTransaction/>}
                    {Utility.isMenuActive("categories") && <Categories/>}
                    {Utility.isMenuActive("analytics") && <Analytics/>}
                    {Utility.isMenuActive("settings") && <Settings/>}
                </div>
            </div>
            <div className="w-100 p-2 px-4 fs-20 fc-white fw-500 bg-azure card-shadow">
                Made with ❤️ in India
            </div>
        </div>
    )
}
export default DashboardComponent
