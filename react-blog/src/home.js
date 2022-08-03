import { useState, useEffect } from 'react';
import BlogList from './blog-list';

const Home = () => {

  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => { // do not store w/ a const; runs code on every render
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
        .then(res => {
          if (!res.ok) {
            throw Error('Could not fetch the data for that resource');
          }
            return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsPending(false);
          setError(null);
        })
        .catch(err => {
          setIsPending(false);
          setError(err.message);
        })
    }, 1000)
  }, []); // [] - empty dependency array only runs the function after first intial render; wont run function again

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} title="All Blogs!" /> }
    </div>
  );
}

export default Home;
