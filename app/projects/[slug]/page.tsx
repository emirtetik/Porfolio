import { marked } from "marked";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "../../lib/posts";
import { PostProps } from "../../types";
type tParams = Promise<{ slug: string[] }>;
export async function generateStaticParams() {
  const posts: PostProps[] = getAllPosts();

  return posts.map((post) => ({
    params: { slug: [post.slug] },
  }));
}

export default async function Projects({ params }: { params: tParams }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  if (!slug) {
    notFound();
  }

  const slugValue = Array.isArray(slug) ? slug[0] : slug;
  const post = getAllPosts().find((p) => p.slug === slugValue);
  if (!post) {
    notFound();
  }

  try {
    const htmlContent = marked(post.content, {
      breaks: true,
    });

    return (
      <article className="pl-16 sm:pl-12 md:pl-12 lg:pl-16 xl:pl-28 bg-[var(--text-gray)] min-h-screen text-[var(--text-white)] md:mt-0 md:gap-20 md:px-24">
        <div className="relative flex uppercase w-full md:justify-center  text-center bg-[var(--background)] py-10">
          <h1
            className="font-prata text-black text-center uppercase transition-all duration-500 ease-out transform hover:translate-x-5 hover:-skew-x-6 
    self-end  xl:text-[7rem] xl:leading-[7rem] lg:text-[6rem] lg:leading-[6rem] md:text-[5.3rem] md:leading-[5.3rem] sm:text-[4rem] sm:leading-[4rem] max-sm:text-[2.5rem] max-sm:leading-[3rem]"
          >
            {post.title}
          </h1>
          <div className="absolute flex top-10 right-10 items-center justify-center m-6 gap-x-5 md:relative md:top-0 md:left-0">
            {post.live && post.live.trim() !== "" && (
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={post.live}
                className="hover-underline-animation font-bold text-black max-sm:text-lg font-prata"
              >
                {post.liveText}
              </Link>
            )}
            {post.code && post.code.trim() !== "" && (
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={post.code}
                className="hover-underline-animation font-bold text-black font-prata"
              >
                {post.codeText}
              </Link>
            )}
          </div>
        </div>
        <div className="p-4 md:p-10">
          <p className="post-meta">{post.description}</p>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 p-10">
            {Object.keys(post)
              .filter(
                (key) => key.startsWith("image") && post[key as keyof PostProps]
              )
              .map((key) => (
                <div key={key} className="flex justify-center">
                  <Image
                    src={post[key as keyof PostProps] as string}
                    alt={post.title}
                    width={400}
                    height={300}
                    className="rounded-lg shadow-md w-full h-auto"
                    style={{ maxWidth: "350px", maxHeight: "600px" }}
                  />
                </div>
              ))}
          </div>

          <div
            className="whitespace-pre-line post-content max-w-full break-words overflow-wrap text-lg leading-relaxed"
            style={{ wordWrap: "break-word", overflowWrap: "break-word" }}
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </article>
    );
  } catch (error) {
    console.error("Markdown parsing error:", error);
    notFound();
  }
}
