import Post from "../Post";

function Posts({ data }) {
  return (
    <div className="Posts py-[5rem] w-[70%] m-auto">
      <div className="flex flex-col items-center font-bold mb-24">
        <h6 className="text-sm text-secondary">{data.title1}</h6>
        <h2 className="text-[2.5rem]">{data.title2}</h2>
      </div>
      <div className="flex gap-10">
        {data.posts.map((post, index) => {
          return <Post data={post} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Posts;
