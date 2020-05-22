import React, {Component} from 'react'
import PostData from '../data/posts.json'

class PostList extends Component {
    render () {
        return (
            <div>
                <h1>Hello There</h1>
                {PostData.map((PostDetail,index)=>{
                    return  <div>
                    <h1>{PostDetail.name}</h1>
                    <p>{PostDetail.state}</p>    
                </div>
                })}
            </div>
        )
    }
}

export default PostList