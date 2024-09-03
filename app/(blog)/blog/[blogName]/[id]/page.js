import React from 'react';
import CarNewsPage from './CarNewsPage';

const metadata = {
  title:
    "Carportal - Automotive & Car Dealer",
};

async function fetchBlogData(slug) {
  const apiKey = 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj';  // Replace with your actual API key
  const res = await fetch(`http://localhost:3005/v1/carblog/get/blog/${slug}/for/66cac994eeca9633c29171e2`, {
    headers: {
      'x-api-key': apiKey,
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch blog data');
  }

  return await res.json();
}

const Page = async ({ params }) => {
  const { id } = params;
  const blogData = await fetchBlogData(id);
  console.log("blogData ", blogData)
  return (<>
  <CarNewsPage blogData={blogData.data.carBlog} />
  </>);

};

export default Page;