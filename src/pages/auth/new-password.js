import NewPassword from "@/components/AuthForm/newPassword";
export default function Signup2() {
  return (
    <>
    {/*  <AuthLayout> */}
      <div className="my-3 mt-20">
        <p className="self-center text-center font-semibold text-[#101828] text-[24px] xl:text-3xl">
          Create a new password
        </p>
        <p className="text-base mx-auto font-medium text-center text-[#4B504E]">
          Set your new password with minimum 8 characters with a combination of
          letters and numbers
        </p>
      </div>
      <NewPassword />
     {/* </AuthLayout> */}
    </>
  );
}
