import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './styles/styles.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NotFound from './components/NotFound/NotFound';
import { Provider } from 'react-redux';
import store from './store/store';
import Search from './components/search/Search';
import SinglePage from './pages/SinglePage';
import Category from './pages/Category';





const routesPrivate = [
  {
    path: "/",
    component: <App/>
  },
  {
    path: "/yangiliklar/:slug",
    component: <Category/>
  },
  {
    path: "/:year/:month/:day/:slug",
    component: <SinglePage/>
  },
  {
    path: "/search?",
    component: <Search/>
  }
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
        <Routes>
            {
              routesPrivate.map((item) =>
              <Route path={item?.path} element={item?.component}/>
            )
            }
            <Route path={"/*"} element={<NotFound/>}/>            
          </Routes>
        </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
