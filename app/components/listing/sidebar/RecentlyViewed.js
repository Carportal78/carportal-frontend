import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const RecentlyViewed = ({ cars }) => {

  const router = useRouter();

  const handleCarDetailsRoute = (listing) => {
    const formatUrlPart = (str) => {
      if (typeof str !== 'string') {
        console.error('Expected a string but got:', typeof str);
        return '';
      }
      return str.trim().replace(/\s+/g, '-').toLowerCase();
    }
    const brandName = formatUrlPart(listing?.carBrand?.brandName);
    const modelName = formatUrlPart(listing?.modelName);
    localStorage.setItem('model-details', JSON.stringify(listing));
    router.push(`/cars/${brandName}/${modelName}`);
  }

  return (
    <>
      {cars?.slice(0,4).map((car, index) => (
        <div onClick={() => handleCarDetailsRoute(car)} className="d-flex mb20 pointer" key={index}>
          <div className="flex-shrink-0" key={car?._id}>
            <Image
              width={90}
              height={80}
              className="align-self-start mr-3"
              src={car?.media?.[0]?.url}
              alt={car?.modelName}
            />
          </div>
          <div className="flex-grow-1 ms-3">
            <h5 className="post_title">{car?.modelName}</h5>
            <div className="listing_footer">
                    <ul className="mb0">
                      <li className="list-inline-item">
                        <span className="flaticon-road-perspective me-2" />
                        {car?.mileage?.split('_')?.join('-')} kmpl
                      </li>
                      <br/>
                      <li className="list-inline-item">
                        <span className="flaticon-gas-station me-2" />
                        {car?.fuelType?.join(', ')}
                      </li>
                      <br/>
                      <li className="list-inline-item">
                        <span className="flaticon-gear me-2" />
                        {car?.transmissionType?.join(', ')}
                      </li>
                    </ul>
                  </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default RecentlyViewed;
