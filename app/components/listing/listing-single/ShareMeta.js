const ShareMeta = () => {
  const shareOptions = [
    {
      iconClassName: "flaticon-printer",
      label: "PRINT",
    },
  ];

  return (
    <ul>
      {shareOptions?.map((option, index) => (
        <li className="list-inline-item" key={index}>
          <a href="#">
            <span className={option.iconClassName} />
            {option.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ShareMeta;
