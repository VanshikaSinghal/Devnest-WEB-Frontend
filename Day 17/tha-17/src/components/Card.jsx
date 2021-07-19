const Card = (props) => {
  const {item, calories} = props;
  return(
    <div className = "container">
      <div className = "card">
      <h1>{item}</h1>
      <h2>You have consumed {calories} calories today.</h2>
    </div>
    </div>
  );
}

export default Card;