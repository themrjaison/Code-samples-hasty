import React, { useState, useEffect } from 'react';
import listingService from '../../services/listingService';
import Listing from '../../components/listings/Listing';
import locale from 'rc-pagination';
import Pagination from 'rc-pagination';
import { Container, Row } from 'react-bootstrap';
import { BsSearch, BsFilter } from 'react-icons/bs';
import './listings.css';
import toastr from 'toastr';

function Landing() {
  const [search, setSearch] = useState({
    query: '',
  });
  const [pageData, setPageData] = useState({
    pageIndex: 0,
    pageSize: 15,
    totalCount: 0,
    listings: {
      listings: [],
      mapped: [],
      filtered: [],
    },
  });

  useEffect(() => {
    listingService.getAllPaginate(pageData.pageIndex, pageData.pageSize).then(onGetAllSuccess).catch(onGetAllError);
  }, [pageData.pageIndex]);

  const onGetAllSuccess = (data) => {
    const listingData = data.item.pagedItems;
    setPageData((prevState) => {
      const newData = { ...prevState };
      newData.listings.listings = listingData;
      newData.listings.mapped = listingData.map(mapListings);
      newData.totalCount = data.item.totalCount;
      return newData;
    });
  };

  const onGetAllError = (error) => {
    toastr.error(error.message, 'listing not found');
  };

  const mapListings = (listing) => {
    return <Listing key={listing.id} listing={listing} />;
  };

  const onChange = (page) => {
    setPageData((prevState) => {
      let newIndex = { ...prevState };
      newIndex.pageIndex = page - 1;
      return newIndex;
    });
  };

  const onFormFieldChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setSearch((prevState) => {
      const searchObject = { ...prevState };
      searchObject[name] = value;
      return searchObject;
    });
  };

  const onSearchClicked = (e) => {
    e.preventDefault();
    listingService
      .searchPaginate(pageData.pageIndex, pageData.pageSize, search.query)
      .then(onGetAllSuccess)
      .catch(onSearchError);
  };

  const onSearchError = () => {
    toastr.error('Please enter your search before clicking');
  };

  const onFilterClicked = (e) => {
    e.preventDefault();
    toastr.info('Filter clicked!');
  };

  return (
    <>
      <Container>
        <div>
          <Row>
            <div className="col-4">
              <Pagination
                onChange={onChange}
                current={pageData.pageIndex + 1}
                total={pageData.totalCount}
                pageSize={pageData.pageSize}
                locale={locale}
                className="mt-3 mx-4"
              />
            </div>
            <div className="col-8 d-flex justify-content-end">
              <div className="d-flex mt-2 mx-4">
                <input
                  id="searchBar"
                  className="search-box listing-search-box"
                  type="text"
                  placeholder="Search Listings"
                  name="query"
                  value={search.query}
                  onChange={onFormFieldChange}
                />
                <button className="btn btn-secondary listing-search-btn" type="submit" onClick={onSearchClicked}>
                  <BsSearch />
                </button>
                <button className="btn btn-secondary listing-search-btn" type="button" onClick={onFilterClicked}>
                  <BsFilter />
                </button>
              </div>
            </div>
          </Row>
          <Row className="mx-3 listings-row">{pageData.listings.mapped}</Row>
          <Pagination
            onChange={onChange}
            current={pageData.pageIndex + 1}
            total={pageData.totalCount}
            pageSize={pageData.pageSize}
            locale={locale}
            className="mb-2 mx-4"
          />
        </div>
      </Container>
    </>
  );
}

export default Landing;
