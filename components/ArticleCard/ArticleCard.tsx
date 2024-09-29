import Link from "next/link";

type ArticleCardProps = {
  date: string;
  image?: string;
  heading: string;
  para: string;
  href: string;
  author: string;
};

export const ArticleCard: React.FC<ArticleCardProps> = ({
  image,
  heading,
  para,
  href,
  author,
  date,
}) => {
  const unformattedDate = new Date(date);
  const formattedDate = unformattedDate.toLocaleString(undefined, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  return (
    <div className="w-full md:w-[30%] hover:scale-[105%] transition-transform transform ease-in-out">
      <Link href={href}>
        <div className="text-black border-[1px] border-primaryColor rounded-lg w-full px-3 py-3 flex flex-col gap-5">
          {/* <div className="">
            <div
              className="bg-cover bg-center w-full h-[200px] md:h-[250px] rounded-lg"
              style={{
                backgroundImage: `url('${image}')`,
              }}
            ></div>
          </div> */}
          <div className="flex flex-col gap-5 px-2">
            <div>
              <h1 className="uppercase bg-secondaryColor w-fit px-3 py-1 rounded-sm text-primaryColor">
                {author}
              </h1>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="font-bold text-primaryColor text-xl md:text-2xl">
                {heading}
              </h1>

              <div
                className="text-primaryColor"
                dangerouslySetInnerHTML={{ __html: para }}
              ></div>
            </div>
            <div className="w-full flex flex-row justify-between items-center">
              <div className="w-[50%] ">
                <h1>{formattedDate}</h1>
              </div>
              <div className="w-[50%] h-full flex justify-end">
                <h1 className="px-3 py-1 font-bold ">Read More</h1>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
