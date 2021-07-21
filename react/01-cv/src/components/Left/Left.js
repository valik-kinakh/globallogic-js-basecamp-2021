import React from 'react';
import './Left.css'
import myImg from './myImg.jpg'

export default function Left() {
    const skillsRate=["1/5","2/5","3/5","4/5","5/5"];
    const interests=["Traveling","Coding","Cars","Free-riding","Reading"];
    return(
        <div id={"main"}>
            <p id={"pImg"}><img src={myImg} id={"myImage"}/></p>
           <h4>PERSONAL</h4>
            <h4>Email address 📧</h4>
            <p>valik.kinah@gmail.com</p>
            <br/>
            <h4>Telephone number 📞</h4>
            <p>0637219407</p>
            <br/>
            <h4>Address 🏡</h4>
            <p>Masaruka st 6/3</p>
            <br/>
            <h4>Postal code 📫</h4>
            <p>79020</p>
            <br/>
            <h4>City/Town 🌆</h4>
            <p>Lviv</p>
            <br/>
            <p>_________________________________________</p>
            <h4>SKILLS</h4>
            <ul>
                <li>{`JavaScript ${skillsRate[3]}`}</li>
                <li>{`NodeJS ${skillsRate[2]}`}</li>
                <li>{`C++ ${skillsRate[3]}`}</li>
                <li>{`Algorithms and data structures ${skillsRate[3]}`}</li>
                <li>{`Ajax ${skillsRate[2]}`}</li>
                <li>{`Html/CSS ${skillsRate[2]}`}</li>
                <li>{`Git ${skillsRate[3]}`}</li>
                <li>{`Soft skills ${skillsRate[3]}`}</li>
            </ul>
            <br/>
            <p>_________________________________________</p>
            <h4>LANGUAGES</h4>
            <br/>
            <p>ENGLISH 🇬🇧</p>
            <p>Highly proficient in speaking and in writing</p>
            <br/>
            <p>_________________________________________</p>
            <h4>INTERESTS</h4>
            <ul>
                <li>{interests[0]} ✈️</li>
                <li>{interests[1]} 👨🏻‍💻</li>
                <li>{interests[2]} 🏎 🚙</li>
                <li>{interests[3]} 🚵🏼‍</li>
                <li>{interests[4]} 📖</li>
            </ul>
        </div>
    )
}