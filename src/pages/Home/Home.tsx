import Hero from "../../components/section/Hero";
import ClientsSection from "../../components/section/Cient";
// import Feature from "../../components/section/Feature";
const Home = () => {
  return (
    <div className="m-4 ">
      <Hero />
      {/* <Feature/> */}
      <ClientsSection />
    </div>
  );
};

export default Home;
