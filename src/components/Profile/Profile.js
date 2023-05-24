import PropTypes from 'prop-types';
import {
  Avatar,
  Description,
  Label,
  Li,
  Location,
  Name,
  Quantity,
  Stats,
  Tag,
  Wrapper,
} from './Profile.styled';

export default function Profile({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) {
  return (
    <Wrapper>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Description>
      <Stats>
        <Li>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </Li>
        <Li>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </Li>
        <Li>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </Li>
      </Stats>
    </Wrapper>
  );
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
