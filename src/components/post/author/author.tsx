import fetchJson from "@/utils/fetchJson";
import styles from "./author.module.css";
import { User } from "@/types/user.types";

export default async function Author({ userId }: { userId: number }) {
  const users = await fetchJson<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );
  const user = users.find((user) => user.id === userId);

  return (
    <div className={styles.author}>
      <span>By {user?.name ?? "-"}</span>
    </div>
  );
}
