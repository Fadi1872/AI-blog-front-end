import PopularBlogCard from '../popularBlogCard/PopularBlogCard'
import blogs from './../../data/blogs'

const PopularBlog = () => {

    const bloginformation =blogs.find((item) => item .id === 5);
    console.log( bloginformation );

  return (
    <>
        <PopularBlogCard
          item={bloginformation}
        />
    </>
    
  )
}

export default PopularBlog