import Post from '../components/Post';
import { connectToDatabase } from '../utils/mongodb';

export default function Feed({ posts }) {
    console.log(posts);
    return (
        <div className="w-2/3 overflow-scroll">
            {/* {posts.map((post, idx) => {
                <Post content={post.content} postedAt={post.postedAt} key={idx}/>
            })} */}
        </div>
    )
}
export async function getServerSideProps() {
    const { db } = await connectToDatabase();
    const posts = await db.collection("posts").find().sort({ timestamp: -1 }).toArray();
    
    return { props: { posts } }
}
