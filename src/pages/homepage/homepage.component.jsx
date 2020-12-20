import React from 'react';
import { withRouter } from 'react-router-dom';

import Directory from '../../components/directory/directory.component';

import { HomePageContainer } from './homepage.styles';

const HomePage = () => (
    <HomePageContainer>
        <Directory/>
    </HomePageContainer>
);

export default withRouter(HomePage);