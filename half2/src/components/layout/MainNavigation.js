import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';


function MainNavigation() {
  return (
  <header className={classes.header}>
      <div className={classes.logo}>ReactMeetups</div>
      <nav>
          <ul>
              <li>
                  <Link to='/'>All Meetings</Link>
              </li>
              <li>
                  <Link to='/new-meetups'>Add New Meetings</Link>
              </li>
              <li>
                  <Link to='/favorites'>Favorites Meetings</Link>
              </li>
          </ul>
      </nav>
  </header>
  );
}

export default MainNavigation;
