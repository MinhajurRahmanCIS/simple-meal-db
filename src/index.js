import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Items from './components/Items/Items';
import SearchResult from './components/SearchResult/SearchResult';
import ItemDetails from './components/ItemDetails/ItemDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      },
      {
        path: '/items',
        element: <Items></Items>,
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
      },
      {
        path: '/searchResult/:sresult',
        element: <SearchResult></SearchResult>,
        loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.sresult}`)
      },
      {
        path: '/itemDetails/:itemId',
        element: <ItemDetails></ItemDetails>,
        loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.itemId}`)
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
