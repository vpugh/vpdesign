import React from 'react';
import Layout from '../../components/layout';
import { StepCard } from '../../components/styled/consultation-styles';
import { Container } from '../../components/styled/container-styled';
import {
  LargeTitle,
  ImpactTitle,
} from '../../components/styled/text-header-styles';
import { theme } from '../../components/theme';

const Consultation = () => {
  return (
    <Layout>
      <ImpactTitle bgColor={theme.colors.paleGold}>
        <Container>
          <LargeTitle>Consultation</LargeTitle>
          <p>
            The most important step of working together is going through the
            discovery phase. This is important in building an understanding and
            being on the same page. The steps outlined in our consultation
            revolve are:
          </p>
        </Container>
      </ImpactTitle>
      <StepCard>
        <Container>
          <h3>Learn</h3>
          <p>
            The very first step in this process is filling out a questionnaire
            and then having a meeting. In this meeting we'll use the time to
            understand you as a business. This means understanding what you do,
            who are your competitors, who are you comparing yourself to, what
            are you goals, what are your business dreams.
          </p>
          <p>
            Having all this information will help us get a well rounded view of
            your business and your needs. This directly leads us into the next
            step of fleshing out what needs to be defined.
          </p>
        </Container>
      </StepCard>
      <StepCard bgColor={theme.colors.paleGreen}>
        <Container>
          <h3>Define</h3>
          <p>
            After learning about your business and your customer and now
            understanding your goals and requirements. We can start to flesh out
            and realize what is needed to reach the desired result. This is a
            more specific task of breaking down all the goals and requirements
            and talking through the fine points to bring them to life.
          </p>
          <p>
            We can get detailed and start thinking of technology and design
            styles in this part. Very important to make sure expectation will
            match the recommendation and the solution.
          </p>
        </Container>
      </StepCard>
      <StepCard>
        <Container>
          <h3>Recommend</h3>
          <p>
            The last step after all the hardwork has been completed. This is
            taking everything that gets hashed out in the define stage and then
            putting it into perspective. We have to include pricing and
            timeframe into everything and this is the make or break section for
            some features or pieces. We can decide to start with something basic
            and then add-on more features at a later date. We'll figure out what
            the deliverables will be and come to the final understanding.
          </p>
        </Container>
      </StepCard>
    </Layout>
  );
};

export default Consultation;
