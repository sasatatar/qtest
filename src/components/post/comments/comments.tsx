import fetchJson from "@/utils/fetchJson";
import styles from "./comments.module.css";

type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export default async function Comments({ postId }: { postId: number }) {
  const data = await fetchJson<Comment[]>(
    "https://jsonplaceholder.typicode.com/posts/1/comments"
  );

  return (
    <div className={styles.comments}>
      <h2 className={styles.header}>Comments</h2>
      <ul>
        {data.map((comment) => {
          return (
            <dl key={comment.id} className={styles.comment}>
              <dt className={styles.name}>{comment.name}</dt>
              <dd>{comment.body}</dd>
            </dl>
          );
        })}
      </ul>
    </div>
  );
}
