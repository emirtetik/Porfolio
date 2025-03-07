import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { PostProps } from '../types';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getAllPosts(): PostProps[] {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const filePath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug,
      title: data.title,
      description: data.description,
      content,
      date: data.date,
      live: data.live,
      code: data.code,
      liveText: data.liveText,
      codeText: data.codeText,
      image: data.image1,
      image2: data.image2,
      image3: data.image3,
      image4: data.image4,
      image5: data.image5,
      image6: data.image6,
      image7: data.image7,
      image8: data.image8,
      image9: data.image9,
    };
  });
}
