"use client";
import AvatarName from '@/components/Global/AvatarName'
import {CardGroup} from '@/components/Global/CardGroup'

const mockDatDonat4 = [
  {
    id: 1,
    imageSrc: "img1",
    title: "Tee shirt!",
    price: "40 €",
    contributions: "6 contributions",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", // Описание из первого элемента массива items
  },
  {
    id: 2,
    imageSrc: "img2",
    title: "Another Tee shirt!",
    price: "35 €",
    contributions: "8 contributions",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

const Leaderboard = () => {
  const filteredData = [
    {
      place: 1,
      name: "Liam Smith",
      country: "USA",
      dons: 250,
      points: 250,
    },
    {
      place: 2,
      name: "Olivia Johnson",
      country: "Canada",
      dons: 249,
      points: 249,
    },
    {
      place: 3,
      name: "Noah Brown",
      country: "UK",
      dons: 248,
      points: 248,
    },
    {
      place: 4,
      name: "Emma Taylor",
      country: "Australia",
      dons: 247,
      points: 247,
    },
    {
      place: 5,
      name: "Sophia Wilson",
      country: "Germany",
      dons: 246,
      points: 246,
    },
    {
      place: 6,
      name: "William Miller",
      country: "France",
      dons: 245,
      points: 245,
    },
    {
      place: 7,
      name: "James Davis",
      country: "Spain",
      dons: 244,
      points: 244,
    },
    {
      place: 8,
      name: "Oliver Harris",
      country: "Italy",
      dons: 243,
      points: 243,
    },
    {
      place: 9,
      name: "Benjamin Clark",
      country: "Japan",
      dons: 242,
      points: 242,
    },
    {
      place: 10,
      name: "Charlotte Young",
      country: "China",
      dons: 241,
      points: 241,
    },
    {
      place: 11,
      name: "Lucas Martin",
      country: "Mexico",
      dons: 240,
      points: 240,
    },
    {
      place: 12,
      name: "Mia Lee",
      country: "South Korea",
      dons: 239,
      points: 239,
    },
    {
      place: 13,
      name: "Ethan Garcia",
      country: "Brazil",
      dons: 238,
      points: 238,
    },
    {
      place: 14,
      name: "Ava Rodriguez",
      country: "Argentina",
      dons: 237,
      points: 237,
    },
    {
      place: 15,
      name: "Sophia White",
      country: "Russia",
      dons: 236,
      points: 236,
    },
    {
      place: 16,
      name: "Logan Patel",
      country: "India",
      dons: 235,
      points: 235,
    },
    {
      place: 17,
      name: "Olivia Martinez",
      country: "Spain",
      dons: 234,
      points: 234,
    },
    {
      place: 18,
      name: "Mason Kim",
      country: "South Korea",
      dons: 233,
      points: 233,
    },
    {
      place: 19,
      name: "Harper Lopez",
      country: "Brazil",
      dons: 232,
      points: 232,
    },
    {
      place: 20,
      name: "Emma Wright",
      country: "Argentina",
      dons: 231,
      points: 231,
    },
  ];

  return (
    <div>
      <div className="flex-column mx-auto mt-10 max-w-[1266px] gap-[86px] lg:flex ">
        <div className="p-4 lg:w-3/5 lg:flex-shrink-0 ">
          <h3 className="mb-6 text-3xl font-bold">Leaderboard</h3>
          <div className="mb-2 flex flex-col lg:flex-row gap-4">
            <div className="flex-1 rounded-lg bg-[#FFDB65] p-4 shadow-md">
              <h3 className="mb-2 text-base font-semibold">1st place </h3>
              <div className="mb-2 text-xl font-extrabold">{filteredData[0].name}</div>
              <h4 className="mb-1 text-xs font-normal opacity-50">
                {filteredData[0].dons} Dons &nbsp;
                <span
                  style={{
                    position: "relative",
                    top: "-3px",
                  }}
                >
                  .
                </span>
                &nbsp; {filteredData[0].points} Points
              </h4>
            </div>
            <div className="flex-1 rounded-lg bg-[#F2F2F2] p-4 shadow-md">
              <h3 className="mb-2 text-base font-semibold">2nd place</h3>
              <div className="mb-2 text-xl font-extrabold">{filteredData[1].name}</div>
              <h4 className="mb-1 text-xs font-normal opacity-50">
                {filteredData[1].dons} Dons &nbsp;
                <span
                  style={{
                    position: "relative",
                    top: "-3px",
                  }}
                >
                  .
                </span>
                &nbsp; {filteredData[1].points} Points
              </h4>
            </div>
            <div className="flex-1 rounded-lg bg-[#F2C7B3] p-4 shadow-md">
              <h3 className="mb-2 text-base font-semibold">3d place</h3>
              <div className="mb-2 text-xl font-extrabold">{filteredData[2].name}</div>
              <h4 className="mb-1 text-xs font-normal opacity-50">
                {filteredData[2].dons} Dons &nbsp;
                <span
                  style={{
                    position: "relative",
                    top: "-3px",
                  }}
                >
                  .
                </span>
                &nbsp; {filteredData[2].points} Points
              </h4>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th className="text-center opacity-50">Place</th>
                  <th className="opacity-50">Name</th>
                  <th className="opacity-50">Dons</th>
                  <th className="opacity-50">Ponts</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.slice(3).map((data) => (
                  <tr key={data.place}>
                    <th className="text-center text-base font-semibold">{data.place}</th>
                    <td>
                      <div className="flex">
                        <AvatarName name={data.name} />
                        <div className="ml-2 flex flex-col">
                          <div className="text-base font-semibold">{data.name}</div>
                          <div className="text-sm font-normal opacity-50">{data.country}</div>
                        </div>
                      </div>
                    </td>
                    <td className="text-base font-semibold">{data.dons}</td>
                    <td className="text-base font-semibold">{data.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-5 flex flex-col lg:flex-row justify-between content-center">
            <div className="text-base font-medium my-auto">
              Showing: 1-{filteredData.length} of {filteredData.length} results
            </div>
            <div className="join mt-4 lg:mt-0">
              <button className="btn join-item">1</button>
              <button className="btn join-item">2</button>
              <button className="btn btn-disabled join-item">...</button>
              <button className="btn join-item">99</button>
              <button className="btn join-item">100</button>
            </div>
          </div>
        </div>
  
        <div>
          <h3 className="mb-[30px] text-[26px] leading-[130%] md:text-[30px] text-center lg:text-left">Contreparties</h3>
          <div className="mx-auto">
            <CardGroup data={mockDatDonat4}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
