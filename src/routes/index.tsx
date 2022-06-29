import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';

import React from 'react';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Categorias from '../pages/Categorias';
import Categoria from '../pages/Categoria';
import Carrinho from '../pages/Carrinho';
import Favoritos from '../pages/Favoritos';

const TabNavigation = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <TabNavigation.Navigator 
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: { backgroundColor: '#1c162b', borderTopWidth: 0, borderBottomWidth: 0},
      tabBarActiveTintColor: '#b192ff',
    }}
    >
      <TabNavigation.Screen
        name='HomeTabScreen'
        component={Home} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <Icon 
              name='home'
              color={focused ? "#b192ff" : "#fff"}
              type='material-community'
              size={30}
              tvParallaxProperties={undefined}
            />
          ),
        }}
      />
      <TabNavigation.Screen 
        name='FavoritosTabScreen'
        component={Favoritos}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({focused}) => (
            <Icon 
              name='heart'
              color={focused ? "#b192ff" : "#fff"}
              type='material-community'
              size={30}
              tvParallaxProperties={undefined}
            />
          ),
        }}
      />
      <TabNavigation.Screen 
        name='CarrinhoTabScreen'
        component={Carrinho}
        options={{
          tabBarLabel: 'Carrinho',
          tabBarBadge: 3,
          tabBarIcon: ({focused}) => (
            <Icon 
              name='cart'
              color={focused ? "#b192ff" : "#fff"}
              type='material-community'
              size={30}
              tvParallaxProperties={undefined}
            />
          ),
        }}
      />
    </TabNavigation.Navigator>
  )
}

const StackNavigation = createNativeStackNavigator();

const DrawerNavigation = createDrawerNavigator();

const NavigationDrawer = () => {
  return(
    <DrawerNavigation.Navigator 
      initialRouteName='TabNavigationScreen'
      screenOptions={{  
        drawerStyle: {
          backgroundColor: '#1c162b',
        },
        drawerActiveTintColor: '#b192ff',
        drawerInactiveTintColor: '#fff',
      }}
    >
      <DrawerNavigation.Screen 
        name="TabNavigationScreen" 
        component={BottomTabNavigator}
        options={{
          title: 'Serra Fashion',
          headerStyle: {
            backgroundColor: '#1c162b'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            color: '#fff',
          },
        }}
      />
      <DrawerNavigation.Screen 
        name="CategoriasDrawerScreen" 
        component={Categorias}
        options={{
          title: 'Categorias',
          headerStyle: {
            backgroundColor: '#1c162b'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            color: '#fff',
          },
        }}
      />
    </DrawerNavigation.Navigator>
  );
}

const Routes = () => {
    return (
        <NavigationContainer>
            <StackNavigation.Navigator screenOptions={{ headerShown: false }}>
                <StackNavigation.Screen
                    name='Login'
                    component={Login}
                />
                <StackNavigation.Screen
                    name='Home'
                    component={NavigationDrawer}
                />
            </StackNavigation.Navigator>
        </NavigationContainer>
    );
}

export default Routes;