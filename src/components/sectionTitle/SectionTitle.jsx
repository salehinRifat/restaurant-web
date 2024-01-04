
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="w-4/12 mx-auto text-center mb-10">
            <h3 className="text-yellow-600 mb-2">---{subHeading}---</h3>
            <h1 className="text-3xl uppercase border-y-4 py-2">{heading}</h1>
        </div>
    );
};

export default SectionTitle;