import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    imgSrc: "/images/category-item/compact.webp",
    title: "Compact",
    delay: 100,
  },
  {
    imgSrc: "/images/category-item/sedan.webp",
    title: "Sedan",
    delay: 200,
  },
  {
    imgSrc: "/images/category-item/suv.webp",
    title: "SUV",
    delay: 300,
  },
  {
    imgSrc: "/images/category-item/convertible.webp",
    title: "Convertible",
    delay: 400,
  },
  {
    imgSrc: "/images/category-item/coupe.webp",
    title: "Coupe",
    delay: 500,
  },
];

const Category = () => {
  return (
    <>
      {categories.map((category, index) => (
        <div
          key={index}
          className={`col-6 col-sm-6 col-md-4 col-lg col-xl`}
          data-aos="fade-up"
          data-aos-delay={category.delay}
        >
          <div className="category_item">
            <div className="thumb">
              <Image
                width={150}
                height={58}
                style={{ objectFit: "cover" }}
                src={category.imgSrc}
                alt={`${index + 1}.png`}
              />
            </div>
            <div className="details">
              <p className="title">
                <Link href="/listing-v4">{category.title}</Link>
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Category;
