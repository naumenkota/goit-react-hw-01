import FriendListItem from "../FriendListItem/FriendListItem";
import s from "./FriendList.module.css";


export default function FriendList(props) {
    return (
        <ul className = {s.ul}>
            {props.friends.map((friend) => (<li className={s.li} key={friend.id}>
                <FriendListItem
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline} />
            </li>))}
</ul>)}