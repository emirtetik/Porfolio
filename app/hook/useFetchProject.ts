import { useState, useEffect } from "react";
import axios from "axios";
import { PostProps } from "../types";
import i18n from "../i18n/i18n";

const useFetchPosts = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const language = i18n.language;
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("/api/projects", {
          headers: {
            "Cache-Control": "no-store",
          },
        });
        const filteredPosts = response.data.filter((post: PostProps) => {
          return post.slug.includes(`.${language}`);
        });

        console.log("filteredPosts", filteredPosts);
        setPosts(filteredPosts);
      } catch (err: unknown) {
        console.error(err);
        setError("Error fetching posts");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [language]);

  return { posts, loading, error };
};

export default useFetchPosts;
