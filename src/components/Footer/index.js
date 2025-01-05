import React from "react";

import { Wrapper } from "./Footer.styles";

const date = new Date().getFullYear()

const FooterSection = () => {
    return(
        <Wrapper>&copy; {date} Movieratingo, Developed by Faisal Nawaz | All rights reserved. database credit: TMDB</Wrapper>
    )
}



export default FooterSection