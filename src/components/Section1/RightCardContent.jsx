import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className="h-full w-full absolute top-0 left-0 p-8 flex flex-col justify-between">
      <h2 className=" bg-white rounded-full flex justify-center items-center h-10 w-10 text-xl font-semibold">
        1
      </h2>
      <div>
        <p className="text-md text-white mb-10 leading-relaxed">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
          cupiditate exercitationem, nemo aut perspiciatis eaque!
        </p>

        <div className="flex justify-between">
          <button className="bg-blue-600 text-white rounded-full px-8 py-2 font-medium">
            {props.tag}
          </button>
          <button className="bg-blue-600 text-white rounded-full px-3 py-2 font-medium">
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default RightCardContent