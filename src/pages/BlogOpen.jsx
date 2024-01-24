import React from 'react'
import { useParams } from 'react-router-dom'
import BlogHero from '../components/BlogHero/BlogHero';
import BlogDetails from '../components/BlogDetails/BlogDetails';
import blogs from '../data/blogs';

function BlogOpen() {
  const { id } = useParams();
  const item = blogs[id - 1];
  console.log(id);
  return (
    <div>
      <BlogHero
        img={item.img}
        title={item.herotitle}
      />
      <BlogDetails
        publicationDate={item.pubDate}
        category={item.category}
        authorName={item.author}
        readingTime={item.readingTime}
      />
    </div>
  )
}

export default BlogOpen