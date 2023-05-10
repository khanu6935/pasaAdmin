import { Images } from "../../../assets";
import { Header } from "../../../components";

const BlogDetail = () => {
  return (
    <div>
      <div className="bg-primary min-h-screen flex flex-col text-white font-[Barlow]">
        <div className="h-20">
          <Header />
        </div>

        <div className="bg-primary   lg:px-10 px-0 py-10 flex-grow flex flex-col">
          {/* Heading */}
          <div className="flex items-center justify-between">
            <div className="rounded-md my-5 mx-5 lg:mx-0 text-[24px] font-semibold  ">
              Viewing Blogs
            </div>
            <div className="space-x-0 space-y-2 sm:space-y-0 sm:space-x-2">
              <button className="bg-[#50A1FF] px-4 py-1 rounded-md font-medium font-[Barlow]">
                Publish
              </button>
              <button className="bg-[#EB001B] px-4 py-1 rounded-md font-medium font-[Barlow]">
                Delete Blog
              </button>
              <button className="bg-[#016BE6] px-4 py-1 rounded-md font-medium font-[Barlow]">
                Edit Blog
              </button>
            </div>
          </div>
          {/* Heading End */}

          {/* Cover Image */}
          <div className="mt-5 sm:mt-0">
            <img
              src={Images.casinoCover}
              className="object-fit lg:w-full w-[95%] mx-auto"
            />
          </div>
          {/* Cover Image End */}

          <div className="w-[90%] lg:w-full mx-auto">
            {/* Heading Blog */}
            <div className="font-bold text-[48px] font-[roboto] my-4">
              <h1>NEW CASINO TRENDS 2023 </h1>
            </div>
            {/* Heading Blog End */}

            <div>
              <p className="leading-[37.74px] font-normal font-[roboto] text-[1.2rem] text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                venenatis nibh non augue malesuada iaculis. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Mauris auctor velit eget
                arcu convallis pulvinar. Aenean scelerisque eros non luctus
                pretium. Sed sollicitudin elit sit amet nunc tempus aliquet id
                eu quam. Proin ligula felis, iaculis vitae mauris in, porta
                placerat elit. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas, egestas.
              </p>
            </div>

            <div>
              <p className="leading-[37.74px] font-bold font-[roboto] text-[1.2rem] text-left mt-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                venenatis nibh non augue malesuada iaculis. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Mauris auctor velit eget
                arcu convallis pulvinar. Aenean scelerisque eros non luctus
                pretium. Sed sollicitudin elit sit amet nunc tempus aliquet id
                eu quam. Proin ligula felis, iaculis vitae mauris in, porta
                placerat elit. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas, egestas.
              </p>
            </div>

            {/* Paragraph End */}

            <div className="flex my-10 space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 flex-col sm:flex-row">
              <div className="w-full flex items-center justify-center">
                <img src={Images.casinoImage1} />
              </div>
              <div className="w-full flex items-center justify-center">
                <img src={Images.casinoImage2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
