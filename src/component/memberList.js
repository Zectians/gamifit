import React from 'react'
import Member from './Member'
//gaperlu skin keknya
const MemberList =({memberlist,SelMem})=>{
    const renderList = memberlist.map((member)=>{
        return(
        <Member SelMem={SelMem} key={member.id} member={member} />
        )
    })

    return(
        <div>
            {renderList}
        </div>
    )
}

export default MemberList