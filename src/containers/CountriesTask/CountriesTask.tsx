import { Button, Col, Container, Row } from "react-bootstrap";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL, REST_COUNTRIES_URL } from "../../../constants.ts";
import DisplayCountry from "../../components/DisplayCounty/DisplayCountry.tsx";



const CountriesTask = () => {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [clickCountries, setClickCountries] = useState<string | null>(null);


  const fetchCountries = useCallback(async () => {
    const response: { data: ICountry[] } = await axios(
      BASE_URL + REST_COUNTRIES_URL,
    );
    const responseCountries = response.data;

    const promises = responseCountries.map(async (country) => {
      return {
        name: country.name,
        alpha3Code: country.alpha3Code,
      };
    });
    setCountries(await Promise.all(promises));
  }, []);
  useEffect(() => {
    void fetchCountries();
  }, [fetchCountries]);

  return (
    <div>
      <Container className="mt-5">
        <Row className={"h-75"}>
          <Col
            style={{
              maxHeight: "500px",
              overflowY: "scroll",
              border: "1px solid #ccc",
            }}
            sm={3}
            className="border border-2 border-secondary shadow-lg rounded-3 me-5"
          >
            {countries.map((country) => {
              return (
                <Button
                  onClick={() => setClickCountries(country.alpha3Code)}
                  key={country.alpha3Code}
                  variant="light"
                  className="text-start w-100 mt-1"
                >
                  <b
                  >{country.name}</b>
                </Button>
              );
            })}
          </Col>
          <Col
            style={{ height: "500px" }}
            sm={8}
            className="border border-2 border-secondary shadow-lg rounded-3"
          >
            <DisplayCountry alpha3Code={clickCountries} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CountriesTask;
