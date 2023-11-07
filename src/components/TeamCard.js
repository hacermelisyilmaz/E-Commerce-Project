function TeamCard({ person }) {
  return (
    <div className="TeamCard">
      <img src={person.img} />
      <div className="flex flex-col items-center gap-3 p-7 font-bold leading-6">
        <h5>{person.name}</h5>
        <p className="text-sm text-accent">{person.department}</p>
        <div className="text-2xl text-secondary flex gap-5">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
