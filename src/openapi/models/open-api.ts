interface OpenApi {
  openapi: string;
  info: Info;
  servers?: Server[];
  paths: { [key: string]: Path };
}

interface Info {
  title: string;
  description?: string;
  termsOfService?: string;
  contact?: Contact;
  license?: License;
  version: string;
}

interface Contact {
  name: string;
  url: string;
  email: string;
}

interface License {
  name: string;
  url?: string;
}

interface Server {
  url: string;
  description?: string;
  variables?: { [key: string]: ServerVariable };
}

interface ServerVariable {
  enum: string[];
  default: string;
  description: string;
}

interface Path {
  $ref?: string;
  summary?: string;
  description?: string;
  get?: Operation;
  put?: Operation;
  post?: Operation;
  delete?: Operation;
  options?: Operation;
  head?: Operation;
  patch?: Operation;
  trace?: Operation;
  servers?: Server[];
}

interface Operation {
  tags?: string[];
  summary?: string;
  description?: string;
  externalDocs?: ExternalDocs;
  operationId: string;
  parameters: (Parameter | Reference)[];
  requestBody; // TODO
}

interface ExternalDocs {
  description: string;
  url: string;
}

interface Parameter {
  name: string;
  in: 'query' | 'header' | 'path' | 'cookie';
  description?: string;
  required?: boolean;
  deprecated?: boolean;
  allowEmptyValue?: boolean;
}

interface Reference {
  $ref: string;
}

interface RequestBody {
  description?: string;
  content; //TODO
}

interface MediaType {
  // TODO
}

interface Components {}
