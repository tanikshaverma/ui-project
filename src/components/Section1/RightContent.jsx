import RightCard from "./RightCard";


const RightContent = (props) => {
  return <div className="h-full p-6 w-3/4 flex flex-nowrap gap-10 overflow-x-auto"> 
   
  {props.users.map(function(elem,idx){
return <RightCard  key={ idx} id={idx}img={elem.img}  tag={elem.tag}/>
  })}
  </div>
};

export default RightContent;
