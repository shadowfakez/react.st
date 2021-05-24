const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className="w-full"
                    src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                    alt=""/>
            </div>
            <div className="grid grid-cols-3 gap-4 font-bold m-2">
                <div className="col-span-1 p-4 border-2 border-black">
                    <img className="object-contain w-full"
                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYtfZRhbGQtq2BapB2MXJfWIO2QriO5Wx3qQ&usqp=CAU"
                         alt=""/>
                </div>
                <div className="col-start-2 col-span-2 border-2 border-black">
                    description
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;