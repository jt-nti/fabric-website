import React from 'react';
import PageTitle from '../../../components/PageTitle/PageTitle';
import FooterBorder from '../../../components/FooterBorder/FooterBorder';
import FooterContainer from '../../../components/FooterContainer/FooterContainer';
import PerformanceSection from '../../../components/PerformanceSection/PerformanceSection';
import HeaderDevelopers from '../../../components/HeaderDevelopers/HeaderDevelopers';
import TileContainerDeveloperIntro from '../../../components/TileContainerDeveloperIntro/TileContainerDeveloperIntro';
import TileContainerDeveloperReference from '../../../components/TileContainerDeveloperReference/TileContainerDeveloperReference';
import '../Page.css';

class DevelopersPage extends React.Component {
    render() {
        return (
            <>
                <HeaderDevelopers />
                <div className='page-container'>
                <PageTitle
                    titleName={'Getting started'}
                    titleSubheading={'First time trying Fabric? Start here!'} />
                <TileContainerDeveloperIntro />
                <PageTitle
                    titleName={'References'} 
                    titleSubheading={'The most common reference information for Fabric \
                    developers: keep these resources handy! Commands may vary by version \
                    - if you’re not sure what version to use, check Releases on GitHub \
                    for further information.'} />
                <TileContainerDeveloperReference />
                <PerformanceSection />
                <FooterBorder />
                <FooterContainer />
                </div>
            </>
        )
    }
}

export default DevelopersPage;
