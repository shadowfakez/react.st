import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                New Post
            </div>
                <Post />
                <Post />
                <Post />
        </div>
    );
}

export default MyPosts;