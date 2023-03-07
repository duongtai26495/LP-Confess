import './App.css';
import './index.css';
import Header from './components/common/Header';
import Home from './screens/Home';
import AuthenView from './components/account/AuthenView';
import React, { useEffect, useState } from 'react';
import { LOGIN_VIEW } from './data/constants';
import { useStore } from './store';
import { Route, Routes } from 'react-router-dom';
import { HOMEPAGE, Profile } from './screens';
import ArticleContent from './components/article/ArticleContent';
import AddNewArticleButton from './components/article/AddNewArticleButton';
import NewArticleView from './components/article/NewArticleView';

function App() {
  const [state, dispatch] = useStore()
  const { login_view, current_article, login_state, new_art_view } = state

  useEffect(() => {

  }, [login_view])

  return (
    <React.Fragment>
      <div className="w-full">
        <Header />
        <div className='w-full xl:w-1/2 m-auto px-2 xl:px-0'>
          <Routes>
            <Route path='/' element={<HOMEPAGE />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
          {
        login_state && <AddNewArticleButton />
      }
        </div>
        
      </div>
      {
        login_view
        &&
        <AuthenView />
      }
      {
        current_article  && <ArticleContent />
      }
      {
        (new_art_view && login_state) && <NewArticleView /> 
      }
    </React.Fragment>
  );
}

export default App;
