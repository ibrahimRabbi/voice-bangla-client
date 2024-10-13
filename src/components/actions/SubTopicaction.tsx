 

const SubTopicaction = () => {
    return (
        <div className="flex justify-end items-center gap-10 mt-2">
            <p>1h</p>
            <button className="flex items-center gap-1"><img src='../../public/icons/like.png' alt="" /> Like</button>
            <button className="flex items-center gap-1"><img src='../../public/icons/dislike.png' alt="" /> dislike</button>
            <button className="flex items-center gap-1"><img src='../../public/icons/comment.png' />Comment</button>
        </div>
    );
};

export default SubTopicaction;