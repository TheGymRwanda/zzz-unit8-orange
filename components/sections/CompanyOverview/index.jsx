import { useState } from 'react';
import Wrapper from '../Wrapper';
import Overview from './Overview';
const CompanyOverview = () => {
    const [activeTab, setActiveTab] = useState("about");
    const changeActiveTab =(tab)=>tab === "about"? setActiveTab("about"):tab === "what we do"? setActiveTab("what we do"): tab === "hiring" ? setActiveTab("hiring") : null;   
    const overview = activeTab==="about"?"Blockchain will do for cooperation what the internet did for communication - We believe that blockchain technology has the potential to shift financial models as we know them, creating revenue streams that are more sustainable and fair for users. We envision a future in which financial infrastructures are rather decentralised and horizontal, in which any member can have a say. Through its immutability, blockchain technology provides trustworthy infrastructures that allow cooperation on a large scale.":activeTab==="what we do"?"Blockchain will do for cooperation what the internet did for communication - We believe that blockchain technology has the potential to shift financial models as we know them, creating revenue streams that are more sustainable and fair for users. We envision a future in which financial infrastructures are rather decentralised and horizontal, in which any member can have a say. Through its immutability, blockchain technology provides trustworthy infrastructures that allow cooperation on a large scale.":activeTab==="hiring"?"Blockchain will do for cooperation what the internet did for communication - We believe that blockchain technology has the potential to shift financial models as we know them, creating revenue streams that are more sustainable and fair for users. We envision a future in which financial infrastructures are rather decentralised and horizontal, in which any member can have a say. Through its immutability, blockchain technology provides trustworthy infrastructures that allow cooperation on a large scale.":""
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
        </Wrapper>
    );
}

export default CompanyOverview;