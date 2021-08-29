import '../car.css';

export default function Coupe({ cars }) {
  return (
    <div className='cars'>
      <h1>Here you can see some coupes</h1>
      {
        cars.map(car => (
          <div key={`coupe_${car.id}`} className='carSlot'>
            <img src={car.src} alt={car.name} />
            <h4>{`${car.name} ${car.model}`}</h4>
          </div>
        ))
      }
    </div>
  );
}