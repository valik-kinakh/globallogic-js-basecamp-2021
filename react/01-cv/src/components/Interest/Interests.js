import './Interests.css';

export default function Interests() {
  const interests = ['Traveling ✈️', 'Coding 👨🏻‍💻', 'Cars 🏎 🚙', 'Free-riding 🚵🏼', 'Reading 📖'];

  return (
    <ul>
      {interests.map(el => {
        return <li>{el}</li>;
      })}
    </ul>
  );
}