import React from 'react';
import CarNewsPage from './CarNewsPage';

const metadata = {
  title:
    "Carportal - Automotive & Car Dealer",
};

async function fetchBlogData(slug) {
  const apiKey = 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj';  // Replace with your actual API key
  const res = await fetch(`https://api.univolenitsolutions.com/v1/carblog/get/blog/${slug}/for/66cac994eeca9633c29171e2`, {
    headers: {
      'X-API-Key': apiKey,
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
    },
    next: { revalidate: 10 }, // Ensure Vercel does not cache this fetch
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
  <CarNewsPage blogData={blogData?.data?.carBlog} />
  </>);

};

export default Page;