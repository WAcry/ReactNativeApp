import React, {Component} from 'react';
import NavigationUtil from "../navigator/NavigationUtil";
import DynamicTabNavigator from "../navigator/DynamicTabNavigator";
import {NavigationActions} from "react-navigation";
import {connect} from "react-redux";
import BackPressComponent from "../common/BackPressComponent";
import CustomTheme from '../page/CustomTheme';
import actions from "../action";
import SafeAreaViewPlus from "../common/SafeAreaViewPlus";

type Props = {};

class HomePage extends Component<Props> {
    constructor(props) {
        super(props);
        this.backPress = new BackPressComponent({backPress: this.onBackPress});
    }

    componentDidMount() {
        this.backPress.componentDidMount();
    }

    componentWillUnmount() {
        this.backPress.componentWillUnmount();
    }

    /**
     *    Android        
     * https://reactnavigation.org/docs/en/redux-integration.html#handling-the-hardware-back-button-in-android
     * @returns {boolean}
     */
    onBackPress = () => {
        const {dispatch, nav} = this.props;
        //if (nav.index === 0) {
        if (nav.routes[1].index === 0) {//  RootNavigator  MainNavigator index 0，        
            return false;
        }
        dispatch(NavigationActions.back());
        return true;
    };

    renderCustomThemeView() {
        const {customThemeViewVisible, onShowCustomThemeView} = this.props;
        return (<CustomTheme
            visible={customThemeViewVisible}
            {...this.props}
            onClose={() => onShowCustomThemeView(false)}
        />)
    }

    render() {
        const {theme} = this.props;
        NavigationUtil.navigation = this.props.navigation;
        return <SafeAreaViewPlus
            topColor={theme.themeColor}
        >
            <DynamicTabNavigator/>
            {this.renderCustomThemeView()}
        </SafeAreaViewPlus>;
    }
}

const mapStateToProps = state => ({
    nav: state.nav,
    customThemeViewVisible: state.theme.customThemeViewVisible,
    theme: state.theme.theme,
});

const mapDispatchToProps = dispatch => ({
    onShowCustomThemeView: (show) => dispatch(actions.onShowCustomThemeView(show)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);