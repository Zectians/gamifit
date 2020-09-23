import React from 'react'

const DetailMember =({member})=>{
    //if cek state SelMem
    if(!member){
        return (
            <div>Detail Member...</div>
        )
    }
    return(
        //untuk return data SelMem
<div> 
    <p>{member.nama}</p>
    <p>{member.hobi}</p>

</div>

    )
}
export default DetailMember