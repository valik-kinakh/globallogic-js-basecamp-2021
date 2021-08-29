import '../carStyles.css';

export default function Suv({ cars }) {
  return (
    <div>
      <h1>Here you can see some SUVs</h1>
      {
        cars.map(car => (
          <div key={`coupe_${car.id}`}>
            <img src={car.src} alt={car.name} />
            <h4>{`${car.name} ${car.model}`}</h4>
          </div>
        ))
      }
    </div>
  );
}
