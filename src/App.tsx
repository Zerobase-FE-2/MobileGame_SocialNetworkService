import { Helmet } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';
import MainPage from './page/MainPage';
import CategoryPage from './page/CategoryPage';
import PostListPage from './page/PostListPage';
import PostPage from './page/PostPage';
import WritePage from './page/WritePage';
import CreatePage from './page/CreatePage';
import ProductPage from './page/ProductPage';
import DragDrop from './components/create/DragDrop';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Mobile-Review</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/drop" element={<DragDrop />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/category/:id" element={<ProductPage />} />
        <Route path="/update/:id" element={<CreatePage />} />
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
