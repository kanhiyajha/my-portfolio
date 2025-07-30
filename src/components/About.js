const StarRating = ({ score }) => {
  const stars = Array(5).fill(0).map((_, i) => (
    <span key={i}>{i < score ? '★' : '☆'}</span>
  ));
  return <span className="text-yellow-500">{stars}</span>;
};

const About = () => {
  return (
   <section className="px-8 py-8">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-gray-700 max-w-3xl mb-4">
          I’m a passionate Mobile App Developer with 12+ years of experience building high-performance apps using React Native and native iOS (Swift/Objective-C). I specialize in crafting intuitive, cross-platform mobile experiences with clean architecture, responsive UI, and seamless performance.
        </p>
        <p className="text-gray-700 max-w-3xl mb-2 font-semibold"> My strengths lie in:</p>
        <ul className="list-disc list-inside text-gray-700 max-w-3xl space-y-2">
          <li>React Native (Hooks, Redux, Clean Architecture) for fast, scalable cross-platform apps</li>
          <li>Native iOS development with UIKit, MapKit, CoreLocation, AVFoundation, StoreKit, and more</li>
          <li>Integrating modern SDKs & APIs like Firebase, Stripe, Socket.IO, Alamofire</li>
          <li>Working in Agile teams, writing testable code, and deploying to the App Store with confidence</li>
        </ul>
        <p className="text-gray-700 max-w-3xl mt-4 font-semibold"> Domains I’ve worked in:</p>
        <p className="text-gray-700 max-w-3xl">e-commerce, healthcare, BLE, VOIP, IoT</p>
      <section className="px-8 py-8">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-gray-700 max-w-3xl mb-4">
          I’m a passionate Mobile App Developer with 12+ years of experience building high-performance apps using React Native and native iOS (Swift/Objective-C). I specialize in crafting intuitive, cross-platform mobile experiences with clean architecture, responsive UI, and seamless performance.
        </p>
        <p className="text-gray-700 max-w-3xl mb-2 font-semibold"> My strengths lie in:</p>
        <ul className="list-disc list-inside text-gray-700 max-w-3xl space-y-2">
          <li>React Native (Hooks, Redux, Clean Architecture) for fast, scalable cross-platform apps</li>
          <li>Native iOS development with UIKit, MapKit, CoreLocation, AVFoundation, StoreKit, and more</li>
          <li>Integrating modern SDKs & APIs like Firebase, Stripe, Socket.IO, Alamofire</li>
          <li>Working in Agile teams, writing testable code, and deploying to the App Store with confidence</li>
        </ul>
        <p className="text-gray-700 max-w-3xl mt-4 font-semibold"> Domains I’ve worked in:</p>
        <p className="text-gray-700 max-w-3xl mb-6">e-commerce, healthcare, BLE, VOIP, IoT</p>

        <h3 className="text-xl font-semibold mb-2">⭐ Technical Ratings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl">
          <div className="flex justify-between"><span>TypeScript</span><StarRating score={4} /></div>
          <div className="flex justify-between"><span>Redux</span><StarRating score={4} /></div>
          <div className="flex justify-between"><span>Swift</span><StarRating score={4} /></div>
          <div className="flex justify-between"><span>SwiftUI</span><StarRating score={4} /></div>
          <div className="flex justify-between"><span>CI/CD</span><StarRating score={4} /></div>
        </div>
      </section>
      </section>

  );
};

export default About;