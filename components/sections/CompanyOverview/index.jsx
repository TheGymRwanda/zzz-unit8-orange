import { useEffect, useState } from "react";
import ArrowIcon from "../../ui/ArrowIcon";
import Wrapper from "../Wrapper";
import OverviewContent from "./OverviewContent";
import { motion as Motion } from "framer-motion";
import companyTabs from "./../../../data/companyTabs";

const CompanyOverview = () => {
  const [activeTab, setActiveTab] = useState(companyTabs[0]);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const changeActiveTabMobile = (tab) =>
    tab === activeTabIndex ? setActiveTabIndex(null) : setActiveTabIndex(tab);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640 && !activeTabIndex) {
        setActiveTab(companyTabs[0]);
        setActiveTabIndex(0);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeTab, activeTabIndex]);

  return (
    <Wrapper>
      <div className="justify-end hidden mb-17.7 sm:mt-33 lg:mt-35.55 xl:mt-24 sm:flex">
        <div className="sm:w-full lg:w-757 xl:w-811">
          <ul className="flex gap-10.5 items-center py-5 relative">
            {companyTabs.map((item, index) => (
              <li className="relative space-y-5" key={index}>
                <button
                  className={`cursor-pointer text-2xl leading-extra -tracking-tighter transition-all ease-in-out duration-300 ${
                    index === activeTabIndex
                      ? "text-purple "
                      : " text-primaryGray-300 "
                  }`}
                  key={index}
                  onClick={() => {
                    setActiveTabIndex(index);
                    setActiveTab(item);
                  }}
                  id={index}
                >
                  {item?.title}
                </button>
                {index === activeTabIndex ? (
                  <Motion.div
                    transition={{ duration: 0.3 }}
                    className="absolute mt-0 bottom-1 inset-x-0 h-0.2 bg-purple"
                    layoutId="underline"
                  />
                ) : null}
              </li>
            ))}
          </ul>
          <OverviewContent {...activeTab} />
        </div>
      </div>
      <div className="mt-20.25 mb-17.7 block sm:hidden">
        <ul className="space-y-5.1">
          {companyTabs.map((item, index) => (
            <li className="space-y-4.5" key={index}>
              <div
                onClick={() => {
                  changeActiveTabMobile(index);
                  setActiveTab(item);
                }}
                className={`flex items-center justify-between border-b ${
                  activeTabIndex === index
                    ? "border-purple"
                    : "border-primaryGray-300"
                }`}
              >
                <p
                  className={`cursor-default text-xl -tracking-wider ${
                    activeTabIndex === index ? "text-purple " : ""
                  }`}
                >
                  {item?.title}
                </p>
                <div
                  className={`transition-all duration-300 ease-out ${
                    activeTabIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <ArrowIcon
                    variant={
                      activeTabIndex === index
                        ? " text-purple "
                        : " text-black "
                    }
                  />
                </div>
              </div>
              {activeTabIndex === index && (
                <div className="pb-8.4">
                  <OverviewContent {...activeTab} />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
};

export default CompanyOverview;
