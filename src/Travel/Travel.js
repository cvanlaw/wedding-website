import React, { Component } from 'react';
import './Travel.css';
import { Card, CardText, CardTitle, CardBody } from 'reactstrap';
import { Container, Row } from 'reactstrap';
import BannerImage from '../BannerImage/BannerImage';

class Travel extends Component {
    render() {
        return (
            <Container className="justify-content-between">
                <BannerImage />
                <Card className="text-center border-0">
                    <CardBody>
                        <CardTitle>
                            <h3>
                                <a name="travel">
                                    <strong>Travel & Accomodations</strong>
                                </a>
                            </h3>
                        </CardTitle>
                        <CardText>
                            <Row className="justify-content-around">
                                <p>
                                    We recommend <a href="https://www.southwest.com/flight/shortcut/low-fare-search.html?clk=SITESEARCH" target="_blank" rel="noopener noreferrer">
                                        Southwest Airlines
                                    </a> for flights due to their free checked bags and no change / cancellation fees. If
                                    you're looking for flights "on the cheap", another great site to check out is <a href="https://skiplagged.com" target="_blank" rel="noopener noreferrer">skiplagged.com</a>
                                </p>
                                <p>Once you arrive in Denver, there are many public transportation options. You can take the light rail from
                                    the airport to just about anywhere you want to go in and around Denver. The train picks you up just outside
                                    of the baggage claim area. You can <a href="https://www.rtd-denver.com/app/plan/trip" target="_blank" rel="noopener noreferrer">plan your route</a> on the RTD site,
                                    <a href="http://www.rtd-denver.com/routemaps/2319/101_SW_D.pdf" target="_blank" rel="noopener noreferrer"> view the route map</a>, or browse their site to learn your light rail options before arriving. The closest
                                    station to the venue is Littleton / Mineral Station (#33716), and this option would probably require using
                                    a combination of the train and a <a href="https://www.lyft.com/invite/VANLAWWEDDING" target="_blank" rel="noopener noreferrer">Lyft</a> from the station to the hotel / venue. If you're considering staying in downtown Denver, your best bet is to take the light
                                    rail to Union Station. From there, you're within walking distance of tons of great restaurants, bars, and
                                    entertainment.
                                </p>
                                <p>As for accommodations, we have some suggestions for you, depending on what you're looking for. If you're
                                    concerned about proximity to the venue, a great option is the <a href="http://www.marriott.com/hotels/travel/dentp-towneplace-suites-denver-southwest-littleton/" target="_blank" rel="noopener noreferrer">Towne Place and Suites Marriott</a> which is only 2.6 miles up the road from the wedding venue. If you're
                                    a bit more adventurous, <a
                                        href="https://www.vrbo.com/results?swLat=39.51300189851595&swLong=-105.09891252050784&neLat=39.637642081438045&neLong=-104.97256974707034&q=littleton&zoom=12&page=1&region=1&from-date=2018-06-01&to-date=2018-06-04&searchTermContext=013004bf-fc90-41bb-b5c1-2e74f87a19b5&sleeps=2-plus"
                                        target="_blank" rel="noopener noreferrer">VRBO</a> or <a
                                            href="https://www.airbnb.com/s/Littleton--CO--United-States/homes?refinement_path=%2Ffor_you&allow_override%5B%5D=&checkin=2018-06-01&checkout=2018-06-04&ne_lat=39.61575365023268&ne_lng=-104.97197138506931&sw_lat=39.51513138407771&sw_lng=-105.10552393633884&zoom=12&search_by_map=true&s_tag=NWf1ylSs"
                                            target="_blank" rel="noopener noreferrer">AirBnB</a> have some great houses available for rent. If you're not worried about proximity to the venue
                                    but prefer staying in a hotel, downtown Littleton and downtown Denver are both great places to stay!
                                </p>
                            </Row>
                        </CardText>
                    </CardBody>
                </Card>
            </Container>
        );
    }
}

export default Travel;
