import { useEffect, useState } from 'react';
import ArrowIcon from '../../ui/ArrowIcon';
import Wrapper from '../Wrapper';
import Overview from './Overview';
import LinkItem from './../../ui/LinkItem';
import {motion as Motion} from 'framer-motion';
const data = [
    {
        title: "About",
        text: <>
            We believe that blockchain technology has the potential to shift financial models as we know them, creating revenue streams that are more sustainable and fair for users. We envision a future in which financial infrastructures are rather decentralised and horizontal, in which any member can have a say. Through its immutability, blockchain technology provides trustworthy infrastructures that allow cooperation on a large scale.
            <div className="inline-block underline hover:no-underline underline-offset-2"><LinkItem to="https://medium.com/@moritzfelipe/blockchain-the-internet-for-cooperation-37a606bb3c0" underlined>Learn more</LinkItem></div>
        </>,
        subText: <>Work Meaningful - With our work, we aim to impact society positively. The projects we get involved with the aim to solve significant problems in our society, sustainably and in the long run, rather than looking for a quick profit through speculation or encouraging harmful behavior.</>
    },
    {
        title: "What we do",
        text: <>
           Blocks will do for cooperation what the internet did for communication - We believe that blockchain technology has the potential to shift financial models as we know them, creating revenue streams that are more sustainable and fair for users. We envision a future in which financial infrastructures are rather decentralised and horizontal, in which any member can have a say. Through its immutability, blockchain technology provides trustworthy infrastructures that allow cooperation on a large scale.
           <div className="inline-block underline hover:no-underline underline-offset-2"><LinkItem to="https://medium.com/@moritzfelipe/blockchain-the-internet-for-cooperation-37a606bb3c0" underlined>Learn more</LinkItem></div>
        </>,
        subText: <>Work Meaningful - With our work, we aim to impact society positively. The projects we get involved with the aim to solve significant problems in our society, sustainably and in the long run, rather than looking for a quick profit through speculation or encouraging harmful behavior.</>
    },
    {
        title: "Hiring",
        text: <>
           Blocks will do for cooperation what the internet did for communication - We believe that blockchain technology has the potential to shift financial models as we know them, creating revenue streams that are more sustainable and fair for users. We envision a future in which financial infrastructures are rather decentralised and horizontal, in which any member can have a say. Through its immutability, blockchain technology provides trustworthy infrastructures that allow cooperation on a large scale.
           <div className="inline-block underline hover:no-underline underline-offset-2"><LinkItem to="https://medium.com/@moritzfelipe/blockchain-the-internet-for-cooperation-37a606bb3c0" underlined> Learn more</LinkItem></div>
        </>,
        subText: <>Work Meaningful - With our work, we aim to impact society positively. The projects we get involved with the aim to solve significant problems in our society, sustainably and in the long run, rather than looking for a quick profit through speculation or encouraging harmful behavior.</>
    }
];
const CompanyOverview = () => {
    const [activeTab, setActiveTab] = useState(data[0]);
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const changeActiveTabMobile= (tab)=> tab === activeTabIndex ? setActiveTabIndex(null): setActiveTabIndex(tab)
    useEffect(()=> {
        const handleResize = () => {
            if (window.innerWidth >= 640 && !activeTabIndex){
                setActiveTab(data[0])
                setActiveTabIndex(0)
            } 
        } 
        window.addEventListener("resize", handleResize)
        return ()=> window.removeEventListener("resize", handleResize)
    },[activeTab])
    return (
        <Wrapper>
            <div className="hidden sm:flex justify-end mt-24">
                <div className="sm:w-full lg:w-757 xl:w-811">
                    <ul className="flex gap-10.5 items-center py-5 relative">
                        {
                            data.map((item, index) =>(
                                <li className="space-y-5 relative" key={index}>
                                    <button className={"cursor-pointer text-2xl leading-extra -tracking-tighter transition-all ease-in-out duration-300 "+(index === activeTabIndex ? "text-purple " : " text-primaryGray-300 ")} key={index} onClick={() =>{setActiveTabIndex(index); setActiveTab(item)}} id={index}>
                                      {item?.title === "Hiring" ? <><span className="hidden lg:block">Hiring</span><span className="lg:hidden">Employment</span></>
                                      :<span>{item?.title}</span>}
                                    </button>
                                    {index === activeTabIndex ? (<Motion.div className="absolute mt-0 bottom-1 inset-x-0 h-0.2 bg-purple" layoutId="underline"/>) : null}
                                </li>
                            ))
                        }
                    </ul>
                    <Overview paragraph={activeTab} />
                </div>
            </div>          
            <div className="block sm:hidden">
                <ul className='space-y-5.1'>
                    {
                        data.map((item, index) =>
                            <li className="space-y-4.5" key={index}>
                                <div onClick={()=>{changeActiveTabMobile(index) ; setActiveTab(item)}} className={"flex items-center justify-between border-b "+ (activeTabIndex === index ? "border-purple" : "border-primaryGray-300")}>
                                    <p className={"cursor-default text-xl -tracking-wider "+(activeTabIndex === index ? "text-purple " : "")}> {item?.title === "hiring" ? "Employment" : item?.title}</p>
                                    <div className={`transition-all duration-300 ease-out ${activeTabIndex === index ? "rotate-180" : ""}`}>
                                        <ArrowIcon variant={activeTabIndex === index? " text-purple " : " text-black "}/>
                                    </div>
                                </div>
                                {activeTabIndex === index && <div className="pb-8.4">
                                    <Overview paragraph={activeTab}/>
                                </div>
                                }
                            </li>
                        )
                    }               
                </ul>
            </div>
        </Wrapper>
    );
}
export default CompanyOverview;