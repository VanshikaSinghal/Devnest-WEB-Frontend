import Box from './box'

const Chess = () => {
  var boxes = [];
  for(let i=0; i<64; i++) {
    if(Math.floor(i/8)%2==0) {
      i % 2 == 0 ? boxes.push(<Box color = "white" />) : boxes.push(<Box color ="black" />);
    } else {
      i % 2 == 0 ? boxes.push(<Box color = "black" />) : boxes.push(<Box color ="white" />);
    }
  }

  return (
    <div className = "chess">
      {boxes}
    </div>
  );
}

export default Chess;
