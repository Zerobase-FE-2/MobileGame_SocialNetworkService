import { Helmet } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';
import PostListPage from './page/PostListPage';
import PostPage from './page/PostPage';
import WritePage from './page/WritePage';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Mobile-Review</title>
        <Routes>
          <Route path="/"></Route>
          <Route path="write" element={<WritePage />} />
          <Route path="/@:username">
            <Route index element={<PostListPage />} />
            <Route path=":postId" element={<PostPage />} />
          </Route>
        </Routes>
      </Helmet>
    </div>
  );
}

export default App;
