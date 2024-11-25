

const PostAction = () => {
    return (
        <div className="flex justify-between items-center rounded-md p-3">

            <button className="flex items-center gap-1 font-semibold"><img src='../../public/icons/like.png' alt="" /> Like</button>
            
            <button className="flex items-center gap-1 font-semibold"><img src='../../public/icons/dislike.png' alt="" /> dislike</button>

            <button className="flex items-center gap-1 font-semibold"><img src='../../public/icons/comment.png' />Comment</button>

            <button className="flex items-center gap-1 font-semibold"><img src='../../public/icons/image 3.png' />Shear</button>
        </div>
    );
};

export default PostAction;