import React from 'react'
import Main from './Main'
import ChooseProject from './ProjectComponent/ChooseProject'
import ChooseContact from './ContactComponent/ChooseContact'
import ChooseAboutMe from '../ChooseAboutMe'
import ChooseFooter from './ChooseFooter/ChooseFooter'
import ChooseNavbar from '../ChooseNavbar'
// import BlockRightClick from '../components/BlockRightClick'

function Home() {
    return (
        <div>
            {/* <BlockRightClick /> */}
            <ChooseNavbar />
            <Main />
            <ChooseProject />
            <ChooseContact />
            <ChooseAboutMe />
            <ChooseFooter />
        </div>
    )
}

export default Home