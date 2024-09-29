type PictureCardProps = {
  image: string;
  hotelName: string;
  hotelPlace: string;
};

export const PictureCard: React.FC<PictureCardProps> = ({
  image,
  hotelName,
  hotelPlace,
}) => {
  return (
    <div className="w-[385px] h-[385px] bg-primaryColor rounded-lg flex flex-col justify-center hover:scale-[103%] hover:z-20 transition-transform transform ease-in-out">
      <div
        className="w-full h-[70%] bg-center bg-cover"
        style={{
          backgroundImage: `url("${image}")`,
        }}
      ></div>
      <div className="flex flex-col items-end px-2">
        <h1 className="text-secondaryColor">{hotelName}</h1>
        <h1 className="text-secondaryColor">{hotelPlace}</h1>
      </div>
    </div>
  );
};
