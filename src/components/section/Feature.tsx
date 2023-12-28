import { WiDirectionUpRight } from "react-icons/wi";
import { RiSecurePaymentFill, RiHeart3Fill } from "react-icons/ri";


const Feature: React.FC = () => {
  return (
    <section>
      <div className="flex justify-between mb-6">
        <h1>Explore key features of our payment</h1>
        <a href="#">See All <WiDirectionUpRight className='inline-block h-5' /></a>
      </div>
      <div className="flex justify-between flex-wrap gap-5">
        <div className="border border-black rounded-md p-4 max-w-150 max-h-50">
          <div className="flex justify-between items-center  mb-10">
            <div className="flex items-center gap-2">
              <RiSecurePaymentFill/>
              <h1>Secure Payment</h1>
            </div>
            <div className="flex items-center gap-2">
              <RiHeart3Fill />
              <span>4.5</span>
            </div>
          </div>
          <p className="text-sm mb-4">Lorem ipsum dolor sit, amet consectetur Lorem, ipsum dolor lorem3.</p>
          <hr className="border-1 border-black mb-2" />
          <div className="flex justify-between items-center">
            <a href="#">Read More</a>
            <a href="#" className="p-1 bg-black text-white rounded-lg">Get <WiDirectionUpRight className='inline'/></a>
          </div>
        </div>
        
        
        <div className="border-2 border-black"></div>
        <div className="border-2 border-black"></div>
      </div>
    </section>
  );
};

export default Feature;
