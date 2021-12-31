import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import UseMemoHook from './components/UseMemoHook';

//useEffect => Agr dependency ka bracket nhi banaye we to every time re-render hoga ye useEffect ka function.
//useEffect => Agr dependency ka srf bracket banaye hain kch define nhi kiya undr tou ye componentDidMount ki tarah kaam karaiga. Mtlb First time render only.
//useEffect => Agr dependency mai dono chiza yani bracket ka undr define bhi kiya hua hai. Tou ye jb re-render hoga jb us define chiz mai koi update aae gi.

function App() {
  // const [posts, setPosts] = useState([]);
  // const [id, setId] = useState(1);
  // const [postId, setPostId] = useState(1)

  //Hmna useState mai array bracket isliye diya hain kyu hm js api se (or server se) data get kraha hai wo array form mai hai.

  // console.log('Ye wo chala hai jo hm na upr useState mai empty bracket diya wa hain', posts);

  //Agr aap useEffect ka undr koi dependency nhi denga tou DidMount aur DidUpdate dono pr chala ga. Isliye ye infinite chlraha hai.
  // useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //     .then((res) => setPost(res.data))
  //     .catch(e => console.log(e));
  // })

  //Ye useEffect hmna jb lagaya tha jb button nhi lagaya tha kyu ka hm direct id ko change krka data fetch krraha tha.
  // useEffect(() => {
  //   axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  //     .then((res) => setPosts(res.data))
  //     .catch((e) => console.log(e))
  // }, [id]);

  //Ye useEffect hmna button ka dbana pr data fetch hoga. Jbhi hmna yaha button ka alag se hook banakr use kya hai.
  // useEffect(() => {

  //   console.log('use effect is running');

  //   axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  //     .then((res) => setPosts(res.data))
  //     .catch((e) => console.log(e))
  // }, [postId]);


  // const handleSetId = (id) => {
  //   setPostId(id);
  // }

  // return (
  //   <div className="App">
  //     <input type='number' value={id} onChange={e => setId(e.target.value)} />
  //     <button type='button' onClick={() => handleSetId(id)}>Fetch Data</button>

  {/* <ul>
        {posts.map((post) => (<li key={post.id}>{post.title}</li>
        ))
        }
      </ul> */}

  //       <li>
  //         {posts.title}
  //       </li>


  //   );
  // }

  return (
    <div className="App">
      <UseMemoHook />
    </div>
  )
}
export default App;
