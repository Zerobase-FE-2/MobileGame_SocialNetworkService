import { Helmet } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';
import MainPage from './page/MainPage';
import CategoryPage from './page/CategoryPage';
import PostListPage from './page/PostListPage';
import PostPage from './page/PostPage';
import WritePage from './page/WritePage';
import CreatePage from './page/CreatePage';
import ProductPage from './page/ProductPage';
import NavigationBar from './components/NavigationBar';
import AddProduct from './components/AddProduct';
import LogInPage from './components/loginComp/LogInPage'
import Register from './components/loginComp/Register'
import ProductDetail from './components/ProductDetail';
import { auth } from './modules/firebase/app'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useState } from 'react';

function App() {
  const [uid, setUid] = useState("");
  function logout(){
    signOut(auth).then(() => {
      // Sign-out successful.
      setUid("");
      window.location.reload();
    }).catch((error) => {
      // An error happened.
    });
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      setUid(user.uid);
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
  return (
    <div className="App">
      <Helmet>
        <title>Mobile-Review</title>
      </Helmet>
      <div><button onClick={logout}>로그아웃</button></div>
      <Routes>
        <Route path="/" element={<NavigationBar userUid={uid} />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/category/:id" element={<ProductPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/update/:id" element={<CreatePage />} />
          <Route path="/board" element={<PostListPage />} />
          <Route path="/boardwrite" element={<WritePage />} />
          <Route path="/@:username">
            <Route index element={<PostListPage />} />
            <Route path=":postId" element={<PostPage />} />
          </Route>
          <Route path="/loginpage" element={<LogInPage />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/productpage" element={<ProductPage userUid={uid} />} />
          <Route path="/123" element={<ProductDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
