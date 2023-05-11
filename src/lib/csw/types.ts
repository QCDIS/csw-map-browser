export type CswCapabilities = {
    serviceIdentification: ServiceIdentification;
    serviceProvider: ServiceProvider;
};

export type ServiceIdentification = {
    title: string;
    abstract: string;
    keywords: string[];
    serviceType: string;
    serviceTypeVersions: string[];
    fees: string;
    accessConstraints: string;
};

export type ServiceProvider = {
    providerName: string;
    providerSite: string;
    serviceContact: ServiceContact;
};

export type ServiceContact = {
    individualName: string;
    positionName: string;
    contactInfo: ContactInfo;
    role: string;
};

export type ContactInfo = {
    phone: Phone;
    address: Address;
    onlineResource: string;
    hoursOfService: string;
    contactInstructions: string;
};

export type Phone = {
    voice: string;
    facsimile: string;
};

export type Address = {
    deliveryPoint: string;
    city: string;
    administrativeArea: string;
    postalCode: string;
    country: string;
    electronicMailAddress: string;
};

export type OperationsMetadata = {};

export type FilterCapabilities = {
    spatialCapabilities: SpatialCapabilities;
    scalarCapabilities: ScalarCapabilities;
    idCapabilities: IdCapabilities;
};

export type SpatialCapabilities = {
    spatialOperators: SpatialOperator[];
};

export type GeometryOperand = {
    name: string;
};

export type SpatialOperator = {
    name: string;
};

export type ScalarCapabilities = {
    logicalOperators: LogicalOperator[];
    comparisonOperators: ComparisonOperator[];
};

export type LogicalOperator = {
    name: string;
};

export type ComparisonOperator = {
    name: string;
};

export type IdCapabilities = {
    idOperators: IdOperator[];
};

export type IdOperator = {
    name: string;
};
