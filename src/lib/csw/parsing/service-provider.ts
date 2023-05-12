import { ElementWrapper, text } from "./utils";

export function parseServiceProvider(el?: ElementWrapper) {
    if (!el) {
        return undefined;
    }
    return {
        providerName: el.getOne("ProviderName")!.text(),
        providerSite: el.getOne("ProviderSite")?.text(),
        serviceContact: parseServiceContact(el.getOne("ServiceContact")!),
    };
}

function parseServiceContact(el: ElementWrapper) {
    return {
        individualName: el.getOne("IndividualName")?.text(),
        positionName: el.getOne("PositionName")?.text(),
        contactInfo: parseContactInfo(el.getOne("ContactInfo")),
        role: el.getOne("Role")?.text(),
    };
}
function parseContactInfo(el?: ElementWrapper) {
    if (!el) {
        return undefined;
    }

    return {
        phone: parsePhone(el.getOne("Phone")),
        address: parseAddress(el.getOne("Address")),
        onlineResource: el.getOne("OnlineResource")?.text(),
        hoursOfService: el.getOne("HoursOfService")?.text(),
        contactInstructions: el.getOne("ContactInstructions")?.text(),
    };
}

function parsePhone(el?: ElementWrapper) {
    if (!el) {
        return undefined;
    }

    return {
        voice: el.get("Voice").map(text),
        facsimile: el.get("Facsimile").map(text),
    };
}

function parseAddress(el?: ElementWrapper) {
    if (!el) {
        return undefined;
    }

    return {
        deliveryPoint: el.get("DeliveryPoint").map(text),
        city: el.getOne("City")?.text(),
        administrativeArea: el.getOne("AdministrativeArea")?.text(),
        postalCode: el.getOne("PostalCode")?.text(),
        country: el.getOne("Country")?.text(),
        electronicMailAddress: el.get("ElectronicMailAddress").map(text),
    };
}

/*
        function parseServiceProvider(serviceProvider: ElementCompact) {
            return {
                providerName: serviceProvider.providerName._text,
                providerSite: serviceProvider.providerSite?._text,
                serviceContact: {
                    individualName:
                        serviceProvider.serviceContact.individualName?._text,
                    positionName:
                        serviceProvider.serviceContact.positionName?._text,
                    contactInfo: {
                        phone: serviceProvider.serviceContact.contactInfo.phone
                            ? {
                                  voice: capabilities.capabilities
                                      .serviceProvider.serviceContact
                                      .contactInfo.phone.voice?._text,
                                  facsimile:
                                      serviceProvider.serviceContact.contactInfo
                                          .phone.facsimile?._text,
                              }
                            : undefined,
                        address: serviceProvider.serviceContact.contactInfo
                            .address
                            ? {
                                  deliveryPoint: parseArray(
                                      serviceProvider.serviceContact.contactInfo
                                          .address.deliveryPoint
                                  ).map((point: any) => point._text),
                                  city: serviceProvider.serviceContact
                                      .contactInfo.address.city?._text,
                                  administrativeArea:
                                      serviceProvider.serviceContact.contactInfo
                                          .address.administrativeArea?._text,
                                  postalCode:
                                      serviceProvider.serviceContact.contactInfo
                                          .address.postalCode?._text,
                                  country:
                                      serviceProvider.serviceContact.contactInfo
                                          .address.country?._text,
                                  electronicMailAddress: parseArray(
                                      serviceProvider.serviceContact.contactInfo
                                          .address.electronicMailAddress
                                  ),
                              }
                            : undefined,
                        onlineResource:
                            serviceProvider.serviceContact.contactInfo
                                .onlineResource?._text,
                        hoursOfService:
                            serviceProvider.serviceContact.contactInfo
                                .hoursOfService?._text,
                        contactInstructions:
                            serviceProvider.serviceContact.contactInfo
                                .contactInstructions?._text,
                    },
                    role: serviceProvider.serviceContact.role?._text,
                },
            };
        }
        */
