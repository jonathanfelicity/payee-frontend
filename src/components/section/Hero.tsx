const Hero: React.FC = () => {
  const newLocal = (
    <button className="px-4 py-2 mt-4 rounded-md bg-primary text-light-text-color">
      Get Started
    </button>
  );

  return (
    <section className=" min-h-screen phone:flex items-center justify-between gap-6 mx-auto max-w-[60rem]">
      <div className="w-full mb-8">
        <h1 className="text-4xl font-bold">Payee - E-wallet in your pocket 🤑</h1>
        <p className="mt-4 text-lg">
          Manage your business invoices and get paid easily.
        </p>
        {newLocal}
      </div>

      <div
        className="w-full rounded-xl"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)), url(https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
        }}
      ></div>

    </section>
  );
};

export default Hero;
