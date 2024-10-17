
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.21.0
 * Query Engine version: 08713a93b99d58f31485621c634b04983ae01d95
 */
Prisma.prismaVersion = {
  client: "5.21.0",
  engine: "08713a93b99d58f31485621c634b04983ae01d95"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

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
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
