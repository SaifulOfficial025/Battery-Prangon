import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './Category';
import langReducer from './Lang';
import sliderReducer from './Slider';
import popularProductReducer from './Product/PopularProduct';
import productsReducer from './Product/Products';
import ytVideosReducer from './YTVideos';
import contactReducer from './Contact';
import sidebarReducer from './Sidebar';

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    lang: langReducer,
    slider: sliderReducer,
    popularProduct: popularProductReducer,
    products: productsReducer,
    ytVideos: ytVideosReducer,
    contact: contactReducer,
    sidebar: sidebarReducer,
  },
});
