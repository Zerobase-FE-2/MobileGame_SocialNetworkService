import tw from 'tailwind-styled-components';

const FooterDiv = tw.div`
absolute bottom-auto bg-blue-600 min-w-full h-48
`;

export const Footer = () => {
  return <FooterDiv />;
};
