
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/wasm.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.20.0
 * Query Engine version: 06fc58a368dc7be9fbbbe894adf8d445d208c284
 */
Prisma.prismaVersion = {
  client: "5.20.0",
  engine: "06fc58a368dc7be9fbbbe894adf8d445d208c284"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AccountScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  type: 'type',
  provider: 'provider',
  providerAccountId: 'providerAccountId',
  refresh_token: 'refresh_token',
  access_token: 'access_token',
  expires_at: 'expires_at',
  expires_in: 'expires_in',
  ext_expires_in: 'ext_expires_in',
  token_type: 'token_type',
  scope: 'scope',
  id_token: 'id_token',
  session_state: 'session_state',
  refresh_token_expires_in: 'refresh_token_expires_in',
  created_at: 'created_at'
};

exports.Prisma.RelationLoadStrategy = {
  query: 'query',
  join: 'join'
};

exports.Prisma.SessionScalarFieldEnum = {
  id: 'id',
  sessionToken: 'sessionToken',
  userId: 'userId',
  expires: 'expires'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  emailVerified: 'emailVerified',
  password: 'password',
  image: 'image',
  admin: 'admin',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  featureFlags: 'featureFlags'
};

exports.Prisma.VerificationTokenScalarFieldEnum = {
  identifier: 'identifier',
  token: 'token',
  expires: 'expires'
};

exports.Prisma.OrganizationScalarFieldEnum = {
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  cloudConfig: 'cloudConfig'
};

exports.Prisma.ProjectScalarFieldEnum = {
  id: 'id',
  orgId: 'orgId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  name: 'name'
};

exports.Prisma.ApiKeyScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  note: 'note',
  publicKey: 'publicKey',
  hashedSecretKey: 'hashedSecretKey',
  fastHashedSecretKey: 'fastHashedSecretKey',
  displaySecretKey: 'displaySecretKey',
  lastUsedAt: 'lastUsedAt',
  expiresAt: 'expiresAt',
  projectId: 'projectId'
};

exports.Prisma.LlmApiKeysScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  provider: 'provider',
  adapter: 'adapter',
  displaySecretKey: 'displaySecretKey',
  secretKey: 'secretKey',
  baseURL: 'baseURL',
  customModels: 'customModels',
  withDefaultModels: 'withDefaultModels',
  config: 'config',
  projectId: 'projectId'
};

exports.Prisma.OrganizationMembershipScalarFieldEnum = {
  id: 'id',
  orgId: 'orgId',
  userId: 'userId',
  role: 'role',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ProjectMembershipScalarFieldEnum = {
  orgMembershipId: 'orgMembershipId',
  projectId: 'projectId',
  userId: 'userId',
  role: 'role',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.MembershipInvitationScalarFieldEnum = {
  id: 'id',
  email: 'email',
  orgId: 'orgId',
  orgRole: 'orgRole',
  projectId: 'projectId',
  projectRole: 'projectRole',
  invitedByUserId: 'invitedByUserId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.TraceSessionScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  projectId: 'projectId',
  bookmarked: 'bookmarked',
  public: 'public'
};

exports.Prisma.TraceScalarFieldEnum = {
  id: 'id',
  externalId: 'externalId',
  timestamp: 'timestamp',
  name: 'name',
  userId: 'userId',
  metadata: 'metadata',
  release: 'release',
  version: 'version',
  projectId: 'projectId',
  public: 'public',
  bookmarked: 'bookmarked',
  tags: 'tags',
  input: 'input',
  output: 'output',
  sessionId: 'sessionId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ObservationScalarFieldEnum = {
  id: 'id',
  traceId: 'traceId',
  projectId: 'projectId',
  type: 'type',
  startTime: 'startTime',
  endTime: 'endTime',
  name: 'name',
  metadata: 'metadata',
  parentObservationId: 'parentObservationId',
  level: 'level',
  statusMessage: 'statusMessage',
  version: 'version',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  model: 'model',
  internalModel: 'internalModel',
  internalModelId: 'internalModelId',
  modelParameters: 'modelParameters',
  input: 'input',
  output: 'output',
  promptTokens: 'promptTokens',
  completionTokens: 'completionTokens',
  totalTokens: 'totalTokens',
  unit: 'unit',
  inputCost: 'inputCost',
  outputCost: 'outputCost',
  totalCost: 'totalCost',
  calculatedInputCost: 'calculatedInputCost',
  calculatedOutputCost: 'calculatedOutputCost',
  calculatedTotalCost: 'calculatedTotalCost',
  completionStartTime: 'completionStartTime',
  promptId: 'promptId'
};

exports.Prisma.ScoreScalarFieldEnum = {
  id: 'id',
  timestamp: 'timestamp',
  projectId: 'projectId',
  name: 'name',
  value: 'value',
  source: 'source',
  authorUserId: 'authorUserId',
  comment: 'comment',
  traceId: 'traceId',
  observationId: 'observationId',
  configId: 'configId',
  stringValue: 'stringValue',
  queueId: 'queueId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  dataType: 'dataType'
};

exports.Prisma.ScoreConfigScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  projectId: 'projectId',
  name: 'name',
  dataType: 'dataType',
  isArchived: 'isArchived',
  minValue: 'minValue',
  maxValue: 'maxValue',
  categories: 'categories',
  description: 'description'
};

exports.Prisma.AnnotationQueueScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  scoreConfigIds: 'scoreConfigIds',
  projectId: 'projectId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AnnotationQueueItemScalarFieldEnum = {
  id: 'id',
  queueId: 'queueId',
  objectId: 'objectId',
  objectType: 'objectType',
  status: 'status',
  lockedAt: 'lockedAt',
  lockedByUserId: 'lockedByUserId',
  annotatorUserId: 'annotatorUserId',
  completedAt: 'completedAt',
  projectId: 'projectId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CronJobsScalarFieldEnum = {
  name: 'name',
  lastRun: 'lastRun',
  jobStartedAt: 'jobStartedAt',
  state: 'state'
};

exports.Prisma.DatasetScalarFieldEnum = {
  id: 'id',
  projectId: 'projectId',
  name: 'name',
  description: 'description',
  metadata: 'metadata',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.DatasetItemScalarFieldEnum = {
  id: 'id',
  projectId: 'projectId',
  status: 'status',
  input: 'input',
  expectedOutput: 'expectedOutput',
  metadata: 'metadata',
  sourceTraceId: 'sourceTraceId',
  sourceObservationId: 'sourceObservationId',
  datasetId: 'datasetId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.DatasetRunsScalarFieldEnum = {
  id: 'id',
  projectId: 'projectId',
  name: 'name',
  description: 'description',
  metadata: 'metadata',
  datasetId: 'datasetId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.DatasetRunItemsScalarFieldEnum = {
  id: 'id',
  projectId: 'projectId',
  datasetRunId: 'datasetRunId',
  datasetItemId: 'datasetItemId',
  traceId: 'traceId',
  observationId: 'observationId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.EventsScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  projectId: 'projectId',
  data: 'data',
  headers: 'headers',
  url: 'url',
  method: 'method'
};

exports.Prisma.CommentScalarFieldEnum = {
  id: 'id',
  projectId: 'projectId',
  objectType: 'objectType',
  objectId: 'objectId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  content: 'content',
  authorUserId: 'authorUserId'
};

exports.Prisma.PromptScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  projectId: 'projectId',
  createdBy: 'createdBy',
  prompt: 'prompt',
  name: 'name',
  version: 'version',
  type: 'type',
  isActive: 'isActive',
  config: 'config',
  tags: 'tags',
  labels: 'labels'
};

exports.Prisma.ModelScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  projectId: 'projectId',
  modelName: 'modelName',
  matchPattern: 'matchPattern',
  startDate: 'startDate',
  inputPrice: 'inputPrice',
  outputPrice: 'outputPrice',
  totalPrice: 'totalPrice',
  unit: 'unit',
  tokenizerId: 'tokenizerId',
  tokenizerConfig: 'tokenizerConfig'
};

exports.Prisma.AuditLogScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  userId: 'userId',
  orgId: 'orgId',
  userOrgRole: 'userOrgRole',
  projectId: 'projectId',
  userProjectRole: 'userProjectRole',
  resourceType: 'resourceType',
  resourceId: 'resourceId',
  action: 'action',
  before: 'before',
  after: 'after'
};

exports.Prisma.EvalTemplateScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  projectId: 'projectId',
  name: 'name',
  version: 'version',
  prompt: 'prompt',
  model: 'model',
  provider: 'provider',
  modelParams: 'modelParams',
  vars: 'vars',
  outputSchema: 'outputSchema'
};

exports.Prisma.JobConfigurationScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  projectId: 'projectId',
  jobType: 'jobType',
  status: 'status',
  evalTemplateId: 'evalTemplateId',
  scoreName: 'scoreName',
  filter: 'filter',
  targetObject: 'targetObject',
  variableMapping: 'variableMapping',
  sampling: 'sampling',
  delay: 'delay'
};

exports.Prisma.JobExecutionScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  projectId: 'projectId',
  jobConfigurationId: 'jobConfigurationId',
  status: 'status',
  startTime: 'startTime',
  endTime: 'endTime',
  error: 'error',
  jobInputTraceId: 'jobInputTraceId',
  jobOutputScoreId: 'jobOutputScoreId'
};

exports.Prisma.SsoConfigScalarFieldEnum = {
  domain: 'domain',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  authProvider: 'authProvider',
  authConfig: 'authConfig'
};

exports.Prisma.PosthogIntegrationScalarFieldEnum = {
  projectId: 'projectId',
  encryptedPosthogApiKey: 'encryptedPosthogApiKey',
  posthogHostName: 'posthogHostName',
  lastSyncAt: 'lastSyncAt',
  enabled: 'enabled',
  createdAt: 'createdAt'
};

exports.Prisma.BatchExportScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  projectId: 'projectId',
  userId: 'userId',
  finishedAt: 'finishedAt',
  expiresAt: 'expiresAt',
  name: 'name',
  status: 'status',
  query: 'query',
  format: 'format',
  url: 'url',
  log: 'log'
};

