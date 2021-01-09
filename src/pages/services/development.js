import React from 'react';
import Layout from '../../components/layout';
import { Container } from '../../components/styled/container-styled';
import {
  ImpactTitle,
  LargeTitle,
} from '../../components/styled/text-header-styles';
import { theme } from '../../components/theme';

const Development = () => {
  return (
    <Layout>
      <ImpactTitle bgColor={theme.colors.paleGold}>
        <Container>
          <LargeTitle>Development</LargeTitle>
        </Container>
      </ImpactTitle>
    </Layout>
  );
};

export default Development;
