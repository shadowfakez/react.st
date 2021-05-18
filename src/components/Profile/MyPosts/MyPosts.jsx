import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map( p => <Post message={p.message} likes={p.likes}/> )

    let newpostelement = React.createRef();

    let addPost = () => {
        let text = newpostelement.current.value;
        props.addPost(text);
    }


    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea name="" id="" cols="120" rows="5" ref={newpostelement}></textarea>
                </div>
                <div>
                    <button onClick={ addPost }>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;