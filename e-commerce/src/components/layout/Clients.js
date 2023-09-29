function Clients({ data }) {
  return (
    <div className="Clients w-[70%] flex flex-wrap justify-between text-center mx-auto py-12">
      {data.map((url, index) => {
        return (
          <img
            src={url}
            key={index}
            className="max-w-full h-auto"
            alt={`Client ${index + 1}`}
          />
        );
      })}
    </div>
  );
}

export default Clients;
