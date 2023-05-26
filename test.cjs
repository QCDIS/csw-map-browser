const string = `
<?xml version="1.0" encoding="UTF-8"?>
<csw:GetRecordsResponse xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opengis.net/cat/csw/2.0.2 http://schemas.opengis.net/csw/2.0.2/CSW-discovery.xsd">
  <csw:SearchStatus timestamp="2023-05-25T13:19:55" />
  <csw:SearchResults numberOfRecordsMatched="7934" numberOfRecordsReturned="10" elementSet="full" nextRecord="11">
    <gmd:MD_Metadata xmlns:gmd="http://www.isotc211.org/2005/gmd" xmlns:gco="http://www.isotc211.org/2005/gco" xmlns:gml="http://www.opengis.net/gml" xmlns:gmx="http://schemas.opengis.net/iso/19139/20060504/gmx/gmx.xsd" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:geonet="http://www.fao.org/geonetwork" xsi:schemaLocation="http://www.isotc211.org/2005/gmd http://schemas.opengis.net/iso/19139/20060504/gmd/gmd.xsd">
      <gmd:fileIdentifier>
        <gco:CharacterString>c1a0e299-99ac-4144-b2d7-294fbf52a3f3</gco:CharacterString>
      </gmd:fileIdentifier>
      <gmd:language>
        <gmd:LanguageCode codeList="http://www.loc.gov/standards/iso639-2/" codeListValue="eng" />
      </gmd:language>
      <gmd:characterSet>
        <gmd:MD_CharacterSetCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_CharacterSetCode" codeListValue="utf8" />
      </gmd:characterSet>
      <gmd:hierarchyLevel>
        <gmd:MD_ScopeCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_ScopeCode" codeListValue="dataset" />
      </gmd:hierarchyLevel>
      <gmd:contact>
        <gmd:CI_ResponsibleParty>
          <gmd:organisationName xsi:type="gmd:PT_FreeText_PropertyType">
            <gco:CharacterString>Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gco:CharacterString>
            <gmd:PT_FreeText>
              <gmd:textGroup>
                <gmd:LocalisedCharacterString locale="#DUT">Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gmd:LocalisedCharacterString>
              </gmd:textGroup>
            </gmd:PT_FreeText>
          </gmd:organisationName>
          <gmd:contactInfo>
            <gmd:CI_Contact>
              <gmd:address>
                <gmd:CI_Address>
                  <gmd:electronicMailAddress>
                    <gco:CharacterString>opendata@knmi.nl</gco:CharacterString>
                  </gmd:electronicMailAddress>
                </gmd:CI_Address>
              </gmd:address>
            </gmd:CI_Contact>
          </gmd:contactInfo>
          <gmd:role>
            <gmd:CI_RoleCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_RoleCode" codeListValue="pointOfContact" />
          </gmd:role>
        </gmd:CI_ResponsibleParty>
      </gmd:contact>
      <gmd:dateStamp>
        <gco:Date>2023-04-18</gco:Date>
      </gmd:dateStamp>
      <gmd:metadataStandardName>
        <gco:CharacterString>ISO 19115</gco:CharacterString>
      </gmd:metadataStandardName>
      <gmd:metadataStandardVersion>
        <gco:CharacterString>ISO 19115:2003 NL Kernset 1.3 KNMI 1.1</gco:CharacterString>
      </gmd:metadataStandardVersion>
      <gmd:locale>
        <gmd:PT_Locale id="DUT">
          <gmd:languageCode>
            <gmd:LanguageCode codeList="http://www.loc.gov/standards/iso639-2/" codeListValue="dut" />
          </gmd:languageCode>
          <gmd:characterEncoding>
            <gmd:MD_CharacterSetCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_CharacterSetCode" codeListValue="" />
          </gmd:characterEncoding>
        </gmd:PT_Locale>
      </gmd:locale>
      <gmd:referenceSystemInfo>
        <gmd:MD_ReferenceSystem>
          <gmd:referenceSystemIdentifier>
            <gmd:RS_Identifier>
              <gmd:code>
                <gco:CharacterString>http://www.opengis.net/def/crs/EPSG/0/4326</gco:CharacterString>
              </gmd:code>
            </gmd:RS_Identifier>
          </gmd:referenceSystemIdentifier>
        </gmd:MD_ReferenceSystem>
      </gmd:referenceSystemInfo>
      <gmd:identificationInfo>
        <gmd:MD_DataIdentification>
          <gmd:citation>
            <gmd:CI_Citation>
              <gmd:title xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Meteo surface - unvalidated observations of common atmospheric variables at 10 minute interval at Cabauw</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Meteo oppervlakte - ongevalideerde waarnemingen van standaard meteorologische variabelen met 10 minuten tijdsperiode in Cabauw</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:title>
              <gmd:date>
                <gmd:CI_Date>
                  <gmd:date>
                    <gco:Date>2021-02-03</gco:Date>
                  </gmd:date>
                  <gmd:dateType>
                    <gmd:CI_DateTypeCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_DateTypeCode" codeListValue="publication" />
                  </gmd:dateType>
                </gmd:CI_Date>
              </gmd:date>
              <gmd:edition>
                <gco:CharacterString>3</gco:CharacterString>
              </gmd:edition>
              <gmd:identifier>
                <gmd:MD_Identifier>
                  <gmd:code>
                    <gco:CharacterString>urn:xkdc:ds:nl.knmi::cesar_surface_meteo_la1_t10/v1.0/</gco:CharacterString>
                  </gmd:code>
                </gmd:MD_Identifier>
              </gmd:identifier>
            </gmd:CI_Citation>
          </gmd:citation>
          <gmd:abstract xsi:type="gmd:PT_FreeText_PropertyType">
            <gco:CharacterString>Unvalidated meteorological surface observations of precipitation, visibility, radiation, air pressure, wind speed, wind direction, temperature and dew point at Cabauw on a 10-minute basis. Visibility and precipitation type available from January 2008. The data is updated realtime, so the last file might not contain all data yet. For more information about how to interpret the data, please read: https://cdn.knmi.nl/knmi/pdf/bibliotheek/knmipubTR/TR384.pdf.</gco:CharacterString>
            <gmd:PT_FreeText>
              <gmd:textGroup>
                <gmd:LocalisedCharacterString locale="#DUT">Ongevalideerde oppervlakte observaties van neerslag, zicht, straling, luchtdruk, windsnelheid, windrichting, temperatuur en dauwpunts temperatuur voor Cabauw op een tijdbasis van 10 minuten. Zicht en neerslag type zijn beschikbaar vanaf januari 2008. De data wordt continue geüpdate, dus het laatste bestand bevat mogelijk nog niet alle data. Voor meer informatie over hoe de data geïnterpreteerd kan worden: https://cdn.knmi.nl/knmi/pdf/bibliotheek/knmipubTR/TR384.pdf.</gmd:LocalisedCharacterString>
              </gmd:textGroup>
            </gmd:PT_FreeText>
          </gmd:abstract>
          <gmd:status>
            <gmd:MD_ProgressCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_ProgressCode" codeListValue="onGoing" />
          </gmd:status>
          <gmd:pointOfContact>
            <gmd:CI_ResponsibleParty>
              <gmd:organisationName xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:organisationName>
              <gmd:contactInfo>
                <gmd:CI_Contact>
                  <gmd:address>
                    <gmd:CI_Address>
                      <gmd:electronicMailAddress>
                        <gco:CharacterString>opendata@knmi.nl</gco:CharacterString>
                      </gmd:electronicMailAddress>
                    </gmd:CI_Address>
                  </gmd:address>
                </gmd:CI_Contact>
              </gmd:contactInfo>
              <gmd:role>
                <gmd:CI_RoleCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_RoleCode" codeListValue="pointOfContact" />
              </gmd:role>
            </gmd:CI_ResponsibleParty>
          </gmd:pointOfContact>
          <gmd:resourceMaintenance>
            <gmd:MD_MaintenanceInformation>
              <gmd:maintenanceAndUpdateFrequency>
                <gmd:MD_MaintenanceFrequencyCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_MaintenanceFrequencyCode" codeListValue="unknown" />
              </gmd:maintenanceAndUpdateFrequency>
            </gmd:MD_MaintenanceInformation>
          </gmd:resourceMaintenance>
          <gmd:descriptiveKeywords>
            <gmd:MD_Keywords>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Wind</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Wind</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Visibility</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Zicht</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Temperature</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Temperatuur</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>CESAR</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">CESAR</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Cabauw</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Cabauw</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Radiation</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Straling</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Air pressure</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Luchtdruk</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Precipitation</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Neerslag</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Insitu</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Insitu</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:thesaurusName>
                <gmd:CI_Citation>
                  <gmd:title>
                    <gco:CharacterString>DG Discovery Properties Vocabulary 1.0</gco:CharacterString>
                  </gmd:title>
                  <gmd:date>
                    <gmd:CI_Date>
                      <gmd:date>
                        <gco:Date>2013-01-01</gco:Date>
                      </gmd:date>
                      <gmd:dateType>
                        <gmd:CI_DateTypeCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_DateTypeCode" codeListValue="publication" />
                      </gmd:dateType>
                    </gmd:CI_Date>
                  </gmd:date>
                </gmd:CI_Citation>
              </gmd:thesaurusName>
            </gmd:MD_Keywords>
          </gmd:descriptiveKeywords>
          <gmd:descriptiveKeywords>
            <gmd:MD_Keywords>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Open data</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Open data</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Ruisdael</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Ruisdael</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
            </gmd:MD_Keywords>
          </gmd:descriptiveKeywords>
          <gmd:resourceConstraints>
            <gmd:MD_Constraints>
              <gmd:useLimitation xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>No use limitations</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Geen gebruiksbeperkingen</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:useLimitation>
            </gmd:MD_Constraints>
          </gmd:resourceConstraints>
          <gmd:resourceConstraints>
            <gmd:MD_LegalConstraints>
              <gmd:accessConstraints>
                <gmd:MD_RestrictionCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_RestrictionCode" codeListValue="otherRestrictions" />
              </gmd:accessConstraints>
              <gmd:otherConstraints>
                <gco:CharacterString>https://creativecommons.org/publicdomain/zero/1.0/deed.nl</gco:CharacterString>
              </gmd:otherConstraints>
            </gmd:MD_LegalConstraints>
          </gmd:resourceConstraints>
          <gmd:resourceConstraints>
            <gmd:MD_SecurityConstraints>
              <gmd:classification>
                <gmd:MD_ClassificationCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_ClassificationCode" codeListValue="unclassified" />
              </gmd:classification>
            </gmd:MD_SecurityConstraints>
          </gmd:resourceConstraints>
          <gmd:spatialResolution>
            <gmd:MD_Resolution>
              <gmd:equivalentScale>
                <gmd:MD_RepresentativeFraction>
                  <gmd:denominator>
                    <gco:Integer>1</gco:Integer>
                  </gmd:denominator>
                </gmd:MD_RepresentativeFraction>
              </gmd:equivalentScale>
            </gmd:MD_Resolution>
          </gmd:spatialResolution>
          <gmd:language>
            <gmd:LanguageCode codeList="http://www.loc.gov/standards/iso639-2/" codeListValue="eng" />
          </gmd:language>
          <gmd:characterSet>
            <gmd:MD_CharacterSetCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_CharacterSetCode" codeListValue="utf8" />
          </gmd:characterSet>
          <gmd:topicCategory>
            <gmd:MD_TopicCategoryCode>climatologyMeteorologyAtmosphere</gmd:MD_TopicCategoryCode>
          </gmd:topicCategory>
          <gmd:extent>
            <gmd:EX_Extent>
              <gmd:geographicElement>
                <gmd:EX_GeographicBoundingBox>
                  <gmd:westBoundLongitude>
                    <gco:Decimal>4.926</gco:Decimal>
                  </gmd:westBoundLongitude>
                  <gmd:eastBoundLongitude>
                    <gco:Decimal>4.926</gco:Decimal>
                  </gmd:eastBoundLongitude>
                  <gmd:southBoundLatitude>
                    <gco:Decimal>51.97</gco:Decimal>
                  </gmd:southBoundLatitude>
                  <gmd:northBoundLatitude>
                    <gco:Decimal>51.97</gco:Decimal>
                  </gmd:northBoundLatitude>
                </gmd:EX_GeographicBoundingBox>
              </gmd:geographicElement>
              <gmd:temporalElement>
                <gmd:EX_TemporalExtent>
                  <gmd:extent>
                    <gml:TimePeriod gml:id="d7669e433a1052958">
                      <gml:beginPosition>2020-01-01</gml:beginPosition>
                      <gml:endPosition>9999-12-31</gml:endPosition>
                    </gml:TimePeriod>
                  </gmd:extent>
                </gmd:EX_TemporalExtent>
              </gmd:temporalElement>
              <gmd:verticalElement>
                <gmd:EX_VerticalExtent>
                  <gmd:minimumValue>
                    <gco:Real>1.0</gco:Real>
                  </gmd:minimumValue>
                  <gmd:maximumValue>
                    <gco:Real>1.0</gco:Real>
                  </gmd:maximumValue>
                  <gmd:verticalCRS />
                </gmd:EX_VerticalExtent>
              </gmd:verticalElement>
            </gmd:EX_Extent>
          </gmd:extent>
        </gmd:MD_DataIdentification>
      </gmd:identificationInfo>
      <gmd:distributionInfo>
        <gmd:MD_Distribution>
          <gmd:distributionFormat>
            <gmd:MD_Format>
              <gmd:name>
                <gco:CharacterString>NetCDF</gco:CharacterString>
              </gmd:name>
              <gmd:version>
                <gco:CharacterString>4</gco:CharacterString>
              </gmd:version>
              <gmd:specification>
                <gco:CharacterString>CF</gco:CharacterString>
              </gmd:specification>
            </gmd:MD_Format>
          </gmd:distributionFormat>
          <gmd:distributor>
            <gmd:MD_Distributor>
              <gmd:distributorContact>
                <gmd:CI_ResponsibleParty>
                  <gmd:organisationName xsi:type="gmd:PT_FreeText_PropertyType">
                    <gco:CharacterString>Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gco:CharacterString>
                    <gmd:PT_FreeText>
                      <gmd:textGroup>
                        <gmd:LocalisedCharacterString locale="#DUT">Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gmd:LocalisedCharacterString>
                      </gmd:textGroup>
                    </gmd:PT_FreeText>
                  </gmd:organisationName>
                  <gmd:contactInfo>
                    <gmd:CI_Contact>
                      <gmd:address>
                        <gmd:CI_Address>
                          <gmd:electronicMailAddress>
                            <gco:CharacterString>opendata@knmi.nl</gco:CharacterString>
                          </gmd:electronicMailAddress>
                        </gmd:CI_Address>
                      </gmd:address>
                    </gmd:CI_Contact>
                  </gmd:contactInfo>
                  <gmd:role>
                    <gmd:CI_RoleCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_RoleCode" codeListValue="pointOfContact" />
                  </gmd:role>
                </gmd:CI_ResponsibleParty>
              </gmd:distributorContact>
            </gmd:MD_Distributor>
          </gmd:distributor>
          <gmd:transferOptions>
            <gmd:MD_DigitalTransferOptions>
              <gmd:onLine>
                <gmd:CI_OnlineResource>
                  <gmd:linkage>
                    <gmd:URL>https://dataplatform.knmi.nl/catalog/datasets/index.html?x-dataset=cesar_surface_meteo_la1_t10&amp;x-dataset-version=v1.0</gmd:URL>
                  </gmd:linkage>
                  <gmd:protocol>
                    <gco:CharacterString>landingpage</gco:CharacterString>
                  </gmd:protocol>
                  <gmd:name>
                    <gco:CharacterString>KNMI Data Platform</gco:CharacterString>
                  </gmd:name>
                </gmd:CI_OnlineResource>
              </gmd:onLine>
            </gmd:MD_DigitalTransferOptions>
          </gmd:transferOptions>
        </gmd:MD_Distribution>
      </gmd:distributionInfo>
      <gmd:dataQualityInfo>
        <gmd:DQ_DataQuality>
          <gmd:scope>
            <gmd:DQ_Scope>
              <gmd:level>
                <gmd:MD_ScopeCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_ScopeCode" codeListValue="dataset" />
              </gmd:level>
            </gmd:DQ_Scope>
          </gmd:scope>
          <gmd:lineage>
            <gmd:LI_Lineage>
              <gmd:statement xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Continuous observations are performed and published.</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Continue metingen uitgevoerd in Cabauw en gepubliceerd.</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:statement>
            </gmd:LI_Lineage>
          </gmd:lineage>
        </gmd:DQ_DataQuality>
      </gmd:dataQualityInfo>
    </gmd:MD_Metadata>
    <gmd:MD_Metadata xmlns:gmd="http://www.isotc211.org/2005/gmd" xmlns:gco="http://www.isotc211.org/2005/gco" xmlns:gml="http://www.opengis.net/gml" xmlns:gmx="http://schemas.opengis.net/iso/19139/20060504/gmx/gmx.xsd" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:geonet="http://www.fao.org/geonetwork" xsi:schemaLocation="http://www.isotc211.org/2005/gmd http://schemas.opengis.net/iso/19139/20060504/gmd/gmd.xsd">
      <gmd:fileIdentifier>
        <gco:CharacterString>9abbb6ec-1bf5-4140-9b17-e39f2dcca605</gco:CharacterString>
      </gmd:fileIdentifier>
      <gmd:language>
        <gmd:LanguageCode codeList="http://www.loc.gov/standards/iso639-2/" codeListValue="eng" />
      </gmd:language>
      <gmd:characterSet>
        <gmd:MD_CharacterSetCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_CharacterSetCode" codeListValue="utf8" />
      </gmd:characterSet>
      <gmd:hierarchyLevel>
        <gmd:MD_ScopeCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_ScopeCode" codeListValue="dataset" />
      </gmd:hierarchyLevel>
      <gmd:contact>
        <gmd:CI_ResponsibleParty>
          <gmd:organisationName xsi:type="gmd:PT_FreeText_PropertyType">
            <gco:CharacterString>Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gco:CharacterString>
            <gmd:PT_FreeText>
              <gmd:textGroup>
                <gmd:LocalisedCharacterString locale="#DUT">Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gmd:LocalisedCharacterString>
              </gmd:textGroup>
            </gmd:PT_FreeText>
          </gmd:organisationName>
          <gmd:contactInfo>
            <gmd:CI_Contact>
              <gmd:address>
                <gmd:CI_Address>
                  <gmd:electronicMailAddress>
                    <gco:CharacterString>opendata@knmi.nl</gco:CharacterString>
                  </gmd:electronicMailAddress>
                </gmd:CI_Address>
              </gmd:address>
            </gmd:CI_Contact>
          </gmd:contactInfo>
          <gmd:role>
            <gmd:CI_RoleCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_RoleCode" codeListValue="pointOfContact" />
          </gmd:role>
        </gmd:CI_ResponsibleParty>
      </gmd:contact>
      <gmd:dateStamp>
        <gco:Date>2023-04-18</gco:Date>
      </gmd:dateStamp>
      <gmd:metadataStandardName>
        <gco:CharacterString>ISO 19115</gco:CharacterString>
      </gmd:metadataStandardName>
      <gmd:metadataStandardVersion>
        <gco:CharacterString>ISO 19115:2003 NL Kernset 1.3 KNMI 1.1</gco:CharacterString>
      </gmd:metadataStandardVersion>
      <gmd:locale>
        <gmd:PT_Locale id="DUT">
          <gmd:languageCode>
            <gmd:LanguageCode codeList="http://www.loc.gov/standards/iso639-2/" codeListValue="dut" />
          </gmd:languageCode>
          <gmd:characterEncoding>
            <gmd:MD_CharacterSetCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_CharacterSetCode" codeListValue="" />
          </gmd:characterEncoding>
        </gmd:PT_Locale>
      </gmd:locale>
      <gmd:referenceSystemInfo>
        <gmd:MD_ReferenceSystem>
          <gmd:referenceSystemIdentifier>
            <gmd:RS_Identifier>
              <gmd:code>
                <gco:CharacterString>http://www.opengis.net/def/crs/EPSG/0/4326</gco:CharacterString>
              </gmd:code>
            </gmd:RS_Identifier>
          </gmd:referenceSystemIdentifier>
        </gmd:MD_ReferenceSystem>
      </gmd:referenceSystemInfo>
      <gmd:identificationInfo>
        <gmd:MD_DataIdentification>
          <gmd:citation>
            <gmd:CI_Citation>
              <gmd:title xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Surface fluxes - unvalidated fluxes of heat, humidity, radiation, momentum and CO2 at 10 minute interval at Cabauw</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Oppervlakte fluxen - ongevalideerde fluxen of warmte, vocht, straling, impuls en CO2 met 10 minuten tijdsperiode in Cabauw</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:title>
              <gmd:date>
                <gmd:CI_Date>
                  <gmd:date>
                    <gco:Date>2021-02-03</gco:Date>
                  </gmd:date>
                  <gmd:dateType>
                    <gmd:CI_DateTypeCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_DateTypeCode" codeListValue="publication" />
                  </gmd:dateType>
                </gmd:CI_Date>
              </gmd:date>
              <gmd:edition>
                <gco:CharacterString>3</gco:CharacterString>
              </gmd:edition>
              <gmd:identifier>
                <gmd:MD_Identifier>
                  <gmd:code>
                    <gco:CharacterString>urn:xkdc:ds:nl.knmi::cesar_surface_flux_la1_t10/v1.0/</gco:CharacterString>
                  </gmd:code>
                </gmd:MD_Identifier>
              </gmd:identifier>
            </gmd:CI_Citation>
          </gmd:citation>
          <gmd:abstract xsi:type="gmd:PT_FreeText_PropertyType">
            <gco:CharacterString>Unvalidated surface fluxes of net radiation, momentum, sensible heat, latent heat, soil heat and carbon dioxide at Cabauw on a 10-minute basis. The data is updated realtime, so the last file might not contain all data yet. For more information about how to interpret the data, please read: https://cdn.knmi.nl/knmi/pdf/bibliotheek/knmipubTR/TR384.pdf.</gco:CharacterString>
            <gmd:PT_FreeText>
              <gmd:textGroup>
                <gmd:LocalisedCharacterString locale="#DUT">Ongevalideerde oppervlakte fluxen van netto straling, impuls, voelbare warmte, latente warmte, bodem warmte en koolstof dioxide in Cabauw op een tijdsbasis van 10 minuten. De data wordt continue geüpdate, dus het laatste bestand bevat mogelijk nog niet alle data. Voor meer informatie over hoe de data geïnterpreteerd kan worden: https://cdn.knmi.nl/knmi/pdf/bibliotheek/knmipubTR/TR384.pdf.</gmd:LocalisedCharacterString>
              </gmd:textGroup>
            </gmd:PT_FreeText>
          </gmd:abstract>
          <gmd:status>
            <gmd:MD_ProgressCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_ProgressCode" codeListValue="onGoing" />
          </gmd:status>
          <gmd:pointOfContact>
            <gmd:CI_ResponsibleParty>
              <gmd:organisationName xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:organisationName>
              <gmd:contactInfo>
                <gmd:CI_Contact>
                  <gmd:address>
                    <gmd:CI_Address>
                      <gmd:electronicMailAddress>
                        <gco:CharacterString>opendata@knmi.nl</gco:CharacterString>
                      </gmd:electronicMailAddress>
                    </gmd:CI_Address>
                  </gmd:address>
                </gmd:CI_Contact>
              </gmd:contactInfo>
              <gmd:role>
                <gmd:CI_RoleCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_RoleCode" codeListValue="pointOfContact" />
              </gmd:role>
            </gmd:CI_ResponsibleParty>
          </gmd:pointOfContact>
          <gmd:resourceMaintenance>
            <gmd:MD_MaintenanceInformation>
              <gmd:maintenanceAndUpdateFrequency>
                <gmd:MD_MaintenanceFrequencyCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_MaintenanceFrequencyCode" codeListValue="unknown" />
              </gmd:maintenanceAndUpdateFrequency>
            </gmd:MD_MaintenanceInformation>
          </gmd:resourceMaintenance>
          <gmd:descriptiveKeywords>
            <gmd:MD_Keywords>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Surface flux</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Oppervlakte flux</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Carbon dioxide</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Koolstofdioxide</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Sensible heat</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Voelbare warmte</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>CESAR</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">CESAR</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Cabauw</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Cabauw</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Latent heat</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Latente warmte</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Momentum</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Impuls</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Soil heat</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Bodem warmte</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Insitu</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Insitu</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:thesaurusName>
                <gmd:CI_Citation>
                  <gmd:title>
                    <gco:CharacterString>DG Discovery Properties Vocabulary 1.0</gco:CharacterString>
                  </gmd:title>
                  <gmd:date>
                    <gmd:CI_Date>
                      <gmd:date>
                        <gco:Date>2013-01-01</gco:Date>
                      </gmd:date>
                      <gmd:dateType>
                        <gmd:CI_DateTypeCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_DateTypeCode" codeListValue="publication" />
                      </gmd:dateType>
                    </gmd:CI_Date>
                  </gmd:date>
                </gmd:CI_Citation>
              </gmd:thesaurusName>
            </gmd:MD_Keywords>
          </gmd:descriptiveKeywords>
          <gmd:descriptiveKeywords>
            <gmd:MD_Keywords>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Open data</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Open data</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Ruisdael</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Ruisdael</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
            </gmd:MD_Keywords>
          </gmd:descriptiveKeywords>
          <gmd:resourceConstraints>
            <gmd:MD_Constraints>
              <gmd:useLimitation xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>No use limitations</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Geen gebruiksbeperkingen</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:useLimitation>
            </gmd:MD_Constraints>
          </gmd:resourceConstraints>
          <gmd:resourceConstraints>
            <gmd:MD_LegalConstraints>
              <gmd:accessConstraints>
                <gmd:MD_RestrictionCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_RestrictionCode" codeListValue="otherRestrictions" />
              </gmd:accessConstraints>
              <gmd:otherConstraints>
                <gco:CharacterString>https://creativecommons.org/publicdomain/zero/1.0/deed.nl</gco:CharacterString>
              </gmd:otherConstraints>
            </gmd:MD_LegalConstraints>
          </gmd:resourceConstraints>
          <gmd:resourceConstraints>
            <gmd:MD_SecurityConstraints>
              <gmd:classification>
                <gmd:MD_ClassificationCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_ClassificationCode" codeListValue="unclassified" />
              </gmd:classification>
            </gmd:MD_SecurityConstraints>
          </gmd:resourceConstraints>
          <gmd:spatialResolution>
            <gmd:MD_Resolution>
              <gmd:equivalentScale>
                <gmd:MD_RepresentativeFraction>
                  <gmd:denominator>
                    <gco:Integer>1</gco:Integer>
                  </gmd:denominator>
                </gmd:MD_RepresentativeFraction>
              </gmd:equivalentScale>
            </gmd:MD_Resolution>
          </gmd:spatialResolution>
          <gmd:language>
            <gmd:LanguageCode codeList="http://www.loc.gov/standards/iso639-2/" codeListValue="eng" />
          </gmd:language>
          <gmd:characterSet>
            <gmd:MD_CharacterSetCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_CharacterSetCode" codeListValue="utf8" />
          </gmd:characterSet>
          <gmd:topicCategory>
            <gmd:MD_TopicCategoryCode>climatologyMeteorologyAtmosphere</gmd:MD_TopicCategoryCode>
          </gmd:topicCategory>
          <gmd:extent>
            <gmd:EX_Extent>
              <gmd:geographicElement>
                <gmd:EX_GeographicBoundingBox>
                  <gmd:westBoundLongitude>
                    <gco:Decimal>4.926</gco:Decimal>
                  </gmd:westBoundLongitude>
                  <gmd:eastBoundLongitude>
                    <gco:Decimal>4.926</gco:Decimal>
                  </gmd:eastBoundLongitude>
                  <gmd:southBoundLatitude>
                    <gco:Decimal>51.97</gco:Decimal>
                  </gmd:southBoundLatitude>
                  <gmd:northBoundLatitude>
                    <gco:Decimal>51.97</gco:Decimal>
                  </gmd:northBoundLatitude>
                </gmd:EX_GeographicBoundingBox>
              </gmd:geographicElement>
              <gmd:temporalElement>
                <gmd:EX_TemporalExtent>
                  <gmd:extent>
                    <gml:TimePeriod gml:id="d7669e433a1052958">
                      <gml:beginPosition>2020-01-01</gml:beginPosition>
                      <gml:endPosition>9999-12-31</gml:endPosition>
                    </gml:TimePeriod>
                  </gmd:extent>
                </gmd:EX_TemporalExtent>
              </gmd:temporalElement>
              <gmd:verticalElement>
                <gmd:EX_VerticalExtent>
                  <gmd:minimumValue>
                    <gco:Real>1.0</gco:Real>
                  </gmd:minimumValue>
                  <gmd:maximumValue>
                    <gco:Real>1.0</gco:Real>
                  </gmd:maximumValue>
                  <gmd:verticalCRS />
                </gmd:EX_VerticalExtent>
              </gmd:verticalElement>
            </gmd:EX_Extent>
          </gmd:extent>
        </gmd:MD_DataIdentification>
      </gmd:identificationInfo>
      <gmd:distributionInfo>
        <gmd:MD_Distribution>
          <gmd:distributionFormat>
            <gmd:MD_Format>
              <gmd:name>
                <gco:CharacterString>NetCDF</gco:CharacterString>
              </gmd:name>
              <gmd:version>
                <gco:CharacterString>3</gco:CharacterString>
              </gmd:version>
              <gmd:specification>
                <gco:CharacterString>CF</gco:CharacterString>
              </gmd:specification>
            </gmd:MD_Format>
          </gmd:distributionFormat>
          <gmd:distributor>
            <gmd:MD_Distributor>
              <gmd:distributorContact>
                <gmd:CI_ResponsibleParty>
                  <gmd:organisationName xsi:type="gmd:PT_FreeText_PropertyType">
                    <gco:CharacterString>Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gco:CharacterString>
                    <gmd:PT_FreeText>
                      <gmd:textGroup>
                        <gmd:LocalisedCharacterString locale="#DUT">Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gmd:LocalisedCharacterString>
                      </gmd:textGroup>
                    </gmd:PT_FreeText>
                  </gmd:organisationName>
                  <gmd:contactInfo>
                    <gmd:CI_Contact>
                      <gmd:address>
                        <gmd:CI_Address>
                          <gmd:electronicMailAddress>
                            <gco:CharacterString>opendata@knmi.nl</gco:CharacterString>
                          </gmd:electronicMailAddress>
                        </gmd:CI_Address>
                      </gmd:address>
                    </gmd:CI_Contact>
                  </gmd:contactInfo>
                  <gmd:role>
                    <gmd:CI_RoleCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_RoleCode" codeListValue="pointOfContact" />
                  </gmd:role>
                </gmd:CI_ResponsibleParty>
              </gmd:distributorContact>
            </gmd:MD_Distributor>
          </gmd:distributor>
          <gmd:transferOptions>
            <gmd:MD_DigitalTransferOptions>
              <gmd:onLine>
                <gmd:CI_OnlineResource>
                  <gmd:linkage>
                    <gmd:URL>https://dataplatform.knmi.nl/catalog/datasets/index.html?x-dataset=cesar_surface_flux_la1_t10&amp;x-dataset-version=v1.0</gmd:URL>
                  </gmd:linkage>
                  <gmd:protocol>
                    <gco:CharacterString>landingpage</gco:CharacterString>
                  </gmd:protocol>
                  <gmd:name>
                    <gco:CharacterString>KNMI Data Platform</gco:CharacterString>
                  </gmd:name>
                </gmd:CI_OnlineResource>
              </gmd:onLine>
            </gmd:MD_DigitalTransferOptions>
          </gmd:transferOptions>
        </gmd:MD_Distribution>
      </gmd:distributionInfo>
      <gmd:dataQualityInfo>
        <gmd:DQ_DataQuality>
          <gmd:scope>
            <gmd:DQ_Scope>
              <gmd:level>
                <gmd:MD_ScopeCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_ScopeCode" codeListValue="dataset" />
              </gmd:level>
            </gmd:DQ_Scope>
          </gmd:scope>
          <gmd:lineage>
            <gmd:LI_Lineage>
              <gmd:statement xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Continuous observations are performed and published.</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Continue metingen worden uitgevoerd en gepubliceerd.</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:statement>
            </gmd:LI_Lineage>
          </gmd:lineage>
        </gmd:DQ_DataQuality>
      </gmd:dataQualityInfo>
    </gmd:MD_Metadata>
    <gmd:MD_Metadata xmlns:gmd="http://www.isotc211.org/2005/gmd" xmlns:gco="http://www.isotc211.org/2005/gco" xmlns:gml="http://www.opengis.net/gml" xmlns:gmx="http://schemas.opengis.net/iso/19139/20060504/gmx/gmx.xsd" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:geonet="http://www.fao.org/geonetwork" xsi:schemaLocation="http://www.isotc211.org/2005/gmd http://schemas.opengis.net/iso/19139/20060504/gmd/gmd.xsd">
      <gmd:fileIdentifier>
        <gco:CharacterString>92940634-0682-11ec-9fb2-059654019e08</gco:CharacterString>
      </gmd:fileIdentifier>
      <gmd:language>
        <gmd:LanguageCode codeList="http://www.loc.gov/standards/iso639-2/" codeListValue="eng" />
      </gmd:language>
      <gmd:characterSet>
        <gmd:MD_CharacterSetCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_CharacterSetCode" codeListValue="utf8" />
      </gmd:characterSet>
      <gmd:hierarchyLevel>
        <gmd:MD_ScopeCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_ScopeCode" codeListValue="dataset" />
      </gmd:hierarchyLevel>
      <gmd:contact>
        <gmd:CI_ResponsibleParty>
          <gmd:organisationName xsi:type="gmd:PT_FreeText_PropertyType">
            <gco:CharacterString>Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gco:CharacterString>
            <gmd:PT_FreeText>
              <gmd:textGroup>
                <gmd:LocalisedCharacterString locale="#DUT">Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gmd:LocalisedCharacterString>
              </gmd:textGroup>
            </gmd:PT_FreeText>
          </gmd:organisationName>
          <gmd:contactInfo>
            <gmd:CI_Contact>
              <gmd:address>
                <gmd:CI_Address>
                  <gmd:electronicMailAddress>
                    <gco:CharacterString>opendata@knmi.nl</gco:CharacterString>
                  </gmd:electronicMailAddress>
                </gmd:CI_Address>
              </gmd:address>
            </gmd:CI_Contact>
          </gmd:contactInfo>
          <gmd:role>
            <gmd:CI_RoleCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_RoleCode" codeListValue="pointOfContact" />
          </gmd:role>
        </gmd:CI_ResponsibleParty>
      </gmd:contact>
      <gmd:dateStamp>
        <gco:Date>2021-08-30</gco:Date>
      </gmd:dateStamp>
      <gmd:metadataStandardName>
        <gco:CharacterString>ISO 19115</gco:CharacterString>
      </gmd:metadataStandardName>
      <gmd:metadataStandardVersion>
        <gco:CharacterString>ISO 19115:2003 NL Kernset 1.3 KNMI 1.1</gco:CharacterString>
      </gmd:metadataStandardVersion>
      <gmd:locale>
        <gmd:PT_Locale id="DUT">
          <gmd:languageCode>
            <gmd:LanguageCode codeList="http://www.loc.gov/standards/iso639-2/" codeListValue="dut" />
          </gmd:languageCode>
          <gmd:characterEncoding>
            <gmd:MD_CharacterSetCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_CharacterSetCode" codeListValue="" />
          </gmd:characterEncoding>
        </gmd:PT_Locale>
      </gmd:locale>
      <gmd:referenceSystemInfo>
        <gmd:MD_ReferenceSystem>
          <gmd:referenceSystemIdentifier>
            <gmd:RS_Identifier>
              <gmd:code>
                <gco:CharacterString>http://www.opengis.net/def/crs/EPSG/0/28992</gco:CharacterString>
              </gmd:code>
            </gmd:RS_Identifier>
          </gmd:referenceSystemIdentifier>
        </gmd:MD_ReferenceSystem>
      </gmd:referenceSystemInfo>
      <gmd:identificationInfo>
        <gmd:MD_DataIdentification>
          <gmd:citation>
            <gmd:CI_Citation>
              <gmd:title xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Climate normals - 1991-2020 climat normals by station from KNMI automatic weather stations (AWS).</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Klimaatnormalen - 1991-2020 klimaat normalen per station van KNMI automatische weer stations (AWS).</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:title>
              <gmd:date>
                <gmd:CI_Date>
                  <gmd:date>
                    <gco:Date>2021-08-30</gco:Date>
                  </gmd:date>
                  <gmd:dateType>
                    <gmd:CI_DateTypeCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_DateTypeCode" codeListValue="publication" />
                  </gmd:dateType>
                </gmd:CI_Date>
              </gmd:date>
              <gmd:edition>
                <gco:CharacterString>1</gco:CharacterString>
              </gmd:edition>
              <gmd:identifier>
                <gmd:MD_Identifier>
                  <gmd:code>
                    <gco:CharacterString>urn:xkdc:ds:nl.knmi::climate_normals_1991_2020_climate_normals_by_station/1/</gco:CharacterString>
                  </gmd:code>
                </gmd:MD_Identifier>
              </gmd:identifier>
            </gmd:CI_Citation>
          </gmd:citation>
          <gmd:abstract xsi:type="gmd:PT_FreeText_PropertyType">
            <gco:CharacterString>The 30 year average values of various climate variables. Determined per month, per season and per year. Organized by automatic weather stations (AWS).</gco:CharacterString>
            <gmd:PT_FreeText>
              <gmd:textGroup>
                <gmd:LocalisedCharacterString locale="#DUT">De 30 jarige gemiddelde waardes van diverse klimaatvariabelen. Bepaald per maand, per seizoen en per jaar. Geordend per automatische weer stations (AWS).</gmd:LocalisedCharacterString>
              </gmd:textGroup>
            </gmd:PT_FreeText>
          </gmd:abstract>
          <gmd:status>
            <gmd:MD_ProgressCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_ProgressCode" codeListValue="completed" />
          </gmd:status>
          <gmd:pointOfContact>
            <gmd:CI_ResponsibleParty>
              <gmd:organisationName xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:organisationName>
              <gmd:contactInfo>
                <gmd:CI_Contact>
                  <gmd:address>
                    <gmd:CI_Address>
                      <gmd:electronicMailAddress>
                        <gco:CharacterString>opendata@knmi.nl</gco:CharacterString>
                      </gmd:electronicMailAddress>
                    </gmd:CI_Address>
                  </gmd:address>
                </gmd:CI_Contact>
              </gmd:contactInfo>
              <gmd:role>
                <gmd:CI_RoleCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_RoleCode" codeListValue="pointOfContact" />
              </gmd:role>
            </gmd:CI_ResponsibleParty>
          </gmd:pointOfContact>
          <gmd:resourceMaintenance>
            <gmd:MD_MaintenanceInformation>
              <gmd:maintenanceAndUpdateFrequency>
                <gmd:MD_MaintenanceFrequencyCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_MaintenanceFrequencyCode" codeListValue="notPlanned" />
              </gmd:maintenanceAndUpdateFrequency>
            </gmd:MD_MaintenanceInformation>
          </gmd:resourceMaintenance>
          <gmd:descriptiveKeywords>
            <gmd:MD_Keywords>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>AWS</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">AWS</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Automatic weather stations</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Automatische weer stations</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Weather station</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Weerstation</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>SYNOP stations</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">SYNOP-stations</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Climate normals</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Klimaat normalen</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Normals</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Normalen</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>WMO</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">WMO</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>WMO normals</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">WMO-normalen</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>World meteorological organization</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Wereld meteorologische organisatie</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Climate tabels</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Klimaattabellen</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Month normals</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Maandnormalen</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Seasonal normals</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Seizoensnormalen</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Season</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Seizoen</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:thesaurusName>
                <gmd:CI_Citation>
                  <gmd:title>
                    <gco:CharacterString>DG Discovery Properties Vocabulary 1.0</gco:CharacterString>
                  </gmd:title>
                  <gmd:date>
                    <gmd:CI_Date>
                      <gmd:date>
                        <gco:Date>2013-01-01</gco:Date>
                      </gmd:date>
                      <gmd:dateType>
                        <gmd:CI_DateTypeCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_DateTypeCode" codeListValue="publication" />
                      </gmd:dateType>
                    </gmd:CI_Date>
                  </gmd:date>
                </gmd:CI_Citation>
              </gmd:thesaurusName>
            </gmd:MD_Keywords>
          </gmd:descriptiveKeywords>
          <gmd:descriptiveKeywords>
            <gmd:MD_Keywords>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Open data</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Open data</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
            </gmd:MD_Keywords>
          </gmd:descriptiveKeywords>
          <gmd:resourceConstraints>
            <gmd:MD_Constraints>
              <gmd:useLimitation xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>No use limitations</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Geen gebruiksbeperkingen</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:useLimitation>
            </gmd:MD_Constraints>
          </gmd:resourceConstraints>
          <gmd:resourceConstraints>
            <gmd:MD_LegalConstraints>
              <gmd:accessConstraints>
                <gmd:MD_RestrictionCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_RestrictionCode" codeListValue="otherRestrictions" />
              </gmd:accessConstraints>
              <gmd:otherConstraints>
                <gco:CharacterString>https://creativecommons.org/publicdomain/zero/1.0/deed.nl</gco:CharacterString>
              </gmd:otherConstraints>
            </gmd:MD_LegalConstraints>
          </gmd:resourceConstraints>
          <gmd:resourceConstraints>
            <gmd:MD_SecurityConstraints>
              <gmd:classification>
                <gmd:MD_ClassificationCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_ClassificationCode" codeListValue="unclassified" />
              </gmd:classification>
            </gmd:MD_SecurityConstraints>
          </gmd:resourceConstraints>
          <gmd:spatialRepresentationType>
            <gmd:MD_SpatialRepresentationTypeCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_SpatialRepresentationTypeCode" codeListValue="grid" />
          </gmd:spatialRepresentationType>
          <gmd:language>
            <gmd:LanguageCode codeList="http://www.loc.gov/standards/iso639-2/" codeListValue="eng" />
          </gmd:language>
          <gmd:characterSet>
            <gmd:MD_CharacterSetCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_CharacterSetCode" codeListValue="utf8" />
          </gmd:characterSet>
          <gmd:topicCategory>
            <gmd:MD_TopicCategoryCode>climatologyMeteorologyAtmosphere</gmd:MD_TopicCategoryCode>
          </gmd:topicCategory>
          <gmd:extent>
            <gmd:EX_Extent>
              <gmd:geographicElement>
                <gmd:EX_GeographicBoundingBox>
                  <gmd:westBoundLongitude>
                    <gco:Decimal>3.3</gco:Decimal>
                  </gmd:westBoundLongitude>
                  <gmd:eastBoundLongitude>
                    <gco:Decimal>7.2</gco:Decimal>
                  </gmd:eastBoundLongitude>
                  <gmd:southBoundLatitude>
                    <gco:Decimal>50.7</gco:Decimal>
                  </gmd:southBoundLatitude>
                  <gmd:northBoundLatitude>
                    <gco:Decimal>53.2</gco:Decimal>
                  </gmd:northBoundLatitude>
                </gmd:EX_GeographicBoundingBox>
              </gmd:geographicElement>
              <gmd:temporalElement>
                <gmd:EX_TemporalExtent>
                  <gmd:extent>
                    <gml:TimePeriod gml:id="d7669e433a1052958">
                      <gml:beginPosition>1991-01-01</gml:beginPosition>
                      <gml:endPosition>2020-12-31</gml:endPosition>
                    </gml:TimePeriod>
                  </gmd:extent>
                </gmd:EX_TemporalExtent>
              </gmd:temporalElement>
            </gmd:EX_Extent>
          </gmd:extent>
        </gmd:MD_DataIdentification>
      </gmd:identificationInfo>
      <gmd:distributionInfo>
        <gmd:MD_Distribution>
          <gmd:distributionFormat>
            <gmd:MD_Format>
              <gmd:name>
                <gco:CharacterString>ASCII</gco:CharacterString>
              </gmd:name>
              <gmd:version>
                <gco:CharacterString>1</gco:CharacterString>
              </gmd:version>
              <gmd:specification>
                <gco:CharacterString>Comma Seperated Values (CSV)</gco:CharacterString>
              </gmd:specification>
            </gmd:MD_Format>
          </gmd:distributionFormat>
          <gmd:distributor>
            <gmd:MD_Distributor>
              <gmd:distributorContact>
                <gmd:CI_ResponsibleParty>
                  <gmd:organisationName xsi:type="gmd:PT_FreeText_PropertyType">
                    <gco:CharacterString>Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gco:CharacterString>
                    <gmd:PT_FreeText>
                      <gmd:textGroup>
                        <gmd:LocalisedCharacterString locale="#DUT">Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gmd:LocalisedCharacterString>
                      </gmd:textGroup>
                    </gmd:PT_FreeText>
                  </gmd:organisationName>
                  <gmd:contactInfo>
                    <gmd:CI_Contact>
                      <gmd:address>
                        <gmd:CI_Address>
                          <gmd:electronicMailAddress>
                            <gco:CharacterString>opendata@knmi.nl</gco:CharacterString>
                          </gmd:electronicMailAddress>
                        </gmd:CI_Address>
                      </gmd:address>
                    </gmd:CI_Contact>
                  </gmd:contactInfo>
                  <gmd:role>
                    <gmd:CI_RoleCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_RoleCode" codeListValue="pointOfContact" />
                  </gmd:role>
                </gmd:CI_ResponsibleParty>
              </gmd:distributorContact>
            </gmd:MD_Distributor>
          </gmd:distributor>
          <gmd:transferOptions>
            <gmd:MD_DigitalTransferOptions>
              <gmd:onLine>
                <gmd:CI_OnlineResource>
                  <gmd:linkage>
                    <gmd:URL>https://dataplatform.knmi.nl/catalog/datasets/index.html?x-dataset=climate_normals_1991_2020_climate_normals_by_station&amp;x-dataset-version=1</gmd:URL>
                  </gmd:linkage>
                  <gmd:protocol>
                    <gco:CharacterString>landingpage</gco:CharacterString>
                  </gmd:protocol>
                  <gmd:name>
                    <gco:CharacterString>KNMI Data Platform</gco:CharacterString>
                  </gmd:name>
                </gmd:CI_OnlineResource>
              </gmd:onLine>
            </gmd:MD_DigitalTransferOptions>
          </gmd:transferOptions>
        </gmd:MD_Distribution>
      </gmd:distributionInfo>
      <gmd:dataQualityInfo>
        <gmd:DQ_DataQuality>
          <gmd:scope>
            <gmd:DQ_Scope>
              <gmd:level>
                <gmd:MD_ScopeCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_ScopeCode" codeListValue="dataset" />
              </gmd:level>
            </gmd:DQ_Scope>
          </gmd:scope>
          <gmd:lineage>
            <gmd:LI_Lineage>
              <gmd:statement xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>The climate normals are 30 year averaged values, determined according to WMO regulations (https://library.wmo.int/doc_num.php?explnum_id=4166).</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Klimaatnormalen zijn 30-jaar gemiddelde waardes, bepaald volgens WMO voorschrift (https://library.wmo.int/doc_num.php?explnum_id=4166).</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:statement>
            </gmd:LI_Lineage>
          </gmd:lineage>
        </gmd:DQ_DataQuality>
      </gmd:dataQualityInfo>
    </gmd:MD_Metadata>
    <gmd:MD_Metadata xmlns:gmd="http://www.isotc211.org/2005/gmd" xmlns:gco="http://www.isotc211.org/2005/gco" xmlns:gml="http://www.opengis.net/gml" xmlns:gmx="http://schemas.opengis.net/iso/19139/20060504/gmx/gmx.xsd" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:geonet="http://www.fao.org/geonetwork" xsi:schemaLocation="http://www.isotc211.org/2005/gmd http://schemas.opengis.net/iso/19139/20060504/gmd/gmd.xsd">
      <gmd:fileIdentifier>
        <gco:CharacterString>7d5b3bdf-6f78-447c-aacd-04010a74ed07</gco:CharacterString>
      </gmd:fileIdentifier>
      <gmd:language>
        <gmd:LanguageCode codeList="http://www.loc.gov/standards/iso639-2/" codeListValue="eng" />
      </gmd:language>
      <gmd:characterSet>
        <gmd:MD_CharacterSetCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_CharacterSetCode" codeListValue="utf8" />
      </gmd:characterSet>
      <gmd:hierarchyLevel>
        <gmd:MD_ScopeCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_ScopeCode" codeListValue="dataset" />
      </gmd:hierarchyLevel>
      <gmd:contact>
        <gmd:CI_ResponsibleParty>
          <gmd:organisationName xsi:type="gmd:PT_FreeText_PropertyType">
            <gco:CharacterString>Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gco:CharacterString>
            <gmd:PT_FreeText>
              <gmd:textGroup>
                <gmd:LocalisedCharacterString locale="#DUT">Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gmd:LocalisedCharacterString>
              </gmd:textGroup>
            </gmd:PT_FreeText>
          </gmd:organisationName>
          <gmd:contactInfo>
            <gmd:CI_Contact>
              <gmd:address>
                <gmd:CI_Address>
                  <gmd:electronicMailAddress>
                    <gco:CharacterString>opendata@knmi.nl</gco:CharacterString>
                  </gmd:electronicMailAddress>
                </gmd:CI_Address>
              </gmd:address>
            </gmd:CI_Contact>
          </gmd:contactInfo>
          <gmd:role>
            <gmd:CI_RoleCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_RoleCode" codeListValue="pointOfContact" />
          </gmd:role>
        </gmd:CI_ResponsibleParty>
      </gmd:contact>
      <gmd:dateStamp>
        <gco:Date>2019-11-11</gco:Date>
      </gmd:dateStamp>
      <gmd:metadataStandardName>
        <gco:CharacterString>ISO 19115</gco:CharacterString>
      </gmd:metadataStandardName>
      <gmd:metadataStandardVersion>
        <gco:CharacterString>ISO 19115:2003 NL Kernset 1.3 KNMI 1.1</gco:CharacterString>
      </gmd:metadataStandardVersion>
      <gmd:locale>
        <gmd:PT_Locale id="DUT">
          <gmd:languageCode>
            <gmd:LanguageCode codeList="http://www.loc.gov/standards/iso639-2/" codeListValue="dut" />
          </gmd:languageCode>
          <gmd:characterEncoding>
            <gmd:MD_CharacterSetCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_CharacterSetCode" codeListValue="" />
          </gmd:characterEncoding>
        </gmd:PT_Locale>
      </gmd:locale>
      <gmd:referenceSystemInfo>
        <gmd:MD_ReferenceSystem>
          <gmd:referenceSystemIdentifier>
            <gmd:RS_Identifier>
              <gmd:code>
                <gco:CharacterString>http://www.opengis.net/def/crs/EPSG/0/4326</gco:CharacterString>
              </gmd:code>
            </gmd:RS_Identifier>
          </gmd:referenceSystemIdentifier>
        </gmd:MD_ReferenceSystem>
      </gmd:referenceSystemInfo>
      <gmd:identificationInfo>
        <gmd:MD_DataIdentification>
          <gmd:citation>
            <gmd:CI_Citation>
              <gmd:title xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Radar - TARA radar processed multi-beam Doppler data for Cabauw</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Radar - TARA radar multi-beam Doppler en polarimetrische metinge in Cabauw</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:title>
              <gmd:date>
                <gmd:CI_Date>
                  <gmd:date>
                    <gco:Date>2019-10-09</gco:Date>
                  </gmd:date>
                  <gmd:dateType>
                    <gmd:CI_DateTypeCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_DateTypeCode" codeListValue="publication" />
                  </gmd:dateType>
                </gmd:CI_Date>
              </gmd:date>
              <gmd:edition>
                <gco:CharacterString>1</gco:CharacterString>
              </gmd:edition>
              <gmd:identifier>
                <gmd:MD_Identifier>
                  <gmd:code>
                    <gco:CharacterString>urn:xkdc:ds:nl.knmi::cesar_tara_measurement_la1_t00/v1.0/</gco:CharacterString>
                  </gmd:code>
                </gmd:MD_Identifier>
              </gmd:identifier>
            </gmd:CI_Citation>
          </gmd:citation>
          <gmd:abstract xsi:type="gmd:PT_FreeText_PropertyType">
            <gco:CharacterString>This dataset contains S-band (central frequency of 3.298 GHz) radar measurements from the TU Delft transportable atmospheric radar TARA. It includes profiles of the equivalent reflectivity factor. Further, the horizontal wind (speed and direction) and the vertical Doppler velocity profiles are supplied. TARA is placed at the remote sensing site at Cabauw. It is a very sensitive profiling radar providing time-height indicators.</gco:CharacterString>
            <gmd:PT_FreeText>
              <gmd:textGroup>
                <gmd:LocalisedCharacterString locale="#DUT">Deze dataset bevat S-band (3,298 GHz) radar metingen met de TARA, TU-Delft Transportable Atmospheric RAdar. De dataset bevat profielen van de equivalente reflectiviteits factor. En verder de horizontale windsnelheid (grootte en richting) en de vertikale Doppler snelheidsprofielen. TARA is geplaatst op het Remote Sensing terrein in Cabauw. Het is een zeer gevoelige radar die tijd-hoogte indicatoren levert.</gmd:LocalisedCharacterString>
              </gmd:textGroup>
            </gmd:PT_FreeText>
          </gmd:abstract>
          <gmd:status>
            <gmd:MD_ProgressCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_ProgressCode" codeListValue="onGoing" />
          </gmd:status>
          <gmd:pointOfContact>
            <gmd:CI_ResponsibleParty>
              <gmd:organisationName xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:organisationName>
              <gmd:contactInfo>
                <gmd:CI_Contact>
                  <gmd:address>
                    <gmd:CI_Address>
                      <gmd:electronicMailAddress>
                        <gco:CharacterString>opendata@knmi.nl</gco:CharacterString>
                      </gmd:electronicMailAddress>
                    </gmd:CI_Address>
                  </gmd:address>
                </gmd:CI_Contact>
              </gmd:contactInfo>
              <gmd:role>
                <gmd:CI_RoleCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_RoleCode" codeListValue="pointOfContact" />
              </gmd:role>
            </gmd:CI_ResponsibleParty>
          </gmd:pointOfContact>
          <gmd:resourceMaintenance>
            <gmd:MD_MaintenanceInformation>
              <gmd:maintenanceAndUpdateFrequency>
                <gmd:MD_MaintenanceFrequencyCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_MaintenanceFrequencyCode" codeListValue="asNeeded" />
              </gmd:maintenanceAndUpdateFrequency>
            </gmd:MD_MaintenanceInformation>
          </gmd:resourceMaintenance>
          <gmd:descriptiveKeywords>
            <gmd:MD_Keywords>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Polarimetric radar</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Polarimetrische radar</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>CESAR</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">CESAR</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Cabauw</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Cabauw</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Doppler</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Doppler</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Windspeed</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Windsnelheid</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:thesaurusName>
                <gmd:CI_Citation>
                  <gmd:title>
                    <gco:CharacterString>DG Discovery Properties Vocabulary 1.0</gco:CharacterString>
                  </gmd:title>
                  <gmd:date>
                    <gmd:CI_Date>
                      <gmd:date>
                        <gco:Date>2013-01-01</gco:Date>
                      </gmd:date>
                      <gmd:dateType>
                        <gmd:CI_DateTypeCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_DateTypeCode" codeListValue="publication" />
                      </gmd:dateType>
                    </gmd:CI_Date>
                  </gmd:date>
                </gmd:CI_Citation>
              </gmd:thesaurusName>
            </gmd:MD_Keywords>
          </gmd:descriptiveKeywords>
          <gmd:descriptiveKeywords>
            <gmd:MD_Keywords>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Ruisdael</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Ruisdael</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
            </gmd:MD_Keywords>
          </gmd:descriptiveKeywords>
          <gmd:resourceConstraints>
            <gmd:MD_Constraints>
              <gmd:useLimitation xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>No use limitations</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Geen gebruiksbeperkingen</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:useLimitation>
            </gmd:MD_Constraints>
          </gmd:resourceConstraints>
          <gmd:resourceConstraints>
            <gmd:MD_LegalConstraints>
              <gmd:accessConstraints>
                <gmd:MD_RestrictionCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_RestrictionCode" codeListValue="otherRestrictions" />
              </gmd:accessConstraints>
              <gmd:otherConstraints>
                <gco:CharacterString>https://creativecommons.org/publicdomain/zero/1.0/deed.nl</gco:CharacterString>
              </gmd:otherConstraints>
            </gmd:MD_LegalConstraints>
          </gmd:resourceConstraints>
          <gmd:resourceConstraints>
            <gmd:MD_SecurityConstraints>
              <gmd:classification>
                <gmd:MD_ClassificationCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_ClassificationCode" codeListValue="unclassified" />
              </gmd:classification>
            </gmd:MD_SecurityConstraints>
          </gmd:resourceConstraints>
          <gmd:spatialResolution>
            <gmd:MD_Resolution>
              <gmd:equivalentScale>
                <gmd:MD_RepresentativeFraction>
                  <gmd:denominator>
                    <gco:Integer>1</gco:Integer>
                  </gmd:denominator>
                </gmd:MD_RepresentativeFraction>
              </gmd:equivalentScale>
            </gmd:MD_Resolution>
          </gmd:spatialResolution>
          <gmd:language>
            <gmd:LanguageCode codeList="http://www.loc.gov/standards/iso639-2/" codeListValue="eng" />
          </gmd:language>
          <gmd:characterSet>
            <gmd:MD_CharacterSetCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_CharacterSetCode" codeListValue="utf8" />
          </gmd:characterSet>
          <gmd:topicCategory>
            <gmd:MD_TopicCategoryCode>climatologyMeteorologyAtmosphere</gmd:MD_TopicCategoryCode>
          </gmd:topicCategory>
          <gmd:extent>
            <gmd:EX_Extent>
              <gmd:geographicElement>
                <gmd:EX_GeographicBoundingBox>
                  <gmd:westBoundLongitude>
                    <gco:Decimal>4.93</gco:Decimal>
                  </gmd:westBoundLongitude>
                  <gmd:eastBoundLongitude>
                    <gco:Decimal>4.93</gco:Decimal>
                  </gmd:eastBoundLongitude>
                  <gmd:southBoundLatitude>
                    <gco:Decimal>51.93</gco:Decimal>
                  </gmd:southBoundLatitude>
                  <gmd:northBoundLatitude>
                    <gco:Decimal>51.93</gco:Decimal>
                  </gmd:northBoundLatitude>
                </gmd:EX_GeographicBoundingBox>
              </gmd:geographicElement>
              <gmd:temporalElement>
                <gmd:EX_TemporalExtent>
                  <gmd:extent>
                    <gml:TimePeriod gml:id="d7669e433a1052958">
                      <gml:beginPosition>2012-05-02</gml:beginPosition>
                      <gml:endPosition>2019-05-27</gml:endPosition>
                    </gml:TimePeriod>
                  </gmd:extent>
                </gmd:EX_TemporalExtent>
              </gmd:temporalElement>
            </gmd:EX_Extent>
          </gmd:extent>
          <gmd:supplementalInformation xsi:type="gmd:PT_FreeText_PropertyType">
            <gco:CharacterString>This dataset was orginally distributed via the CESAR Database System under the full dataset name: Metadata and a Dataset Description Document (DDD) can be viewed or downloaded via this URL: http://www.cesar-database.nl/ShowDatasetMetadataInfo.do?datasetMetadataID=1162</gco:CharacterString>
            <gmd:PT_FreeText>
              <gmd:textGroup>
                <gmd:LocalisedCharacterString locale="#DUT">Deze dataset was oorspronkelijk gepubliceerd via het CESAR Database Sytem onder de naam: Metadata en een Dataset Description Document (DDD) zijn te downloaden via deze URL: http://www.cesar-database.nl/ShowDatasetMetadataInfo.do?datasetMetadataID=1162</gmd:LocalisedCharacterString>
              </gmd:textGroup>
            </gmd:PT_FreeText>
          </gmd:supplementalInformation>
        </gmd:MD_DataIdentification>
      </gmd:identificationInfo>
      <gmd:distributionInfo>
        <gmd:MD_Distribution>
          <gmd:distributionFormat>
            <gmd:MD_Format>
              <gmd:name>
                <gco:CharacterString>NetCDF</gco:CharacterString>
              </gmd:name>
              <gmd:version>
                <gco:CharacterString>4</gco:CharacterString>
              </gmd:version>
              <gmd:specification>
                <gco:CharacterString>CF</gco:CharacterString>
              </gmd:specification>
            </gmd:MD_Format>
          </gmd:distributionFormat>
          <gmd:distributor>
            <gmd:MD_Distributor>
              <gmd:distributorContact>
                <gmd:CI_ResponsibleParty>
                  <gmd:organisationName xsi:type="gmd:PT_FreeText_PropertyType">
                    <gco:CharacterString>Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gco:CharacterString>
                    <gmd:PT_FreeText>
                      <gmd:textGroup>
                        <gmd:LocalisedCharacterString locale="#DUT">Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gmd:LocalisedCharacterString>
                      </gmd:textGroup>
                    </gmd:PT_FreeText>
                  </gmd:organisationName>
                  <gmd:contactInfo>
                    <gmd:CI_Contact>
                      <gmd:address>
                        <gmd:CI_Address>
                          <gmd:electronicMailAddress>
                            <gco:CharacterString>opendata@knmi.nl</gco:CharacterString>
                          </gmd:electronicMailAddress>
                        </gmd:CI_Address>
                      </gmd:address>
                    </gmd:CI_Contact>
                  </gmd:contactInfo>
                  <gmd:role>
                    <gmd:CI_RoleCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_RoleCode" codeListValue="pointOfContact" />
                  </gmd:role>
                </gmd:CI_ResponsibleParty>
              </gmd:distributorContact>
            </gmd:MD_Distributor>
          </gmd:distributor>
          <gmd:transferOptions>
            <gmd:MD_DigitalTransferOptions>
              <gmd:onLine>
                <gmd:CI_OnlineResource>
                  <gmd:linkage>
                    <gmd:URL>https://dataplatform.knmi.nl/catalog/datasets/index.html?x-dataset=cesar_tara_measurement_la1_t00&amp;x-dataset-version=v1.0</gmd:URL>
                  </gmd:linkage>
                  <gmd:protocol>
                    <gco:CharacterString>landingpage</gco:CharacterString>
                  </gmd:protocol>
                  <gmd:name>
                    <gco:CharacterString>KNMI Data Platform</gco:CharacterString>
                  </gmd:name>
                </gmd:CI_OnlineResource>
              </gmd:onLine>
            </gmd:MD_DigitalTransferOptions>
          </gmd:transferOptions>
        </gmd:MD_Distribution>
      </gmd:distributionInfo>
      <gmd:dataQualityInfo>
        <gmd:DQ_DataQuality>
          <gmd:scope>
            <gmd:DQ_Scope>
              <gmd:level>
                <gmd:MD_ScopeCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_ScopeCode" codeListValue="dataset" />
              </gmd:level>
            </gmd:DQ_Scope>
          </gmd:scope>
          <gmd:lineage>
            <gmd:LI_Lineage>
              <gmd:statement xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Processed weather radar measurements at linear horizontal / vertical polarisation basis of TARA. The observables included are reflectivity, Doppler velocity and Doppler spectrum width for three different directions; differential reflectivity, linear depolarisation ratio, horizontal wind speed and direction, and vertical Doppler velocity.</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Bewerkte TARA weerradar metingen zowel lineair horizontaal als vertikaal gepolariseerd. De metingen bevatten reflectiviteit, Doppler snelheid en Doppler spectrale breedte voor drie richtingen; differentiele refelctiviteit, lineaire depolarisatie ratio, horizontale windsnelheid en - richting, en vertikale Doppler snelheid.</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:statement>
            </gmd:LI_Lineage>
          </gmd:lineage>
        </gmd:DQ_DataQuality>
      </gmd:dataQualityInfo>
    </gmd:MD_Metadata>
    <gmd:MD_Metadata xmlns:gmd="http://www.isotc211.org/2005/gmd" xmlns:gco="http://www.isotc211.org/2005/gco" xmlns:gml="http://www.opengis.net/gml" xmlns:gmx="http://schemas.opengis.net/iso/19139/20060504/gmx/gmx.xsd" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:geonet="http://www.fao.org/geonetwork" xsi:schemaLocation="http://www.isotc211.org/2005/gmd http://schemas.opengis.net/iso/19139/20060504/gmd/gmd.xsd">
      <gmd:fileIdentifier>
        <gco:CharacterString>191e5b56-eed4-4538-9277-000d3d2a9d41</gco:CharacterString>
      </gmd:fileIdentifier>
      <gmd:language>
        <gmd:LanguageCode codeList="http://www.loc.gov/standards/iso639-2/" codeListValue="eng" />
      </gmd:language>
      <gmd:characterSet>
        <gmd:MD_CharacterSetCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_CharacterSetCode" codeListValue="utf8" />
      </gmd:characterSet>
      <gmd:hierarchyLevel>
        <gmd:MD_ScopeCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_ScopeCode" codeListValue="dataset" />
      </gmd:hierarchyLevel>
      <gmd:contact>
        <gmd:CI_ResponsibleParty>
          <gmd:organisationName xsi:type="gmd:PT_FreeText_PropertyType">
            <gco:CharacterString>Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gco:CharacterString>
            <gmd:PT_FreeText>
              <gmd:textGroup>
                <gmd:LocalisedCharacterString locale="#DUT">Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gmd:LocalisedCharacterString>
              </gmd:textGroup>
            </gmd:PT_FreeText>
          </gmd:organisationName>
          <gmd:contactInfo>
            <gmd:CI_Contact>
              <gmd:address>
                <gmd:CI_Address>
                  <gmd:electronicMailAddress>
                    <gco:CharacterString>opendata@knmi.nl</gco:CharacterString>
                  </gmd:electronicMailAddress>
                </gmd:CI_Address>
              </gmd:address>
            </gmd:CI_Contact>
          </gmd:contactInfo>
          <gmd:role>
            <gmd:CI_RoleCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_RoleCode" codeListValue="pointOfContact" />
          </gmd:role>
        </gmd:CI_ResponsibleParty>
      </gmd:contact>
      <gmd:dateStamp>
        <gco:Date>2019-10-29</gco:Date>
      </gmd:dateStamp>
      <gmd:metadataStandardName>
        <gco:CharacterString>ISO 19115</gco:CharacterString>
      </gmd:metadataStandardName>
      <gmd:metadataStandardVersion>
        <gco:CharacterString>ISO 19115:2003 NL Kernset 1.3 KNMI 1.1</gco:CharacterString>
      </gmd:metadataStandardVersion>
      <gmd:locale>
        <gmd:PT_Locale id="DUT">
          <gmd:languageCode>
            <gmd:LanguageCode codeList="http://www.loc.gov/standards/iso639-2/" codeListValue="dut" />
          </gmd:languageCode>
          <gmd:characterEncoding>
            <gmd:MD_CharacterSetCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_CharacterSetCode" codeListValue="" />
          </gmd:characterEncoding>
        </gmd:PT_Locale>
      </gmd:locale>
      <gmd:referenceSystemInfo>
        <gmd:MD_ReferenceSystem>
          <gmd:referenceSystemIdentifier>
            <gmd:RS_Identifier>
              <gmd:code>
                <gco:CharacterString>http://www.opengis.net/def/crs/EPSG/0/4326</gco:CharacterString>
              </gmd:code>
            </gmd:RS_Identifier>
          </gmd:referenceSystemIdentifier>
        </gmd:MD_ReferenceSystem>
      </gmd:referenceSystemInfo>
      <gmd:identificationInfo>
        <gmd:MD_DataIdentification>
          <gmd:citation>
            <gmd:CI_Citation>
              <gmd:title xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Weather model - HARMONIE-AROME Cy40 forecasts Europe, all model levels, selected parameters</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Weermodel - HARMONIE-AROME Cy40 verwachtingen Europa, alle modellevels, geselecteerde parameters</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:title>
              <gmd:date>
                <gmd:CI_Date>
                  <gmd:date>
                    <gco:Date>2018-12-10</gco:Date>
                  </gmd:date>
                  <gmd:dateType>
                    <gmd:CI_DateTypeCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_DateTypeCode" codeListValue="publication" />
                  </gmd:dateType>
                </gmd:CI_Date>
              </gmd:date>
              <gmd:edition>
                <gco:CharacterString>3</gco:CharacterString>
              </gmd:edition>
              <gmd:identifier>
                <gmd:MD_Identifier>
                  <gmd:code>
                    <gco:CharacterString>urn:xkdc:ds:nl.knmi::harmonie_arome_cy40_p5/0.2/</gco:CharacterString>
                  </gmd:code>
                </gmd:MD_Identifier>
              </gmd:identifier>
            </gmd:CI_Citation>
          </gmd:citation>
          <gmd:abstract xsi:type="gmd:PT_FreeText_PropertyType">
            <gco:CharacterString>Current operational HARMONIE information in gridded form (rotated lat-lon) of selected parameters at all model levels from the KNMI HARMONIE-AROME Cy40 model. The output frequency is 1 hour. For more detail look at https://www.knmidata.nl/data-services/knmi-producten-overzicht/atmosfeer-modeldata/data-product-3</gco:CharacterString>
            <gmd:PT_FreeText>
              <gmd:textGroup>
                <gmd:LocalisedCharacterString locale="#DUT">Actuele operationele roosterpunt informatie (geroteerde lat-lon) van geselecteerde parameters uit het HARMONIE-AROME Cy40 model van het KNMI. Het betreft parameters op alle modellevels een uurlijkse uitvoerfrequentie. Voor meer details zie: https://www.knmidata.nl/data-services/knmi-producten-overzicht/atmosfeer-modeldata/data-product-3</gmd:LocalisedCharacterString>
              </gmd:textGroup>
            </gmd:PT_FreeText>
          </gmd:abstract>
          <gmd:status>
            <gmd:MD_ProgressCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_ProgressCode" codeListValue="onGoing" />
          </gmd:status>
          <gmd:pointOfContact>
            <gmd:CI_ResponsibleParty>
              <gmd:organisationName xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:organisationName>
              <gmd:contactInfo>
                <gmd:CI_Contact>
                  <gmd:address>
                    <gmd:CI_Address>
                      <gmd:electronicMailAddress>
                        <gco:CharacterString>opendata@knmi.nl</gco:CharacterString>
                      </gmd:electronicMailAddress>
                    </gmd:CI_Address>
                  </gmd:address>
                </gmd:CI_Contact>
              </gmd:contactInfo>
              <gmd:role>
                <gmd:CI_RoleCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_RoleCode" codeListValue="pointOfContact" />
              </gmd:role>
            </gmd:CI_ResponsibleParty>
          </gmd:pointOfContact>
          <gmd:resourceMaintenance>
            <gmd:MD_MaintenanceInformation>
              <gmd:maintenanceAndUpdateFrequency>
                <gmd:MD_MaintenanceFrequencyCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_MaintenanceFrequencyCode" codeListValue="continual" />
              </gmd:maintenanceAndUpdateFrequency>
            </gmd:MD_MaintenanceInformation>
          </gmd:resourceMaintenance>
          <gmd:descriptiveKeywords>
            <gmd:MD_Keywords>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Weather forecast</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Weersvoorspelling</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>All model levels</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Alle model levels</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Profiles</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Profielen</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>HARMONIE</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">HARMONIE</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Europe</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Europa</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:thesaurusName>
                <gmd:CI_Citation>
                  <gmd:title>
                    <gco:CharacterString>DG Discovery Properties Vocabulary 1.0</gco:CharacterString>
                  </gmd:title>
                  <gmd:date>
                    <gmd:CI_Date>
                      <gmd:date>
                        <gco:Date>2013-01-01</gco:Date>
                      </gmd:date>
                      <gmd:dateType>
                        <gmd:CI_DateTypeCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_DateTypeCode" codeListValue="publication" />
                      </gmd:dateType>
                    </gmd:CI_Date>
                  </gmd:date>
                </gmd:CI_Citation>
              </gmd:thesaurusName>
            </gmd:MD_Keywords>
          </gmd:descriptiveKeywords>
          <gmd:descriptiveKeywords>
            <gmd:MD_Keywords>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Dynamic</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Dynamisch</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Open data</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Open data</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
            </gmd:MD_Keywords>
          </gmd:descriptiveKeywords>
          <gmd:resourceConstraints>
            <gmd:MD_Constraints>
              <gmd:useLimitation xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>No use limitations</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Geen gebruiksbeperkingen</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:useLimitation>
            </gmd:MD_Constraints>
          </gmd:resourceConstraints>
          <gmd:resourceConstraints>
            <gmd:MD_LegalConstraints>
              <gmd:accessConstraints>
                <gmd:MD_RestrictionCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_RestrictionCode" codeListValue="otherRestrictions" />
              </gmd:accessConstraints>
              <gmd:otherConstraints>
                <gco:CharacterString>https://creativecommons.org/publicdomain/zero/1.0/deed.nl</gco:CharacterString>
              </gmd:otherConstraints>
            </gmd:MD_LegalConstraints>
          </gmd:resourceConstraints>
          <gmd:resourceConstraints>
            <gmd:MD_SecurityConstraints>
              <gmd:classification>
                <gmd:MD_ClassificationCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_ClassificationCode" codeListValue="unclassified" />
              </gmd:classification>
            </gmd:MD_SecurityConstraints>
          </gmd:resourceConstraints>
          <gmd:spatialRepresentationType>
            <gmd:MD_SpatialRepresentationTypeCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_SpatialRepresentationTypeCode" codeListValue="grid" />
          </gmd:spatialRepresentationType>
          <gmd:spatialResolution>
            <gmd:MD_Resolution>
              <gmd:distance>
                <gco:Distance uom="meters">5500</gco:Distance>
              </gmd:distance>
            </gmd:MD_Resolution>
          </gmd:spatialResolution>
          <gmd:language>
            <gmd:LanguageCode codeList="http://www.loc.gov/standards/iso639-2/" codeListValue="eng" />
          </gmd:language>
          <gmd:characterSet>
            <gmd:MD_CharacterSetCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_CharacterSetCode" codeListValue="utf8" />
          </gmd:characterSet>
          <gmd:topicCategory>
            <gmd:MD_TopicCategoryCode>climatologyMeteorologyAtmosphere</gmd:MD_TopicCategoryCode>
          </gmd:topicCategory>
          <gmd:extent>
            <gmd:EX_Extent>
              <gmd:geographicElement>
                <gmd:EX_GeographicBoundingBox>
                  <gmd:westBoundLongitude>
                    <gco:Decimal>-8.0</gco:Decimal>
                  </gmd:westBoundLongitude>
                  <gmd:eastBoundLongitude>
                    <gco:Decimal>16.0</gco:Decimal>
                  </gmd:eastBoundLongitude>
                  <gmd:southBoundLatitude>
                    <gco:Decimal>44.0</gco:Decimal>
                  </gmd:southBoundLatitude>
                  <gmd:northBoundLatitude>
                    <gco:Decimal>59.0</gco:Decimal>
                  </gmd:northBoundLatitude>
                </gmd:EX_GeographicBoundingBox>
              </gmd:geographicElement>
              <gmd:temporalElement>
                <gmd:EX_TemporalExtent>
                  <gmd:extent>
                    <gml:TimePeriod gml:id="d7669e433a1052958">
                      <gml:beginPosition>2018-12-10</gml:beginPosition>
                      <gml:endPosition>9999-12-31</gml:endPosition>
                    </gml:TimePeriod>
                  </gmd:extent>
                </gmd:EX_TemporalExtent>
              </gmd:temporalElement>
              <gmd:verticalElement>
                <gmd:EX_VerticalExtent>
                  <gmd:minimumValue>
                    <gco:Real>0.0</gco:Real>
                  </gmd:minimumValue>
                  <gmd:maximumValue>
                    <gco:Real>300.0</gco:Real>
                  </gmd:maximumValue>
                  <gmd:verticalCRS />
                </gmd:EX_VerticalExtent>
              </gmd:verticalElement>
            </gmd:EX_Extent>
          </gmd:extent>
        </gmd:MD_DataIdentification>
      </gmd:identificationInfo>
      <gmd:distributionInfo>
        <gmd:MD_Distribution>
          <gmd:distributionFormat>
            <gmd:MD_Format>
              <gmd:name>
                <gco:CharacterString>GRIB</gco:CharacterString>
              </gmd:name>
              <gmd:version>
                <gco:CharacterString>1</gco:CharacterString>
              </gmd:version>
              <gmd:specification>
                <gco:CharacterString />
              </gmd:specification>
            </gmd:MD_Format>
          </gmd:distributionFormat>
          <gmd:distributor>
            <gmd:MD_Distributor>
              <gmd:distributorContact>
                <gmd:CI_ResponsibleParty>
                  <gmd:organisationName xsi:type="gmd:PT_FreeText_PropertyType">
                    <gco:CharacterString>Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gco:CharacterString>
                    <gmd:PT_FreeText>
                      <gmd:textGroup>
                        <gmd:LocalisedCharacterString locale="#DUT">Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gmd:LocalisedCharacterString>
                      </gmd:textGroup>
                    </gmd:PT_FreeText>
                  </gmd:organisationName>
                  <gmd:contactInfo>
                    <gmd:CI_Contact>
                      <gmd:address>
                        <gmd:CI_Address>
                          <gmd:electronicMailAddress>
                            <gco:CharacterString>opendata@knmi.nl</gco:CharacterString>
                          </gmd:electronicMailAddress>
                        </gmd:CI_Address>
                      </gmd:address>
                    </gmd:CI_Contact>
                  </gmd:contactInfo>
                  <gmd:role>
                    <gmd:CI_RoleCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_RoleCode" codeListValue="pointOfContact" />
                  </gmd:role>
                </gmd:CI_ResponsibleParty>
              </gmd:distributorContact>
            </gmd:MD_Distributor>
          </gmd:distributor>
          <gmd:transferOptions>
            <gmd:MD_DigitalTransferOptions>
              <gmd:transferSize>
                <gco:Real>800.0</gco:Real>
              </gmd:transferSize>
              <gmd:onLine>
                <gmd:CI_OnlineResource>
                  <gmd:linkage>
                    <gmd:URL>https://dataplatform.knmi.nl/catalog/datasets/index.html?x-dataset=harmonie_arome_cy40_p5&amp;x-dataset-version=0.2</gmd:URL>
                  </gmd:linkage>
                  <gmd:protocol>
                    <gco:CharacterString>landingpage</gco:CharacterString>
                  </gmd:protocol>
                  <gmd:name>
                    <gco:CharacterString>KNMI Data Platform</gco:CharacterString>
                  </gmd:name>
                </gmd:CI_OnlineResource>
              </gmd:onLine>
            </gmd:MD_DigitalTransferOptions>
          </gmd:transferOptions>
        </gmd:MD_Distribution>
      </gmd:distributionInfo>
      <gmd:dataQualityInfo>
        <gmd:DQ_DataQuality>
          <gmd:scope>
            <gmd:DQ_Scope>
              <gmd:level>
                <gmd:MD_ScopeCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_ScopeCode" codeListValue="dataset" />
              </gmd:level>
            </gmd:DQ_Scope>
          </gmd:scope>
          <gmd:lineage>
            <gmd:LI_Lineage>
              <gmd:statement xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Bi-linear interpolation from lambert to rotated lat-lon</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Bi-lineaire interpolatie van lambert velden naar geroteerde lat-lon</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:statement>
            </gmd:LI_Lineage>
          </gmd:lineage>
        </gmd:DQ_DataQuality>
      </gmd:dataQualityInfo>
    </gmd:MD_Metadata>
    <gmd:MD_Metadata xmlns:gmd="http://www.isotc211.org/2005/gmd" xmlns:gco="http://www.isotc211.org/2005/gco" xmlns:gml="http://www.opengis.net/gml" xmlns:gmx="http://schemas.opengis.net/iso/19139/20060504/gmx/gmx.xsd" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:geonet="http://www.fao.org/geonetwork" xsi:schemaLocation="http://www.isotc211.org/2005/gmd http://schemas.opengis.net/iso/19139/20060504/gmd/gmd.xsd">
      <gmd:fileIdentifier>
        <gco:CharacterString>267ca78c-f11b-4cb8-b83e-19f7ac54c89f</gco:CharacterString>
      </gmd:fileIdentifier>
      <gmd:language>
        <gmd:LanguageCode codeList="http://www.loc.gov/standards/iso639-2/" codeListValue="eng" />
      </gmd:language>
      <gmd:characterSet>
        <gmd:MD_CharacterSetCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_CharacterSetCode" codeListValue="utf8" />
      </gmd:characterSet>
      <gmd:hierarchyLevel>
        <gmd:MD_ScopeCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_ScopeCode" codeListValue="dataset" />
      </gmd:hierarchyLevel>
      <gmd:contact>
        <gmd:CI_ResponsibleParty>
          <gmd:organisationName xsi:type="gmd:PT_FreeText_PropertyType">
            <gco:CharacterString>Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gco:CharacterString>
            <gmd:PT_FreeText>
              <gmd:textGroup>
                <gmd:LocalisedCharacterString locale="#DUT">Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gmd:LocalisedCharacterString>
              </gmd:textGroup>
            </gmd:PT_FreeText>
          </gmd:organisationName>
          <gmd:contactInfo>
            <gmd:CI_Contact>
              <gmd:address>
                <gmd:CI_Address>
                  <gmd:electronicMailAddress>
                    <gco:CharacterString>opendata@knmi.nl</gco:CharacterString>
                  </gmd:electronicMailAddress>
                </gmd:CI_Address>
              </gmd:address>
            </gmd:CI_Contact>
          </gmd:contactInfo>
          <gmd:role>
            <gmd:CI_RoleCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_RoleCode" codeListValue="pointOfContact" />
          </gmd:role>
        </gmd:CI_ResponsibleParty>
      </gmd:contact>
      <gmd:dateStamp>
        <gco:Date>2017-04-11</gco:Date>
      </gmd:dateStamp>
      <gmd:metadataStandardName>
        <gco:CharacterString>ISO 19115</gco:CharacterString>
      </gmd:metadataStandardName>
      <gmd:metadataStandardVersion>
        <gco:CharacterString>ISO 19115:2003 NL Kernset 1.3 KNMI 1.1</gco:CharacterString>
      </gmd:metadataStandardVersion>
      <gmd:locale>
        <gmd:PT_Locale id="DUT">
          <gmd:languageCode>
            <gmd:LanguageCode codeList="http://www.loc.gov/standards/iso639-2/" codeListValue="dut" />
          </gmd:languageCode>
          <gmd:characterEncoding>
            <gmd:MD_CharacterSetCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_CharacterSetCode" codeListValue="" />
          </gmd:characterEncoding>
        </gmd:PT_Locale>
      </gmd:locale>
      <gmd:referenceSystemInfo>
        <gmd:MD_ReferenceSystem>
          <gmd:referenceSystemIdentifier>
            <gmd:RS_Identifier>
              <gmd:code>
                <gco:CharacterString>http://www.opengis.net/def/crs/EPSG/0/4326</gco:CharacterString>
              </gmd:code>
            </gmd:RS_Identifier>
          </gmd:referenceSystemIdentifier>
        </gmd:MD_ReferenceSystem>
      </gmd:referenceSystemInfo>
      <gmd:identificationInfo>
        <gmd:MD_DataIdentification>
          <gmd:citation>
            <gmd:CI_Citation>
              <gmd:title xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Temperature - transformed minute daily temperature, KNMI14, Netherlands</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Temperatuur - getransformeerde minuut dagtemperatuur, KNMI14, Nederland</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:title>
              <gmd:date>
                <gmd:CI_Date>
                  <gmd:date>
                    <gco:Date>2015-11-30</gco:Date>
                  </gmd:date>
                  <gmd:dateType>
                    <gmd:CI_DateTypeCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_DateTypeCode" codeListValue="publication" />
                  </gmd:dateType>
                </gmd:CI_Date>
              </gmd:date>
              <gmd:edition>
                <gco:CharacterString>4</gco:CharacterString>
              </gmd:edition>
              <gmd:identifier>
                <gmd:MD_Identifier>
                  <gmd:code>
                    <gco:CharacterString>urn:xkdc:ds:nl.knmi::knmi14_minimum_temperature/3.2/</gco:CharacterString>
                  </gmd:code>
                </gmd:MD_Identifier>
              </gmd:identifier>
            </gmd:CI_Citation>
          </gmd:citation>
          <gmd:abstract xsi:type="gmd:PT_FreeText_PropertyType">
            <gco:CharacterString>Transformed daily time series for minimum temperature for the KNMI'14 scenarios for around 2030, 2050 and 2085 for 14 stations in the Netherlands (revised 2015). Can also be downloaded through http://www.klimaatscenarios.nl/toekomstig_weer/transformatie/index.html</gco:CharacterString>
            <gmd:PT_FreeText>
              <gmd:textGroup>
                <gmd:LocalisedCharacterString locale="#DUT">Getransformeerde dagtijdreeksen voor minimum temperatuur voor de KNMI'14 scenario's voor rond 2030, 2050 en 2085 voor 14 stations in Nederland (herzien 2015). Ook te downloaden via http://www.klimaatscenarios.nl/toekomstig_weer/transformatie/index.html</gmd:LocalisedCharacterString>
              </gmd:textGroup>
            </gmd:PT_FreeText>
          </gmd:abstract>
          <gmd:status>
            <gmd:MD_ProgressCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_ProgressCode" codeListValue="completed" />
          </gmd:status>
          <gmd:pointOfContact>
            <gmd:CI_ResponsibleParty>
              <gmd:organisationName xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:organisationName>
              <gmd:contactInfo>
                <gmd:CI_Contact>
                  <gmd:address>
                    <gmd:CI_Address>
                      <gmd:electronicMailAddress>
                        <gco:CharacterString>opendata@knmi.nl</gco:CharacterString>
                      </gmd:electronicMailAddress>
                    </gmd:CI_Address>
                  </gmd:address>
                </gmd:CI_Contact>
              </gmd:contactInfo>
              <gmd:role>
                <gmd:CI_RoleCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_RoleCode" codeListValue="pointOfContact" />
              </gmd:role>
            </gmd:CI_ResponsibleParty>
          </gmd:pointOfContact>
          <gmd:resourceMaintenance>
            <gmd:MD_MaintenanceInformation>
              <gmd:maintenanceAndUpdateFrequency>
                <gmd:MD_MaintenanceFrequencyCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_MaintenanceFrequencyCode" codeListValue="asNeeded" />
              </gmd:maintenanceAndUpdateFrequency>
            </gmd:MD_MaintenanceInformation>
          </gmd:resourceMaintenance>
          <gmd:descriptiveKeywords>
            <gmd:MD_Keywords>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Minimum temperature</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Minimum temperatuur</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Climate scenarios</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Klimaatscenario's</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>KNMI'14</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">KNMI'14</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Time series</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Tijdreeksen</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:thesaurusName>
                <gmd:CI_Citation>
                  <gmd:title>
                    <gco:CharacterString>DG Discovery Properties Vocabulary 1.0</gco:CharacterString>
                  </gmd:title>
                  <gmd:date>
                    <gmd:CI_Date>
                      <gmd:date>
                        <gco:Date>2013-01-01</gco:Date>
                      </gmd:date>
                      <gmd:dateType>
                        <gmd:CI_DateTypeCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_DateTypeCode" codeListValue="publication" />
                      </gmd:dateType>
                    </gmd:CI_Date>
                  </gmd:date>
                </gmd:CI_Citation>
              </gmd:thesaurusName>
            </gmd:MD_Keywords>
          </gmd:descriptiveKeywords>
          <gmd:descriptiveKeywords>
            <gmd:MD_Keywords>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Open data</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Open data</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
            </gmd:MD_Keywords>
          </gmd:descriptiveKeywords>
          <gmd:resourceConstraints>
            <gmd:MD_Constraints>
              <gmd:useLimitation xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>No use limitations</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Geen gebruiksbeperkingen</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:useLimitation>
            </gmd:MD_Constraints>
          </gmd:resourceConstraints>
          <gmd:resourceConstraints>
            <gmd:MD_LegalConstraints>
              <gmd:accessConstraints>
                <gmd:MD_RestrictionCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_RestrictionCode" codeListValue="otherRestrictions" />
              </gmd:accessConstraints>
              <gmd:otherConstraints>
                <gco:CharacterString>https://creativecommons.org/publicdomain/zero/1.0/deed.nl</gco:CharacterString>
              </gmd:otherConstraints>
            </gmd:MD_LegalConstraints>
          </gmd:resourceConstraints>
          <gmd:resourceConstraints>
            <gmd:MD_SecurityConstraints>
              <gmd:classification>
                <gmd:MD_ClassificationCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_ClassificationCode" codeListValue="unclassified" />
              </gmd:classification>
            </gmd:MD_SecurityConstraints>
          </gmd:resourceConstraints>
          <gmd:spatialRepresentationType>
            <gmd:MD_SpatialRepresentationTypeCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_SpatialRepresentationTypeCode" codeListValue="textTable" />
          </gmd:spatialRepresentationType>
          <gmd:spatialResolution>
            <gmd:MD_Resolution>
              <gmd:equivalentScale>
                <gmd:MD_RepresentativeFraction>
                  <gmd:denominator>
                    <gco:Integer>1</gco:Integer>
                  </gmd:denominator>
                </gmd:MD_RepresentativeFraction>
              </gmd:equivalentScale>
            </gmd:MD_Resolution>
          </gmd:spatialResolution>
          <gmd:language>
            <gmd:LanguageCode codeList="http://www.loc.gov/standards/iso639-2/" codeListValue="eng" />
          </gmd:language>
          <gmd:characterSet>
            <gmd:MD_CharacterSetCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_CharacterSetCode" codeListValue="utf8" />
          </gmd:characterSet>
          <gmd:topicCategory>
            <gmd:MD_TopicCategoryCode>climatologyMeteorologyAtmosphere</gmd:MD_TopicCategoryCode>
          </gmd:topicCategory>
          <gmd:extent>
            <gmd:EX_Extent>
              <gmd:geographicElement>
                <gmd:EX_GeographicBoundingBox>
                  <gmd:westBoundLongitude>
                    <gco:Decimal>3.2</gco:Decimal>
                  </gmd:westBoundLongitude>
                  <gmd:eastBoundLongitude>
                    <gco:Decimal>7.4</gco:Decimal>
                  </gmd:eastBoundLongitude>
                  <gmd:southBoundLatitude>
                    <gco:Decimal>50.6</gco:Decimal>
                  </gmd:southBoundLatitude>
                  <gmd:northBoundLatitude>
                    <gco:Decimal>53.7</gco:Decimal>
                  </gmd:northBoundLatitude>
                </gmd:EX_GeographicBoundingBox>
              </gmd:geographicElement>
              <gmd:temporalElement>
                <gmd:EX_TemporalExtent>
                  <gmd:extent>
                    <gml:TimePeriod gml:id="d7669e433a1052958">
                      <gml:beginPosition>1981-01-01</gml:beginPosition>
                      <gml:endPosition>2100-12-31</gml:endPosition>
                    </gml:TimePeriod>
                  </gmd:extent>
                </gmd:EX_TemporalExtent>
              </gmd:temporalElement>
            </gmd:EX_Extent>
          </gmd:extent>
          <gmd:supplementalInformation xsi:type="gmd:PT_FreeText_PropertyType">
            <gco:CharacterString>Through the Explanation (Toelichting) on http://www.klimaatscenarios.nl/toekomstig_weer/transformatie/index.html</gco:CharacterString>
            <gmd:PT_FreeText>
              <gmd:textGroup>
                <gmd:LocalisedCharacterString locale="#DUT">via Toelichting op http://www.klimaatscenarios.nl/toekomstig_weer/transformatie/index.html</gmd:LocalisedCharacterString>
              </gmd:textGroup>
            </gmd:PT_FreeText>
          </gmd:supplementalInformation>
        </gmd:MD_DataIdentification>
      </gmd:identificationInfo>
      <gmd:distributionInfo>
        <gmd:MD_Distribution>
          <gmd:distributionFormat>
            <gmd:MD_Format>
              <gmd:name>
                <gco:CharacterString>ASCII</gco:CharacterString>
              </gmd:name>
              <gmd:version>
                <gco:CharacterString>1.0</gco:CharacterString>
              </gmd:version>
              <gmd:specification>
                <gco:CharacterString />
              </gmd:specification>
            </gmd:MD_Format>
          </gmd:distributionFormat>
          <gmd:distributor>
            <gmd:MD_Distributor>
              <gmd:distributorContact>
                <gmd:CI_ResponsibleParty>
                  <gmd:organisationName xsi:type="gmd:PT_FreeText_PropertyType">
                    <gco:CharacterString>Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gco:CharacterString>
                    <gmd:PT_FreeText>
                      <gmd:textGroup>
                        <gmd:LocalisedCharacterString locale="#DUT">Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gmd:LocalisedCharacterString>
                      </gmd:textGroup>
                    </gmd:PT_FreeText>
                  </gmd:organisationName>
                  <gmd:contactInfo>
                    <gmd:CI_Contact>
                      <gmd:address>
                        <gmd:CI_Address>
                          <gmd:electronicMailAddress>
                            <gco:CharacterString>opendata@knmi.nl</gco:CharacterString>
                          </gmd:electronicMailAddress>
                        </gmd:CI_Address>
                      </gmd:address>
                    </gmd:CI_Contact>
                  </gmd:contactInfo>
                  <gmd:role>
                    <gmd:CI_RoleCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_RoleCode" codeListValue="pointOfContact" />
                  </gmd:role>
                </gmd:CI_ResponsibleParty>
              </gmd:distributorContact>
              <gmd:distributionOrderProcess>
                <gmd:MD_StandardOrderProcess>
                  <gmd:orderingInstructions xsi:type="gmd:PT_FreeText_PropertyType">
                    <gco:CharacterString>can also be downloaded through http://www.klimaatscenarios.nl/toekomstig_weer/transformatie/index.html</gco:CharacterString>
                    <gmd:PT_FreeText>
                      <gmd:textGroup>
                        <gmd:LocalisedCharacterString locale="#DUT">ook te downloaden via http://www.klimaatscenarios.nl/toekomstig_weer/transformatie/index.html</gmd:LocalisedCharacterString>
                      </gmd:textGroup>
                    </gmd:PT_FreeText>
                  </gmd:orderingInstructions>
                </gmd:MD_StandardOrderProcess>
              </gmd:distributionOrderProcess>
            </gmd:MD_Distributor>
          </gmd:distributor>
          <gmd:transferOptions>
            <gmd:MD_DigitalTransferOptions>
              <gmd:onLine>
                <gmd:CI_OnlineResource>
                  <gmd:linkage>
                    <gmd:URL>https://dataplatform.knmi.nl/catalog/datasets/index.html?x-dataset=knmi14_minimum_temperature&amp;x-dataset-version=3.2</gmd:URL>
                  </gmd:linkage>
                  <gmd:protocol>
                    <gco:CharacterString>landingpage</gco:CharacterString>
                  </gmd:protocol>
                  <gmd:name>
                    <gco:CharacterString>KNMI Data Platform</gco:CharacterString>
                  </gmd:name>
                </gmd:CI_OnlineResource>
              </gmd:onLine>
            </gmd:MD_DigitalTransferOptions>
          </gmd:transferOptions>
        </gmd:MD_Distribution>
      </gmd:distributionInfo>
      <gmd:dataQualityInfo>
        <gmd:DQ_DataQuality>
          <gmd:scope>
            <gmd:DQ_Scope>
              <gmd:level>
                <gmd:MD_ScopeCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_ScopeCode" codeListValue="dataset" />
              </gmd:level>
            </gmd:DQ_Scope>
          </gmd:scope>
          <gmd:report>
            <gmd:DQ_CompletenessOmission>
              <gmd:result>
                <gmd:DQ_QuantitativeResult>
                  <gmd:valueUnit />
                  <gmd:value>
                    <gco:Record xsi:type="gmd:PT_FreeText_PropertyType">
                      <gco:CharacterString>14 stations with temperature in the Netherlands</gco:CharacterString>
                      <gmd:PT_FreeText>
                        <gmd:textGroup>
                          <gmd:LocalisedCharacterString locale="#DUT">14 temperatuurstations in Nederland</gmd:LocalisedCharacterString>
                        </gmd:textGroup>
                      </gmd:PT_FreeText>
                    </gco:Record>
                  </gmd:value>
                </gmd:DQ_QuantitativeResult>
              </gmd:result>
            </gmd:DQ_CompletenessOmission>
          </gmd:report>
          <gmd:lineage>
            <gmd:LI_Lineage>
              <gmd:statement xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>transformation program 3.2</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">transformatieprogramma 3.2</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:statement>
            </gmd:LI_Lineage>
          </gmd:lineage>
        </gmd:DQ_DataQuality>
      </gmd:dataQualityInfo>
    </gmd:MD_Metadata>
    <gmd:MD_Metadata xmlns:gmd="http://www.isotc211.org/2005/gmd" xmlns:gco="http://www.isotc211.org/2005/gco" xmlns:gml="http://www.opengis.net/gml" xmlns:gmx="http://schemas.opengis.net/iso/19139/20060504/gmx/gmx.xsd" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:geonet="http://www.fao.org/geonetwork" xsi:schemaLocation="http://www.isotc211.org/2005/gmd http://schemas.opengis.net/iso/19139/20060504/gmd/gmd.xsd">
      <gmd:fileIdentifier>
        <gco:CharacterString>3033c6eb-646b-4b4c-8133-d85f82bb5ded</gco:CharacterString>
      </gmd:fileIdentifier>
      <gmd:language>
        <gmd:LanguageCode codeList="http://www.loc.gov/standards/iso639-2/" codeListValue="eng" />
      </gmd:language>
      <gmd:characterSet>
        <gmd:MD_CharacterSetCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_CharacterSetCode" codeListValue="utf8" />
      </gmd:characterSet>
      <gmd:hierarchyLevel>
        <gmd:MD_ScopeCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_ScopeCode" codeListValue="dataset" />
      </gmd:hierarchyLevel>
      <gmd:contact>
        <gmd:CI_ResponsibleParty>
          <gmd:organisationName xsi:type="gmd:PT_FreeText_PropertyType">
            <gco:CharacterString>Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gco:CharacterString>
            <gmd:PT_FreeText>
              <gmd:textGroup>
                <gmd:LocalisedCharacterString locale="#DUT">Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gmd:LocalisedCharacterString>
              </gmd:textGroup>
            </gmd:PT_FreeText>
          </gmd:organisationName>
          <gmd:contactInfo>
            <gmd:CI_Contact>
              <gmd:address>
                <gmd:CI_Address>
                  <gmd:electronicMailAddress>
                    <gco:CharacterString>opendata@knmi.nl</gco:CharacterString>
                  </gmd:electronicMailAddress>
                </gmd:CI_Address>
              </gmd:address>
            </gmd:CI_Contact>
          </gmd:contactInfo>
          <gmd:role>
            <gmd:CI_RoleCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_RoleCode" codeListValue="pointOfContact" />
          </gmd:role>
        </gmd:CI_ResponsibleParty>
      </gmd:contact>
      <gmd:dateStamp>
        <gco:Date>2018-02-11</gco:Date>
      </gmd:dateStamp>
      <gmd:metadataStandardName>
        <gco:CharacterString>ISO 19115</gco:CharacterString>
      </gmd:metadataStandardName>
      <gmd:metadataStandardVersion>
        <gco:CharacterString>ISO 19115:2003 NL Kernset 1.3 KNMI 1.1</gco:CharacterString>
      </gmd:metadataStandardVersion>
      <gmd:locale>
        <gmd:PT_Locale id="DUT">
          <gmd:languageCode>
            <gmd:LanguageCode codeList="http://www.loc.gov/standards/iso639-2/" codeListValue="dut" />
          </gmd:languageCode>
          <gmd:characterEncoding>
            <gmd:MD_CharacterSetCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_CharacterSetCode" codeListValue="" />
          </gmd:characterEncoding>
        </gmd:PT_Locale>
      </gmd:locale>
      <gmd:referenceSystemInfo>
        <gmd:MD_ReferenceSystem>
          <gmd:referenceSystemIdentifier>
            <gmd:RS_Identifier>
              <gmd:code>
                <gco:CharacterString>http://www.opengis.net/def/crs/EPSG/0/28992</gco:CharacterString>
              </gmd:code>
            </gmd:RS_Identifier>
          </gmd:referenceSystemIdentifier>
        </gmd:MD_ReferenceSystem>
      </gmd:referenceSystemInfo>
      <gmd:identificationInfo>
        <gmd:MD_DataIdentification>
          <gmd:citation>
            <gmd:CI_Citation>
              <gmd:title xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Evaporation - historic gridded daily Makkink evaporation for the Netherlands for 1910-2015 transformed to KNMI14 climate scenario 2085 GL</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Verdamping - historische geinterpoleerde dagelijkse Makkink verdamping in Nederland van 1910-2015 getransformeerd naar KNMI14 klimaatscenario 2085 GL</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:title>
              <gmd:date>
                <gmd:CI_Date>
                  <gmd:date>
                    <gco:Date>2016-10-25</gco:Date>
                  </gmd:date>
                  <gmd:dateType>
                    <gmd:CI_DateTypeCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_DateTypeCode" codeListValue="publication" />
                  </gmd:dateType>
                </gmd:CI_Date>
              </gmd:date>
              <gmd:edition>
                <gco:CharacterString>3</gco:CharacterString>
              </gmd:edition>
              <gmd:identifier>
                <gmd:MD_Identifier>
                  <gmd:code>
                    <gco:CharacterString>urn:xkdc:ds:nl.knmi::EVH85GL/2/</gco:CharacterString>
                  </gmd:code>
                </gmd:MD_Identifier>
              </gmd:identifier>
            </gmd:CI_Citation>
          </gmd:citation>
          <gmd:abstract xsi:type="gmd:PT_FreeText_PropertyType">
            <gco:CharacterString>Historic gridded files of daily Makkink evaporation for 1910-2015 in the Netherlands. Calculated from sunshine duration (1951-1981) and radiation (1981-2015). The number of observations varies: 1910-1981 (5), 1981-2015 (35). Transformed to KNMI14 climate scenario 2085 GL.</gco:CharacterString>
            <gmd:PT_FreeText>
              <gmd:textGroup>
                <gmd:LocalisedCharacterString locale="#DUT">Historische gridbestanden van dagelijkse Makkink verdamping in Nederland van 1910-2015. Berekend op basis van zonneschijnduur (1951-1981) en straling (1981-2015). Het aantal waarnemingen varieert: 1910-1981 (5), 1981-2015 (35). Getransformeerd naar KNMI14 klimaatscenario 2085 GL.</gmd:LocalisedCharacterString>
              </gmd:textGroup>
            </gmd:PT_FreeText>
          </gmd:abstract>
          <gmd:purpose xsi:type="gmd:PT_FreeText_PropertyType">
            <gco:CharacterString>Netherlands Hydrological modelling Instrument (NHI)</gco:CharacterString>
            <gmd:PT_FreeText>
              <gmd:textGroup>
                <gmd:LocalisedCharacterString locale="#DUT">Nederlands Hydrologisch Instrumentarium (NHI)</gmd:LocalisedCharacterString>
              </gmd:textGroup>
            </gmd:PT_FreeText>
          </gmd:purpose>
          <gmd:status>
            <gmd:MD_ProgressCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_ProgressCode" codeListValue="completed" />
          </gmd:status>
          <gmd:pointOfContact>
            <gmd:CI_ResponsibleParty>
              <gmd:organisationName xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:organisationName>
              <gmd:contactInfo>
                <gmd:CI_Contact>
                  <gmd:address>
                    <gmd:CI_Address>
                      <gmd:electronicMailAddress>
                        <gco:CharacterString>opendata@knmi.nl</gco:CharacterString>
                      </gmd:electronicMailAddress>
                    </gmd:CI_Address>
                  </gmd:address>
                </gmd:CI_Contact>
              </gmd:contactInfo>
              <gmd:role>
                <gmd:CI_RoleCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_RoleCode" codeListValue="pointOfContact" />
              </gmd:role>
            </gmd:CI_ResponsibleParty>
          </gmd:pointOfContact>
          <gmd:resourceMaintenance>
            <gmd:MD_MaintenanceInformation>
              <gmd:maintenanceAndUpdateFrequency>
                <gmd:MD_MaintenanceFrequencyCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_MaintenanceFrequencyCode" codeListValue="asNeeded" />
              </gmd:maintenanceAndUpdateFrequency>
            </gmd:MD_MaintenanceInformation>
          </gmd:resourceMaintenance>
          <gmd:descriptiveKeywords>
            <gmd:MD_Keywords>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Climate</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Klimaat</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Evaporation</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Verdamping</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Makkink</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Makkink</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Sunshine duration</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Zonneschijnduur</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Historic</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Historisch</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>KNMI14</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">KNMI14</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:thesaurusName>
                <gmd:CI_Citation>
                  <gmd:title>
                    <gco:CharacterString>DG Discovery Properties Vocabulary 1.0</gco:CharacterString>
                  </gmd:title>
                  <gmd:date>
                    <gmd:CI_Date>
                      <gmd:date>
                        <gco:Date>2013-01-01</gco:Date>
                      </gmd:date>
                      <gmd:dateType>
                        <gmd:CI_DateTypeCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_DateTypeCode" codeListValue="publication" />
                      </gmd:dateType>
                    </gmd:CI_Date>
                  </gmd:date>
                </gmd:CI_Citation>
              </gmd:thesaurusName>
            </gmd:MD_Keywords>
          </gmd:descriptiveKeywords>
          <gmd:resourceConstraints>
            <gmd:MD_Constraints>
              <gmd:useLimitation xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>No use limitations</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Geen gebruiksbeperkingen</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:useLimitation>
            </gmd:MD_Constraints>
          </gmd:resourceConstraints>
          <gmd:resourceConstraints>
            <gmd:MD_LegalConstraints>
              <gmd:accessConstraints>
                <gmd:MD_RestrictionCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_RestrictionCode" codeListValue="otherRestrictions" />
              </gmd:accessConstraints>
              <gmd:otherConstraints>
                <gco:CharacterString>https://creativecommons.org/publicdomain/zero/1.0/deed.nl</gco:CharacterString>
              </gmd:otherConstraints>
            </gmd:MD_LegalConstraints>
          </gmd:resourceConstraints>
          <gmd:resourceConstraints>
            <gmd:MD_SecurityConstraints>
              <gmd:classification>
                <gmd:MD_ClassificationCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_ClassificationCode" codeListValue="unclassified" />
              </gmd:classification>
            </gmd:MD_SecurityConstraints>
          </gmd:resourceConstraints>
          <gmd:spatialRepresentationType>
            <gmd:MD_SpatialRepresentationTypeCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_SpatialRepresentationTypeCode" codeListValue="grid" />
          </gmd:spatialRepresentationType>
          <gmd:spatialResolution>
            <gmd:MD_Resolution>
              <gmd:distance>
                <gco:Distance uom="meters">10000</gco:Distance>
              </gmd:distance>
            </gmd:MD_Resolution>
          </gmd:spatialResolution>
          <gmd:language>
            <gmd:LanguageCode codeList="http://www.loc.gov/standards/iso639-2/" codeListValue="eng" />
          </gmd:language>
          <gmd:characterSet>
            <gmd:MD_CharacterSetCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_CharacterSetCode" codeListValue="utf8" />
          </gmd:characterSet>
          <gmd:topicCategory>
            <gmd:MD_TopicCategoryCode>climatologyMeteorologyAtmosphere</gmd:MD_TopicCategoryCode>
          </gmd:topicCategory>
          <gmd:extent>
            <gmd:EX_Extent>
              <gmd:geographicElement>
                <gmd:EX_GeographicBoundingBox>
                  <gmd:westBoundLongitude>
                    <gco:Decimal>3.2</gco:Decimal>
                  </gmd:westBoundLongitude>
                  <gmd:eastBoundLongitude>
                    <gco:Decimal>7.4</gco:Decimal>
                  </gmd:eastBoundLongitude>
                  <gmd:southBoundLatitude>
                    <gco:Decimal>50.6</gco:Decimal>
                  </gmd:southBoundLatitude>
                  <gmd:northBoundLatitude>
                    <gco:Decimal>53.7</gco:Decimal>
                  </gmd:northBoundLatitude>
                </gmd:EX_GeographicBoundingBox>
              </gmd:geographicElement>
              <gmd:temporalElement>
                <gmd:EX_TemporalExtent>
                  <gmd:extent>
                    <gml:TimePeriod gml:id="d7669e433a1052958">
                      <gml:beginPosition>1910-01-01</gml:beginPosition>
                      <gml:endPosition>2016-01-01</gml:endPosition>
                    </gml:TimePeriod>
                  </gmd:extent>
                </gmd:EX_TemporalExtent>
              </gmd:temporalElement>
            </gmd:EX_Extent>
          </gmd:extent>
          <gmd:supplementalInformation xsi:type="gmd:PT_FreeText_PropertyType">
            <gco:CharacterString>Product description is available at contact person</gco:CharacterString>
            <gmd:PT_FreeText>
              <gmd:textGroup>
                <gmd:LocalisedCharacterString locale="#DUT">Productbeschrijving is beschikbaar bij contactpersoon</gmd:LocalisedCharacterString>
              </gmd:textGroup>
            </gmd:PT_FreeText>
          </gmd:supplementalInformation>
        </gmd:MD_DataIdentification>
      </gmd:identificationInfo>
      <gmd:distributionInfo>
        <gmd:MD_Distribution>
          <gmd:distributionFormat>
            <gmd:MD_Format>
              <gmd:name>
                <gco:CharacterString>NetCDF</gco:CharacterString>
              </gmd:name>
              <gmd:version>
                <gco:CharacterString>4</gco:CharacterString>
              </gmd:version>
              <gmd:specification>
                <gco:CharacterString>CF</gco:CharacterString>
              </gmd:specification>
            </gmd:MD_Format>
          </gmd:distributionFormat>
          <gmd:distributor>
            <gmd:MD_Distributor>
              <gmd:distributorContact>
                <gmd:CI_ResponsibleParty>
                  <gmd:organisationName xsi:type="gmd:PT_FreeText_PropertyType">
                    <gco:CharacterString>Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gco:CharacterString>
                    <gmd:PT_FreeText>
                      <gmd:textGroup>
                        <gmd:LocalisedCharacterString locale="#DUT">Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gmd:LocalisedCharacterString>
                      </gmd:textGroup>
                    </gmd:PT_FreeText>
                  </gmd:organisationName>
                  <gmd:contactInfo>
                    <gmd:CI_Contact>
                      <gmd:address>
                        <gmd:CI_Address>
                          <gmd:electronicMailAddress>
                            <gco:CharacterString>opendata@knmi.nl</gco:CharacterString>
                          </gmd:electronicMailAddress>
                        </gmd:CI_Address>
                      </gmd:address>
                    </gmd:CI_Contact>
                  </gmd:contactInfo>
                  <gmd:role>
                    <gmd:CI_RoleCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_RoleCode" codeListValue="pointOfContact" />
                  </gmd:role>
                </gmd:CI_ResponsibleParty>
              </gmd:distributorContact>
            </gmd:MD_Distributor>
          </gmd:distributor>
          <gmd:transferOptions>
            <gmd:MD_DigitalTransferOptions>
              <gmd:transferSize>
                <gco:Real>0.5</gco:Real>
              </gmd:transferSize>
              <gmd:onLine>
                <gmd:CI_OnlineResource>
                  <gmd:linkage>
                    <gmd:URL>https://dataplatform.knmi.nl/catalog/datasets/index.html?x-dataset=EVH85GL&amp;x-dataset-version=2</gmd:URL>
                  </gmd:linkage>
                  <gmd:protocol>
                    <gco:CharacterString>landingpage</gco:CharacterString>
                  </gmd:protocol>
                  <gmd:name>
                    <gco:CharacterString>KNMI Data Platform</gco:CharacterString>
                  </gmd:name>
                </gmd:CI_OnlineResource>
              </gmd:onLine>
            </gmd:MD_DigitalTransferOptions>
          </gmd:transferOptions>
        </gmd:MD_Distribution>
      </gmd:distributionInfo>
      <gmd:dataQualityInfo>
        <gmd:DQ_DataQuality>
          <gmd:scope>
            <gmd:DQ_Scope>
              <gmd:level>
                <gmd:MD_ScopeCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_ScopeCode" codeListValue="dataset" />
              </gmd:level>
            </gmd:DQ_Scope>
          </gmd:scope>
          <gmd:lineage>
            <gmd:LI_Lineage>
              <gmd:statement xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>The interpolation method is Thin Plate Spline Interpolation The number of observations is 5. TPS is not an exact interpolator: interpolated values at measurement locations may differ from measurements. Evaporation has been calculated based on sunshine duration and solar radiation. See product description for clime scenarios transformation details.</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">De interpolatiemethode is Thin Plate Spline interpolation (TPS) Deze interpolatiemethode is niet exact: de geïnterpoleerde waarde op een punt kan afwijken van de gemeten waarde. De verdamping is berekend op basis van zonneschijnduur en straling. Zie productbeschrijving voor KNMI klimaatscenario transformatie details.</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:statement>
            </gmd:LI_Lineage>
          </gmd:lineage>
        </gmd:DQ_DataQuality>
      </gmd:dataQualityInfo>
    </gmd:MD_Metadata>
    <gmd:MD_Metadata xmlns:gmd="http://www.isotc211.org/2005/gmd" xmlns:gco="http://www.isotc211.org/2005/gco" xmlns:gml="http://www.opengis.net/gml" xmlns:gmx="http://schemas.opengis.net/iso/19139/20060504/gmx/gmx.xsd" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:geonet="http://www.fao.org/geonetwork" xsi:schemaLocation="http://www.isotc211.org/2005/gmd http://schemas.opengis.net/iso/19139/20060504/gmd/gmd.xsd">
      <gmd:fileIdentifier>
        <gco:CharacterString>5a1b6db0-0682-11ec-9fb2-059654019e08</gco:CharacterString>
      </gmd:fileIdentifier>
      <gmd:language>
        <gmd:LanguageCode codeList="http://www.loc.gov/standards/iso639-2/" codeListValue="eng" />
      </gmd:language>
      <gmd:characterSet>
        <gmd:MD_CharacterSetCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_CharacterSetCode" codeListValue="utf8" />
      </gmd:characterSet>
      <gmd:hierarchyLevel>
        <gmd:MD_ScopeCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_ScopeCode" codeListValue="dataset" />
      </gmd:hierarchyLevel>
      <gmd:contact>
        <gmd:CI_ResponsibleParty>
          <gmd:organisationName xsi:type="gmd:PT_FreeText_PropertyType">
            <gco:CharacterString>Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gco:CharacterString>
            <gmd:PT_FreeText>
              <gmd:textGroup>
                <gmd:LocalisedCharacterString locale="#DUT">Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gmd:LocalisedCharacterString>
              </gmd:textGroup>
            </gmd:PT_FreeText>
          </gmd:organisationName>
          <gmd:contactInfo>
            <gmd:CI_Contact>
              <gmd:address>
                <gmd:CI_Address>
                  <gmd:electronicMailAddress>
                    <gco:CharacterString>opendata@knmi.nl</gco:CharacterString>
                  </gmd:electronicMailAddress>
                </gmd:CI_Address>
              </gmd:address>
            </gmd:CI_Contact>
          </gmd:contactInfo>
          <gmd:role>
            <gmd:CI_RoleCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_RoleCode" codeListValue="pointOfContact" />
          </gmd:role>
        </gmd:CI_ResponsibleParty>
      </gmd:contact>
      <gmd:dateStamp>
        <gco:Date>2021-08-30</gco:Date>
      </gmd:dateStamp>
      <gmd:metadataStandardName>
        <gco:CharacterString>ISO 19115</gco:CharacterString>
      </gmd:metadataStandardName>
      <gmd:metadataStandardVersion>
        <gco:CharacterString>ISO 19115:2003 NL Kernset 1.3 KNMI 1.1</gco:CharacterString>
      </gmd:metadataStandardVersion>
      <gmd:locale>
        <gmd:PT_Locale id="DUT">
          <gmd:languageCode>
            <gmd:LanguageCode codeList="http://www.loc.gov/standards/iso639-2/" codeListValue="dut" />
          </gmd:languageCode>
          <gmd:characterEncoding>
            <gmd:MD_CharacterSetCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_CharacterSetCode" codeListValue="" />
          </gmd:characterEncoding>
        </gmd:PT_Locale>
      </gmd:locale>
      <gmd:referenceSystemInfo>
        <gmd:MD_ReferenceSystem>
          <gmd:referenceSystemIdentifier>
            <gmd:RS_Identifier>
              <gmd:code>
                <gco:CharacterString>http://www.opengis.net/def/crs/EPSG/0/28992</gco:CharacterString>
              </gmd:code>
            </gmd:RS_Identifier>
          </gmd:referenceSystemIdentifier>
        </gmd:MD_ReferenceSystem>
      </gmd:referenceSystemInfo>
      <gmd:identificationInfo>
        <gmd:MD_DataIdentification>
          <gmd:citation>
            <gmd:CI_Citation>
              <gmd:title xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Climate normals - 1991-2020 day normals by station from KNMI automatic weather stations (AWS)</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Klimaatnormalen - 1991-2020 dag normalen per station van KNMI automatische weer stations (AWS)</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:title>
              <gmd:date>
                <gmd:CI_Date>
                  <gmd:date>
                    <gco:Date>2021-08-30</gco:Date>
                  </gmd:date>
                  <gmd:dateType>
                    <gmd:CI_DateTypeCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_DateTypeCode" codeListValue="publication" />
                  </gmd:dateType>
                </gmd:CI_Date>
              </gmd:date>
              <gmd:edition>
                <gco:CharacterString>1</gco:CharacterString>
              </gmd:edition>
              <gmd:identifier>
                <gmd:MD_Identifier>
                  <gmd:code>
                    <gco:CharacterString>urn:xkdc:ds:nl.knmi::climate_normals_1991_2020_day_normals_by_station/1/</gco:CharacterString>
                  </gmd:code>
                </gmd:MD_Identifier>
              </gmd:identifier>
            </gmd:CI_Citation>
          </gmd:citation>
          <gmd:abstract xsi:type="gmd:PT_FreeText_PropertyType">
            <gco:CharacterString>The 30 year average value of a climate variable on 1 specific date.</gco:CharacterString>
            <gmd:PT_FreeText>
              <gmd:textGroup>
                <gmd:LocalisedCharacterString locale="#DUT">De 30 jaar gemiddelde waarde van een klimaatvariabelen op 1 specifieke datum.</gmd:LocalisedCharacterString>
              </gmd:textGroup>
            </gmd:PT_FreeText>
          </gmd:abstract>
          <gmd:status>
            <gmd:MD_ProgressCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_ProgressCode" codeListValue="completed" />
          </gmd:status>
          <gmd:pointOfContact>
            <gmd:CI_ResponsibleParty>
              <gmd:organisationName xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:organisationName>
              <gmd:contactInfo>
                <gmd:CI_Contact>
                  <gmd:address>
                    <gmd:CI_Address>
                      <gmd:electronicMailAddress>
                        <gco:CharacterString>opendata@knmi.nl</gco:CharacterString>
                      </gmd:electronicMailAddress>
                    </gmd:CI_Address>
                  </gmd:address>
                </gmd:CI_Contact>
              </gmd:contactInfo>
              <gmd:role>
                <gmd:CI_RoleCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_RoleCode" codeListValue="pointOfContact" />
              </gmd:role>
            </gmd:CI_ResponsibleParty>
          </gmd:pointOfContact>
          <gmd:resourceMaintenance>
            <gmd:MD_MaintenanceInformation>
              <gmd:maintenanceAndUpdateFrequency>
                <gmd:MD_MaintenanceFrequencyCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_MaintenanceFrequencyCode" codeListValue="notPlanned" />
              </gmd:maintenanceAndUpdateFrequency>
            </gmd:MD_MaintenanceInformation>
          </gmd:resourceMaintenance>
          <gmd:descriptiveKeywords>
            <gmd:MD_Keywords>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Climate normals</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Klimaatnormalen</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Normals</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Normalen</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>AWS</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">AWS</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Automatic weather stations</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Automatische weer stations</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Day normals</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Dagnormalen</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Average day</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Gemiddelde dag</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:thesaurusName>
                <gmd:CI_Citation>
                  <gmd:title>
                    <gco:CharacterString>DG Discovery Properties Vocabulary 1.0</gco:CharacterString>
                  </gmd:title>
                  <gmd:date>
                    <gmd:CI_Date>
                      <gmd:date>
                        <gco:Date>2013-01-01</gco:Date>
                      </gmd:date>
                      <gmd:dateType>
                        <gmd:CI_DateTypeCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_DateTypeCode" codeListValue="publication" />
                      </gmd:dateType>
                    </gmd:CI_Date>
                  </gmd:date>
                </gmd:CI_Citation>
              </gmd:thesaurusName>
            </gmd:MD_Keywords>
          </gmd:descriptiveKeywords>
          <gmd:descriptiveKeywords>
            <gmd:MD_Keywords>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Open data</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Open data</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
            </gmd:MD_Keywords>
          </gmd:descriptiveKeywords>
          <gmd:resourceConstraints>
            <gmd:MD_Constraints>
              <gmd:useLimitation xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>No use limitations</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Geen gebruiksbeperkingen</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:useLimitation>
            </gmd:MD_Constraints>
          </gmd:resourceConstraints>
          <gmd:resourceConstraints>
            <gmd:MD_LegalConstraints>
              <gmd:accessConstraints>
                <gmd:MD_RestrictionCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_RestrictionCode" codeListValue="otherRestrictions" />
              </gmd:accessConstraints>
              <gmd:otherConstraints>
                <gco:CharacterString>https://creativecommons.org/publicdomain/zero/1.0/deed.nl</gco:CharacterString>
              </gmd:otherConstraints>
            </gmd:MD_LegalConstraints>
          </gmd:resourceConstraints>
          <gmd:resourceConstraints>
            <gmd:MD_SecurityConstraints>
              <gmd:classification>
                <gmd:MD_ClassificationCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_ClassificationCode" codeListValue="unclassified" />
              </gmd:classification>
            </gmd:MD_SecurityConstraints>
          </gmd:resourceConstraints>
          <gmd:spatialRepresentationType>
            <gmd:MD_SpatialRepresentationTypeCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_SpatialRepresentationTypeCode" codeListValue="grid" />
          </gmd:spatialRepresentationType>
          <gmd:language>
            <gmd:LanguageCode codeList="http://www.loc.gov/standards/iso639-2/" codeListValue="eng" />
          </gmd:language>
          <gmd:characterSet>
            <gmd:MD_CharacterSetCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_CharacterSetCode" codeListValue="utf8" />
          </gmd:characterSet>
          <gmd:topicCategory>
            <gmd:MD_TopicCategoryCode>climatologyMeteorologyAtmosphere</gmd:MD_TopicCategoryCode>
          </gmd:topicCategory>
          <gmd:extent>
            <gmd:EX_Extent>
              <gmd:geographicElement>
                <gmd:EX_GeographicBoundingBox>
                  <gmd:westBoundLongitude>
                    <gco:Decimal>3.3</gco:Decimal>
                  </gmd:westBoundLongitude>
                  <gmd:eastBoundLongitude>
                    <gco:Decimal>7.2</gco:Decimal>
                  </gmd:eastBoundLongitude>
                  <gmd:southBoundLatitude>
                    <gco:Decimal>50.7</gco:Decimal>
                  </gmd:southBoundLatitude>
                  <gmd:northBoundLatitude>
                    <gco:Decimal>53.2</gco:Decimal>
                  </gmd:northBoundLatitude>
                </gmd:EX_GeographicBoundingBox>
              </gmd:geographicElement>
              <gmd:temporalElement>
                <gmd:EX_TemporalExtent>
                  <gmd:extent>
                    <gml:TimePeriod gml:id="d7669e433a1052958">
                      <gml:beginPosition>1991-01-01</gml:beginPosition>
                      <gml:endPosition>2020-12-31</gml:endPosition>
                    </gml:TimePeriod>
                  </gmd:extent>
                </gmd:EX_TemporalExtent>
              </gmd:temporalElement>
            </gmd:EX_Extent>
          </gmd:extent>
        </gmd:MD_DataIdentification>
      </gmd:identificationInfo>
      <gmd:distributionInfo>
        <gmd:MD_Distribution>
          <gmd:distributionFormat>
            <gmd:MD_Format>
              <gmd:name>
                <gco:CharacterString>ASCII</gco:CharacterString>
              </gmd:name>
              <gmd:version>
                <gco:CharacterString>1</gco:CharacterString>
              </gmd:version>
              <gmd:specification>
                <gco:CharacterString>Comma Seperated Values (CSV)</gco:CharacterString>
              </gmd:specification>
            </gmd:MD_Format>
          </gmd:distributionFormat>
          <gmd:distributor>
            <gmd:MD_Distributor>
              <gmd:distributorContact>
                <gmd:CI_ResponsibleParty>
                  <gmd:organisationName xsi:type="gmd:PT_FreeText_PropertyType">
                    <gco:CharacterString>Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gco:CharacterString>
                    <gmd:PT_FreeText>
                      <gmd:textGroup>
                        <gmd:LocalisedCharacterString locale="#DUT">Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gmd:LocalisedCharacterString>
                      </gmd:textGroup>
                    </gmd:PT_FreeText>
                  </gmd:organisationName>
                  <gmd:contactInfo>
                    <gmd:CI_Contact>
                      <gmd:address>
                        <gmd:CI_Address>
                          <gmd:electronicMailAddress>
                            <gco:CharacterString>opendata@knmi.nl</gco:CharacterString>
                          </gmd:electronicMailAddress>
                        </gmd:CI_Address>
                      </gmd:address>
                    </gmd:CI_Contact>
                  </gmd:contactInfo>
                  <gmd:role>
                    <gmd:CI_RoleCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_RoleCode" codeListValue="pointOfContact" />
                  </gmd:role>
                </gmd:CI_ResponsibleParty>
              </gmd:distributorContact>
            </gmd:MD_Distributor>
          </gmd:distributor>
          <gmd:transferOptions>
            <gmd:MD_DigitalTransferOptions>
              <gmd:onLine>
                <gmd:CI_OnlineResource>
                  <gmd:linkage>
                    <gmd:URL>https://dataplatform.knmi.nl/catalog/datasets/index.html?x-dataset=climate_normals_1991_2020_day_normals_by_station&amp;x-dataset-version=1</gmd:URL>
                  </gmd:linkage>
                  <gmd:protocol>
                    <gco:CharacterString>landingpage</gco:CharacterString>
                  </gmd:protocol>
                  <gmd:name>
                    <gco:CharacterString>KNMI Data Platform</gco:CharacterString>
                  </gmd:name>
                </gmd:CI_OnlineResource>
              </gmd:onLine>
            </gmd:MD_DigitalTransferOptions>
          </gmd:transferOptions>
        </gmd:MD_Distribution>
      </gmd:distributionInfo>
      <gmd:dataQualityInfo>
        <gmd:DQ_DataQuality>
          <gmd:scope>
            <gmd:DQ_Scope>
              <gmd:level>
                <gmd:MD_ScopeCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_ScopeCode" codeListValue="dataset" />
              </gmd:level>
            </gmd:DQ_Scope>
          </gmd:scope>
          <gmd:lineage>
            <gmd:LI_Lineage>
              <gmd:statement xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>The climate normals are 30 year averaged values, determined according to WMO regulations (https://library.wmo.int/doc_num.php?explnum_id=4166).</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Klimaatnormalen zijn 30-jaar gemiddelde waardes, bepaald volgens WMO voorschrift (https://library.wmo.int/doc_num.php?explnum_id=4166).</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:statement>
            </gmd:LI_Lineage>
          </gmd:lineage>
        </gmd:DQ_DataQuality>
      </gmd:dataQualityInfo>
    </gmd:MD_Metadata>
    <gmd:MD_Metadata xmlns:gmd="http://www.isotc211.org/2005/gmd" xmlns:gco="http://www.isotc211.org/2005/gco" xmlns:gml="http://www.opengis.net/gml" xmlns:gmx="http://schemas.opengis.net/iso/19139/20060504/gmx/gmx.xsd" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:geonet="http://www.fao.org/geonetwork" xsi:schemaLocation="http://www.isotc211.org/2005/gmd http://schemas.opengis.net/iso/19139/20060504/gmd/gmd.xsd">
      <gmd:fileIdentifier>
        <gco:CharacterString>5d31d1fc-c37f-4dad-8814-fafd51802e11</gco:CharacterString>
      </gmd:fileIdentifier>
      <gmd:language>
        <gmd:LanguageCode codeList="http://www.loc.gov/standards/iso639-2/" codeListValue="eng" />
      </gmd:language>
      <gmd:characterSet>
        <gmd:MD_CharacterSetCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_CharacterSetCode" codeListValue="utf8" />
      </gmd:characterSet>
      <gmd:hierarchyLevel>
        <gmd:MD_ScopeCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_ScopeCode" codeListValue="dataset" />
      </gmd:hierarchyLevel>
      <gmd:contact>
        <gmd:CI_ResponsibleParty>
          <gmd:organisationName xsi:type="gmd:PT_FreeText_PropertyType">
            <gco:CharacterString>Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gco:CharacterString>
            <gmd:PT_FreeText>
              <gmd:textGroup>
                <gmd:LocalisedCharacterString locale="#DUT">Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gmd:LocalisedCharacterString>
              </gmd:textGroup>
            </gmd:PT_FreeText>
          </gmd:organisationName>
          <gmd:contactInfo>
            <gmd:CI_Contact>
              <gmd:address>
                <gmd:CI_Address>
                  <gmd:electronicMailAddress>
                    <gco:CharacterString>opendata@knmi.nl</gco:CharacterString>
                  </gmd:electronicMailAddress>
                </gmd:CI_Address>
              </gmd:address>
            </gmd:CI_Contact>
          </gmd:contactInfo>
          <gmd:role>
            <gmd:CI_RoleCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_RoleCode" codeListValue="pointOfContact" />
          </gmd:role>
        </gmd:CI_ResponsibleParty>
      </gmd:contact>
      <gmd:dateStamp>
        <gco:Date>2021-01-08</gco:Date>
      </gmd:dateStamp>
      <gmd:metadataStandardName>
        <gco:CharacterString>ISO 19115</gco:CharacterString>
      </gmd:metadataStandardName>
      <gmd:metadataStandardVersion>
        <gco:CharacterString>ISO 19115:2003 NL Kernset 1.3 KNMI 1.1</gco:CharacterString>
      </gmd:metadataStandardVersion>
      <gmd:locale>
        <gmd:PT_Locale id="DUT">
          <gmd:languageCode>
            <gmd:LanguageCode codeList="http://www.loc.gov/standards/iso639-2/" codeListValue="dut" />
          </gmd:languageCode>
          <gmd:characterEncoding>
            <gmd:MD_CharacterSetCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_CharacterSetCode" codeListValue="" />
          </gmd:characterEncoding>
        </gmd:PT_Locale>
      </gmd:locale>
      <gmd:referenceSystemInfo>
        <gmd:MD_ReferenceSystem>
          <gmd:referenceSystemIdentifier>
            <gmd:RS_Identifier>
              <gmd:code>
                <gco:CharacterString>http://www.opengis.net/def/crs/EPSG/0/28992</gco:CharacterString>
              </gmd:code>
            </gmd:RS_Identifier>
          </gmd:referenceSystemIdentifier>
        </gmd:MD_ReferenceSystem>
      </gmd:referenceSystemInfo>
      <gmd:identificationInfo>
        <gmd:MD_DataIdentification>
          <gmd:citation>
            <gmd:CI_Citation>
              <gmd:title xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Clouds - cloud cover retrieved from infrared measurements at 10 minute intervals at CESAR observatory</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Wolken - bedekkingsgraad bepaald uit infraroodmetingen per 10 minuten voor CESAR observatorium</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:title>
              <gmd:date>
                <gmd:CI_Date>
                  <gmd:date>
                    <gco:Date>2021-01-08</gco:Date>
                  </gmd:date>
                  <gmd:dateType>
                    <gmd:CI_DateTypeCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_DateTypeCode" codeListValue="publication" />
                  </gmd:dateType>
                </gmd:CI_Date>
              </gmd:date>
              <gmd:edition>
                <gco:CharacterString>1</gco:CharacterString>
              </gmd:edition>
              <gmd:identifier>
                <gmd:MD_Identifier>
                  <gmd:code>
                    <gco:CharacterString>urn:xkdc:ds:nl.knmi::cesar_nubiscope_cldcov_la1_t10/v1.0/</gco:CharacterString>
                  </gmd:code>
                </gmd:MD_Identifier>
              </gmd:identifier>
            </gmd:CI_Citation>
          </gmd:citation>
          <gmd:abstract xsi:type="gmd:PT_FreeText_PropertyType">
            <gco:CharacterString>Four cloud cover parameters are retrieved continuously from sky temperature measurements by a scanning infrared radiometer (NubiScope). These parameters are resp. total, low -, middle - and high level cloud cover. Only measurements 20 degrees above horizon are used to create a hemispherical cloud mask. The temperature deviation of a sky pixel from an estimated background sky temperature determines whether a pixel is considered to be cloudy or clear sky. For more information about CESAR: https://ruisdael-observatory.nl/cesar/</gco:CharacterString>
            <gmd:PT_FreeText>
              <gmd:textGroup>
                <gmd:LocalisedCharacterString locale="#DUT">Bedekkingsgraad van wolken (totaal, lage -, middel - en hoge bewolking) op basis van infrarood (IR) metingen met een scannende pyrometer (NubiScope) op locatie CESAR Observatory. De afwijking van de temperatuur van een pixel tov de geschatte achtergrondtemperatuur bepaalt of een pixel als bewolkt of onbewolkt wordt geclassificeerd. Voor meer informatie over CESAR: https://ruisdael-observatory.nl/cesar/</gmd:LocalisedCharacterString>
              </gmd:textGroup>
            </gmd:PT_FreeText>
          </gmd:abstract>
          <gmd:purpose xsi:type="gmd:PT_FreeText_PropertyType">
            <gco:CharacterString>scientific atmospheric research</gco:CharacterString>
            <gmd:PT_FreeText>
              <gmd:textGroup>
                <gmd:LocalisedCharacterString locale="#DUT">wetenschappelijk atmosferisch onderzoek</gmd:LocalisedCharacterString>
              </gmd:textGroup>
            </gmd:PT_FreeText>
          </gmd:purpose>
          <gmd:status>
            <gmd:MD_ProgressCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_ProgressCode" codeListValue="onGoing" />
          </gmd:status>
          <gmd:pointOfContact>
            <gmd:CI_ResponsibleParty>
              <gmd:organisationName xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:organisationName>
              <gmd:contactInfo>
                <gmd:CI_Contact>
                  <gmd:address>
                    <gmd:CI_Address>
                      <gmd:electronicMailAddress>
                        <gco:CharacterString>opendata@knmi.nl</gco:CharacterString>
                      </gmd:electronicMailAddress>
                    </gmd:CI_Address>
                  </gmd:address>
                </gmd:CI_Contact>
              </gmd:contactInfo>
              <gmd:role>
                <gmd:CI_RoleCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_RoleCode" codeListValue="pointOfContact" />
              </gmd:role>
            </gmd:CI_ResponsibleParty>
          </gmd:pointOfContact>
          <gmd:resourceMaintenance>
            <gmd:MD_MaintenanceInformation>
              <gmd:maintenanceAndUpdateFrequency>
                <gmd:MD_MaintenanceFrequencyCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_MaintenanceFrequencyCode" codeListValue="asNeeded" />
              </gmd:maintenanceAndUpdateFrequency>
            </gmd:MD_MaintenanceInformation>
          </gmd:resourceMaintenance>
          <gmd:descriptiveKeywords>
            <gmd:MD_Keywords>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Clouds</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Wolken</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Cloud cover</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Wolken bedekkingsgraad</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Infrared</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Infrarood</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Pyrometer</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Pyrometer</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>CESAR</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">CESAR</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Cabauw</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Cabauw</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:thesaurusName>
                <gmd:CI_Citation>
                  <gmd:title>
                    <gco:CharacterString>DG Discovery Properties Vocabulary 1.0</gco:CharacterString>
                  </gmd:title>
                  <gmd:date>
                    <gmd:CI_Date>
                      <gmd:date>
                        <gco:Date>2013-01-01</gco:Date>
                      </gmd:date>
                      <gmd:dateType>
                        <gmd:CI_DateTypeCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_DateTypeCode" codeListValue="publication" />
                      </gmd:dateType>
                    </gmd:CI_Date>
                  </gmd:date>
                </gmd:CI_Citation>
              </gmd:thesaurusName>
            </gmd:MD_Keywords>
          </gmd:descriptiveKeywords>
          <gmd:descriptiveKeywords>
            <gmd:MD_Keywords>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Open data</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Open data</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Ruisdael</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Ruisdael</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
            </gmd:MD_Keywords>
          </gmd:descriptiveKeywords>
          <gmd:resourceConstraints>
            <gmd:MD_Constraints>
              <gmd:useLimitation xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>No use limitations</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Geen gebruiksbeperkingen</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:useLimitation>
            </gmd:MD_Constraints>
          </gmd:resourceConstraints>
          <gmd:resourceConstraints>
            <gmd:MD_LegalConstraints>
              <gmd:accessConstraints>
                <gmd:MD_RestrictionCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_RestrictionCode" codeListValue="otherRestrictions" />
              </gmd:accessConstraints>
              <gmd:otherConstraints>
                <gco:CharacterString>https://creativecommons.org/publicdomain/zero/1.0/deed.nl</gco:CharacterString>
              </gmd:otherConstraints>
            </gmd:MD_LegalConstraints>
          </gmd:resourceConstraints>
          <gmd:resourceConstraints>
            <gmd:MD_SecurityConstraints>
              <gmd:classification>
                <gmd:MD_ClassificationCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_ClassificationCode" codeListValue="unclassified" />
              </gmd:classification>
            </gmd:MD_SecurityConstraints>
          </gmd:resourceConstraints>
          <gmd:spatialResolution>
            <gmd:MD_Resolution>
              <gmd:equivalentScale>
                <gmd:MD_RepresentativeFraction>
                  <gmd:denominator>
                    <gco:Integer>1</gco:Integer>
                  </gmd:denominator>
                </gmd:MD_RepresentativeFraction>
              </gmd:equivalentScale>
            </gmd:MD_Resolution>
          </gmd:spatialResolution>
          <gmd:language>
            <gmd:LanguageCode codeList="http://www.loc.gov/standards/iso639-2/" codeListValue="eng" />
          </gmd:language>
          <gmd:characterSet>
            <gmd:MD_CharacterSetCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_CharacterSetCode" codeListValue="utf8" />
          </gmd:characterSet>
          <gmd:topicCategory>
            <gmd:MD_TopicCategoryCode>climatologyMeteorologyAtmosphere</gmd:MD_TopicCategoryCode>
          </gmd:topicCategory>
          <gmd:extent>
            <gmd:EX_Extent>
              <gmd:geographicElement>
                <gmd:EX_GeographicBoundingBox>
                  <gmd:westBoundLongitude>
                    <gco:Decimal>4.93</gco:Decimal>
                  </gmd:westBoundLongitude>
                  <gmd:eastBoundLongitude>
                    <gco:Decimal>4.93</gco:Decimal>
                  </gmd:eastBoundLongitude>
                  <gmd:southBoundLatitude>
                    <gco:Decimal>51.97</gco:Decimal>
                  </gmd:southBoundLatitude>
                  <gmd:northBoundLatitude>
                    <gco:Decimal>51.97</gco:Decimal>
                  </gmd:northBoundLatitude>
                </gmd:EX_GeographicBoundingBox>
              </gmd:geographicElement>
              <gmd:temporalElement>
                <gmd:EX_TemporalExtent>
                  <gmd:extent>
                    <gml:TimePeriod gml:id="d7669e433a1052958">
                      <gml:beginPosition>2008-05-01</gml:beginPosition>
                      <gml:endPosition>2017-04-30</gml:endPosition>
                    </gml:TimePeriod>
                  </gmd:extent>
                </gmd:EX_TemporalExtent>
              </gmd:temporalElement>
            </gmd:EX_Extent>
          </gmd:extent>
          <gmd:supplementalInformation xsi:type="gmd:PT_FreeText_PropertyType">
            <gco:CharacterString>This dataset was orginally distributed via the CESAR Database System under the full dataset name: cesar_nubiscope_cldcov_la1_t10, v1.0</gco:CharacterString>
            <gmd:PT_FreeText>
              <gmd:textGroup>
                <gmd:LocalisedCharacterString locale="#DUT">Deze dataset was oorspronkelijk gepubliceerd via het CESAR Database Sytem onder de naam: cesar_nubiscope_cldcov_la1_t10, v1.0</gmd:LocalisedCharacterString>
              </gmd:textGroup>
            </gmd:PT_FreeText>
          </gmd:supplementalInformation>
        </gmd:MD_DataIdentification>
      </gmd:identificationInfo>
      <gmd:distributionInfo>
        <gmd:MD_Distribution>
          <gmd:distributionFormat>
            <gmd:MD_Format>
              <gmd:name>
                <gco:CharacterString>NetCDF</gco:CharacterString>
              </gmd:name>
              <gmd:version>
                <gco:CharacterString>3</gco:CharacterString>
              </gmd:version>
              <gmd:specification>
                <gco:CharacterString>CF</gco:CharacterString>
              </gmd:specification>
            </gmd:MD_Format>
          </gmd:distributionFormat>
          <gmd:distributor>
            <gmd:MD_Distributor>
              <gmd:distributorContact>
                <gmd:CI_ResponsibleParty>
                  <gmd:organisationName xsi:type="gmd:PT_FreeText_PropertyType">
                    <gco:CharacterString>Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gco:CharacterString>
                    <gmd:PT_FreeText>
                      <gmd:textGroup>
                        <gmd:LocalisedCharacterString locale="#DUT">Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gmd:LocalisedCharacterString>
                      </gmd:textGroup>
                    </gmd:PT_FreeText>
                  </gmd:organisationName>
                  <gmd:contactInfo>
                    <gmd:CI_Contact>
                      <gmd:address>
                        <gmd:CI_Address>
                          <gmd:electronicMailAddress>
                            <gco:CharacterString>opendata@knmi.nl</gco:CharacterString>
                          </gmd:electronicMailAddress>
                        </gmd:CI_Address>
                      </gmd:address>
                    </gmd:CI_Contact>
                  </gmd:contactInfo>
                  <gmd:role>
                    <gmd:CI_RoleCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_RoleCode" codeListValue="pointOfContact" />
                  </gmd:role>
                </gmd:CI_ResponsibleParty>
              </gmd:distributorContact>
            </gmd:MD_Distributor>
          </gmd:distributor>
          <gmd:transferOptions>
            <gmd:MD_DigitalTransferOptions>
              <gmd:onLine>
                <gmd:CI_OnlineResource>
                  <gmd:linkage>
                    <gmd:URL>https://dataplatform.knmi.nl/catalog/datasets/index.html?x-dataset=cesar_nubiscope_cldcov_la1_t10&amp;x-dataset-version=v1.0</gmd:URL>
                  </gmd:linkage>
                  <gmd:protocol>
                    <gco:CharacterString>landingpage</gco:CharacterString>
                  </gmd:protocol>
                  <gmd:name>
                    <gco:CharacterString>KNMI Data Platform</gco:CharacterString>
                  </gmd:name>
                </gmd:CI_OnlineResource>
              </gmd:onLine>
            </gmd:MD_DigitalTransferOptions>
          </gmd:transferOptions>
        </gmd:MD_Distribution>
      </gmd:distributionInfo>
      <gmd:dataQualityInfo>
        <gmd:DQ_DataQuality>
          <gmd:scope>
            <gmd:DQ_Scope>
              <gmd:level>
                <gmd:MD_ScopeCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_ScopeCode" codeListValue="dataset" />
              </gmd:level>
            </gmd:DQ_Scope>
          </gmd:scope>
          <gmd:lineage>
            <gmd:LI_Lineage>
              <gmd:statement xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Sky brightness temperatures measured in one scan are analysed with software of the manufacturer IMK (nubiscope.eu). These programmes are 'scope.exe' for realtime and 'oncemore.exe' for postprocessing. Details of the processing are proprietary and not available. Data are postprocessed with IDL routine 'correct_nubiscope.pro' before the data are published.</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Hemeltemperatuur gemeten in een volledige scan worden geanalyseerd met software van fabrikant IMK (nubiscope.eu). Voor realtime is dit 'scope.exe', voor postprocessing is dat 'oncemore.exe'. Details van de analyse zijn eigendom van de fabrikant en niet openbaar. De uitvoergegevens van deze programma's worden nabewerkt met IDL routine 'correct_nubiscope.pro' voordat de data gepubliceerd worden.</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:statement>
            </gmd:LI_Lineage>
          </gmd:lineage>
        </gmd:DQ_DataQuality>
      </gmd:dataQualityInfo>
    </gmd:MD_Metadata>
    <gmd:MD_Metadata xmlns:gmd="http://www.isotc211.org/2005/gmd" xmlns:gco="http://www.isotc211.org/2005/gco" xmlns:gml="http://www.opengis.net/gml" xmlns:gmx="http://schemas.opengis.net/iso/19139/20060504/gmx/gmx.xsd" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:geonet="http://www.fao.org/geonetwork" xsi:schemaLocation="http://www.isotc211.org/2005/gmd http://schemas.opengis.net/iso/19139/20060504/gmd/gmd.xsd">
      <gmd:fileIdentifier>
        <gco:CharacterString>af12b8e5-9e31-4654-80c8-ca1f05c1f487</gco:CharacterString>
      </gmd:fileIdentifier>
      <gmd:language>
        <gmd:LanguageCode codeList="http://www.loc.gov/standards/iso639-2/" codeListValue="eng" />
      </gmd:language>
      <gmd:characterSet>
        <gmd:MD_CharacterSetCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_CharacterSetCode" codeListValue="utf8" />
      </gmd:characterSet>
      <gmd:hierarchyLevel>
        <gmd:MD_ScopeCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_ScopeCode" codeListValue="dataset" />
      </gmd:hierarchyLevel>
      <gmd:contact>
        <gmd:CI_ResponsibleParty>
          <gmd:organisationName xsi:type="gmd:PT_FreeText_PropertyType">
            <gco:CharacterString>Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gco:CharacterString>
            <gmd:PT_FreeText>
              <gmd:textGroup>
                <gmd:LocalisedCharacterString locale="#DUT">Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gmd:LocalisedCharacterString>
              </gmd:textGroup>
            </gmd:PT_FreeText>
          </gmd:organisationName>
          <gmd:contactInfo>
            <gmd:CI_Contact>
              <gmd:address>
                <gmd:CI_Address>
                  <gmd:electronicMailAddress>
                    <gco:CharacterString>opendata@knmi.nl</gco:CharacterString>
                  </gmd:electronicMailAddress>
                </gmd:CI_Address>
              </gmd:address>
            </gmd:CI_Contact>
          </gmd:contactInfo>
          <gmd:role>
            <gmd:CI_RoleCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_RoleCode" codeListValue="pointOfContact" />
          </gmd:role>
        </gmd:CI_ResponsibleParty>
      </gmd:contact>
      <gmd:dateStamp>
        <gco:Date>2019-11-18</gco:Date>
      </gmd:dateStamp>
      <gmd:metadataStandardName>
        <gco:CharacterString>ISO 19115</gco:CharacterString>
      </gmd:metadataStandardName>
      <gmd:metadataStandardVersion>
        <gco:CharacterString>ISO 19115:2003 NL Kernset 1.3 KNMI 1.1</gco:CharacterString>
      </gmd:metadataStandardVersion>
      <gmd:locale>
        <gmd:PT_Locale id="DUT">
          <gmd:languageCode>
            <gmd:LanguageCode codeList="http://www.loc.gov/standards/iso639-2/" codeListValue="dut" />
          </gmd:languageCode>
          <gmd:characterEncoding>
            <gmd:MD_CharacterSetCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_CharacterSetCode" codeListValue="" />
          </gmd:characterEncoding>
        </gmd:PT_Locale>
      </gmd:locale>
      <gmd:referenceSystemInfo>
        <gmd:MD_ReferenceSystem>
          <gmd:referenceSystemIdentifier>
            <gmd:RS_Identifier>
              <gmd:code>
                <gco:CharacterString>http://www.opengis.net/def/crs/EPSG/0/4326</gco:CharacterString>
              </gmd:code>
            </gmd:RS_Identifier>
          </gmd:referenceSystemIdentifier>
        </gmd:MD_ReferenceSystem>
      </gmd:referenceSystemInfo>
      <gmd:identificationInfo>
        <gmd:MD_DataIdentification>
          <gmd:citation>
            <gmd:CI_Citation>
              <gmd:title xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Groundwater - daily groundwater levels from 9 locations at Cabauw</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Grondwater - dagelijkse grondwaterstand voor 9 locaties in Cabauw</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:title>
              <gmd:date>
                <gmd:CI_Date>
                  <gmd:date>
                    <gco:Date>2019-09-25</gco:Date>
                  </gmd:date>
                  <gmd:dateType>
                    <gmd:CI_DateTypeCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_DateTypeCode" codeListValue="publication" />
                  </gmd:dateType>
                </gmd:CI_Date>
              </gmd:date>
              <gmd:edition>
                <gco:CharacterString>2</gco:CharacterString>
              </gmd:edition>
              <gmd:identifier>
                <gmd:MD_Identifier>
                  <gmd:code>
                    <gco:CharacterString>urn:xkdc:ds:nl.knmi::cesar_grndwater_level_la1_t1d/v1.0/</gco:CharacterString>
                  </gmd:code>
                </gmd:MD_Identifier>
              </gmd:identifier>
            </gmd:CI_Citation>
          </gmd:citation>
          <gmd:abstract xsi:type="gmd:PT_FreeText_PropertyType">
            <gco:CharacterString>Groundwater levels at Cabauw have been measured since August 2003 in two fields south of the tower. Nine piezometers were placed in a row. Initially, 6 of those piezometers contained pressure transducers (of the brand Keller) to measure levels automatically every 4 hours. On 9 July 2010, the temporal resolution was increased to hourly. Several sensors have stopped working since 2003. Piezometers that were not measured automatically were measured during each filed visit, which was initially every 2 weeks, but has become longer towards the end of the measurement period.</gco:CharacterString>
            <gmd:PT_FreeText>
              <gmd:textGroup>
                <gmd:LocalisedCharacterString locale="#DUT">Grondwaterniveaus in Cabauw zijn gemeten vanaf augustus 2003 op twee lokaties zuid van de mast. Negen piezometers werden op een rij geplaatst. In eerste instantie waren zes van de piezometers uitgerust met een druksensor (merk Keller) die elke 4 uur automatisch de grondwaterstand registreerde. Op 9 juli 2010 werd het interval teruggebracht naar 1 uur. Piezometers die niet geautomatiseerd waren, werden in eerste instantie elke 2 weken handmatig uitgelezen, maar deze periode werd langer naar het einde van de meetreeks.</gmd:LocalisedCharacterString>
              </gmd:textGroup>
            </gmd:PT_FreeText>
          </gmd:abstract>
          <gmd:status>
            <gmd:MD_ProgressCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_ProgressCode" codeListValue="completed" />
          </gmd:status>
          <gmd:pointOfContact>
            <gmd:CI_ResponsibleParty>
              <gmd:organisationName xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:organisationName>
              <gmd:contactInfo>
                <gmd:CI_Contact>
                  <gmd:address>
                    <gmd:CI_Address>
                      <gmd:electronicMailAddress>
                        <gco:CharacterString>opendata@knmi.nl</gco:CharacterString>
                      </gmd:electronicMailAddress>
                    </gmd:CI_Address>
                  </gmd:address>
                </gmd:CI_Contact>
              </gmd:contactInfo>
              <gmd:role>
                <gmd:CI_RoleCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_RoleCode" codeListValue="pointOfContact" />
              </gmd:role>
            </gmd:CI_ResponsibleParty>
          </gmd:pointOfContact>
          <gmd:resourceMaintenance>
            <gmd:MD_MaintenanceInformation>
              <gmd:maintenanceAndUpdateFrequency>
                <gmd:MD_MaintenanceFrequencyCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_MaintenanceFrequencyCode" codeListValue="notPlanned" />
              </gmd:maintenanceAndUpdateFrequency>
            </gmd:MD_MaintenanceInformation>
          </gmd:resourceMaintenance>
          <gmd:descriptiveKeywords>
            <gmd:MD_Keywords>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Groundwater</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Grondwater</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Groundwater level</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Grondwater niveau</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Piezometer</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Piezometer</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>CESAR</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">CESAR</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Cabauw</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Cabauw</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
              <gmd:thesaurusName>
                <gmd:CI_Citation>
                  <gmd:title>
                    <gco:CharacterString>DG Discovery Properties Vocabulary 1.0</gco:CharacterString>
                  </gmd:title>
                  <gmd:date>
                    <gmd:CI_Date>
                      <gmd:date>
                        <gco:Date>2013-01-01</gco:Date>
                      </gmd:date>
                      <gmd:dateType>
                        <gmd:CI_DateTypeCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_DateTypeCode" codeListValue="publication" />
                      </gmd:dateType>
                    </gmd:CI_Date>
                  </gmd:date>
                </gmd:CI_Citation>
              </gmd:thesaurusName>
            </gmd:MD_Keywords>
          </gmd:descriptiveKeywords>
          <gmd:descriptiveKeywords>
            <gmd:MD_Keywords>
              <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Ruisdael</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Ruisdael</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:keyword>
            </gmd:MD_Keywords>
          </gmd:descriptiveKeywords>
          <gmd:resourceConstraints>
            <gmd:MD_Constraints>
              <gmd:useLimitation xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>No use limitations</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Geen gebruiksbeperkingen</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:useLimitation>
            </gmd:MD_Constraints>
          </gmd:resourceConstraints>
          <gmd:resourceConstraints>
            <gmd:MD_LegalConstraints>
              <gmd:accessConstraints>
                <gmd:MD_RestrictionCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_RestrictionCode" codeListValue="otherRestrictions" />
              </gmd:accessConstraints>
              <gmd:otherConstraints>
                <gco:CharacterString>https://creativecommons.org/publicdomain/zero/1.0/deed.nl</gco:CharacterString>
              </gmd:otherConstraints>
            </gmd:MD_LegalConstraints>
          </gmd:resourceConstraints>
          <gmd:resourceConstraints>
            <gmd:MD_SecurityConstraints>
              <gmd:classification>
                <gmd:MD_ClassificationCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_ClassificationCode" codeListValue="unclassified" />
              </gmd:classification>
            </gmd:MD_SecurityConstraints>
          </gmd:resourceConstraints>
          <gmd:spatialResolution>
            <gmd:MD_Resolution>
              <gmd:equivalentScale>
                <gmd:MD_RepresentativeFraction>
                  <gmd:denominator>
                    <gco:Integer>1</gco:Integer>
                  </gmd:denominator>
                </gmd:MD_RepresentativeFraction>
              </gmd:equivalentScale>
            </gmd:MD_Resolution>
          </gmd:spatialResolution>
          <gmd:language>
            <gmd:LanguageCode codeList="http://www.loc.gov/standards/iso639-2/" codeListValue="eng" />
          </gmd:language>
          <gmd:characterSet>
            <gmd:MD_CharacterSetCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_CharacterSetCode" codeListValue="utf8" />
          </gmd:characterSet>
          <gmd:topicCategory>
            <gmd:MD_TopicCategoryCode>climatologyMeteorologyAtmosphere</gmd:MD_TopicCategoryCode>
          </gmd:topicCategory>
          <gmd:extent>
            <gmd:EX_Extent>
              <gmd:geographicElement>
                <gmd:EX_GeographicBoundingBox>
                  <gmd:westBoundLongitude>
                    <gco:Decimal>4.921</gco:Decimal>
                  </gmd:westBoundLongitude>
                  <gmd:eastBoundLongitude>
                    <gco:Decimal>4.929</gco:Decimal>
                  </gmd:eastBoundLongitude>
                  <gmd:southBoundLatitude>
                    <gco:Decimal>51.968</gco:Decimal>
                  </gmd:southBoundLatitude>
                  <gmd:northBoundLatitude>
                    <gco:Decimal>51.975</gco:Decimal>
                  </gmd:northBoundLatitude>
                </gmd:EX_GeographicBoundingBox>
              </gmd:geographicElement>
              <gmd:temporalElement>
                <gmd:EX_TemporalExtent>
                  <gmd:extent>
                    <gml:TimePeriod gml:id="d7669e433a1052958">
                      <gml:beginPosition>2003-01-01</gml:beginPosition>
                      <gml:endPosition>2011-12-31</gml:endPosition>
                    </gml:TimePeriod>
                  </gmd:extent>
                </gmd:EX_TemporalExtent>
              </gmd:temporalElement>
            </gmd:EX_Extent>
          </gmd:extent>
          <gmd:supplementalInformation xsi:type="gmd:PT_FreeText_PropertyType">
            <gco:CharacterString>This dataset was initial uploaded and distributed via CESAR Database System, CDS (www.cesar-database.nl). The full name in CDS was cesar_groundwater_leveldaily_la1_t1d, v1.0 A dataset description document can be downloaded from www.cesar-database.nl/ShowSystemDescription.do?datasetID=1173 (note the CDS datasetID=1166 but DDD is missing, both daily and hourly datasets have the same DDD)</gco:CharacterString>
            <gmd:PT_FreeText>
              <gmd:textGroup>
                <gmd:LocalisedCharacterString locale="#DUT">Deze dataset was oorspronkelijk beschikbaar via het CDS Database System (www.cesar-database.nl) Onder de volledige naam cesar_groundwater_leveldaily_la1_t1d,v1.0. Een dataset beschrijving kan worden gedownload van www.cesar-database.nl/ShowSystemDescription.do?datasetID=1173 (Let op: de CDS datasetID=1166 maar de DDD ontbreekt in het CDS. De uurlijkse en dagelijkse dataset hebben dezelfde DDD)</gmd:LocalisedCharacterString>
              </gmd:textGroup>
            </gmd:PT_FreeText>
          </gmd:supplementalInformation>
        </gmd:MD_DataIdentification>
      </gmd:identificationInfo>
      <gmd:distributionInfo>
        <gmd:MD_Distribution>
          <gmd:distributionFormat>
            <gmd:MD_Format>
              <gmd:name>
                <gco:CharacterString>NetCDF</gco:CharacterString>
              </gmd:name>
              <gmd:version>
                <gco:CharacterString>3</gco:CharacterString>
              </gmd:version>
              <gmd:specification>
                <gco:CharacterString>CF</gco:CharacterString>
              </gmd:specification>
            </gmd:MD_Format>
          </gmd:distributionFormat>
          <gmd:distributor>
            <gmd:MD_Distributor>
              <gmd:distributorContact>
                <gmd:CI_ResponsibleParty>
                  <gmd:organisationName xsi:type="gmd:PT_FreeText_PropertyType">
                    <gco:CharacterString>Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gco:CharacterString>
                    <gmd:PT_FreeText>
                      <gmd:textGroup>
                        <gmd:LocalisedCharacterString locale="#DUT">Koninklijk Nederlands Meteorologisch Instituut (KNMI)</gmd:LocalisedCharacterString>
                      </gmd:textGroup>
                    </gmd:PT_FreeText>
                  </gmd:organisationName>
                  <gmd:contactInfo>
                    <gmd:CI_Contact>
                      <gmd:address>
                        <gmd:CI_Address>
                          <gmd:electronicMailAddress>
                            <gco:CharacterString>opendata@knmi.nl</gco:CharacterString>
                          </gmd:electronicMailAddress>
                        </gmd:CI_Address>
                      </gmd:address>
                    </gmd:CI_Contact>
                  </gmd:contactInfo>
                  <gmd:role>
                    <gmd:CI_RoleCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_RoleCode" codeListValue="pointOfContact" />
                  </gmd:role>
                </gmd:CI_ResponsibleParty>
              </gmd:distributorContact>
            </gmd:MD_Distributor>
          </gmd:distributor>
          <gmd:transferOptions>
            <gmd:MD_DigitalTransferOptions>
              <gmd:onLine>
                <gmd:CI_OnlineResource>
                  <gmd:linkage>
                    <gmd:URL>https://dataplatform.knmi.nl/catalog/datasets/index.html?x-dataset=cesar_grndwater_level_la1_t1d&amp;x-dataset-version=v1.0</gmd:URL>
                  </gmd:linkage>
                  <gmd:protocol>
                    <gco:CharacterString>landingpage</gco:CharacterString>
                  </gmd:protocol>
                  <gmd:name>
                    <gco:CharacterString>KNMI Data Platform</gco:CharacterString>
                  </gmd:name>
                </gmd:CI_OnlineResource>
              </gmd:onLine>
            </gmd:MD_DigitalTransferOptions>
          </gmd:transferOptions>
        </gmd:MD_Distribution>
      </gmd:distributionInfo>
      <gmd:dataQualityInfo>
        <gmd:DQ_DataQuality>
          <gmd:scope>
            <gmd:DQ_Scope>
              <gmd:level>
                <gmd:MD_ScopeCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_ScopeCode" codeListValue="dataset" />
              </gmd:level>
            </gmd:DQ_Scope>
          </gmd:scope>
          <gmd:lineage>
            <gmd:LI_Lineage>
              <gmd:statement xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Dataset has been gap filled (see dataset description document)</gco:CharacterString>
                <gmd:PT_FreeText>
                  <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DUT">Ontbrekende gegevens in deze dataset zijn aangevuld (zie dataset description document)</gmd:LocalisedCharacterString>
                  </gmd:textGroup>
                </gmd:PT_FreeText>
              </gmd:statement>
            </gmd:LI_Lineage>
          </gmd:lineage>
        </gmd:DQ_DataQuality>
      </gmd:dataQualityInfo>
    </gmd:MD_Metadata>
  </csw:SearchResults>
</csw:GetRecordsResponse>
`;

