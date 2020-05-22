import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import PostData from '../data/posts.json'

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      errors: {}
    }
  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email
    })
  }

  render() {
    return (
      <div className="container">
        
           <h1 className="text-center mt-5">States With Capitals</h1>
           <div className="jumbotron row mt-3">
          {PostData.map((PostDetail,index)=>{
                    return  <div className="card col-md-6">
                    <h5 class="card-title">{PostDetail.name}</h5>
                    <p class="card-text">{PostDetail.state}</p>    
                </div>
                })}
        </div>
      </div>
    )
  }
}

export default Profile
