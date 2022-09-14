import tw from 'tailwind-styled-components';

const FooterDiv = tw.div`
fixed bottom-0 bg-blue-600 min-w-full h-24
`;

export const Footer = () => {
  return <FooterDiv />;
};
