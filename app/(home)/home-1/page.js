import HomePage from './HomePage';

export const revalidate = 10; // Revalidate every 10 seconds

export default async function Home() {
  // Fetch the banner data
  const banner = await fetchData('https://api.univolenitsolutions.com/v1/carbanner/get/banner/image/for/66cac994eeca9633c29171e2');

  // Fetch the testimonials data
  const testimonials = await fetchData('https://api.univolenitsolutions.com/v1/testimonial/get/submitted/all/for/66cac994eeca9633c29171e2');

  // Fetch car collections data
  const collections = await fetchData('https://api.univolenitsolutions.com/v1/automobile/get/carCollections/for/66cac994eeca9633c29171e2');

  return (
    <HomePage 
      banner={banner?.carBanner} 
      testimonials={testimonials?.testimonialsList} 
      collections={collections?.carCollectionsList} 
    />
  );
}

// Utility function to fetch data with no-cache headers
async function fetchData(apiUrl) {
  const apiKey = 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj';
  const timestamp = Date.now();
  const urlWithTimestamp = `${apiUrl}${apiUrl.includes('?') ? '&' : '?'}t=${timestamp}`; // Add timestamp to bypass cache
  const res = await fetch(urlWithTimestamp, {
    method: 'GET',
    headers: {
      'X-API-Key': apiKey,
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store', // Disable caching
    }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  return data?.data;
}

// Client-side code to store car compare data in localStorage
if (typeof window !== 'undefined') {
  window.addEventListener('load', async () => {
    const compareData = localStorage.getItem('compare-data');
    if (!compareData) {
      const carInfo = await fetchData('https://api.univolenitsolutions.com/v1/automobile/get/carinfo/for/66cac994eeca9633c29171e2');
      if (carInfo && carInfo.data) {
        localStorage.setItem('compare-data', JSON.stringify(carInfo.data));
      }
    }
  });
}
