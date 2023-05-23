import Profile from './Profile';
import { Wrapper } from './Profile.styled';
import Statistics from './Statistics';
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
      <Wrapper>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
      </Wrapper>
      <Statistics key={data.id} title="Upload stats" stats={data} />
    </div>
  );
}
