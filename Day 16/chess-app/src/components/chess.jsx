import Row from "./rows";

const Chess = () => {
  let arr=[]

  for(let i=0; i<8; i++){
    arr.push(<Row />);
  }

  return (
    <div className = "chess">
      {arr}
    </div>
  );
}

export default Chess;
