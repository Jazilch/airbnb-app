'use es6';

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Layout, Icon } from 'antd';
import axios from 'axios';
import ListingsCard from '../components/ListingCard';
import SideMenu from '../components/SideMenu';
import { FlexWrapper } from '../styles';

const { Header, Content } = Layout;

class ListingsContainer extends Component {
  state = {
    listings: [],
    isLoading: false
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    axios.get('/api/v1/listings').then(results => {
      this.setState(
        {
          listings: results.data
        },
        () => {
          this.setState({ isLoading: false });
        }
      );
    });
  }

  handleListingClick = id => {
    const { history } = this.props;
    history.push(`/listings/${id}`);
  };

  render() {
    const { listings, isLoading } = this.state;
    return (
      <Layout>
        <SideMenu />
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon className="trigger" />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280
            }}
          >
            <FlexWrapper flexFlow="row wrap" justify="center" align="center">
              <ListingsCard
                listings={listings}
                isLoading={isLoading}
                handleListingClick={this.handleListingClick}
              />
            </FlexWrapper>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(ListingsContainer);
