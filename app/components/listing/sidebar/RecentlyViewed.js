import Image from "next/image";
import Link from "next/link";

// const cars = [
//   {
//     image: "/images/blog/s1.jpg",
//     title: "BMW M8 Gran Coupe",
//     description: "Base - 2021",
//     price: "$129",
//   },
//   {
//     image: "/images/blog/s2.jpg",
//     title: "Bentley Bentayga",
//     description: "V8 - 2020",
//     price: "$129",
//   },
//   {
//     image: "/images/blog/s3.jpg",
//     title: "Ferrari 488 Spider",
//     description: "Base - 2019",
//     price: "$129",
//   },
// ];

const RecentlyViewed = ({ cars }) => {
  return (
    <>
      {cars?.slice(0,4).map((car, index) => (
        <Link href="/listing-single-v1" className="d-flex mb20" key={index}>
          <div className="flex-shrink-0">
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
        </Link>
      ))}
    </>
  );
};

export default RecentlyViewed;
