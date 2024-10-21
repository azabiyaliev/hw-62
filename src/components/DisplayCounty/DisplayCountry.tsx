import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL, COUNTRY_URL } from "../../../constants.ts";
import { Col, Container, Row } from "react-bootstrap";


interface Props {
  alpha3Code: string | null;
}

const URL_TO_GET_ONE_COUNTRY = BASE_URL + COUNTRY_URL;

const DisplayCountry: React.FC<Props> = ({ alpha3Code }) => {
  const [country, setCountry] = useState<ICountryMutation | null>(null);
  const [borders, setBorders] = useState<ICountryMutation[]>([]);



  useEffect(() => {
    const getCountryByAlphaCode = async () => {
      const response: { data: ICountryMutation } = await axios(
        URL_TO_GET_ONE_COUNTRY + alpha3Code,
      );
      const responseCountry = response.data;
      setCountry(responseCountry);
      const responseBorders = responseCountry.borders;
      if (responseBorders) {
        const bordersCountries = responseBorders.map(async (border) => {
          const resBorders: { data: ICountryMutation } = await axios(
            URL_TO_GET_ONE_COUNTRY + border,
          );
          return resBorders.data;
        });
        const bord = await Promise.all(bordersCountries);
        setBorders(bord);
      } else {
        setBorders([]);
      }
    };
    if (alpha3Code !== null) void getCountryByAlphaCode();
  }, [alpha3Code]);
  return (
    country &&
    borders && (
      <>
        <Container>
          <Row className="mt-4">
            <Col sm={8}>
              <h1>{country.name}</h1>
              <p className="mt-5">
                <b>Capital:</b>{" "}
                {country.capital ? country.capital : "Not have capital"}
              </p>
              <p>
                <b>Population:</b> {(country.population / 1000000).toFixed(1)} M
              </p>
              <p className="mt-5">
                <b>Borders with:</b>
              </p>
              <div
                style={{ height: "230px" }}
                className="d-flex flex-column flex-wrap"
              >
                {borders.length > 0
                  ? borders.map((border) => (
                      <li key={border.alpha3Code}>{border.name}</li>
                    ))
                  : "Not have borders countries"}
              </div>
            </Col>
            <Col>
              <img
                className="border border-1 border-secondary"
                width={200}
                src={country.flag}
                alt={country.name}
              />
            </Col>
          </Row>
        </Container>
      </>
    )
  );
};

export default DisplayCountry;
