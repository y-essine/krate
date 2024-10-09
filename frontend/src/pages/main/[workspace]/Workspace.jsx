import { useParams } from "react-router-dom";
import MyComp from "@/components/MyComp";

const WorkspacePage = () => {
    const params = useParams();

    return (
        <>
            <h1 className="px-6 text-3xl font-bold mb-16">
                Workspace {params.slug}
            </h1>
            <MyComp />
        </>
    );
};

export default WorkspacePage;
