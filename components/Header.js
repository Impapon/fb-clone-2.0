import Image from 'next/image';
import React from 'react';
import {
    BellIcon,
    ChatIcon, ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon
} from "@heroicons/react/solid"
import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon
} from "@heroicons/react/outline"

import HeaderIcon from "../components/HeaderIcon"

const Header = () => {
    return (
        <div className="flex items-center p-2 shadow-md ">
            {/* left */}
            <Image
                src="https://links.papareact.com/5me"
                width={40}
                height={40}
                layout="fixed"
            />
            <div className="flex items-center ml-3 rounded-full bg-gray-100 p-2">
                <SearchIcon className='h-6' />
                <input type="text" className='hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500' placeholder='Search on facebook' />
            </div>
            {/* center */}
            <div className="flex justify-center flex-grow">
                <div className="flex space-x-6 md:space-x-2">
                    <HeaderIcon active Icon={HomeIcon}/>
                    <HeaderIcon Icon={FlagIcon}/>
                    <HeaderIcon Icon={PlayIcon}/>
                    <HeaderIcon Icon={ShoppingCartIcon}/>
                    <HeaderIcon Icon={UserGroupIcon}/>
                </div>
            </div>

            {/* right */}

            <div className="flex items-center justify-end sm:space-x-2">
                <p className="whitespace-nowrap font-semibold pr-3">Papon Sarker</p>
                <ViewGridIcon className="icon"/>
                <ChatIcon className="icon"/>
                <BellIcon className="icon"/>
                <ChevronDownIcon className='icon'/>
            </div>

        </div>
    );
};

export default Header;