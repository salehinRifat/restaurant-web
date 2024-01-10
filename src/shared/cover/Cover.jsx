import { Parallax } from 'react-parallax';
const Cover = ({ img, title, subtitle }) => {
    return (
        <>

            <Parallax
                bgImage={img}
                bgImageAlt="the dog"
                strength={150}
            >
                <div className="hero min-h-[700px]">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-[800px] bg-black px-20 py-10 bg-opacity-30">
                            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                            <p className="mb-5">{subtitle}</p>
                        </div>
                    </div>
                </div>
            </Parallax>

        </>
    );
};

export default Cover;