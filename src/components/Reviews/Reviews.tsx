import s from "./Reviews.module.scss";

import UserImg from "@/assets/images/user.png";

const userData = [
  {
    id: 0,
    name: "John Cooper",
    place: "New York, USA",
    comment:
      "The team was professional and creative. They turned our house into a beeutiful home.",
    img: UserImg,
  },
  {
    id: 1,
    name: "Robert Fox",
    place: "California, USA",
    comment:
      "Great experience from start to finish. Highly recommend their interior design services!",
    img: UserImg,
  },
  {
    id: 2,
    name: "Ela Montis",
    place: "Paris, France",
    comment:
      "They listened to our needs and delivered beyond our experience.",
    img: UserImg,
  },
];

export default function Reviews() {
  return (
    <div className={s.root}>
      <h2 className={s.h2}>What Our Clients Say</h2>
      <ul className={s.list}>
        {userData.slice(0, 3).map((user) => {
          return (
            <li key={user.id} className={s.listItem}>
              <span className={s.comment}>"{user.comment}"</span>
              <div className={s.user}>
                <a href="#">
                  <img className={s.img} src={user.img} />
                </a>
                <div className={s.userData}>
                  <a href="#" className={s.userName}>
                    {user.name}
                  </a>
                  <span className={s.userPlace}>{user.place}</span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
