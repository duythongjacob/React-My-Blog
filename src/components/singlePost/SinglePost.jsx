import "./singlepost.scss"

const SinglePost = () => {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
            <img
        className="singlePostImg"
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2"
        alt=""
             />  
            <h1><div className="singlePostTitle">
                 Lorem ipsum dolor si
                 <div className="singlePostEdit">
                     <i className="singlePostIcon far fa-edit"></i>
                     <i className="singlePostIcon far fa-trash-alt"></i>
                 </div>
             </div>
             </h1> 
             <div className="singlePostInfo">
                 <span className="singlePostAuthor">Author: <b>Jacob</b></span>
                 <span  className="singlePostDate">1 hour ago</span>
             </div>
             <p className="singlePostDesc"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, sit atque! Hic quibusdam unde sint tempore eligendi delectus aspernatur tempora eius consectetur sunt repellendus reiciendis quo blanditiis, ducimus, deserunt solutaLorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, sit atque! Hic quibusdam unde sint tempore eligendi delectus aspernatur tempora eius consectetur sunt repellendus reiciendis quo blanditiis, ducimus, deserunt solutaLorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, sit atque! Hic quibusdam unde sint tempore eligendi delectus aspernatur tempora eius consectetur sunt repellendus reiciendis quo blanditiis, ducimus, deserunt solutaLorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, sit atque! Hic quibusdam unde sint tempore eligendi delectus aspernatur tempora eius consectetur sunt repellendus reiciendis quo blanditiis, ducimus, deserunt solutaLorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, sit atque! Hic quibusdam unde sint tempore eligendi delectus aspernatur tempora eius consectetur sunt repellendus reiciendis quo blanditiis, ducimus, deserunt solutaLorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, sit atque! Hic quibusdam unde sint tempore eligendi delectus aspernatur tempora eius consectetur sunt repellendus reiciendis quo blanditiis, ducimus, deserunt solutaLorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, sit atque! Hic quibusdam unde sint tempore eligendi delectus aspernatur tempora eius consectetur sunt repellendus reiciendis quo blanditiis, ducimus, deserunt solutaLorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, sit atque! Hic quibusdam unde sint tempore eligendi delectus aspernatur tempora eius consectetur sunt repellendus reiciendis quo blanditiis, ducimus, deserunt soluta.</p>
            </div>
        </div>
    );
}

export default SinglePost;
