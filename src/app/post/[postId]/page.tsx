import Post from "@/components/post";
import { PostData } from "@/components/post/post.types";
import fetchJson from "@/utils/fetchJson";

export default async function PostPage({
  params,
}: {
  params: { postId: string };
}) {
  const post = await fetchJson<PostData>(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );

  return <Post post={post} />;
}
