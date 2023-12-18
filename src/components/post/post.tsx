import Link from "next/link";
import Author from "./author/author";
import styles from "./post.module.css";
import { PostData } from "./post.types";
import Comments from "./comments/comments";

export default function Post({ post }: { post: PostData }) {
  return (
    <div className={styles.post}>
      <dt className={styles.title}>
        <Link href={`/post/${post.id}`}>{post.title}</Link>
      </dt>
      <Author userId={post.userId} />
      <dd className={styles.body}>
        <p>{post.body}</p>
      </dd>
      <Comments postId={post.id} />
    </div>
  );
}
