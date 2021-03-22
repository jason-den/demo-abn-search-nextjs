/*
Ref:
  SearchByRegistrationEvent:
    https://abr.business.gov.au/abrxmlsearch/Forms/SearchByRegistrationEvent.aspx

  entityTypeCode:
    https://abr.business.gov.au/Documentation/ReferenceData
    https://abr.business.gov.au/Help/EntityTypeList
*/

import axios from 'axios';
import xml2js from 'xml2js';

export default async function (req: any, res: any) {
  // Frontend can pass year and month through req.query
  const params = {
    // all following keys are required. Missing key will result to 500 server error
    authenticationGuid: process.env.guid,
    state: 'NSW',
    year: 2021,
    month: 3,
    entityTypeCode: 'PRV',
    postcode: ''
  };
  const url = 'https://abr.business.gov.au/abrxmlsearch/AbrXmlSearch.asmx/SearchByRegistrationEvent';

  try {
    const { data } = await axios.get(url, { params });
    const parsed = await xml2js.parseStringPromise(data);
    const abnList = parsed?.ABRPayloadSearchResults?.response?.[0]?.abnList?.[0];
    let abn = abnList?.abn;
    let numberOfRecords = parseInt(abnList?.numberOfRecords?.[0]);

    res.statusCode = 200;
    res.send({ abn, numberOfRecords });
  } catch (error) {
    console.log(error.message);
    res.statusCode = 500;
    res.send('Not OK');
  }
}
