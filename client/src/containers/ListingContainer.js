'use es6';

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { Layout, Icon, Row, Col, Spin } from 'antd';
import ListingHeading from '../components/ListingHeading';
import Amenities from '../components/Amenities';
import Reviews from '../components/Reviews';
import BookingSidebar from '../components/BookingSidebar';

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
                      <img
                        src={listingItem.picture_url}
                        style={{
                          height: '350px',
                          objectFit: 'cover',
                          marginBottom: '25px'
                        }}
                        width="100%"
                        alt=""
                      />
                    </Col>
                    <Col span={16}>
                      <Row>
                        <div>
                          <ListingHeading listing={listingItem} />
                          <p>{listingItem.country}</p>
                          <p>{listingItem.room_type}</p>
                          <p>{listingItem.description}</p>
                          <Amenities amenities={listingItem.amenities} />
                          <Reviews listing={listingItem} />
                        </div>
                      </Row>
                    </Col>
                    <Col span={8}>
                      <div>
                        <BookingSidebar listing={listingItem} />
                      </div>
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
