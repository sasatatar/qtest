import fetchJson from "@/utils/fetchJson";
import styles from "./page.module.css";
import { PostData } from "@/components/post/post.types";
import Post from "@/components/post";
import { User } from "@/types/user.types";

export default async function Posts({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const [users, posts] = await Promise.all([
    fetchJson<User[]>("https://jsonplaceholder.typicode.com/users"),
    fetchJson<PostData[]>("https://jsonplaceholder.typicode.com/posts"),
  ]);

  const matchingUserIds = new Set(
    users
      .filter((user) => user.name.toLowerCase().includes(searchParams.q ?? ""))
      .map((user) => user.id)
  );

  const filteredPosts = posts.filter((post) =>
    matchingUserIds.has(post.userId)
  );

  return (
    <dl className={styles.posts}>
      {filteredPosts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </dl>
  );
}
