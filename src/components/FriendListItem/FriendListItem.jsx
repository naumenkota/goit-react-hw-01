import clsx from "clsx";
import s from "./FriendListItem.module.css";

export default function FriendListItem(props) {
    return (
       <div>
 <img src={props.avatar} alt="Avatar" width="48" />
  <p className={s.name}>{props.name}</p>
    <p className={clsx({ [s.online]: props.isOnline, [s.offline]: !props.isOnline })}>
         {props.isOnline ? 'Online' : 'Offline'}
     </p>
</div>
    )
}