exports.Prisma.TraceViewScalarFieldEnum = {
  id: 'id',
  externalId: 'externalId',
  timestamp: 'timestamp',
  name: 'name',
  userId: 'userId',
  metadata: 'metadata',
  release: 'release',
  version: 'version',
  projectId: 'projectId',
  public: 'public',
  bookmarked: 'bookmarked',
  tags: 'tags',
  input: 'input',
  output: 'output',
  sessionId: 'sessionId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  duration: 'duration'
};

exports.Prisma.ObservationViewScalarFieldEnum = {
  id: 'id',
  traceId: 'traceId',
  projectId: 'projectId',
  type: 'type',
  startTime: 'startTime',
  endTime: 'endTime',
  name: 'name',
  metadata: 'metadata',
  parentObservationId: 'parentObservationId',
  level: 'level',
  statusMessage: 'statusMessage',
  version: 'version',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  model: 'model',
  modelParameters: 'modelParameters',
  input: 'input',
  output: 'output',
  promptTokens: 'promptTokens',
  completionTokens: 'completionTokens',
  totalTokens: 'totalTokens',
  unit: 'unit',
  completionStartTime: 'completionStartTime',
  promptId: 'promptId',
  promptName: 'promptName',
  promptVersion: 'promptVersion',
  modelId: 'modelId',
  inputPrice: 'inputPrice',
  outputPrice: 'outputPrice',
  totalPrice: 'totalPrice',
  calculatedInputCost: 'calculatedInputCost',
  calculatedOutputCost: 'calculatedOutputCost',
  calculatedTotalCost: 'calculatedTotalCost',
  latency: 'latency',
  timeToFirstToken: 'timeToFirstToken'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.Role = exports.$Enums.Role = {
  OWNER: 'OWNER',
  ADMIN: 'ADMIN',
  MEMBER: 'MEMBER',
  VIEWER: 'VIEWER',
  NONE: 'NONE'
};

exports.ObservationType = exports.$Enums.ObservationType = {
  SPAN: 'SPAN',
  EVENT: 'EVENT',
  GENERATION: 'GENERATION'
};

exports.ObservationLevel = exports.$Enums.ObservationLevel = {
  DEBUG: 'DEBUG',
  DEFAULT: 'DEFAULT',
  WARNING: 'WARNING',
  ERROR: 'ERROR'
};

exports.ScoreSource = exports.$Enums.ScoreSource = {
  ANNOTATION: 'ANNOTATION',
  API: 'API',
  EVAL: 'EVAL'
};

exports.ScoreDataType = exports.$Enums.ScoreDataType = {
  CATEGORICAL: 'CATEGORICAL',
  NUMERIC: 'NUMERIC',
  BOOLEAN: 'BOOLEAN'
};

exports.AnnotationQueueObjectType = exports.$Enums.AnnotationQueueObjectType = {
  TRACE: 'TRACE',
  OBSERVATION: 'OBSERVATION'
};

exports.AnnotationQueueStatus = exports.$Enums.AnnotationQueueStatus = {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED'
};

exports.DatasetStatus = exports.$Enums.DatasetStatus = {
  ACTIVE: 'ACTIVE',
  ARCHIVED: 'ARCHIVED'
};

exports.CommentObjectType = exports.$Enums.CommentObjectType = {
  TRACE: 'TRACE',
  OBSERVATION: 'OBSERVATION',
  SESSION: 'SESSION',
  PROMPT: 'PROMPT'
};

exports.JobType = exports.$Enums.JobType = {
  EVAL: 'EVAL'
};

exports.JobConfigState = exports.$Enums.JobConfigState = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE'
};

exports.JobExecutionStatus = exports.$Enums.JobExecutionStatus = {
  COMPLETED: 'COMPLETED',
  ERROR: 'ERROR',
  PENDING: 'PENDING',
  CANCELLED: 'CANCELLED'
};

