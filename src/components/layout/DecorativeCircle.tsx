import React from 'react'

const DecorativeCircle = () => {
    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none">
            <div
                className="absolute top-0 right-0 w-96 h-96 rounded-full bg-lime-700/20 transform translate-x-1/4 -translate-y-1/4"
                data-aos="zoom-out"
                data-aos-delay="0"
            />
            <div
                className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-lime-400/30 transform -translate-x-1/4 translate-y-1/4"
                data-aos="zoom-out"
                data-aos-delay="100"
            />

            <div
                className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-lime-700/15"
                data-aos="zoom-out"
                data-aos-delay="200"
            />
            <div
                className="absolute bottom-1/4 right-1/4 w-56 h-56 rounded-full bg-lime-400/25"
                data-aos="zoom-out"
                data-aos-delay="300"
            />
            <div
                className="absolute top-3/4 left-1/2 w-48 h-48 rounded-full bg-lime-200/20"
                data-aos="zoom-out"
                data-aos-delay="400"
            />

            <div
                className="absolute top-1/3 right-1/3 w-32 h-32 rounded-full bg-lime-500/15"
                data-aos="zoom-out"
                data-aos-delay="500"
            />
            <div
                className="absolute bottom-1/2 left-1/3 w-24 h-24 rounded-full bg-lime-200/20"
                data-aos="zoom-out"
                data-aos-delay="600"
            />
            <div
                className="absolute top-2/3 right-1/2 w-20 h-20 rounded-full bg-lime-400/25"
                data-aos="zoom-out"
                data-aos-delay="700"
            />

            <div
                className="absolute top-1/4 right-1/4 w-16 h-16 rounded-full bg-lime-500/20"
                data-aos="zoom-out"
                data-aos-delay="800"
            />
            <div
                className="absolute bottom-1/3 left-1/2 w-12 h-12 rounded-full bg-lime-200/25"
                data-aos="zoom-out"
                data-aos-delay="900"
            />
            <div
                className="absolute top-1/2 right-2/3 w-10 h-10 rounded-full bg-lime-400/20"
                data-aos="zoom-out"
                data-aos-delay="1000"
            />

            <div
                className="absolute top-2/3 left-2/3 w-8 h-8 rounded-full bg-lime-500/15"
                data-aos="zoom-out"
                data-aos-delay="1100"
            />
            <div
                className="absolute bottom-2/3 right-1/3 w-6 h-6 rounded-full bg-lime-200/20"
                data-aos="zoom-out"
                data-aos-delay="1200"
            />
            <div
                className="absolute top-3/4 right-3/4 w-4 h-4 rounded-full bg-lime-400/25"
                data-aos="zoom-out"
                data-aos-delay="1300"
            />

            <div
                className="absolute top-1/2 left-1/4 w-40 h-40 rounded-full bg-lime-700/10"
                data-aos="zoom-out"
                data-aos-delay="1400"
            />
            <div
                className="absolute bottom-1/4 right-2/3 w-36 h-36 rounded-full bg-lime-400/15"
                data-aos="zoom-out"
                data-aos-delay="1500"
            />
            <div
                className="absolute top-3/4 right-1/3 w-28 h-28 rounded-full bg-lime-300/10"
                data-aos="zoom-out"
                data-aos-delay="1600"
            />
        </div>
    );
};

export default DecorativeCircle
