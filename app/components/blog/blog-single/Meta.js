const Meta = ({ blog }) => {
  const metaItems = [
    {
      icon: "flaticon-user",
      text: "Brooklyn Simmons",
      href: "#",
    },
    {
      icon: "flaticon-chat",
      text: "12 Comments",
      href: "#",
    },
    {
      icon: "flaticon-calendar-1",
      text: "April 25, 2021",
      href: "#",
    },
  ];

  return (
    <div className="bp_meta">
      <ul className="mb0">
      <li className="list-inline-item">
            <a href="#">
              <span className="flaticon-user" />
              {blog?.carBrand?.brandName}
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
              <span className="flaticon-chat" />
              {blog?.carModel?.modelName} Model
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
              <span className="flaticon-calendar-1" />
              {blog?.carModel?.year}
            </a>
          </li>
      </ul>
    </div>
  );
};

export default Meta;
