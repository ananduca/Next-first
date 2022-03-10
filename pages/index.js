import BlogCard from '../components/blog-card/BlogCard'
import styles from '../styles/Index.module.scss'
import Link from 'next/link'
import axios from 'axios'

export async function getServerSideProps(context) {
  let blogs = null
  await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/blogs/`).then((response) => {
    blogs = response.data.data
  }).catch((err) => {
    console.log('blogs fetch Unsuccesfull, Error: ', err && err.message)
  })
  console.log('index server called')
  return {
    props: {
      blogs
    }
  }
}
export default function index({ blogs }) {
  return (
    <div>
      <Link href="/save-blog">
        <a className="nav-link">Create new blog</a>
      </Link>
      <div className={styles.blogContainer}>
        {
          blogs.map(blog => <BlogCard blog={blog} key={blog.id} />)
        }
        <div className={styles.cardPlaceholder} />
        <div className={styles.cardPlaceholder} />
        <div className={styles.cardPlaceholder} />
        <div className={styles.cardPlaceholder} />
      </div>
    </div>
  )
}
