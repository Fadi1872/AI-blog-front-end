import React from 'react'
import { useParams } from 'react-router-dom'
import BlogHero from '../components/BlogHero/BlogHero';
import BlogDetails from '../components/BlogDetails/BlogDetails';
import blogs from '../data/blogs';

function BlogOpen() {
  const { id } = useParams();
  const item = blogs[id - 1];
  console.log(item);
  return (
    <div>
      <BlogHero
        img={item.img}
        title={item.title}
      />
      <BlogDetails
        item={item}
      />
    </div>
  )
}

export default BlogOpen