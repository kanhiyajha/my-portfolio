import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";


const Home = () => {
  return (
   <section className="flex flex-col items-center justify-center py-16 px-4 text-center">
        <img
          src="/logo512.png"
          alt="Profile"
          className="rounded-full w-40 h-40 mb-6 object-cover"
        />
        <h1 className="text-4xl font-bold mb-2">Hello, I’m Kanhiya Jha</h1>
        <p className="text-xl text-blue-600 font-semibold mb-4">Mobile App Developer | React Native | Flutter | iOS

</p>
        <div className="flex gap-4 justify-center">
          <a href="https://www.linkedin.com/in/kanhiya-jha-62885a70/" className="text-gray-700 hover:text-black"><FaLinkedin size={24} /></a>
          <a href="https://github.com/kanhiyajha" className="text-gray-700 hover:text-black"><FaGithub size={24} /></a>
          <a href="https://www.linkedin.com/in/kanhiya-jha-62885a70/" className="text-gray-700 hover:text-black"><FaTwitter size={24} /></a>
        </div>
      </section>
  );
};

export default Home;