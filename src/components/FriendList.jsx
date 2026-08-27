import FriendListItem from "./FriendListItem";

function FriendList({friends}) {
  return <ul className="friend-list">
    {friends.map(({status, avatar, name}) => {
        return(
            <FriendListItem status={status} avatar={avatar} name={name}/>
        )
    })}
    
  </ul>;
}

export default FriendList;
