import { useState } from "react";


function ImageHover({ primaryImage, secondaryImage }) {
    const [showPrimaryImage, setShowPrimaryImage] = useState(true);

    return (
        <img
        src={showPrimaryImage ? primaryImage : secondaryImage}
        alt="Produto"
        className="cursor-pointer transition-all duration-1000"
        onMouseOver={() => setShowPrimaryImage(false)}
        onMouseLeave={() => setShowPrimaryImage(true)}
        />
    )
}

export default ImageHover;