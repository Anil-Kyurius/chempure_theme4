"use client"
import { useEffect, useRef, useState } from "react";
import videoplay from '@public/CaseStudies/watchvideo.svg'
import Image from "next/image";
export default function Video() {
    const [palyVideo, setPalyVideo] = useState(false);
    const videoRef = useRef(null);
    const handlePlayVideo = () => {
        setPalyVideo(true);
        videoRef.current.play();
    };
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.addEventListener('pause', () => setPalyVideo(false));
        }
        return () => {
            if (videoRef.current) {
                videoRef.current.removeEventListener('pause', () => setPalyVideo(false));
            }
        };
    }, []);
    return (
        <div className="bg-[#ffffff]">
            <div className="relative group bg-[#103cac]" onClick={handlePlayVideo}>
                <video
                    ref={videoRef}
                    className={`w-full lg:h-[80vh] object-fill z-50 transition duration-700 
                        ease-in-out ${!palyVideo ? 'opacity-[0.62]' : 'opacity-100'}`}
                    controls={palyVideo ? true : false}
                    loop
                    muted
                    defaultmuted="true"
                    playsInline
                >
                    <source src="/CaseStudies/Video1.mp4" type="video/mp4" />
                </video>
                {
                    !palyVideo && (
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer ">
                            <Image
                                src={videoplay}
                                alt="playvideo"
                                width={100}
                                height={100}
                            />
                        </div>
                    )
                }
            </div>
        </div>
    )
}