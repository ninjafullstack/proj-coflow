import { Card } from "@/components/Global/Card";

export const CardGroup = ({ data }) => {
  const carouselData = data.map((item) => ({
    id: item.id,
    title: item.title,
    price: item.price,
    contributions: item.contributions,
    description: item.description,
  }));

  return (
    <div>
      <div className="flex hidden flex-col space-y-9 md:block">
        {data.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>

      <div className="block md:hidden">
        <div className="carousel w-[90vw]">
          {carouselData.map((item, index) => (
            <div
              key={item.id}
              id={`item${index + 1}`}
              className="carousel-item mb-[35px] flex w-full flex-col items-center justify-center"
            >
              <Card data={item} />
            </div>
          ))}
        </div>

        <div className="mt-[33px] flex w-[90vw] justify-center gap-2 py-2">
          {carouselData.map((item, index) => (
            <a
              key={item.id}
              href={`#item${index + 1}`}
              className="btn btn-xs h-3 w-6 rounded-full bg-primary hover:bg-primary-focus"
            ></a>
          ))}
        </div>
      </div>

      <div className="w-[90vw] mt-[33px] flex h-[254px] w-[350px] flex-col rounded-2xl border p-6 sm:w-[384px]">
        <h3 className="mb-6 mt-2 px-10 text-center text-xl font-semibold">
          Donne le montant que tu veux Montant à donner
        </h3>

        <input type="text" placeholder="Ex : 30" className="input input-bordered mb-4 w-full" />

        <button className="btn h-12 w-full bg-primary text-base font-semibold text-white">
          Participer
        </button>
      </div>
    </div>
  );
};
