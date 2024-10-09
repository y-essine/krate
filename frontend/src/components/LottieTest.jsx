import { useLottie } from "lottie-react";
import poker from "@/assets/lottie/poker.json";

const LottieTest = () => {
    const options = {
        animationData: poker,
        loop: true,
        style: {
            width: "100%",
            height: "100%",
        },
    };

    const { View } = useLottie(options);

    return <div className="w-full h-32">{View}</div>;
};

export default LottieTest;
