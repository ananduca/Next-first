import BlogCard from '../components/blog-card/BlogCard'
import Link from 'next/link'
import axios from 'axios'

export async function getServerSideProps(context) {
  let blog = null
  if (context.query.blogId) {
    await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/blog/${context.query.blogId}/`).then((response) => {
      blog = response.data.data
      console.log('respnese', blog.id)
    }).catch((err) => {
      console.log('blog fetch Unsuccesfull, Error: ', err && err.message)
    })
  }
  console.log('index server called')
  return {
    props: {
      blog
    }
  }
}

export default function Blog({ blog }) {
  if (blog) {
    return (
      <div>
        <Link href={`save-blog/?blogId=${blog.id}`}>
          <a>
            Edit
          </a>
        </Link>
        <div className="flex-cl-v-h">
          <BlogCard blog={blog} key={blog.id} />
        </div>
      </div>
    )
  }
  return <div>Blog details fetch unsuccesfull</div>  
}
