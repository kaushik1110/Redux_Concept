import React from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../redux'

function userContainer({userData, fetchUsers}) {
    userEffect(()=>{
        fetchUsers()
    },[])
    return userData.loading ? (
        <h2>
            Loading
        </h2>
    ) : userData.error ? (
    <h2>{userData.error}</h2>
    ) :(
        <div>
            <h2>User List</h2>
        {
            userData && userData.users && userData.users.map(user=><p>{user.name}</p>)
        }
        </div>
    )
}

const mapStateToProps = state => {
    return{
        userData: state.user
    }
}
const mapDispatchToProps = state => {
    return{
        fetchUsers: () => dispatchEvent(fetchUsers())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
