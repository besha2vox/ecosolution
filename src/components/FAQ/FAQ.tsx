import React from 'react';

import { IChildrenProps } from '../../types';

import Section from '../shared/Section';
import Container from '../shared/Container';
import Title from '../shared/Title';
import Anchor from '../Anchor';
import { containerStyles } from './FAQ.syled';
import { useWindowWidth } from '../../hooks';
import QAndA from './Q&A';

const FAQComponent: React.FC<IChildrenProps> = ({ children }) => {
  return (
    <Section>
      <Container styles={containerStyles}>{children}</Container>
    </Section>
  );
};

const FAQ: React.FC = () => {
  const device = useWindowWidth();

  if (device === 'mobile') {
    return (
      <FAQComponent>
        <Title type="h2" title="Frequently Asked Questions" />
        <div>FAQ</div>
        <p>Didn't find the answer to your question? </p>
        <Anchor text="Contact Us" />
      </FAQComponent>
    );
  }

  return (
    <FAQComponent>
      <div>
        <Title type="h2" title="Frequently Asked Questions" />
        <p>Didn't find the answer to your question? </p>
        <Anchor text="Contact Us" />
      </div>
      <QAndA />
    </FAQComponent>
  );
};

export default FAQ;