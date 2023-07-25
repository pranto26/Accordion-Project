import React, { useState } from 'react';

const AccordionItem = ({num,title,text}) => {
    const[open, setOpen]=useState(false);

    const handleToggle=()=> {
        setOpen((open) => !open);
      }

    return (
       <div className={`item ${open ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{open ? "-" : "+"}</p>

      {open && <div className="content-box">{text}</div>}
    </div>
    );
};

export default AccordionItem;