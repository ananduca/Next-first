import Link from 'next/link'
import InputWrapper from '../components/elements/InputWrapper'
import styles from '../styles/CreateBlog.module.scss'
import { useRef, useEffect } from 'react'
import axios from 'axios'

export async function getServerSideProps(context) {
  let blog = null
  let error = null
  if (context.query.blogId) {
    await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/blog/${context.query.blogId}`).then((response) => {
      blog = response.data.data
    }).catch((err) => {
      console.log('blogs fetch Unsuccesfull, Error: ', err && err.message)
      error = true
    })
  }
  return {
    props: {
      blog,
      error
    }
  }
}

export default function CreateBlog({ blog, error }) {
  const titleInput = useRef(null)
  const imageUrlInput = useRef(null)
  const descriptionInput = useRef(null)

  useEffect(() => {
    if (blog) {
      titleInput.current.value = blog.title
      imageUrlInput.current.value = blog.image_url
      descriptionInput.current.value = blog.description
    }
  }, [blog])

  const submitForm = async (e) => {
    e.preventDefault()
    const title = titleInput.current.value
    const imageUrl = imageUrlInput.current.value
    const description = descriptionInput.current.value
    console.log(`title: ${title}, imageUrl: ${imageUrl}, description: ${description}`)
    const formData = {
      title,
      image_url: imageUrl,
      description,
      user_id: 'c3a034c8-6515-49ff-8522-8e3e7c204259'
    }
    if (blog) {
      await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/blog/${blog.id}/`, formData).then((response) => {
        console.log('Update successfull')
        const updatedBlog = response.data.data
        titleInput.current.value = updatedBlog.title
        imageUrlInput.current.value = updatedBlog.image_url
        descriptionInput.current.value = updatedBlog.description
      }).catch((err) => {
        console.log('Update unsuccesfull, Error:', err && err.message)
      })
    } else {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/blog/`, formData).then((response) => {
        console.log('Update successfull')
        titleInput.current.value = ''
        imageUrlInput.current.value = ''
        descriptionInput.current.value = ''
      }).catch((err) => {
        console.log('Update unsuccesfull, Error:', err && err.message)
      })
    }
  }
  if (error) {
    return <div>Sorry could not fetch blog details!</div>
  }
  return (
    <div>
      <Link href="/">
      <a className="nav-link">Show all blogs</a>
    </Link>
    <form className={`${styles.formContainer} flex-cl-h`}>
      <InputWrapper>
        <input type="text" placeholder='title' ref={titleInput} />
      </InputWrapper>
      <InputWrapper>
        <input type="text" placeholder='imageUrl' ref={imageUrlInput} />
      </InputWrapper>
      <InputWrapper>
        <textarea placeholder='description' ref={descriptionInput} />
      </InputWrapper>
      <button type='submit' onClick={submitForm}>
        Submit
      </button>
    </form>
    </div>
  )
}
