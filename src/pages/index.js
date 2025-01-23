import SignInForm from "@/components/AuthForm/SignInForm";
import Image from "next/image";
import signIn from "../../public/assets/png/signin.png";
export default function SinIn() {
  return (
    <div className="lg:w-[80%] w-[90%] h-screen mx-auto">
      <div className="grid md:grid-cols-2  lg:gap-x-20 grid-cols-1 h-screen">
        <div className="md:flex items-center hidden justify-center">
          <Image src={signIn} alt="" width={500} height={500} className="w-full h-[80vh]"/> 
        </div>

        <div className="flex flex-col items-center justify-center w-[90%] mx-auto">
          
          <div className="my-3 mt-5">
            <h2
              className="text-[40px] InterBold text-primary inter_SemiBold h-6 mb-12"
            >Log In, MailBox</h2>
          </div>
          <SignInForm />
        </div>
      </div>
    </div>
  );
}
