import React from 'react';
import BorderButton from '../BorderButton';

export default function Project({ title, description, href, techs, src }) {
    return <div className="flex flex-row w-full md:w-1/3 px-10 py-10">
        <div className="flex flex-col items-center justify-start">
            <div className="w-auto h-10h my-10">
                <img className="w-full h-full object-contain" src={src} />
            </div>
            <div className="flex flex-col h-full">
                <h1 className="font-bold text-primary text-2xl py-2">{title}</h1>
                <p className="font-main text-justify">{description}</p>
                <h1 className="text-primary py-1">{techs}</h1>

                <div className="flex flex-row mt-auto">
                    <BorderButton
                        className="hover:bg-primary border-primary text-primary hover:text-white"
                        href={href}
                        title="Try out"
                    ></BorderButton>
                </div>

            </div>
        </div>
    </div>
}