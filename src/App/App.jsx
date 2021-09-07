import {
    Route,
    Switch,
    Redirect,
    withRouter
} from "react-router-dom";

import MainPage from "../MainPage/MainPage";
import PreHeader from "../PreHeader/PreHeader";
import Header from "../Header/Header";
import Catalog from "../Catalog/Catalog";
import MasterClass from "../MasterClass/MasterClass";

function App() {

    return (
        <div>
            <PreHeader/>
            <Header/>
            <Switch>
                <Route exact path='/home' component={MainPage} />
                <Route exact path='/catalog' component={Catalog} />
                <Route exact path='/master-class' component={MasterClass}/>
                <Redirect from='/' to='/home'/>
            </Switch>
        </div>
    );
}

export default withRouter(App);