exports.Prisma.ModelName = {
  Account: 'Account',
  Session: 'Session',
  User: 'User',
  VerificationToken: 'VerificationToken',
  Organization: 'Organization',
  Project: 'Project',
  ApiKey: 'ApiKey',
  LlmApiKeys: 'LlmApiKeys',
  OrganizationMembership: 'OrganizationMembership',
  ProjectMembership: 'ProjectMembership',
  MembershipInvitation: 'MembershipInvitation',
  TraceSession: 'TraceSession',
  Trace: 'Trace',
  Observation: 'Observation',
  Score: 'Score',
  ScoreConfig: 'ScoreConfig',
  AnnotationQueue: 'AnnotationQueue',
  AnnotationQueueItem: 'AnnotationQueueItem',
  CronJobs: 'CronJobs',
  Dataset: 'Dataset',
  DatasetItem: 'DatasetItem',
  DatasetRuns: 'DatasetRuns',
  DatasetRunItems: 'DatasetRunItems',
  Events: 'Events',
  Comment: 'Comment',
  Prompt: 'Prompt',
  Model: 'Model',
  AuditLog: 'AuditLog',
  EvalTemplate: 'EvalTemplate',
  JobConfiguration: 'JobConfiguration',
  JobExecution: 'JobExecution',
  SsoConfig: 'SsoConfig',
  PosthogIntegration: 'PosthogIntegration',
  BatchExport: 'BatchExport',
  TraceView: 'TraceView',
  ObservationView: 'ObservationView'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "D:\\work\\fork\\langfuse\\packages\\shared\\node_modules\\prisma-client-for-langfuse-x64",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [
      "driverAdapters",
      "metrics",
      "tracing",
      "views",
      "relationJoins"
    ],
    "sourceFilePath": "D:\\work\\fork\\langfuse\\packages\\shared\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null
  },
  "relativePath": "../../prisma",
  "clientVersion": "5.20.0",
  "engineVersion": "06fc58a368dc7be9fbbbe894adf8d445d208c284",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\ngenerator client {\n  provider        = \"prisma-client-js\"\n  previewFeatures = [\"tracing\", \"views\", \"relationJoins\", \"metrics\", \"driverAdapters\"]\n\n  // windows\n  output = \"../node_modules/prisma-client-for-langfuse-x64\"\n\n  // linux\n  // binaryTargets   = [\"rhel-openssl-1.1.x\"]\n  // output          = \"../node_modules/prisma-client-for-langfuse-linux\"\n}\n\ndatasource db {\n  provider          = \"postgresql\"\n  url               = env(\"DATABASE_URL\")\n  directUrl         = env(\"DIRECT_URL\")\n  shadowDatabaseUrl = env(\"SHADOW_DATABASE_URL\")\n}\n\ngenerator erd {\n  provider     = \"prisma-erd-generator\"\n  ignoreTables = [\"_prisma_migrations\", \"Session\", \"Account\", \"Example\"]\n  disabled     = true\n  ignoreEnums  = true\n  output       = \"database.svg\"\n}\n\ngenerator kysely {\n  provider = \"prisma-kysely\"\n\n  // Optionally provide a destination directory for the generated file\n  // and a filename of your choice\n  // output = \"../src/db\"\n  // fileName = \"types.ts\"\n  // Optionally generate runtime enums to a separate file\n  // enumFileName = \"enums.ts\"\n}\n\n// Necessary for Next auth\nmodel Account {\n  id                       String  @id @default(cuid())\n  userId                   String  @map(\"user_id\")\n  type                     String\n  provider                 String\n  providerAccountId        String\n  refresh_token            String? // @db.Text\n  access_token             String? // @db.Text\n  expires_at               Int?\n  expires_in               Int?\n  ext_expires_in           Int?\n  token_type               String?\n  scope                    String?\n  id_token                 String? // @db.Text\n  session_state            String?\n  refresh_token_expires_in Int?\n  created_at               Int? // GitLab\n  user                     User    @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  @@unique([provider, providerAccountId])\n  @@index([userId])\n}\n\nmodel Session {\n  id           String   @id @default(cuid())\n  sessionToken String   @unique @map(\"session_token\")\n  userId       String   @map(\"user_id\")\n  expires      DateTime\n  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)\n}\n\nmodel User {\n  id                      String                   @id @default(cuid())\n  name                    String?\n  email                   String?                  @unique\n  emailVerified           DateTime?                @map(\"email_verified\")\n  password                String?\n  image                   String?\n  admin                   Boolean                  @default(false)\n  accounts                Account[]\n  sessions                Session[]\n  organizationMemberships OrganizationMembership[]\n  projectMemberships      ProjectMembership[]\n  invitations             MembershipInvitation[]\n  createdAt               DateTime                 @default(now()) @map(\"created_at\")\n  updatedAt               DateTime                 @default(now()) @updatedAt @map(\"updated_at\")\n  featureFlags            String[]                 @default([]) @map(\"feature_flags\")\n  annotatedLockedItem     AnnotationQueueItem[]    @relation(\"LockedByUser\")\n  annotatedCompletedItem  AnnotationQueueItem[]    @relation(\"AnnotatorUser\")\n\n  @@map(\"users\")\n}\n\nmodel VerificationToken {\n  identifier String\n  token      String   @unique\n  expires    DateTime\n\n  @@unique([identifier, token])\n  @@map(\"verification_tokens\")\n}\n\nmodel Organization {\n  id                      String                   @id @default(cuid())\n  name                    String\n  createdAt               DateTime                 @default(now()) @map(\"created_at\")\n  updatedAt               DateTime                 @default(now()) @updatedAt @map(\"updated_at\")\n  cloudConfig             Json?                    @map(\"cloud_config\") // Langfuse Cloud, for zod schema see @/src/features/organizations/utils/cloudConfigSchema\n  organizationMemberships OrganizationMembership[]\n  projects                Project[]\n  MembershipInvitation    MembershipInvitation[]\n\n  @@map(\"organizations\")\n}\n\nmodel Project {\n  id                  String                 @id @default(cuid())\n  orgId               String                 @map(\"org_id\")\n  createdAt           DateTime               @default(now()) @map(\"created_at\")\n  updatedAt           DateTime               @default(now()) @updatedAt @map(\"updated_at\")\n  name                String\n  projectMembers      ProjectMembership[]\n  organization        Organization           @relation(fields: [orgId], references: [id], onUpdate: Cascade, onDelete: Cascade)\n  traces              Trace[]\n  observations        Observation[]\n  apiKeys             ApiKey[]\n  dataset             Dataset[]\n  RawEvents           Events[]\n  invitations         MembershipInvitation[]\n  sessions            TraceSession[]\n  Prompt              Prompt[]\n  Model               Model[]\n  EvalTemplate        EvalTemplate[]\n  JobConfiguration    JobConfiguration[]\n  JobExecution        JobExecution[]\n  LlmApiKeys          LlmApiKeys[]\n  PosthogIntegration  PosthogIntegration[]\n  Score               Score[]\n  scoreConfig         ScoreConfig[]\n  BatchExport         BatchExport[]\n  comment             Comment[]\n  annotationQueue     AnnotationQueue[]\n  annotationQueueItem AnnotationQueueItem[]\n\n  @@index([orgId])\n  @@map(\"projects\")\n}\n\nmodel ApiKey {\n  id                  String    @id @unique @default(cuid())\n  createdAt           DateTime  @default(now()) @map(\"created_at\")\n  note                String?\n  publicKey           String    @unique @map(\"public_key\")\n  hashedSecretKey     String    @unique @map(\"hashed_secret_key\")\n  fastHashedSecretKey String?   @unique @map(\"fast_hashed_secret_key\")\n  displaySecretKey    String    @map(\"display_secret_key\")\n  lastUsedAt          DateTime? @map(\"last_used_at\")\n  expiresAt           DateTime? @map(\"expires_at\")\n  projectId           String    @map(\"project_id\")\n  project             Project   @relation(fields: [projectId], references: [id], onDelete: Cascade)\n\n  @@index(projectId)\n  @@index(publicKey)\n  @@index(hashedSecretKey)\n  @@index(fastHashedSecretKey)\n  @@map(\"api_keys\")\n}\n\nmodel LlmApiKeys {\n  id        String   @id @unique @default(cuid())\n  createdAt DateTime @default(now()) @map(\"created_at\")\n  updatedAt DateTime @default(now()) @updatedAt @map(\"updated_at\")\n\n  provider          String\n  adapter           String // This controls the interface that is used to connect with the LLM, e.g. 'openai' or 'anthropic'\n  displaySecretKey  String   @map(\"display_secret_key\")\n  secretKey         String   @map(\"secret_key\")\n  baseURL           String?  @map(\"base_url\")\n  customModels      String[] @default([]) @map(\"custom_models\")\n  withDefaultModels Boolean  @default(true) @map(\"with_default_models\")\n  config            Json?\n\n  projectId String  @map(\"project_id\")\n  project   Project @relation(fields: [projectId], references: [id], onDelete: Cascade)\n\n  @@unique([projectId, provider])\n  @@map(\"llm_api_keys\")\n}\n\nmodel OrganizationMembership {\n  id                 String              @id @default(cuid())\n  orgId              String              @map(\"org_id\")\n  organization       Organization        @relation(fields: [orgId], references: [id], onDelete: Cascade)\n  userId             String              @map(\"user_id\")\n  user               User                @relation(fields: [userId], references: [id], onDelete: Cascade)\n  role               Role                @map(\"role\")\n  createdAt          DateTime            @default(now()) @map(\"created_at\")\n  updatedAt          DateTime            @default(now()) @updatedAt @map(\"updated_at\")\n  ProjectMemberships ProjectMembership[]\n\n  @@unique([orgId, userId])\n  @@index([userId])\n  @@map(\"organization_memberships\")\n}\n\n// Set a project-specific role for a user in an organization\nmodel ProjectMembership {\n  orgMembershipId        String                 @map(\"org_membership_id\")\n  organizationMembership OrganizationMembership @relation(fields: [orgMembershipId], references: [id], onDelete: Cascade)\n  projectId              String                 @map(\"project_id\")\n  project                Project                @relation(fields: [projectId], references: [id], onDelete: Cascade)\n  userId                 String                 @map(\"user_id\")\n  user                   User                   @relation(fields: [userId], references: [id], onDelete: Cascade)\n  role                   Role\n  createdAt              DateTime               @default(now()) @map(\"created_at\")\n  updatedAt              DateTime               @default(now()) @updatedAt @map(\"updated_at\")\n\n  @@id([projectId, userId])\n  @@index([userId])\n  @@index([projectId])\n  @@index([orgMembershipId])\n  @@map(\"project_memberships\")\n}\n\nmodel MembershipInvitation {\n  id              String       @id @unique @default(cuid())\n  email           String\n  orgId           String       @map(\"org_id\")\n  organization    Organization @relation(fields: [orgId], references: [id], onDelete: Cascade)\n  orgRole         Role         @map(\"org_role\")\n  projectId       String?      @map(\"project_id\")\n  project         Project?     @relation(fields: [projectId], references: [id], onDelete: SetNull)\n  projectRole     Role?        @map(\"project_role\")\n  invitedByUserId String?      @map(\"invited_by_user_id\")\n  invitedByUser   User?        @relation(fields: [invitedByUserId], references: [id], onDelete: SetNull)\n  createdAt       DateTime     @default(now()) @map(\"created_at\")\n  updatedAt       DateTime     @default(now()) @updatedAt @map(\"updated_at\")\n\n  @@index([projectId])\n  @@index([orgId])\n  @@index([email])\n  @@map(\"membership_invitations\")\n}\n\nenum Role {\n  OWNER\n  ADMIN\n  MEMBER\n  VIEWER\n  NONE\n}\n\nmodel TraceSession {\n  id         String   @default(cuid())\n  createdAt  DateTime @default(now()) @map(\"created_at\")\n  updatedAt  DateTime @default(now()) @updatedAt @map(\"updated_at\")\n  projectId  String   @map(\"project_id\")\n  project    Project  @relation(fields: [projectId], references: [id], onDelete: Cascade)\n  bookmarked Boolean  @default(false)\n  public     Boolean  @default(false)\n  traces     Trace[]\n\n  @@id([id, projectId])\n  @@index([projectId])\n  @@index([createdAt])\n  @@index([updatedAt])\n  @@map(\"trace_sessions\")\n}\n\n// Update TraceView below when making changes to this model!\n\nmodel Trace {\n  id         String        @id @default(cuid())\n  externalId String?       @map(\"external_id\")\n  timestamp  DateTime      @default(now())\n  name       String?\n  userId     String?       @map(\"user_id\")\n  metadata   Json?\n  release    String?\n  version    String?\n  projectId  String        @map(\"project_id\")\n  project    Project       @relation(fields: [projectId], references: [id], onDelete: Cascade)\n  public     Boolean       @default(false)\n  bookmarked Boolean       @default(false)\n  tags       String[]      @default([])\n  input      Json?\n  output     Json?\n  sessionId  String?       @map(\"session_id\")\n  session    TraceSession? @relation(fields: [sessionId, projectId], references: [id, projectId])\n  createdAt  DateTime      @default(now()) @map(\"created_at\")\n  updatedAt  DateTime      @default(now()) @updatedAt @map(\"updated_at\")\n\n  JobExecution JobExecution[]\n\n  @@index([projectId, timestamp])\n  @@index([sessionId])\n  @@index([name])\n  @@index([userId])\n  @@index([id, userId])\n  @@index(timestamp)\n  @@index(createdAt)\n  @@index([tags(ops: ArrayOps)], type: Gin)\n  @@map(\"traces\")\n}\n\n// This view is based on the trace table. Once prisma supports\n// inheritance, we should remove code duplication here.\nview TraceView {\n  // trace fields\n  id         String   @id @default(cuid())\n  externalId String?  @map(\"external_id\")\n  timestamp  DateTime @default(now())\n  name       String?\n  userId     String?  @map(\"user_id\")\n  metadata   Json?\n  release    String?\n  version    String?\n  projectId  String   @map(\"project_id\")\n  public     Boolean  @default(false)\n  bookmarked Boolean  @default(false)\n  tags       String[] @default([])\n  input      Json?\n  output     Json?\n  sessionId  String?  @map(\"session_id\")\n  createdAt  DateTime @map(\"created_at\")\n  updatedAt  DateTime @map(\"updated_at\")\n\n  // calculated fields\n  duration Float? @map(\"duration\") // can be null if no observations in trace\n\n  @@map(\"traces_view\")\n}\n\n// Update ObservationView below when making changes to this model!\n// traceId is optional only due to timing during data injestion\n// (traceId is not necessarily known at the time of observation creation)\nmodel Observation {\n  id                  String           @id @default(cuid())\n  traceId             String?          @map(\"trace_id\")\n  projectId           String           @map(\"project_id\")\n  type                ObservationType\n  startTime           DateTime         @default(now()) @map(\"start_time\")\n  endTime             DateTime?        @map(\"end_time\")\n  name                String?\n  metadata            Json?\n  parentObservationId String?          @map(\"parent_observation_id\")\n  level               ObservationLevel @default(DEFAULT)\n  statusMessage       String?          @map(\"status_message\")\n  version             String?\n  createdAt           DateTime         @default(now()) @map(\"created_at\")\n  updatedAt           DateTime         @default(now()) @updatedAt @map(\"updated_at\")\n\n  // GENERATION ONLY\n  model           String? // user-provided model attribute\n  internalModel   String? @map(\"internal_model\") // matched model.name that is matched at ingestion time, to be deprecated\n  internalModelId String? @map(\"internal_model_id\") // matched model.id that is matched at ingestion time\n\n  modelParameters  Json?\n  input            Json?\n  output           Json?\n  promptTokens     Int     @default(0) @map(\"prompt_tokens\")\n  completionTokens Int     @default(0) @map(\"completion_tokens\")\n  totalTokens      Int     @default(0) @map(\"total_tokens\")\n  unit             String?\n\n  // User provided cost at ingestion\n  inputCost  Decimal? @map(\"input_cost\")\n  outputCost Decimal? @map(\"output_cost\")\n  totalCost  Decimal? @map(\"total_cost\")\n\n  // Calculated cost\n  calculatedInputCost  Decimal? @map(\"calculated_input_cost\")\n  calculatedOutputCost Decimal? @map(\"calculated_output_cost\")\n  calculatedTotalCost  Decimal? @map(\"calculated_total_cost\")\n\n  completionStartTime DateTime? @map(\"completion_start_time\")\n  project             Project   @relation(fields: [projectId], references: [id], onDelete: Cascade)\n\n  promptId String? @map(\"prompt_id\") // no fk constraint, prompt can be deleted\n\n  @@unique([id, projectId])\n  @@index([projectId, internalModel, startTime, unit])\n  @@index([traceId, projectId, type, startTime])\n  @@index([traceId, projectId, startTime])\n  @@index([type])\n  @@index(startTime)\n  @@index(createdAt)\n  @@index(model)\n  @@index(internalModel)\n  @@index([projectId, promptId])\n  @@index(promptId)\n  @@index([projectId, startTime, type])\n  @@map(\"observations\")\n}\n\n// This view is a mix of the observation and model. Once prisma supports\n// inheritance, we should remove code duplication here.\nview ObservationView {\n  id                  String           @id @default(cuid())\n  traceId             String?          @map(\"trace_id\")\n  projectId           String           @map(\"project_id\")\n  type                ObservationType\n  startTime           DateTime         @map(\"start_time\")\n  endTime             DateTime?        @map(\"end_time\")\n  name                String?\n  metadata            Json?\n  parentObservationId String?          @map(\"parent_observation_id\")\n  level               ObservationLevel @default(DEFAULT)\n  statusMessage       String?          @map(\"status_message\")\n  version             String?\n  createdAt           DateTime         @map(\"created_at\")\n  updatedAt           DateTime         @map(\"updated_at\")\n\n  // GENERATION ONLY\n  model               String?\n  modelParameters     Json?\n  input               Json?\n  output              Json?\n  promptTokens        Int       @default(0) @map(\"prompt_tokens\")\n  completionTokens    Int       @default(0) @map(\"completion_tokens\")\n  totalTokens         Int       @default(0) @map(\"total_tokens\")\n  unit                String?\n  completionStartTime DateTime? @map(\"completion_start_time\")\n\n  // prompts\n  promptId      String? @map(\"prompt_id\")\n  promptName    String? @map(\"prompt_name\")\n  promptVersion Int?    @map(\"prompt_version\")\n\n  // model fields\n  modelId     String?  @map(\"model_id\")\n  inputPrice  Decimal? @map(\"input_price\")\n  outputPrice Decimal? @map(\"output_price\")\n  totalPrice  Decimal? @map(\"total_price\")\n\n  // calculated fields\n  calculatedInputCost  Decimal? @map(\"calculated_input_cost\")\n  calculatedOutputCost Decimal? @map(\"calculated_output_cost\")\n  calculatedTotalCost  Decimal? @map(\"calculated_total_cost\")\n  latency              Float?   @map(\"latency\")\n  timeToFirstToken     Float?   @map(\"time_to_first_token\")\n\n  @@map(\"observations_view\")\n}\n\nenum ObservationType {\n  SPAN\n  EVENT\n  GENERATION\n}\n\nenum ObservationLevel {\n  DEBUG\n  DEFAULT\n  WARNING\n  ERROR\n}\n\nmodel Score {\n  id            String         @id @default(cuid())\n  timestamp     DateTime       @default(now())\n  projectId     String         @map(\"project_id\")\n  project       Project        @relation(fields: [projectId], references: [id], onDelete: Cascade)\n  name          String\n  value         Float? // always defined if data type is NUMERIC or BOOLEAN, optional for CATEGORICAL\n  source        ScoreSource\n  authorUserId  String?        @map(\"author_user_id\")\n  comment       String?\n  traceId       String         @map(\"trace_id\")\n  observationId String?        @map(\"observation_id\")\n  configId      String?        @map(\"config_id\")\n  stringValue   String?        @map(\"string_value\") // always defined if data type is CATEGORICAL or BOOLEAN, null for NUMERIC\n  queueId       String?        @map(\"queue_id\")\n  createdAt     DateTime       @default(now()) @map(\"created_at\")\n  updatedAt     DateTime       @default(now()) @updatedAt @map(\"updated_at\")\n  dataType      ScoreDataType  @default(NUMERIC) @map(\"data_type\")\n  JobExecution  JobExecution[]\n  scoreConfig   ScoreConfig?   @relation(fields: [configId], references: [id], onDelete: SetNull)\n\n  @@unique([id, projectId]) // used for upserts via prisma\n  @@index(timestamp)\n  @@index([value])\n  @@index([projectId, name])\n  @@index([authorUserId])\n  @@index([configId])\n  @@index([traceId], type: Hash)\n  @@index([observationId], type: Hash)\n  @@index([source])\n  @@index([createdAt])\n  @@map(\"scores\")\n}\n\nenum ScoreSource {\n  ANNOTATION\n  API\n  EVAL\n}\n\nmodel ScoreConfig {\n  id          String        @id @default(cuid())\n  createdAt   DateTime      @default(now()) @map(\"created_at\")\n  updatedAt   DateTime      @default(now()) @updatedAt @map(\"updated_at\")\n  projectId   String        @map(\"project_id\")\n  project     Project       @relation(fields: [projectId], references: [id], onDelete: Cascade)\n  name        String\n  dataType    ScoreDataType @map(\"data_type\")\n  isArchived  Boolean       @default(false) @map(\"is_archived\")\n  minValue    Float?        @map(\"min_value\")\n  maxValue    Float?        @map(\"max_value\")\n  categories  Json?         @map(\"categories\")\n  description String?\n  score       Score[]\n\n  @@unique([id, projectId]) // used for upserts via prisma\n  @@index([dataType])\n  @@index([isArchived])\n  @@index([projectId])\n  @@index([categories])\n  @@index([createdAt])\n  @@index([updatedAt])\n  @@map(\"score_configs\")\n}\n\nenum ScoreDataType {\n  CATEGORICAL\n  NUMERIC\n  BOOLEAN\n}\n\nmodel AnnotationQueue {\n  id                  String                @id @default(cuid())\n  name                String\n  description         String?\n  scoreConfigIds      String[]              @default([]) @map(\"score_config_ids\")\n  projectId           String                @map(\"project_id\")\n  project             Project               @relation(fields: [projectId], references: [id], onDelete: Cascade)\n  createdAt           DateTime              @default(now()) @map(\"created_at\")\n  updatedAt           DateTime              @default(now()) @updatedAt @map(\"updated_at\")\n  annotationQueueItem AnnotationQueueItem[]\n\n  @@unique([projectId, name])\n  @@index([id, projectId])\n  @@index([projectId, createdAt])\n  @@map(\"annotation_queues\")\n}\n\nmodel AnnotationQueueItem {\n  id              String                    @id @default(cuid())\n  queueId         String                    @map(\"queue_id\")\n  queue           AnnotationQueue           @relation(fields: [queueId], references: [id], onDelete: Cascade)\n  objectId        String                    @map(\"object_id\")\n  objectType      AnnotationQueueObjectType @map(\"object_type\")\n  status          AnnotationQueueStatus     @default(PENDING)\n  lockedAt        DateTime?                 @map(\"locked_at\")\n  lockedByUserId  String?                   @map(\"locked_by_user_id\")\n  lockedByUser    User?                     @relation(\"LockedByUser\", fields: [lockedByUserId], references: [id], onDelete: SetNull)\n  annotatorUserId String?                   @map(\"annotator_user_id\")\n  annotatorUser   User?                     @relation(\"AnnotatorUser\", fields: [annotatorUserId], references: [id], onDelete: SetNull)\n  completedAt     DateTime?                 @map(\"completed_at\")\n  projectId       String                    @map(\"project_id\")\n  project         Project                   @relation(fields: [projectId], references: [id], onDelete: Cascade)\n  createdAt       DateTime                  @default(now()) @map(\"created_at\")\n  updatedAt       DateTime                  @default(now()) @updatedAt @map(\"updated_at\")\n\n  @@index([id, projectId])\n  @@index([projectId, queueId, status])\n  @@index([objectId, objectType, projectId, queueId])\n  @@index([annotatorUserId])\n  @@index([createdAt])\n  @@map(\"annotation_queue_items\")\n}\n\nenum AnnotationQueueStatus {\n  PENDING\n  COMPLETED\n}\n\nenum AnnotationQueueObjectType {\n  TRACE\n  OBSERVATION\n}\n\nmodel CronJobs {\n  name         String    @id\n  lastRun      DateTime? @map(\"last_run\")\n  jobStartedAt DateTime? @map(\"job_started_at\")\n  state        String?\n\n  @@map(\"cron_jobs\")\n}\n\nmodel Dataset {\n  id           String        @default(cuid())\n  projectId    String        @map(\"project_id\")\n  name         String\n  description  String?\n  metadata     Json?\n  project      Project       @relation(fields: [projectId], references: [id], onDelete: Cascade)\n  createdAt    DateTime      @default(now()) @map(\"created_at\")\n  updatedAt    DateTime      @default(now()) @updatedAt @map(\"updated_at\")\n  datasetItems DatasetItem[]\n  datasetRuns  DatasetRuns[]\n\n  @@id([id, projectId])\n  @@unique([projectId, name])\n  @@index([createdAt])\n  @@index([updatedAt])\n  @@map(\"datasets\")\n}\n\nmodel DatasetItem {\n  id                  String            @default(cuid())\n  projectId           String            @map(\"project_id\")\n  status              DatasetStatus     @default(ACTIVE)\n  input               Json?\n  expectedOutput      Json?             @map(\"expected_output\")\n  metadata            Json?\n  sourceTraceId       String?           @map(\"source_trace_id\")\n  sourceObservationId String?           @map(\"source_observation_id\")\n  datasetId           String            @map(\"dataset_id\")\n  dataset             Dataset           @relation(fields: [datasetId, projectId], references: [id, projectId], onDelete: Cascade)\n  createdAt           DateTime          @default(now()) @map(\"created_at\")\n  updatedAt           DateTime          @default(now()) @updatedAt @map(\"updated_at\")\n  datasetRunItems     DatasetRunItems[]\n\n  @@id([id, projectId])\n  @@index([sourceTraceId], type: Hash)\n  @@index([sourceObservationId], type: Hash)\n  @@index([datasetId], type: Hash)\n  @@index([createdAt])\n  @@index([updatedAt])\n  @@map(\"dataset_items\")\n}\n\nenum DatasetStatus {\n  ACTIVE\n  ARCHIVED\n}\n\nmodel DatasetRuns {\n  id              String            @default(cuid())\n  projectId       String            @map(\"project_id\")\n  name            String\n  description     String?\n  metadata        Json?\n  datasetId       String            @map(\"dataset_id\")\n  dataset         Dataset           @relation(fields: [datasetId, projectId], references: [id, projectId], onDelete: Cascade)\n  createdAt       DateTime          @default(now()) @map(\"created_at\")\n  updatedAt       DateTime          @default(now()) @updatedAt @map(\"updated_at\")\n  datasetRunItems DatasetRunItems[]\n\n  @@id([id, projectId])\n  @@unique([datasetId, projectId, name])\n  @@index([datasetId], type: Hash)\n  @@index([createdAt])\n  @@index([updatedAt])\n  @@map(\"dataset_runs\")\n}\n\nmodel DatasetRunItems {\n  id            String      @default(cuid())\n  projectId     String      @map(\"project_id\")\n  datasetRunId  String      @map(\"dataset_run_id\")\n  datasetRun    DatasetRuns @relation(fields: [datasetRunId, projectId], references: [id, projectId], onDelete: Cascade)\n  datasetItemId String      @map(\"dataset_item_id\")\n  datasetItem   DatasetItem @relation(fields: [datasetItemId, projectId], references: [id, projectId], onDelete: Cascade)\n  traceId       String      @map(\"trace_id\")\n  observationId String?     @map(\"observation_id\")\n  createdAt     DateTime    @default(now()) @map(\"created_at\")\n  updatedAt     DateTime    @default(now()) @updatedAt @map(\"updated_at\")\n\n  @@id([id, projectId])\n  @@index([datasetRunId], type: Hash)\n  @@index([datasetItemId], type: Hash)\n  @@index([observationId], type: Hash)\n  @@index([traceId])\n  @@index([createdAt])\n  @@index([updatedAt])\n  @@map(\"dataset_run_items\")\n}\n\nmodel Events {\n  id        String   @id @default(cuid())\n  createdAt DateTime @default(now()) @map(\"created_at\")\n  updatedAt DateTime @default(now()) @updatedAt @map(\"updated_at\")\n  projectId String   @map(\"project_id\")\n  project   Project  @relation(fields: [projectId], references: [id], onDelete: Cascade)\n  data      Json\n  headers   Json     @default(\"{}\")\n  url       String?\n  method    String?\n\n  @@index(projectId)\n  @@map(\"events\")\n}\n\nmodel Comment {\n  id           String            @id @default(cuid())\n  projectId    String            @map(\"project_id\")\n  project      Project           @relation(fields: [projectId], references: [id], onDelete: Cascade)\n  objectType   CommentObjectType @map(\"object_type\")\n  objectId     String            @map(\"object_id\")\n  createdAt    DateTime          @default(now()) @map(\"created_at\")\n  updatedAt    DateTime          @default(now()) @updatedAt @map(\"updated_at\")\n  content      String\n  authorUserId String?           @map(\"author_user_id\") // no fk constraint, user can be deleted\n\n  @@index([projectId, objectType, objectId])\n  @@map(\"comments\")\n}\n\nenum CommentObjectType {\n  TRACE\n  OBSERVATION\n  SESSION\n  PROMPT\n}\n\nmodel Prompt {\n  id        String   @id @default(cuid())\n  createdAt DateTime @default(now()) @map(\"created_at\")\n  updatedAt DateTime @default(now()) @updatedAt @map(\"updated_at\")\n\n  projectId String  @map(\"project_id\")\n  project   Project @relation(fields: [projectId], references: [id], onDelete: Cascade)\n\n  createdBy String @map(\"created_by\")\n\n  prompt   Json\n  name     String\n  version  Int\n  type     String   @default(\"text\")\n  isActive Boolean? @map(\"is_active\") // Deprecated. To be removed once 'production' labels work as expected.\n  config   Json     @default(\"{}\")\n  tags     String[] @default([])\n  labels   String[] @default([])\n\n  @@unique([projectId, name, version])\n  @@index([projectId, id])\n  @@index([createdAt])\n  @@index([updatedAt])\n  @@index([tags(ops: ArrayOps)], type: Gin)\n  @@map(\"prompts\")\n}\n\n// Update ObservationView below when making changes to this model!\nmodel Model {\n  id        String   @id @default(cuid())\n  createdAt DateTime @default(now()) @map(\"created_at\")\n  updatedAt DateTime @default(now()) @updatedAt @map(\"updated_at\")\n\n  projectId String?  @map(\"project_id\")\n  project   Project? @relation(fields: [projectId], references: [id], onDelete: Cascade)\n\n  modelName       String    @map(\"model_name\")\n  matchPattern    String    @map(\"match_pattern\")\n  startDate       DateTime? @map(\"start_date\")\n  inputPrice      Decimal?  @map(\"input_price\")\n  outputPrice     Decimal?  @map(\"output_price\")\n  totalPrice      Decimal?  @map(\"total_price\")\n  unit            String // TOKENS, CHARACTERS, MILLISECONDS, SECONDS, REQUESTS, or IMAGES\n  tokenizerId     String?   @map(\"tokenizer_id\")\n  tokenizerConfig Json?     @map(\"tokenizer_config\")\n\n  @@unique([projectId, modelName, startDate, unit])\n  @@index(modelName)\n  @@map(\"models\")\n}\n\n// No FK constraints to preserve audit logs\nmodel AuditLog {\n  id              String   @id @default(cuid())\n  createdAt       DateTime @default(now()) @map(\"created_at\")\n  updatedAt       DateTime @default(now()) @updatedAt @map(\"updated_at\")\n  userId          String   @map(\"user_id\")\n  orgId           String   @map(\"org_id\")\n  userOrgRole     String   @map(\"user_org_role\")\n  projectId       String?  @map(\"project_id\")\n  userProjectRole String?  @map(\"user_project_role\")\n  resourceType    String   @map(\"resource_type\")\n  resourceId      String   @map(\"resource_id\")\n  action          String\n  before          String? //stringified JSON\n  after           String? // stringified JSON\n\n  @@index([projectId])\n  @@index([userId])\n  @@index([orgId])\n  @@index([createdAt])\n  @@index([updatedAt])\n  @@map(\"audit_logs\")\n}\n\nmodel EvalTemplate {\n  id        String   @id @default(cuid())\n  createdAt DateTime @default(now()) @map(\"created_at\")\n  updatedAt DateTime @default(now()) @updatedAt @map(\"updated_at\")\n\n  projectId String  @map(\"project_id\")\n  project   Project @relation(fields: [projectId], references: [id], onDelete: Cascade)\n\n  name             String\n  version          Int\n  prompt           String\n  model            String\n  provider         String\n  modelParams      Json               @map(\"model_params\")\n  vars             String[]           @default([])\n  outputSchema     Json               @map(\"output_schema\")\n  JobConfiguration JobConfiguration[]\n\n  @@unique([projectId, name, version])\n  @@index([projectId, id])\n  @@map(\"eval_templates\")\n}\n\nenum JobType {\n  EVAL\n}\n\nenum JobConfigState {\n  ACTIVE\n  INACTIVE\n}\n\nmodel JobConfiguration {\n  id        String   @id @default(cuid())\n  createdAt DateTime @default(now()) @map(\"created_at\")\n  updatedAt DateTime @default(now()) @updatedAt @map(\"updated_at\")\n\n  projectId String  @map(\"project_id\")\n  project   Project @relation(fields: [projectId], references: [id], onDelete: Cascade)\n\n  jobType        JobType        @map(\"job_type\")\n  status         JobConfigState @default(ACTIVE)\n  evalTemplateId String?        @map(\"eval_template_id\")\n  evalTemplate   EvalTemplate?  @relation(fields: [evalTemplateId], references: [id], onDelete: SetNull)\n\n  scoreName       String         @map(\"score_name\")\n  filter          Json\n  targetObject    String         @map(\"target_object\")\n  variableMapping Json           @map(\"variable_mapping\")\n  sampling        Decimal // ratio of jobs that are executed for sampling (0..1)\n  delay           Int // delay in milliseconds\n  JobExecution    JobExecution[]\n\n  @@index([projectId, id])\n  @@map(\"job_configurations\")\n}\n\nenum JobExecutionStatus {\n  COMPLETED\n  ERROR\n  PENDING\n  CANCELLED\n}\n\nmodel JobExecution {\n  id        String   @id @default(cuid())\n  createdAt DateTime @default(now()) @map(\"created_at\")\n  updatedAt DateTime @default(now()) @updatedAt @map(\"updated_at\")\n\n  projectId String  @map(\"project_id\")\n  project   Project @relation(fields: [projectId], references: [id], onDelete: Cascade)\n\n  jobConfigurationId String           @map(\"job_configuration_id\")\n  jobConfiguration   JobConfiguration @relation(fields: [jobConfigurationId], references: [id], onDelete: Cascade)\n\n  status    JobExecutionStatus\n  startTime DateTime?          @map(\"start_time\")\n  endTime   DateTime?          @map(\"end_time\")\n  error     String?\n\n  jobInputTraceId String? @map(\"job_input_trace_id\")\n  trace           Trace?  @relation(fields: [jobInputTraceId], references: [id], onDelete: SetNull) // job remains when traces are deleted\n\n  jobOutputScoreId String? @map(\"job_output_score_id\")\n  score            Score?  @relation(fields: [jobOutputScoreId], references: [id], onDelete: SetNull) // job remains when scores are deleted\n\n  @@index([projectId, status])\n  @@index([projectId, id])\n  @@index([jobConfigurationId])\n  @@index([jobOutputScoreId])\n  @@index([jobInputTraceId])\n  @@index([createdAt])\n  @@index([updatedAt])\n  @@map(\"job_executions\")\n}\n\n// Single Sign-On configuration for a domain\n// This feature is part of the Enterprise Edition\nmodel SsoConfig {\n  domain       String   @id @default(cuid()) // e.g. \"google.com\"\n  createdAt    DateTime @default(now()) @map(\"created_at\")\n  updatedAt    DateTime @default(now()) @updatedAt @map(\"updated_at\")\n  authProvider String   @map(\"auth_provider\") // e.g. \"okta\", ee/sso/types.ts\n\n  authConfig Json? @map(\"auth_config\")\n  // e.g. { \"clientId\": \"1234\", \"clientSecret\": \"5678\" }, null if credentials from env should be used\n  // secrets like clientSecret are encrypted on the application level\n\n  @@map(\"sso_configs\")\n}\n\nmodel PosthogIntegration {\n  projectId              String    @id @map(\"project_id\")\n  project                Project   @relation(fields: [projectId], references: [id], onDelete: Cascade)\n  encryptedPosthogApiKey String    @map(\"encrypted_posthog_api_key\")\n  posthogHostName        String    @map(\"posthog_host_name\")\n  lastSyncAt             DateTime? @map(\"last_sync_at\")\n  enabled                Boolean\n  createdAt              DateTime  @default(now()) @map(\"created_at\")\n\n  @@map(\"posthog_integrations\")\n}\n\nmodel BatchExport {\n  id        String   @id @default(cuid())\n  createdAt DateTime @default(now()) @map(\"created_at\")\n  updatedAt DateTime @default(now()) @updatedAt @map(\"updated_at\")\n\n  projectId String  @map(\"project_id\")\n  project   Project @relation(fields: [projectId], references: [id], onDelete: Cascade)\n  userId    String  @map(\"user_id\")\n\n  finishedAt DateTime? @map(\"finished_at\")\n  expiresAt  DateTime? @map(\"expires_at\")\n\n  name   String\n  status String\n  query  Json\n  format String\n  url    String?\n  log    String?\n\n  @@index([projectId, userId])\n  @@index([status])\n  @@map(\"batch_exports\")\n}\n",
  "inlineSchemaHash": "84f98eb5944ab29684242e1dd0ef2b2dfec4df44736517a35e6428fe5580f3b6",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Account\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"user_id\"},{\"name\":\"type\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"provider\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"providerAccountId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"refresh_token\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"access_token\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"expires_at\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"expires_in\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"ext_expires_in\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"token_type\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"scope\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"id_token\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"session_state\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"refresh_token_expires_in\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"AccountToUser\"}],\"dbName\":null},\"Session\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"sessionToken\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"session_token\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"user_id\"},{\"name\":\"expires\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"SessionToUser\"}],\"dbName\":null},\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"emailVerified\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"email_verified\"},{\"name\":\"password\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"image\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"admin\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"accounts\",\"kind\":\"object\",\"type\":\"Account\",\"relationName\":\"AccountToUser\"},{\"name\":\"sessions\",\"kind\":\"object\",\"type\":\"Session\",\"relationName\":\"SessionToUser\"},{\"name\":\"organizationMemberships\",\"kind\":\"object\",\"type\":\"OrganizationMembership\",\"relationName\":\"OrganizationMembershipToUser\"},{\"name\":\"projectMemberships\",\"kind\":\"object\",\"type\":\"ProjectMembership\",\"relationName\":\"ProjectMembershipToUser\"},{\"name\":\"invitations\",\"kind\":\"object\",\"type\":\"MembershipInvitation\",\"relationName\":\"MembershipInvitationToUser\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"},{\"name\":\"featureFlags\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"feature_flags\"},{\"name\":\"annotatedLockedItem\",\"kind\":\"object\",\"type\":\"AnnotationQueueItem\",\"relationName\":\"LockedByUser\"},{\"name\":\"annotatedCompletedItem\",\"kind\":\"object\",\"type\":\"AnnotationQueueItem\",\"relationName\":\"AnnotatorUser\"}],\"dbName\":\"users\"},\"VerificationToken\":{\"fields\":[{\"name\":\"identifier\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"token\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"expires\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":\"verification_tokens\"},\"Organization\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"},{\"name\":\"cloudConfig\",\"kind\":\"scalar\",\"type\":\"Json\",\"dbName\":\"cloud_config\"},{\"name\":\"organizationMemberships\",\"kind\":\"object\",\"type\":\"OrganizationMembership\",\"relationName\":\"OrganizationToOrganizationMembership\"},{\"name\":\"projects\",\"kind\":\"object\",\"type\":\"Project\",\"relationName\":\"OrganizationToProject\"},{\"name\":\"MembershipInvitation\",\"kind\":\"object\",\"type\":\"MembershipInvitation\",\"relationName\":\"MembershipInvitationToOrganization\"}],\"dbName\":\"organizations\"},\"Project\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"orgId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"org_id\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"projectMembers\",\"kind\":\"object\",\"type\":\"ProjectMembership\",\"relationName\":\"ProjectToProjectMembership\"},{\"name\":\"organization\",\"kind\":\"object\",\"type\":\"Organization\",\"relationName\":\"OrganizationToProject\"},{\"name\":\"traces\",\"kind\":\"object\",\"type\":\"Trace\",\"relationName\":\"ProjectToTrace\"},{\"name\":\"observations\",\"kind\":\"object\",\"type\":\"Observation\",\"relationName\":\"ObservationToProject\"},{\"name\":\"apiKeys\",\"kind\":\"object\",\"type\":\"ApiKey\",\"relationName\":\"ApiKeyToProject\"},{\"name\":\"dataset\",\"kind\":\"object\",\"type\":\"Dataset\",\"relationName\":\"DatasetToProject\"},{\"name\":\"RawEvents\",\"kind\":\"object\",\"type\":\"Events\",\"relationName\":\"EventsToProject\"},{\"name\":\"invitations\",\"kind\":\"object\",\"type\":\"MembershipInvitation\",\"relationName\":\"MembershipInvitationToProject\"},{\"name\":\"sessions\",\"kind\":\"object\",\"type\":\"TraceSession\",\"relationName\":\"ProjectToTraceSession\"},{\"name\":\"Prompt\",\"kind\":\"object\",\"type\":\"Prompt\",\"relationName\":\"ProjectToPrompt\"},{\"name\":\"Model\",\"kind\":\"object\",\"type\":\"Model\",\"relationName\":\"ModelToProject\"},{\"name\":\"EvalTemplate\",\"kind\":\"object\",\"type\":\"EvalTemplate\",\"relationName\":\"EvalTemplateToProject\"},{\"name\":\"JobConfiguration\",\"kind\":\"object\",\"type\":\"JobConfiguration\",\"relationName\":\"JobConfigurationToProject\"},{\"name\":\"JobExecution\",\"kind\":\"object\",\"type\":\"JobExecution\",\"relationName\":\"JobExecutionToProject\"},{\"name\":\"LlmApiKeys\",\"kind\":\"object\",\"type\":\"LlmApiKeys\",\"relationName\":\"LlmApiKeysToProject\"},{\"name\":\"PosthogIntegration\",\"kind\":\"object\",\"type\":\"PosthogIntegration\",\"relationName\":\"PosthogIntegrationToProject\"},{\"name\":\"Score\",\"kind\":\"object\",\"type\":\"Score\",\"relationName\":\"ProjectToScore\"},{\"name\":\"scoreConfig\",\"kind\":\"object\",\"type\":\"ScoreConfig\",\"relationName\":\"ProjectToScoreConfig\"},{\"name\":\"BatchExport\",\"kind\":\"object\",\"type\":\"BatchExport\",\"relationName\":\"BatchExportToProject\"},{\"name\":\"comment\",\"kind\":\"object\",\"type\":\"Comment\",\"relationName\":\"CommentToProject\"},{\"name\":\"annotationQueue\",\"kind\":\"object\",\"type\":\"AnnotationQueue\",\"relationName\":\"AnnotationQueueToProject\"},{\"name\":\"annotationQueueItem\",\"kind\":\"object\",\"type\":\"AnnotationQueueItem\",\"relationName\":\"AnnotationQueueItemToProject\"}],\"dbName\":\"projects\"},\"ApiKey\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"note\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"publicKey\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"public_key\"},{\"name\":\"hashedSecretKey\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"hashed_secret_key\"},{\"name\":\"fastHashedSecretKey\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"fast_hashed_secret_key\"},{\"name\":\"displaySecretKey\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"display_secret_key\"},{\"name\":\"lastUsedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"last_used_at\"},{\"name\":\"expiresAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"expires_at\"},{\"name\":\"projectId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"project_id\"},{\"name\":\"project\",\"kind\":\"object\",\"type\":\"Project\",\"relationName\":\"ApiKeyToProject\"}],\"dbName\":\"api_keys\"},\"LlmApiKeys\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"},{\"name\":\"provider\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"adapter\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"displaySecretKey\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"display_secret_key\"},{\"name\":\"secretKey\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"secret_key\"},{\"name\":\"baseURL\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"base_url\"},{\"name\":\"customModels\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"custom_models\"},{\"name\":\"withDefaultModels\",\"kind\":\"scalar\",\"type\":\"Boolean\",\"dbName\":\"with_default_models\"},{\"name\":\"config\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"projectId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"project_id\"},{\"name\":\"project\",\"kind\":\"object\",\"type\":\"Project\",\"relationName\":\"LlmApiKeysToProject\"}],\"dbName\":\"llm_api_keys\"},\"OrganizationMembership\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"orgId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"org_id\"},{\"name\":\"organization\",\"kind\":\"object\",\"type\":\"Organization\",\"relationName\":\"OrganizationToOrganizationMembership\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"user_id\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"OrganizationMembershipToUser\"},{\"name\":\"role\",\"kind\":\"enum\",\"type\":\"Role\",\"dbName\":\"role\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"},{\"name\":\"ProjectMemberships\",\"kind\":\"object\",\"type\":\"ProjectMembership\",\"relationName\":\"OrganizationMembershipToProjectMembership\"}],\"dbName\":\"organization_memberships\"},\"ProjectMembership\":{\"fields\":[{\"name\":\"orgMembershipId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"org_membership_id\"},{\"name\":\"organizationMembership\",\"kind\":\"object\",\"type\":\"OrganizationMembership\",\"relationName\":\"OrganizationMembershipToProjectMembership\"},{\"name\":\"projectId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"project_id\"},{\"name\":\"project\",\"kind\":\"object\",\"type\":\"Project\",\"relationName\":\"ProjectToProjectMembership\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"user_id\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"ProjectMembershipToUser\"},{\"name\":\"role\",\"kind\":\"enum\",\"type\":\"Role\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"}],\"dbName\":\"project_memberships\"},\"MembershipInvitation\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"orgId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"org_id\"},{\"name\":\"organization\",\"kind\":\"object\",\"type\":\"Organization\",\"relationName\":\"MembershipInvitationToOrganization\"},{\"name\":\"orgRole\",\"kind\":\"enum\",\"type\":\"Role\",\"dbName\":\"org_role\"},{\"name\":\"projectId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"project_id\"},{\"name\":\"project\",\"kind\":\"object\",\"type\":\"Project\",\"relationName\":\"MembershipInvitationToProject\"},{\"name\":\"projectRole\",\"kind\":\"enum\",\"type\":\"Role\",\"dbName\":\"project_role\"},{\"name\":\"invitedByUserId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"invited_by_user_id\"},{\"name\":\"invitedByUser\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"MembershipInvitationToUser\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"}],\"dbName\":\"membership_invitations\"},\"TraceSession\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"},{\"name\":\"projectId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"project_id\"},{\"name\":\"project\",\"kind\":\"object\",\"type\":\"Project\",\"relationName\":\"ProjectToTraceSession\"},{\"name\":\"bookmarked\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"public\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"traces\",\"kind\":\"object\",\"type\":\"Trace\",\"relationName\":\"TraceToTraceSession\"}],\"dbName\":\"trace_sessions\"},\"Trace\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"externalId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"external_id\"},{\"name\":\"timestamp\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"user_id\"},{\"name\":\"metadata\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"release\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"version\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"projectId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"project_id\"},{\"name\":\"project\",\"kind\":\"object\",\"type\":\"Project\",\"relationName\":\"ProjectToTrace\"},{\"name\":\"public\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"bookmarked\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"tags\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"input\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"output\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"sessionId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"session_id\"},{\"name\":\"session\",\"kind\":\"object\",\"type\":\"TraceSession\",\"relationName\":\"TraceToTraceSession\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"},{\"name\":\"JobExecution\",\"kind\":\"object\",\"type\":\"JobExecution\",\"relationName\":\"JobExecutionToTrace\"}],\"dbName\":\"traces\"},\"Observation\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"traceId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"trace_id\"},{\"name\":\"projectId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"project_id\"},{\"name\":\"type\",\"kind\":\"enum\",\"type\":\"ObservationType\"},{\"name\":\"startTime\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"start_time\"},{\"name\":\"endTime\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"end_time\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"metadata\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"parentObservationId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"parent_observation_id\"},{\"name\":\"level\",\"kind\":\"enum\",\"type\":\"ObservationLevel\"},{\"name\":\"statusMessage\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"status_message\"},{\"name\":\"version\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"},{\"name\":\"model\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"internalModel\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"internal_model\"},{\"name\":\"internalModelId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"internal_model_id\"},{\"name\":\"modelParameters\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"input\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"output\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"promptTokens\",\"kind\":\"scalar\",\"type\":\"Int\",\"dbName\":\"prompt_tokens\"},{\"name\":\"completionTokens\",\"kind\":\"scalar\",\"type\":\"Int\",\"dbName\":\"completion_tokens\"},{\"name\":\"totalTokens\",\"kind\":\"scalar\",\"type\":\"Int\",\"dbName\":\"total_tokens\"},{\"name\":\"unit\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"inputCost\",\"kind\":\"scalar\",\"type\":\"Decimal\",\"dbName\":\"input_cost\"},{\"name\":\"outputCost\",\"kind\":\"scalar\",\"type\":\"Decimal\",\"dbName\":\"output_cost\"},{\"name\":\"totalCost\",\"kind\":\"scalar\",\"type\":\"Decimal\",\"dbName\":\"total_cost\"},{\"name\":\"calculatedInputCost\",\"kind\":\"scalar\",\"type\":\"Decimal\",\"dbName\":\"calculated_input_cost\"},{\"name\":\"calculatedOutputCost\",\"kind\":\"scalar\",\"type\":\"Decimal\",\"dbName\":\"calculated_output_cost\"},{\"name\":\"calculatedTotalCost\",\"kind\":\"scalar\",\"type\":\"Decimal\",\"dbName\":\"calculated_total_cost\"},{\"name\":\"completionStartTime\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"completion_start_time\"},{\"name\":\"project\",\"kind\":\"object\",\"type\":\"Project\",\"relationName\":\"ObservationToProject\"},{\"name\":\"promptId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"prompt_id\"}],\"dbName\":\"observations\"},\"Score\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"timestamp\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"projectId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"project_id\"},{\"name\":\"project\",\"kind\":\"object\",\"type\":\"Project\",\"relationName\":\"ProjectToScore\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"value\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"source\",\"kind\":\"enum\",\"type\":\"ScoreSource\"},{\"name\":\"authorUserId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"author_user_id\"},{\"name\":\"comment\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"traceId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"trace_id\"},{\"name\":\"observationId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"observation_id\"},{\"name\":\"configId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"config_id\"},{\"name\":\"stringValue\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"string_value\"},{\"name\":\"queueId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"queue_id\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"},{\"name\":\"dataType\",\"kind\":\"enum\",\"type\":\"ScoreDataType\",\"dbName\":\"data_type\"},{\"name\":\"JobExecution\",\"kind\":\"object\",\"type\":\"JobExecution\",\"relationName\":\"JobExecutionToScore\"},{\"name\":\"scoreConfig\",\"kind\":\"object\",\"type\":\"ScoreConfig\",\"relationName\":\"ScoreToScoreConfig\"}],\"dbName\":\"scores\"},\"ScoreConfig\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"},{\"name\":\"projectId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"project_id\"},{\"name\":\"project\",\"kind\":\"object\",\"type\":\"Project\",\"relationName\":\"ProjectToScoreConfig\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"dataType\",\"kind\":\"enum\",\"type\":\"ScoreDataType\",\"dbName\":\"data_type\"},{\"name\":\"isArchived\",\"kind\":\"scalar\",\"type\":\"Boolean\",\"dbName\":\"is_archived\"},{\"name\":\"minValue\",\"kind\":\"scalar\",\"type\":\"Float\",\"dbName\":\"min_value\"},{\"name\":\"maxValue\",\"kind\":\"scalar\",\"type\":\"Float\",\"dbName\":\"max_value\"},{\"name\":\"categories\",\"kind\":\"scalar\",\"type\":\"Json\",\"dbName\":\"categories\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"score\",\"kind\":\"object\",\"type\":\"Score\",\"relationName\":\"ScoreToScoreConfig\"}],\"dbName\":\"score_configs\"},\"AnnotationQueue\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"scoreConfigIds\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"score_config_ids\"},{\"name\":\"projectId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"project_id\"},{\"name\":\"project\",\"kind\":\"object\",\"type\":\"Project\",\"relationName\":\"AnnotationQueueToProject\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"},{\"name\":\"annotationQueueItem\",\"kind\":\"object\",\"type\":\"AnnotationQueueItem\",\"relationName\":\"AnnotationQueueToAnnotationQueueItem\"}],\"dbName\":\"annotation_queues\"},\"AnnotationQueueItem\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"queueId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"queue_id\"},{\"name\":\"queue\",\"kind\":\"object\",\"type\":\"AnnotationQueue\",\"relationName\":\"AnnotationQueueToAnnotationQueueItem\"},{\"name\":\"objectId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"object_id\"},{\"name\":\"objectType\",\"kind\":\"enum\",\"type\":\"AnnotationQueueObjectType\",\"dbName\":\"object_type\"},{\"name\":\"status\",\"kind\":\"enum\",\"type\":\"AnnotationQueueStatus\"},{\"name\":\"lockedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"locked_at\"},{\"name\":\"lockedByUserId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"locked_by_user_id\"},{\"name\":\"lockedByUser\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"LockedByUser\"},{\"name\":\"annotatorUserId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"annotator_user_id\"},{\"name\":\"annotatorUser\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"AnnotatorUser\"},{\"name\":\"completedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"completed_at\"},{\"name\":\"projectId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"project_id\"},{\"name\":\"project\",\"kind\":\"object\",\"type\":\"Project\",\"relationName\":\"AnnotationQueueItemToProject\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"}],\"dbName\":\"annotation_queue_items\"},\"CronJobs\":{\"fields\":[{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"lastRun\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"last_run\"},{\"name\":\"jobStartedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"job_started_at\"},{\"name\":\"state\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":\"cron_jobs\"},\"Dataset\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"projectId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"project_id\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"metadata\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"project\",\"kind\":\"object\",\"type\":\"Project\",\"relationName\":\"DatasetToProject\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"},{\"name\":\"datasetItems\",\"kind\":\"object\",\"type\":\"DatasetItem\",\"relationName\":\"DatasetToDatasetItem\"},{\"name\":\"datasetRuns\",\"kind\":\"object\",\"type\":\"DatasetRuns\",\"relationName\":\"DatasetToDatasetRuns\"}],\"dbName\":\"datasets\"},\"DatasetItem\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"projectId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"project_id\"},{\"name\":\"status\",\"kind\":\"enum\",\"type\":\"DatasetStatus\"},{\"name\":\"input\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"expectedOutput\",\"kind\":\"scalar\",\"type\":\"Json\",\"dbName\":\"expected_output\"},{\"name\":\"metadata\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"sourceTraceId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"source_trace_id\"},{\"name\":\"sourceObservationId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"source_observation_id\"},{\"name\":\"datasetId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"dataset_id\"},{\"name\":\"dataset\",\"kind\":\"object\",\"type\":\"Dataset\",\"relationName\":\"DatasetToDatasetItem\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"},{\"name\":\"datasetRunItems\",\"kind\":\"object\",\"type\":\"DatasetRunItems\",\"relationName\":\"DatasetItemToDatasetRunItems\"}],\"dbName\":\"dataset_items\"},\"DatasetRuns\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"projectId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"project_id\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"metadata\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"datasetId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"dataset_id\"},{\"name\":\"dataset\",\"kind\":\"object\",\"type\":\"Dataset\",\"relationName\":\"DatasetToDatasetRuns\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"},{\"name\":\"datasetRunItems\",\"kind\":\"object\",\"type\":\"DatasetRunItems\",\"relationName\":\"DatasetRunItemsToDatasetRuns\"}],\"dbName\":\"dataset_runs\"},\"DatasetRunItems\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"projectId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"project_id\"},{\"name\":\"datasetRunId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"dataset_run_id\"},{\"name\":\"datasetRun\",\"kind\":\"object\",\"type\":\"DatasetRuns\",\"relationName\":\"DatasetRunItemsToDatasetRuns\"},{\"name\":\"datasetItemId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"dataset_item_id\"},{\"name\":\"datasetItem\",\"kind\":\"object\",\"type\":\"DatasetItem\",\"relationName\":\"DatasetItemToDatasetRunItems\"},{\"name\":\"traceId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"trace_id\"},{\"name\":\"observationId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"observation_id\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"}],\"dbName\":\"dataset_run_items\"},\"Events\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"},{\"name\":\"projectId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"project_id\"},{\"name\":\"project\",\"kind\":\"object\",\"type\":\"Project\",\"relationName\":\"EventsToProject\"},{\"name\":\"data\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"headers\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"url\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"method\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":\"events\"},\"Comment\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"projectId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"project_id\"},{\"name\":\"project\",\"kind\":\"object\",\"type\":\"Project\",\"relationName\":\"CommentToProject\"},{\"name\":\"objectType\",\"kind\":\"enum\",\"type\":\"CommentObjectType\",\"dbName\":\"object_type\"},{\"name\":\"objectId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"object_id\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"},{\"name\":\"content\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"authorUserId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"author_user_id\"}],\"dbName\":\"comments\"},\"Prompt\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"},{\"name\":\"projectId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"project_id\"},{\"name\":\"project\",\"kind\":\"object\",\"type\":\"Project\",\"relationName\":\"ProjectToPrompt\"},{\"name\":\"createdBy\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"created_by\"},{\"name\":\"prompt\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"version\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"type\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"isActive\",\"kind\":\"scalar\",\"type\":\"Boolean\",\"dbName\":\"is_active\"},{\"name\":\"config\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"tags\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"labels\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":\"prompts\"},\"Model\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"},{\"name\":\"projectId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"project_id\"},{\"name\":\"project\",\"kind\":\"object\",\"type\":\"Project\",\"relationName\":\"ModelToProject\"},{\"name\":\"modelName\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"model_name\"},{\"name\":\"matchPattern\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"match_pattern\"},{\"name\":\"startDate\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"start_date\"},{\"name\":\"inputPrice\",\"kind\":\"scalar\",\"type\":\"Decimal\",\"dbName\":\"input_price\"},{\"name\":\"outputPrice\",\"kind\":\"scalar\",\"type\":\"Decimal\",\"dbName\":\"output_price\"},{\"name\":\"totalPrice\",\"kind\":\"scalar\",\"type\":\"Decimal\",\"dbName\":\"total_price\"},{\"name\":\"unit\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"tokenizerId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"tokenizer_id\"},{\"name\":\"tokenizerConfig\",\"kind\":\"scalar\",\"type\":\"Json\",\"dbName\":\"tokenizer_config\"}],\"dbName\":\"models\"},\"AuditLog\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"user_id\"},{\"name\":\"orgId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"org_id\"},{\"name\":\"userOrgRole\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"user_org_role\"},{\"name\":\"projectId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"project_id\"},{\"name\":\"userProjectRole\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"user_project_role\"},{\"name\":\"resourceType\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"resource_type\"},{\"name\":\"resourceId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"resource_id\"},{\"name\":\"action\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"before\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"after\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":\"audit_logs\"},\"EvalTemplate\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"},{\"name\":\"projectId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"project_id\"},{\"name\":\"project\",\"kind\":\"object\",\"type\":\"Project\",\"relationName\":\"EvalTemplateToProject\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"version\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"prompt\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"model\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"provider\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"modelParams\",\"kind\":\"scalar\",\"type\":\"Json\",\"dbName\":\"model_params\"},{\"name\":\"vars\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"outputSchema\",\"kind\":\"scalar\",\"type\":\"Json\",\"dbName\":\"output_schema\"},{\"name\":\"JobConfiguration\",\"kind\":\"object\",\"type\":\"JobConfiguration\",\"relationName\":\"EvalTemplateToJobConfiguration\"}],\"dbName\":\"eval_templates\"},\"JobConfiguration\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"},{\"name\":\"projectId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"project_id\"},{\"name\":\"project\",\"kind\":\"object\",\"type\":\"Project\",\"relationName\":\"JobConfigurationToProject\"},{\"name\":\"jobType\",\"kind\":\"enum\",\"type\":\"JobType\",\"dbName\":\"job_type\"},{\"name\":\"status\",\"kind\":\"enum\",\"type\":\"JobConfigState\"},{\"name\":\"evalTemplateId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"eval_template_id\"},{\"name\":\"evalTemplate\",\"kind\":\"object\",\"type\":\"EvalTemplate\",\"relationName\":\"EvalTemplateToJobConfiguration\"},{\"name\":\"scoreName\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"score_name\"},{\"name\":\"filter\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"targetObject\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"target_object\"},{\"name\":\"variableMapping\",\"kind\":\"scalar\",\"type\":\"Json\",\"dbName\":\"variable_mapping\"},{\"name\":\"sampling\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"delay\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"JobExecution\",\"kind\":\"object\",\"type\":\"JobExecution\",\"relationName\":\"JobConfigurationToJobExecution\"}],\"dbName\":\"job_configurations\"},\"JobExecution\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"},{\"name\":\"projectId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"project_id\"},{\"name\":\"project\",\"kind\":\"object\",\"type\":\"Project\",\"relationName\":\"JobExecutionToProject\"},{\"name\":\"jobConfigurationId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"job_configuration_id\"},{\"name\":\"jobConfiguration\",\"kind\":\"object\",\"type\":\"JobConfiguration\",\"relationName\":\"JobConfigurationToJobExecution\"},{\"name\":\"status\",\"kind\":\"enum\",\"type\":\"JobExecutionStatus\"},{\"name\":\"startTime\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"start_time\"},{\"name\":\"endTime\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"end_time\"},{\"name\":\"error\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"jobInputTraceId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"job_input_trace_id\"},{\"name\":\"trace\",\"kind\":\"object\",\"type\":\"Trace\",\"relationName\":\"JobExecutionToTrace\"},{\"name\":\"jobOutputScoreId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"job_output_score_id\"},{\"name\":\"score\",\"kind\":\"object\",\"type\":\"Score\",\"relationName\":\"JobExecutionToScore\"}],\"dbName\":\"job_executions\"},\"SsoConfig\":{\"fields\":[{\"name\":\"domain\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"},{\"name\":\"authProvider\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"auth_provider\"},{\"name\":\"authConfig\",\"kind\":\"scalar\",\"type\":\"Json\",\"dbName\":\"auth_config\"}],\"dbName\":\"sso_configs\"},\"PosthogIntegration\":{\"fields\":[{\"name\":\"projectId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"project_id\"},{\"name\":\"project\",\"kind\":\"object\",\"type\":\"Project\",\"relationName\":\"PosthogIntegrationToProject\"},{\"name\":\"encryptedPosthogApiKey\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"encrypted_posthog_api_key\"},{\"name\":\"posthogHostName\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"posthog_host_name\"},{\"name\":\"lastSyncAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"last_sync_at\"},{\"name\":\"enabled\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"}],\"dbName\":\"posthog_integrations\"},\"BatchExport\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"},{\"name\":\"projectId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"project_id\"},{\"name\":\"project\",\"kind\":\"object\",\"type\":\"Project\",\"relationName\":\"BatchExportToProject\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"user_id\"},{\"name\":\"finishedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"finished_at\"},{\"name\":\"expiresAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"expires_at\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"status\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"query\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"format\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"url\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"log\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":\"batch_exports\"},\"TraceView\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"externalId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"external_id\"},{\"name\":\"timestamp\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"user_id\"},{\"name\":\"metadata\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"release\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"version\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"projectId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"project_id\"},{\"name\":\"public\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"bookmarked\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"tags\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"input\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"output\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"sessionId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"session_id\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"},{\"name\":\"duration\",\"kind\":\"scalar\",\"type\":\"Float\",\"dbName\":\"duration\"}],\"dbName\":\"traces_view\"},\"ObservationView\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"traceId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"trace_id\"},{\"name\":\"projectId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"project_id\"},{\"name\":\"type\",\"kind\":\"enum\",\"type\":\"ObservationType\"},{\"name\":\"startTime\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"start_time\"},{\"name\":\"endTime\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"end_time\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"metadata\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"parentObservationId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"parent_observation_id\"},{\"name\":\"level\",\"kind\":\"enum\",\"type\":\"ObservationLevel\"},{\"name\":\"statusMessage\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"status_message\"},{\"name\":\"version\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"},{\"name\":\"model\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"modelParameters\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"input\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"output\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"promptTokens\",\"kind\":\"scalar\",\"type\":\"Int\",\"dbName\":\"prompt_tokens\"},{\"name\":\"completionTokens\",\"kind\":\"scalar\",\"type\":\"Int\",\"dbName\":\"completion_tokens\"},{\"name\":\"totalTokens\",\"kind\":\"scalar\",\"type\":\"Int\",\"dbName\":\"total_tokens\"},{\"name\":\"unit\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"completionStartTime\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"completion_start_time\"},{\"name\":\"promptId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"prompt_id\"},{\"name\":\"promptName\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"prompt_name\"},{\"name\":\"promptVersion\",\"kind\":\"scalar\",\"type\":\"Int\",\"dbName\":\"prompt_version\"},{\"name\":\"modelId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"model_id\"},{\"name\":\"inputPrice\",\"kind\":\"scalar\",\"type\":\"Decimal\",\"dbName\":\"input_price\"},{\"name\":\"outputPrice\",\"kind\":\"scalar\",\"type\":\"Decimal\",\"dbName\":\"output_price\"},{\"name\":\"totalPrice\",\"kind\":\"scalar\",\"type\":\"Decimal\",\"dbName\":\"total_price\"},{\"name\":\"calculatedInputCost\",\"kind\":\"scalar\",\"type\":\"Decimal\",\"dbName\":\"calculated_input_cost\"},{\"name\":\"calculatedOutputCost\",\"kind\":\"scalar\",\"type\":\"Decimal\",\"dbName\":\"calculated_output_cost\"},{\"name\":\"calculatedTotalCost\",\"kind\":\"scalar\",\"type\":\"Decimal\",\"dbName\":\"calculated_total_cost\"},{\"name\":\"latency\",\"kind\":\"scalar\",\"type\":\"Float\",\"dbName\":\"latency\"},{\"name\":\"timeToFirstToken\",\"kind\":\"scalar\",\"type\":\"Float\",\"dbName\":\"time_to_first_token\"}],\"dbName\":\"observations_view\"}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = {
  getRuntime: () => require('./query_engine_bg.js'),
  getQueryEngineWasmModule: async () => {
    const loader = (await import('#wasm-engine-loader')).default
    const engine = (await loader).default
    return engine 
  }
}

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

