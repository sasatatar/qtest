import fetchJson from "@/utils/fetchJson";
import styles from "./page.module.css";

export default async function Posts() {
  const data = await fetchJson("https://jsonplaceholder.typicode.com/posts");

  return (
    <main className={styles.main}>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
