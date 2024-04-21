import { docData, getNoteWorthyProject } from "@/firebase/firebase";
import ProjectItem2 from "./ProjectItem2";

const Gridlayout = async () => {
  try {
    const projects = (await getNoteWorthyProject()) as docData[];
    return (
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((item, index) => (
          <ProjectItem2 index={index} item={item} key={item.id} />
        ))}
      </div>
    );
  } catch (error) {
    console.log(error);
    return (
      <div className="flex h-[50vh] items-center justify-center text-3xl font-semibold">
        Something Went Wrong!
      </div>
    );
  }
};

export default Gridlayout;
