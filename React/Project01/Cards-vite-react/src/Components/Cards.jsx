const users = [
  {
    name: "Aarav Sharma",
    profilePhoto: "https://i.pravatar.cc/150?img=1",
    about: "Frontend developer & UI lover",
    likes: 1200,
    posts: 45,
    views: 34000,
  },
  {
    name: "Priya Patel",
    profilePhoto: "https://i.pravatar.cc/150?img=2",
    about: "Content creator & blogger",
    likes: 980,
    posts: 38,
    views: 29000,
  },
  {
    name: "Rohit Verma",
    profilePhoto: "https://i.pravatar.cc/150?img=3",
    about: "Fitness freak 💪",
    likes: 1500,
    posts: 52,
    views: 41000,
  },
  {
    name: "Sujal Panchal",
    profilePhoto: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    about: "Software Engineer 💪",
    likes: 1500,
    posts: 52,
    views: 41000,
  },
];

const Cards = () => {
  return (
    <div style={{ display: "flex", gap: "40px", padding: "50px" }}>
      {users.map((data, index) => (
        <div className="main-card-container" key={index}>
          <div className="hero">
            <div className="hero-follow">
              <button>Follow</button>
            </div>
            <div className="bgc">
              <img
                src="https://images.unsplash.com/photo-1614849427248-287c4e88ef58"
                alt="bg"
              />
            </div>
          </div>
          <div className="profile-info">
            <img src={data.profilePhoto} alt={data.name} />
            <h1>{data.name}</h1>
            <p>{data.about}</p>
          </div>
          <div className="footer">
            <div className="counter-footer">
              <div className="Like-counter">
                <h3>{data.likes} k</h3>
                <p>Likes</p>
              </div>
              <div className="Post-counter">
                <h3>{data.posts}</h3>
                <p>Posts</p>
              </div>
              <div className="Views-counter">
                <h3>{data.views}</h3>
                <p>Views</p>
              </div>
            </div>

            <div className="socail-media">
              <div className="insta">
                <i className="ri-instagram-line"></i>
              </div>
              <div className="Xs">
                <i className="ri-twitter-x-line"></i>
              </div>
              <div className="linkdin">
                <i className="ri-linkedin-line"></i>
              </div>
            </div>
          </div>
        </div>
        // </div>
      ))}
    </div>
  );
};

export default Cards;

// import kk from "./../assets/Ss1.jpg";
