import React, { Component } from 'react'
import MemberList from './component/memberList'
import DetailMember from './component/DetailMember'
export class App extends Component {
  state = {
    //dummy data nunggu API
    //biar jadi gradien.co/memberlist/fulan
    //gw gk ngerti
    //jadi cuma bisa langsung nampilin aja membernya
    daftarMember: [
      { id: '1', nama: 'fulan', hobi: 'bermain bola' },
      { id: '2', nama: 'john', hobi: 'bermain bulu tangkis' },
      { id: '3', nama: 'doe', hobi: 'bermain volley' },
      { id: '4', nama: 'jane', hobi: 'bermain masakan' },
      { id: '5', nama: 'bart', hobi: 'bermain burung' }
    ],
    memberTerpilih: null //member yang di klik
  }
  SelMem=(member)=>{
    this.setState({
      memberTerpilih : member //kirim data member ke chilf detail member
    })
  }

  render() {
    return (
      <div className="container">
        <h1>Members</h1>
        <div className="row">
          <div className="col-lg-8">
            <MemberList SelMem={this.SelMem} memberlist={this.state.daftarMember} />
          </div>
          <div className="col-lg-4">
            <DetailMember member={this.state.memberTerpilih} />
          </div>
        </div>


      </div>
    )
  }
}

export default App
