import React from "react"
import ContentLoader from "react-content-loader"

const Sceleton = (props) => (
    <ContentLoader
        speed={2}
        width={367}
        height={570}
        viewBox="0 0 367 570"
        backgroundColor="#b5b5b5"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="0" rx="24" ry="24" width="366" height="480" />
        <rect x="0" y="487" rx="20" ry="20" width="366" height="60" />
    </ContentLoader>
)


export default Sceleton