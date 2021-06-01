import React from "react";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {

    let postsElements = props.posts.map( p => <Post message={p.message} likes={p.likes}/> )

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }


    return (
        <div className="">
            <h3 className="text-2xl text-center p-4">My Posts</h3>
            <div>
                <div className="flex">
                    <textarea className="m-4 p-4 w-full h-32 rounded-md resize-none border-2 border-gray-700"
                              ref={newPostElement}
                              value={props.newPostText}
                              onChange={onPostChange}

                    />

                </div>
                <div className="flex justify-center p-4">
                    <button className="bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded "
                            onClick={ addPost }>Add Post</button>
                </div>
            </div>
            <div className="p-4">
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;