import React from 'react';
import { BlogIndexContainer } from '../styled/blog-peek-styles';
import { Container } from '../styled/container-styled';
import { theme } from '../theme';
import { TextTitle } from '../styled/text-header-styles';

const fakeBlogData = [
  {
    title: 'What does your website need to be successful.',
    description:
      'Starting out with a website and a lot of questions, this will be a good starting point. It will help jumpstart the thought process so you will figure out what you want from your site.',
    date: 'July 21, 2020',
    IsoDate: '2020-07-21T17:00:00.000Z',
    key: '1',
  },
  {
    title: 'Keeping your site secure',
    description:
      'There are many moving parts in a website, so what are the best ways to keep them safe. What are the things you can do to keep your site secure.',
    date: 'August 4, 2020',
    IsoDate: '2020-08-04T17:00:00.000Z',
    key: '2',
  },
  {
    title: "Let's talk about content management systems",
    description:
      'Understanding what this term means for you and your business. Then breaking down the options to find what your best option is.',
    date: 'September 12, 2020',
    IsoDate: '2020-09-12T17:00:00.000Z',
    key: '3',
  },
  {
    title: 'Updating your website content',
    description:
      "There are times where the content on your site should be updated a few times throughout the year. Here's the reasoning for that ",
    date: 'October 24, 2020',
    IsoDate: '2020-10-24T17:00:00.000Z',
    key: '4',
  },
  {
    title: 'The impact of having an online presence',
    description:
      "Having a simple and effective online presence is more important than you think. You don't need a lot to make a big difference.",
    date: 'November 11, 2020',
    IsoDate: '2020-11-11T17:00:00.000Z',
    key: '5',
  },
];

const BlogPeek = () => {
  return (
    <div style={{ background: theme.colors.paleGreen }}>
      <Container>
        <BlogIndexContainer>
          <TextTitle textColor={theme.colors.baseGreen1}>
            From Our Blog
          </TextTitle>
          <div className='gridContainer'>
            {fakeBlogData
              .sort((a, b) => new Date(a.IsoDate) < new Date(b.IsoDate))
              .map((bd) => (
                <div
                  key={bd.key}
                  style={{
                    textAlign: 'left',
                    color: theme.colors.paleLightGreen,
                  }}
                >
                  <h3 style={{ marginBottom: '.75rem', fontSize: 24 }}>
                    {bd.title}
                  </h3>
                  {bd.date && (
                    <p style={{ marginBottom: '.25rem', fontSize: 18 }}>
                      {new Date(bd.IsoDate).toLocaleDateString()}
                    </p>
                  )}
                  <p style={{ fontSize: '1.112rem' }}>{bd.description}</p>
                </div>
              ))}
          </div>
        </BlogIndexContainer>
      </Container>
    </div>
  );
};

export default BlogPeek;
