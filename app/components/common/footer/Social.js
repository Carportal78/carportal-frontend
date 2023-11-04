const Social = () => {
  const socialIcons = [
    {
      icon: "fab fa-facebook-f",
      link: "https://www.facebook.com/carportal",
    },
    {
      icon: "fab fa-twitter",
      link: "https://twitter.com/CarPortalindia",
    },
    {
      icon: "fab fa-instagram",
      link: "https://www.instagram.com/carportal.co.in",
    },
    {
      icon: "fab fa-linkedin",
      link: "#",
    },
  ];

  return (
    <>
      {socialIcons.map((icon, index) => (
        <li className="list-inline-item" key={index}>
          <a href={icon.link}>
            <i className={icon.icon} />
          </a>
        </li>
      ))}
    </>
  );
};

export default Social;
