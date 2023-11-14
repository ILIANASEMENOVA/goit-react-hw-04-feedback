import { SectionTitle, SectionWrap } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <>
      <SectionWrap>
        <SectionTitle>{title}</SectionTitle>
        {children}
      </SectionWrap>
    </>
  );
};
