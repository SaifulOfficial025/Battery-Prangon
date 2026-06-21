import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './Category';
import langReducer from './Lang';
import sliderReducer from './Slider';
import popularProductReducer from './Product/PopularProduct';
import ytVideosReducer from './YTVideos';
import contactReducer from './Contact';

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    lang: langReducer,
    slider: sliderReducer,
    popularProduct: popularProductReducer,
    ytVideos: ytVideosReducer,
    contact: contactReducer,
  },
});
