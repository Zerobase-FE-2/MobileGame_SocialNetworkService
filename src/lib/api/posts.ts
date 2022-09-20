import sanitizeHtml from 'sanitize-html';
// import client from './client';

// export const writePost = ({
//   title,
//   body,
//   tags,
// }: {
//   title: string;
//   body: string[];
//   tags: string[];
// }) => client.post('api/posts', { title, body, tags });

// export const readPost = (id: number) => client.get(`/api/posts/${id}`);

// export const listPosts = ({
//   page,
//   username,
//   tag,
// }: {
//   page: number;
//   username: string;
//   tag: string;
// }) => {
//   return client.get('/api/posts', {
//     params: { page, username, tag },
//   });
// };

// export const updatePost = ({
//   id,
//   title,
//   body,
//   tags,
// }: {
//   id: number;
//   title: string;
//   body: string[];
//   tags: string[];
// }) => {
//   client.patch(`/api/posts/${id}`, {
//     title,
//     body,
//     tags,
//   });
// };

// export const removePost = (id: number) => client.delete(`/api/posts/${id}`);
export const removeHtmlAndShorten = (body: string) => {
  const filtered = sanitizeHtml(body, {
    allowedTags: [],
  });
  return filtered.length < 200 ? filtered : `${filtered.slice(0, 200)}...`;
};

export const sanitizeOption = {
  allowedTags: [
    'h1',
    'h2',
    'b',
    'i',
    'u',
    's',
    'p',
    'ul',
    'ol',
    'li',
    'blockquote',
    'a',
    'img',
  ],
  allowedAttributes: {
    a: ['href', 'name', 'target'],
    img: ['src'],
    li: ['class'],
  },
  allowedSchemes: ['data', 'http'],
};
