import React from 'react'
import './profile.css'

const Profile = ({user}) => {
  return (
    <div className='container'>
        <h4>Profile</h4>
    <div className='Procontainer'>

        <div className='props'>
        <h5>{user.username}</h5>
        <hr />
        <p>username</p>
        </div>


        <div className='props'>
        <h5>{user.DOB}</h5>
        <hr />
        <p className='DOB'>Date of Birth</p>
        </div>


        <div className='props'>
        <h6>{user.description}</h6>
        <hr/>
        <p>Description</p>
        </div>
    
    </div>
    </div>
  )
}

export default Profile