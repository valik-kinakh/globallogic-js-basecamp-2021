import './Left.css';
import myImg from './myImg.jpg';
import Skills from '../Skills/Skills';
import Interests from '../Interest/Interests';

export default function Left() {

  return (
    <div className='mainL'>
      <p className='pImg'><img src={myImg} className='myImage' /></p>
      <h4>PERSONAL</h4>
      <h4>Email address 📧</h4>
      <p className='genInfo'>valik.kinah@gmail.com</p>
      <br />
      <h4>Telephone number 📞</h4>
      <p>0637219407</p>
      <br />
      <h4>Address 🏡</h4>
      <p className='genInfo'>Masaruka st 6/3</p>
      <br />
      <h4>Postal code 📫</h4>
      <p>79020</p>
      <br />
      <h4>City/Town 🌆</h4>
      <p>Lviv</p>
      <br />
      <p>_________________________________________</p>
      <h4>SKILLS</h4>
      <Skills />
      <br />
      <p>_________________________________________</p>
      <h4>LANGUAGES</h4>
      <br />
      <p>ENGLISH 🇬🇧</p>
      <p>Highly proficient in speaking and in writing</p>
      <br />
      <p>_________________________________________</p>
      <h4>INTERESTS</h4>
      <Interests />
    </div>
  );
}