function Profile() {
  const profileName = "Katherine Johnson";

  const profileImage = "https://react.dev/images/docs/scientists/MK3eW3Am.jpg";
  const styleProfile = {
    border: "1px solid #ccc",
    padding: "10px",
    margin: "10px 10px 10px 0",
  };
  const bioInfo = (name: string) => {
    return (
      <div>
        <p className="text-zinc-500 text-sm font-mono">
          {name} was an American mathematician whose calculations of orbital
          mechanics were critical to the success of the first and subsequent
          U.S. crewed spaceflights.
        </p>
      </div>
    );
  };
  return (
    <div style={styleProfile}>
      <img src={profileImage} alt={profileName} />
      <p className="text-zinc-500 text-sm font-mono">{profileName}</p>
      {bioInfo(profileName)}
    </div>
  );
}

export default function Gallery() {
  return (
    <section>
      <h1 className="text-zinc-500 text-sm font-mono">Amazing scientists</h1>
      <Profile />
    </section>
  );
}
