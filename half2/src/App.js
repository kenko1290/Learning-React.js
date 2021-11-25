import { Route, Routes } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import MainNavigation from './layout/MainNavigation';

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path='/' element ={<AllMeetupsPage />} />
        <Route path='/new-meetups' element ={<NewMeetupPage />} />
        <Route path='/favorites' element ={<FavoritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
