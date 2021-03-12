import './styles.css';

const Person = (props) => {
  return (
    <div className='Person'>
      <p onClick={props.click}>I'm {props.name} and I'm {props.years} years old!</p>
      {props.children ? <p>{props.children}</p> : ''}
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  );
}

export default Person;