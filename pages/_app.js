import '../styles/globals.scss'
import BlogLayout from '../components/layouts/BlogLayout'
import Store from '../store'
function MyApp({ Component, pageProps }) {
  return (
    <Store>
      <BlogLayout>
        <Component {...pageProps} />
      </BlogLayout>
    </Store>
  )
}

export default MyApp
