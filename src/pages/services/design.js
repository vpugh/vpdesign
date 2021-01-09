import React from 'react';
import Layout from '../../components/layout';
import { Container } from '../../components/styled/container-styled';
import {
  LargeTitle,
  ImpactTitle,
} from '../../components/styled/text-header-styles';
import { theme } from '../../components/theme';

const Design = () => {
  return (
    <Layout>
      <ImpactTitle bgColor={theme.colors.paleGold}>
        <Container>
          <LargeTitle>Design</LargeTitle>
        </Container>
      </ImpactTitle>
    </Layout>
  );
};

export default Design;
