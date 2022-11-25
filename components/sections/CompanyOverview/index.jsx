import { useEffect, useState } from 'react';
import ArrowIcon from '../../ui/ArrowIcon';
import Wrapper from '../Wrapper';
import Overview from './Overview';
const CompanyOverview = () => {
    const [activeTab, setActiveTab] = useState("about");
    const changeActiveTab =(tab)=>tab === "about"? setActiveTab("about"):tab === "what we do"? setActiveTab("what we do"): tab === "hiring" ? setActiveTab("hiring") : null; 
    const changeActiveTabMobile =(tab)=>{
        if(tab==="about"){
            activeTab==="about"?setActiveTab(null):setActiveTab("about")
        }else if(tab==="what we do"){
            activeTab==="what we do"?setActiveTab(null):setActiveTab("what we do")
        }
        else if(tab==="hiring"){
            activeTab==="hiring"?setActiveTab(null):setActiveTab("hiring")
        }
    }
    const overview = activeTab==="about"?"Blockchain will do for cooperation what the internet did for communication - We believe that blockchain technology has the potential to shift financial models as we know them, creating revenue streams that are more sustainable and fair for users. We envision a future in which financial infrastructures are rather decentralised and horizontal, in which any member can have a say. Through its immutability, blockchain technology provides trustworthy infrastructures that allow cooperation on a large scale.":activeTab==="what we do"?"Blocks will do for cooperation what the internet did for communication - We believe that blockchain technology has the potential to shift financial models as we know them, creating revenue streams that are more sustainable and fair for users. We envision a future in which financial infrastructures are rather decentralised and horizontal, in which any member can have a say. Through its immutability, blockchain technology provides trustworthy infrastructures that allow cooperation on a large scale.":activeTab==="hiring"?"We believe that blockchain technology has the potential to shift financial models as we know them, creating revenue streams that are more sustainable and fair for users. We envision a future in which financial infrastructures are rather decentralised and horizontal, in which any member can have a say. Through its immutability, blockchain technology provides trustworthy infrastructures that allow cooperation on a large scale.":""
    const handleResize = () =>{
        if(window.innerWidth>= 640&&!activeTab) {
            console.log("innerWidth is larger than 640: "+ window.innerWidth)
            setActiveTab("about")
        }
    }
    useEffect(()=>{
        window.addEventListener("resize", handleResize)
        return ()=> window.removeEventListener("resize", handleResize)
    },[])
    return (
        <Wrapper>
            <div className="justify-end hidden sm:flex">
                <div className="space-y-5 sm:w-full lg:max-w-3xl xl:max-w-4xl">
                    <ul className="flex gap-10.5 items-center py-5">
                        <li onClick={()=>changeActiveTab("about")} className={"cursor-default text-2xl leading-extra -tracking-tighter "+(activeTab==="about"?"text-purple underline underline-offset-4":"text-primaryGray-300")}><p>About us</p></li>
                        <li onClick={()=>changeActiveTab("what we do")} className={"cursor-default text-2xl leading-extra -tracking-tighter "+(activeTab==="what we do"?"text-purple underline underline-offset-4":"text-primaryGray-300")}><p>What we do</p></li>
                        <li onClick={()=>changeActiveTab("hiring")} className={"cursor-default text-2xl leading-extra -tracking-tighter "+(activeTab==="hiring"?"text-purple underline underline-offset-4":"text-primaryGray-300")}><span className="hidden lg:block">Hiring</span><span className=" lg:hidden">Employment</span></li>
                    </ul>
                    <Overview paragraph={overview}/>
                </div>
            </div>
            <div className="block sm:hidden">
                <ul className='space-y-5.1'>
                    <li className="space-y-4.5">
                        <div onClick={()=>changeActiveTabMobile("about")} className={"flex items-center justify-between border-b "+ (activeTab==="about"?"border-purple":"border-primaryGray-300")}>
                            <p className={"cursor-default text-xl -tracking-wider "+(activeTab==="about"?"text-purple ":"")}>About us</p>
                            <ArrowIcon variant={activeTab==="about"? " text-purple rotate-180 ": " text-black "}/>
                        </div>
                        {activeTab==="about"&&<div className='pb-8.4'>
                            <Overview paragraph={overview}/>
                         </div>
                         }
                    </li>
                    <li className="space-y-4.5">
                        <div onClick={()=>changeActiveTabMobile("what we do")} className={" flex items-center justify-between border-b "+ (activeTab==="what we do"?"border-purple":"border-primaryGray-300")}>
                            <p className={"cursor-default text-xl -tracking-wider "+(activeTab==="what we do"?"text-purple ":"")}>What we do</p>
                            <ArrowIcon variant={activeTab==="what we do"? " text-purple rotate-180 ": " text-black "}/>
                        </div>
                        {activeTab==="what we do"&&<div className='pb-8.4'>
                            <Overview paragraph={overview}/>
                        </div>}                  
                    </li>
                    <li className="space-y-4.5">
                        <div onClick={()=>changeActiveTabMobile("hiring")} className={" flex items-center justify-between border-b "+ (activeTab==="employment"?"border-purple":"border-primaryGray-300")}>
                            <p className={"cursor-default text-xl -tracking-wider "+(activeTab==="hiring"?"text-purple ":"")}>Employment</p>
                            <ArrowIcon variant={activeTab==="hiring"? " text-purple rotate-180 ": " text-black "}/>
                        </div>
                        {activeTab==="hiring"&&<div className='pb-8.4'>
                            <Overview paragraph={overview}/>
                        </div>}
                    </li>
                </ul>
            </div>
        </Wrapper>
    );
}

export default CompanyOverview;