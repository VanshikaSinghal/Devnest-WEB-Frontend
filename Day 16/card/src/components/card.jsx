import Image from "./image";
import CardContent from "./cardContent";

const Card = () => {
  return (
    <div className = "card" style={{width: "400px"}}>
      <Image />
      <CardContent />
    </div>
  );
};

export default Card;