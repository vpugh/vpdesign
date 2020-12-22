import React from 'react';

const fakeBlogData = [
  {
    title: 'What does your website need to be successful.',
    description:
      'Starting out with a website and a lot of questions, this will be a good starting point. It will help jumpstart the thought process so you will figure out what you want from your site.',
    date: 'July 21, 2020',
    key: '1',
  },
  {
    title: 'Keeping your site secure',
    description:
      'There are many moving parts in a website, so what are the best ways to keep them safe. What are the things you can do to keep your site secure.',
    date: 'August 4, 2020',
    key: '2',
  },
  {
    title: "Let's talk about content management systems",
    description:
      'Understanding what this term means for you and your business. Then breaking down the options to find what your best option is.',
    date: 'September 12, 2020',
    key: '3',
  },
  {
    title: 'Updating your website content',
    description:
      "There are times where the content on your site should be updated a few times throughout the year. Here's the reasoning for that ",
    date: 'October 24, 2020',
    key: '4',
  },
  {
    title: 'The impact of having an online presence',
    description:
      "Having a simple and effective online presence is more important than you think. You don't need a lot to make a big difference.",
    key: '5',
  },
];

const BlogPeek = () => {
  return (
    <div
      style={{
        margin: '40px 0',
        textAlign: 'center',
        paddingTop: '2rem',
      }}
    >
      <h2 style={{ fontSize: '2rem', paddingBottom: '2rem' }}>From Our Blog</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridGap: '20px 40px',
        }}
      >
        {fakeBlogData.map((bd) => (
          <div key={bd.key} style={{ textAlign: 'left' }}>
            <h3 style={{ marginBottom: '.75rem', fontSize: 24 }}>{bd.title}</h3>
            {bd.date && (
              <p style={{ marginBottom: '.25rem', fontSize: 18 }}>{bd.date}</p>
            )}
            <p>{bd.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPeek;
