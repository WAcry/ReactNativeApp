/**
 *           by CrazyCodeBoy
 */
export default class NavigationUtil {
    /**
     *        
     * @param params       
     * @param page        
     **/
    static goPage(params, page) {
        const navigation = NavigationUtil.navigation;
        if (!navigation) {
            console.log('NavigationUtil.navigation can not be null')
            return;
        }
        navigation.navigate(
            page,
            {
                ...params
            }
        )
    }

    /**
     *      
     * @param navigation
     */
    static goBack(navigation) {
        navigation.goBack();
    }

    /**
     *      
     * @param navigation
     */
    static resetToHomPage(params) {
        const {navigation} = params;
        navigation.navigate("Main");
    }

}