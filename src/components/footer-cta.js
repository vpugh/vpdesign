import React from 'react';
import { Container } from './styled/container-styled';
import { CTAContainer } from './styled/footer-cta-style';
import { RegularButton } from './styled/button-styles';

const FooterCTA = () => {
  return (
    <CTAContainer>
      <Container>
        <div className='' style={{ padding: '40px 0', textAlign: ' center' }}>
          <h2 className='cta-title'>Let's work together</h2>
          <p className='cta-content'>
            Questions about design, development, and beyond. If you've got them,
            we've probably got an answer. Reach out and let us know how we can
            help.
          </p>
          <RegularButton
            href='https://tori83.typeform.com/to/b6gima'
            hasmargintop={'1rem'}
            isBold
          >
            Contact Us
          </RegularButton>
        </div>
        {/* <div
          style={{
            padding: '20px 20px 30px 20px',
            background: '#033e46',
            textAlign: 'center',
            marginBottom: 20,
          }}
        >
          <h3>Sign up for newsletter</h3>
          <p>For the latest updates, marketing tips, industry insight and much more.</p>
          <div>
            <input
              style={{ padding: '4px 10px', border: 'none', margin: '0 5px' }}
              type='text'
              placeholder='first name'
            />
            <input
              style={{ padding: '4px 10px', border: 'none', margin: '0 5px' }}
              type='text'
              placeholder='email address'
            />
            <button
              style={{
                background: '#ffaa01',
                border: 'none',
                padding: '6px 22px',
                textTransform: 'uppercase',
                fontSize: '.9rem',
              }}
            >
              Join the list
            </button>
          </div>
        </div> */}
      </Container>
    </CTAContainer>
  );
};

export default FooterCTA;
