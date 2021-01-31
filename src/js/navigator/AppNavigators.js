import {createAppContainer, createStackNavigator, createSwitchNavigator} from "react-navigation";
import WelcomePage from '../page/WelcomePage';
import HomePage from '../page/HomePage';
import WebViewPage from '../page/WebViewPage';
import DetailPage from '../page/DetailPage';
import SortKeyPage from '../page/SortKeyPage';
import SearchPage from '../page/SearchPage';
import CustomKeyPage from '../page/CustomKeyPage';
import AboutPage from '../page/about/AboutPage';
import AboutMePage from '../page/about/AboutMePage';
import CodePushPage from '../page/CodePushPage';
import {connect} from 'react-redux';
import {createReactNavigationReduxMiddleware, reduxifyNavigator} from 'react-navigation-redux-helpers';

export const rootCom = 'Init';//     

const InitNavigator = createStackNavigator({
    WelcomePage: {
        screen: WelcomePage,
        navigationOptions: {
            header: null,
        }
    }
});
const MainNavigator = createStackNavigator({
    HomePage: {
        screen: HomePage,
        navigationOptions: {
            header: null,
        }
    },
    DetailPage: {
        screen: DetailPage,
        navigationOptions: {
            header: null,
        }
    },
    WebViewPage: {
        screen: WebViewPage,
        navigationOptions: {
            header: null,
        }
    },
    AboutPage: {
        screen: AboutPage,
        navigationOptions: {
            header: null,
        }
    },
    AboutMePage: {
        screen: AboutMePage,
        navigationOptions: {
            header: null,
        }
    },
    CustomKeyPage: {
        screen: CustomKeyPage,
        navigationOptions: {
            header: null,
        }
    },
    SortKeyPage: {
        screen: SortKeyPage,
        navigationOptions: {
            header: null,
        }
    },
    SearchPage: {
        screen: SearchPage,
        navigationOptions: {
            header: null,
        }
    },
    CodePushPage: {
        screen: CodePushPage,
        navigationOptions: {
            header: null,
        }
    },
}, {
    defaultNavigationOptions: {
        header: null,
    }
});
export const RootNavigator = createAppContainer(createSwitchNavigator({
    Init: InitNavigator,
    Main: MainNavigator,
}, {
    navigationOptions: {
        header: null,
    }
}));

export const middleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav
);


const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');


const mapStateToProps = state => ({
    state: state.nav,//v2
});

export default connect(mapStateToProps)(AppWithNavigationState);