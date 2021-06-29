import React from 'react'
import { CustomNavbar } from '../../../ui/components/navbar'
import { AppBar2 } from '../../organisms/app-bar2';
import { DrawerSidebar } from '../../organisms/side-bar';
import { DivHeaderContainer, DivBody } from './styles';
import { FooterMolecule } from '../../molecules/footer-home-molecule';

interface Props {
    children: React.ReactNode;
}

const MasterLayout = ({ children }: Props) => {
    return (
        <DivHeaderContainer>
            {/* <CustomNavbar /> */}
            {/* <DrawerSidebar /> */}
            <AppBar2 />
            <DivBody>
                {children}
            </DivBody>
            <FooterMolecule />
        </DivHeaderContainer>
    )
}

export default MasterLayout
