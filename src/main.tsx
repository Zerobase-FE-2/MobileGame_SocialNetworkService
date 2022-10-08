import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';

import rootReducer, { rootSaga } from './modules/redux';
import { CHECK, TEMP_SET_USER } from './modules/redux/userSlice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});
function loadUser() {
  try {
    const user = localStorage.getItem('user');
    if (!user) return;
    store.dispatch(TEMP_SET_USER(JSON.parse(user)));
  } catch (e) {}
}

sagaMiddleware.run(rootSaga);
loadUser();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </Provider>
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDisPatch = typeof store.dispatch;
