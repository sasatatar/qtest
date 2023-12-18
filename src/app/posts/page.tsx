import fetchJson from "@/utils/fetchJson";
import styles from "./page.module.css";
import { Post } from "@/components/post/post.types";
import PostItem from "@/components/post";

export default async function Posts() {
  const data = await fetchJson<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <dl className={styles.posts}>
      {data.map((post) => {
        return <PostItem key={post.id} post={post} />;
      })}
    </dl>
  );
}
