import styles from './BlogCard.module.scss'
import Link from 'next/link'
export default function BlogCard({ blog }) {
  if (blog) {
    return (
      <div className={`${styles.blogCard} flex-cl`}>
        { blog.image_url && (
          <div className={styles.image}>
            <img src={blog.image_url} className="img-cover" />
          </div>
        )}
        <div className={`${styles.cardDetails} fill-height`}>
          { blog.title && <div className={styles.title}>{ blog.title }</div>}
          { blog.description && <div className={styles.desc}>{ blog.description }</div>}
          <Link href={`blog/?blogId=${blog.id}`}>
            <a className={styles.redirectLink}>
              Read more
            </a>
          </Link>
        </div>
      </div>
    )
  }
}