const ogc = require("ogc-schemas");
const w3c = require("w3c-schemas");
const Jsonix = require("jsonix").Jsonix;

const context = new Jsonix.Context(
    [
        ogc.OWS_1_0_0,
        ogc.DC_1_1,
        ogc.DCT,
        w3c.XLink_1_0,
        ogc.SMIL_2_0,
        ogc.SMIL_2_0_Language,
        ogc.GML_3_1_1,
        ogc.Filter_1_1_0,
        ogc.CSW_2_0_2,
        ogc.GML_3_1_1,
        ogc.ISO19139_GMD_20070417,
        ogc.ISO19139_GCO_20070417,
        ogc.ISO19139_GTS_20070417,
        ogc.ISO19139_GSS_20070417,
        ogc.ISO19139_GSR_20070417,
        ogc.GML_3_2_1,
    ],
    {
        mappingStyle: "simplified",
        namespacePrefixes: {
            "http://www.opengis.net/cat/csw/2.0.2": "csw",
            "http://www.opengis.net/ogc": "ogc",
            "http://www.opengis.net/gml": "gml",
            "http://purl.org/dc/elements/1.1/": "dc",
            "http://purl.org/dc/terms/": "dct",
            "http://www.isotc211.org/2005/gmd": "gmd",
        },
    }
);

const unmarshaller = context.createUnmarshaller();

const data = unmarshaller.unmarshalString(string);
require("fs").writeFileSync("data.json", JSON.stringify(data, null, 2));

var cswConfig = [
    {
        namespacePrefixes: {
            "http://www.opengis.net/cat/csw/2.0.2": "csw",
            "http://www.opengis.net/ogc": "ogc",
            "http://www.opengis.net/gml": "gml",
            "http://purl.org/dc/elements/1.1/": "dc",
            "http://purl.org/dc/terms/": "dct",
            "http://www.opengis.net/cat/csw/2.0.2": "csw",
        },
    },
];
