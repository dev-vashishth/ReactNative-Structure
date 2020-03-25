 //LIBRARIES
 import React from 'react'
 import { Image } from 'react-native'
 import { TabNavigator, createStackNavigator, DrawerNavigator,createAppContainer } from 'react-navigation'

 //ASSETS
 import { Colors, Matrics, Images } from '@Assets'
 import Splash from '../SplashScreen'
 import AuthNavigator from '@Auth/AuthNavigationConfiguration'
//  import DrawerNavigation from '@Drawer/DrawerNavigationConfiguration'
//  import SideMenu from '@Drawer/View/SideMenu'

 //=======TABS DECLARATION=========//

// const TabBarConfig = TabNavigator({
//     // HomeTab : { screen : HomeNavigator,
//     //     navigationOptions: ({ navigation }) => ({
//     //         tabBarLabel: "HOME",
//     //         tabBarVisible: navigation.state.params && navigation.state.params.tabBarVisible,
//     //         tabBarIcon: () => (
//     //           <Image source = { Images.homeTab } />
//     //         ),
//     //         //configureTransition: () => ({ screenInterpolator: () => null }),
//     //         transitionConfig: () => ({
//     //             transitionSpec: {
//     //                 duration: 0,
//     //                 timing: Animated.timing,
//     //                 easing: Easing.step0,
//     //             },
//     //         }),
//     //       })
//     // },
// },
// {
//     navigationOptions : {
//         header: null,
       
//     },
//     tabBarPosition : 'bottom',
//     headerMode: 'none',
//     swipeEnabled: false,
//     animationEnabled : false,
//     lazy: true,
//     tabBarOptions : {
//          renderIndicator : () => null,
//          activeBackgroundColor : Colors.BLACK,
//          inactiveBackgroundColor : Colors.BLACK,
//          activeTintColor : Colors.WHITE,
//          showIcon : true,
//          labelStyle : {
//             fontSize : Matrics.baseMargin,
//             margin : Matrics.miniMargin,
//             },
        
//         style : {
//             height : Matrics.doubleSection,
//             backgroundColor : Colors.BLACK,
//         }
//     }
// })


//=======DRAWER STACK DECLARATION=========//

// const DrawerStack = DrawerNavigator({     
//     DrawerScreen : {
//         screen : TabBarConfig,
//       },
//       DrawerNavigation : { screen : DrawerNavigation },
//   },
//   {
//     swipeEnabled: false,
//     contentComponent : SideMenu,
//     drawerBackgroundColor : Colors.DRAWERBACKGROUND,
//   },
// {
//     // transitionConfig: () => ({ screenInterpolator: () => null }),
//     transitionConfig: () => ({
//         transitionSpec: {
//             duration: 0,
//             timing: Animated.timing,
//             easing: Easing.step0,
//         },
//     }),
// });

//=======APP STACK DECLARATION=========//

const AppNavigator = createStackNavigator({
    //Splash : { screen : Splash },
    //Drawer : { screen :  DrawerStack },
    Auth : { screen : AuthNavigator },
},{
    swipeEnabled: false,
    initialRouteName: 'Auth',
    navigationOptions:{
        header: null
    }
})


export default createAppContainer(AppNavigator)