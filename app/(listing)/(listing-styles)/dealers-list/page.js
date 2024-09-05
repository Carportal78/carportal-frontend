import Dealers from './Dealers';

export default async function Page() {
  // Fetch car brands list
  const carBrandsList = await fetchData('https://api.univolenitsolutions.com/v1/automobile/get/carbrands/for/66cac994eeca9633c29171e2');

  // Fetch car models list
  const carModelsList = await fetchData('https://api.univolenitsolutions.com/v1/automobile/get/carmodels/for/66cac994eeca9633c29171e2');

  // // Fetch car dealers list (this depends on the brandData and cityData)
  // const brandData = "someBrandId"; // Replace with actual data or logic to get this
  // const cityData = "someCityId"; // Replace with actual data or logic to get this
  // let carDealers = [];

  // if (brandData && cityData) {
  //   carDealers = await fetchData(
  //     `https://api.univolenitsolutions.com/v1/cardealer/get/dealer/brand/${brandData}/cityCode/${cityData}/for/website/66cac994eeca9633c29171e2`
  //   );
  // }

  return (
    <Dealers
      carBrandsList={carBrandsList?.carBrandsList}
      carModelsList={carModelsList?.carModelsList}
      // carDealers={carDealers}
      // brandData={brandData}
      // cityData={cityData}
    />
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
      'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
    },
    next: { revalidate: 10 }, // Ensure Vercel does not cache this fetch
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  return data?.data;
}
