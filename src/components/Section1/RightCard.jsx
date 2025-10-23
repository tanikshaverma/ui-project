import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className="h-full w-80 rounded-4xl relative overflow-hidden   shrink-0">
      <img className="h-full w-full object-cover" src={props.img} alt="" />
      <RightCardContent tag={props.tag} id={props.id} color={props.color} />
    </div>
  );
};

export default RightCard;
