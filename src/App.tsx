import { Helmet } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './page/LoginPage';
import RegisterPage from './page/RegisterPage';
import PostListPage from './page/PostListPage';
import PostPage from './page/PostPage';
import WritePage from './page/WritePage';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Mobile-Review</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<PostListPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/board" element={<PostListPage />} />
        <Route path="/boardwrite" element={<WritePage />} />
        <Route path="/@:username">
          <Route index element={<PostListPage />} />
          <Route path=":postId" element={<PostPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
