//MeetupList will be used as a component in AllMeetups.js and Favorites.js
//AllMeetups will pass it a data array in which each item is a meetup with its own id, title, address, etc.
//props.meetups is the full data array from AllMeetups.

//MeetupList will call on MeetupItem and pass it each item from the data array in AllMeetups

import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map(meetup => {
        return <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.title}
          description={meetup.description}
        />;
      })}      
    </ul>
  ); //Will return a formatted jsx MeetupItem for each meetup item from the data array in AllMeetups. Every parameter of the
  //meeting item needs to be passed separately as a prop into <MeetupItem />. Alternatively, we can pass the entire
  //meeting item into <MeetupItem /> and extract out the parameters in the MeetupItem component. The MeetupItem component
  //takes each of these prop parameters and returns a formatted jsx object.
}

export default MeetupList;
