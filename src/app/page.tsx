'use client';

import { Post } from "@/types/Post";
import { useQuery } from "@tanstack/react-query";
import { getTodos } from "./my-api";

export default function Home() {
  const { data, isLoading, error } = useQuery({ queryKey: ['posts'], queryFn: getTodos });

  const posts: Post[] = data?.data;

  if (isLoading) {
    return (
      <div>Loading...</div>
    )
  }

  if (error) {
    return (
      <div>{ error.message }</div>
    )
  }
  
  return (
    <>
      <h1>Home page</h1>
      {posts && posts.map((post) => (
        <div key={post.id}>
          <div>todo.id</div>
          <div>{post.title}</div>
          <div>{post.body}</div>
        </div>
      ))}
    </>
  );
}
