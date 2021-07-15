import Blocks from "./blocks";
const Row = () => {
  let arr = [];

  for (let i = 0; i < 8; i++) {
    arr.push(<Blocks />);
  }

  return <div class='row'>{arr}</div>;
};

export default Row;