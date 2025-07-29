const Home = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Kanhiya Jha</h1>
      <p className="text-xl md:text-2xl">Mobile App Developer | React Native | Flutter | iOS</p>
      <a
        href="#projects"
        className="mt-6 bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
      >
        View My Work
      </a>
    </section>
  );
};

export default Home;