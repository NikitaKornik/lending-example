import s from "./Reviews.module.scss";

const userData = [
  {
    id: 0,
    name: "John Cooper",
    place: "New York, USA",
    comment:
      "The team was professional, creative, and very calm under pressure. They turned our house into a beautiful home.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=180&q=80",
  },
  {
    id: 1,
    name: "Robert Fox",
    place: "California, USA",
    comment:
      "Great experience from start to finish. The layouts, material choices, and final styling made the whole space feel elevated.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=180&q=80",
  },
  {
    id: 2,
    name: "Ella Montis",
    place: "Paris, France",
    comment:
      "They listened carefully and delivered beyond our expectations. The apartment feels personal, light, and easy to live in.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=180&q=80",
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
              <span className={s.rating}>★★★★★</span>
              <span className={s.comment}>"{user.comment}"</span>
              <div className={s.user}>
                <a href="#">
                  <img className={s.img} src={user.img} alt={user.name} loading="lazy" />
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
