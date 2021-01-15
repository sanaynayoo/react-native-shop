import React from 'react';
import { View, Text } from 'react-native';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import RootNavigation from './navigation/rootNavigation';
import prodReducer from './store/reducer/product';
import cartReducer from './store/reducer/cart';
import orderReducer from './store/reducer/order';

const rootReducer = combineReducers({
  product:prodReducer,
  cart:cartReducer,
  order:orderReducer
})

const store = createStore(rootReducer,applyMiddleware(reduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  )
}
