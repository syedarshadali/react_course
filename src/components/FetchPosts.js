import React, { useEffect, useState } from 'react';

const FetchPosts = () => {

  const [posts, setPosts] = useState( [] );
  const [loading, setLoading] = useState( true );

  const fetchData = async () => {
    try {
      const response = await fetch( 'https://jsonplaceholder.typicode.com/posts' );
      setLoading( false );

      if( response.ok ){
        const jsonData = await response.json(); // Parse the response as JSON  
        setPosts( jsonData );        
      }
    } catch( error ){
      console.error('Error fetching posts:', error);
      setLoading(false);
    }
  }

  // Fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  if( loading ) {
    return <p>Loading Posts....</p>
  }

  return (
    <div>
      { console.log( posts ) } {/* For debugging */}
      <h3>Posts</h3>
      <ul>
        {
          posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default FetchPosts;

