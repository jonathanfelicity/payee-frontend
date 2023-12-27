const Feature: React.FC = () => {
  return (
    <section className="py-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-10">Features</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-10 md:flex-nowrap">
        <div className="max-w-xs md:w-1/2 lg:w-1/4">
          <h3 className="font-bold text-xl mb-2">Feature 1</h3>
          <p className="text-gray-600">A short description of feature 1.</p>
        </div>

        <div className="max-w-xs md:w-1/2 lg:w-1/4">
          <h3 className="font-bold text-xl mb-2">Feature 2</h3>
          <p className="text-gray-600">A short description of feature 2.</p>
        </div>

        <div className="max-w-xs md:w-1/2 lg:w-1/4">
          <h3 className="font-bold text-xl mb-2">Feature 3</h3>
          <p className="text-gray-600">A short description of feature 3.</p>
        </div>

        <div className="max-w-xs md:w-1/2 lg:w-1/4">
          <h3 className="font-bold text-xl mb-2">Feature 4</h3>
          <p className="text-gray-600">A short description of feature 4.</p>
        </div>
      </div>
    </section>
  );
};

export default Feature;
