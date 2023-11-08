function Clients({ bg }) {
  const logos = [
    "/img/brands/fa-brands-1.png",
    "/img/brands/fa-brands-2.png",
    "/img/brands/fa-brands-3.png",
    "/img/brands/fa-brands-4.png",
    "/img/brands/fa-brands-5.png",
    "/img/brands/fa-brands-6.png",
  ];
  return (
    <div className={bg ? "Clients bg-info" : "Clients"}>
      <div className="w-[70%] flex flex-wrap justify-between items-center text-center mx-auto py-12 sm:flex-col sm:gap-16 sm:w-full">
        {logos.map((url, index) => {
          return (
            <div key={index}>
              <img
                src={url}
                key={index}
                className="max-w-full h-auto"
                alt={`Client ${index + 1}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Clients;
