import Link from "next/link";

const BreadCrumb = (props) => {

  const pactivePage = props.breadCrumbDetails ?? "Cars for Sale";

  return (
    <ol className="breadcrumb float-start">
      <li className="breadcrumb-item">
        <Link href="/">Home</Link>
      </li>
      <li className="breadcrumb-item active" aria-current="page">
        {pactivePage}
      </li>
    </ol>
  );
};

export default BreadCrumb;
