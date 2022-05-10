import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Post({ content }) {
    return (
        <div className="w-2/3 mt-[68px] m-4 shadow-2xl">
            <div className="p-6 bg-gray-100 rounded-sm">
                <Link href="#"><a className="group">
                    <div className="overflow-hidden w-full h-96 hover:scale-105 transition
                    transition-all duration-200 ease-in-out relative">
                        <Image
                            src="https://images.unsplash.com/photo-1636467204130-edf8ee206dce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                            alt="Sample Cover" layout="fill" />
                    </div>
                    <h3
                        className="mt-6 leading-normal text-gray-800 group-hover:text-purple-400 font-semibold text-2xl lg:text-4xl line-clamp-3 transition translation-all duration-200 ease-in-out"
                        title="Lorem Ipsum is simply dummy text of the printing">
                        { content }
                    </h3>
                </a>
                </Link>
                <div className="mt-6">
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                        <time className="text-gray-600" dateTime="2021-11-06T08:29:56+00:00">
                            { postedAt }
                        </time>
                        <Link href="#"><a className="inline-block text-gray-600 hover:text-purple-400">
                            10 Comments
                        </a>
                        </Link>
                        <Link href="#"><a className="flex items-center">
                            <div className="h-6 w-6 rounded-full bg-purple-400"></div>
                            <span className="ml-2 text-gray-600">Ilia Sichinava</span>
                        </a>
                        </Link>
                    </div>
                    <p className="mt-6 leading-normal line-clamp-3 text-lg text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi explicabo ipsa laudantium maxime nemo non numquam praesentium quia quidem reiciendis sint tempora temporibus tenetur, totam unde vel velit voluptas? Alias.
                    </p>
                </div>
                <Link href="#"><a className="inline-block mt-6 text-purple-500 hover:text-purple-400">Read More</a>
                </Link>
            </div>
        </div>
    )
}
