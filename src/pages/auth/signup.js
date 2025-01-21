import SignupBase from "@/components/AuthForm/SignupBase";
import Link from "next/link";
export default function Signup() {
  return (
    // <AuthLayout>
     
     <div className="md:overflow-y-scroll md:h-[75vh] create_account_scroll">

     
      <SignupBase />
      <p className="text-base text-center text-[#4B504E] my-4">
        Already have an account?{" "}
        <Link
          href={"/"}
          className="text-primary inline cursor-pointer hover:underline"
        >
          Sign In
        </Link>
      </p>
      </div>
    // </AuthLayout>
  );
}
