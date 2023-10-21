import ChatBot from "./ChatBot";
import Featured from "./Featured";
import PerInfo from "./PerInfo";
import HealthEdu from "./HealthEdu";


const Home = () => {
    return (
        <div>
            <Featured />
            <ChatBot />
            <PerInfo />
            <HealthEdu />
        </div>
    );
};

export default Home;