import './Skills.css';

export default function Skills() {
  const skillsRate = ['1/5', '2/5', '3/5', '4/5', '5/5'];
  const skills = [`JavaScript ${skillsRate[3]}`, `NodeJS ${skillsRate[2]}`,
    `C++ ${skillsRate[3]}`, `Algorithms and data structures ${skillsRate[3]}`,
    `Ajax ${skillsRate[2]}`, `Html/CSS ${skillsRate[2]}`,
    `Git ${skillsRate[3]}`, `Soft skills ${skillsRate[3]}`];
  return (
    <ul>
      {skills.map(skill => {
        return <li>{skill}</li>;
      })}
    </ul>
  );
}