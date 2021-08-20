import './Content.css';

export default function Content() {
  const marginStyle = {
    marginTop: 10
  };
  return (
    <div className='rightBar'>
      <h1>Valentyn Kinakh</h1>
      <div className='text'><p>I am a first year student at Ivan Franko National University. I am keen on programing and
        coding. I enjoy using my contribute to the existing technological advances. I have excellent communication
        skills, enabling me to effectively communicate with a wide range of people. I am seeing a part-time position in
        the industry in which I can put into practice my knowledge and experience, ultimately benefiting the operations
        of the organisation that I work for.</p>
      </div>
      <br />
      <br />
      <p
        style={{ color: 'grey' }}>____________________________________________________________________________________________________________________</p>
      <br />
      <h4 style={{
        letterSpacing: 1.5,
        color: '#23a8a8',
        paddingLeft: 0
      }}>STUDIES AND CERTIFICATES</h4>
      <br />
      <h3>Bachelor of Data Science</h3>
      <p style={marginStyle}>Ivan Franko National University ⏰(2020-present)</p>
      <br />
      <h3>JavaScript fundamentals</h3>
      <p style={marginStyle}>SoftServe</p>
      <br />
      <h3>React Online Marathon</h3>
      <p style={marginStyle}>SoftServe ⏰(07.06-present)</p>
      <br />
      <h3>FullStack Basecamp GL</h3>
      <p style={marginStyle}>Globallogic ⏰(07.06-present)</p>
      <br />
      <h3>Java fundamentals</h3>
      <p style={marginStyle}>LITS</p>
      <br />
    </div>
  );
}