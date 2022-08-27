import React, { useState } from 'react';


const AppAccrd = () => {
  const accordionData = {
    title: 'Section 1',
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`
  };

  const { title, content } = accordionData;
  const [isActive, setIsActive] = useState(false);

  return (
    <React.Fragment>

      <div className="accordion-item">
        <div
          className="flex flex-row justify-between cursor-pointer bg-three-500 p-5"
          onClick={() => setIsActive(!isActive)} >
          <div>{title}</div>
          <div>{isActive ? '-' : '+'}</div>
        </div>
        {isActive && <div className="p-5 bg-three-500">{content}</div>}
      </div>

    </React.Fragment>
  );
};

export default AppAccrd;