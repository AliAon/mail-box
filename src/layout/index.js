import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { SideBar } from "@/components/common/side-bar";
import { Navbar } from "@/components/common/navbar";
// import DynamicBreadcrumb from "../ui/bread-curmbs-layout";

const generateBreadcrumbItems = (pathname) => {
  const paths = pathname.split("/").filter(Boolean);

  const breadcrumbItems = paths.slice(1).map((path, index) => ({
    name: path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, " "),
    href: `/${paths.slice(0, index + 2).join("/")}`,
  }));

  return [
    { name: "Dashboard", href: "/dashboard?mode=expertMode" },
    ...breadcrumbItems,
  ];
};

export default function Layout({ children }) {
  const router = useRouter();
  const breadcrumbItems = generateBreadcrumbItems(router.pathname);
  const { pathname } = router;
  const [isOpen, setIsOpen] = useState(true);
  console.log("isOpen",isOpen)


  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {pathname.includes("/dashboard") ? (
        <div className="flex">
          <SideBar isOpen={isOpen} toggleSidebar={toggleSidebar} setIsOpen={setIsOpen}/>
          <div
          style={{
            marginLeft: isOpen ? "265px" : "70px",
          }}
            className={`w-full min-h-screen  transition-all duration-300  overflow-y-scroll pb-2 md:pb-5 `}
          >
            <Navbar toggleSidebar={toggleSidebar} />
            <div className="mt-2">
              {/* {pathname !== "/dashboard" && (
                <DynamicBreadcrumb items={breadcrumbItems} />
              )} */}
              <div className="mt-2">{children}</div>
            </div>
          </div>
        </div>
      ) : (
        children
      )}
    </>
  );
}
