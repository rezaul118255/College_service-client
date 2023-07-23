

const Reseach = () => {
    return (
        <div>
            <div className='text-center'>
                <p className='text-yellow-500 text-3xl'> Research </p>
                <div className='border-y-4 border-gray-600 w-4/12 mx-auto m-4 text-2xl'>
                    <h5>Our college research story</h5>

                </div>


            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 ">
                <div className="">
                    <img src="https://img.freepik.com/free-vector/child-development-illustration_1284-59264.jpg" className="photos rounded-lg shadow-2xl" />

                </div>
                <div className="">
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                            {/* <p text="Click to open this one and close others" /> */}
                            <p>Click to open this one and close others </p>
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            {/* <Translate text="Click to open this one and close others" /> */}
                            <p>Click to open this one and close others </p>
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            {/* <Translate text="Click to open this one and close others" /> */}
                            <p>Click to open this one and close others </p>
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Reseach;