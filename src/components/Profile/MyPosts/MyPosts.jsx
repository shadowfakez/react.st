import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                <textarea name="" id="" cols="120" rows="5"></textarea>
                <button>Add Post</button>
            </div>
            <div className={s.posts}>
                <Post message='Hi! How are you?' likes='15' />
                <Post message="It's my first post" likes='20' />
            </div>
        </div>
    );
}

export default MyPosts;