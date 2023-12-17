export default function Post({ params }: { params: { postId: string } }) {
  return (
    <main>
      Post <span>{params.postId}</span>
    </main>
  );
}
