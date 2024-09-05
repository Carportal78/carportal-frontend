import HomePage from './HomePage';

export default async function Home() {
  // Fetch the banner data
  const banner = await fetchData('https://api.univolenitsolutions.com/v1/carbanner/get/banner/image/for/66cac994eeca9633c29171e2');

  // Fetch the testimonials data
  const testimonials = await fetchData('https://api.univolenitsolutions.com/v1/testimonial/get/submitted/all/for/66cac994eeca9633c29171e2');

  // Fetch car collections data
  const collections = await fetchData('https://api.univolenitsolutions.com/v1/automobile/get/carCollections/for/66cac994eeca9633c29171e2');

  // Fetch car compare data and store it in localStorage
  if (typeof window !== 'undefined') {
    const compareData = localStorage.getItem('compare-data');
    if (!compareData) {
      const carInfo = await fetchData('https://api.univolenitsolutions.com/v1/automobile/get/carinfo/for/66cac994eeca9633c29171e2');
      if (carInfo && carInfo.data) {
        localStorage.setItem('compare-data', JSON.stringify(carInfo.data));
      }
    }
  }

  // Pass the fetched data as props to the HomePage component
  return (
    <HomePage banner={banner?.carBanner} testimonials={testimonials?.testimonialsList} collections={collections?.carCollectionsList} />
  );
}

// Utility function to fetch data
async function fetchData(apiUrl) {
  const apiKey = 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj';
  const res = await fetch(apiUrl, {
    method: 'GET',
    headers: {
      'X-API-Key': apiKey,
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache must-revalidate, max-age=0',
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  return data?.data;
}
