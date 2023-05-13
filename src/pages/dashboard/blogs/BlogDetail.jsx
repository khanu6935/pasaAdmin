import { useQuery } from "@tanstack/react-query";
import { Images } from "../../../assets";
import { Header } from "../../../components";
import { useParams } from "react-router-dom";
import { axios } from "../../../lib/axios";
import Loading from "../../../components/ui/Loading";

const BlogDetail = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery(["blog", id], async () => {
    try {
      const res = await axios.get(`blogs/${id}`);
      return res.data;
    } catch (error) {
      throw error(error);
    }
  });

  if (isLoading) return <Loading />;

  if (!data) return <div>Error ... </div>;

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
              src={data.blog.image}
              className="object-fit lg:w-full w-[95%] mx-auto"
            />
          </div>
          {/* Cover Image End */}

          <div className="w-[90%] lg:w-full mx-auto">
            {/* Heading Blog */}
            <div className="font-bold text-[48px] font-[roboto] my-4">
              <h1> {data.blog.title} </h1>
            </div>
            {/* Heading Blog End */}

            <div>
              <p className="leading-[37.74px] font-normal font-[roboto] text-[1.2rem] text-left">
                {data.blog.description}
              </p>
            </div>

            <div dangerouslySetInnerHTML={{ __html: data.blog.richText }}></div>

            {/* Paragraph End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
