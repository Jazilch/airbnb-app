'use es6';

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { Layout, Icon, Row, Col, Spin } from 'antd';
import ListingHeading from '../components/ListingHeading';
import Amenities from '../components/Amenities';
import Reviews from '../components/Reviews';
import BookingSidebar from '../components/BookingSidebar';
import ListingDescription from '../components/ListingDescription';
import { StyledBannerImage } from '../styles';

const { Header, Content } = Layout;

class ListingContainer extends Component {
  state = {
    listing: [],
    isLoading: false
  };

  componentDidMount() {
    const { match } = this.props;
    const listingId = match.params.id;
    this.setState({ isLoading: true });
    axios.get(`/api/v1/listings/${listingId}`).then(results => {
      this.setState(
        {
          listing: results.data
        },
        () => {
          this.setState({ isLoading: false });
        }
      );
    });
  }

  render() {
    const { listing, isLoading } = this.state;
    return (
      <Layout>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon className="trigger" />
          </Header>
          <Layout>
            <Content
              style={{
                maxWidth: '1080px',
                margin: '24px auto',
                padding: 24,
                background: '#fff',
                minHeight: 280
              }}
            >
              {isLoading && <Spin />}
              {listing &&
                listing.map(listingItem => (
                  <>
                    <Col span={24}>
                      <StyledBannerImage src={listingItem.picture_url} alt="" />
                    </Col>
                    <Col span={16}>
                      <Row>
                        <ListingHeading listing={listingItem} />
                        <ListingDescription
                          country={listingItem.country}
                          roomType={listingItem.room_type}
                          description={listingItem.description}
                        />
                        <Amenities amenities={listingItem.amenities} />
                        <Reviews listing={listingItem} />
                      </Row>
                    </Col>
                    <Col span={8}>
                      <BookingSidebar listing={listingItem} />
                    </Col>
                  </>
                ))}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(ListingContainer);
