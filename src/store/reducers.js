import { combineReducers } from 'redux'

import homePageReducer from '../pages/HomePage/reducer'
import detailPageReducer from '../pages/DetailPage/reducer'

const rootReducer = combineReducers({
  homePage: homePageReducer,
  detailPage: detailPageReducer,
})

export default rootReducer
