function PricingPlan({ data, index }) {
  const { type, description, price, features, button } = data;
  return (
    <div
      tabIndex={index}
      className="PricingPlan border border-solid rounded-xl border-secondary py-12 px-10 flex flex-col gap-9 items-center focus:bg-primary focus:text-white focus:py-16 sm:focus:py-12"
    >
      <h2 className="text-2xl">{type}</h2>
      <p className="w-2/3 text-base text-accent text-center">{description}</p>
      <div className="w- flex flex-col flex-wrap content-center text-secondary h-16 text-left">
        <span className="h-full text-5xl pr-2">{price.amount}</span>
        <span className="text-2xl">{price.currency}</span>
        <span className="text-sm text-secondary-content">{price.interval}</span>
      </div>
      <div className="flex flex-col gap-4">
        {features.map((feature, index) => {
          return (
            <div key={index} className="flex items-center gap-2">
              {feature.included ? (
                <i class="fa-solid fa-check bg-success-content text-sm text-white border border-solid rounded-[200px] border-transparent p-2"></i>
              ) : (
                <i class="fa-solid fa-check bg-neutral text-sm text-white border border-solid rounded-[200px] border-transparent p-2"></i>
              )}
              <span className="text-sm">{feature.ft}</span>
            </div>
          );
        })}
      </div>
      <button className="bg-primary text-white w-full border-0 border-solid rounded py-4 px-10">
        {button}
      </button>
    </div>
  );
}

export default PricingPlan;
