const ClientsSection = () => {
  return (
    <div className="py-24 px-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Trusted by the world’s most innovative teams
        </h2>
        <div className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-4">
          <img
            className="max-h-12  object-contain"
            src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
            alt="Transistor"
            width="158"
            height="48"
          />
          <img
            className="max-h-12  object-contain"
            src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
            alt="Reform"
            width="158"
            height="48"
          />
          <img
            className="max-h-12  object-contain"
            src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
            alt="Tuple"
            width="158"
            height="48"
          />
          <img
            className="max-h-12  object-contain"
            src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
            alt="SavvyCal"
            width="158"
            height="48"
          />
          <img
            className="col-span-2 max-h-12  object-contain"
            src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
            alt="Statamic"
            width="158"
            height="48"
          />
        </div>
      </div>
    </div>
  );
};

export default ClientsSection;
