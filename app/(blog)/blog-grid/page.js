import Blog from './Blog';

// Utility function to fetch blog data
async function fetchBlogs() {
  const apiKey = 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj';
  const res = await fetch('https://api.univolenitsolutions.com/v1/automobile/get/carblog/submitted/all/for/66cac994eeca9633c29171e2', {
    method: 'GET',
    headers: {
      'X-API-Key': apiKey,
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch blogs');
  }

  const data = await res.json();
  return data?.data || [];
}

export default async function Page() {
  const blogs = await fetchBlogs();

  return <Blog blogs={blogs?.carBlogsList} />;
}
