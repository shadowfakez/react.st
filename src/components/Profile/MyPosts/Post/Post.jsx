const Post = (props) => {
    return (
        <div className="flex p-1">
            <div className="flex border-2 border-gray-700 rounded-full bg-blue-400">
                <div className="flex inline-block">
                    <img className="h-12 w-12 rounded-full"
                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU"
                         alt=""/>
                </div>
                <div className="flex inline-block">
                    <span className="text-white pl-4 pr-4 m-auto hover:text-gray-800 focus:text-white">{props.message}</span>
                </div>
            </div>


            <div className="flex inline-block">
                <div className="flex m-auto h-8 w-8 ml-4 border-2 border-red-700 rounded-full bg-red-500">
                    <button className="m-auto text-sm text-white focus:outline-none">Like </button>
                </div>


                <span className="m-auto pl-2 text-white">{props.likes}</span>
            </div>
        </div>
    );
}

export default Post;