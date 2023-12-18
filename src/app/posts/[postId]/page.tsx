import fetchJson from "@/utils/fetchJson";

export default async function Post({ params }: { params: { postId: string } }) {
  const data = await fetchJson(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );

  return (
    <div>
      Post <span>{params.postId}</span>
    </div>
  );
}
