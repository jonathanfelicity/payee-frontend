const SignupForm: React.FC = () => {
  return (
    <div className="w-full p-4 mx-auto phone:mx-4 phone:w-[75%] tablet:w-[55%] ">
      <h1 className="text-3xl font-bold mb-4">Payee - New Account!</h1>
      <p className="text-gray-600 mb-4">"Unlocking seamless transactions, one gateway at a time."</p>


      <form>
        <div className="grid gap-4 phone:grid-cols-2">

        <div className="h-fit">
          <input
            placeholder="First Name"
            id="first_name"
            className="w-full border border-primary  bg-transparent p-2 rounded "
          />
        </div>

        <div className="h-fit">
          <input
          placeholder="Middle Name (optional)"
            id="middle_name"
            className="w-full border border-primary  bg-transparent p-2 rounded "
          />
        </div>

        <div className="h-fit">
          <input
          placeholder="Last Name"
            id="last_name"
            className="w-full border border-primary  bg-transparent p-2 rounded "
          />
        </div>

        <div className="h-fit">
          <input
          placeholder="BVN"
            type="number"
            id="bvn"
            className="w-full border border-primary  bg-transparent p-2 rounded "
          />
        </div>

        <div className="h-fit">
          <input
            type="date"
            id="dob"
            className="w-full border border-primary  bg-transparent p-2 rounded "
            />
        </div>

        <div className="h-fit">
          <input
            placeholder="Phone Number"
            type="number"
            id="phone_number"
            className="w-full border border-primary  bg-transparent p-2 rounded "
          />
        </div>

        <div className="h-fit">
          <input
          placeholder="Email"
            type="email"
            id="email"
            className="w-full border border-primary  bg-transparent p-2 rounded "
          />
        </div>

        <div className="h-fit">
          <input
          placeholder="Password"
            type="password"
            id="password"
            className="w-full border border-primary  bg-transparent p-2 rounded "
          />
        </div>

        </div>

        <button className="bg-primary text-light-text-color py-2 px-6 phone:w-[10rem] w-full rounded my-6">
          Sign Up
        </button>

      </form>

    </div>
  );
};


export default SignupForm;