import React from 'react'
//gaperlu skin keknya

export default function Member({SelMem,member}) {

    const onClickHandler=()=>{
        SelMem(member)
    }

    return (
        <div className="list-group-item" onClick={onClickHandler} style={{cursor:'pointer'}}>
          <p>{member.nama}</p> 
          </div>
    )
}
