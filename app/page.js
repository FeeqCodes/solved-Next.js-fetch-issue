import { getLocalData } from "@/lib/getdata"

export default async function Home() {
  const posts = await getLocalData()
  return (
    <div>
    {posts.map((post) => {
      return (
        <div key={post.id}>
        <p>{post.title}</p>
        {/* {JSON.stringify(post)} */}
        </div>

      )
    })}
    </div>
  )
};



