import Profile from './Profile';
import Statistics from './Statistics';
import { FriendList } from 'FriendList';
import friends from '../friends.json';
import data from '../data.json';
import user from '../user.json';

export default function App() {
  return (
    <div
      style={{
        height: '100%',
        paddingTop: '50px',
        paddingBottom: '50px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics key={data.id} title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </div>
  );
}
