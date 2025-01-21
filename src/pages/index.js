import SignInForm from "@/components/AuthForm/SignInForm";
import Title from "@/components/common/title";
import Image from "next/image";
import signIn from "../../public/assets/png/signin.png";
export default function SinIn() {
  return (
    <div className="lg:w-[80%] w-[90%] h-screen mx-auto">
      <div className="grid md:grid-cols-2 grid-cols-1 h-screen">
        <div className="md:flex items-center hidden justify-center">
          <Image src={signIn} alt="" width={500} height={500} className="w-full h-[80vh]"/> 
        </div>

        <div className="flex flex-col items-center justify-center w-[90%] mx-auto">
          <div className="my-3 mt-5">
            <Title
              title="Log In, MailBox"
              fontFamily="Inter"
              color="#7f63f4"
              className={"text-3xl font-extrabold"}
              heading={"h3"}
            />
          </div>
          <SignInForm />
        </div>
      </div>
    </div>
  );
}
