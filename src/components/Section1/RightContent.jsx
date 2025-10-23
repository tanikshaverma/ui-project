import RightCard from "./RightCard";


const RightContent = (props) => {
  return <div id="right" className="h-full p-6 w-3/4  rounded-4xl flex flex-nowrap gap-10 overflow-x-auto"> 
   
  {props.users.map(function(elem,idx){
return <RightCard  key={ idx} id={idx}img={elem.img}  tag={elem.tag} color={elem.color}/>
  })}
  </div>
};

export default RightContent;
