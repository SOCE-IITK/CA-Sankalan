import React from "react";
const TeamMember = ({ name, title, imageUrl, socialLinks }) => {
  const teamMemberStyle = {
    padding: "30px 0 40px",
    marginBottom: "30px",
    backgroundColor: "#f7f5ec",
    textAlign: "center",
    overflow: "hidden",
    position: "relative",
  };

  const pictureStyle = {
    display: "inline-block",
    height: "130px",
    width: "130px",
    marginBottom: "50px",
    zIndex: "1",
    position: "relative",
  };

  const pictureBeforeStyle = {
    content: '""',
    width: "100%",
    height: "0",
    borderRadius: "50%",
    backgroundColor: "#1369ce",
    position: "absolute",
    bottom: "135%",
    right: "0",
    left: "0",
    opacity: "0.9",
    transform: "scale(3)",
    transition: "all 0.3s linear 0s",
  };

  const pictureAfterStyle = {
    content: '""',
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    backgroundColor: "#1369ce",
    position: "absolute",
    top: "0",
    left: "0",
    zIndex: "-1",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
    borderRadius: "50%",
    transform: "scale(1)",
    transition: "all 0.9s ease 0s",
  };

  const titleStyle = {
    display: "block",
    fontSize: "15px",
    color: "#4e5052",
    textTransform: "capitalize",
  };

  const socialStyle = {
    width: "100%",
    padding: "0",
    margin: "0",
    backgroundColor: "#1369ce",
    position: "absolute",
    bottom: "-100px",
    left: "0",
    transition: "all 0.5s ease 0s",
  };

  const socialLiStyle = {
    display: "inline-block",
  };

  const socialLinkStyle = {
    display: "block",
    padding: "10px",
    fontSize: "17px",
    color: "white",
    transition: "all 0.3s ease 0s",
    textDecoration: "none",
  };

  return (
    <div style={teamMemberStyle} className="our-team">
      <div style={pictureStyle} className="picture">
        <img src={imageUrl} alt={name} style={imageStyle} />
        <div style={pictureBeforeStyle}></div>
        <div style={pictureAfterStyle}></div>
      </div>
      <div className="team-content">
        <h3 className="name">{name}</h3>
        <h4 style={titleStyle} className="title">
          {title}
        </h4>
      </div>
      <ul style={socialStyle} className="social">
        {socialLinks.map((link, index) => (
          <li key={index} style={socialLiStyle}>
            <a
              href={link}
              style={socialLinkStyle}
              className={`fa fa-${link}`}
              aria-hidden="true"
            ></a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Team = () => {
  const teamData = [
    {
      name: "Michele Miller",
      title: "Web Developer",
      imageUrl: "https://picsum.photos/130/130?image=1027",
      socialLinks: [
        "https://codepen.io/collection/XdWJOQ/",
        "https://codepen.io/collection/XdWJOQ/",
        "https://codepen.io/collection/XdWJOQ/",
        "https://codepen.io/collection/XdWJOQ/",
      ],
    },
    {
      name: "Patricia Knott",
      title: "Web Developer",
      imageUrl: "https://picsum.photos/130/130?image=839",
      socialLinks: [
        "https://codepen.io/collection/XdWJOQ/",
        "https://codepen.io/collection/XdWJOQ/",
        "https://codepen.io/collection/XdWJOQ/",
        "https://codepen.io/collection/XdWJOQ/",
      ],
    },
    {
      name: "Justin Ramos",
      title: "Web Developer",
      imageUrl: "https://picsum.photos/130/130?image=856",
      socialLinks: [
        "https://codepen.io/collection/XdWJOQ/",
        "https://codepen.io/collection/XdWJOQ/",
        "https://codepen.io/collection/XdWJOQ/",
        "https://codepen.io/collection/XdWJOQ/",
      ],
    },
    {
      name: "Mary Huntley",
      title: "Web Developer",
      imageUrl: "https://picsum.photos/130/130?image=836",
      socialLinks: [
        "https://codepen.io/collection/XdWJOQ/",
        "https://codepen.io/collection/XdWJOQ/",
        "https://codepen.io/collection/XdWJOQ/",
        "https://codepen.io/collection/XdWJOQ/",
      ],
    },
  ];

  return (
    <div className="container">
      <div className="row">
        {teamData.map((member, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <TeamMember {...member} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
