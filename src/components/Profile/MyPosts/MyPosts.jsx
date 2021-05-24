import React from "react";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map( p => <Post message={p.message} likes={p.likes}/> )

    let newpostelement = React.createRef();

    let addPost = () => {
        let text = newpostelement.current.value;
        props.addPost(text);
    }


    return (
        <div className="">
            <h3 className="text-2xl text-center p-4">My Posts</h3>
            <div>
                <div className="flex">
                    <textarea className="m-4 p-4 w-full h-32 rounded-md resize-none border-2 border-gray-700" ref={newpostelement} />
                </div>
                <div className="flex justify-center p-4">
                    <button className="bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded " onClick={ addPost }>Add Post</button>
                </div>
            </div>
            <div className="p-4">
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;