import s from "./Profile.module.css";

export default function Profile(props) {
    return (
       <div className={s.container}>
  <div>
      <img
      className={s.avatar}
      src={props.image} 
      alt="User avatar"
    />
    <p className={s.name}>{props.name}</p>
    <p className={s.adress}>@{props.tag}</p>
    <p className={s.adress}>{props.location}</p>
  </div>

  <ul className={s.ul}>
    <li className={s.li}>
      <span>Followers</span>
      <span className={s.amount}>{props.stats.followers}</span>
    </li>
    <li className={s.li}>
      <span>Views</span>
      <span className={s.amount}>{props.stats.views}</span>
    </li>
    <li className={s.li}>
      <span>Likes</span>
      <span className={s.amount}>{props.stats.likes}</span>
    </li>
  </ul>
</div> 
    )  
}