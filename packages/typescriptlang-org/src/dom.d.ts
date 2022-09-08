/////////////////////////////
/// APIs Window
/////////////////////////////

interface AddEventListenerOptions extends EventListenerOptions {
    once?: boolean;
    passive?: boolean;
    signal?: AbortSignal;
}

interface AesCbcParams extends Algorithm {
    iv: BufferSource;
}

interface AesCtrParams extends Algorithm {
    counter: BufferSource;
    length: number;
}

interface AesDerivedKeyParams extends Algorithm {
    length: number;
}

interface AesGcmParams extends Algorithm {
    additionalData?: BufferSource;
    iv: BufferSource;
    tagLength?: number;
}

interface AesKeyAlgorithm extends KeyAlgorithm {
    length: number;
}

interface AesKeyGenParams extends Algorithm {
    length: number;
}

interface Algorithm {
    name: string;
}

interface AnalyserOptions extends AudioNodeOptions {
    fftSize?: number;
    maxDecibels?: number;
    minDecibels?: number;
    smoothingTimeConstant?: number;
}

interface AnimationEventInit extends EventInit {
    animationName?: string;
    elapsedTime?: number;
    pseudoElement?: string;
}

interface AnimationPlaybackEventInit extends EventInit {
    currentTime?: number | null;
    timelineTime?: number | null;
}

interface AssignedNodesOptions {
    flatten?: boolean;
}

interface AudioBufferOptions {
    length: number;
    numberOfChannels?: number;
    sampleRate: number;
}

interface AudioBufferSourceOptions {
    buffer?: AudioBuffer | null;
    detune?: number;
    loop?: boolean;
    loopEnd?: number;
    loopStart?: number;
    playbackRate?: number;
}

interface AudioConfiguration {
    bitrate?: number;
    channels?: string;
    contentType: string;
    samplerate?: number;
    spatialRendering?: boolean;
}

interface AudioContextOptions {
    latencyHint?: AudioContextLatencyCategory | number;
    sampleRate?: number;
}

interface AudioNodeOptions {
    channelCount?: number;
    channelCountMode?: ChannelCountMode;
    channelInterpretation?: ChannelInterpretation;
}

interface AudioProcessingEventInit extends EventInit {
    inputBuffer: AudioBuffer;
    outputBuffer: AudioBuffer;
    playbackTime: number;
}

interface AudioTimestamp {
    contextTime?: number;
    performanceTime?: DOMHighResTimeStamp;
}

interface AudioWorkletNodeOptions extends AudioNodeOptions {
    numberOfInputs?: number;
    numberOfOutputs?: number;
    outputChannelCount?: number[];
    parameterData?: Record<string, number>;
    processorOptions?: any;
}

interface AuthenticationExtensionsClientInputs {
    appid?: string;
    appidExclude?: string;
    credProps?: boolean;
    uvm?: boolean;
}

interface AuthenticationExtensionsClientOutputs {
    appid?: boolean;
    credProps?: CredentialPropertiesOutput;
    uvm?: UvmEntries;
}

interface AuthenticatorSelectionCriteria {
    authenticatorAttachment?: AuthenticatorAttachment;
    requireResidentKey?: boolean;
    residentKey?: ResidentKeyRequirement;
    userVerification?: UserVerificationRequirement;
}

interface BiquadFilterOptions extends AudioNodeOptions {
    Q?: number;
    detune?: number;
    frequency?: number;
    gain?: number;
    type?: BiquadFilterType;
}

interface BlobEventInit {
    data: Blob;
    timecode?: DOMHighResTimeStamp;
}

interface BlobPropertyBag {
    endings?: EndingType;
    type?: string;
}

interface CacheQueryOptions {
    ignoreMethod?: boolean;
    ignoreSearch?: boolean;
    ignoreVary?: boolean;
}

interface CanvasRenderingContext2DSettings {
    alpha?: boolean;
    colorSpace?: PredefinedColorSpace;
    desynchronized?: boolean;
}

interface ChannelMergerOptions extends AudioNodeOptions {
    numberOfInputs?: number;
}

interface ChannelSplitterOptions extends AudioNodeOptions {
    numberOfOutputs?: number;
}

interface ClientQueryOptions {
    includeUncontrolled?: boolean;
    type?: ClientTypes;
}

interface ClipboardEventInit extends EventInit {
    clipboardData?: DataTransfer | null;
}

interface ClipboardItemOptions {
    presentationStyle?: PresentationStyle;
}

interface CloseEventInit extends EventInit {
    code?: number;
    reason?: string;
    wasClean?: boolean;
}

interface CompositionEventInit extends UIEventInit {
    data?: string;
}

interface ComputedEffectTiming extends EffectTiming {
    activeDuration?: number;
    currentIteration?: number | null;
    endTime?: number;
    localTime?: number | null;
    progress?: number | null;
    startTime?: number;
}

interface ComputedKeyframe {
    composite: CompositeOperationOrAuto;
    computedOffset: number;
    easing: string;
    offset: number | null;
    [property: string]: string | number | null | undefined;
}

interface ConstantSourceOptions {
    offset?: number;
}

interface ConstrainBooleanParameters {
    exact?: boolean;
    ideal?: boolean;
}

interface ConstrainDOMStringParameters {
    exact?: string | string[];
    ideal?: string | string[];
}

interface ConstrainDoubleRange extends DoubleRange {
    exact?: number;
    ideal?: number;
}

interface ConstrainULongRange extends ULongRange {
    exact?: number;
    ideal?: number;
}

interface ConvolverOptions extends AudioNodeOptions {
    buffer?: AudioBuffer | null;
    disableNormalization?: boolean;
}

interface CredentialCreationOptions {
    publicKey?: PublicKeyCredentialCreationOptions;
    signal?: AbortSignal;
}

interface CredentialPropertiesOutput {
    rk?: boolean;
}

interface CredentialRequestOptions {
    mediation?: CredentialMediationRequirement;
    publicKey?: PublicKeyCredentialRequestOptions;
    signal?: AbortSignal;
}

interface CryptoKeyPair {
    privateKey?: CryptoKey;
    publicKey?: CryptoKey;
}

interface CustomEventInit<T = any> extends EventInit {
    detail?: T;
}

interface DOMMatrix2DInit {
    a?: number;
    b?: number;
    c?: number;
    d?: number;
    e?: number;
    f?: number;
    m11?: number;
    m12?: number;
    m21?: number;
    m22?: number;
    m41?: number;
    m42?: number;
}

interface DOMMatrixInit extends DOMMatrix2DInit {
    is2D?: boolean;
    m13?: number;
    m14?: number;
    m23?: number;
    m24?: number;
    m31?: number;
    m32?: number;
    m33?: number;
    m34?: number;
    m43?: number;
    m44?: number;
}

interface DOMPointInit {
    w?: number;
    x?: number;
    y?: number;
    z?: number;
}

interface DOMQuadInit {
    p1?: DOMPointInit;
    p2?: DOMPointInit;
    p3?: DOMPointInit;
    p4?: DOMPointInit;
}

interface DOMRectInit {
    height?: number;
    width?: number;
    x?: number;
    y?: number;
}

interface DelayOptions extends AudioNodeOptions {
    delayTime?: number;
    maxDelayTime?: number;
}

interface DeviceMotionEventAccelerationInit {
    x?: number | null;
    y?: number | null;
    z?: number | null;
}

interface DeviceMotionEventInit extends EventInit {
    acceleration?: DeviceMotionEventAccelerationInit;
    accelerationIncludingGravity?: DeviceMotionEventAccelerationInit;
    interval?: number;
    rotationRate?: DeviceMotionEventRotationRateInit;
}

interface DeviceMotionEventRotationRateInit {
    alpha?: number | null;
    beta?: number | null;
    gamma?: number | null;
}

interface DeviceOrientationEventInit extends EventInit {
    absolute?: boolean;
    alpha?: number | null;
    beta?: number | null;
    gamma?: number | null;
}

interface DisplayMediaStreamConstraints {
    audio?: boolean | MediaTrackConstraints;
    video?: boolean | MediaTrackConstraints;
}

interface DocumentTimelineOptions {
    originTime?: DOMHighResTimeStamp;
}

interface DoubleRange {
    max?: number;
    min?: number;
}

interface DragEventInit extends MouseEventInit {
    dataTransfer?: DataTransfer | null;
}

interface DynamicsCompressorOptions extends AudioNodeOptions {
    attack?: number;
    knee?: number;
    ratio?: number;
    release?: number;
    threshold?: number;
}

interface EcKeyAlgorithm extends KeyAlgorithm {
    namedCurve: NamedCurve;
}

interface EcKeyGenParams extends Algorithm {
    namedCurve: NamedCurve;
}

interface EcKeyImportParams extends Algorithm {
    namedCurve: NamedCurve;
}

interface EcdhKeyDeriveParams extends Algorithm {
    public: CryptoKey;
}

interface EcdsaParams extends Algorithm {
    hash: HashAlgorithmIdentifier;
}

interface EffectTiming {
    delay?: number;
    direction?: PlaybackDirection;
    duracion?: number | string;
    easing?: string;
    endDelay?: number;
    fill?: FillMode;
    iterationStart?: number;
    iterations?: number;
    playbackRate?: number;
}

interface ElementCreationOptions {
    is?: string;
}

interface ElementDefinitionOptions {
    extends?: string;
}

interface ErrorEventInit extends EventInit {
    colno?: number;
    error?: any;
    filename?: string;
    lineno?: number;
    message?: string;
}

interface EventInit {
    bubbles?: boolean;
    cancelable?: boolean;
    composed?: boolean;
}

interface EventListenerOptions {
    capture?: boolean;
}

interface EventModifierInit extends UIEventInit {
    altKey?: boolean;
    ctrlKey?: boolean;
    metaKey?: boolean;
    modifierAltGraph?: boolean;
    modifierCapsLock?: boolean;
    modifierFn?: boolean;
    modifierFnLock?: boolean;
    modifierHyper?: boolean;
    modifierNumLock?: boolean;
    modifierScrollLock?: boolean;
    modifierSuper?: boolean;
    modifierSymbol?: boolean;
    modifierSymbolLock?: boolean;
    shiftKey?: boolean;
}

interface EventSourceInit {
    withCredentials?: boolean;
}

interface FilePropertyBag extends BlobPropertyBag {
    lastModified?: number;
}

interface FileSystemFlags {
    create?: boolean;
    exclusive?: boolean;
}

interface FocusEventInit extends UIEventInit {
    relatedTarget?: EventTarget | null;
}

interface FocusOptions {
    preventScroll?: boolean;
}

interface FontFaceDescriptors {
    display?: string;
    featureSettings?: string;
    stretch?: string;
    style?: string;
    unicodeRange?: string;
    variant?: string;
    weight?: string;
}

interface FontFaceSetLoadEventInit extends EventInit {
    fontfaces?: FontFace[];
}

interface FormDataEventInit extends EventInit {
    formData: FormData;
}

interface FullscreenOptions {
    navigationUI?: FullscreenNavigationUI;
}

interface GainOptions extends AudioNodeOptions {
    gain?: number;
}

interface GamepadEventInit extends EventInit {
    gamepad: Gamepad;
}

interface GetAnimationsOptions {
    subtree?: boolean;
}

interface GetNotificationOptions {
    tag?: string;
}

interface GetRootNodeOptions {
    composed?: boolean;
}

interface HashChangeEventInit extends EventInit {
    newURL?: string;
    oldURL?: string;
}

interface HkdfParams extends Algorithm {
    hash: HashAlgorithmIdentifier;
    info: BufferSource;
    salt: BufferSource;
}

interface HmacImportParams extends Algorithm {
    hash: HashAlgorithmIdentifier;
    length?: number;
}

interface HmacKeyAlgorithm extends KeyAlgorithm {
    hash: KeyAlgorithm;
    length: number;
}

interface HmacKeyGenParams extends Algorithm {
    hash: HashAlgorithmIdentifier;
    length?: number;
}

interface IDBDatabaseInfo {
    nombre?: string;
    version?: number;
}

interface IDBIndexParameters {
    multiEntry?: boolean;
    unique?: boolean;
}

interface IDBObjectStoreParameters {
    autoIncrement?: boolean;
    keyPath?: string | string[] | null;
}

interface IDBVersionChangeEventInit extends EventInit {
    newVersion?: number | null;
    oldVersion?: number;
}

interface IIRFilterOptions extends AudioNodeOptions {
    feedback: number[];
    feedforward: number[];
}

interface IdleRequestOptions {
    tiempoTerminado?: number;
}

interface ImageBitmapOptions {
    colorSpaceConversion?: ColorSpaceConversion;
    imageOrientation?: ImageOrientation;
    premultiplyAlpha?: PremultiplyAlpha;
    resizeHeight?: number;
    resizeQuality?: ResizeQuality;
    resizeWidth?: number;
}

interface ImageBitmapRenderingContextSettings {
    alpha?: boolean;
}

interface ImageDataSettings {
    colorSpace?: PredefinedColorSpace;
}

interface ImportMeta {
    url: string;
}

interface InputEventInit extends UIEventInit {
    data?: string | null;
    dataTransfer?: DataTransfer | null;
    inputType?: string;
    isComposing?: boolean;
    targetRanges?: StaticRange[];
}

interface IntersectionObserverEntryInit {
    boundingClientRect: DOMRectInit;
    intersectionRatio: number;
    intersectionRect: DOMRectInit;
    isIntersecting: boolean;
    rootBounds: DOMRectInit | null;
    target: Element;
    time: DOMHighResTimeStamp;
}

interface IntersectionObserverInit {
    root?: Element | Document | null;
    rootMargin?: string;
    threshold?: number | number[];
}

interface JsonWebKey {
    alg?: string;
    crv?: string;
    d?: string;
    dp?: string;
    dq?: string;
    e?: string;
    ext?: boolean;
    k?: string;
    key_ops?: string[];
    kty?: string;
    n?: string;
    oth?: RsaOtherPrimesInfo[];
    p?: string;
    q?: string;
    qi?: string;
    use?: string;
    x?: string;
    y?: string;
}

interface KeyAlgorithm {
    name: string;
}

interface KeyboardEventInit extends EventModifierInit {
    /** @deprecated */
    charCode?: number;
    code?: string;
    isComposing?: boolean;
    key?: string;
    /** @deprecated */
    keyCode?: number;
    location?: number;
    repeat?: boolean;
}

interface Keyframe {
    composite?: CompositeOperationOrAuto;
    easing?: string;
    offset?: number | null;
    [property: string]: string | number | null | undefined;
}

interface KeyframeAnimationOptions extends KeyframeEffectOptions {
    id?: string;
}

interface KeyframeEffectOptions extends EffectTiming {
    composite?: CompositeOperation;
    iterationComposite?: IterationCompositeOperation;
    pseudoElement?: string | null;
}

interface MediaCapabilitiesDecodingInfo extends MediaCapabilitiesInfo {
    configuration?: MediaDecodingConfiguration;
}

interface MediaCapabilitiesEncodingInfo extends MediaCapabilitiesInfo {
    configuration?: MediaEncodingConfiguration;
}

interface MediaCapabilitiesInfo {
    powerEfficient: boolean;
    smooth: boolean;
    supported: boolean;
}

interface MediaConfiguration {
    audio?: AudioConfiguration;
    video?: VideoConfiguration;
}

interface MediaDecodingConfiguration extends MediaConfiguration {
    type: MediaDecodingType;
}

interface MediaElementAudioSourceOptions {
    mediaElement: HTMLMediaElement;
}

interface MediaEncodingConfiguration extends MediaConfiguration {
    type: MediaEncodingType;
}

interface MediaEncryptedEventInit extends EventInit {
    initData?: ArrayBuffer | null;
    initDataType?: string;
}

interface MediaImage {
    sizes?: string;
    src: string;
    type?: string;
}

interface MediaKeyMessageEventInit extends EventInit {
    message: ArrayBuffer;
    messageType: MediaKeyMessageType;
}

interface MediaKeySystemConfiguration {
    audioCapabilities?: MediaKeySystemMediaCapability[];
    distinctiveIdentifier?: MediaKeysRequirement;
    initDataTypes?: string[];
    label?: string;
    persistentState?: MediaKeysRequirement;
    sessionTypes?: string[];
    videoCapabilities?: MediaKeySystemMediaCapability[];
}

interface MediaKeySystemMediaCapability {
    contentType?: string;
    encryptionScheme?: string | null;
    robustness?: string;
}

interface MediaMetadataInit {
    album?: string;
    artist?: string;
    artwork?: MediaImage[];
    title?: string;
}

interface MediaPositionState {
    duracion?: number;
    playbackRate?: number;
    position?: number;
}

interface MediaQueryListEventInit extends EventInit {
    matches?: boolean;
    media?: string;
}

interface MediaRecorderErrorEventInit extends EventInit {
    error: DOMException;
}

interface MediaRecorderOptions {
    audioBitsPerSecond?: number;
    bitsPerSecond?: number;
    mimeType?: string;
    videoBitsPerSecond?: number;
}

interface MediaSessionActionDetails {
    accion: MediaSessionAction;
    fastSeek?: boolean | null;
    seekOffset?: number | null;
    seekTime?: number | null;
}

interface MediaStreamAudioSourceOptions {
    mediaStream: MediaStream;
}

interface MediaStreamConstraints {
    audio?: boolean | MediaTrackConstraints;
    peerIdentity?: string;
    video?: boolean | MediaTrackConstraints;
}

interface MediaStreamTrackEventInit extends EventInit {
    track: MediaStreamTrack;
}

interface MediaTrackCapabilities {
    aspectRatio?: DoubleRange;
    autoGainControl?: boolean[];
    channelCount?: ULongRange;
    cursor?: string[];
    deviceId?: string;
    displaySurface?: string;
    echoCancellation?: boolean[];
    facingMode?: string[];
    frameRate?: DoubleRange;
    groupId?: string;
    height?: ULongRange;
    latency?: DoubleRange;
    logicalSurface?: boolean;
    noiseSuppression?: boolean[];
    resizeMode?: string[];
    sampleRate?: ULongRange;
    sampleSize?: ULongRange;
    width?: ULongRange;
}

interface MediaTrackConstraintSet {
    aspectRatio?: ConstrainDouble;
    channelCount?: ConstrainULong;
    deviceId?: ConstrainDOMString;
    echoCancellation?: ConstrainBoolean;
    facingMode?: ConstrainDOMString;
    frameRate?: ConstrainDouble;
    groupId?: ConstrainDOMString;
    height?: ConstrainULong;
    latency?: ConstrainDouble;
    sampleRate?: ConstrainULong;
    sampleSize?: ConstrainULong;
    suppressLocalAudioPlayback?: ConstrainBoolean;
    width?: ConstrainULong;
}

interface MediaTrackConstraints extends MediaTrackConstraintSet {
    advanced?: MediaTrackConstraintSet[];
}

interface MediaTrackSettings {
    aspectRatio?: number;
    deviceId?: string;
    echoCancellation?: boolean;
    facingMode?: string;
    frameRate?: number;
    groupId?: string;
    height?: number;
    restrictOwnAudio?: boolean;
    sampleRate?: number;
    sampleSize?: number;
    width?: number;
}

interface MediaTrackSupportedConstraints {
    aspectRatio?: boolean;
    deviceId?: boolean;
    echoCancellation?: boolean;
    facingMode?: boolean;
    frameRate?: boolean;
    groupId?: boolean;
    height?: boolean;
    sampleRate?: boolean;
    sampleSize?: boolean;
    suppressLocalAudioPlayback?: boolean;
    width?: boolean;
}

interface MessageEventInit<T = any> extends EventInit {
    data?: T;
    lastEventId?: string;
    origin?: string;
    ports?: MessagePort[];
    source?: MessageEventSource | null;
}

interface MouseEventInit extends EventModifierInit {
    button?: number;
    buttons?: number;
    clientX?: number;
    clientY?: number;
    movementX?: number;
    movementY?: number;
    relatedTarget?: EventTarget | null;
    screenX?: number;
    screenY?: number;
}

interface MultiCacheQueryOptions extends CacheQueryOptions {
    cacheName?: string;
}

interface MutationObserverInit {
    /**
     * Establece en una lista de nombres locales de atributo (sin espacio de nombres) si no todas las mutaciones de atributos se deben observar y los atributos son true u omitidos.
     */
    attributeFilter?: string[];
    /**
     * Establece en True si los atributos son true u omitidos y el valor de atributo target antes de que sea necesario registrar la mutación.
     */
    attributeOldValue?: boolean;
    /**
     * Establece en true si se deben observar mutaciones a los atributos de target. Se puede omitir si se especifica AttributeDoldValue o AttributeFilter.
     */
    attributes?: boolean;
    /**
     * Establece en true si se deben observar mutaciones a los datos de target. Se puede omitir si se especifica el characterDataOldValue.
     */
    characterData?: boolean;
    /**
     * Establece en true si characterData se establece en trueo o fue omitido y sea necesario registrar los datos de target antes de la mutación.
     */
    characterDataOldValue?: boolean;
    /**
     * Se establece en true si se deben observar mutaciones a los hijos de target.
     */
    childList?: boolean;
    /**
     * Se establece en true si las mutaciones no solo se observan en los descendientes de target, sino también en los descendientes de target.
     */
    subtree?: boolean;
}

interface NotificationAction {
    accion: string;
    icon?: string;
    title: string;
}

interface NotificationOptions {
    actions?: NotificationAction[];
    badge?: string;
    body?: string;
    data?: any;
    dir?: NotificationDirection;
    icon?: string;
    image?: string;
    lang?: string;
    renotify?: boolean;
    requireInteraction?: boolean;
    silent?: boolean;
    tag?: string;
    timestamp?: DOMTimeStamp;
    vibrate?: VibratePattern;
}

interface OfflineAudioCompletionEventInit extends EventInit {
    renderedBuffer: AudioBuffer;
}

interface OfflineAudioContextOptions {
    length: number;
    numberOfChannels?: number;
    sampleRate: number;
}

interface OptionalEffectTiming {
    delay?: number;
    direction?: PlaybackDirection;
    duracion?: number | string;
    easing?: string;
    endDelay?: number;
    fill?: FillMode;
    iterationStart?: number;
    iterations?: number;
    playbackRate?: number;
}

interface OscillatorOptions extends AudioNodeOptions {
    detune?: number;
    frequency?: number;
    periodicWave?: PeriodicWave;
    type?: OscillatorType;
}

interface PageTransitionEventInit extends EventInit {
    persisted?: boolean;
}

interface PannerOptions extends AudioNodeOptions {
    coneInnerAngle?: number;
    coneOuterAngle?: number;
    coneOuterGain?: number;
    distanceModel?: DistanceModelType;
    maxDistance?: number;
    orientationX?: number;
    orientationY?: number;
    orientationZ?: number;
    panningModel?: PanningModelType;
    positionX?: number;
    positionY?: number;
    positionZ?: number;
    refDistance?: number;
    rolloffFactor?: number;
}

interface PaymentCurrencyAmount {
    currency: string;
    value: string;
}

interface PaymentDetailsBase {
    displayItems?: PaymentItem[];
    modifiers?: PaymentDetailsModifier[];
}

interface PaymentDetailsInit extends PaymentDetailsBase {
    id?: string;
    total: PaymentItem;
}

interface PaymentDetailsModifier {
    additionalDisplayItems?: PaymentItem[];
    data?: any;
    supportedMethods: string;
    total?: PaymentItem;
}

interface PaymentDetailsUpdate extends PaymentDetailsBase {
    paymentMethodErrors?: any;
    total?: PaymentItem;
}

interface PaymentItem {
    amount: PaymentCurrencyAmount;
    label: string;
    pending?: boolean;
}

interface PaymentMethodChangeEventInit extends PaymentRequestUpdateEventInit {
    methodDetails?: any;
    methodName?: string;
}

interface PaymentMethodData {
    data?: any;
    supportedMethods: string;
}

interface PaymentRequestUpdateEventInit extends EventInit {
}

interface PaymentValidationErrors {
    error?: string;
    paymentMethod?: any;
}

interface Pbkdf2Params extends Algorithm {
    hash: HashAlgorithmIdentifier;
    iterations: number;
    salt: BufferSource;
}

interface PerformanceMarkOptions {
    detail?: any;
    startTime?: DOMHighResTimeStamp;
}

interface PerformanceMeasureOptions {
    detail?: any;
    duracion?: DOMHighResTimeStamp;
    end?: string | DOMHighResTimeStamp;
    start?: string | DOMHighResTimeStamp;
}

interface PerformanceObserverInit {
    buffered?: boolean;
    entryTypes?: string[];
    type?: string;
}

interface PeriodicWaveConstraints {
    disableNormalization?: boolean;
}

interface PeriodicWaveOptions extends PeriodicWaveConstraints {
    imag?: number[] | Float32Array;
    real?: number[] | Float32Array;
}

interface PermissionDescriptor {
    name: PermissionName;
}

interface PointerEventInit extends MouseEventInit {
    coalescedEvents?: PointerEvent[];
    height?: number;
    isPrimary?: boolean;
    pointerId?: number;
    pointerType?: string;
    predictedEvents?: PointerEvent[];
    pressure?: number;
    tangentialPressure?: number;
    tiltX?: number;
    tiltY?: number;
    twist?: number;
    width?: number;
}

interface PopStateEventInit extends EventInit {
    state?: any;
}

interface PositionOptions {
    enableHighAccuracy?: boolean;
    maximumAge?: number;
    tiempoTerminado?: number;
}

interface PostMessageOptions {
    transfer?: any[];
}

interface ProgressEventInit extends EventInit {
    lengthComputable?: boolean;
    loaded?: number;
    total?: number;
}

interface PromiseRejectionEventInit extends EventInit {
    promise: Promise<any>;
    reason?: any;
}

interface PropertyIndexedKeyframes {
    composite?: CompositeOperationOrAuto | CompositeOperationOrAuto[];
    easing?: string | string[];
    offset?: number | (number | null)[];
    [property: string]: string | string[] | number | null | (number | null)[] | undefined;
}

interface PublicKeyCredentialCreationOptions {
    attestation?: AttestationConveyancePreference;
    authenticatorSelection?: AuthenticatorSelectionCriteria;
    challenge: BufferSource;
    excludeCredentials?: PublicKeyCredentialDescriptor[];
    extensions?: AuthenticationExtensionsClientInputs;
    pubKeyCredParams: PublicKeyCredentialParameters[];
    rp: PublicKeyCredentialRpEntity;
    tiempoTerminado?: number;
    user: PublicKeyCredentialUserEntity;
}

interface PublicKeyCredentialDescriptor {
    id: BufferSource;
    transports?: AuthenticatorTransport[];
    type: PublicKeyCredentialType;
}

interface PublicKeyCredentialEntity {
    name: string;
}

interface PublicKeyCredentialParameters {
    alg: COSEAlgorithmIdentifier;
    type: PublicKeyCredentialType;
}

interface PublicKeyCredentialRequestOptions {
    allowCredentials?: PublicKeyCredentialDescriptor[];
    challenge: BufferSource;
    extensions?: AuthenticationExtensionsClientInputs;
    rpId?: string;
    tiempoTerminado?: number;
    userVerification?: UserVerificationRequirement;
}

interface PublicKeyCredentialRpEntity extends PublicKeyCredentialEntity {
    id?: string;
}

interface PublicKeyCredentialUserEntity extends PublicKeyCredentialEntity {
    displayName: string;
    id: BufferSource;
}

interface PushSubscriptionJSON {
    endpoint?: string;
    expirationTime?: DOMTimeStamp | null;
    keys?: Record<string, string>;
}

interface PushSubscriptionOptionsInit {
    applicationServerKey?: BufferSource | string | null;
    userVisibleOnly?: boolean;
}

interface QueuingStrategy<T = any> {
    highWaterMark?: number;
    size?: QueuingStrategySize<T>;
}

interface QueuingStrategyInit {
    /**
     * Crea una nueva ByteLengthQueuingStrategy con la marca de límite superior proporcionada.
     *
     * Ten en cuenta que la marca de límite superior proporcionada no se validará antes de tiempo. En cambio, si es negativo, NaN, o no es un número, la ByteLengthQueuingStrategy resultante hará que se arroje el constructor de flujo correspondiente.
     */
    highWaterMark: number;
}

interface RTCAnswerOptions extends RTCOfferAnswerOptions {
}

interface RTCCertificateExpiration {
    expires?: DOMTimeStamp;
}

interface RTCConfiguration {
    bundlePolicy?: RTCBundlePolicy;
    certificates?: RTCCertificate[];
    iceCandidatePoolSize?: number;
    iceServers?: RTCIceServer[];
    iceTransportPolicy?: RTCIceTransportPolicy;
    rtcpMuxPolicy?: RTCRtcpMuxPolicy;
}

interface RTCDTMFToneChangeEventInit extends EventInit {
    tone?: string;
}

interface RTCDataChannelEventInit extends EventInit {
    channel: RTCDataChannel;
}

interface RTCDataChannelInit {
    id?: number;
    maxPacketLifeTime?: number;
    maxRetransmits?: number;
    negotiated?: boolean;
    ordered?: boolean;
    protocol?: string;
}

interface RTCDtlsFingerprint {
    algorithm?: string;
    value?: string;
}

interface RTCIceCandidateInit {
    candidate?: string;
    sdpMLineIndex?: number | null;
    sdpMid?: string | null;
    usernameFragment?: string | null;
}

interface RTCIceCandidatePairStats extends RTCStats {
    availableIncomingBitrate?: number;
    availableOutgoingBitrate?: number;
    bytesReceived?: number;
    bytesSent?: number;
    currentRoundTripTime?: number;
    localCandidateId: string;
    nominated?: boolean;
    remoteCandidateId: string;
    requestsReceived?: number;
    requestsSent?: number;
    responsesReceived?: number;
    responsesSent?: number;
    state: RTCStatsIceCandidatePairState;
    totalRoundTripTime?: number;
    transportId: string;
}

interface RTCIceServer {
    credential?: string;
    credentialType?: RTCIceCredentialType;
    urls: string | string[];
    username?: string;
}

interface RTCInboundRtpStreamStats extends RTCReceivedRtpStreamStats {
    firCount?: number;
    framesDecoded?: number;
    nackCount?: number;
    pliCount?: number;
    qpSum?: number;
    remoteId?: string;
}

interface RTCLocalSessionDescriptionInit {
    sdp?: string;
    type?: RTCSdpType;
}

interface RTCOfferAnswerOptions {
}

interface RTCOfferOptions extends RTCOfferAnswerOptions {
    iceRestart?: boolean;
    offerToReceiveAudio?: boolean;
    offerToReceiveVideo?: boolean;
}

interface RTCOutboundRtpStreamStats extends RTCSentRtpStreamStats {
    firCount?: number;
    framesEncoded?: number;
    nackCount?: number;
    pliCount?: number;
    qpSum?: number;
    remoteId?: string;
}

interface RTCPeerConnectionIceErrorEventInit extends EventInit {
    address?: string | null;
    errorCode: number;
    errorText?: string;
    port?: number | null;
    url?: string;
}

interface RTCPeerConnectionIceEventInit extends EventInit {
    candidate?: RTCIceCandidate | null;
    url?: string | null;
}

interface RTCReceivedRtpStreamStats extends RTCRtpStreamStats {
    jitter?: number;
    packetsDiscarded?: number;
    packetsLost?: number;
    packetsReceived?: number;
}

interface RTCRtcpParameters {
    cname?: string;
    reducedSize?: boolean;
}

interface RTCRtpCapabilities {
    codecs: RTCRtpCodecCapability[];
    headerExtensions: RTCRtpHeaderExtensionCapability[];
}

interface RTCRtpCodecCapability {
    channels?: number;
    clockRate: number;
    mimeType: string;
    sdpFmtpLine?: string;
}

interface RTCRtpCodecParameters {
    channels?: number;
    clockRate: number;
    mimeType: string;
    payloadType: number;
    sdpFmtpLine?: string;
}

interface RTCRtpCodingParameters {
    rid?: string;
}

interface RTCRtpContributingSource {
    audioLevel?: number;
    rtpTimestamp: number;
    source: number;
    timestamp: DOMHighResTimeStamp;
}

interface RTCRtpEncodingParameters extends RTCRtpCodingParameters {
    active?: boolean;
    maxBitrate?: number;
    priority?: RTCPriorityType;
    scaleResolutionDownBy?: number;
}

interface RTCRtpHeaderExtensionCapability {
    uri?: string;
}

interface RTCRtpHeaderExtensionParameters {
    encrypted?: boolean;
    id: number;
    uri: string;
}

interface RTCRtpParameters {
    codecs: RTCRtpCodecParameters[];
    headerExtensions: RTCRtpHeaderExtensionParameters[];
    rtcp: RTCRtcpParameters;
}

interface RTCRtpReceiveParameters extends RTCRtpParameters {
}

interface RTCRtpSendParameters extends RTCRtpParameters {
    degradationPreference?: RTCDegradationPreference;
    encodings: RTCRtpEncodingParameters[];
    transactionId: string;
}

interface RTCRtpStreamStats extends RTCStats {
    codecId?: string;
    kind: string;
    ssrc: number;
    transportId?: string;
}

interface RTCRtpSynchronizationSource extends RTCRtpContributingSource {
}

interface RTCRtpTransceiverInit {
    direction?: RTCRtpTransceiverDirection;
    sendEncodings?: RTCRtpEncodingParameters[];
    streams?: MediaStream[];
}

interface RTCSentRtpStreamStats extends RTCRtpStreamStats {
    bytesSent?: number;
    packetsSent?: number;
}

interface RTCSessionDescriptionInit {
    sdp?: string;
    type: RTCSdpType;
}

interface RTCStats {
    id: string;
    timestamp: DOMHighResTimeStamp;
    type: RTCStatsType;
}

interface RTCTrackEventInit extends EventInit {
    receiver: RTCRtpReceiver;
    streams?: MediaStream[];
    track: MediaStreamTrack;
    transceiver: RTCRtpTransceiver;
}

interface RTCTransportStats extends RTCStats {
    bytesReceived?: number;
    bytesSent?: number;
    dtlsCipher?: string;
    dtlsState: RTCDtlsTransportState;
    localCertificateId?: string;
    remoteCertificateId?: string;
    rtcpTransportStatsId?: string;
    selectedCandidatePairId?: string;
    srtpCipher?: string;
    tlsVersion?: string;
}

interface ReadableStreamDefaultReadDoneResult {
    done: true;
    value?: undefined;
}

interface ReadableStreamDefaultReadValueResult<T> {
    done: false;
    value: T;
}

interface ReadableWritablePair<R = any, W = any> {
    readable: ReadableStream<R>;
    /**
     * Proporciona una manera cómoda y encadenable de canalizar este flujo legible a través de un flujo de transformación (o cualquier otro par {escribible, legible}). Simplemente canaliza el flujo hacia el lado de escritura del par suministrado y devuelve el lado legible para su uso posterior.
     *
     * La tubería de una transmisión la bloqueará durante la canalización, lo que evitará que cualquier otro consumidor adquiera un lector.
     */
    writable: WritableStream<W>;
}

interface RegistrationOptions {
    scope?: string;
    type?: WorkerType;
    updateViaCache?: ServiceWorkerUpdateViaCache;
}

interface RequestInit {
    /**
     * Un objeto BodyInit o null para establecer el cuerpo de la solicitud.
     */
    body?: BodyInit | null;
    /**
     * Una cadena que indica cómo interactuará la solicitud con la memoria caché del navegador para establecer la memoria caché de la solicitud.
     */
    cache?: RequestCache;
    /**
     * Una cadena que indica si las credenciales se enviarán con la solicitud siempre, nunca o solo cuando se envíen a una URL del mismo origen. Establece las credenciales de la solicitud.
     */
    credentials?: RequestCredentials;
    /**
     * Un objeto Headers, un objeto literal o un arreglo de arreglos de dos elementos para establecer los encabezados de la solicitud.
     */
    headers?: HeadersInit;
    /**
     * Un hash criptográfico del recurso que se recuperará mediante solicitud. Establece la integridad de la solicitud.
     */
    integrity?: string;
    /**
     * Un valor booleano para establecer el estado activo de la solicitud.
     */
    keepalive?: boolean;
    /**
     * Una cadena para establecer el método de solicitud.
     */
    method?: string;
    /**
     * Una cadena para indicar si la solicitud usará CORS o estará restringida a las URL del mismo origen. Establece el modo de solicitud.
     */
    mode?: RequestMode;
    /**
     * Una cadena que indica si la solicitud sigue a los redireccionamientos, genera un error al encontrar un redireccionamiento o devuelve el redireccionamiento (de forma opaca). Establece la redirección de la solicitud.
     */
    redirect?: RequestRedirect;
    /**
     * Una cadena cuyo valor es una URL del mismo origen, "about:client", o la cadena vacía, para establecer la referencia de la solicitud.
     */
    referrer?: string;
    /**
     * Una política de referencia para establecer la política de referencia de la solicitud.
     */
    referrerPolicy?: ReferrerPolicy;
    /**
     * Una AbortSignal para establecer la señal de la solicitud.
     */
    signal?: AbortSignal | null;
    /**
     * Solo puede ser null. Se utiliza para desasociar la solicitud de cualquier ventana.
     */
    window?: any;
}

interface ResizeObserverOptions {
    box?: ResizeObserverBoxOptions;
}

interface ResponseInit {
    headers?: HeadersInit;
    status?: number;
    statusText?: string;
}

interface RsaHashedImportParams extends Algorithm {
    hash: HashAlgorithmIdentifier;
}

interface RsaHashedKeyAlgorithm extends RsaKeyAlgorithm {
    hash: KeyAlgorithm;
}

interface RsaHashedKeyGenParams extends RsaKeyGenParams {
    hash: HashAlgorithmIdentifier;
}

interface RsaKeyAlgorithm extends KeyAlgorithm {
    modulusLength: number;
    publicExponent: BigInteger;
}

interface RsaKeyGenParams extends Algorithm {
    modulusLength: number;
    publicExponent: BigInteger;
}

interface RsaOaepParams extends Algorithm {
    label?: BufferSource;
}

interface RsaOtherPrimesInfo {
    d?: string;
    r?: string;
    t?: string;
}

interface RsaPssParams extends Algorithm {
    saltLength: number;
}

interface SVGBoundingBoxOptions {
    clipped?: boolean;
    fill?: boolean;
    markers?: boolean;
    stroke?: boolean;
}

interface ScrollIntoViewOptions extends ScrollOptions {
    block?: ScrollLogicalPosition;
    inline?: ScrollLogicalPosition;
}

interface ScrollOptions {
    behavior?: ScrollBehavior;
}

interface ScrollToOptions extends ScrollOptions {
    left?: number;
    top?: number;
}

interface SecurityPolicyViolationEventInit extends EventInit {
    blockedURI?: string;
    blockedURL?: string;
    colno?: number;
    columnNumber?: number;
    disposition: SecurityPolicyViolationEventDisposition;
    documentURI?: string;
    documentURL: string;
    effectiveDirective: string;
    lineNumber?: number;
    lineno?: number;
    originalPolicy: string;
    referrer?: string;
    sample?: string;
    sourceFile?: string;
    statusCode: number;
}

interface ShadowRootInit {
    delegatesFocus?: boolean;
    mode: ShadowRootMode;
    slotAssignment?: SlotAssignmentMode;
}

interface ShareData {
    files?: File[];
    text?: string;
    title?: string;
    url?: string;
}

interface SpeechRecognitionErrorEventInit extends EventInit {
    error: SpeechRecognitionErrorCode;
    message?: string;
}

interface SpeechSynthesisErrorEventInit extends SpeechSynthesisEventInit {
    error: SpeechSynthesisErrorCode;
}

interface SpeechSynthesisEventInit extends EventInit {
    charIndex?: number;
    charLength?: number;
    elapsedTime?: number;
    nombre?: string;
    utterance: SpeechSynthesisUtterance;
}

interface StaticRangeInit {
    endContainer: Node;
    endOffset: number;
    startContainer: Node;
    startOffset: number;
}

interface StereoPannerOptions extends AudioNodeOptions {
    pan?: number;
}

interface StorageEstimate {
    quota?: number;
    usage?: number;
}

interface StorageEventInit extends EventInit {
    key?: string | null;
    newValue?: string | null;
    oldValue?: string | null;
    storageArea?: Storage | null;
    url?: string;
}

interface StreamPipeOptions {
    preventAbort?: boolean;
    preventCancel?: boolean;
    /**
     * Entuba este flujo legible a un destino de flujo de escritura dado. La forma en que se comporta el proceso de entubado en diversas condiciones de error se puede personalizar con una serie de opciones aprobadas. Devuelve una promesa que se cumple cuando el proceso de entubado se completa con éxito, o se rechaza si se encuentra algún error.
     *
     * La tubería de una transmisión la bloqueará durante la canalización, lo que evitará que cualquier otro consumidor adquiera un lector.
     *
     * Los errores y cierres de los flujos fuente y destino se propagan de la siguiente manera:
     *
     * Un error en este flujo fuente legible abortará el destino, a menos que preventAbort sea verdadero. La promesa devuelta será rechazada con el error de la fuente, o con cualquier error que ocurra al abortar el destino.
     *
     * Un error en el destino cancelará este flujo fuente legible, a menos que preventCancel sea verdadero. La promesa devuelta será rechazada con el error del destino, o con cualquier error que ocurra durante la cancelación de la fuente.
     *
     * Cuando este flujo fuente legible se cierre, el destino se cerrará, a menos que preventClose sea verdadero. La promesa devuelta se cumplirá una vez que se complete este proceso, a menos que se encuentre un error al cerrar el destino, en cuyo caso se rechazará con ese error.
     *
     * Si el destino comienza como cerrado o cerrándose, este flujo fuente legible se cancelará, a menos que preventCancel sea verdadero. La promesa devuelta se rechazará con un error que indica que la canalización a un flujo cerrado falló, o con cualquier error que ocurra durante la cancelación de la fuente.
     *
     * La opción de señal se puede establecer en AbortSignal para permitir la cancelación de una operación de canalización en curso a través del AbortController correspondiente. En este caso, este flujo fuente legible se cancelará y el destino se anulará, a menos que se establezcan las respectivas opciones preventCancel o preventAbort.
     */
    preventClose?: boolean;
    signal?: AbortSignal;
}

interface SubmitEventInit extends EventInit {
    submitter?: HTMLElement | null;
}

interface TextDecodeOptions {
    stream?: boolean;
}

interface TextDecoderOptions {
    fatal?: boolean;
    ignoreBOM?: boolean;
}

interface TextEncoderEncodeIntoResult {
    read?: number;
    written?: number;
}

interface TouchEventInit extends EventModifierInit {
    changedTouches?: Touch[];
    targetTouches?: Touch[];
    touches?: Touch[];
}

interface TouchInit {
    altitudeAngle?: number;
    azimuthAngle?: number;
    clientX?: number;
    clientY?: number;
    force?: number;
    identifier: number;
    pageX?: number;
    pageY?: number;
    radiusX?: number;
    radiusY?: number;
    rotationAngle?: number;
    screenX?: number;
    screenY?: number;
    target: EventTarget;
    touchType?: TouchType;
}

interface TrackEventInit extends EventInit {
    track?: TextTrack | null;
}

interface Transformer<I = any, O = any> {
    flush?: TransformerFlushCallback<O>;
    readableType?: undefined;
    start?: TransformerStartCallback<O>;
    transform?: TransformerTransformCallback<I, O>;
    writableType?: undefined;
}

interface TransitionEventInit extends EventInit {
    elapsedTime?: number;
    propertyName?: string;
    pseudoElement?: string;
}

interface UIEventInit extends EventInit {
    detail?: number;
    view?: Window | null;
    /** @deprecated */
    which?: number;
}

interface ULongRange {
    max?: number;
    min?: number;
}

interface UnderlyingSink<W = any> {
    abort?: UnderlyingSinkAbortCallback;
    close?: UnderlyingSinkCloseCallback;
    start?: UnderlyingSinkStartCallback;
    type?: undefined;
    write?: UnderlyingSinkWriteCallback<W>;
}

interface UnderlyingSource<R = any> {
    cancel?: UnderlyingSourceCancelCallback;
    pull?: UnderlyingSourcePullCallback<R>;
    start?: UnderlyingSourceStartCallback<R>;
    type?: undefined;
}

interface VideoConfiguration {
    bitrate: number;
    colorGamut?: ColorGamut;
    contentType: string;
    framerate: number;
    hdrMetadataType?: HdrMetadataType;
    height: number;
    scalabilityMode?: string;
    transferFunction?: TransferFunction;
    width: number;
}

interface WaveShaperOptions extends AudioNodeOptions {
    curve?: number[] | Float32Array;
    oversample?: OverSampleType;
}

interface WebGLContextAttributes {
    alpha?: boolean;
    antialias?: boolean;
    depth?: boolean;
    desynchronized?: boolean;
    failIfMajorPerformanceCaveat?: boolean;
    powerPreference?: WebGLPowerPreference;
    premultipliedAlpha?: boolean;
    preserveDrawingBuffer?: boolean;
    stencil?: boolean;
}

interface WebGLContextEventInit extends EventInit {
    statusMessage?: string;
}

interface WheelEventInit extends MouseEventInit {
    deltaMode?: number;
    deltaX?: number;
    deltaY?: number;
    deltaZ?: number;
}

interface WindowPostMessageOptions extends PostMessageOptions {
    targetOrigin?: string;
}

interface WorkerOptions {
    credentials?: RequestCredentials;
    nombre?: string;
    type?: WorkerType;
}

interface WorkletOptions {
    credentials?: RequestCredentials;
}

type EventListener = ((event: Event) => void) | { handleEvent(event: Event): void; };

type NodeFilter = ((node: Node) => number) | { acceptNode(node: Node): number; };

declare var NodeFilter: {
    readonly FILTER_ACCEPT: number;
    readonly FILTER_REJECT: number;
    readonly FILTER_SKIP: number;
    readonly SHOW_ALL: number;
    readonly SHOW_ATTRIBUTE: number;
    readonly SHOW_CDATA_SECTION: number;
    readonly SHOW_COMMENT: number;
    readonly SHOW_DOCUMENT: number;
    readonly SHOW_DOCUMENT_FRAGMENT: number;
    readonly SHOW_DOCUMENT_TYPE: number;
    readonly SHOW_ELEMENT: number;
    readonly SHOW_ENTITY: number;
    readonly SHOW_ENTITY_REFERENCE: number;
    readonly SHOW_NOTATION: number;
    readonly SHOW_PROCESSING_INSTRUCTION: number;
    readonly SHOW_TEXT: number;
};

type XPathNSResolver = ((prefix: string | null) => string | null) | { lookupNamespaceURI(prefix: string | null): string | null; };

/** La extensión ANGLE_instanced_arrays es parte de la API de WebGL y permite dibujar el mismo objeto, o grupos de objetos similares varias veces, si comparten los mismos datos de vértice, recuento primitivo y tipo. */
interface ANGLE_instanced_arrays {
    drawArraysInstancedANGLE(mode: GLenum, first: GLint, count: GLsizei, primcount: GLsizei): void;
    drawElementsInstancedANGLE(mode: GLenum, count: GLsizei, type: GLenum, offset: GLintptr, primcount: GLsizei): void;
    vertexAttribDivisorANGLE(index: GLuint, divisor: GLuint): void;
    readonly VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE: GLenum;
}

interface ARIAMixin {
    ariaAtomic: string;
    ariaAutoComplete: string;
    ariaBusy: string;
    ariaChecked: string;
    ariaColCount: string;
    ariaColIndex: string;
    ariaColSpan: string;
    ariaCurrent: string;
    ariaDisabled: string;
    ariaExpanded: string;
    ariaHasPopup: string;
    ariaHidden: string;
    ariaKeyShortcuts: string;
    ariaLabel: string;
    ariaLevel: string;
    ariaLive: string;
    ariaModal: string;
    ariaMultiLine: string;
    ariaMultiSelectable: string;
    ariaOrientation: string;
    ariaPlaceholder: string;
    ariaPosInSet: string;
    ariaPressed: string;
    ariaReadOnly: string;
    ariaRequired: string;
    ariaRoleDescription: string;
    ariaRowCount: string;
    ariaRowIndex: string;
    ariaRowSpan: string;
    ariaSelected: string;
    ariaSetSize: string;
    ariaSort: string;
    ariaValueMax: string;
    ariaValueMin: string;
    ariaValueNow: string;
    ariaValueText: string;
}

/** Un objeto controlador que te permite abortar una o más solicitudes DOM cuando lo desees. */
interface AbortController {
    /**
     * Devuelve el objeto AbortSignal asociado con este objeto.
     */
    readonly signal: AbortSignal;
    /**
     * Al invocar este método, se establecerá el indicador de cancelación de AbortSignal de este objeto y se indicará a cualquier observador que la actividad asociada se debe cancelar.
     */
    abort(): void;
}

declare var AbortController: {
    readonly prototype: AbortController;
    new(): AbortController;
};

interface AbortSignalEventMap {
    "abort": Event;
}

/** Un objeto signal que te permite comunicarte con una solicitud DOM (como Fetch) y abortará si es necesario a través de un objeto AbortController. */
interface AbortSignal extends EventTarget {
    /**
     * Devuelve true si el AbortController de AbortSignal ha señalado que se aborte, y false en caso contrario.
     */
    readonly aborted: boolean;
    onabort: ((this: AbortSignal, ev: Event) => any) | null;
    addEventListener<K extends keyof AbortSignalEventMap>(type: K, listener: (this: AbortSignal, ev: AbortSignalEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof AbortSignalEventMap>(type: K, listener: (this: AbortSignal, ev: AbortSignalEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var AbortSignal: {
    readonly prototype: AbortSignal;
    new(): AbortSignal;
};

interface AbstractRange {
    /**
     * Devuelve true si el rango está contraído y false en caso contrario.
     */
    readonly collapsed: boolean;
    /**
     * Devuelve el nodo final del rango.
     */
    readonly endContainer: Node;
    /**
     * Devuelve el desplazamiento final del rango.
     */
    readonly endOffset: number;
    /**
     * Devuelve el nodo inicial del rango.
     */
    readonly startContainer: Node;
    /**
     * Devuelve el desplazamiento inicial del rango.
     */
    readonly startOffset: number;
}

declare var AbstractRange: {
    readonly prototype: AbstractRange;
    new(): AbstractRange;
};

interface AbstractWorkerEventMap {
    "error": ErrorEvent;
}

interface AbstractWorker {
    onerror: ((this: AbstractWorker, ev: ErrorEvent) => any) | null;
    addEventListener<K extends keyof AbstractWorkerEventMap>(type: K, listener: (this: AbstractWorker, ev: AbstractWorkerEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof AbstractWorkerEventMap>(type: K, listener: (this: AbstractWorker, ev: AbstractWorkerEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

/** Un nodo capaz de proporcionar información de análisis de dominio de tiempo y frecuencia en tiempo real. Es un AudioNode que pasa el flujo de audio sin cambios desde la entrada hasta la salida, pero te permite tomar los datos generados, procesarlos y crear visualizaciones de audio. */
interface AnalyserNode extends AudioNode {
    fftSize: number;
    readonly frequencyBinCount: number;
    maxDecibels: number;
    minDecibels: number;
    smoothingTimeConstant: number;
    getByteFrequencyData(array: Uint8Array): void;
    getByteTimeDomainData(array: Uint8Array): void;
    getFloatFrequencyData(array: Float32Array): void;
    getFloatTimeDomainData(array: Float32Array): void;
}

declare var AnalyserNode: {
    readonly prototype: AnalyserNode;
    new(context: BaseAudioContext, options?: AnalyserOptions): AnalyserNode;
};

interface Animatable {
    animate(keyframes: Keyframe[] | PropertyIndexedKeyframes | null, options?: number | KeyframeAnimationOptions): Animation;
    getAnimations(options?: GetAnimationsOptions): Animation[];
}

interface AnimationEventMap {
    "cancel": AnimationPlaybackEvent;
    "finish": AnimationPlaybackEvent;
    "remove": Event;
}

interface Animation extends EventTarget {
    currentTime: number | null;
    effect: AnimationEffect | null;
    readonly finished: Promise<Animation>;
    id: string;
    oncancel: ((this: Animation, ev: AnimationPlaybackEvent) => any) | null;
    onfinish: ((this: Animation, ev: AnimationPlaybackEvent) => any) | null;
    onremove: ((this: Animation, ev: Event) => any) | null;
    readonly pending: boolean;
    readonly playState: AnimationPlayState;
    playbackRate: number;
    readonly ready: Promise<Animation>;
    readonly replaceState: AnimationReplaceState;
    startTime: number | null;
    timeline: AnimationTimeline | null;
    cancel(): void;
    commitStyles(): void;
    finish(): void;
    pause(): void;
    persist(): void;
    play(): void;
    reverse(): void;
    updatePlaybackRate(playbackRate: number): void;
    addEventListener<K extends keyof AnimationEventMap>(type: K, listener: (this: Animation, ev: AnimationEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof AnimationEventMap>(type: K, listener: (this: Animation, ev: AnimationEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var Animation: {
    readonly prototype: Animation;
    new(effect?: AnimationEffect | null, timeline?: AnimationTimeline | null): Animation;
};

interface AnimationEffect {
    getComputedTiming(): ComputedEffectTiming;
    getTiming(): EffectTiming;
    updateTiming(timing?: OptionalEffectTiming): void;
}

declare var AnimationEffect: {
    readonly prototype: AnimationEffect;
    new(): AnimationEffect;
};

/** Eventos que proporcionan información relacionada con las animaciones. */
interface AnimationEvent extends Event {
    readonly animationName: string;
    readonly elapsedTime: number;
    readonly pseudoElement: string;
}

declare var AnimationEvent: {
    readonly prototype: AnimationEvent;
    new(type: string, animationEventInitDict?: AnimationEventInit): AnimationEvent;
};

interface AnimationFrameProvider {
    cancelAnimationFrame(handle: number): void;
    requestAnimationFrame(callback: FrameRequestCallback): number;
}

interface AnimationPlaybackEvent extends Event {
    readonly currentTime: number | null;
    readonly timelineTime: number | null;
}

declare var AnimationPlaybackEvent: {
    readonly prototype: AnimationPlaybackEvent;
    new(type: string, eventInitDict?: AnimationPlaybackEventInit): AnimationPlaybackEvent;
};

interface AnimationTimeline {
    readonly currentTime: number | null;
}

declare var AnimationTimeline: {
    readonly prototype: AnimationTimeline;
    new(): AnimationTimeline;
};

/** El atributo de un elemento DOM como un objeto. En la mayoría de los métodos DOM, probablemente recuperará directamente el atributo como una cadena (p. ej., Element.getAttribute(), pero ciertas funciones (p. ej., Element.getAttributeNode()) o medios de iteración dan tipos Attr. */
interface Attr extends Node {
    readonly localName: string;
    readonly name: string;
    readonly namespaceURI: string | null;
    readonly ownerDocument: Document;
    readonly ownerElement: Element | null;
    readonly prefix: string | null;
    readonly specified: boolean;
    value: string;
}

declare var Attr: {
    readonly prototype: Attr;
    new(): Attr;
};

/** Un recurso de audio breve que reside en la memoria, creado a partir de un archivo de audio con el método AudioContext.decodeAudioData(), o a partir de datos sin procesar con AudioContext.createBuffer(). Una vez colocado en un AudioBuffer, el audio se puede reproducir pasándolo a un AudioBufferSourceNode. */
interface AudioBuffer {
    readonly duration: number;
    readonly length: number;
    readonly numberOfChannels: number;
    readonly sampleRate: number;
    copyFromChannel(destination: Float32Array, channelNumber: number, bufferOffset?: number): void;
    copyToChannel(source: Float32Array, channelNumber: number, bufferOffset?: number): void;
    getChannelData(channel: number): Float32Array;
}

declare var AudioBuffer: {
    readonly prototype: AudioBuffer;
    new(options: AudioBufferOptions): AudioBuffer;
};

/** Un AudioScheduledSourceNode que representa una fuente de audio que consta de datos de audio en memoria, almacenados en un AudioBuffer. Es especialmente útil para reproducir audio que tiene requisitos de precisión de tiempo particularmente estrictos, como los sonidos que deben coincidir con un ritmo específico y pueden guardarse en la memoria en lugar de reproducirse desde el disco o la red. */
interface AudioBufferSourceNode extends AudioScheduledSourceNode {
    buffer: AudioBuffer | null;
    readonly detune: AudioParam;
    loop: boolean;
    loopEnd: number;
    loopStart: number;
    readonly playbackRate: AudioParam;
    start(when?: number, offset?: number, duration?: number): void;
    addEventListener<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: AudioBufferSourceNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: AudioBufferSourceNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var AudioBufferSourceNode: {
    readonly prototype: AudioBufferSourceNode;
    new(context: BaseAudioContext, options?: AudioBufferSourceOptions): AudioBufferSourceNode;
};

/** Un gráfico de procesamiento de audio creado a partir de módulos de audio vinculados entre sí, cada uno representado por un AudioNode. */
interface AudioContext extends BaseAudioContext {
    readonly baseLatency: number;
    close(): Promise<void>;
    createMediaElementSource(mediaElement: HTMLMediaElement): MediaElementAudioSourceNode;
    createMediaStreamDestination(): MediaStreamAudioDestinationNode;
    createMediaStreamSource(mediaStream: MediaStream): MediaStreamAudioSourceNode;
    getOutputTimestamp(): AudioTimestamp;
    resume(): Promise<void>;
    suspend(): Promise<void>;
    addEventListener<K extends keyof BaseAudioContextEventMap>(type: K, listener: (this: AudioContext, ev: BaseAudioContextEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof BaseAudioContextEventMap>(type: K, listener: (this: AudioContext, ev: BaseAudioContextEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var AudioContext: {
    readonly prototype: AudioContext;
    new(contextOptions?: AudioContextOptions): AudioContext;
};

/** AudioDestinationNode no tiene salida (como es la salida, no se puede vincular más AudioNode después de él en el gráfico de audio) y una entrada. El número de canales en la entrada debe estar entre 0 y el valor maxChannelCount o se generará una excepción. */
interface AudioDestinationNode extends AudioNode {
    readonly maxChannelCount: number;
}

declare var AudioDestinationNode: {
    readonly prototype: AudioDestinationNode;
    new(): AudioDestinationNode;
};

/** La posición y orientación de la persona única que escucha la escena de audio, y se utiliza en la espacialización de audio. Todos los PannerNodes se espacializan en relación con el AudioListener almacenado en el atributo BaseAudioContext.listener. */
interface AudioListener {
    readonly forwardX: AudioParam;
    readonly forwardY: AudioParam;
    readonly forwardZ: AudioParam;
    readonly positionX: AudioParam;
    readonly positionY: AudioParam;
    readonly positionZ: AudioParam;
    readonly upX: AudioParam;
    readonly upY: AudioParam;
    readonly upZ: AudioParam;
    /** @deprecated */
    setOrientation(x: number, y: number, z: number, xUp: number, yUp: number, zUp: number): void;
    /** @deprecated */
    setPosition(x: number, y: number, z: number): void;
}

declare var AudioListener: {
    readonly prototype: AudioListener;
    new(): AudioListener;
};

/** Una interfaz genérica para representar un módulo de procesamiento de audio. Ejemplos incluyen: */
interface AudioNode extends EventTarget {
    channelCount: number;
    channelCountMode: ChannelCountMode;
    channelInterpretation: ChannelInterpretation;
    readonly context: BaseAudioContext;
    readonly numberOfInputs: number;
    readonly numberOfOutputs: number;
    connect(destinationNode: AudioNode, output?: number, input?: number): AudioNode;
    connect(destinationParam: AudioParam, output?: number): void;
    disconnect(): void;
    disconnect(output: number): void;
    disconnect(destinationNode: AudioNode): void;
    disconnect(destinationNode: AudioNode, output: number): void;
    disconnect(destinationNode: AudioNode, output: number, input: number): void;
    disconnect(destinationParam: AudioParam): void;
    disconnect(destinationParam: AudioParam, output: number): void;
}

declare var AudioNode: {
    readonly prototype: AudioNode;
    new(): AudioNode;
};

/** La interfaz AudioParam de Web Audio API representa un parámetro relacionado con el audio, generalmente un parámetro de un AudioNode (como GainNode.gain). */
interface AudioParam {
    automationRate: AutomationRate;
    readonly defaultValue: number;
    readonly maxValue: number;
    readonly minValue: number;
    value: number;
    cancelAndHoldAtTime(cancelTime: number): AudioParam;
    cancelScheduledValues(cancelTime: number): AudioParam;
    exponentialRampToValueAtTime(value: number, endTime: number): AudioParam;
    linearRampToValueAtTime(value: number, endTime: number): AudioParam;
    setTargetAtTime(target: number, startTime: number, timeConstant: number): AudioParam;
    setValueAtTime(value: number, startTime: number): AudioParam;
    setValueCurveAtTime(values: number[] | Float32Array, startTime: number, duration: number): AudioParam;
}

declare var AudioParam: {
    readonly prototype: AudioParam;
    new(): AudioParam;
};

interface AudioParamMap {
    forEach(callbackfn: (value: AudioParam, key: string, parent: AudioParamMap) => void, thisArg?: any): void;
}

declare var AudioParamMap: {
    readonly prototype: AudioParamMap;
    new(): AudioParamMap;
};

/** Los eventos de Web Audio API que ocurren cuando un búfer de entrada de ScriptProcessorNode está listo para ser procesado.
 * @deprecated A partir de la publicación de especificaciones de Web Audio API del 29 de agosto de 2014, esta función se marcó como obsoleta y pronto será reemplazada por AudioWorklet. */
interface AudioProcessingEvent extends Event {
    /** @deprecated */
    readonly inputBuffer: AudioBuffer;
    /** @deprecated */
    readonly outputBuffer: AudioBuffer;
    /** @deprecated */
    readonly playbackTime: number;
}

/** @deprecated */
declare var AudioProcessingEvent: {
    readonly prototype: AudioProcessingEvent;
    new(type: string, eventInitDict: AudioProcessingEventInit): AudioProcessingEvent;
};

interface AudioScheduledSourceNodeEventMap {
    "ended": Event;
}

interface AudioScheduledSourceNode extends AudioNode {
    onended: ((this: AudioScheduledSourceNode, ev: Event) => any) | null;
    start(when?: number): void;
    stop(when?: number): void;
    addEventListener<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: AudioScheduledSourceNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: AudioScheduledSourceNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var AudioScheduledSourceNode: {
    readonly prototype: AudioScheduledSourceNode;
    new(): AudioScheduledSourceNode;
};

interface AudioWorklet extends Worklet {
}

declare var AudioWorklet: {
    readonly prototype: AudioWorklet;
    new(): AudioWorklet;
};

interface AudioWorkletNodeEventMap {
    "processorerror": Event;
}

interface AudioWorkletNode extends AudioNode {
    onprocessorerror: ((this: AudioWorkletNode, ev: Event) => any) | null;
    readonly parameters: AudioParamMap;
    readonly port: MessagePort;
    addEventListener<K extends keyof AudioWorkletNodeEventMap>(type: K, listener: (this: AudioWorkletNode, ev: AudioWorkletNodeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof AudioWorkletNodeEventMap>(type: K, listener: (this: AudioWorkletNode, ev: AudioWorkletNodeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var AudioWorkletNode: {
    readonly prototype: AudioWorkletNode;
    new(context: BaseAudioContext, name: string, options?: AudioWorkletNodeOptions): AudioWorkletNode;
};

interface AuthenticatorAssertionResponse extends AuthenticatorResponse {
    readonly authenticatorData: ArrayBuffer;
    readonly signature: ArrayBuffer;
    readonly userHandle: ArrayBuffer | null;
}

declare var AuthenticatorAssertionResponse: {
    readonly prototype: AuthenticatorAssertionResponse;
    new(): AuthenticatorAssertionResponse;
};

interface AuthenticatorAttestationResponse extends AuthenticatorResponse {
    readonly attestationObject: ArrayBuffer;
}

declare var AuthenticatorAttestationResponse: {
    readonly prototype: AuthenticatorAttestationResponse;
    new(): AuthenticatorAttestationResponse;
};

interface AuthenticatorResponse {
    readonly clientDataJSON: ArrayBuffer;
}

declare var AuthenticatorResponse: {
    readonly prototype: AuthenticatorResponse;
    new(): AuthenticatorResponse;
};

interface BarProp {
    readonly visible: boolean;
}

declare var BarProp: {
    readonly prototype: BarProp;
    new(): BarProp;
};

interface BaseAudioContextEventMap {
    "statechange": Event;
}

interface BaseAudioContext extends EventTarget {
    readonly audioWorklet: AudioWorklet;
    readonly currentTime: number;
    readonly destination: AudioDestinationNode;
    readonly listener: AudioListener;
    onstatechange: ((this: BaseAudioContext, ev: Event) => any) | null;
    readonly sampleRate: number;
    readonly state: AudioContextState;
    createAnalyser(): AnalyserNode;
    createBiquadFilter(): BiquadFilterNode;
    createBuffer(numberOfChannels: number, length: number, sampleRate: number): AudioBuffer;
    createBufferSource(): AudioBufferSourceNode;
    createChannelMerger(numberOfInputs?: number): ChannelMergerNode;
    createChannelSplitter(numberOfOutputs?: number): ChannelSplitterNode;
    createConstantSource(): ConstantSourceNode;
    createConvolver(): ConvolverNode;
    createDelay(maxDelayTime?: number): DelayNode;
    createDynamicsCompressor(): DynamicsCompressorNode;
    createGain(): GainNode;
    createIIRFilter(feedforward: number[], feedback: number[]): IIRFilterNode;
    createOscillator(): OscillatorNode;
    createPanner(): PannerNode;
    createPeriodicWave(real: number[] | Float32Array, imag: number[] | Float32Array, constraints?: PeriodicWaveConstraints): PeriodicWave;
    /** @deprecated */
    createScriptProcessor(bufferSize?: number, numberOfInputChannels?: number, numberOfOutputChannels?: number): ScriptProcessorNode;
    createStereoPanner(): StereoPannerNode;
    createWaveShaper(): WaveShaperNode;
    decodeAudioData(audioData: ArrayBuffer, successCallback?: DecodeSuccessCallback | null, errorCallback?: DecodeErrorCallback | null): Promise<AudioBuffer>;
    addEventListener<K extends keyof BaseAudioContextEventMap>(type: K, listener: (this: BaseAudioContext, ev: BaseAudioContextEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof BaseAudioContextEventMap>(type: K, listener: (this: BaseAudioContext, ev: BaseAudioContextEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var BaseAudioContext: {
    readonly prototype: BaseAudioContext;
    new(): BaseAudioContext;
};

/** El evento beforeunload se activa cuando la ventana, el documento y sus recursos están a punto de descargarse. */
interface BeforeUnloadEvent extends Event {
    returnValue: any;
}

declare var BeforeUnloadEvent: {
    readonly prototype: BeforeUnloadEvent;
    new(): BeforeUnloadEvent;
};

/** Un filtro simple de orden bajo, y se crea usando el método AudioContext.createBiquadFilter(). Es un AudioNode que puede representar diferentes tipos de filtros, dispositivos de control de tono y ecualizadores gráficos. */
interface BiquadFilterNode extends AudioNode {
    readonly Q: AudioParam;
    readonly detune: AudioParam;
    readonly frequency: AudioParam;
    readonly gain: AudioParam;
    type: BiquadFilterType;
    getFrequencyResponse(frequencyHz: Float32Array, magResponse: Float32Array, phaseResponse: Float32Array): void;
}

declare var BiquadFilterNode: {
    readonly prototype: BiquadFilterNode;
    new(context: BaseAudioContext, options?: BiquadFilterOptions): BiquadFilterNode;
};

/** Un objeto similar a un archivo de datos sin procesar e inmutable. Los blobs representan datos que no necesariamente están en un formato nativo de JavaScript. La interfaz de archivo se basa en Blob, hereda la funcionalidad de blob y la expande para admitir archivos en el sistema del usuario. */
interface Blob {
    readonly size: number;
    readonly type: string;
    arrayBuffer(): Promise<ArrayBuffer>;
    slice(start?: number, fin?: number, contentType?: string): Blob;
    stream(): ReadableStream;
    text(): Promise<string>;
}

declare var Blob: {
    readonly prototype: Blob;
    new(blobParts?: BlobPart[], options?: BlobPropertyBag): Blob;
};

interface BlobEvent extends Event {
    readonly data: Blob;
    readonly timecode: DOMHighResTimeStamp;
}

declare var BlobEvent: {
    readonly prototype: BlobEvent;
    new(type: string, eventInitDict: BlobEventInit): BlobEvent;
};

interface Body {
    readonly body: ReadableStream<Uint8Array> | null;
    readonly bodyUsed: boolean;
    arrayBuffer(): Promise<ArrayBuffer>;
    blob(): Promise<Blob>;
    formData(): Promise<FormData>;
    json(): Promise<any>;
    text(): Promise<string>;
}

interface BroadcastChannelEventMap {
    "message": MessageEvent;
    "messageerror": MessageEvent;
}

interface BroadcastChannel extends EventTarget {
    /**
     * Devuelve el nombre del canal (como se pasa al constructor).
     */
    readonly name: string;
    onmessage: ((this: BroadcastChannel, ev: MessageEvent) => any) | null;
    onmessageerror: ((this: BroadcastChannel, ev: MessageEvent) => any) | null;
    /**
     * Cierra el objeto BroadcastChannel, abriéndolo a la recolección de elementos no utilizados.
     */
    close(): void;
    /**
     * Envía el mensaje dado a otros objetos BroadcastChannel configurados para este canal. Los mensajes pueden ser objetos estructurados, p. Objetos anidados y arreglos.
     */
    postMessage(message: any): void;
    addEventListener<K extends keyof BroadcastChannelEventMap>(type: K, listener: (this: BroadcastChannel, ev: BroadcastChannelEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof BroadcastChannelEventMap>(type: K, listener: (this: BroadcastChannel, ev: BroadcastChannelEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var BroadcastChannel: {
    readonly prototype: BroadcastChannel;
    new(name: string): BroadcastChannel;
};

/** Esta interfaz API de Streams proporciona una estrategia de cola de longitud de bytes integrada que se puede usar al construir transmisiones. */
interface ByteLengthQueuingStrategy extends QueuingStrategy<ArrayBufferView> {
    readonly highWaterMark: number;
    readonly size: QueuingStrategySize<ArrayBufferView>;
}

declare var ByteLengthQueuingStrategy: {
    readonly prototype: ByteLengthQueuingStrategy;
    new(init: QueuingStrategyInit): ByteLengthQueuingStrategy;
};

/** Una sección CDATA que se puede usar dentro de XML para incluir porciones extendidas de texto sin escape. No es necesario escapar los símbolos < y & como lo hacen normalmente cuando están dentro de una sección CDATA. */
interface CDATASection extends Text {
}

declare var CDATASection: {
    readonly prototype: CDATASection;
    new(): CDATASection;
};

interface CSSAnimation extends Animation {
    readonly animationName: string;
    addEventListener<K extends keyof AnimationEventMap>(type: K, listener: (this: CSSAnimation, ev: AnimationEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof AnimationEventMap>(type: K, listener: (this: CSSAnimation, ev: AnimationEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var CSSAnimation: {
    readonly prototype: CSSAnimation;
    new(): CSSAnimation;
};

/** Una regla arroba de CSS de una sola condición, que consta de una condición y un bloque de instrucciones. Es un hijo de CSSGroupingRule. */
interface CSSConditionRule extends CSSGroupingRule {
    conditionText: string;
}

declare var CSSConditionRule: {
    readonly prototype: CSSConditionRule;
    new(): CSSConditionRule;
};

interface CSSCounterStyleRule extends CSSRule {
    additiveSymbols: string;
    fallback: string;
    name: string;
    negative: string;
    pad: string;
    prefix: string;
    range: string;
    speakAs: string;
    suffix: string;
    symbols: string;
    system: string;
}

declare var CSSCounterStyleRule: {
    readonly prototype: CSSCounterStyleRule;
    new(): CSSCounterStyleRule;
};

interface CSSFontFaceRule extends CSSRule {
    readonly style: CSSStyleDeclaration;
}

declare var CSSFontFaceRule: {
    readonly prototype: CSSFontFaceRule;
    new(): CSSFontFaceRule;
};

/** Cualquier regla arroba de CSS que contenga otras reglas anidadas dentro de ella. */
interface CSSGroupingRule extends CSSRule {
    readonly cssRules: CSSRuleList;
    deleteRule(index: number): void;
    insertRule(rule: string, index?: number): number;
}

declare var CSSGroupingRule: {
    readonly prototype: CSSGroupingRule;
    new(): CSSGroupingRule;
};

interface CSSImportRule extends CSSRule {
    readonly href: string;
    readonly media: MediaList;
    readonly styleSheet: CSSStyleSheet;
}

declare var CSSImportRule: {
    readonly prototype: CSSImportRule;
    new(): CSSImportRule;
};

/** Objeto que representa un conjunto de estilos para un fotograma clave dado. Corresponde al contenido de un solo fotograma clave de una regla @keyframes. Implementa la interfaz CSSRule con un valor de tipo 8 (CSSRule.KEYFRAME_RULE). */
interface CSSKeyframeRule extends CSSRule {
    keyText: string;
    readonly style: CSSStyleDeclaration;
}

declare var CSSKeyframeRule: {
    readonly prototype: CSSKeyframeRule;
    new(): CSSKeyframeRule;
};

/** Un objeto que representa un conjunto completo de fotogramas clave para una animación CSS. Corresponde al contenido de una regla @keyframes completa. Implementa la interfaz CSSRule con un valor de tipo 7 (CSSRule.KEYFRAMES_RULE). */
interface CSSKeyframesRule extends CSSRule {
    readonly cssRules: CSSRuleList;
    name: string;
    appendRule(rule: string): void;
    deleteRule(select: string): void;
    findRule(select: string): CSSKeyframeRule | null;
}

declare var CSSKeyframesRule: {
    readonly prototype: CSSKeyframesRule;
    new(): CSSKeyframesRule;
};

/** Una sola regla @media de  CSS. Implementa la interfaz CSSConditionRule, y por lo tanto la CSSGroupingRule y la interfaz CSSRule con un valor de tipo 4 (CSSRule.MEDIA_RULE). */
interface CSSMediaRule extends CSSConditionRule {
    readonly media: MediaList;
}

declare var CSSMediaRule: {
    readonly prototype: CSSMediaRule;
    new(): CSSMediaRule;
};

/** Un objeto que representa una única regla arroba @namespace de CSS. Implementa la interfaz CSSRule, con un valor de tipo de 10 (CSSRule.NAMESPACE_RULE). */
interface CSSNamespaceRule extends CSSRule {
    readonly namespaceURI: string;
    readonly prefix: string;
}

declare var CSSNamespaceRule: {
    readonly prototype: CSSNamespaceRule;
    new(): CSSNamespaceRule;
};

/** CSSPageRule es una interfaz que representa una única regla @page de CSS. Implementa la interfaz CSSRule con un valor de tipo 6 (CSSRule.PAGE_RULE). */
interface CSSPageRule extends CSSGroupingRule {
    selectorText: string;
    readonly style: CSSStyleDeclaration;
}

declare var CSSPageRule: {
    readonly prototype: CSSPageRule;
    new(): CSSPageRule;
};

/** Una única regla CSS. Hay varios tipos de reglas, que se enumeran en la sección Constantes de tipo a continuación. */
interface CSSRule {
    cssText: string;
    readonly parentRule: CSSRule | null;
    readonly parentStyleSheet: CSSStyleSheet | null;
    /** @deprecated */
    readonly type: number;
    readonly CHARSET_RULE: number;
    readonly FONT_FACE_RULE: number;
    readonly IMPORT_RULE: number;
    readonly KEYFRAMES_RULE: number;
    readonly KEYFRAME_RULE: number;
    readonly MEDIA_RULE: number;
    readonly NAMESPACE_RULE: number;
    readonly PAGE_RULE: number;
    readonly STYLE_RULE: number;
    readonly SUPPORTS_RULE: number;
}

declare var CSSRule: {
    readonly prototype: CSSRule;
    new(): CSSRule;
    readonly CHARSET_RULE: number;
    readonly FONT_FACE_RULE: number;
    readonly IMPORT_RULE: number;
    readonly KEYFRAMES_RULE: number;
    readonly KEYFRAME_RULE: number;
    readonly MEDIA_RULE: number;
    readonly NAMESPACE_RULE: number;
    readonly PAGE_RULE: number;
    readonly STYLE_RULE: number;
    readonly SUPPORTS_RULE: number;
};

/** Una CSSRuleList es un objeto similar a un arreglo (solo modificación indirecta) que contiene una colección ordenada de objetos CSSRule. */
interface CSSRuleList {
    readonly length: number;
    item(index: number): CSSRule | null;
    [index: number]: CSSRule;
}

declare var CSSRuleList: {
    readonly prototype: CSSRuleList;
    new(): CSSRuleList;
};

/** Un objeto que es un bloque de declaración CSS y, expone información de estilo y varios métodos y propiedades relacionados con el estilo. */
interface CSSStyleDeclaration {
    alignContent: string;
    alignItems: string;
    alignSelf: string;
    alignmentBaseline: string;
    all: string;
    animation: string;
    animationDelay: string;
    animationDirection: string;
    animationDuration: string;
    animationFillMode: string;
    animationIterationCount: string;
    animationName: string;
    animationPlayState: string;
    animationTimingFunction: string;
    appearance: string;
    aspectRatio: string;
    backfaceVisibility: string;
    background: string;
    backgroundAttachment: string;
    backgroundBlendMode: string;
    backgroundClip: string;
    backgroundColor: string;
    backgroundImage: string;
    backgroundOrigin: string;
    backgroundPosition: string;
    backgroundPositionX: string;
    backgroundPositionY: string;
    backgroundRepeat: string;
    backgroundSize: string;
    baselineShift: string;
    blockSize: string;
    border: string;
    borderBlock: string;
    borderBlockColor: string;
    borderBlockEnd: string;
    borderBlockEndColor: string;
    borderBlockEndStyle: string;
    borderBlockEndWidth: string;
    borderBlockStart: string;
    borderBlockStartColor: string;
    borderBlockStartStyle: string;
    borderBlockStartWidth: string;
    borderBlockStyle: string;
    borderBlockWidth: string;
    borderBottom: string;
    borderBottomColor: string;
    borderBottomLeftRadius: string;
    borderBottomRightRadius: string;
    borderBottomStyle: string;
    borderBottomWidth: string;
    borderCollapse: string;
    borderColor: string;
    borderEndEndRadius: string;
    borderEndStartRadius: string;
    borderImage: string;
    borderImageOutset: string;
    borderImageRepeat: string;
    borderImageSlice: string;
    borderImageSource: string;
    borderImageWidth: string;
    borderInline: string;
    borderInlineColor: string;
    borderInlineEnd: string;
    borderInlineEndColor: string;
    borderInlineEndStyle: string;
    borderInlineEndWidth: string;
    borderInlineStart: string;
    borderInlineStartColor: string;
    borderInlineStartStyle: string;
    borderInlineStartWidth: string;
    borderInlineStyle: string;
    borderInlineWidth: string;
    borderLeft: string;
    borderLeftColor: string;
    borderLeftStyle: string;
    borderLeftWidth: string;
    borderRadius: string;
    borderRight: string;
    borderRightColor: string;
    borderRightStyle: string;
    borderRightWidth: string;
    borderSpacing: string;
    borderStartEndRadius: string;
    borderStartStartRadius: string;
    borderStyle: string;
    borderTop: string;
    borderTopColor: string;
    borderTopLeftRadius: string;
    borderTopRightRadius: string;
    borderTopStyle: string;
    borderTopWidth: string;
    borderWidth: string;
    bottom: string;
    boxShadow: string;
    boxSizing: string;
    breakAfter: string;
    breakBefore: string;
    breakInside: string;
    captionSide: string;
    caretColor: string;
    clear: string;
    clip: string;
    clipPath: string;
    clipRule: string;
    color: string;
    colorInterpolation: string;
    colorInterpolationFilters: string;
    colorScheme: string;
    columnCount: string;
    columnFill: string;
    columnGap: string;
    columnRule: string;
    columnRuleColor: string;
    columnRuleStyle: string;
    columnRuleWidth: string;
    columnSpan: string;
    columnWidth: string;
    columns: string;
    contain: string;
    content: string;
    counterIncrement: string;
    counterReset: string;
    counterSet: string;
    cssFloat: string;
    cssText: string;
    cursor: string;
    direction: string;
    display: string;
    dominantBaseline: string;
    emptyCells: string;
    fill: string;
    fillOpacity: string;
    fillRule: string;
    filter: string;
    flex: string;
    flexBasis: string;
    flexDirection: string;
    flexFlow: string;
    flexGrow: string;
    flexShrink: string;
    flexWrap: string;
    float: string;
    floodColor: string;
    floodOpacity: string;
    font: string;
    fontFamily: string;
    fontFeatureSettings: string;
    fontKerning: string;
    fontOpticalSizing: string;
    fontSize: string;
    fontSizeAdjust: string;
    fontStretch: string;
    fontStyle: string;
    fontSynthesis: string;
    fontVariant: string;
    fontVariantAlternates: string;
    fontVariantCaps: string;
    fontVariantEastAsian: string;
    fontVariantLigatures: string;
    fontVariantNumeric: string;
    fontVariantPosition: string;
    fontVariationSettings: string;
    fontWeight: string;
    gap: string;
    grid: string;
    gridArea: string;
    gridAutoColumns: string;
    gridAutoFlow: string;
    gridAutoRows: string;
    gridColumn: string;
    gridColumnEnd: string;
    gridColumnGap: string;
    gridColumnStart: string;
    gridGap: string;
    gridRow: string;
    gridRowEnd: string;
    gridRowGap: string;
    gridRowStart: string;
    gridTemplate: string;
    gridTemplateAreas: string;
    gridTemplateColumns: string;
    gridTemplateRows: string;
    height: string;
    hyphens: string;
    /** @deprecated */
    imageOrientation: string;
    imageRendering: string;
    inlineSize: string;
    inset: string;
    insetBlock: string;
    insetBlockEnd: string;
    insetBlockStart: string;
    insetInline: string;
    insetInlineEnd: string;
    insetInlineStart: string;
    isolation: string;
    justifyContent: string;
    justifyItems: string;
    justifySelf: string;
    left: string;
    readonly length: number;
    letterSpacing: string;
    lightingColor: string;
    lineBreak: string;
    lineHeight: string;
    listStyle: string;
    listStyleImage: string;
    listStylePosition: string;
    listStyleType: string;
    margin: string;
    marginBlock: string;
    marginBlockEnd: string;
    marginBlockStart: string;
    marginBottom: string;
    marginInline: string;
    marginInlineEnd: string;
    marginInlineStart: string;
    marginLeft: string;
    marginRight: string;
    marginTop: string;
    marker: string;
    markerEnd: string;
    markerMid: string;
    markerStart: string;
    mask: string;
    maskType: string;
    maxBlockSize: string;
    maxHeight: string;
    maxInlineSize: string;
    maxWidth: string;
    minBlockSize: string;
    minHeight: string;
    minInlineSize: string;
    minWidth: string;
    mixBlendMode: string;
    objectFit: string;
    objectPosition: string;
    offset: string;
    offsetAnchor: string;
    offsetDistance: string;
    offsetPath: string;
    offsetRotate: string;
    opacity: string;
    order: string;
    orphans: string;
    outline: string;
    outlineColor: string;
    outlineOffset: string;
    outlineStyle: string;
    outlineWidth: string;
    overflow: string;
    overflowAnchor: string;
    overflowWrap: string;
    overflowX: string;
    overflowY: string;
    overscrollBehavior: string;
    overscrollBehaviorBlock: string;
    overscrollBehaviorInline: string;
    overscrollBehaviorX: string;
    overscrollBehaviorY: string;
    padding: string;
    paddingBlock: string;
    paddingBlockEnd: string;
    paddingBlockStart: string;
    paddingBottom: string;
    paddingInline: string;
    paddingInlineEnd: string;
    paddingInlineStart: string;
    paddingLeft: string;
    paddingRight: string;
    paddingTop: string;
    pageBreakAfter: string;
    pageBreakBefore: string;
    pageBreakInside: string;
    paintOrder: string;
    readonly parentRule: CSSRule | null;
    perspective: string;
    perspectiveOrigin: string;
    placeContent: string;
    placeItems: string;
    placeSelf: string;
    pointerEvents: string;
    position: string;
    quotes: string;
    resize: string;
    right: string;
    rotate: string;
    rowGap: string;
    rubyPosition: string;
    scale: string;
    scrollBehavior: string;
    scrollMargin: string;
    scrollMarginBlock: string;
    scrollMarginBlockEnd: string;
    scrollMarginBlockStart: string;
    scrollMarginBottom: string;
    scrollMarginInline: string;
    scrollMarginInlineEnd: string;
    scrollMarginInlineStart: string;
    scrollMarginLeft: string;
    scrollMarginRight: string;
    scrollMarginTop: string;
    scrollPadding: string;
    scrollPaddingBlock: string;
    scrollPaddingBlockEnd: string;
    scrollPaddingBlockStart: string;
    scrollPaddingBottom: string;
    scrollPaddingInline: string;
    scrollPaddingInlineEnd: string;
    scrollPaddingInlineStart: string;
    scrollPaddingLeft: string;
    scrollPaddingRight: string;
    scrollPaddingTop: string;
    scrollSnapAlign: string;
    scrollSnapType: string;
    shapeImageThreshold: string;
    shapeMargin: string;
    shapeOutside: string;
    shapeRendering: string;
    stopColor: string;
    stopOpacity: string;
    stroke: string;
    strokeDasharray: string;
    strokeDashoffset: string;
    strokeLinecap: string;
    strokeLinejoin: string;
    strokeMiterlimit: string;
    strokeOpacity: string;
    strokeWidth: string;
    tabSize: string;
    tableLayout: string;
    textAlign: string;
    textAlignLast: string;
    textAnchor: string;
    textCombineUpright: string;
    textDecoration: string;
    textDecorationColor: string;
    textDecorationLine: string;
    textDecorationSkipInk: string;
    textDecorationStyle: string;
    textDecorationThickness: string;
    textEmphasis: string;
    textEmphasisColor: string;
    textEmphasisPosition: string;
    textEmphasisStyle: string;
    textIndent: string;
    textOrientation: string;
    textOverflow: string;
    textRendering: string;
    textShadow: string;
    textTransform: string;
    textUnderlineOffset: string;
    textUnderlinePosition: string;
    top: string;
    touchAction: string;
    transform: string;
    transformBox: string;
    transformOrigin: string;
    transformStyle: string;
    transition: string;
    transitionDelay: string;
    transitionDuration: string;
    transitionProperty: string;
    transitionTimingFunction: string;
    translate: string;
    unicodeBidi: string;
    userSelect: string;
    verticalAlign: string;
    visibility: string;
    /** @deprecated */
    webkitAlignContent: string;
    /** @deprecated */
    webkitAlignItems: string;
    /** @deprecated */
    webkitAlignSelf: string;
    /** @deprecated */
    webkitAnimation: string;
    /** @deprecated */
    webkitAnimationDelay: string;
    /** @deprecated */
    webkitAnimationDirection: string;
    /** @deprecated */
    webkitAnimationDuration: string;
    /** @deprecated */
    webkitAnimationFillMode: string;
    /** @deprecated */
    webkitAnimationIterationCount: string;
    /** @deprecated */
    webkitAnimationName: string;
    /** @deprecated */
    webkitAnimationPlayState: string;
    /** @deprecated */
    webkitAnimationTimingFunction: string;
    /** @deprecated */
    webkitAppearance: string;
    /** @deprecated */
    webkitBackfaceVisibility: string;
    /** @deprecated */
    webkitBackgroundClip: string;
    /** @deprecated */
    webkitBackgroundOrigin: string;
    /** @deprecated */
    webkitBackgroundSize: string;
    /** @deprecated */
    webkitBorderBottomLeftRadius: string;
    /** @deprecated */
    webkitBorderBottomRightRadius: string;
    /** @deprecated */
    webkitBorderRadius: string;
    /** @deprecated */
    webkitBorderTopLeftRadius: string;
    /** @deprecated */
    webkitBorderTopRightRadius: string;
    /** @deprecated */
    webkitBoxAlign: string;
    /** @deprecated */
    webkitBoxFlex: string;
    /** @deprecated */
    webkitBoxOrdinalGroup: string;
    /** @deprecated */
    webkitBoxOrient: string;
    /** @deprecated */
    webkitBoxPack: string;
    /** @deprecated */
    webkitBoxShadow: string;
    /** @deprecated */
    webkitBoxSizing: string;
    /** @deprecated */
    webkitFilter: string;
    /** @deprecated */
    webkitFlex: string;
    /** @deprecated */
    webkitFlexBasis: string;
    /** @deprecated */
    webkitFlexDirection: string;
    /** @deprecated */
    webkitFlexFlow: string;
    /** @deprecated */
    webkitFlexGrow: string;
    /** @deprecated */
    webkitFlexShrink: string;
    /** @deprecated */
    webkitFlexWrap: string;
    /** @deprecated */
    webkitJustifyContent: string;
    webkitLineClamp: string;
    /** @deprecated */
    webkitMask: string;
    /** @deprecated */
    webkitMaskBoxImage: string;
    /** @deprecated */
    webkitMaskBoxImageOutset: string;
    /** @deprecated */
    webkitMaskBoxImageRepeat: string;
    /** @deprecated */
    webkitMaskBoxImageSlice: string;
    /** @deprecated */
    webkitMaskBoxImageSource: string;
    /** @deprecated */
    webkitMaskBoxImageWidth: string;
    /** @deprecated */
    webkitMaskClip: string;
    /** @deprecated */
    webkitMaskComposite: string;
    /** @deprecated */
    webkitMaskImage: string;
    /** @deprecated */
    webkitMaskOrigin: string;
    /** @deprecated */
    webkitMaskPosition: string;
    /** @deprecated */
    webkitMaskRepeat: string;
    /** @deprecated */
    webkitMaskSize: string;
    /** @deprecated */
    webkitOrder: string;
    /** @deprecated */
    webkitPerspective: string;
    /** @deprecated */
    webkitPerspectiveOrigin: string;
    /** @deprecated */
    webkitTextFillColor: string;
    /** @deprecated */
    webkitTextSizeAdjust: string;
    /** @deprecated */
    webkitTextStroke: string;
    /** @deprecated */
    webkitTextStrokeColor: string;
    /** @deprecated */
    webkitTextStrokeWidth: string;
    /** @deprecated */
    webkitTransform: string;
    /** @deprecated */
    webkitTransformOrigin: string;
    /** @deprecated */
    webkitTransformStyle: string;
    /** @deprecated */
    webkitTransition: string;
    /** @deprecated */
    webkitTransitionDelay: string;
    /** @deprecated */
    webkitTransitionDuration: string;
    /** @deprecated */
    webkitTransitionProperty: string;
    /** @deprecated */
    webkitTransitionTimingFunction: string;
    /** @deprecated */
    webkitUserSelect: string;
    whiteSpace: string;
    widows: string;
    width: string;
    willChange: string;
    wordBreak: string;
    wordSpacing: string;
    /** @deprecated */
    wordWrap: string;
    writingMode: string;
    zIndex: string;
    getPropertyPriority(property: string): string;
    getPropertyValue(property: string): string;
    item(index: number): string;
    removeProperty(property: string): string;
    setProperty(property: string, value: string | null, priority?: string): void;
    [index: number]: string;
}

declare var CSSStyleDeclaration: {
    readonly prototype: CSSStyleDeclaration;
    new(): CSSStyleDeclaration;
};

/** CSSStyleRule representa una sola regla de estilo CSS. Implementa la interfaz CSSRule con un valor de tipo 1 (CSSRule.STYLE_RULE). */
interface CSSStyleRule extends CSSRule {
    selectorText: string;
    readonly style: CSSStyleDeclaration;
}

declare var CSSStyleRule: {
    readonly prototype: CSSStyleRule;
    new(): CSSStyleRule;
};

/** Una sola hoja de estilo CSS. Hereda propiedades y métodos de su padre, StyleSheet. */
interface CSSStyleSheet extends StyleSheet {
    readonly cssRules: CSSRuleList;
    readonly ownerRule: CSSRule | null;
    /** @deprecated */
    readonly rules: CSSRuleList;
    /** @deprecated */
    addRule(selector?: string, style?: string, index?: number): number;
    deleteRule(index: number): void;
    insertRule(rule: string, index?: number): number;
    /** @deprecated */
    removeRule(index?: number): void;
}

declare var CSSStyleSheet: {
    readonly prototype: CSSStyleSheet;
    new(): CSSStyleSheet;
};

/** Un objeto que representa una sola regla @supports de CSS. Implementa la interfaz CSSConditionRule y, por lo tanto, las interfaces CSSRule y CSSGroupingRule con un valor de tipo de 12 (CSSRule.SUPPORTS_RULE). */
interface CSSSupportsRule extends CSSConditionRule {
}

declare var CSSSupportsRule: {
    readonly prototype: CSSSupportsRule;
    new(): CSSSupportsRule;
};

interface CSSTransition extends Animation {
    readonly transitionProperty: string;
    addEventListener<K extends keyof AnimationEventMap>(type: K, listener: (this: CSSTransition, ev: AnimationEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof AnimationEventMap>(type: K, listener: (this: CSSTransition, ev: AnimationEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var CSSTransition: {
    readonly prototype: CSSTransition;
    new(): CSSTransition;
};

/** Proporciona un mecanismo de almacenamiento para pares de objetos de solicitud/respuesta que se almacenan en caché, por ejemplo, como parte del ciclo de vida de ServiceWorker. Ten en cuenta que la interfaz de caché está expuesta a ámbitos de ventana, así como a trabajadores. No tienes que usarlo junto con los trabajadores del servicio, aunque esté definido en la especificación del trabajador del servicio. */
interface Cache {
    add(request: RequestInfo): Promise<void>;
    addAll(requests: RequestInfo[]): Promise<void>;
    delete(request: RequestInfo, options?: CacheQueryOptions): Promise<boolean>;
    keys(request?: RequestInfo, options?: CacheQueryOptions): Promise<ReadonlyArray<Request>>;
    match(request: RequestInfo, options?: CacheQueryOptions): Promise<Response | undefined>;
    matchAll(request?: RequestInfo, options?: CacheQueryOptions): Promise<ReadonlyArray<Response>>;
    put(request: RequestInfo, response: Response): Promise<void>;
}

declare var Cache: {
    readonly prototype: Cache;
    new(): Cache;
};

/** El almacenamiento de objetos Cache. */
interface CacheStorage {
    delete(cacheName: string): Promise<boolean>;
    has(cacheName: string): Promise<boolean>;
    keys(): Promise<string[]>;
    match(request: RequestInfo, options?: MultiCacheQueryOptions): Promise<Response | undefined>;
    open(cacheName: string): Promise<Cache>;
}

declare var CacheStorage: {
    readonly prototype: CacheStorage;
    new(): CacheStorage;
};

interface CanvasCompositing {
    globalAlpha: number;
    globalCompositeOperation: string;
}

interface CanvasDrawImage {
    drawImage(image: CanvasImageSource, dx: number, dy: number): void;
    drawImage(image: CanvasImageSource, dx: number, dy: number, dw: number, dh: number): void;
    drawImage(image: CanvasImageSource, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): void;
}

interface CanvasDrawPath {
    beginPath(): void;
    clip(fillRule?: CanvasFillRule): void;
    clip(path: Path2D, fillRule?: CanvasFillRule): void;
    fill(fillRule?: CanvasFillRule): void;
    fill(path: Path2D, fillRule?: CanvasFillRule): void;
    isPointInPath(x: number, y: number, fillRule?: CanvasFillRule): boolean;
    isPointInPath(path: Path2D, x: number, y: number, fillRule?: CanvasFillRule): boolean;
    isPointInStroke(x: number, y: number): boolean;
    isPointInStroke(path: Path2D, x: number, y: number): boolean;
    stroke(): void;
    stroke(path: Path2D): void;
}

interface CanvasFillStrokeStyles {
    fillStyle: string | CanvasGradient | CanvasPattern;
    strokeStyle: string | CanvasGradient | CanvasPattern;
    createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient;
    createPattern(image: CanvasImageSource, repetition: string | null): CanvasPattern | null;
    createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient;
}

interface CanvasFilters {
    filter: string;
}

/** Un objeto opaco que describe un degradado. Lo devuelven los métodos CanvasRenderingContext2D.createLinearGradient() o CanvasRenderingContext2D.createRadialGradient(). */
interface CanvasGradient {
    /**
     * Agrega una parada de color con el color dado al degradado en el desplazamiento dado. 0.0 es el desplazamiento en un extremo del gradiente, 1.0 es el desplazamiento en el otro extremo.
     *
     * Lanza una excepción DOMException "IndexSizeError" si el desplazamiento está fuera de rango.r. Lanza una excepción DOMException "SyntaxError" si el color no se puede analiza.
     */
    addColorStop(offset: number, color: string): void;
}

declare var CanvasGradient: {
    readonly prototype: CanvasGradient;
    new(): CanvasGradient;
};

interface CanvasImageData {
    createImageData(sw: number, sh: number, settings?: ImageDataSettings): ImageData;
    createImageData(imagedata: ImageData): ImageData;
    getImageData(sx: number, sy: number, sw: number, sh: number, settings?: ImageDataSettings): ImageData;
    putImageData(imagedata: ImageData, dx: number, dy: number): void;
    putImageData(imagedata: ImageData, dx: number, dy: number, dirtyX: number, dirtyY: number, dirtyWidth: number, dirtyHeight: number): void;
}

interface CanvasImageSmoothing {
    imageSmoothingEnabled: boolean;
    imageSmoothingQuality: ImageSmoothingQuality;
}

interface CanvasPath {
    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise?: boolean): void;
    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;
    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
    closePath(): void;
    ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, counterclockwise?: boolean): void;
    lineTo(x: number, y: number): void;
    moveTo(x: number, y: number): void;
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
    rect(x: number, y: number, w: number, h: number): void;
}

interface CanvasPathDrawingStyles {
    lineCap: CanvasLineCap;
    lineDashOffset: number;
    lineJoin: CanvasLineJoin;
    lineWidth: number;
    miterLimit: number;
    getLineDash(): number[];
    setLineDash(segments: number[]): void;
}

/** Un objeto opaco que describe un patrón, basado en una imagen, un lienzo o un video, creado por el método CanvasRenderingContext2D.createPattern(). */
interface CanvasPattern {
    /**
     * Establece el arreglo de transformación que se utilizará al renderizar el patrón durante una operación de pintura de relleno o trazo.
     */
    setTransform(transform?: DOMMatrix2DInit): void;
}

declare var CanvasPattern: {
    readonly prototype: CanvasPattern;
    new(): CanvasPattern;
};

interface CanvasRect {
    clearRect(x: number, y: number, w: number, h: number): void;
    fillRect(x: number, y: number, w: number, h: number): void;
    strokeRect(x: number, y: number, w: number, h: number): void;
}

/** La interfaz CanvasRenderingContext2D, parte de la API de Canvas, proporciona el contexto de renderizado 2D para la superficie de dibujo de un elemento <canvas>. Se utiliza para dibujar formas, texto, imágenes y otros objetos. */
interface CanvasRenderingContext2D extends CanvasCompositing, CanvasDrawImage, CanvasDrawPath, CanvasFillStrokeStyles, CanvasFilters, CanvasImageData, CanvasImageSmoothing, CanvasPath, CanvasPathDrawingStyles, CanvasRect, CanvasShadowStyles, CanvasState, CanvasText, CanvasTextDrawingStyles, CanvasTransform, CanvasUserInterface {
    readonly canvas: HTMLCanvasElement;
}

declare var CanvasRenderingContext2D: {
    readonly prototype: CanvasRenderingContext2D;
    new(): CanvasRenderingContext2D;
};

interface CanvasShadowStyles {
    shadowBlur: number;
    shadowColor: string;
    shadowOffsetX: number;
    shadowOffsetY: number;
}

interface CanvasState {
    restore(): void;
    save(): void;
}

interface CanvasText {
    fillText(text: string, x: number, y: number, maxWidth?: number): void;
    measureText(text: string): TextMetrics;
    strokeText(text: string, x: number, y: number, maxWidth?: number): void;
}

interface CanvasTextDrawingStyles {
    direction: CanvasDirection;
    font: string;
    textAlign: CanvasTextAlign;
    textBaseline: CanvasTextBaseline;
}

interface CanvasTransform {
    getTransform(): DOMMatrix;
    resetTransform(): void;
    rotate(angle: number): void;
    scale(x: number, y: number): void;
    setTransform(a: number, b: number, c: number, d: number, e: number, f: number): void;
    setTransform(transform?: DOMMatrix2DInit): void;
    transform(a: number, b: number, c: number, d: number, e: number, f: number): void;
    translate(x: number, y: number): void;
}

interface CanvasUserInterface {
    drawFocusIfNeeded(element: Element): void;
    drawFocusIfNeeded(path: Path2D, element: Element): void;
}

/** La interfaz ChannelMergerNode, a menudo utilizada junto con su opuesto, ChannelSplitterNode, reúne diferentes entradas mono en una sola salida. Cada entrada se utiliza para llenar un canal de la salida. Esto es útil para acceder a cada canal por separado, p. ej. para realizar mezclas de canales donde la ganancia se debe controlar por separado en cada canal. */
interface ChannelMergerNode extends AudioNode {
}

declare var ChannelMergerNode: {
    readonly prototype: ChannelMergerNode;
    new(context: BaseAudioContext, options?: ChannelMergerOptions): ChannelMergerNode;
};

/** La interfaz ChannelSplitterNode, a menudo utilizada junto con su opuesta, ChannelMergerNode, separa los diferentes canales de una fuente de audio en un conjunto de salidas mono. Esto es útil para acceder a cada canal por separado, p. ej. para realizar mezclas de canales donde la ganancia se debe controlar por separado en cada canal. */
interface ChannelSplitterNode extends AudioNode {
}

declare var ChannelSplitterNode: {
    readonly prototype: ChannelSplitterNode;
    new(context: BaseAudioContext, options?: ChannelSplitterOptions): ChannelSplitterNode;
};

/** La interfaz abstracta CharacterData representa un objeto Node que contiene caracteres. Esta es una interfaz abstracta, lo cual significa que no hay ningún objeto de tipo CharacterData: se implementa mediante otras interfaces, como Text, Comment o ProcessingInstruction, que no son abstractas. */
interface CharacterData extends Node, ChildNode, NonDocumentTypeChildNode {
    data: string;
    readonly length: number;
    readonly ownerDocument: Document;
    appendData(data: string): void;
    deleteData(offset: number, count: number): void;
    insertData(offset: number, data: string): void;
    replaceData(offset: number, count: number, data: string): void;
    substringData(offset: number, count: number): string;
}

declare var CharacterData: {
    readonly prototype: CharacterData;
    new(): CharacterData;
};

interface ChildNode {
    /**
     * Inserta nodos justo después del nodo, mientras reemplaza las cadenas en los nodos con nodos de texto equivalentes.
     *
     * Lanza una DOMException "HierarchyRequestError" si se violan las restricciones del árbol de nodos.
     */
    after(...nodes: (Node | string)[]): void;
    /**
     * Inserta nodos justo antes del nodo, mientras reemplaza las cadenas en los nodos con nodos de texto equivalentes.
     *
     * Lanza una DOMException "HierarchyRequestError" si se violan las restricciones del árbol de nodos.
     */
    before(...nodes: (Node | string)[]): void;
    /**
     * Elimina el nodo.
     */
    remove(): void;
    /**
     * Reemplaza nodo con nodos, mientras reemplaza cadenas en nodos con nodos de texto equivalentes.
     *
     * Lanza una DOMException "HierarchyRequestError" si se violan las restricciones del árbol de nodos.
     */
    replaceWith(...nodes: (Node | string)[]): void;
}

interface Clipboard extends EventTarget {
    read(): Promise<ClipboardItems>;
    readText(): Promise<string>;
    write(data: ClipboardItems): Promise<void>;
    writeText(data: string): Promise<void>;
}

declare var Clipboard: {
    readonly prototype: Clipboard;
    new(): Clipboard;
};

/** Eventos que proporcionan información relacionada con la modificación del portapapeles, es decir, eventos de cortar, copiar y pegar. */
interface ClipboardEvent extends Event {
    readonly clipboardData: DataTransfer | null;
}

declare var ClipboardEvent: {
    readonly prototype: ClipboardEvent;
    new(type: string, eventInitDict?: ClipboardEventInit): ClipboardEvent;
};

interface ClipboardItem {
    readonly types: ReadonlyArray<string>;
    getType(type: string): Promise<Blob>;
}

declare var ClipboardItem: {
    readonly prototype: ClipboardItem;
    new(items: Record<string, ClipboardItemData>, options?: ClipboardItemOptions): ClipboardItem;
};

/** Se envía un CloseEvent a los clientes que utilizan WebSockets cuando se cierra la conexión. Esto se entrega al escucha indicado por el atributo onclose del objeto WebSocket. */
interface CloseEvent extends Event {
    /**
     * Devuelve el código de cierre de la conexión WebSocket proporcionado por el servidor.
     */
    readonly code: number;
    /**
     * Devuelve el motivo de cierre de la conexión WebSocket proporcionado por el servidor.
     */
    readonly reason: string;
    /**
     * Devuelve true si la conexión se cerró limpiamente; false en caso contrario.
     */
    readonly wasClean: boolean;
}

declare var CloseEvent: {
    readonly prototype: CloseEvent;
    new(type: string, eventInitDict?: CloseEventInit): CloseEvent;
};

/** Anotaciones textuales dentro del marcado; aunque generalmente no se muestra visualmente, dichos comentarios están disponibles para leerse en la vista de código fuente. */
interface Comment extends CharacterData {
}

declare var Comment: {
    readonly prototype: Comment;
    new(data?: string): Comment;
};

/** El DOM CompositionEvent representa eventos que ocurren debido a que el usuario ingresa texto indirectamente. */
interface CompositionEvent extends UIEvent {
    readonly data: string;
    /** @deprecated */
    initCompositionEvent(typeArg: string, bubblesArg?: boolean, cancelableArg?: boolean, viewArg?: WindowProxy | null, dataArg?: string): void;
}

declare var CompositionEvent: {
    readonly prototype: CompositionEvent;
    new(type: string, eventInitDict?: CompositionEventInit): CompositionEvent;
};

interface ConstantSourceNode extends AudioScheduledSourceNode {
    readonly offset: AudioParam;
    addEventListener<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: ConstantSourceNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: ConstantSourceNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var ConstantSourceNode: {
    readonly prototype: ConstantSourceNode;
    new(context: BaseAudioContext, options?: ConstantSourceOptions): ConstantSourceNode;
};

/** Un AudioNode que realiza una circunvolución lineal en un AudioBuffer determinado, a menudo utilizado para lograr un efecto de reverberación. Un ConvolverNode siempre tiene exactamente una entrada y una salida. */
interface ConvolverNode extends AudioNode {
    buffer: AudioBuffer | null;
    normalize: boolean;
}

declare var ConvolverNode: {
    readonly prototype: ConvolverNode;
    new(context: BaseAudioContext, options?: ConvolverOptions): ConvolverNode;
};

/** Esta interfaz API de Streams proporciona una estrategia de cola de longitud de bytes integrada que se puede usar al construir transmisiones. */
interface CountQueuingStrategy extends QueuingStrategy {
    readonly highWaterMark: number;
    readonly size: QueuingStrategySize;
}

declare var CountQueuingStrategy: {
    readonly prototype: CountQueuingStrategy;
    new(init: QueuingStrategyInit): CountQueuingStrategy;
};

interface Credential {
    readonly id: string;
    readonly type: string;
}

declare var Credential: {
    readonly prototype: Credential;
    new(): Credential;
};

interface CredentialsContainer {
    create(options?: CredentialCreationOptions): Promise<Credential | null>;
    get(options?: CredentialRequestOptions): Promise<Credential | null>;
    preventSilentAccess(): Promise<void>;
    store(credential: Credential): Promise<Credential>;
}

declare var CredentialsContainer: {
    readonly prototype: CredentialsContainer;
    new(): CredentialsContainer;
};

/** Funciones básicas de criptografía disponibles en el contexto actual. Permite el acceso a un generador de números aleatorios criptográficamente fuerte y a primitivas criptográficas. */
interface Crypto {
    readonly subtle: SubtleCrypto;
    getRandomValues<T extends ArrayBufferView | null>(array: T): T;
}

declare var Crypto: {
    readonly prototype: Crypto;
    new(): Crypto;
};

/** El diccionario CryptoKey de la API Web Crypto representa una clave criptográfica. */
interface CryptoKey {
    readonly algorithm: KeyAlgorithm;
    readonly extractable: boolean;
    readonly type: KeyType;
    readonly usages: KeyUsage[];
}

declare var CryptoKey: {
    readonly prototype: CryptoKey;
    new(): CryptoKey;
};

interface CustomElementRegistry {
    define(name: string, constructor: CustomElementConstructor, options?: ElementDefinitionOptions): void;
    get(name: string): CustomElementConstructor | undefined;
    upgrade(root: Node): void;
    whenDefined(name: string): Promise<CustomElementConstructor>;
}

declare var CustomElementRegistry: {
    readonly prototype: CustomElementRegistry;
    new(): CustomElementRegistry;
};

interface CustomEvent<T = any> extends Event {
    /**
     * Devuelve cualquier evento de datos personalizado con el que se haya creado. Normalmente se utiliza para eventos sintéticos.
     */
    readonly detail: T;
    /** @deprecated */
    initCustomEvent(type: string, bubbles?: boolean, cancelable?: boolean, detail?: T): void;
}

declare var CustomEvent: {
    readonly prototype: CustomEvent;
    new<T>(type: string, eventInitDict?: CustomEventInit<T>): CustomEvent<T>;
};

/** Un evento anormal (llamado excepción) que ocurre como resultado de llamar a un método o acceder a una propiedad de una API web. */
interface DOMException {
    readonly code: number;
    readonly message: string;
    readonly name: string;
    readonly ABORT_ERR: number;
    readonly DATA_CLONE_ERR: number;
    readonly DOMSTRING_SIZE_ERR: number;
    readonly HIERARCHY_REQUEST_ERR: number;
    readonly INDEX_SIZE_ERR: number;
    readonly INUSE_ATTRIBUTE_ERR: number;
    readonly INVALID_ACCESS_ERR: number;
    readonly INVALID_CHARACTER_ERR: number;
    readonly INVALID_MODIFICATION_ERR: number;
    readonly INVALID_NODE_TYPE_ERR: number;
    readonly INVALID_STATE_ERR: number;
    readonly NAMESPACE_ERR: number;
    readonly NETWORK_ERR: number;
    readonly NOT_FOUND_ERR: number;
    readonly NOT_SUPPORTED_ERR: number;
    readonly NO_DATA_ALLOWED_ERR: number;
    readonly NO_MODIFICATION_ALLOWED_ERR: number;
    readonly QUOTA_EXCEEDED_ERR: number;
    readonly SECURITY_ERR: number;
    readonly SYNTAX_ERR: number;
    readonly TIMEOUT_ERR: number;
    readonly TYPE_MISMATCH_ERR: number;
    readonly URL_MISMATCH_ERR: number;
    readonly VALIDATION_ERR: number;
    readonly WRONG_DOCUMENT_ERR: number;
}

declare var DOMException: {
    readonly prototype: DOMException;
    new(message?: string, name?: string): DOMException;
    readonly ABORT_ERR: number;
    readonly DATA_CLONE_ERR: number;
    readonly DOMSTRING_SIZE_ERR: number;
    readonly HIERARCHY_REQUEST_ERR: number;
    readonly INDEX_SIZE_ERR: number;
    readonly INUSE_ATTRIBUTE_ERR: number;
    readonly INVALID_ACCESS_ERR: number;
    readonly INVALID_CHARACTER_ERR: number;
    readonly INVALID_MODIFICATION_ERR: number;
    readonly INVALID_NODE_TYPE_ERR: number;
    readonly INVALID_STATE_ERR: number;
    readonly NAMESPACE_ERR: number;
    readonly NETWORK_ERR: number;
    readonly NOT_FOUND_ERR: number;
    readonly NOT_SUPPORTED_ERR: number;
    readonly NO_DATA_ALLOWED_ERR: number;
    readonly NO_MODIFICATION_ALLOWED_ERR: number;
    readonly QUOTA_EXCEEDED_ERR: number;
    readonly SECURITY_ERR: number;
    readonly SYNTAX_ERR: number;
    readonly TIMEOUT_ERR: number;
    readonly TYPE_MISMATCH_ERR: number;
    readonly URL_MISMATCH_ERR: number;
    readonly VALIDATION_ERR: number;
    readonly WRONG_DOCUMENT_ERR: number;
};

/** Un objeto que proporciona métodos que no dependen de ningún documento en particular. Dicho objeto es devuelto por la propiedad Document.implementation. */
interface DOMImplementation {
    createDocument(namespace: string | null, qualifiedName: string | null, doctype?: DocumentType | null): XMLDocument;
    createDocumentType(qualifiedName: string, publicId: string, systemId: string): DocumentType;
    createHTMLDocument(title?: string): Document;
    /** @deprecated */
    hasFeature(...args: any[]): true;
}

declare var DOMImplementation: {
    readonly prototype: DOMImplementation;
    new(): DOMImplementation;
};

interface DOMMatrix extends DOMMatrixReadOnly {
    invertSelf(): DOMMatrix;
    multiplySelf(other?: DOMMatrixInit): DOMMatrix;
    preMultiplySelf(other?: DOMMatrixInit): DOMMatrix;
    rotateAxisAngleSelf(x?: number, y?: number, z?: number, angle?: number): DOMMatrix;
    rotateFromVectorSelf(x?: number, y?: number): DOMMatrix;
    rotateSelf(rotX?: number, rotY?: number, rotZ?: number): DOMMatrix;
    scale3dSelf(scale?: number, originX?: number, originY?: number, originZ?: number): DOMMatrix;
    scaleSelf(scaleX?: number, scaleY?: number, scaleZ?: number, originX?: number, originY?: number, originZ?: number): DOMMatrix;
    setMatrixValue(transformList: string): DOMMatrix;
    skewXSelf(sx?: number): DOMMatrix;
    skewYSelf(sy?: number): DOMMatrix;
    translateSelf(tx?: number, ty?: number, tz?: number): DOMMatrix;
}

declare var DOMMatrix: {
    readonly prototype: DOMMatrix;
    new(init?: string | number[]): DOMMatrix;
    fromFloat32Array(array32: Float32Array): DOMMatrix;
    fromFloat64Array(array64: Float64Array): DOMMatrix;
    fromMatrix(other?: DOMMatrixInit): DOMMatrix;
};

type SVGMatrix = DOMMatrix;
declare var SVGMatrix: typeof DOMMatrix;

type WebKitCSSMatrix = DOMMatrix;
declare var WebKitCSSMatrix: typeof DOMMatrix;

interface DOMMatrixReadOnly {
    readonly a: number;
    readonly b: number;
    readonly c: number;
    readonly d: number;
    readonly e: number;
    readonly f: number;
    readonly is2D: boolean;
    readonly isIdentity: boolean;
    readonly m11: number;
    readonly m12: number;
    readonly m13: number;
    readonly m14: number;
    readonly m21: number;
    readonly m22: number;
    readonly m23: number;
    readonly m24: number;
    readonly m31: number;
    readonly m32: number;
    readonly m33: number;
    readonly m34: number;
    readonly m41: number;
    readonly m42: number;
    readonly m43: number;
    readonly m44: number;
    flipX(): DOMMatrix;
    flipY(): DOMMatrix;
    inverse(): DOMMatrix;
    multiply(other?: DOMMatrixInit): DOMMatrix;
    rotate(rotX?: number, rotY?: number, rotZ?: number): DOMMatrix;
    rotateAxisAngle(x?: number, y?: number, z?: number, angle?: number): DOMMatrix;
    rotateFromVector(x?: number, y?: number): DOMMatrix;
    scale(scaleX?: number, scaleY?: number, scaleZ?: number, originX?: number, originY?: number, originZ?: number): DOMMatrix;
    scale3d(scale?: number, originX?: number, originY?: number, originZ?: number): DOMMatrix;
    /** @deprecated */
    scaleNonUniform(scaleX?: number, scaleY?: number): DOMMatrix;
    skewX(sx?: number): DOMMatrix;
    skewY(sy?: number): DOMMatrix;
    toFloat32Array(): Float32Array;
    toFloat64Array(): Float64Array;
    toJSON(): any;
    transformPoint(point?: DOMPointInit): DOMPoint;
    translate(tx?: number, ty?: number, tz?: number): DOMMatrix;
    toString(): string;
}

declare var DOMMatrixReadOnly: {
    readonly prototype: DOMMatrixReadOnly;
    new(init?: string | number[]): DOMMatrixReadOnly;
    fromFloat32Array(array32: Float32Array): DOMMatrixReadOnly;
    fromFloat64Array(array64: Float64Array): DOMMatrixReadOnly;
    fromMatrix(other?: DOMMatrixInit): DOMMatrixReadOnly;
    toString(): string;
};

/** Brinda la capacidad de analizar el código fuente XML o HTML de una cadena en un documento DOM. */
interface DOMParser {
    /**
     * Analiza la cadena mediante el analizador HTML o XML, según el tipo, y devuelve el documento resultante. el tipo puede ser "text/html" (que invocará el analizador HTML), o cualquiera de "text/xml", "application/xml", "application/xhtml+xml" o "image/svg+xml" (que invocará el analizador XML).
     *
     * Para el analizador XML, si la cadena no se puede analizar, el documento devuelto contendrá elementos que describen el error resultante.
     *
     * Ten en cuenta que los elementos del script no se evalúan durante el análisis y la codificación del documento resultante siempre será UTF-8.
     *
     * Los valores distintos de los anteriores para el tipo provocarán que se produzca una excepción TypeError.
     */
    parseFromString(string: string, type: DOMParserSupportedType): Document;
}

declare var DOMParser: {
    readonly prototype: DOMParser;
    new(): DOMParser;
};

interface DOMPoint extends DOMPointReadOnly {
}

declare var DOMPoint: {
    readonly prototype: DOMPoint;
    new(x?: number, y?: number, z?: number, w?: number): DOMPoint;
    fromPoint(other?: DOMPointInit): DOMPoint;
};

type SVGPoint = DOMPoint;
declare var SVGPoint: typeof DOMPoint;

interface DOMPointReadOnly {
    readonly w: number;
    readonly x: number;
    readonly y: number;
    readonly z: number;
    matrixTransform(matrix?: DOMMatrixInit): DOMPoint;
    toJSON(): any;
}

declare var DOMPointReadOnly: {
    readonly prototype: DOMPointReadOnly;
    new(x?: number, y?: number, z?: number, w?: number): DOMPointReadOnly;
    fromPoint(other?: DOMPointInit): DOMPointReadOnly;
};

interface DOMQuad {
    readonly p1: DOMPoint;
    readonly p2: DOMPoint;
    readonly p3: DOMPoint;
    readonly p4: DOMPoint;
    getBounds(): DOMRect;
    toJSON(): any;
}

declare var DOMQuad: {
    readonly prototype: DOMQuad;
    new(p1?: DOMPointInit, p2?: DOMPointInit, p3?: DOMPointInit, p4?: DOMPointInit): DOMQuad;
    fromQuad(other?: DOMQuadInit): DOMQuad;
    fromRect(other?: DOMRectInit): DOMQuad;
};

interface DOMRect extends DOMRectReadOnly {
}

declare var DOMRect: {
    readonly prototype: DOMRect;
    new(x?: number, y?: number, width?: number, height?: number): DOMRect;
    fromRect(other?: DOMRectInit): DOMRect;
};

type SVGRect = DOMRect;
declare var SVGRect: typeof DOMRect;

interface DOMRectList {
    readonly length: number;
    item(index: number): DOMRect | null;
    [index: number]: DOMRect;
}

declare var DOMRectList: {
    readonly prototype: DOMRectList;
    new(): DOMRectList;
};

interface DOMRectReadOnly {
    readonly bottom: number;
    readonly height: number;
    readonly left: number;
    readonly right: number;
    readonly top: number;
    readonly width: number;
    readonly x: number;
    readonly y: number;
    toJSON(): any;
}

declare var DOMRectReadOnly: {
    readonly prototype: DOMRectReadOnly;
    new(x?: number, y?: number, width?: number, height?: number): DOMRectReadOnly;
    fromRect(other?: DOMRectInit): DOMRectReadOnly;
};

/** Un tipo devuelto por algunas APIs que contiene una lista de DOMString (cadenas). */
interface DOMStringList {
    /**
     * Devuelve el número de cadenas en strings.
     */
    readonly length: number;
    /**
     * Devuelve true si strings contiene una cadena y false en caso contrario.
     */
    contains(string: string): boolean;
    /**
     * Devuelve la cadena con índice del índice de strings.
     */
    item(index: number): string | null;
    [index: number]: string;
}

declare var DOMStringList: {
    readonly prototype: DOMStringList;
    new(): DOMStringList;
};

/** Utilizado por el atributo HTML del conjunto de datos para representar los datos de los atributos personalizados agregados a los elementos. */
interface DOMStringMap {
    [name: string]: string | undefined;
}

declare var DOMStringMap: {
    readonly prototype: DOMStringMap;
    new(): DOMStringMap;
};

/** Un conjunto de segmentos separados por espacios. Dicho conjunto lo devuelven Element.classList, HTMLLinkElement.relList, HTMLAnchorElement.relList, HTMLAreaElement.relList, HTMLIframeElement.sandbox o HTMLOutputElement.htmlFor. Se indexa comenzando con 0 como con los objetos Array de JavaScript. DOMTokenList siempre distingue entre mayúsculas y minúsculas. */
interface DOMTokenList {
    /**
     * Devuelve el número de tokens.
     */
    readonly length: number;
    /**
     * Devuelve el conjunto asociado como cadena.
     *
     * Se puede configurar para cambiar el atributo asociado.
     */
    value: string;
    toString(): string;
    /**
     * Agrega todos los argumentos pasados, excepto los que ya están presentes.
     *
     * Lanza una excepción "SyntaxError" de DOMException si uno de los argumentos es la cadena vacía.
     *
     * Lanza una excepción "InvalidCharacterError" de DOMException si uno de los argumentos contiene algún espacio en blanco ASCII.
     */
    add(...tokens: string[]): void;
    /**
     * Devuelve true si el token está presente y false en caso contrario.
     */
    contains(token: string): boolean;
    /**
     * Devuelve el token con índice del índice.
     */
    item(index: number): string | null;
    /**
     * Elimina los argumentos pasados, si están presentes.
     *
     * Lanza una excepción "SyntaxError" de DOMException si uno de los argumentos es la cadena vacía.
     *
     * Lanza una excepción "InvalidCharacterError" de DOMException si uno de los argumentos contiene algún espacio en blanco ASCII.
     */
    remove(...tokens: string[]): void;
    /**
     * Reemplaza token con newToken.
     *
     * Devuelve true si el token se reemplazó con newToken y false en caso contrario.
     *
     * Lanza una excepción "SyntaxError" de DOMException si uno de los argumentos es la cadena vacía.
     *
     * Lanza una excepción "InvalidCharacterError" de DOMException si uno de los argumentos contiene algún espacio en blanco ASCII.
     */
    replace(token: string, newToken: string): boolean;
    /**
     * Devuelve true si el token está en los tokens admitidos del atributo asociado. Devuelve false en caso contrario.
     *
     * Lanza un TypeError si el atributo asociado no tiene definidos tokens admitidos.
     */
    supports(token: string): boolean;
    /**
     * Si no se da fuerza, "alterna" - "toggles" - el token, eliminándolo si está presente y agregándolo si no está presente. Si force es true, agrega token (igual que add()). Si force es false, elimina el token (igual que remove()).
     *
     * Devuelve true si el token está ahora presente y false en caso contrario.
     *
     * Lanza una excepción "SyntaxError" de DOMException si el token está vacío.
     *
     * Lanza una "InvalidCharacterError" de DOMException si el token contiene espacios.
     */
    toggle(token: string, force?: boolean): boolean;
    forEach(callbackfn: (value: string, key: number, parent: DOMTokenList) => void, thisArg?: any): void;
    [index: number]: string;
}

declare var DOMTokenList: {
    readonly prototype: DOMTokenList;
    new(): DOMTokenList;
};

/** Se utiliza para contener los datos que se arrastran durante una operación de arrastrar y soltar. Puede contener uno o más elementos de datos, cada uno de uno o más tipos de datos. Para obtener más información acerca de arrastrar y soltar, consulta la API de arrastrar y soltar de HTML. */
interface DataTransfer {
    /**
     * Devuelve el tipo de operación que está seleccionada actualmente. Si el tipo de operación no es uno de los permitidos por el atributo effectAllowed, la operación fallará.
     *
     * Se puede configurar para cambiar la operación seleccionada.
     *
     * Los valores posibles son "none", "copy", "link" y "move".
     */
    dropEffect: "none" | "copy" | "link" | "move";
    /**
     * Devuelve los tipos de operaciones que se van a permitir.
     *
     * Se puede configurar (durante el evento dragstart) para cambiar las operaciones permitidas.
     *
     * Los valores posibles son "none", "copy", "copyLink", "copyMove", "link", "linkMove", "move", "all" y "uninitialized",
     */
    effectAllowed: "none" | "copy" | "copyLink" | "copyMove" | "link" | "linkMove" | "move" | "all" | "uninitialized";
    /**
     * Devuelve una lista de archivos de los archivos que se están arrastrando, si los hay.
     */
    readonly files: FileList;
    /**
     * Devuelve un objeto DataTransferItemList, con los datos de arrastre.
     */
    readonly items: DataTransferItemList;
    /**
     * Devuelve un arreglo congelado que enumera los formatos que se establecieron en el evento dragstart. Además, si se arrastra algún archivo, uno de los tipos será la cadena "Files".
     */
    readonly types: ReadonlyArray<string>;
    /**
     * Elimina los datos de los formatos especificados. Elimina todos los datos si se omite el argumento.
     */
    clearData(format?: string): void;
    /**
     * Devuelve los datos especificados. Si no hay tales datos, devuelve la cadena vacía.
     */
    getData(format: string): string;
    /**
     * Agrega los datos especificados.
     */
    setData(format: string, data: string): void;
    /**
     * Utiliza el elemento dado para actualizar la retroalimentación de arrastre, reemplazando cualquier retroalimentación especificada previamente.
     */
    setDragImage(image: Element, x: number, y: number): void;
}

declare var DataTransfer: {
    readonly prototype: DataTransfer;
    new(): DataTransfer;
};

/** Un elemento de datos de arrastre. Durante una operación de arrastre, cada evento de arrastre tiene una propiedad dataTransfer que contiene una lista de elementos de datos de arrastre. Cada elemento de la lista es un objeto DataTransferItem. */
interface DataTransferItem {
    /**
     * Devuelve el tipo de elemento de datos de arrastre, uno de los siguientes: "string", "file".
     */
    readonly kind: string;
    /**
     * Devuelve la cadena de tipo de elemento de datos de arrastre.
     */
    readonly type: string;
    /**
     * Devuelve un objeto File, si el tipo de elemento de datos de arrastre es File.
     */
    getAsFile(): File | null;
    /**
     * Invoca la devolución de llamada con los datos de cadena como argumento, si el tipo de elemento de datos de arrastre es text.
     */
    getAsString(callback: FunctionStringCallback | null): void;
    webkitGetAsEntry(): FileSystemEntry | null;
}

declare var DataTransferItem: {
    readonly prototype: DataTransferItem;
    new(): DataTransferItem;
};

/** Una lista de objetos DataTransferItem que representan elementos que se están arrastrando. Durante una operación de arrastre, cada DragEvent tiene una propiedad dataTransfer y esa propiedad es una DataTransferItemList. */
interface DataTransferItemList {
    /**
     * Devuelve el número de elementos en el almacén de datos de arrastre.
     */
    readonly length: number;
    /**
     * Agrega una nueva entrada para los datos proporcionados al almacén de datos de arrastre. Si los datos son texto sin formato, también se debe proporcionar una cadena de tipo.
     */
    add(data: string, type: string): DataTransferItem | null;
    add(data: File): DataTransferItem | null;
    /**
     * Elimina todas las entradas en el almacén de datos de arrastre.
     */
    clear(): void;
    /**
     * Elimina la entrada indexth en el almacén de datos de arrastre.
     */
    remove(index: number): void;
    [index: number]: DataTransferItem;
}

declare var DataTransferItemList: {
    readonly prototype: DataTransferItemList;
    new(): DataTransferItemList;
};

/** Una línea de retraso; un módulo de procesamiento de audio AudioNode que provoca un retraso entre la llegada de un dato de entrada y su propagación a la salida. */
interface DelayNode extends AudioNode {
    readonly delayTime: AudioParam;
}

declare var DelayNode: {
    readonly prototype: DelayNode;
    new(context: BaseAudioContext, options?: DelayOptions): DelayNode;
};

/** DeviceMotionEvent proporciona a los desarrolladores web información sobre la velocidad de los cambios de posición y orientación del dispositivo. */
interface DeviceMotionEvent extends Event {
    readonly acceleration: DeviceMotionEventAcceleration | null;
    readonly accelerationIncludingGravity: DeviceMotionEventAcceleration | null;
    readonly interval: number;
    readonly rotationRate: DeviceMotionEventRotationRate | null;
}

declare var DeviceMotionEvent: {
    readonly prototype: DeviceMotionEvent;
    new(type: string, eventInitDict?: DeviceMotionEventInit): DeviceMotionEvent;
};

interface DeviceMotionEventAcceleration {
    readonly x: number | null;
    readonly y: number | null;
    readonly z: number | null;
}

interface DeviceMotionEventRotationRate {
    readonly alpha: number | null;
    readonly beta: number | null;
    readonly gamma: number | null;
}

/** DeviceOrientationEvent proporciona a los desarrolladores web información de la orientación física del dispositivo que ejecuta la página web. */
interface DeviceOrientationEvent extends Event {
    readonly absolute: boolean;
    readonly alpha: number | null;
    readonly beta: number | null;
    readonly gamma: number | null;
}

declare var DeviceOrientationEvent: {
    readonly prototype: DeviceOrientationEvent;
    new(type: string, eventInitDict?: DeviceOrientationEventInit): DeviceOrientationEvent;
};

interface DocumentEventMap extends DocumentAndElementEventHandlersEventMap, GlobalEventHandlersEventMap {
    "fullscreenchange": Event;
    "fullscreenerror": Event;
    "pointerlockchange": Event;
    "pointerlockerror": Event;
    "readystatechange": Event;
    "visibilitychange": Event;
}

/** Cualquier página web cargada en el navegador y sirve como punto de entrada al contenido de la página web, que es el árbol DOM. */
interface Document extends Node, DocumentAndElementEventHandlers, DocumentOrShadowRoot, FontFaceSource, GlobalEventHandlers, NonElementParentNode, ParentNode, XPathEvaluatorBase {
    /**
     * Establece u obtiene la URL del documento actual.
     */
    readonly URL: string;
    /**
     * Establece u obtiene el color de todos los enlaces activos en el documento.
     */
    /** @deprecated */
    alinkColor: string;
    /**
     * Devuelve una referencia a la colección de elementos que contiene el objeto.
     */
    /** @deprecated */
    readonly all: HTMLAllCollection;
    /**
     * Recupera una colección de todos los objetos que tienen una propiedad de name y/o id. Los objetos de esta colección están en orden de origen HTML.
     */
    /** @deprecated */
    readonly anchors: HTMLCollectionOf<HTMLAnchorElement>;
    /**
     * Recupera una colección de todos los objetos applet en el documento.
     */
    /** @deprecated */
    readonly applets: HTMLCollection;
    /**
     * Obsoleto. Establece o recupera un valor que indica el color de fondo detrás del objeto.
     */
    /** @deprecated */
    bgColor: string;
    /**
     * Especifica el principio y final del cuerpo del documento.
     */
    body: HTMLElement;
    /**
     * Devuelve la codificación del documento.
     */
    readonly characterSet: string;
    /**
     * Obtiene o establece el juego de caracteres usado para codificar el objeto.
     */
    readonly charset: string;
    /**
     * Obtiene un valor que indica si el modo compatible con los estándares está activado para el objeto.
     */
    readonly compatMode: string;
    /**
     * Devuelve el tipo de contenido del documento.
     */
    readonly contentType: string;
    /**
     * Devuelve las cookies HTTP que se aplican al Documento. Si no hay cookies o las cookies no se pueden aplicar a este recurso, se devolverá la cadena vacía.
     *
     * Se puede configurar para agregar una nueva cookie al conjunto de cookies HTTP del elemento.
     *
     * Si el contenido está en un espacio aislado en un origen único (por ejemplo, en un iframe con el atributo de espacio aislado), se generará una "SecurityError"  de DOMException al obtener y configurar.
     */
    cookie: string;
    /**
     * Devuelve el elemento script, o el elemento de script SVG, que se está ejecutando actualmente, siempre que el elemento represente un script clásico. En el caso de la ejecución de un script reentrante, devuelve el que comenzó a ejecutarse recientemente entre los que aún no han terminado de ejecutarse.
     *
     * Devuelve null si el documento no está ejecutando actualmente un script o un elemento script SVG (por ejemplo, porque el script en ejecución es un controlador de eventos o un timeout), o si el script o el elemento script SVG que se está ejecutando actualmente representa un script de módulo.
     */
    readonly currentScript: HTMLOrSVGScriptElement | null;
    /**
     * Devuelve el objeto Window del documento activo.
     */
    readonly defaultView: (WindowProxy & typeof globalThis) | null;
    /**
     * Establece u obtiene un valor que indica si el documento se puede editar.
     */
    designMode: string;
    /**
     * Establece o recupera un valor que indica el orden de lectura del objeto.
     */
    dir: string;
    /**
     * Obtiene un objeto que representa la declaración de tipo de documento asociada con el documento actual.
     */
    readonly doctype: DocumentType | null;
    /**
     * Obtiene una referencia al nodo raíz del documento.
     */
    readonly documentElement: HTMLElement;
    /**
     * Devuelve la URL del documento.
     */
    readonly documentURI: string;
    /**
     * Establece u obtiene el dominio de seguridad del documento.
     */
    domain: string;
    /**
     * Recupera una colección de todos los objetos incrustados en el documento.
     */
    readonly embeds: HTMLCollectionOf<HTMLEmbedElement>;
    /**
     * Establece u obtiene el color de primer plano (el texto) del documento.
     */
    /** @deprecated */
    fgColor: string;
    /**
     * Recupera una colección, en orden de la fuente, de todos los objetos de formulario del documento.
     */
    readonly forms: HTMLCollectionOf<HTMLFormElement>;
    /** @deprecated */
    readonly fullscreen: boolean;
    /**
     * Devuelve true si el documento tiene la capacidad de mostrar elementos a pantalla completa y la pantalla completa es compatible, o false en caso contrario.
     */
    readonly fullscreenEnabled: boolean;
    /**
     * Devuelve el elemento head.
     */
    readonly head: HTMLHeadElement;
    readonly hidden: boolean;
    /**
     * Recupera una colección, en orden del origen, de objetos img en el documento.
     */
    readonly images: HTMLCollectionOf<HTMLImageElement>;
    /**
     * Obtiene el objeto de implementación del documento actual.
     */
    readonly implementation: DOMImplementation;
    /**
     * Devuelve la codificación de caracteres utilizada para crear la página web que se carga en el objeto document.
     */
    readonly inputEncoding: string;
    /**
     * Gets the date that the page was last modified, if the page supplies one.
     */
    readonly lastModified: string;
    /**
     * Establece u obtiene el color de los vínculos del documento.
     */
    /** @deprecated */
    linkColor: string;
    /**
     * Recupera una colección de todos los objetos que especifican la propiedad href y todos los objetos de área en el documento.
     */
    readonly links: HTMLCollectionOf<HTMLAnchorElement | HTMLAreaElement>;
    /**
     * Contiene información sobre la URL actual.
     */
    get location(): Location;
    set location(href: string | Location);
    onfullscreenchange: ((this: Document, ev: Event) => any) | null;
    onfullscreenerror: ((this: Document, ev: Event) => any) | null;
    onpointerlockchange: ((this: Document, ev: Event) => any) | null;
    onpointerlockerror: ((this: Document, ev: Event) => any) | null;
    /**
     * Se dispara cuando el estado del objeto ha cambiado.
     * @param ev El evento
     */
    onreadystatechange: ((this: Document, ev: Event) => any) | null;
    onvisibilitychange: ((this: Document, ev: Event) => any) | null;
    readonly ownerDocument: null;
    readonly pictureInPictureEnabled: boolean;
    /**
     * Return an HTMLCollection of the embed elements in the Document.
     */
    readonly plugins: HTMLCollectionOf<HTMLEmbedElement>;
    /**
     * Recupera un valor que indica el estado actual del objeto.
     */
    readonly readyState: DocumentReadyState;
    /**
     * Obtiene la URL de la ubicación que refirió al usuario a la página actual.
     */
    readonly referrer: string;
    /**
     * Recupera una colección de todos los objetos script del documento.
     */
    readonly scripts: HTMLCollectionOf<HTMLScriptElement>;
    readonly scrollingElement: Element | null;
    readonly timeline: DocumentTimeline;
    /**
     * Contiene el título del documento.
     */
    title: string;
    readonly visibilityState: VisibilityState;
    /**
     * Establece u obtiene el color de los enlaces que ha visitado el usuario.
     */
    /** @deprecated */
    vlinkColor: string;
    /**
     * Mueve el nodo de otro documento y lo devuelve.
     *
     * Si el nodo es un documento, lanza una excepción DOMException "NotSupportedError" o, si el nodo es una raíz oculta, lanza una excepción DOMException "HierarchyRequestError".
     */
    adoptNode<T extends Node>(node: T): T;
    /** @deprecated */
    captureEvents(): void;
    /** @deprecated */
    clear(): void;
    /**
     * Cierra un flujo de salida y fuerza la visualización de los datos enviados.
     */
    close(): void;
    /**
     * Crea un atributo de objeto con un nombre especificado.
     * @param name Cadena que establece el nombre del objeto de atributo.
     */
    createAttribute(localName: string): Attr;
    createAttributeNS(namespace: string | null, qualifiedName: string): Attr;
    /**
     * Devuelve un nodo CDATASection cuyos datos son datos.
     */
    createCDATASection(data: string): CDATASection;
    /**
     * Crea un objeto de comentario con los datos especificados.
     * @param data Establece los datos del objeto comentario.
     */
    createComment(data: string): Comment;
    /**
     * Crea un nuevo documento.
     */
    createDocumentFragment(): DocumentFragment;
    /**
     * Crea una instancia del elemento para la etiqueta especificada.
     * @param tagName El nombre de un elemento.
     */
    createElement<K extends keyof HTMLElementTagNameMap>(tagName: K, options?: ElementCreationOptions): HTMLElementTagNameMap[K];
    /** @deprecated */
    createElement<K extends keyof HTMLElementDeprecatedTagNameMap>(tagName: K, options?: ElementCreationOptions): HTMLElementDeprecatedTagNameMap[K];
    createElement(tagName: string, options?: ElementCreationOptions): HTMLElement;
    /**
     * Devuelve un elemento con namespace = namespace. Su prefijo de espacio de nombres será todo antes de ":" (U+003E) en nombre calificado o null. Su nombre local será todo después de ":" (U+003E) en nombre calificado o nombre calificado.
     *
     * Si localName no coincide con la producción de Name, se generará una "InvalidCharacterError" de DOMException.
     *
     * Si una de las siguientes condiciones es true, se lanzará un "NamespaceError" de  DOMException:
     *
     * localName no coincide con la producción de QName.
     * El prefijo del espacio de nombres no es null y el espacio de nombres es la cadena vacía.
     * El prefijo del espacio de nombres es "xml" y el espacio de nombres no es el espacio de nombres XML.
     * El nombre calificado o el prefijo del espacio de nombres es "xmlns" y el espacio de nombres no es el espacio de nombres XMLNS.
     * el espacio de nombres es el espacio de nombres XMLNS y ni el nombre calificado ni el prefijo del espacio de nombres son "xmlns".
     *
     * Cuando se suministran, las opciones se pueden utilizar para crear un elemento integrado personalizado.
     */
    createElementNS(namespaceURI: "http://www.w3.org/1999/xhtml", qualifiedName: string): HTMLElement;
    createElementNS<K extends keyof SVGElementTagNameMap>(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: K): SVGElementTagNameMap[K];
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: string): SVGElement;
    createElementNS(namespaceURI: string | null, qualifiedName: string, options?: ElementCreationOptions): Element;
    createElementNS(namespace: string | null, qualifiedName: string, options?: string | ElementCreationOptions): Element;
    createEvent(eventInterface: "AnimationEvent"): AnimationEvent;
    createEvent(eventInterface: "AnimationPlaybackEvent"): AnimationPlaybackEvent;
    createEvent(eventInterface: "AudioProcessingEvent"): AudioProcessingEvent;
    createEvent(eventInterface: "BeforeUnloadEvent"): BeforeUnloadEvent;
    createEvent(eventInterface: "BlobEvent"): BlobEvent;
    createEvent(eventInterface: "ClipboardEvent"): ClipboardEvent;
    createEvent(eventInterface: "CloseEvent"): CloseEvent;
    createEvent(eventInterface: "CompositionEvent"): CompositionEvent;
    createEvent(eventInterface: "CustomEvent"): CustomEvent;
    createEvent(eventInterface: "DeviceMotionEvent"): DeviceMotionEvent;
    createEvent(eventInterface: "DeviceOrientationEvent"): DeviceOrientationEvent;
    createEvent(eventInterface: "DragEvent"): DragEvent;
    createEvent(eventInterface: "ErrorEvent"): ErrorEvent;
    createEvent(eventInterface: "FocusEvent"): FocusEvent;
    createEvent(eventInterface: "FontFaceSetLoadEvent"): FontFaceSetLoadEvent;
    createEvent(eventInterface: "FormDataEvent"): FormDataEvent;
    createEvent(eventInterface: "GamepadEvent"): GamepadEvent;
    createEvent(eventInterface: "HashChangeEvent"): HashChangeEvent;
    createEvent(eventInterface: "IDBVersionChangeEvent"): IDBVersionChangeEvent;
    createEvent(eventInterface: "InputEvent"): InputEvent;
    createEvent(eventInterface: "KeyboardEvent"): KeyboardEvent;
    createEvent(eventInterface: "MediaEncryptedEvent"): MediaEncryptedEvent;
    createEvent(eventInterface: "MediaKeyMessageEvent"): MediaKeyMessageEvent;
    createEvent(eventInterface: "MediaQueryListEvent"): MediaQueryListEvent;
    createEvent(eventInterface: "MediaRecorderErrorEvent"): MediaRecorderErrorEvent;
    createEvent(eventInterface: "MediaStreamTrackEvent"): MediaStreamTrackEvent;
    createEvent(eventInterface: "MessageEvent"): MessageEvent;
    createEvent(eventInterface: "MouseEvent"): MouseEvent;
    createEvent(eventInterface: "MouseEvents"): MouseEvent;
    createEvent(eventInterface: "MutationEvent"): MutationEvent;
    createEvent(eventInterface: "MutationEvents"): MutationEvent;
    createEvent(eventInterface: "OfflineAudioCompletionEvent"): OfflineAudioCompletionEvent;
    createEvent(eventInterface: "PageTransitionEvent"): PageTransitionEvent;
    createEvent(eventInterface: "PaymentMethodChangeEvent"): PaymentMethodChangeEvent;
    createEvent(eventInterface: "PaymentRequestUpdateEvent"): PaymentRequestUpdateEvent;
    createEvent(eventInterface: "PointerEvent"): PointerEvent;
    createEvent(eventInterface: "PopStateEvent"): PopStateEvent;
    createEvent(eventInterface: "ProgressEvent"): ProgressEvent;
    createEvent(eventInterface: "PromiseRejectionEvent"): PromiseRejectionEvent;
    createEvent(eventInterface: "RTCDTMFToneChangeEvent"): RTCDTMFToneChangeEvent;
    createEvent(eventInterface: "RTCDataChannelEvent"): RTCDataChannelEvent;
    createEvent(eventInterface: "RTCPeerConnectionIceErrorEvent"): RTCPeerConnectionIceErrorEvent;
    createEvent(eventInterface: "RTCPeerConnectionIceEvent"): RTCPeerConnectionIceEvent;
    createEvent(eventInterface: "RTCTrackEvent"): RTCTrackEvent;
    createEvent(eventInterface: "SecurityPolicyViolationEvent"): SecurityPolicyViolationEvent;
    createEvent(eventInterface: "SpeechRecognitionErrorEvent"): SpeechRecognitionErrorEvent;
    createEvent(eventInterface: "SpeechSynthesisErrorEvent"): SpeechSynthesisErrorEvent;
    createEvent(eventInterface: "SpeechSynthesisEvent"): SpeechSynthesisEvent;
    createEvent(eventInterface: "StorageEvent"): StorageEvent;
    createEvent(eventInterface: "SubmitEvent"): SubmitEvent;
    createEvent(eventInterface: "TouchEvent"): TouchEvent;
    createEvent(eventInterface: "TrackEvent"): TrackEvent;
    createEvent(eventInterface: "TransitionEvent"): TransitionEvent;
    createEvent(eventInterface: "UIEvent"): UIEvent;
    createEvent(eventInterface: "UIEvents"): UIEvent;
    createEvent(eventInterface: "WebGLContextEvent"): WebGLContextEvent;
    createEvent(eventInterface: "WheelEvent"): WheelEvent;
    createEvent(eventInterface: string): Event;
    /**
     * Crea un objeto NodeIterator que puedes usar para recorrer listas filtradas de nodos o elementos en un documento.
     * @param root El elemento raíz o nodo por el que empezar a atravesar.
     * @param whatToShow El tipo de nodos o elementos que aparecerán en la lista de nodos
     * @param filter Una función NodeFilter personalizada para usar. Para obtener más información, consulta el filtro. Utiliza null para ningún filtro.
     */
    createNodeIterator(root: Node, whatToShow?: number, filter?: NodeFilter | null): NodeIterator;
    /**
     * Devuelve un nodo ProcessingInstruction cuyo destino es destino y los datos son data. Si el destino no coincide con la producción de Name, se lanzará una DOMException "InvalidCharacterError". Si data contienen "?>", se lanzará una DOMException "InvalidCharacterError".
     */
    createProcessingInstruction(target: string, data: string): ProcessingInstruction;
    /**
     *  Devuelve un objeto de rango vacío que tiene sus dos puntos de límite colocados al principio del documento.
     */
    createRange(): Range;
    /**
     * Crea una cadena de texto a partir del valor especificado.
     * @param data String que especifica la propiedad nodeValue del nodo de texto.
     */
    createTextNode(data: string): Text;
    /**
     * Crea un objeto TreeWalker que puedes usar para recorrer listas filtradas de nodos o elementos en un documento.
     * @param root El elemento raíz o nodo por el que empezar a atravesar.
     * @param whatToShow El tipo de nodos o elementos que aparecerán en la lista de nodos. Para obtener más información, consulta whatToShow.
     * @param filter Una función NodeFilter personalizada para usar.
     */
    createTreeWalker(root: Node, whatToShow?: number, filter?: NodeFilter | null): TreeWalker;
    /**
     * Devuelve el elemento para la coordenada x especificada y la coordenada y especificada.
     * @param x El desplazamiento x
     * @param y El desplazamiento y
     */
    elementFromPoint(x: number, y: number): Element | null;
    elementsFromPoint(x: number, y: number): Element[];
    /**
     * Ejecuta un comando en el documento actual, la selección actual o el rango dado.
     * @param commandId Cadena que especifica el comando a ejecutar. Este comando puede ser cualquiera de los identificadores de comando que se pueden ejecutar en el script.
     * @param showUI Muestra la interfaz de usuario, el valor predeterminado es false.
     * @param value Valor a asignar.
     */
    /** @deprecated */
    execCommand(commandId: string, showUI?: boolean, value?: string): boolean;
    /**
     * Evita que el elemento de fullscreen del documento se muestre en pantalla completa y resuelve la promesa cuando finaliza.
     */
    exitFullscreen(): Promise<void>;
    exitPictureInPicture(): Promise<void>;
    exitPointerLock(): void;
    /**
     * Devuelve una referencia al primer objeto con el valor especificado del atributo ID.
     * @param elementId String que especifica el valor de ID.
     */
    getElementById(elementId: string): HTMLElement | null;
    /**
     * Devuelve una HTMLCollection de los elementos del objeto en el que se invocó el método (un documento o un elemento) que tienen todas las clases proporcionadas por classNames. El argumento classNames se interpreta como una lista de clases separadas por espacios.
     */
    getElementsByClassName(classNames: string): HTMLCollectionOf<Element>;
    /**
     * Obtiene una colección de objetos basada en el valor del atributo NAME o ID.
     * @param elementName Obtiene una colección de objetos basada en el valor del atributo NAME o ID.
     */
    getElementsByName(elementName: string): NodeListOf<HTMLElement>;
    /**
     * Recupera una colección de objetos basada en el nombre del elemento especificado.
     * @param name Especifica el nombre de un elemento.
     */
    getElementsByTagName<K extends keyof HTMLElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<HTMLElementTagNameMap[K]>;
    getElementsByTagName<K extends keyof SVGElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<SVGElementTagNameMap[K]>;
    getElementsByTagName(qualifiedName: string): HTMLCollectionOf<Element>;
    /**
     * Si el espacio de nombres y el nombre local son "*", devuelve una colección HTMLCollection de todos los elementos descendientes.
     *
     * Si solo el espacio de nombres es "*", devuelve una HTMLCollection de todos los elementos descendientes cuyo nombre local es localName.
     *
     * Si localName solo es "*", devuelve una HTMLCollection de todos los elementos descendientes cuyo espacio de nombres es namespace.
     *
     * De lo contrario, devuelve una HTMLCollection de todos los elementos descendientes cuyo espacio de nombres es espacio de nombres y el nombre local es localName.
     */
    getElementsByTagNameNS(namespaceURI: "http://www.w3.org/1999/xhtml", localName: string): HTMLCollectionOf<HTMLElement>;
    getElementsByTagNameNS(namespaceURI: "http://www.w3.org/2000/svg", localName: string): HTMLCollectionOf<SVGElement>;
    getElementsByTagNameNS(namespace: string | null, localName: string): HTMLCollectionOf<Element>;
    /**
     * Devuelve un objeto que representa la selección actual del documento que se carga en el objeto que muestra una página web.
     */
    getSelection(): Selection | null;
    /**
     * Obtiene un valor que indica si el objeto tiene el foco actualmente.
     */
    hasFocus(): boolean;
    hasStorageAccess(): Promise<boolean>;
    /**
     * Devuelve una copia de node. Si deep es true, la copia también incluye los descendientes del nodo.
     *
     * Si el nodo es un documento o una raíz oculta, genera una excepción DOMException "NotSupportedError".
     */
    importNode<T extends Node>(node: T, deep?: boolean): T;
    /**
     * Abre una nueva ventana y carga un documento especificado por una URL dada. Además, abre una nueva ventana que usa el parámetro url y el parámetro name para recopilar la salida del método write y el método writeln.
     * @param url Especifica un tipo MIME para el documento.
     * @param name Especifica el nombre de la ventana. Este nombre se usa como valor para el atributo TARGET en un formulario o un elemento ancla.
     * @param features Contiene una lista de elementos separados por comas. Cada elemento consta de una opción y un valor, separados por un signo igual (por ejemplo, "fullscreen=yes, toolbar=yes"). Se admiten los siguientes valores.
     * @param replace Especifica si la entrada existente para el documento se reemplaza en la lista de historial.
     */
    open(unused1?: string, unused2?: string): Document;
    open(url: string | URL, name: string, features: string): WindowProxy | null;
    /**
     * Devuelve un valor booleano que indica si un comando específico se puede ejecutar correctamente mediante execCommand, dado el estado actual del documento.
     * @param commandId Especifica un identificador de comando.
     */
    /** @deprecated */
    queryCommandEnabled(commandId: string): boolean;
    /**
     * Devuelve un valor booleano que indica si el comando especificado está en estado indeterminado.
     * @param commandId Cadena que especifica un identificador de comando.
     */
    queryCommandIndeterm(commandId: string): boolean;
    /**
     * Devuelve un valor booleano que indica el estado actual del comando.
     * @param commandId Cadena que especifica un identificador de comando.
     */
    /** @deprecated */
    queryCommandState(commandId: string): boolean;
    /**
     * Devuelve un valor booleano que indica si el comando actual es compatible con el rango actual.
     * @param commandId Especifica un identificador de comando.
     */
    /** @deprecated */
    queryCommandSupported(commandId: string): boolean;
    /**
     * Devuelve el valor actual del documento, rango o selección actual para el comando dado.
     * @param commandId Cadena que especifica un identificador de comando.
     */
    queryCommandValue(commandId: string): string;
    /** @deprecated */
    releaseEvents(): void;
    requestStorageAccess(): Promise<void>;
    /**
     * Escribe una o más expresiones HTML en un documento en la ventana especificada.
     * @param content Especifica el texto y las etiquetas HTML para escribir.
     */
    write(...text: string[]): void;
    /**
     * Escribe una o más expresiones HTML, seguidas de un retorno de carro, en un documento en la ventana especificada.
     * @param content El texto y las etiquetas HTML para escribir.
     */
    writeln(...text: string[]): void;
    addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var Document: {
    readonly prototype: Document;
    new(): Document;
};

interface DocumentAndElementEventHandlersEventMap {
    "copy": ClipboardEvent;
    "cut": ClipboardEvent;
    "paste": ClipboardEvent;
}

interface DocumentAndElementEventHandlers {
    oncopy: ((this: DocumentAndElementEventHandlers, ev: ClipboardEvent) => any) | null;
    oncut: ((this: DocumentAndElementEventHandlers, ev: ClipboardEvent) => any) | null;
    onpaste: ((this: DocumentAndElementEventHandlers, ev: ClipboardEvent) => any) | null;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: DocumentAndElementEventHandlers, ev: DocumentAndElementEventHandlersEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: DocumentAndElementEventHandlers, ev: DocumentAndElementEventHandlersEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

/** Un objeto de documento mínimo que no tiene padre. Se utiliza como una versión ligera de Document que almacena un segmento de una estructura de documento compuesta por nodos como un documento estándar. La diferencia clave es que, debido a que el fragmento de documento no forma parte de la estructura de árbol del documento activo, los cambios realizados en el fragmento no afectan al documento, provocan reflujo ni tienen ningún impacto en el rendimiento que pueda ocurrir cuando se realizan los cambios. */
interface DocumentFragment extends Node, NonElementParentNode, ParentNode {
}

declare var DocumentFragment: {
    readonly prototype: DocumentFragment;
    new(): DocumentFragment;
};

interface DocumentOrShadowRoot {
    /**
     * Devuelve el elemento más profundo del documento a través del cual o al que se enrutan los eventos clave. Este es, en términos generales, el elemento enfocado en el documento.
     *
     * Para los fines de esta API, cuando se enfoca un contexto de navegación secundario, su contenedor se enfoca en el contexto de navegación principal. Por ejemplo, si el usuario mueve el foco a un control de texto en un iframe, el iframe es el elemento devuelto por la API activeElement en el nodo del documento de iframe.
     *
     * De manera similar, cuando el elemento enfocado está en un árbol de nodos diferente al de documentOrShadowRoot, el elemento devuelto será el host que está ubicado en el mismo árbol de nodos que documentOrShadowRoot si documentOrShadowRoot es un ancestro inclusivo que incluye sombras del elemento enfocado, y null si no lo es.
     */
    readonly activeElement: Element | null;
    /**
     * Devuelve el elemento de pantalla completa del documento.
     */
    readonly fullscreenElement: Element | null;
    readonly pictureInPictureElement: Element | null;
    readonly pointerLockElement: Element | null;
    /**
     * Recupera una colección de objetos styleSheet que representan las hojas de estilo que corresponden a cada instancia de un enlace u objeto de estilo en el documento.
     */
    readonly styleSheets: StyleSheetList;
    getAnimations(): Animation[];
}

interface DocumentTimeline extends AnimationTimeline {
}

declare var DocumentTimeline: {
    readonly prototype: DocumentTimeline;
    new(options?: DocumentTimelineOptions): DocumentTimeline;
};

/** Un nodo que contiene un doctype. */
interface DocumentType extends Node, ChildNode {
    readonly name: string;
    readonly ownerDocument: Document;
    readonly publicId: string;
    readonly systemId: string;
}

declare var DocumentType: {
    readonly prototype: DocumentType;
    new(): DocumentType;
};

/** Un evento DOM que representa una interacción de arrastrar y soltar. El usuario inicia un arrastre colocando un dispositivo de puntero (como un mouse) en la superficie táctil y luego arrastrando el puntero a una nueva ubicación (como otro elemento DOM). Las aplicaciones son libres de interpretar una interacción de arrastrar y soltar de una manera específica de la aplicación. */
interface DragEvent extends MouseEvent {
    /**
     * Devuelve el objeto DataTransfer para el evento.
     */
    readonly dataTransfer: DataTransfer | null;
}

declare var DragEvent: {
    readonly prototype: DragEvent;
    new(type: string, eventInitDict?: DragEventInit): DragEvent;
};

/** Hereda las propiedades de su padre, AudioNode. */
interface DynamicsCompressorNode extends AudioNode {
    readonly attack: AudioParam;
    readonly knee: AudioParam;
    readonly ratio: AudioParam;
    readonly reduction: number;
    readonly release: AudioParam;
    readonly threshold: AudioParam;
}

declare var DynamicsCompressorNode: {
    readonly prototype: DynamicsCompressorNode;
    new(context: BaseAudioContext, options?: DynamicsCompressorOptions): DynamicsCompressorNode;
};

interface EXT_blend_minmax {
    readonly MAX_EXT: GLenum;
    readonly MIN_EXT: GLenum;
}

interface EXT_color_buffer_float {
}

interface EXT_color_buffer_half_float {
    readonly FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT: GLenum;
    readonly RGB16F_EXT: GLenum;
    readonly RGBA16F_EXT: GLenum;
    readonly UNSIGNED_NORMALIZED_EXT: GLenum;
}

interface EXT_float_blend {
}

/** La extensión EXT_frag_depth es parte de la API de WebGL y permite establecer un valor de profundidad de un fragmento desde dentro del sombreador de fragmentos. */
interface EXT_frag_depth {
}

interface EXT_sRGB {
    readonly FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT: GLenum;
    readonly SRGB8_ALPHA8_EXT: GLenum;
    readonly SRGB_ALPHA_EXT: GLenum;
    readonly SRGB_EXT: GLenum;
}

interface EXT_shader_texture_lod {
}

interface EXT_texture_compression_rgtc {
    readonly COMPRESSED_RED_GREEN_RGTC2_EXT: GLenum;
    readonly COMPRESSED_RED_RGTC1_EXT: GLenum;
    readonly COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT: GLenum;
    readonly COMPRESSED_SIGNED_RED_RGTC1_EXT: GLenum;
}

/** La extensión EXT_texture_filter_anisotropic es parte de la API de WebGL y expone dos constantes para el filtrado anisotrópico (AF). */
interface EXT_texture_filter_anisotropic {
    readonly MAX_TEXTURE_MAX_ANISOTROPY_EXT: GLenum;
    readonly TEXTURE_MAX_ANISOTROPY_EXT: GLenum;
}

interface ElementEventMap {
    "fullscreenchange": Event;
    "fullscreenerror": Event;
}

/** Element es la clase base más general de la que heredan todos los objetos de Document. Sólo tiene métodos y propiedades comunes a todo tipo de elementos. Clases más específicas heredan de Element. */
interface Element extends Node, ARIAMixin, Animatable, ChildNode, InnerHTML, NonDocumentTypeChildNode, ParentNode, Slottable {
    readonly attributes: NamedNodeMap;
    /**
     * Permite la manipulación del atributo content de la clase element, como un conjunto de tokens separados por espacios en blanco a través de un objeto DOMTokenList.
     */
    readonly classList: DOMTokenList;
    /**
     * Devuelve el valor del atributo content de la clase del elemento. Se puede configurar para cambiarlo.
     */
    className: string;
    readonly clientHeight: number;
    readonly clientLeft: number;
    readonly clientTop: number;
    readonly clientWidth: number;
    /**
     * Devuelve el valor del atributo content del elemento id. Se puede configurar para cambiarlo.
     */
    id: string;
    /**
     * Devuelve el nombre local.
     */
    readonly localName: string;
    /**
     * Devuelve el espacio de nombres.
     */
    readonly namespaceURI: string | null;
    onfullscreenchange: ((this: Element, ev: Event) => any) | null;
    onfullscreenerror: ((this: Element, ev: Event) => any) | null;
    outerHTML: string;
    readonly ownerDocument: Document;
    readonly part: DOMTokenList;
    /**
     * Returns the namespace prefix.
     */
    readonly prefix: string | null;
    readonly scrollHeight: number;
    scrollLeft: number;
    scrollTop: number;
    readonly scrollWidth: number;
    /**
     * Devuelve la raíz oculta del elemento, si la hay, y si el modo de la raíz oculta es "open", y null en caso contrario.
     */
    readonly shadowRoot: ShadowRoot | null;
    /**
     * Devuelve el valor del atributo de contenido de la ranura del elemento. Se puede configurar para cambiarlo.
     */
    slot: string;
    /**
     * Devuelve el nombre HTML completo en mayúsculas.
     */
    readonly tagName: string;
    /**
     * Crea una raíz oculta para el elemento y la devuelve.
     */
    attachShadow(init: ShadowRootInit): ShadowRoot;
    /**
     * Devuelve el primer ancestro inclusivo (que comienza en el elemento y) que coincide con los selectores y es null en caso contrario.
     */
    closest<K extends keyof HTMLElementTagNameMap>(selector: K): HTMLElementTagNameMap[K] | null;
    closest<K extends keyof SVGElementTagNameMap>(selector: K): SVGElementTagNameMap[K] | null;
    closest<E extends Element = Element>(selectors: string): E | null;
    /**
     * Devuelve el primer atributo del elemento cuyo nombre calificado es qualifiedName, y null si no existe tal atributo de otra manera.
     */
    getAttribute(qualifiedName: string): string | null;
    /**
     * Devuelve el atributo del elemento cuyo espacio de nombres es espacio de nombres y el nombre local es localName, y es null si no existe dicho atributo.
     */
    getAttributeNS(namespace: string | null, localName: string): string | null;
    /**
     * Devuelve los nombres calificados de los atributos de todos los elementos. Puede contener duplicados.
     */
    getAttributeNames(): string[];
    getAttributeNode(qualifiedName: string): Attr | null;
    getAttributeNodeNS(namespace: string | null, localName: string): Attr | null;
    getBoundingClientRect(): DOMRect;
    getClientRects(): DOMRectList;
    /**
     * Devuelve una HTMLCollection de los elementos del objeto en el que se invocó el método (un documento o un elemento) que tienen todas las clases proporcionadas por classNames. El argumento classNames se interpreta como una lista de clases separadas por espacios.
     */
    getElementsByClassName(classNames: string): HTMLCollectionOf<Element>;
    getElementsByTagName<K extends keyof HTMLElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<HTMLElementTagNameMap[K]>;
    getElementsByTagName<K extends keyof SVGElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<SVGElementTagNameMap[K]>;
    getElementsByTagName(qualifiedName: string): HTMLCollectionOf<Element>;
    getElementsByTagNameNS(namespaceURI: "http://www.w3.org/1999/xhtml", localName: string): HTMLCollectionOf<HTMLElement>;
    getElementsByTagNameNS(namespaceURI: "http://www.w3.org/2000/svg", localName: string): HTMLCollectionOf<SVGElement>;
    getElementsByTagNameNS(namespace: string | null, localName: string): HTMLCollectionOf<Element>;
    /**
     * Returns true if element has an attribute whose qualified name is qualifiedName, and false otherwise.
     */
    hasAttribute(qualifiedName: string): boolean;
    /**
     * Returns true if element has an attribute whose namespace is namespace and local name is localName.
     */
    hasAttributeNS(namespace: string | null, localName: string): boolean;
    /**
     * Returns true if element has attributes, and false otherwise.
     */
    hasAttributes(): boolean;
    hasPointerCapture(pointerId: number): boolean;
    insertAdjacentElement(where: InsertPosition, element: Element): Element | null;
    insertAdjacentHTML(position: InsertPosition, text: string): void;
    insertAdjacentText(where: InsertPosition, data: string): void;
    /**
     * Devuelve true si los selectores coincidentes con la raíz del elemento da como resultado el elemento, y false en caso contrario.
     */
    matches(selectors: string): boolean;
    releasePointerCapture(pointerId: number): void;
    /**
     * Elimina el primer atributo del elemento cuyo nombre calificado es qualifiedName.
     */
    removeAttribute(qualifiedName: string): void;
    /**
     * Elimina el atributo del elemento cuyo espacio de nombres es namespace y el nombre local es localName.
     */
    removeAttributeNS(namespace: string | null, localName: string): void;
    removeAttributeNode(attr: Attr): Attr;
    /**
     * Muestra el elemento a pantalla completa y resuelve la promesa cuando termina.
     *
     * Cuando se proporciona, el miembro de la interfaz de usuario de navegación de las opciones indica si se prefiere o no mostrar la interfaz de usuario de navegación en pantalla completa. Si se establece en "show", se prefiere la simplicidad de navegación al espacio de la pantalla, y si se establece en "hide", se prefiere más espacio en la pantalla. Los agentes de usuario siempre tienen la libertad de respetar las preferencias del usuario sobre las de la aplicación. El valor predeterminado "auto" indica que no hay preferencia de aplicación.
     */
    requestFullscreen(options?: FullscreenOptions): Promise<void>;
    requestPointerLock(): void;
    scroll(options?: ScrollToOptions): void;
    scroll(x: number, y: number): void;
    scrollBy(options?: ScrollToOptions): void;
    scrollBy(x: number, y: number): void;
    scrollIntoView(arg?: boolean | ScrollIntoViewOptions): void;
    scrollTo(options?: ScrollToOptions): void;
    scrollTo(x: number, y: number): void;
    /**
     * Establece el valor del primer atributo del elemento cuyo nombre calificado es qualifiedName en valor.
     */
    setAttribute(qualifiedName: string, value: string): void;
    /**
     * Establece el valor del atributo del elemento cuyo espacio de nombres es namespace y el nombre local es localName en value.
     */
    setAttributeNS(namespace: string | null, qualifiedName: string, value: string): void;
    setAttributeNode(attr: Attr): Attr | null;
    setAttributeNodeNS(attr: Attr): Attr | null;
    setPointerCapture(pointerId: number): void;
    /**
     * Si no se da force, alterna -"toggles"- el qualifiedName, eliminándolo si está presente y agregándolo si no está presente. Si force es true, agrega el qualifiedName. Si force es false, elimina el qualifiedName.
     *
     * Devuelve true si el qualifiedName ahora está presente y false en caso contrario.
     */
    toggleAttribute(qualifiedName: string, force?: boolean): boolean;
    /** @deprecated */
    webkitMatchesSelector(selectors: string): boolean;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: Element, ev: ElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: Element, ev: ElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var Element: {
    readonly prototype: Element;
    new(): Element;
};

interface ElementCSSInlineStyle {
    readonly style: CSSStyleDeclaration;
}

interface ElementContentEditable {
    contentEditable: string;
    enterKeyHint: string;
    inputMode: string;
    readonly isContentEditable: boolean;
}

/** Eventos que proporcionan información relacionada con errores en scripts o en archivos. */
interface ErrorEvent extends Event {
    readonly colno: number;
    readonly error: any;
    readonly filename: string;
    readonly lineno: number;
    readonly message: string;
}

declare var ErrorEvent: {
    readonly prototype: ErrorEvent;
    new(type: string, eventInitDict?: ErrorEventInit): ErrorEvent;
};

/** Un evento que tiene lugar en el DOM. */
interface Event {
    /**
     * Devuelve true o false dependiendo de cómo se inició el evento. True si el evento pasa por los ancestros de su destino en orden inverso del árbol, y false en caso contrario.
     */
    readonly bubbles: boolean;
    cancelBubble: boolean;
    /**
     * Devuelve true o false dependiendo de cómo se inició el evento. Su valor de retorno no siempre tiene significado, pero true puede indicar que parte de la operación durante la cual se envió el evento se puede cancelar invocando el método preventDefault().
     */
    readonly cancelable: boolean;
    /**
     * Devuelve true o false dependiendo de cómo se inició el evento. True si el evento invoca a los escuchas más allá de un nodo ShadowRoot que es la raíz de su destino, y false en caso contrario.
     */
    readonly composed: boolean;
    /**
     * Devuelve el objeto cuya devolución de llamada del escucha de eventos se está invocando actualmente.
     */
    readonly currentTarget: EventTarget | null;
    /**
     * Devuelve true si preventDefault() se invocó con éxito para indicar la cancelación y false en caso contrario.
     */
    readonly defaultPrevented: boolean;
    /**
     * Devuelve la fase del evento, que es NONE, CAPTURING_PHASE, AT_TARGET y BUBBLING_PHASE.
     */
    readonly eventPhase: number;
    /**
     * Devuelve true si el evento fue enviado por el agente de usuario y false en caso contrario.
     */
    readonly isTrusted: boolean;
    /** @deprecated */
    returnValue: boolean;
    /** @deprecated */
    readonly srcElement: EventTarget | null;
    /**
     * Returns the object to which event is dispatched (its target).
     */
    readonly target: EventTarget | null;
    /**
     * Returns the event's timestamp as the number of milliseconds measured relative to the time origin.
     */
    readonly timeStamp: DOMHighResTimeStamp;
    /**
     * Returns the type of event, e.g. "click", "hashchange", or "submit".
     */
    readonly type: string;
    /**
     * Returns the invocation target objects of event's path (objects on which listeners will be invoked), except for any nodes in shadow trees of which the shadow root's mode is "closed" that are not reachable from event's currentTarget.
     */
    composedPath(): EventTarget[];
    /** @deprecated */
    initEvent(type: string, bubbles?: boolean, cancelable?: boolean): void;
    /**
     * Si se invoca cuando el valor del atributo cancelable es true, y mientras se ejecuta un escucha para el evento con pasivo establecido en false, indica a la operación que provocó el envío del evento que se debe cancelar.
     */
    preventDefault(): void;
    /**
     * La invocación de este método evita que el evento llegue a los escuchas de eventos registrados después de que el actual termine de ejecutarse y, cuando se distribuye en un árbol, también evita que el evento llegue a cualquier otro objeto.
     */
    stopImmediatePropagation(): void;
    /**
     * Cuando se distribuye en un árbol, la invocación de este método evita que el evento llegue a cualquier objeto que no sea el objeto actual.
     */
    stopPropagation(): void;
    readonly AT_TARGET: number;
    readonly BUBBLING_PHASE: number;
    readonly CAPTURING_PHASE: number;
    readonly NONE: number;
}

declare var Event: {
    readonly prototype: Event;
    new(type: string, eventInitDict?: EventInit): Event;
    readonly AT_TARGET: number;
    readonly BUBBLING_PHASE: number;
    readonly CAPTURING_PHASE: number;
    readonly NONE: number;
};

interface EventSourceEventMap {
    "error": Event;
    "message": MessageEvent;
    "open": Event;
}

interface EventSource extends EventTarget {
    onerror: ((this: EventSource, ev: Event) => any) | null;
    onmessage: ((this: EventSource, ev: MessageEvent) => any) | null;
    onopen: ((this: EventSource, ev: Event) => any) | null;
    /**
     * Devuelve el estado de la conexión de este objeto EventSource. Puede tener los valores descritos a continuación.
     */
    readonly readyState: number;
    /**
     * Devuelve la URL que proporciona el flujo de eventos.
     */
    readonly url: string;
    /**
     * Devuelve true si el modo de credenciales para las solicitudes de conexión a la URL que proporciona el flujo de eventos está establecido en "include", y false en caso contrario.
     */
    readonly withCredentials: boolean;
    /**
     * Anula cualquier instancia del algoritmo de recuperación iniciado para este objeto EventSource y establece el atributo readyState en CLOSED.
     */
    close(): void;
    readonly CLOSED: number;
    readonly CONNECTING: number;
    readonly OPEN: number;
    addEventListener<K extends keyof EventSourceEventMap>(type: K, listener: (this: EventSource, ev: EventSourceEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof EventSourceEventMap>(type: K, listener: (this: EventSource, ev: EventSourceEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var EventSource: {
    readonly prototype: EventSource;
    new(url: string | URL, eventSourceInitDict?: EventSourceInit): EventSource;
    readonly CLOSED: number;
    readonly CONNECTING: number;
    readonly OPEN: number;
};

/** EventTarget es una interfaz DOM implementada por objetos que pueden recibir eventos y pueden tener escuchas para ellos. */
interface EventTarget {
    /**
     * Agrega un escucha de eventos para eventos cuyo valor de atributo type es type. El argumento callback establece la devolución de llamada que se invocará cuando se envíe el evento.
     *
     * El argumento options establece opciones específicas del escucha. Por compatibilidad, esto puede ser un valor booleano, en cuyo caso el método se comporta exactamente como si el valor se hubiera especificado como captura de opciones.
     *
     * Cuando se establece en true, la captura de opciones evita que se invoque la devolución de llamada cuando el valor del atributo eventPhase del evento es BUBBLING_PHASE. Cuando es false (o no está presente), la devolución de llamada no se invocará cuando el valor del atributo eventPhase del evento sea CAPTURING_PHASE. De cualquier manera, se invocará la devolución de llamada si el valor del atributo eventPhase del evento es AT_TARGET.
     *
     * Cuando se establece en true, el pasivo de las opciones indica que la devolución de llamada no cancelará el evento al invocar a  preventDefault(). Esto se utiliza para habilitar las optimizaciones de rendimiento descritas en § 2.8 Observación de escuchas de eventos.
     *
     * Cuando se establece en true, las opciones una vez indican que la devolución de llamada solo se invocará una vez, después de lo cual se eliminará el escucha de eventos.
     *
     * Si se pasa un AbortSignal para la señal de opciones, el escucha de eventos se eliminará cuando se cancele la señal.
     *
     * El escucha de eventos se agrega a la lista de escuchas de eventos del destino y no se agrega si tiene el mismo tipo, callback y capture.
     */
    addEventListener(type: string, callback: EventListener | null, options?: AddEventListenerOptions | boolean): void;
    /**
     * Envía un evento de evento sintético al destino y devuelve true si el valor del atributo cancelable de cualquiera de los eventos es false o si no se invocó a su método preventDefault(), y false en caso contrario.
     */
    dispatchEvent(event: Event): boolean;
    /**
     * Elimina el escucha de eventos en la lista de escuchas de eventos del objetivo con el mismo tipo, callback y options.
     */
    removeEventListener(type: string, callback: EventListener | null, options?: EventListenerOptions | boolean): void;
}

declare var EventTarget: {
    readonly prototype: EventTarget;
    new(): EventTarget;
};

/** @deprecated */
interface External {
    /** @deprecated */
    AddSearchProvider(): void;
    /** @deprecated */
    IsSearchProviderInstalled(): void;
}

/** @deprecated */
declare var External: {
    readonly prototype: External;
    new(): External;
};

/** Proporciona información sobre archivos y permite que JavaScript acceda al contenido de una página web. */
interface File extends Blob {
    readonly lastModified: number;
    readonly name: string;
    readonly webkitRelativePath: string;
}

declare var File: {
    readonly prototype: File;
    new(fileBits: BlobPart[], fileName: string, options?: FilePropertyBag): File;
};

/** La propiedad de archivos del elemento HTML <input> devuelve un objeto de este tipo; esto te permite acceder a la lista de archivos seleccionados con el elemento <input type="file">. También se usa para una lista de archivos colocados en el contenido web cuando se usa la API de arrastrar y soltar; consulta el objeto DataTransfer para obtener detalles sobre este uso. */
interface FileList {
    readonly length: number;
    item(index: number): File | null;
    [index: number]: File;
}

declare var FileList: {
    readonly prototype: FileList;
    new(): FileList;
};

interface FileReaderEventMap {
    "abort": ProgressEvent<FileReader>;
    "error": ProgressEvent<FileReader>;
    "load": ProgressEvent<FileReader>;
    "loadend": ProgressEvent<FileReader>;
    "loadstart": ProgressEvent<FileReader>;
    "progress": ProgressEvent<FileReader>;
}

/** Permite que las aplicaciones web lean de forma asincrónica el contenido de los archivos (o búferes de datos sin procesar) almacenados en la computadora del usuario, utilizando objetos File o Blob para especificar el archivo o los datos que se van a leer. */
interface FileReader extends EventTarget {
    readonly error: DOMException | null;
    onabort: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;
    onerror: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;
    onload: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;
    onloadend: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;
    onloadstart: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;
    onprogress: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;
    readonly readyState: number;
    readonly result: string | ArrayBuffer | null;
    abort(): void;
    readAsArrayBuffer(blob: Blob): void;
    readAsBinaryString(blob: Blob): void;
    readAsDataURL(blob: Blob): void;
    readAsText(blob: Blob, encoding?: string): void;
    readonly DONE: number;
    readonly EMPTY: number;
    readonly LOADING: number;
    addEventListener<K extends keyof FileReaderEventMap>(type: K, listener: (this: FileReader, ev: FileReaderEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof FileReaderEventMap>(type: K, listener: (this: FileReader, ev: FileReaderEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var FileReader: {
    readonly prototype: FileReader;
    new(): FileReader;
    readonly DONE: number;
    readonly EMPTY: number;
    readonly LOADING: number;
};

interface FileSystem {
    readonly name: string;
    readonly root: FileSystemDirectoryEntry;
}

declare var FileSystem: {
    readonly prototype: FileSystem;
    new(): FileSystem;
};

interface FileSystemDirectoryEntry extends FileSystemEntry {
    createReader(): FileSystemDirectoryReader;
    getDirectory(path?: string | null, options?: FileSystemFlags, successCallback?: FileSystemEntryCallback, errorCallback?: ErrorCallback): void;
    getFile(path?: string | null, options?: FileSystemFlags, successCallback?: FileSystemEntryCallback, errorCallback?: ErrorCallback): void;
}

declare var FileSystemDirectoryEntry: {
    readonly prototype: FileSystemDirectoryEntry;
    new(): FileSystemDirectoryEntry;
};

/** @deprecated */
interface FileSystemDirectoryReader {
    /** @deprecated */
    readEntries(successCallback: FileSystemEntriesCallback, errorCallback?: ErrorCallback): void;
}

/** @deprecated */
declare var FileSystemDirectoryReader: {
    readonly prototype: FileSystemDirectoryReader;
    new(): FileSystemDirectoryReader;
};

interface FileSystemEntry {
    readonly filesystem: FileSystem;
    readonly fullPath: string;
    readonly isDirectory: boolean;
    readonly isFile: boolean;
    readonly name: string;
    getParent(successCallback?: FileSystemEntryCallback, errorCallback?: ErrorCallback): void;
}

declare var FileSystemEntry: {
    readonly prototype: FileSystemEntry;
    new(): FileSystemEntry;
};

interface FileSystemFileEntry extends FileSystemEntry {
    file(successCallback: FileCallback, errorCallback?: ErrorCallback): void;
}

declare var FileSystemFileEntry: {
    readonly prototype: FileSystemFileEntry;
    new(): FileSystemFileEntry;
};

/** Eventos relacionados con el enfoque como focus, blur, focusin o focusout. */
interface FocusEvent extends UIEvent {
    readonly relatedTarget: EventTarget | null;
}

declare var FocusEvent: {
    readonly prototype: FocusEvent;
    new(type: string, eventInitDict?: FocusEventInit): FocusEvent;
};

interface FontFace {
    ascentOverride: string;
    descentOverride: string;
    display: string;
    family: string;
    featureSettings: string;
    lineGapOverride: string;
    readonly loaded: Promise<FontFace>;
    readonly status: FontFaceLoadStatus;
    stretch: string;
    style: string;
    unicodeRange: string;
    variant: string;
    variationSettings: string;
    weight: string;
    load(): Promise<FontFace>;
}

declare var FontFace: {
    readonly prototype: FontFace;
    new(family: string, source: string | BinaryData, descriptors?: FontFaceDescriptors): FontFace;
};

interface FontFaceSetEventMap {
    "loading": Event;
    "loadingdone": Event;
    "loadingerror": Event;
}

interface FontFaceSet extends EventTarget {
    onloading: ((this: FontFaceSet, ev: Event) => any) | null;
    onloadingdone: ((this: FontFaceSet, ev: Event) => any) | null;
    onloadingerror: ((this: FontFaceSet, ev: Event) => any) | null;
    readonly ready: Promise<FontFaceSet>;
    readonly status: FontFaceSetLoadStatus;
    check(font: string, text?: string): boolean;
    load(font: string, text?: string): Promise<FontFace[]>;
    forEach(callbackfn: (value: FontFace, key: FontFace, parent: FontFaceSet) => void, thisArg?: any): void;
    addEventListener<K extends keyof FontFaceSetEventMap>(type: K, listener: (this: FontFaceSet, ev: FontFaceSetEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof FontFaceSetEventMap>(type: K, listener: (this: FontFaceSet, ev: FontFaceSetEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var FontFaceSet: {
    readonly prototype: FontFaceSet;
    new(initialFaces: FontFace[]): FontFaceSet;
};

interface FontFaceSetLoadEvent extends Event {
    readonly fontfaces: ReadonlyArray<FontFace>;
}

declare var FontFaceSetLoadEvent: {
    readonly prototype: FontFaceSetLoadEvent;
    new(type: string, eventInitDict?: FontFaceSetLoadEventInit): FontFaceSetLoadEvent;
};

interface FontFaceSource {
    readonly fonts: FontFaceSet;
}

/** Proporciona una forma de construir fácilmente un conjunto de pares clave/valor que representan campos de formulario y sus valores, que luego se pueden enviar fácilmente mediante el método XMLHttpRequest.send(). Utiliza el mismo formato que usaría un formulario si el tipo de codificación se estableciera en "multipart/form-data". */
interface FormData {
    append(name: string, value: string | Blob, fileName?: string): void;
    delete(name: string): void;
    get(name: string): FormDataEntryValue | null;
    getAll(name: string): FormDataEntryValue[];
    has(name: string): boolean;
    set(name: string, value: string | Blob, fileName?: string): void;
    forEach(callbackfn: (value: FormDataEntryValue, key: string, parent: FormData) => void, thisArg?: any): void;
}

declare var FormData: {
    readonly prototype: FormData;
    new(form?: HTMLFormElement): FormData;
};

interface FormDataEvent extends Event {
    /**
     * Devuelve un objeto FormData que representa nombres y valores de elementos asociados al formulario destino. Las operaciones en el objeto FormData afectarán los datos del formulario que se enviarán.
     */
    readonly formData: FormData;
}

declare var FormDataEvent: {
    readonly prototype: FormDataEvent;
    new(type: string, eventInitDict: FormDataEventInit): FormDataEvent;
};

/** Un cambio de volumen. Es un módulo de procesamiento de audio de AudioNode que hace que se aplique una ganancia dada a los datos de entrada antes de su propagación a la salida. Un GainNode siempre tiene exactamente una entrada y una salida, ambas con el mismo número de canales. */
interface GainNode extends AudioNode {
    readonly gain: AudioParam;
}

declare var GainNode: {
    readonly prototype: GainNode;
    new(context: BaseAudioContext, options?: GainOptions): GainNode;
};

/** Esta interfaz API Gamepad define un gamepad individual u otro controlador, lo que permite el acceso a información como las pulsaciones de botones, las posiciones de los ejes y el id */
interface Gamepad {
    readonly axes: ReadonlyArray<number>;
    readonly buttons: ReadonlyArray<GamepadButton>;
    readonly connected: boolean;
    readonly hapticActuators: ReadonlyArray<GamepadHapticActuator>;
    readonly id: string;
    readonly index: number;
    readonly mapping: GamepadMappingType;
    readonly timestamp: DOMHighResTimeStamp;
}

declare var Gamepad: {
    readonly prototype: Gamepad;
    new(): Gamepad;
};

/** Un botón individual de un gamepad u otro controlador, que permite acceder al estado actual de diferentes tipos de botones disponibles en el dispositivo de control. */
interface GamepadButton {
    readonly pressed: boolean;
    readonly touched: boolean;
    readonly value: number;
}

declare var GamepadButton: {
    readonly prototype: GamepadButton;
    new(): GamepadButton;
};

/** Esta interfaz API de gamepad contiene referencias a gamepads conectados al sistema, en respuesta a los que activan eventos de gamepad Window.gamepadconnected y Window.gamepaddisconnected. */
interface GamepadEvent extends Event {
    readonly gamepad: Gamepad;
}

declare var GamepadEvent: {
    readonly prototype: GamepadEvent;
    new(type: string, eventInitDict: GamepadEventInit): GamepadEvent;
};

/** Esta interfaz API de Gamepad representa hardware en el controlador diseñado para proporcionar retroalimentación háptica al usuario (si está disponible), más comúnmente hardware de vibración. */
interface GamepadHapticActuator {
    readonly type: GamepadHapticActuatorType;
}

declare var GamepadHapticActuator: {
    readonly prototype: GamepadHapticActuator;
    new(): GamepadHapticActuator;
};

interface GenericTransformStream {
    readonly readable: ReadableStream;
    readonly writable: WritableStream;
}

/** Un objeto capaz de obtener mediante programación la posición del dispositivo. Da acceso al contenido Web a la ubicación del dispositivo. Esto permite que un sitio web o una aplicación ofrezcan resultados personalizados según la ubicación del usuario. */
interface Geolocation {
    clearWatch(watchId: number): void;
    getCurrentPosition(successCallback: PositionCallback, errorCallback?: PositionErrorCallback | null, options?: PositionOptions): void;
    watchPosition(successCallback: PositionCallback, errorCallback?: PositionErrorCallback | null, options?: PositionOptions): number;
}

declare var Geolocation: {
    readonly prototype: Geolocation;
    new(): Geolocation;
};

interface GeolocationCoordinates {
    readonly accuracy: number;
    readonly altitude: number | null;
    readonly altitudeAccuracy: number | null;
    readonly heading: number | null;
    readonly latitude: number;
    readonly longitude: number;
    readonly speed: number | null;
}

declare var GeolocationCoordinates: {
    readonly prototype: GeolocationCoordinates;
    new(): GeolocationCoordinates;
};

interface GeolocationPosition {
    readonly coords: GeolocationCoordinates;
    readonly timestamp: DOMTimeStamp;
}

declare var GeolocationPosition: {
    readonly prototype: GeolocationPosition;
    new(): GeolocationPosition;
};

interface GeolocationPositionError {
    readonly code: number;
    readonly message: string;
    readonly PERMISSION_DENIED: number;
    readonly POSITION_UNAVAILABLE: number;
    readonly TIMEOUT: number;
}

declare var GeolocationPositionError: {
    readonly prototype: GeolocationPositionError;
    new(): GeolocationPositionError;
    readonly PERMISSION_DENIED: number;
    readonly POSITION_UNAVAILABLE: number;
    readonly TIMEOUT: number;
};

interface GlobalEventHandlersEventMap {
    "abort": UIEvent;
    "animationcancel": AnimationEvent;
    "animationend": AnimationEvent;
    "animationiteration": AnimationEvent;
    "animationstart": AnimationEvent;
    "auxclick": MouseEvent;
    "beforeinput": InputEvent;
    "blur": FocusEvent;
    "canplay": Event;
    "canplaythrough": Event;
    "change": Event;
    "click": MouseEvent;
    "close": Event;
    "compositionend": CompositionEvent;
    "compositionstart": CompositionEvent;
    "compositionupdate": CompositionEvent;
    "contextmenu": MouseEvent;
    "cuechange": Event;
    "dblclick": MouseEvent;
    "drag": DragEvent;
    "dragend": DragEvent;
    "dragenter": DragEvent;
    "dragleave": DragEvent;
    "dragover": DragEvent;
    "dragstart": DragEvent;
    "drop": DragEvent;
    "durationchange": Event;
    "emptied": Event;
    "ended": Event;
    "error": ErrorEvent;
    "focus": FocusEvent;
    "focusin": FocusEvent;
    "focusout": FocusEvent;
    "formdata": FormDataEvent;
    "gotpointercapture": PointerEvent;
    "input": Event;
    "invalid": Event;
    "keydown": KeyboardEvent;
    "keypress": KeyboardEvent;
    "keyup": KeyboardEvent;
    "load": Event;
    "loadeddata": Event;
    "loadedmetadata": Event;
    "loadstart": Event;
    "lostpointercapture": PointerEvent;
    "mousedown": MouseEvent;
    "mouseenter": MouseEvent;
    "mouseleave": MouseEvent;
    "mousemove": MouseEvent;
    "mouseout": MouseEvent;
    "mouseover": MouseEvent;
    "mouseup": MouseEvent;
    "pause": Event;
    "play": Event;
    "playing": Event;
    "pointercancel": PointerEvent;
    "pointerdown": PointerEvent;
    "pointerenter": PointerEvent;
    "pointerleave": PointerEvent;
    "pointermove": PointerEvent;
    "pointerout": PointerEvent;
    "pointerover": PointerEvent;
    "pointerup": PointerEvent;
    "progress": ProgressEvent;
    "ratechange": Event;
    "reset": Event;
    "resize": UIEvent;
    "scroll": Event;
    "securitypolicyviolation": SecurityPolicyViolationEvent;
    "seeked": Event;
    "seeking": Event;
    "select": Event;
    "selectionchange": Event;
    "selectstart": Event;
    "stalled": Event;
    "submit": Event;
    "suspend": Event;
    "timeupdate": Event;
    "toggle": Event;
    "touchcancel": TouchEvent;
    "touchend": TouchEvent;
    "touchmove": TouchEvent;
    "touchstart": TouchEvent;
    "transitioncancel": TransitionEvent;
    "transitionend": TransitionEvent;
    "transitionrun": TransitionEvent;
    "transitionstart": TransitionEvent;
    "volumechange": Event;
    "waiting": Event;
    "webkitanimationend": Event;
    "webkitanimationiteration": Event;
    "webkitanimationstart": Event;
    "webkittransitionend": Event;
    "wheel": WheelEvent;
}

interface GlobalEventHandlers {
    /**
     * Se dispara cuando el usuario aborta la descarga.
     * @param ev El evento.
     */
    onabort: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
    onanimationcancel: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
    onanimationend: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
    onanimationiteration: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
    onanimationstart: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
    onauxclick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    /**
     * Se dispara cuando el objeto pierde el foco de entrada.
     * @param ev El evento focus.
     */
    onblur: ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null;
    /**
     * Ocurre cuando la reproducción es posible, pero requeriría más almacenamiento en búfer.
     * @param ev El evento.
     */
    oncanplay: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    oncanplaythrough: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Se activa cuando el contenido del objeto o la selección ha cambiado.
     * @param ev El evento.
     */
    onchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Se dispara cuando el usuario hace clic con el botón izquierdo del mouse en el objeto
     * @param ev El evento del mouse.
     */
    onclick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    onclose: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Se dispara cuando el usuario hace clic con el botón derecho del mouse en el área del cliente, abriendo el menú contextual.
     * @param ev El evento del mouse.
     */
    oncontextmenu: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    oncuechange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Se activa cuando el usuario hace doble clic en el objeto.
     * @param ev El evento del mouse.
     */
    ondblclick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    /**
     * Se dispara en el objeto fuente de forma continua durante una operación de arrastre.
     * @param ev El evento.
     */
    ondrag: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    /**
     * Se activa en el objeto fuente cuando el usuario suelta el mouse al finalizar una operación de arrastre.
     * @param ev El evento.
     */
    ondragend: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    /**
     * Se activa en el elemento destino cuando el usuario arrastra el objeto a un destino de colocación válido.
     * @param ev El evento drag.
     */
    ondragenter: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    /**
     * Se activa en el objeto destino cuando el usuario mueve el mouse fuera de un destino de colocación válido durante una operación de arrastre.
     * @param ev El evento drag.
     */
    ondragleave: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    /**
     * Se dispara continuamente en el elemento destino mientras el usuario arrastra el objeto sobre un destino de colocación válido.
     * @param ev El evento.
     */
    ondragover: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    /**
     * Se activa en el objeto fuente cuando el usuario comienza a arrastrar una selección de texto o un objeto seleccionado.
     * @param ev El evento.
     */
    ondragstart: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    ondrop: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    /**
     * Ocurre cuando se actualiza el atributo duration.
     * @param ev El evento.
     */
    ondurationchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Ocurre cuando el elemento multimedia se restablece a su estado inicial.
     * @param ev El evento.
     */
    onemptied: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Ocurre cuando se llega al final de la reproducción.
     * @param ev El evento
     */
    onended: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Se activa cuando se produce un error durante la carga del objeto.
     * @param ev El evento.
     */
    onerror: OnErrorEventHandler;
    /**
     * Se dispara cuando el objeto recibe el foco.
     * @param ev El evento.
     */
    onfocus: ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null;
    onformdata: ((this: GlobalEventHandlers, ev: FormDataEvent) => any) | null;
    ongotpointercapture: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    oninput: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    oninvalid: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Se dispara cuando el usuario presiona una tecla.
     * @param ev El evento del teclado
     */
    onkeydown: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
    /**
     * Se activa cuando el usuario pulsa una tecla alfanumérica.
     * @param ev El evento.
     */
    /** @deprecated */
    onkeypress: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
    /**
     * Se dispara cuando el usuario suelta una tecla.
     * @param ev El evento del teclado
     */
    onkeyup: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
    /**
     * Se activa inmediatamente después de que el navegador carga el objeto.
     * @param ev El evento.
     */
    onload: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Ocurre cuando los datos multimedia se cargan en la posición de reproducción actual.
     * @param ev El evento.
     */
    onloadeddata: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Ocurre cuando se han determinado la duración y las dimensiones del medio.
     * @param ev El evento.
     */
    onloadedmetadata: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Ocurre cuando Internet Explorer comienza a buscar datos multimedia.
     * @param ev El evento.
     */
    onloadstart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onlostpointercapture: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    /**
     * Se activa cuando el usuario hace clic en el objeto con cualquiera de los botones del mouse.
     * @param ev El evento del mouse.
     */
    onmousedown: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    onmouseenter: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    onmouseleave: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    /**
     * Se dispara cuando el usuario mueve el mouse sobre el objeto.
     * @param ev El evento del mouse.
     */
    onmousemove: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    /**
     * Se activa cuando el usuario mueve el puntero del mouse fuera de los límites del objeto.
     * @param ev El evento del mouse.
     */
    onmouseout: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    /**
     * Se activa cuando el usuario mueve el puntero del mouse hacia el objeto.
     * @param ev El evento del mouse.
     */
    onmouseover: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    /**
     * Se activa cuando el usuario suelta un botón del mouse mientras el mouse está sobre el objeto.
     * @param ev El evento del mouse.
     */
    onmouseup: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    /**
     * Ocurre cuando la reproducción está en pausa.
     * @param ev El evento.
     */
    onpause: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Ocurre cuando se solicita el método de reproducción.
     * @param ev El evento.
     */
    onplay: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Ocurre cuando el audio o video se ha comenzado a reproducir.
     * @param ev El evento.
     */
    onplaying: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onpointercancel: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    onpointerdown: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    onpointerenter: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    onpointerleave: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    onpointermove: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    onpointerout: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    onpointerover: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    onpointerup: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    /**
     * Ocurre para indicar el progreso durante la descarga de datos multimedia.
     * @param ev El evento.
     */
    onprogress: ((this: GlobalEventHandlers, ev: ProgressEvent) => any) | null;
    /**
     * Ocurre cuando la velocidad de reproducción aumenta o disminuye.
     * @param ev El evento.
     */
    onratechange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Se activa cuando el usuario restablece un formulario.
     * @param ev El evento.
     */
    onreset: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onresize: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
    /**
     * Se activa cuando el usuario cambia la posición del cuadro de desplazamiento en la barra de desplazamiento del objeto.
     * @param ev El evento.
     */
    onscroll: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Se produce cuando finaliza la operación de búsqueda.
     * @param ev El evento.
     */
    onseeked: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Se produce cuando se mueve la posición de reproducción actual.
     * @param ev El evento.
     */
    onseeking: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Se dispara cuando cambia la selección actual.
     * @param ev El evento.
     */
    onselect: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onselectionchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onselectstart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Ocurre cuando la descarga se ha detenido.
     * @param ev El evento.
     */
    onstalled: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onsubmit: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Ocurre si la operación de carga se detuvo intencionalmente.
     * @param ev El evento.
     */
    onsuspend: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Se produce para indicar la posición de reproducción actual.
     * @param ev El evento.
     */
    ontimeupdate: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    ontoggle: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    ontouchcancel?: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null;
    ontouchend?: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null;
    ontouchmove?: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null;
    ontouchstart?: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null;
    ontransitioncancel: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
    ontransitionend: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
    ontransitionrun: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
    ontransitionstart: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
    /**
     * Ocurre cuando se cambia el volumen o se silencia o activa la reproducción.
     * @param ev El evento.
     */
    onvolumechange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Ocurre cuando la reproducción se detiene porque el siguiente cuadro de un recurso de video no está disponible.
     * @param ev El evento.
     */
    onwaiting: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onwebkitanimationend: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onwebkitanimationiteration: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onwebkitanimationstart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onwebkittransitionend: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onwheel: ((this: GlobalEventHandlers, ev: WheelEvent) => any) | null;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: GlobalEventHandlers, ev: GlobalEventHandlersEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: GlobalEventHandlers, ev: GlobalEventHandlersEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

interface HTMLAllCollection {
    /**
     * Devuelve el número de elementos de la colección.
     */
    readonly length: number;
    /**
     * Devuelve el elemento con índice index de la colección (determinado por el orden del árbol).
     */
    item(nameOrIndex?: string): HTMLCollection | Element | null;
    /**
     * Devuelve el elemento con ID o nombre de la colección.
     *
     * Si hay varios elementos coincidentes, se devuelve un objeto HTMLCollection que contiene todos esos elementos.
     *
     * Solo los elementos button, form, iframe, input, map, meta, object, select y textarea pueden tener un nombre a los efectos de este método; su nombre viene dado por el valor de su atributo name.
     */
    namedItem(name: string): HTMLCollection | Element | null;
    [index: number]: Element;
}

declare var HTMLAllCollection: {
    readonly prototype: HTMLAllCollection;
    new(): HTMLAllCollection;
};

/** Elementos de hipervínculo y proporciona propiedades y métodos especiales (más allá de los de la interfaz de objeto HTMLElement normal de la que heredan) para manipular el diseño y la presentación de dichos elementos. */
interface HTMLAnchorElement extends HTMLElement, HTMLHyperlinkElementUtils {
    /**
     * Establece o recupera el conjunto de caracteres utilizado para codificar el objeto.
     */
    /** @deprecated */
    charset: string;
    /**
     * Establece o recupera las coordenadas del objeto.
     */
    /** @deprecated */
    coords: string;
    download: string;
    /**
     * Establece o recupera el código de idioma del objeto.
     */
    hreflang: string;
    /**
     * Establece o recupera la forma del objeto.
     */
    /** @deprecated */
    name: string;
    ping: string;
    referrerPolicy: string;
    /**
     * Establece o recupera la relación entre el objeto y el destino del enlace.
     */
    rel: string;
    readonly relList: DOMTokenList;
    /**
     * Establece o recupera la relación entre el objeto y el destino del enlace.
     */
    /** @deprecated */
    rev: string;
    /**
     * Establece o recupera la forma del objeto.
     */
    /** @deprecated */
    shape: string;
    /**
     * Establece o recupera la ventana o el marco en el que orientar el contenido.
     */
    target: string;
    /**
     * Recupera o establece el texto del objeto como una cadena.
     */
    text: string;
    type: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLAnchorElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLAnchorElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLAnchorElement: {
    readonly prototype: HTMLAnchorElement;
    new(): HTMLAnchorElement;
};

/** Proporciona propiedades y métodos especiales (más allá de los de la interfaz del objeto HTMLElement normal que también tiene disponible por herencia) para manipular el diseño y la presentación de los elementos <area>. */
interface HTMLAreaElement extends HTMLElement, HTMLHyperlinkElementUtils {
    /**
     * Establece o recupera un texto alternativo al gráfico.
     */
    alt: string;
    /**
     * Establece o recupera las coordenadas del objeto.
     */
    coords: string;
    download: string;
    /**
     * Establece o determina si los clics en esta región provocan una acción.
     */
    /** @deprecated */
    noHref: boolean;
    ping: string;
    referrerPolicy: string;
    rel: string;
    readonly relList: DOMTokenList;
    /**
     * Establece o recupera la forma del objeto.
     */
    shape: string;
    /**
     * Establece o recupera la ventana o el marco en el que orientar el contenido.
     */
    target: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLAreaElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLAreaElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLAreaElement: {
    readonly prototype: HTMLAreaElement;
    new(): HTMLAreaElement;
};

/** Proporciona acceso a las propiedades de los elementos <audio>, así como a los métodos para manipularlos. Se deriva de la interfaz HTMLMediaElement. */
interface HTMLAudioElement extends HTMLMediaElement {
    addEventListener<K extends keyof HTMLMediaElementEventMap>(type: K, listener: (this: HTMLAudioElement, ev: HTMLMediaElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLMediaElementEventMap>(type: K, listener: (this: HTMLAudioElement, ev: HTMLMediaElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLAudioElement: {
    readonly prototype: HTMLAudioElement;
    new(): HTMLAudioElement;
};

/** Un elemento HTML de salto de línea (<br>). Hereda de HTMLElement. */
interface HTMLBRElement extends HTMLElement {
    /**
     * Establece o recupera el lado en el que no se deben colocar los objetos flotantes cuando se inserta cualquier IHTMLBlockElement en el documento.
     */
    /** @deprecated */
    clear: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLBRElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLBRElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLBRElement: {
    readonly prototype: HTMLBRElement;
    new(): HTMLBRElement;
};

/** Contiene la URI base de un documento. Este objeto hereda todas las propiedades y métodos como se describe en la interfaz HTMLElement. */
interface HTMLBaseElement extends HTMLElement {
    /**
     * Obtiene o establece la dirección URL de referencia en la que se basan los enlaces relativos.
     */
    href: string;
    /**
     * Establece o recupera la ventana o el marco en el que orientar el contenido.
     */
    target: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLBaseElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLBaseElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLBaseElement: {
    readonly prototype: HTMLBaseElement;
    new(): HTMLBaseElement;
};

interface HTMLBodyElementEventMap extends HTMLElementEventMap, WindowEventHandlersEventMap {
    "orientationchange": Event;
}

/** Proporciona propiedades especiales (más allá de las heredadas de la interfaz de HTMLElement normal) para manipular elementos <body>. */
interface HTMLBodyElement extends HTMLElement, WindowEventHandlers {
    /** @deprecated */
    aLink: string;
    /** @deprecated */
    background: string;
    /** @deprecated */
    bgColor: string;
    /** @deprecated */
    link: string;
    /** @deprecated */
    onorientationchange: ((this: HTMLBodyElement, ev: Event) => any) | null;
    /** @deprecated */
    text: string;
    /** @deprecated */
    vLink: string;
    addEventListener<K extends keyof HTMLBodyElementEventMap>(type: K, listener: (this: HTMLBodyElement, ev: HTMLBodyElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLBodyElementEventMap>(type: K, listener: (this: HTMLBodyElement, ev: HTMLBodyElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLBodyElement: {
    readonly prototype: HTMLBodyElement;
    new(): HTMLBodyElement;
};

/** Proporciona propiedades y métodos (más allá de la interfaz HTMLElement normal que también tiene disponible por herencia) para manipular elementos <button>. */
interface HTMLButtonElement extends HTMLElement {
    disabled: boolean;
    /**
     * Recupera una referencia al formulario en el que está incrustado el objeto.
     */
    readonly form: HTMLFormElement | null;
    /**
     * Anula el atributo action (donde se envían los datos de un formulario) en el elemento de formulario principal.
     */
    formAction: string;
    /**
     * Se utiliza para anular la codificación (atributo formEnctype) especificada en el elemento de formulario.
     */
    formEnctype: string;
    /**
     * Anula el atributo del método submit especificado previamente en un elemento de formulario.
     */
    formMethod: string;
    /**
     * Anula cualquier validación o atributo required en un formulario o elementos de formulario para permitir que se envíe sin validación. Esto se puede usar para crear una opción de envío del tipo "guardar borrador" — "save draft".
     */
    formNoValidate: boolean;
    /**
     * Anula el atributo target en un elemento de formulario.
     */
    formTarget: string;
    readonly labels: NodeListOf<HTMLLabelElement>;
    /**
     * Establece o recupera el name del objeto.
     */
    name: string;
    /**
     * Obtiene la clasificación y el comportamiento predeterminado del botón.
     */
    type: string;
    /**
     * Devuelve el mensaje de error que se mostraría si el usuario envía el formulario, o una cadena vacía si no hay mensaje de error. También activa el mensaje de error estándar, como "este es un campo obligatorio". El resultado es que el usuario ve mensajes de validación sin enviarlos realmente.
     */
    readonly validationMessage: string;
    /**
     * Devuelve un objeto ValidityState que representa los estados de validez de un elemento.
     */
    readonly validity: ValidityState;
    /**
     * Establece o recupera el valor predeterminado o seleccionado del control.
     */
    value: string;
    /**
     * Devuelve si un elemento se validará con éxito en función de las reglas y restricciones de validación de formularios.
     */
    readonly willValidate: boolean;
    /**
     * Devuelve si un formulario se validará cuando se envíe, sin tener que enviarlo.
     */
    checkValidity(): boolean;
    reportValidity(): boolean;
    /**
     * Establece un mensaje de error personalizado que se muestra cuando se envía un formulario.
     * @param error Establece un mensaje de error personalizado que se muestra cuando se envía un formulario.
     */
    setCustomValidity(error: string): void;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLButtonElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLButtonElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLButtonElement: {
    readonly prototype: HTMLButtonElement;
    new(): HTMLButtonElement;
};

/** Proporciona propiedades y métodos para manipular el diseño y la presentación de los elementos <canvas>. La interfaz HTMLCanvasElement también hereda las propiedades y métodos de la interfaz HTMLElement. */
interface HTMLCanvasElement extends HTMLElement {
    /**
     * Obtiene o establece el alto de un elemento canvas en un documento.
     */
    height: number;
    /**
     * Obtiene o establece el ancho de un elemento canvas en un documento.
     */
    width: number;
    captureStream(frameRequestRate?: number): MediaStream;
    /**
     * Devuelve un objeto que proporciona métodos y propiedades para dibujar y manipular imágenes y gráficos en un elemento canvas en un documento. Un objeto context incluye información sobre colores, anchos de línea, fuentes y otros parámetros gráficos que se pueden dibujar en un lienzo — canvas.
     * @param contextId El identificador (ID) del tipo canvas a crear. Internet Explorer 9 e Internet Explorer 10 solo admiten un contexto 2D mediante canvas.getContext("2d"); IE11 Preview también es compatible con el contexto 3-D o WebGL mediante canvas.getContext("experimental-webgl");
     */
    getContext(contextId: "2d", options?: CanvasRenderingContext2DSettings): CanvasRenderingContext2D | null;
    getContext(contextId: "bitmaprenderer", options?: ImageBitmapRenderingContextSettings): ImageBitmapRenderingContext | null;
    getContext(contextId: "webgl", options?: WebGLContextAttributes): WebGLRenderingContext | null;
    getContext(contextId: "webgl2", options?: WebGLContextAttributes): WebGL2RenderingContext | null;
    getContext(contextId: string, options?: any): RenderingContext | null;
    toBlob(callback: BlobCallback, type?: string, quality?: any): void;
    /**
     * Devuelve el contenido del canvas actual como una imagen que puedes usar como fuente para otro lienzo o elemento HTML.
     * @param type El tipo MIME estándar para que se devuelva el formato de imagen. Si no especificas este parámetro, el valor predeterminado es una imagen en formato PNG.
     */
    toDataURL(type?: string, quality?: any): string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLCanvasElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLCanvasElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLCanvasElement: {
    readonly prototype: HTMLCanvasElement;
    new(): HTMLCanvasElement;
};

/** Una colección genérica (objeto similar a un arreglo similar a los argumentos) de elementos (en el orden del documento) y ofrece métodos y propiedades para seleccionar de la lista. */
interface HTMLCollectionBase {
    /**
     * Establece o recupera el número de objetos en una colección.
     */
    readonly length: number;
    /**
     * Recupera un objeto de varias colecciones.
     */
    item(index: number): Element | null;
    [index: number]: Element;
}

interface HTMLCollection extends HTMLCollectionBase {
    /**
     * Recupera un objeto seleccionado o un objeto de una colección de opciones.
     */
    namedItem(name: string): Element | null;
}

declare var HTMLCollection: {
    readonly prototype: HTMLCollection;
    new(): HTMLCollection;
};

interface HTMLCollectionOf<T extends Element> extends HTMLCollectionBase {
    item(index: number): T | null;
    namedItem(name: string): T | null;
    [index: number]: T;
}

/** Proporciona propiedades especiales (más allá de las de la interfaz HTMLElement normal que también tiene disponible por herencia) para manipular elementos de la lista de definiciones (<dl>). */
interface HTMLDListElement extends HTMLElement {
    /** @deprecated */
    compact: boolean;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLDListElement: {
    readonly prototype: HTMLDListElement;
    new(): HTMLDListElement;
};

/** Proporciona propiedades especiales (más allá de la interfaz HTMLElement normal que también tiene disponible por herencia) para manipular elementos <data>. */
interface HTMLDataElement extends HTMLElement {
    value: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDataElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDataElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLDataElement: {
    readonly prototype: HTMLDataElement;
    new(): HTMLDataElement;
};

/** Proporciona propiedades especiales (más allá de la interfaz del objeto HTMLElement que también tiene disponible por herencia) para manipular elementos <datalist> y su contenido. */
interface HTMLDataListElement extends HTMLElement {
    /**
     * Returns an HTMLCollection of the option elements of the datalist element.
     */
    readonly options: HTMLCollectionOf<HTMLOptionElement>;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDataListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDataListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLDataListElement: {
    readonly prototype: HTMLDataListElement;
    new(): HTMLDataListElement;
};

interface HTMLDetailsElement extends HTMLElement {
    open: boolean;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDetailsElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDetailsElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLDetailsElement: {
    readonly prototype: HTMLDetailsElement;
    new(): HTMLDetailsElement;
};

/** @deprecated */
interface HTMLDirectoryElement extends HTMLElement {
    /** @deprecated */
    compact: boolean;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDirectoryElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDirectoryElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

/** @deprecated */
declare var HTMLDirectoryElement: {
    readonly prototype: HTMLDirectoryElement;
    new(): HTMLDirectoryElement;
};

/** Proporciona propiedades especiales (más allá de la interfaz HTMLElement normal que también tiene disponible por herencia) para manipular elementos <div>. */
interface HTMLDivElement extends HTMLElement {
    /**
     * Establece o recupera cómo se alinea el objeto con el texto adyacente.
     */
    /** @deprecated */
    align: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDivElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDivElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLDivElement: {
    readonly prototype: HTMLDivElement;
    new(): HTMLDivElement;
};

interface HTMLElementEventMap extends ElementEventMap, DocumentAndElementEventHandlersEventMap, GlobalEventHandlersEventMap {
}

/** Cualquier elemento HTML. Algunos elementos implementan directamente esta interfaz, mientras que otros la implementan a través de una interfaz que hereda. */
interface HTMLElement extends Element, DocumentAndElementEventHandlers, ElementCSSInlineStyle, ElementCSSInlineStyle, ElementContentEditable, GlobalEventHandlers, HTMLOrSVGElement {
    accessKey: string;
    readonly accessKeyLabel: string;
    autocapitalize: string;
    dir: string;
    draggable: boolean;
    hidden: boolean;
    innerText: string;
    lang: string;
    readonly offsetHeight: number;
    readonly offsetLeft: number;
    readonly offsetParent: Element | null;
    readonly offsetTop: number;
    readonly offsetWidth: number;
    outerText: string;
    spellcheck: boolean;
    title: string;
    translate: boolean;
    click(): void;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLElement: {
    readonly prototype: HTMLElement;
    new(): HTMLElement;
};

/** Proporciona propiedades especiales (más allá de la interfaz HTMLElement normal que también tiene disponible por herencia) para manipular elementos <embed>. */
interface HTMLEmbedElement extends HTMLElement {
    /** @deprecated */
    align: string;
    /**
     * Establece o recupera la altura del objeto.
     */
    height: string;
    /**
     * Establece o recupera el name del objeto.
     */
    /** @deprecated */
    name: string;
    /**
     * Establece o recupera una URL para que la cargue el objeto.
     */
    src: string;
    type: string;
    /**
     * Establece o recupera el ancho del objeto.
     */
    width: string;
    getSVGDocument(): Document | null;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLEmbedElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLEmbedElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLEmbedElement: {
    readonly prototype: HTMLEmbedElement;
    new(): HTMLEmbedElement;
};

/** Proporciona propiedades y métodos especiales (más allá de la interfaz normal de HTMLElement que también tiene disponible por herencia) para manipular el diseño y la presentación de los elementos <fieldset>. */
interface HTMLFieldSetElement extends HTMLElement {
    disabled: boolean;
    /**
     * Returns an HTMLCollection of the form controls in the element.
     */
    readonly elements: HTMLCollection;
    /**
     * Recupera una referencia al formulario en el que está incrustado el objeto.
     */
    readonly form: HTMLFormElement | null;
    name: string;
    /**
     * Returns the string "fieldset".
     */
    readonly type: string;
    /**
     * Devuelve el mensaje de error que se mostraría si el usuario envía el formulario, o una cadena vacía si no hay mensaje de error. También activa el mensaje de error estándar, como "este es un campo obligatorio". El resultado es que el usuario ve mensajes de validación sin enviarlos realmente.
     */
    readonly validationMessage: string;
    /**
     * Devuelve un objeto ValidityState que representa los estados de validez de un elemento.
     */
    readonly validity: ValidityState;
    /**
     * Devuelve si un elemento se validará con éxito en función de las reglas y restricciones de validación de formularios.
     */
    readonly willValidate: boolean;
    /**
     * Devuelve si un formulario se validará cuando se envíe, sin tener que enviarlo.
     */
    checkValidity(): boolean;
    reportValidity(): boolean;
    /**
     * Establece un mensaje de error personalizado que se muestra cuando se envía un formulario.
     * @param error Establece un mensaje de error personalizado que se muestra cuando se envía un formulario.
     */
    setCustomValidity(error: string): void;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFieldSetElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFieldSetElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLFieldSetElement: {
    readonly prototype: HTMLFieldSetElement;
    new(): HTMLFieldSetElement;
};

/** Implementa la representación del modelo de objeto de documento (DOM) del elemento de fuente. El elemento de fuente <font> de HTML define el tamaño de la fuente, el tipo de letra y el color del texto. */
/** @deprecated */
interface HTMLFontElement extends HTMLElement {
    /** @deprecated */
    color: string;
    /**
     * Establece o recupera la familia tipográfica actual.
     */
    /** @deprecated */
    face: string;
    /** @deprecated */
    size: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFontElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFontElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

/** @deprecated */
declare var HTMLFontElement: {
    readonly prototype: HTMLFontElement;
    new(): HTMLFontElement;
};

/** Una colección de elementos de control de formulario HTML.  */
interface HTMLFormControlsCollection extends HTMLCollectionBase {
    /**
     * Devuelve el elemento con ID o nombre de la colección.
     *
     * Si hay varios elementos coincidentes, se devuelve un objeto RadioNodeList que contiene todos esos elementos.
     */
    namedItem(name: string): RadioNodeList | Element | null;
}

declare var HTMLFormControlsCollection: {
    readonly prototype: HTMLFormControlsCollection;
    new(): HTMLFormControlsCollection;
};

/** Un elemento <form> en el DOM; permite el acceso y en algunos casos la modificación de aspecto del formulario, así como el acceso a sus elementos componentes. */
interface HTMLFormElement extends HTMLElement {
    /**
     * Establece o recupera una lista de codificaciones de caracteres para los datos de entrada que debe aceptar el servidor que procesa el formulario.
     */
    acceptCharset: string;
    /**
     * Establece o recupera la URL a la que se envía el contenido del formulario para su procesamiento.
     */
    accion: string;
    /**
     * Especifica si se aplica autocompleción a un campo de texto editable.
     */
    autocomplete: string;
    /**
     * Recupera una colección, en orden de origen, de todos los controles en un formulario determinado.
     */
    readonly elements: HTMLFormControlsCollection;
    /**
     * Establece o recupera la codificación MIME para el formulario.
     */
    encoding: string;
    /**
     * Establece o recupera el tipo de codificación del formulario.
     */
    enctype: string;
    /**
     * Establece o recupera el número de objetos en una colección.
     */
    readonly length: number;
    /**
     * Establece o recupera cómo enviar los datos del formulario al servidor.
     */
    method: string;
    /**
     * Establece o recupera el name del objeto.
     */
    name: string;
    /**
     * Designa un formulario que no se valida cuando se envía.
     */
    noValidate: boolean;
    /**
     * Establece o recupera la ventana o el marco en el que orientar el contenido.
     */
    target: string;
    /**
     * Devuelve si un formulario se validará cuando se envíe, sin tener que enviarlo.
     */
    checkValidity(): boolean;
    reportValidity(): boolean;
    requestSubmit(submitter?: HTMLElement | null): void;
    /**
     * Se activa cuando el usuario restablece un formulario.
     */
    reiniciar(): void;
    /**
     * Se dispara cuando un FORM está a punto de ser enviado.
     */
    submit(): void;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFormElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFormElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
    [index: number]: Element;
    [name: string]: any;
}

declare var HTMLFormElement: {
    readonly prototype: HTMLFormElement;
    new(): HTMLFormElement;
};

/** @deprecated */
interface HTMLFrameElement extends HTMLElement {
    /**
     * Recupera el objeto de documento de la página o marco.
     */
    /** @deprecated */
    readonly contentDocument: Document | null;
    /**
     * Recupera el objeto del especificado.
     */
    /** @deprecated */
    readonly contentWindow: WindowProxy | null;
    /**
     * Establece o recupera si mostrar un borde para el marco.
     */
    /** @deprecated */
    frameBorder: string;
    /**
     * Establece o recupera un URI para una descripción larga del objeto.
     */
    /** @deprecated */
    longDesc: string;
    /**
     * Establece o recupera las alturas de los márgenes superior e inferior antes de mostrar el texto en un marco.
     */
    /** @deprecated */
    marginHeight: string;
    /**
     * Establece o recupera los anchos de los márgenes izquierdo y derecho antes de mostrar el texto en un marco.
     */
    /** @deprecated */
    marginWidth: string;
    /**
     * Establece o recupera el nombre del marco.
     */
    /** @deprecated */
    name: string;
    /**
     * Establece o recupera si el usuario puede cambiar el tamaño del marco.
     */
    /** @deprecated */
    noResize: boolean;
    /**
     * Establece o recupera si el marco se puede desplazar.
     */
    /** @deprecated */
    scrolling: string;
    /**
     * Establece o recupera una URL para que la cargue el objeto.
     */
    /** @deprecated */
    src: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFrameElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFrameElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

/** @deprecated */
declare var HTMLFrameElement: {
    readonly prototype: HTMLFrameElement;
    new(): HTMLFrameElement;
};

interface HTMLFrameSetElementEventMap extends HTMLElementEventMap, WindowEventHandlersEventMap {
}

/** Proporciona propiedades especiales (más allá de las de la interfaz HTMLElement normal que también heredan) para manipular elementos <frameset>. */
/** @deprecated */
interface HTMLFrameSetElement extends HTMLElement, WindowEventHandlers {
    /**
     * Establece o recupera los anchos de marco del objeto.
     */
    /** @deprecated */
    cols: string;
    /**
     * Establece o recupera las alturas del marco del objeto.
     */
    /** @deprecated */
    rows: string;
    addEventListener<K extends keyof HTMLFrameSetElementEventMap>(type: K, listener: (this: HTMLFrameSetElement, ev: HTMLFrameSetElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLFrameSetElementEventMap>(type: K, listener: (this: HTMLFrameSetElement, ev: HTMLFrameSetElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

/** @deprecated */
declare var HTMLFrameSetElement: {
    readonly prototype: HTMLFrameSetElement;
    new(): HTMLFrameSetElement;
};

/** Proporciona propiedades especiales (más allá de las de la interfaz HTMLElement que también tiene disponibles por herencia) para manipular elementos <hr>. */
interface HTMLHRElement extends HTMLElement {
    /**
     * Establece o recupera cómo se alinea el objeto con el texto adyacente.
     */
    /** @deprecated */
    align: string;
    /** @deprecated */
    color: string;
    /**
     * Establece o recupera si la regla horizontal se dibuja con sombreado 3D.
     */
    /** @deprecated */
    noShade: boolean;
    /** @deprecated */
    size: string;
    /**
     * Establece o recupera el ancho del objeto.
     */
    /** @deprecated */
    width: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLHRElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLHRElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLHRElement: {
    readonly prototype: HTMLHRElement;
    new(): HTMLHRElement;
};

/** Contiene la información descriptiva, o metadatos, de un documento. Este objeto hereda todas las propiedades y métodos descritos en la interfaz HTMLElement. */
interface HTMLHeadElement extends HTMLElement {
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLHeadElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLHeadElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLHeadElement: {
    readonly prototype: HTMLHeadElement;
    new(): HTMLHeadElement;
};

/** Los diferentes elementos del encabezamiento. Hereda métodos y propiedades de la interfaz HTMLElement. */
interface HTMLHeadingElement extends HTMLElement {
    /**
     * Establece o recupera un valor que indica la alineación de la tabla.
     */
    /** @deprecated */
    align: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLHeadingElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLHeadingElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLHeadingElement: {
    readonly prototype: HTMLHeadingElement;
    new(): HTMLHeadingElement;
};

/** Sirve como nodo raíz para un documento HTML determinado. Este objeto hereda las propiedades y métodos descritos en la interfaz HTMLElement. */
interface HTMLHtmlElement extends HTMLElement {
    /**
     * Establece o recupera la versión DTD que rige el documento actual.
     */
    /** @deprecated */
    version: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLHtmlElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLHtmlElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLHtmlElement: {
    readonly prototype: HTMLHtmlElement;
    new(): HTMLHtmlElement;
};

interface HTMLHyperlinkElementUtils {
    /**
     * Devuelve el fragmento de URL del hipervínculo (incluye el "#" inicial si no está vacío).
     *
     * Se puede configurar para cambiar el fragmento de la URL (ignora el "#" inicial).
     */
    hash: string;
    /**
     * Devuelve el host y el puerto de la URL del hipervínculo (si es diferente del puerto predeterminado para el esquema).
     *
     * Se puede configurar para cambiar el host y el puerto de la URL.
     */
    host: string;
    /**
     * Devuelve el host de la URL del hipervínculo.
     *
     * Se puede configurar para cambiar el host de la URL.
     */
    hostname: string;
    /**
     * Devuelve la URL del hipervínculo.
     *
     * Se puede configurar, para cambiar la URL.
     */
    href: string;
    toString(): string;
    /**
     * Devuelve el origen de la URL del hipervínculo.
     */
    readonly origin: string;
    /**
     * Devuelve la contraseña de la URL del hipervínculo.
     *
     * Se puede configurar para cambiar la contraseña de la URL.
     */
    password: string;
    /**
     * Devuelve la ruta de la URL del hipervínculo.
     *
     * Se puede configurar para cambiar la ruta de la URL.
     */
    pathname: string;
    /**
     * Devuelve el puerto de la URL del hipervínculo.
     *
     * Se puede configurar para cambiar el puerto de la URL.
     */
    port: string;
    /**
     * Devuelve el esquema de URL del hipervínculo.
     *
     * Se puede configurar para cambiar el esquema de la URL.
     */
    protocol: string;
    /**
     * Devuelve la consulta de la URL del hipervínculo (incluye el "?" inicial si no está vacío).
     *
     * Se puede configurar para cambiar la consulta de la URL (ignora el "?" inicial).
     */
    search: string;
    /**
     * Devuelve el nombre de usuario de la URL del hipervínculo.
     *
     * Se puede configurar para cambiar el nombre de usuario de la URL.
     */
    username: string;
}

/** Proporciona propiedades y métodos especiales (más allá de los de la interfaz HTMLElement que también tiene disponibles por herencia) para manipular el diseño y la presentación de elementos de marco en línea. */
interface HTMLIFrameElement extends HTMLElement {
    /**
     * Establece o recupera cómo se alinea el objeto con el texto adyacente.
     */
    /** @deprecated */
    align: string;
    allow: string;
    allowFullscreen: boolean;
    /**
     * Recupera el objeto de documento de la página o marco.
     */
    readonly contentDocument: Document | null;
    /**
     * Recupera el objeto del especificado.
     */
    readonly contentWindow: WindowProxy | null;
    /**
     * Establece o recupera si mostrar un borde para el marco.
     */
    /** @deprecated */
    frameBorder: string;
    /**
     * Establece o recupera la altura del objeto.
     */
    height: string;
    /**
     * Establece o recupera un URI para una descripción larga del objeto.
     */
    /** @deprecated */
    longDesc: string;
    /**
     * Establece o recupera las alturas de los márgenes superior e inferior antes de mostrar el texto en un marco.
     */
    /** @deprecated */
    marginHeight: string;
    /**
     * Establece o recupera los anchos de los márgenes izquierdo y derecho antes de mostrar el texto en un marco.
     */
    /** @deprecated */
    marginWidth: string;
    /**
     * Establece o recupera el nombre del marco.
     */
    name: string;
    referrerPolicy: ReferrerPolicy;
    readonly sandbox: DOMTokenList;
    /**
     * Establece o recupera si el marco se puede desplazar.
     */
    /** @deprecated */
    scrolling: string;
    /**
     * Establece o recupera una URL para que la cargue el objeto.
     */
    src: string;
    /**
     * Establece o recupera el contenido de la página que se va a contener.
     */
    srcdoc: string;
    /**
     * Establece o recupera el ancho del objeto.
     */
    width: string;
    getSVGDocument(): Document | null;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLIFrameElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLIFrameElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLIFrameElement: {
    readonly prototype: HTMLIFrameElement;
    new(): HTMLIFrameElement;
};

/** Proporciona propiedades y métodos especiales para manipular elementos <img>. */
interface HTMLImageElement extends HTMLElement {
    /**
     * Establece o recupera cómo se alinea el objeto con el texto adyacente.
     */
    /** @deprecated */
    align: string;
    /**
     * Establece o recupera un texto alternativo al gráfico.
     */
    alt: string;
    /**
     * Especifica las propiedades de un borde dibujado alrededor de un objeto.
     */
    /** @deprecated */
    border: string;
    /**
     * Determina si el objeto está completamente cargado.
     */
    readonly complete: boolean;
    crossOrigin: string | null;
    readonly currentSrc: string;
    decoding: "async" | "sync" | "auto";
    /**
     * Establece o recupera la altura del objeto.
     */
    height: number;
    /**
     * Establece o recupera el ancho del borde para dibujar alrededor del objeto.
     */
    /** @deprecated */
    hspace: number;
    /**
     * Establece o recupera si la imagen es un mapa de imagen de lado del servidor.
     */
    isMap: boolean;
    loading: string;
    /**
     * Establece o recupera un identificador uniforme de recursos (URI) para una descripción larga del objeto.
     */
    /** @deprecated */
    longDesc: string;
    /** @deprecated */
    lowsrc: string;
    /**
     * Establece o recupera el name del objeto.
     */
    /** @deprecated */
    name: string;
    /**
     * La altura original del recurso de imagen antes de ajustarla.
     */
    readonly naturalHeight: number;
    /**
     * El ancho original del recurso de imagen antes de ajustarla.
     */
    readonly naturalWidth: number;
    referrerPolicy: string;
    sizes: string;
    /**
     * La dirección o URL de un recurso multimedia que se va a considerar.
     */
    src: string;
    srcset: string;
    /**
     * Establece o recupera la URL, a menudo con una extensión de marcador (#name), para usarla como un mapa de imagen del lado del cliente.
     */
    useMap: string;
    /**
     * Establece o recupera el margen vertical del objeto.
     */
    /** @deprecated */
    vspace: number;
    /**
     * Establece o recupera el ancho del objeto.
     */
    width: number;
    readonly x: number;
    readonly y: number;
    decode(): Promise<void>;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLImageElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLImageElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLImageElement: {
    readonly prototype: HTMLImageElement;
    new(): HTMLImageElement;
};

/** Proporciona propiedades y métodos especiales para manipular las opciones, el diseño y la presentación de los elementos <input>. */
interface HTMLInputElement extends HTMLElement {
    /**
     * Establece o recupera una lista separada por comas de tipos de contenido.
     */
    accept: string;
    /**
     * Establece o recupera cómo se alinea el objeto con el texto adyacente.
     */
    /** @deprecated */
    align: string;
    /**
     * Establece o recupera un texto alternativo al gráfico.
     */
    alt: string;
    /**
     * Especifica si se aplica autocompleción a un campo de texto editable.
     */
    autocomplete: string;
    capture: string;
    /**
     * Establece o recupera el estado de la casilla de verificación o el botón de radio.
     */
    checked: boolean;
    /**
     * Establece o recupera el estado de la casilla de verificación o el botón de radio.
     */
    defaultChecked: boolean;
    /**
     * Establece o recupera el contenido inicial del objeto.
     */
    defaultValue: string;
    dirName: string;
    disabled: boolean;
    /**
     * Devuelve un objeto FileList en un objeto de entrada de tipo de archivo.
     */
    files: FileList | null;
    /**
     * Recupera una referencia al formulario en el que está incrustado el objeto.
     */
    readonly form: HTMLFormElement | null;
    /**
     * Anula el atributo action (donde se envían los datos de un formulario) en el elemento de formulario principal.
     */
    formAction: string;
    /**
     * Se utiliza para anular la codificación (atributo formEnctype) especificada en el elemento de formulario.
     */
    formEnctype: string;
    /**
     * Anula el atributo del método submit especificado previamente en un elemento de formulario.
     */
    formMethod: string;
    /**
     * Anula cualquier validación o atributo required en un formulario o elementos de formulario para permitir que se envíe sin validación. Esto se puede usar para crear una opción de envío del tipo "guardar borrador" — "save draft".
     */
    formNoValidate: boolean;
    /**
     * Anula el atributo target en un elemento de formulario.
     */
    formTarget: string;
    /**
     * Establece o recupera la altura del objeto.
     */
    height: number;
    /**
     * Cuando se establece, anula el renderizado de los controles de casilla de verificación para que el valor actual no sea visible.
     */
    indeterminate: boolean;
    readonly labels: NodeListOf<HTMLLabelElement> | null;
    /**
     * Especifica el ID de una lista de datos predefinida de opciones para un elemento input.
     */
    readonly list: HTMLElement | null;
    /**
     * Define el valor máximo aceptable para un elemento input con type="number". Cuando se usa con los atributos min y step, te permite controlar el rango e incremento (como solo números pares) que el usuario puede ingresar en un campo input.
     */
    max: string;
    /**
     * Establece o recupera el número máximo de caracteres que el usuario puede ingresar en un control text.
     */
    maxLength: number;
    /**
     * Define el valor mínimo aceptable para un elemento input con type="number". Cuando se usa con los atributos max y step, te permite controlar el rango y el incremento (como solo números pares) que el usuario puede ingresar en un campo input.
     */
    min: string;
    minLength: number;
    /**
     * Establece o recupera el valor booleano que indica si se pueden seleccionar varios elementos de una lista.
     */
    multiple: boolean;
    /**
     * Establece o recupera el name del objeto.
     */
    name: string;
    /**
     * Obtiene o establece una cadena que contiene una expresión regular que debe coincidir con la entrada del usuario.
     */
    pattern: string;
    /**
     * Obtiene o establece una cadena de texto que se muestra en un campo input como una sugerencia o indicación para los usuarios como el formato o el tipo de información que deben ingresar. El texto aparece en un campo input hasta que el usuario se enfoca en el campo.
     */
    placeholder: string;
    readOnly: boolean;
    /**
     * Cuando está presente, marca un elemento que no se puede enviar sin un valor.
     */
    required: boolean;
    selectionDirection: "forward" | "backward" | "none" | null;
    /**
     * Obtiene o establece la posición final o el desplazamiento de una selección de texto.
     */
    selectionEnd: number | null;
    /**
     * Obtiene o establece la posición inicial o el desplazamiento de una selección de texto.
     */
    selectionStart: number | null;
    size: number;
    /**
     * La dirección o URL de un recurso multimedia que se va a considerar.
     */
    src: string;
    /**
     * Define un incremento o salto entre los valores que desea permitir que el usuario ingrese. Cuando se usa con los atributos máximo y mínimo, te permite controlar el rango e incremento (por ejemplo, permitir solo números pares) que el usuario puede ingresar en un campo input.
     */
    step: string;
    /**
     * Devuelve el tipo de contenido del objeto.
     */
    type: string;
    /**
     * Establece o recupera la URL, a menudo con una extensión de marcador (#name), para usarla como un mapa de imagen del lado del cliente.
     */
    /** @deprecated */
    useMap: string;
    /**
     * Devuelve el mensaje de error que se mostraría si el usuario envía el formulario, o una cadena vacía si no hay mensaje de error. También activa el mensaje de error estándar, como "este es un campo obligatorio". El resultado es que el usuario ve mensajes de validación sin enviarlos realmente.
     */
    readonly validationMessage: string;
    /**
     * Devuelve un objeto ValidityState que representa los estados de validez de un elemento.
     */
    readonly validity: ValidityState;
    /**
     * Devuelve el valor de los datos en la posición actual del cursor.
     */
    value: string;
    /**
     * Devuelve un objeto Date que representa el valor del control de formulario, si corresponde; de lo contrario, devuelve null. Se puede configurar para cambiar el valor. Lanza una excepción "InvalidStateError" de DOMException si el control no es de fecha o basada en el tiempo.
     */
    valueAsDate: Date | null;
    /**
     * Devuelve el valor del campo input como un número.
     */
    valueAsNumber: number;
    readonly webkitEntries: ReadonlyArray<FileSystemEntry>;
    webkitdirectory: boolean;
    /**
     * Establece o recupera el ancho del objeto.
     */
    width: number;
    /**
     * Devuelve si un elemento se validará con éxito en función de las reglas y restricciones de validación de formularios.
     */
    readonly willValidate: boolean;
    /**
     * Devuelve si un formulario se validará cuando se envíe, sin tener que enviarlo.
     */
    checkValidity(): boolean;
    reportValidity(): boolean;
    /**
     * Hace que la selección sea igual al objeto actual.
     */
    select(): void;
    /**
     * Establece un mensaje de error personalizado que se muestra cuando se envía un formulario.
     * @param error Establece un mensaje de error personalizado que se muestra cuando se envía un formulario.
     */
    setCustomValidity(error: string): void;
    setRangeText(replacement: string): void;
    setRangeText(replacement: string, start: number, end: number, selectionMode?: SelectionMode): void;
    /**
     * Establece las posiciones inicial y final de una selección en un campo de texto.
     * @param start El desplazamiento en el campo de texto para el inicio de la selección.
     * @param end El desplazamiento en el campo de texto para el final de la selección.
     * @param direction La dirección en la que se realiza la selección.
     */
    setSelectionRange(start: number | null, end: number | null, direction?: "forward" | "backward" | "none"): void;
    /**
     * Disminuye el valor de un control de entrada de rango por el valor dado por el atributo Step. Si se usa el parámetro opcional, disminuirá el valor del paso del control de entrada multiplicado por el valor del parámetro.
     * @param n Valor para decrementar el value.
     */
    stepDown(n?: number): void;
    /**
     * Incrementa el valor de un control de entrada de rango por el valor dado por el atributo Step. Si se usa el parámetro opcional, incrementará el valor del control de entrada en ese valor.
     * @param n Valor para incrementar el valor.
     */
    stepUp(n?: number): void;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLInputElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLInputElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLInputElement: {
    readonly prototype: HTMLInputElement;
    new(): HTMLInputElement;
};

/** Expone propiedades y métodos específicos (más allá de los definidos por la interfaz HTMLElement normal que también tiene disponible por herencia) para manipular elementos de la lista. */
interface HTMLLIElement extends HTMLElement {
    /** @deprecated */
    type: string;
    /**
     * Establece o recupera el valor de un elemento de la lista.
     */
    value: number;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLIElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLIElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLLIElement: {
    readonly prototype: HTMLLIElement;
    new(): HTMLLIElement;
};

/** Da acceso a las propiedades específicas de los elementos <label>. Hereda métodos y propiedades de la interfaz base HTMLElement. */
interface HTMLLabelElement extends HTMLElement {
    /**
     * Devuelve el control de formulario asociado a este elemento.
     */
    readonly control: HTMLElement | null;
    /**
     * Recupera una referencia al formulario en el que está incrustado el objeto.
     */
    readonly form: HTMLFormElement | null;
    /**
     * Establece o recupera el objeto al que se asigna el objeto label dado.
     */
    htmlFor: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLabelElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLabelElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLLabelElement: {
    readonly prototype: HTMLLabelElement;
    new(): HTMLLabelElement;
};

/** El HTMLLegendElement es una interfaz que permite acceder a las propiedades de los elementos <legend>. Hereda propiedades y métodos de la interfaz HTMLElement. */
interface HTMLLegendElement extends HTMLElement {
    /** @deprecated */
    align: string;
    /**
     * Recupera una referencia al formulario en el que está incrustado el objeto.
     */
    readonly form: HTMLFormElement | null;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLegendElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLegendElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLLegendElement: {
    readonly prototype: HTMLLegendElement;
    new(): HTMLLegendElement;
};

/** Información de referencia para recursos externos y la relación de esos recursos con un documento y viceversa. Este objeto hereda todas las propiedades y métodos de la interfaz HTMLElement. */
interface HTMLLinkElement extends HTMLElement, LinkStyle {
    as: string;
    /**
     * Establece o recupera el conjunto de caracteres utilizado para codificar el objeto.
     */
    /** @deprecated */
    charset: string;
    crossOrigin: string | null;
    disabled: boolean;
    /**
     * Establece o recupera una URL de destino o un punto de anclaje.
     */
    href: string;
    /**
     * Establece o recupera el código de idioma del objeto.
     */
    hreflang: string;
    imageSizes: string;
    imageSrcset: string;
    integrity: string;
    /**
     * Establece o recupera el tipo de medio.
     */
    media: string;
    referrerPolicy: string;
    /**
     * Establece o recupera la relación entre el objeto y el destino del enlace.
     */
    rel: string;
    readonly relList: DOMTokenList;
    /**
     * Establece o recupera la relación entre el objeto y el destino del enlace.
     */
    /** @deprecated */
    rev: string;
    readonly sizes: DOMTokenList;
    /**
     * Establece o recupera la ventana o el marco en el que orientar el contenido.
     */
    /** @deprecated */
    target: string;
    /**
     * Establece o recupera el tipo MIME del objeto.
     */
    type: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLinkElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLinkElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLLinkElement: {
    readonly prototype: HTMLLinkElement;
    new(): HTMLLinkElement;
};

/** Proporciona propiedades y métodos especiales (más allá de los de la interfaz HTMLElement de objeto normal que también tiene disponible por herencia) para manipular el diseño y la presentación de los elementos map. */
interface HTMLMapElement extends HTMLElement {
    /**
     * Recupera una colección de los objetos de área definidos para el objeto map dado.
     */
    readonly areas: HTMLCollection;
    /**
     * Establece o recupera el name del objeto.
     */
    name: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMapElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMapElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLMapElement: {
    readonly prototype: HTMLMapElement;
    new(): HTMLMapElement;
};

/** Proporciona métodos para manipular elementos <marquee>. */
/** @deprecated */
interface HTMLMarqueeElement extends HTMLElement {
    /** @deprecated */
    behavior: string;
    /** @deprecated */
    bgColor: string;
    /** @deprecated */
    direction: string;
    /** @deprecated */
    height: string;
    /** @deprecated */
    hspace: number;
    /** @deprecated */
    loop: number;
    /** @deprecated */
    scrollAmount: number;
    /** @deprecated */
    scrollDelay: number;
    /** @deprecated */
    trueSpeed: boolean;
    /** @deprecated */
    vspace: number;
    /** @deprecated */
    width: string;
    /** @deprecated */
    start(): void;
    /** @deprecated */
    stop(): void;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMarqueeElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMarqueeElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

/** @deprecated */
declare var HTMLMarqueeElement: {
    readonly prototype: HTMLMarqueeElement;
    new(): HTMLMarqueeElement;
};

interface HTMLMediaElementEventMap extends HTMLElementEventMap {
    "encrypted": MediaEncryptedEvent;
    "waitingforkey": Event;
}

/** Agrega a HTMLElement las propiedades y los métodos necesarios para admitir capacidades básicas relacionadas con los medios que son comunes para el audio y el video. */
interface HTMLMediaElement extends HTMLElement {
    /**
     * Obtiene o establece un valor que indica si se debe iniciar la reproducción del medio automáticamente.
     */
    autoplay: boolean;
    /**
     * Obtiene una colección de intervalos de tiempo almacenados en búfer.
     */
    readonly buffered: TimeRanges;
    /**
     * Obtiene o establece una marca que indica si el cliente proporciona un conjunto de controles para los medios (en caso de que el desarrollador no incluya controles para el reproductor).
     */
    controls: boolean;
    crossOrigin: string | null;
    /**
     * Obtiene la dirección o URL del recurso multimedia actual seleccionado por IHTMLMediaElement.
     */
    readonly currentSrc: string;
    /**
     * Obtiene o establece la posición de reproducción actual, en segundos.
     */
    currentTime: number;
    defaultMuted: boolean;
    /**
     * Obtiene o establece la velocidad de reproducción predeterminada cuando el usuario no utiliza el avance o retroceso rápido para un recurso de video o audio.
     */
    defaultPlaybackRate: number;
    disableRemotePlayback: boolean;
    /**
     * Devuelve la duración en segundos del recurso multimedia actual. Se devuelve un valor NaN si la duración no está disponible, o Infinity si el recurso media está transmitiendo.
     */
    readonly duration: number;
    /**
     * Obtiene información sobre si la reproducción ha finalizado o no.
     */
    readonly ended: boolean;
    /**
     * Devuelve un objeto que representa el estado de error actual del elemento de audio o video.
     */
    readonly error: MediaError | null;
    /**
     * Obtiene o establece una marca para especificar si la reproducción se debe reiniciar después de completarse.
     */
    loop: boolean;
    readonly mediaKeys: MediaKeys | null;
    /**
     * Obtiene o establece una marca que indica si el audio (ya sea audio o la pista de audio en medios de video) está silenciado.
     */
    muted: boolean;
    /**
     * Obtiene la actividad de red actual para el elemento.
     */
    readonly networkState: number;
    onencrypted: ((this: HTMLMediaElement, ev: MediaEncryptedEvent) => any) | null;
    onwaitingforkey: ((this: HTMLMediaElement, ev: Event) => any) | null;
    /**
     * Obtiene una marca que especifica si la reproducción está en pausa.
     */
    readonly paused: boolean;
    /**
     * Obtiene o establece la tasa de velocidad actual para que se reproduzca el recurso multimedia. Esta velocidad se expresa como un múltiplo de la velocidad normal del recurso multimedia.
     */
    playbackRate: number;
    /**
     * Obtiene TimeRanges para el recurso multimedia actual que se ha reproducido.
     */
    readonly played: TimeRanges;
    /**
     * Obtiene o establece la posición de reproducción actual, en segundos.
     */
    preload: string;
    readonly readyState: number;
    readonly remote: RemotePlayback;
    /**
     * Devuelve un objeto TimeRanges que representa los rangos del recurso multimedia actual que se puede buscar.
     */
    readonly seekable: TimeRanges;
    /**
     * Obtiene una marca que indica si el cliente se está moviendo actualmente a una nueva posición de reproducción en el recurso multimedia.
     */
    readonly seeking: boolean;
    /**
     * La dirección o URL de un recurso multimedia que se va a considerar.
     */
    src: string;
    srcObject: MediaProvider | null;
    readonly textTracks: TextTrackList;
    /**
     * Obtiene o establece el nivel de volumen de las partes de audio del elemento multimedia.
     */
    volume: number;
    addTextTrack(kind: TextTrackKind, label?: string, language?: string): TextTrack;
    /**
     * Devuelve una cadena que especifica si el cliente puede reproducir un determinado tipo de recurso multimedia.
     */
    canPlayType(type: string): CanPlayTypeResult;
    fastSeek(time: number): void;
    /**
     * Restablece el objeto de audio o video y carga un nuevo recurso multimedia.
     */
    load(): void;
    /**
     * Hace una pausa en la reproducción actual y establece la pausa en TRUE. Esto se puede usar para probar si los medios se están reproduciendo o en pausa. También puedes usar los eventos de pausa o reproducción para saber si los medios se están reproduciendo o no.
     */
    pause(): void;
    /**
     * Carga e inicia la reproducción de un recurso multimedia.
     */
    play(): Promise<void>;
    setMediaKeys(mediaKeys: MediaKeys | null): Promise<void>;
    readonly HAVE_CURRENT_DATA: number;
    readonly HAVE_ENOUGH_DATA: number;
    readonly HAVE_FUTURE_DATA: number;
    readonly HAVE_METADATA: number;
    readonly HAVE_NOTHING: number;
    readonly NETWORK_EMPTY: number;
    readonly NETWORK_IDLE: number;
    readonly NETWORK_LOADING: number;
    readonly NETWORK_NO_SOURCE: number;
    addEventListener<K extends keyof HTMLMediaElementEventMap>(type: K, listener: (this: HTMLMediaElement, ev: HTMLMediaElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLMediaElementEventMap>(type: K, listener: (this: HTMLMediaElement, ev: HTMLMediaElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLMediaElement: {
    readonly prototype: HTMLMediaElement;
    new(): HTMLMediaElement;
    readonly HAVE_CURRENT_DATA: number;
    readonly HAVE_ENOUGH_DATA: number;
    readonly HAVE_FUTURE_DATA: number;
    readonly HAVE_METADATA: number;
    readonly HAVE_NOTHING: number;
    readonly NETWORK_EMPTY: number;
    readonly NETWORK_IDLE: number;
    readonly NETWORK_LOADING: number;
    readonly NETWORK_NO_SOURCE: number;
};

interface HTMLMenuElement extends HTMLElement {
    /** @deprecated */
    compact: boolean;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMenuElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMenuElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLMenuElement: {
    readonly prototype: HTMLMenuElement;
    new(): HTMLMenuElement;
};

/** Contiene metadatos descriptivos sobre un documento. Hereda todas las propiedades y métodos descritos en la interfaz HTMLElement. */
interface HTMLMetaElement extends HTMLElement {
    /**
     * Obtiene o establece la metainformación para asociarla con httpEquiv o name.
     */
    content: string;
    /**
     * Obtiene o establece información que se utiliza para vincular el valor de un atributo de contenido de un metaelemento a un encabezado de respuesta HTTP.
     */
    httpEquiv: string;
    /**
     * Establece o recupera el valor especificado en el atributo de contenido del metaobjeto.
     */
    name: string;
    /**
     * Establece o recupera un esquema que se utilizará para interpretar el valor de una propiedad especificada para el objeto.
     */
    /** @deprecated */
    scheme: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMetaElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMetaElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLMetaElement: {
    readonly prototype: HTMLMetaElement;
    new(): HTMLMetaElement;
};

/** Los elementos <meter> de HTML exponen la interfaz HTMLMeterElement, que proporciona propiedades y métodos especiales (además de la interfaz de objetos HTMLElement, también están disponibles por herencia) para manipular el diseño y la presentación de los elementos <meter>. */
interface HTMLMeterElement extends HTMLElement {
    high: number;
    readonly labels: NodeListOf<HTMLLabelElement>;
    low: number;
    max: number;
    min: number;
    optimum: number;
    value: number;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMeterElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMeterElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLMeterElement: {
    readonly prototype: HTMLMeterElement;
    new(): HTMLMeterElement;
};

/** Proporciona propiedades especiales (más allá de los métodos y propiedades regulares disponibles a través de la interfaz HTMLElement que también tienen disponibles por herencia) para manipular elementos de modificación, es decir, <del> e <ins>. */
interface HTMLModElement extends HTMLElement {
    /**
     * Establece o recupera información de referencia sobre el objeto.
     */
    cite: string;
    /**
     * Establece o recupera la fecha y la hora de una modificación del objeto.
     */
    dateTime: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLModElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLModElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLModElement: {
    readonly prototype: HTMLModElement;
    new(): HTMLModElement;
};

/** Proporciona propiedades especiales (además de las definidas en la interfaz normal de HTMLElement que también tiene disponibles por herencia) para manipular elementos de lista ordenados. */
interface HTMLOListElement extends HTMLElement {
    /** @deprecated */
    compact: boolean;
    reversed: boolean;
    /**
     * El número inicial.
     */
    start: number;
    type: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLOListElement: {
    readonly prototype: HTMLOListElement;
    new(): HTMLOListElement;
};

/** Proporciona propiedades y métodos especiales (además de los de la interfaz HTMLElement, también tiene disponibles por herencia) para manipular el diseño y la presentación del elemento <object>, que representa recursos externos. */
interface HTMLObjectElement extends HTMLElement {
    /** @deprecated */
    align: string;
    /**
     * Establece o recupera una cadena de caracteres que se puede usar para implementar su propia funcionalidad de archivo para el objeto.
     */
    /** @deprecated */
    archive: string;
    /** @deprecated */
    border: string;
    /**
     * Establece o recupera la URL del archivo que contiene la clase Java compilada.
     */
    /** @deprecated */
    code: string;
    /**
     * Establece o recupera la URL del componente.
     */
    /** @deprecated */
    codeBase: string;
    /**
     * Establece o recupera el tipo de medio de Internet para el código asociado con el objeto.
     */
    /** @deprecated */
    codeType: string;
    /**
     * Recupera el objeto de documento de la página o marco.
     */
    readonly contentDocument: Document | null;
    readonly contentWindow: WindowProxy | null;
    /**
     * Establece o recupera la URL que hace referencia a los datos del objeto.
     */
    data: string;
    /** @deprecated */
    declare: boolean;
    /**
     * Recupera una referencia al formulario en el que está incrustado el objeto.
     */
    readonly form: HTMLFormElement | null;
    /**
     * Establece o recupera la altura del objeto.
     */
    height: string;
    /** @deprecated */
    hspace: number;
    /**
     * Establece o recupera el name del objeto.
     */
    name: string;
    /**
     * Establece o recupera un mensaje para que se muestre mientras se carga un objeto.
     */
    /** @deprecated */
    standby: string;
    /**
     * Establece o recupera el tipo MIME del objeto.
     */
    type: string;
    /**
     * Establece o recupera la URL, a menudo con una extensión de marcador (#name), para usarla como un mapa de imagen del lado del cliente.
     */
    useMap: string;
    /**
     * Devuelve el mensaje de error que se mostraría si el usuario envía el formulario, o una cadena vacía si no hay mensaje de error. También activa el mensaje de error estándar, como "este es un campo obligatorio". El resultado es que el usuario ve mensajes de validación sin enviarlos realmente.
     */
    readonly validationMessage: string;
    /**
     * Devuelve un objeto ValidityState que representa los estados de validez de un elemento.
     */
    readonly validity: ValidityState;
    /** @deprecated */
    vspace: number;
    /**
     * Establece o recupera el ancho del objeto.
     */
    width: string;
    /**
     * Devuelve si un elemento se validará con éxito en función de las reglas y restricciones de validación de formularios.
     */
    readonly willValidate: boolean;
    /**
     * Devuelve si un formulario se validará cuando se envíe, sin tener que enviarlo.
     */
    checkValidity(): boolean;
    getSVGDocument(): Document | null;
    reportValidity(): boolean;
    /**
     * Establece un mensaje de error personalizado que se muestra cuando se envía un formulario.
     * @param error Establece un mensaje de error personalizado que se muestra cuando se envía un formulario.
     */
    setCustomValidity(error: string): void;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLObjectElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLObjectElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLObjectElement: {
    readonly prototype: HTMLObjectElement;
    new(): HTMLObjectElement;
};

/** Proporciona propiedades y métodos especiales (más allá de la interfaz de objeto HTMLElement normal que también tienen disponible por herencia) para manipular el diseño y la presentación de los elementos <optgroup>. */
interface HTMLOptGroupElement extends HTMLElement {
    disabled: boolean;
    /**
     * Establece o recupera un valor que puedes usar para implementar su propia funcionalidad de etiqueta para el objeto.
     */
    label: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOptGroupElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOptGroupElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLOptGroupElement: {
    readonly prototype: HTMLOptGroupElement;
    new(): HTMLOptGroupElement;
};

/** elementos <option> y hereda todas las clases y métodos de la interfaz HTMLElement. */
interface HTMLOptionElement extends HTMLElement {
    /**
     * Establece o recupera el estado de una opción.
     */
    defaultSelected: boolean;
    disabled: boolean;
    /**
     * Recupera una referencia al formulario en el que está incrustado el objeto.
     */
    readonly form: HTMLFormElement | null;
    /**
     * Establece o recupera la posición ordinal de una opción en un cuadro de lista.
     */
    readonly index: number;
    /**
     * Establece o recupera un valor que puedes usar para implementar su propia funcionalidad de etiqueta para el objeto.
     */
    label: string;
    /**
     * Establece o recupera si la opción en el cuadro de lista es el elemento predeterminado.
     */
    selected: boolean;
    /**
     * Establece o recupera la cadena de texto especificada por la etiqueta option.
     */
    text: string;
    /**
     * Establece o recupera el valor que se devuelve al servidor cuando se envía el control de formulario.
     */
    value: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOptionElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOptionElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLOptionElement: {
    readonly prototype: HTMLOptionElement;
    new(): HTMLOptionElement;
};

/** HTMLOptionsCollection es una interfaz que representa una colección de elementos de opciones HTML (en el orden del documento) y ofrece métodos y propiedades para recorrer la lista y, opcionalmente, modificar sus elementos. Este tipo es devuelto únicamente por la propiedad "options" de select. */
interface HTMLOptionsCollection extends HTMLCollectionOf<HTMLOptionElement> {
    /**
     * Devuelve el número de elementos de la colección.
     *
     * Cuando se establece en un número menor, trunca el número de elementos option en el contenedor correspondiente.
     *
     * Cuando se establece en un número mayor, agrega nuevos elementos de opción en blanco a ese contenedor.
     */
    length: number;
    /**
     * Devuelve el índice del primer elemento seleccionado, si lo hay, o −1 si no hay ningún elemento seleccionado.
     *
     * Se puede configurar para cambiar la selección.
     */
    selectedIndex: number;
    /**
     * Inserta el elemento antes del nodo dado por before.
     *
     * El argumento anterior puede ser un número, en cuyo caso el elemento se inserta antes del elemento con ese número, o un elemento de la colección, en cuyo caso el elemento se inserta antes de ese elemento.
     *
     * Si before se omite, es null o un número fuera de rango, el elemento se agregará al final de la lista.
     *
     * Este método arrojará una DOMException "HierarchyRequestError" si el elemento es un antepasado del elemento en el que se va a insertar.
     */
    add(element: HTMLOptionElement | HTMLOptGroupElement, before?: HTMLElement | number | null): void;
    /**
     * Elimina el elemento con índice index desde la colección.
     */
    remove(index: number): void;
}

declare var HTMLOptionsCollection: {
    readonly prototype: HTMLOptionsCollection;
    new(): HTMLOptionsCollection;
};

interface HTMLOrSVGElement {
    readonly dataset: DOMStringMap;
    nonce?: string;
    tabIndex: number;
    blur(): void;
    focus(options?: FocusOptions): void;
}

/** Proporciona propiedades y métodos (más allá de los heredados de HTMLElement) para manipular el layout y la presentación de los elementos <output>. */
interface HTMLOutputElement extends HTMLElement {
    defaultValue: string;
    readonly form: HTMLFormElement | null;
    readonly htmlFor: DOMTokenList;
    readonly labels: NodeListOf<HTMLLabelElement>;
    name: string;
    /**
     * Returns the string "output".
     */
    readonly type: string;
    readonly validationMessage: string;
    readonly validity: ValidityState;
    /**
     * Returns the element's current value.
     *
     * Se puede configurar para cambiar el valor.
     */
    value: string;
    readonly willValidate: boolean;
    checkValidity(): boolean;
    reportValidity(): boolean;
    setCustomValidity(error: string): void;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOutputElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOutputElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLOutputElement: {
    readonly prototype: HTMLOutputElement;
    new(): HTMLOutputElement;
};

/** Proporciona propiedades especiales (más allá de las de la interfaz de objeto HTMLElement normal que hereda) para manipular elementos <p>. */
interface HTMLParagraphElement extends HTMLElement {
    /**
     * Establece o recupera cómo se alinea el objeto con el texto adyacente.
     */
    /** @deprecated */
    align: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLParagraphElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLParagraphElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLParagraphElement: {
    readonly prototype: HTMLParagraphElement;
    new(): HTMLParagraphElement;
};

/** Proporciona propiedades especiales (más allá de las de la interfaz de objeto HTMLElement normal que hereda) para manipular elementos <param>, que representan un par de clave y un valor que actúa como parámetro para un elemento <object>. */
interface HTMLParamElement extends HTMLElement {
    /**
     * Establece o recupera el nombre de un parámetro de entrada para un elemento.
     */
    name: string;
    /**
     * Establece o recupera el tipo de contenido del recurso designado por el atributo value.
     */
    /** @deprecated */
    type: string;
    /**
     * Establece o recupera el value de un parámetro de entrada para un elemento.
     */
    value: string;
    /**
     * Establece o recupera el tipo de datos del atributo value.
     */
    /** @deprecated */
    valueType: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLParamElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLParamElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLParamElement: {
    readonly prototype: HTMLParamElement;
    new(): HTMLParamElement;
};

/** Un elemento HTML <picture>. No implementa propiedades o métodos específicos. */
interface HTMLPictureElement extends HTMLElement {
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLPictureElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLPictureElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLPictureElement: {
    readonly prototype: HTMLPictureElement;
    new(): HTMLPictureElement;
};

/** Expone propiedades y métodos específicos (más allá de los de la interfaz HTMLElement que también tiene disponibles por herencia) para manipular un bloque de texto con formato previo (<pre>). */
interface HTMLPreElement extends HTMLElement {
    /**
     * Establece u obtiene un valor que puedes usar para implementar tu propia funcionalidad de ancho para el objeto.
     */
    /** @deprecated */
    width: number;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLPreElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLPreElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLPreElement: {
    readonly prototype: HTMLPreElement;
    new(): HTMLPreElement;
};

/** Provides special properties and methods (beyond the regular HTMLElement interface it also has available to it by inheritance) for manipulating the layout and presentation of <progress> elements. */
interface HTMLProgressElement extends HTMLElement {
    readonly labels: NodeListOf<HTMLLabelElement>;
    /**
     * Defines the maximum, or "done" value for a progress element.
     */
    max: number;
    /**
     * Returns the quotient of value/max when the value attribute is set (determinate progress bar), or -1 when the value attribute is missing (indeterminate progress bar).
     */
    readonly position: number;
    /**
     * Sets or gets the current value of a progress element. The value must be a non-negative number between 0 and the max value.
     */
    value: number;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLProgressElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLProgressElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLProgressElement: {
    readonly prototype: HTMLProgressElement;
    new(): HTMLProgressElement;
};

/** Provides special properties and methods (beyond the regular HTMLElement interface it also has available to it by inheritance) for manipulating quoting elements, like <blockquote> and <q>, but not the <cite> element. */
interface HTMLQuoteElement extends HTMLElement {
    /**
     * Establece o recupera información de referencia sobre el objeto.
     */
    cite: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLQuoteElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLQuoteElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLQuoteElement: {
    readonly prototype: HTMLQuoteElement;
    new(): HTMLQuoteElement;
};

/** HTML <script> exponen la interfaz HTMLScriptElement, que proporciona propiedades y métodos especiales para manipular el comportamiento y la ejecución de los elementos <script> (más allá de la interfaz HTMLElement heredada). */
interface HTMLScriptElement extends HTMLElement {
    async: boolean;
    /**
     * Establece o recupera el conjunto de caracteres utilizado para codificar el objeto.
     */
    /** @deprecated */
    charset: string;
    crossOrigin: string | null;
    /**
     * Sets or retrieves the status of the script.
     */
    defer: boolean;
    /**
     * Sets or retrieves the event for which the script is written.
     */
    /** @deprecated */
    event: string;
    /**
     * Sets or retrieves the object that is bound to the event script.
     */
    /** @deprecated */
    htmlFor: string;
    integrity: string;
    noModule: boolean;
    referrerPolicy: string;
    /**
     * Retrieves the URL to an external file that contains the source code or data.
     */
    src: string;
    /**
     * Recupera o establece el texto del objeto como una cadena.
     */
    text: string;
    /**
     * Sets or retrieves the MIME type for the associated scripting engine.
     */
    type: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLScriptElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLScriptElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLScriptElement: {
    readonly prototype: HTMLScriptElement;
    new(): HTMLScriptElement;
};

/** A <select> HTML Element. These elements also share all of the properties and methods of other HTML elements via the HTMLElement interface. */
interface HTMLSelectElement extends HTMLElement {
    autocomplete: string;
    disabled: boolean;
    /**
     * Recupera una referencia al formulario en el que está incrustado el objeto.
     */
    readonly form: HTMLFormElement | null;
    readonly labels: NodeListOf<HTMLLabelElement>;
    /**
     * Establece o recupera el número de objetos en una colección.
     */
    length: number;
    /**
     * Establece o recupera el valor booleano que indica si se pueden seleccionar varios elementos de una lista.
     */
    multiple: boolean;
    /**
     * Establece o recupera el name del objeto.
     */
    name: string;
    /**
     * Returns an HTMLOptionsCollection of the list of options.
     */
    readonly options: HTMLOptionsCollection;
    /**
     * Cuando está presente, marca un elemento que no se puede enviar sin un valor.
     */
    required: boolean;
    /**
     * Sets or retrieves the index of the selected option in a select object.
     */
    selectedIndex: number;
    readonly selectedOptions: HTMLCollectionOf<HTMLOptionElement>;
    /**
     * Sets or retrieves the number of rows in the list box.
     */
    size: number;
    /**
     * Retrieves the type of select control based on the value of the MULTIPLE attribute.
     */
    readonly type: string;
    /**
     * Devuelve el mensaje de error que se mostraría si el usuario envía el formulario, o una cadena vacía si no hay mensaje de error. También activa el mensaje de error estándar, como "este es un campo obligatorio". El resultado es que el usuario ve mensajes de validación sin enviarlos realmente.
     */
    readonly validationMessage: string;
    /**
     * Devuelve un objeto ValidityState que representa los estados de validez de un elemento.
     */
    readonly validity: ValidityState;
    /**
     * Establece o recupera el valor que se devuelve al servidor cuando se envía el control de formulario.
     */
    value: string;
    /**
     * Devuelve si un elemento se validará con éxito en función de las reglas y restricciones de validación de formularios.
     */
    readonly willValidate: boolean;
    /**
     * Adds an element to the areas, controlRange, or options collection.
     * @param element Variant of type Number that specifies the index position in the collection where the element is placed. If no value is given, the method places the element at the end of the collection.
     * @param before Variant of type Object that specifies an element to insert before, or null to append the object to the collection.
     */
    add(element: HTMLOptionElement | HTMLOptGroupElement, before?: HTMLElement | number | null): void;
    /**
     * Devuelve si un formulario se validará cuando se envíe, sin tener que enviarlo.
     */
    checkValidity(): boolean;
    /**
     * Recupera un objeto seleccionado o un objeto de una colección de opciones.
     * @param name Variant of type Number or String that specifies the object or collection to retrieve. If this parameter is an integer, it is the zero-based index of the object. If this parameter is a string, all objects with matching name or id properties are retrieved, and a collection is returned if more than one match is made.
     * @param index Variant of type Number that specifies the zero-based index of the object to retrieve when a collection is returned.
     */
    item(index: number): Element | null;
    /**
     * Recupera un objeto seleccionado o un objeto de una colección de opciones.
     * @param namedItem A String that specifies the name or id property of the object to retrieve. A collection is returned if more than one match is made.
     */
    namedItem(name: string): HTMLOptionElement | null;
    /**
     * Removes an element from the collection.
     * @param index Number that specifies the zero-based index of the element to remove from the collection.
     */
    remove(): void;
    remove(index: number): void;
    reportValidity(): boolean;
    /**
     * Establece un mensaje de error personalizado que se muestra cuando se envía un formulario.
     * @param error Establece un mensaje de error personalizado que se muestra cuando se envía un formulario.
     */
    setCustomValidity(error: string): void;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSelectElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSelectElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
    [name: number]: HTMLOptionElement | HTMLOptGroupElement;
}

declare var HTMLSelectElement: {
    readonly prototype: HTMLSelectElement;
    new(): HTMLSelectElement;
};

interface HTMLSlotElement extends HTMLElement {
    name: string;
    assignedElements(options?: AssignedNodesOptions): Element[];
    assignedNodes(options?: AssignedNodesOptions): Node[];
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSlotElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSlotElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLSlotElement: {
    readonly prototype: HTMLSlotElement;
    new(): HTMLSlotElement;
};

/** Provides special properties (beyond the regular HTMLElement object interface it also has available to it by inheritance) for manipulating <source> elements. */
interface HTMLSourceElement extends HTMLElement {
    /**
     * Gets or sets the intended media type of the media source.
     */
    media: string;
    sizes: string;
    /**
     * La dirección o URL de un recurso multimedia que se va a considerar.
     */
    src: string;
    srcset: string;
    /**
     * Gets or sets the MIME type of a media resource.
     */
    type: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSourceElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSourceElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLSourceElement: {
    readonly prototype: HTMLSourceElement;
    new(): HTMLSourceElement;
};

/** A <span> element and derives from the HTMLElement interface, but without implementing any additional properties or methods. */
interface HTMLSpanElement extends HTMLElement {
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSpanElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSpanElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLSpanElement: {
    readonly prototype: HTMLSpanElement;
    new(): HTMLSpanElement;
};

/** A <style> element. It inherits properties and methods from its parent, HTMLElement, and from LinkStyle. */
interface HTMLStyleElement extends HTMLElement, LinkStyle {
    /**
     * Establece o recupera el tipo de medio.
     */
    media: string;
    /**
     * Retrieves the CSS language in which the style sheet is written.
     */
    /** @deprecated */
    type: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLStyleElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLStyleElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLStyleElement: {
    readonly prototype: HTMLStyleElement;
    new(): HTMLStyleElement;
};

/** Special properties (beyond the regular HTMLElement interface it also has available to it by inheritance) for manipulating table caption elements. */
interface HTMLTableCaptionElement extends HTMLElement {
    /**
     * Sets or retrieves the alignment of the caption or legend.
     */
    /** @deprecated */
    align: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableCaptionElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableCaptionElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLTableCaptionElement: {
    readonly prototype: HTMLTableCaptionElement;
    new(): HTMLTableCaptionElement;
};

/** Provides special properties and methods (beyond the regular HTMLElement interface it also has available to it by inheritance) for manipulating the layout and presentation of table cells, either header or data cells, in an HTML document. */
interface HTMLTableCellElement extends HTMLElement {
    /**
     * Sets or retrieves abbreviated text for the object.
     */
    abbr: string;
    /**
     * Establece o recupera cómo se alinea el objeto con el texto adyacente.
     */
    /** @deprecated */
    align: string;
    /**
     * Sets or retrieves a comma-delimited list of conceptual categories associated with the object.
     */
    /** @deprecated */
    axis: string;
    /** @deprecated */
    bgColor: string;
    /**
     * Retrieves the position of the object in the cells collection of a row.
     */
    readonly cellIndex: number;
    /** @deprecated */
    ch: string;
    /** @deprecated */
    chOff: string;
    /**
     * Sets or retrieves the number columns in the table that the object should span.
     */
    colSpan: number;
    /**
     * Sets or retrieves a list of header cells that provide information for the object.
     */
    headers: string;
    /**
     * Establece o recupera la altura del objeto.
     */
    /** @deprecated */
    height: string;
    /**
     * Sets or retrieves whether the browser automatically performs wordwrap.
     */
    /** @deprecated */
    noWrap: boolean;
    /**
     * Sets or retrieves how many rows in a table the cell should span.
     */
    rowSpan: number;
    /**
     * Sets or retrieves the group of cells in a table to which the object's information applies.
     */
    scope: string;
    /** @deprecated */
    vAlign: string;
    /**
     * Establece o recupera el ancho del objeto.
     */
    /** @deprecated */
    width: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableCellElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableCellElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLTableCellElement: {
    readonly prototype: HTMLTableCellElement;
    new(): HTMLTableCellElement;
};

/** Provides special properties (beyond the HTMLElement interface it also has available to it inheritance) for manipulating single or grouped table column elements. */
interface HTMLTableColElement extends HTMLElement {
    /**
     * Sets or retrieves the alignment of the object relative to the display or table.
     */
    /** @deprecated */
    align: string;
    /** @deprecated */
    ch: string;
    /** @deprecated */
    chOff: string;
    /**
     * Sets or retrieves the number of columns in the group.
     */
    span: number;
    /** @deprecated */
    vAlign: string;
    /**
     * Establece o recupera el ancho del objeto.
     */
    /** @deprecated */
    width: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableColElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableColElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLTableColElement: {
    readonly prototype: HTMLTableColElement;
    new(): HTMLTableColElement;
};

/** Provides special properties and methods (beyond the regular HTMLElement object interface it also has available to it by inheritance) for manipulating the layout and presentation of tables in an HTML document. */
interface HTMLTableElement extends HTMLElement {
    /**
     * Establece o recupera un valor que indica la alineación de la tabla.
     */
    /** @deprecated */
    align: string;
    /** @deprecated */
    bgColor: string;
    /**
     * Establece o recupera el ancho del borde para dibujar alrededor del objeto.
     */
    /** @deprecated */
    border: string;
    /**
     * Retrieves the caption object of a table.
     */
    caption: HTMLTableCaptionElement | null;
    /**
     * Sets or retrieves the amount of space between the border of the cell and the content of the cell.
     */
    /** @deprecated */
    cellPadding: string;
    /**
     * Sets or retrieves the amount of space between cells in a table.
     */
    /** @deprecated */
    cellSpacing: string;
    /**
     * Sets or retrieves the way the border frame around the table is displayed.
     */
    /** @deprecated */
    frame: string;
    /**
     * Sets or retrieves the number of horizontal rows contained in the object.
     */
    readonly rows: HTMLCollectionOf<HTMLTableRowElement>;
    /**
     * Sets or retrieves which dividing lines (inner borders) are displayed.
     */
    /** @deprecated */
    rules: string;
    /**
     * Sets or retrieves a description and/or structure of the object.
     */
    /** @deprecated */
    summary: string;
    /**
     * Retrieves a collection of all tBody objects in the table. Objects in this collection are in source order.
     */
    readonly tBodies: HTMLCollectionOf<HTMLTableSectionElement>;
    /**
     * Retrieves the tFoot object of the table.
     */
    tFoot: HTMLTableSectionElement | null;
    /**
     * Retrieves the tHead object of the table.
     */
    tHead: HTMLTableSectionElement | null;
    /**
     * Establece o recupera el ancho del objeto.
     */
    /** @deprecated */
    width: string;
    /**
     * Creates an empty caption element in the table.
     */
    createCaption(): HTMLTableCaptionElement;
    /**
     * Creates an empty tBody element in the table.
     */
    createTBody(): HTMLTableSectionElement;
    /**
     * Creates an empty tFoot element in the table.
     */
    createTFoot(): HTMLTableSectionElement;
    /**
     * Returns the tHead element object if successful, or null otherwise.
     */
    createTHead(): HTMLTableSectionElement;
    /**
     * Deletes the caption element and its contents from the table.
     */
    deleteCaption(): void;
    /**
     * Removes the specified row (tr) from the element and from the rows collection.
     * @param index Number that specifies the zero-based position in the rows collection of the row to remove.
     */
    deleteRow(index: number): void;
    /**
     * Deletes the tFoot element and its contents from the table.
     */
    deleteTFoot(): void;
    /**
     * Deletes the tHead element and its contents from the table.
     */
    deleteTHead(): void;
    /**
     * Creates a new row (tr) in the table, and adds the row to the rows collection.
     * @param index Number that specifies where to insert the row in the rows collection. The default value is -1, which appends the new row to the end of the rows collection.
     */
    insertRow(index?: number): HTMLTableRowElement;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLTableElement: {
    readonly prototype: HTMLTableElement;
    new(): HTMLTableElement;
};

/** Provides special properties and methods (beyond the HTMLElement interface it also has available to it by inheritance) for manipulating the layout and presentation of rows in an HTML table. */
interface HTMLTableRowElement extends HTMLElement {
    /**
     * Establece o recupera cómo se alinea el objeto con el texto adyacente.
     */
    /** @deprecated */
    align: string;
    /** @deprecated */
    bgColor: string;
    /**
     * Retrieves a collection of all cells in the table row.
     */
    readonly cells: HTMLCollectionOf<HTMLTableCellElement>;
    /** @deprecated */
    ch: string;
    /** @deprecated */
    chOff: string;
    /**
     * Retrieves the position of the object in the rows collection for the table.
     */
    readonly rowIndex: number;
    /**
     * Retrieves the position of the object in the collection.
     */
    readonly sectionRowIndex: number;
    /** @deprecated */
    vAlign: string;
    /**
     * Removes the specified cell from the table row, as well as from the cells collection.
     * @param index Number that specifies the zero-based position of the cell to remove from the table row. If no value is provided, the last cell in the cells collection is deleted.
     */
    deleteCell(index: number): void;
    /**
     * Creates a new cell in the table row, and adds the cell to the cells collection.
     * @param index Number that specifies where to insert the cell in the tr. The default value is -1, which appends the new cell to the end of the cells collection.
     */
    insertCell(index?: number): HTMLTableCellElement;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableRowElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableRowElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLTableRowElement: {
    readonly prototype: HTMLTableRowElement;
    new(): HTMLTableRowElement;
};

/** Provides special properties and methods (beyond the HTMLElement interface it also has available to it by inheritance) for manipulating the layout and presentation of sections, that is headers, footers and bodies, in an HTML table. */
interface HTMLTableSectionElement extends HTMLElement {
    /**
     * Establece o recupera un valor que indica la alineación de la tabla.
     */
    /** @deprecated */
    align: string;
    /** @deprecated */
    ch: string;
    /** @deprecated */
    chOff: string;
    /**
     * Sets or retrieves the number of horizontal rows contained in the object.
     */
    readonly rows: HTMLCollectionOf<HTMLTableRowElement>;
    /** @deprecated */
    vAlign: string;
    /**
     * Removes the specified row (tr) from the element and from the rows collection.
     * @param index Number that specifies the zero-based position in the rows collection of the row to remove.
     */
    deleteRow(index: number): void;
    /**
     * Creates a new row (tr) in the table, and adds the row to the rows collection.
     * @param index Number that specifies where to insert the row in the rows collection. The default value is -1, which appends the new row to the end of the rows collection.
     */
    insertRow(index?: number): HTMLTableRowElement;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableSectionElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableSectionElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLTableSectionElement: {
    readonly prototype: HTMLTableSectionElement;
    new(): HTMLTableSectionElement;
};

/** Enables access to the contents of an HTML <template> element. */
interface HTMLTemplateElement extends HTMLElement {
    /**
     * Returns the template contents (a DocumentFragment).
     */
    readonly content: DocumentFragment;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTemplateElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTemplateElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLTemplateElement: {
    readonly prototype: HTMLTemplateElement;
    new(): HTMLTemplateElement;
};

/** Provides special properties and methods for manipulating the layout and presentation of <textarea> elements. */
interface HTMLTextAreaElement extends HTMLElement {
    autocomplete: string;
    /**
     * Establece o recupera el ancho del objeto.
     */
    cols: number;
    /**
     * Establece o recupera el contenido inicial del objeto.
     */
    defaultValue: string;
    dirName: string;
    disabled: boolean;
    /**
     * Recupera una referencia al formulario en el que está incrustado el objeto.
     */
    readonly form: HTMLFormElement | null;
    readonly labels: NodeListOf<HTMLLabelElement>;
    /**
     * Establece o recupera el número máximo de caracteres que el usuario puede ingresar en un control text.
     */
    maxLength: number;
    minLength: number;
    /**
     * Establece o recupera el name del objeto.
     */
    name: string;
    /**
     * Obtiene o establece una cadena de texto que se muestra en un campo input como una sugerencia o indicación para los usuarios como el formato o el tipo de información que deben ingresar. El texto aparece en un campo input hasta que el usuario se enfoca en el campo.
     */
    placeholder: string;
    /**
     * Sets or retrieves the value indicated whether the content of the object is read-only.
     */
    readOnly: boolean;
    /**
     * Cuando está presente, marca un elemento que no se puede enviar sin un valor.
     */
    required: boolean;
    /**
     * Sets or retrieves the number of horizontal rows contained in the object.
     */
    rows: number;
    selectionDirection: "forward" | "backward" | "none";
    /**
     * Obtiene o establece la posición final o el desplazamiento de una selección de texto.
     */
    selectionEnd: number;
    /**
     * Obtiene o establece la posición inicial o el desplazamiento de una selección de texto.
     */
    selectionStart: number;
    readonly textLength: number;
    /**
     * Retrieves the type of control.
     */
    readonly type: string;
    /**
     * Devuelve el mensaje de error que se mostraría si el usuario envía el formulario, o una cadena vacía si no hay mensaje de error. También activa el mensaje de error estándar, como "este es un campo obligatorio". El resultado es que el usuario ve mensajes de validación sin enviarlos realmente.
     */
    readonly validationMessage: string;
    /**
     * Devuelve un objeto ValidityState que representa los estados de validez de un elemento.
     */
    readonly validity: ValidityState;
    /**
     * Retrieves or sets the text in the entry field of the textArea element.
     */
    value: string;
    /**
     * Devuelve si un elemento se validará con éxito en función de las reglas y restricciones de validación de formularios.
     */
    readonly willValidate: boolean;
    /**
     * Sets or retrieves how to handle wordwrapping in the object.
     */
    wrap: string;
    /**
     * Devuelve si un formulario se validará cuando se envíe, sin tener que enviarlo.
     */
    checkValidity(): boolean;
    reportValidity(): boolean;
    /**
     * Highlights the input area of a form element.
     */
    select(): void;
    /**
     * Establece un mensaje de error personalizado que se muestra cuando se envía un formulario.
     * @param error Establece un mensaje de error personalizado que se muestra cuando se envía un formulario.
     */
    setCustomValidity(error: string): void;
    setRangeText(replacement: string): void;
    setRangeText(replacement: string, start: number, end: number, selectionMode?: SelectionMode): void;
    /**
     * Establece las posiciones inicial y final de una selección en un campo de texto.
     * @param start El desplazamiento en el campo de texto para el inicio de la selección.
     * @param end El desplazamiento en el campo de texto para el final de la selección.
     * @param direction La dirección en la que se realiza la selección.
     */
    setSelectionRange(start: number | null, end: number | null, direction?: "forward" | "backward" | "none"): void;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTextAreaElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTextAreaElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLTextAreaElement: {
    readonly prototype: HTMLTextAreaElement;
    new(): HTMLTextAreaElement;
};

/** Provides special properties (beyond the regular HTMLElement interface it also has available to it by inheritance) for manipulating <time> elements. */
interface HTMLTimeElement extends HTMLElement {
    dateTime: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTimeElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTimeElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLTimeElement: {
    readonly prototype: HTMLTimeElement;
    new(): HTMLTimeElement;
};

/** Contains the title for a document. This element inherits all of the properties and methods of the HTMLElement interface. */
interface HTMLTitleElement extends HTMLElement {
    /**
     * Recupera o establece el texto del objeto como una cadena.
     */
    text: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTitleElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTitleElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLTitleElement: {
    readonly prototype: HTMLTitleElement;
    new(): HTMLTitleElement;
};

/** The HTMLTrackElement */
interface HTMLTrackElement extends HTMLElement {
    default: boolean;
    kind: string;
    label: string;
    readonly readyState: number;
    src: string;
    srclang: string;
    /**
     * Returns the TextTrack object corresponding to the text track of the track element.
     */
    readonly track: TextTrack;
    readonly ERROR: number;
    readonly LOADED: number;
    readonly LOADING: number;
    readonly NONE: number;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTrackElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTrackElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLTrackElement: {
    readonly prototype: HTMLTrackElement;
    new(): HTMLTrackElement;
    readonly ERROR: number;
    readonly LOADED: number;
    readonly LOADING: number;
    readonly NONE: number;
};

/** Provides special properties (beyond those defined on the regular HTMLElement interface it also has available to it by inheritance) for manipulating unordered list elements. */
interface HTMLUListElement extends HTMLElement {
    /** @deprecated */
    compact: boolean;
    /** @deprecated */
    type: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLUListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLUListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLUListElement: {
    readonly prototype: HTMLUListElement;
    new(): HTMLUListElement;
};

/** An invalid HTML element and derives from the HTMLElement interface, but without implementing any additional properties or methods. */
interface HTMLUnknownElement extends HTMLElement {
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLUnknownElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLUnknownElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLUnknownElement: {
    readonly prototype: HTMLUnknownElement;
    new(): HTMLUnknownElement;
};

interface HTMLVideoElementEventMap extends HTMLMediaElementEventMap {
    "enterpictureinpicture": Event;
    "leavepictureinpicture": Event;
}

/** Provides special properties and methods for manipulating video objects. It also inherits properties and methods of HTMLMediaElement and HTMLElement. */
interface HTMLVideoElement extends HTMLMediaElement {
    disablePictureInPicture: boolean;
    /**
     * Gets or sets the height of the video element.
     */
    height: number;
    onenterpictureinpicture: ((this: HTMLVideoElement, ev: Event) => any) | null;
    onleavepictureinpicture: ((this: HTMLVideoElement, ev: Event) => any) | null;
    /**
     * Gets or sets the playsinline of the video element. for example, On iPhone, video elements will now be allowed to play inline, and will not automatically enter fullscreen mode when playback begins.
     */
    playsInline: boolean;
    /**
     * Gets or sets a URL of an image to display, for example, like a movie poster. This can be a still frame from the video, or another image if no video data is available.
     */
    poster: string;
    /**
     * Gets the intrinsic height of a video in CSS pixels, or zero if the dimensions are not known.
     */
    readonly videoHeight: number;
    /**
     * Gets the intrinsic width of a video in CSS pixels, or zero if the dimensions are not known.
     */
    readonly videoWidth: number;
    /**
     * Gets or sets the width of the video element.
     */
    width: number;
    getVideoPlaybackQuality(): VideoPlaybackQuality;
    requestPictureInPicture(): Promise<PictureInPictureWindow>;
    addEventListener<K extends keyof HTMLVideoElementEventMap>(type: K, listener: (this: HTMLVideoElement, ev: HTMLVideoElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLVideoElementEventMap>(type: K, listener: (this: HTMLVideoElement, ev: HTMLVideoElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var HTMLVideoElement: {
    readonly prototype: HTMLVideoElement;
    new(): HTMLVideoElement;
};

/** Events that fire when the fragment identifier of the URL has changed. */
interface HashChangeEvent extends Event {
    /**
     * Returns the URL of the session history entry that is now current.
     */
    readonly newURL: string;
    /**
     * Returns the URL of the session history entry that was previously current.
     */
    readonly oldURL: string;
}

declare var HashChangeEvent: {
    readonly prototype: HashChangeEvent;
    new(type: string, eventInitDict?: HashChangeEventInit): HashChangeEvent;
};

/** This Fetch API interface allows you to perform various actions on HTTP request and response headers. These actions include retrieving, setting, adding to, and removing. A Headers object has an associated header list, which is initially empty and consists of zero or more name and value pairs.  You can add to this using methods like append() (see Examples.) In all methods of this interface, header names are matched by case-insensitive byte sequence. */
interface Headers {
    append(name: string, value: string): void;
    delete(name: string): void;
    get(name: string): string | null;
    has(name: string): boolean;
    set(name: string, value: string): void;
    forEach(callbackfn: (value: string, key: string, parent: Headers) => void, thisArg?: any): void;
}

declare var Headers: {
    readonly prototype: Headers;
    new(init?: HeadersInit): Headers;
};

/** Allows manipulation of the browser session history, that is the pages visited in the tab or frame that the current page is loaded in. */
interface History {
    readonly length: number;
    scrollRestoration: ScrollRestoration;
    readonly state: any;
    back(): void;
    forward(): void;
    go(delta?: number): void;
    pushState(data: any, unused: string, url?: string | URL | null): void;
    replaceState(data: any, unused: string, url?: string | URL | null): void;
}

declare var History: {
    readonly prototype: History;
    new(): History;
};

/** This IndexedDB API interface represents a cursor for traversing or iterating over multiple records in a database. */
interface IDBCursor {
    /**
     * Returns the direction ("next", "nextunique", "prev" or "prevunique") of the cursor.
     */
    readonly direction: IDBCursorDirection;
    /**
     * Returns the key of the cursor. Throws a "InvalidStateError" DOMException if the cursor is advancing or is finished.
     */
    readonly key: IDBValidKey;
    /**
     * Returns the effective key of the cursor. Throws a "InvalidStateError" DOMException if the cursor is advancing or is finished.
     */
    readonly primaryKey: IDBValidKey;
    readonly request: IDBRequest;
    /**
     * Returns the IDBObjectStore or IDBIndex the cursor was opened from.
     */
    readonly source: IDBObjectStore | IDBIndex;
    /**
     * Advances the cursor through the next count records in range.
     */
    advance(count: number): void;
    /**
     * Advances the cursor to the next record in range.
     */
    continue(key?: IDBValidKey): void;
    /**
     * Advances the cursor to the next record in range matching or after key and primaryKey. Throws an "InvalidAccessError" DOMException if the source is not an index.
     */
    continuePrimaryKey(key: IDBValidKey, primaryKey: IDBValidKey): void;
    /**
     * Delete the record pointed at by the cursor with a new value.
     *
     * If successful, request's result will be undefined.
     */
    delete(): IDBRequest<undefined>;
    /**
     * Updated the record pointed at by the cursor with a new value.
     *
     * Throws a "DataError" DOMException if the effective object store uses in-line keys and the key would have changed.
     *
     * If successful, request's result will be the record's key.
     */
    update(value: any): IDBRequest<IDBValidKey>;
}

declare var IDBCursor: {
    readonly prototype: IDBCursor;
    new(): IDBCursor;
};

/** This IndexedDB API interface represents a cursor for traversing or iterating over multiple records in a database. It is the same as the IDBCursor, except that it includes the value property. */
interface IDBCursorWithValue extends IDBCursor {
    /**
     * Returns the cursor's current value.
     */
    readonly value: any;
}

declare var IDBCursorWithValue: {
    readonly prototype: IDBCursorWithValue;
    new(): IDBCursorWithValue;
};

interface IDBDatabaseEventMap {
    "abort": Event;
    "close": Event;
    "error": Event;
    "versionchange": IDBVersionChangeEvent;
}

/** This IndexedDB API interface provides a connection to a database; you can use an IDBDatabase object to open a transaction on your database then create, manipulate, and delete objects (data) in that database. The interface provides the only way to get and manage versions of the database. */
interface IDBDatabase extends EventTarget {
    /**
     * Returns the name of the database.
     */
    readonly name: string;
    /**
     * Returns a list of the names of object stores in the database.
     */
    readonly objectStoreNames: DOMStringList;
    onabort: ((this: IDBDatabase, ev: Event) => any) | null;
    onclose: ((this: IDBDatabase, ev: Event) => any) | null;
    onerror: ((this: IDBDatabase, ev: Event) => any) | null;
    onversionchange: ((this: IDBDatabase, ev: IDBVersionChangeEvent) => any) | null;
    /**
     * Returns the version of the database.
     */
    readonly version: number;
    /**
     * Closes the connection once all running transactions have finished.
     */
    close(): void;
    /**
     * Creates a new object store with the given name and options and returns a new IDBObjectStore.
     *
     * Throws a "InvalidStateError" DOMException if not called within an upgrade transaction.
     */
    createObjectStore(name: string, options?: IDBObjectStoreParameters): IDBObjectStore;
    /**
     * Deletes the object store with the given name.
     *
     * Throws a "InvalidStateError" DOMException if not called within an upgrade transaction.
     */
    deleteObjectStore(name: string): void;
    /**
     * Returns a new transaction with the given mode ("readonly" or "readwrite") and scope which can be a single object store name or an array of names.
     */
    transaction(storeNames: string | string[], mode?: IDBTransactionMode): IDBTransaction;
    addEventListener<K extends keyof IDBDatabaseEventMap>(type: K, listener: (this: IDBDatabase, ev: IDBDatabaseEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof IDBDatabaseEventMap>(type: K, listener: (this: IDBDatabase, ev: IDBDatabaseEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var IDBDatabase: {
    readonly prototype: IDBDatabase;
    new(): IDBDatabase;
};

/** In the following code snippet, we make a request to open a database, and include handlers for the success and error cases. For a full working example, see our To-do Notifications app (view example live.) */
interface IDBFactory {
    /**
     * Compares two values as keys. Returns -1 if key1 precedes key2, 1 if key2 precedes key1, and 0 if the keys are equal.
     *
     * Throws a "DataError" DOMException if either input is not a valid key.
     */
    cmp(first: any, second: any): number;
    databases(): Promise<IDBDatabaseInfo[]>;
    /**
     * Attempts to delete the named database. If the database already exists and there are open connections that don't close in response to a versionchange event, the request will be blocked until all they close. If the request is successful request's result will be null.
     */
    deleteDatabase(name: string): IDBOpenDBRequest;
    /**
     * Attempts to open a connection to the named database with the current version, or 1 if it does not already exist. If the request is successful request's result will be the connection.
     */
    open(name: string, version?: number): IDBOpenDBRequest;
}

declare var IDBFactory: {
    readonly prototype: IDBFactory;
    new(): IDBFactory;
};

/** IDBIndex interface of the IndexedDB API provides asynchronous access to an index in a database. An index is a kind of object store for looking up records in another object store, called the referenced object store. You use this interface to retrieve data. */
interface IDBIndex {
    readonly keyPath: string | string[];
    readonly multiEntry: boolean;
    /**
     * Returns the name of the index.
     */
    name: string;
    /**
     * Returns the IDBObjectStore the index belongs to.
     */
    readonly objectStore: IDBObjectStore;
    readonly unique: boolean;
    /**
     * Retrieves the number of records matching the given key or key range in query.
     *
     * If successful, request's result will be the count.
     */
    count(query?: IDBValidKey | IDBKeyRange): IDBRequest<number>;
    /**
     * Retrieves the value of the first record matching the given key or key range in query.
     *
     * If successful, request's result will be the value, or undefined if there was no matching record.
     */
    get(query: IDBValidKey | IDBKeyRange): IDBRequest<any>;
    /**
     * Retrieves the values of the records matching the given key or key range in query (up to count if given).
     *
     * If successful, request's result will be an Array of the values.
     */
    getAll(query?: IDBValidKey | IDBKeyRange | null, count?: number): IDBRequest<any[]>;
    /**
     * Retrieves the keys of records matching the given key or key range in query (up to count if given).
     *
     * If successful, request's result will be an Array of the keys.
     */
    getAllKeys(query?: IDBValidKey | IDBKeyRange | null, count?: number): IDBRequest<IDBValidKey[]>;
    /**
     * Retrieves the key of the first record matching the given key or key range in query.
     *
     * If successful, request's result will be the key, or undefined if there was no matching record.
     */
    getKey(query: IDBValidKey | IDBKeyRange): IDBRequest<IDBValidKey | undefined>;
    /**
     * Opens a cursor over the records matching query, ordered by direction. If query is null, all records in index are matched.
     *
     * If successful, request's result will be an IDBCursorWithValue, or null if there were no matching records.
     */
    openCursor(query?: IDBValidKey | IDBKeyRange | null, direction?: IDBCursorDirection): IDBRequest<IDBCursorWithValue | null>;
    /**
     * Opens a cursor with key only flag set over the records matching query, ordered by direction. If query is null, all records in index are matched.
     *
     * If successful, request's result will be an IDBCursor, or null if there were no matching records.
     */
    openKeyCursor(query?: IDBValidKey | IDBKeyRange | null, direction?: IDBCursorDirection): IDBRequest<IDBCursor | null>;
}

declare var IDBIndex: {
    readonly prototype: IDBIndex;
    new(): IDBIndex;
};

/** A key range can be a single value or a range with upper and lower bounds or endpoints. If the key range has both upper and lower bounds, then it is bounded; if it has no bounds, it is unbounded. A bounded key range can either be open (the endpoints are excluded) or closed (the endpoints are included). To retrieve all keys within a certain range, you can use the following code constructs: */
interface IDBKeyRange {
    /**
     * Returns lower bound, or undefined if none.
     */
    readonly lower: any;
    /**
     * Returns true if the lower open flag is set, and false otherwise.
     */
    readonly lowerOpen: boolean;
    /**
     * Returns upper bound, or undefined if none.
     */
    readonly upper: any;
    /**
     * Returns true if the upper open flag is set, and false otherwise.
     */
    readonly upperOpen: boolean;
    /**
     * Returns true if key is included in the range, and false otherwise.
     */
    includes(key: any): boolean;
}

declare var IDBKeyRange: {
    readonly prototype: IDBKeyRange;
    new(): IDBKeyRange;
    /**
     * Returns a new IDBKeyRange spanning from lower to upper. If lowerOpen is true, lower is not included in the range. If upperOpen is true, upper is not included in the range.
     */
    bound(lower: any, upper: any, lowerOpen?: boolean, upperOpen?: boolean): IDBKeyRange;
    /**
     * Returns a new IDBKeyRange starting at key with no upper bound. If open is true, key is not included in the range.
     */
    lowerBound(lower: any, open?: boolean): IDBKeyRange;
    /**
     * Returns a new IDBKeyRange spanning only key.
     */
    only(value: any): IDBKeyRange;
    /**
     * Returns a new IDBKeyRange with no lower bound and ending at key. If open is true, key is not included in the range.
     */
    upperBound(upper: any, open?: boolean): IDBKeyRange;
};

/** This example shows a variety of different uses of object stores, from updating the data structure with IDBObjectStore.createIndex inside an onupgradeneeded function, to adding a new item to our object store with IDBObjectStore.add. For a full working example, see our To-do Notifications app (view example live.) */
interface IDBObjectStore {
    /**
     * Returns true if the store has a key generator, and false otherwise.
     */
    readonly autoIncrement: boolean;
    /**
     * Returns a list of the names of indexes in the store.
     */
    readonly indexNames: DOMStringList;
    /**
     * Returns the key path of the store, or null if none.
     */
    readonly keyPath: string | string[];
    /**
     * Returns the name of the store.
     */
    name: string;
    /**
     * Returns the associated transaction.
     */
    readonly transaction: IDBTransaction;
    /**
     * Adds or updates a record in store with the given value and key.
     *
     * If the store uses in-line keys and key is specified a "DataError" DOMException will be thrown.
     *
     * If put() is used, any existing record with the key will be replaced. If add() is used, and if a record with the key already exists the request will fail, with request's error set to a "ConstraintError" DOMException.
     *
     * If successful, request's result will be the record's key.
     */
    add(value: any, key?: IDBValidKey): IDBRequest<IDBValidKey>;
    /**
     * Deletes all records in store.
     *
     * If successful, request's result will be undefined.
     */
    clear(): IDBRequest<undefined>;
    /**
     * Retrieves the number of records matching the given key or key range in query.
     *
     * If successful, request's result will be the count.
     */
    count(query?: IDBValidKey | IDBKeyRange): IDBRequest<number>;
    /**
     * Creates a new index in store with the given name, keyPath and options and returns a new IDBIndex. If the keyPath and options define constraints that cannot be satisfied with the data already in store the upgrade transaction will abort with a "ConstraintError" DOMException.
     *
     * Throws an "InvalidStateError" DOMException if not called within an upgrade transaction.
     */
    createIndex(name: string, keyPath: string | string[], options?: IDBIndexParameters): IDBIndex;
    /**
     * Deletes records in store with the given key or in the given key range in query.
     *
     * If successful, request's result will be undefined.
     */
    delete(query: IDBValidKey | IDBKeyRange): IDBRequest<undefined>;
    /**
     * Deletes the index in store with the given name.
     *
     * Throws an "InvalidStateError" DOMException if not called within an upgrade transaction.
     */
    deleteIndex(name: string): void;
    /**
     * Retrieves the value of the first record matching the given key or key range in query.
     *
     * If successful, request's result will be the value, or undefined if there was no matching record.
     */
    get(query: IDBValidKey | IDBKeyRange): IDBRequest<any>;
    /**
     * Retrieves the values of the records matching the given key or key range in query (up to count if given).
     *
     * If successful, request's result will be an Array of the values.
     */
    getAll(query?: IDBValidKey | IDBKeyRange | null, count?: number): IDBRequest<any[]>;
    /**
     * Retrieves the keys of records matching the given key or key range in query (up to count if given).
     *
     * If successful, request's result will be an Array of the keys.
     */
    getAllKeys(query?: IDBValidKey | IDBKeyRange | null, count?: number): IDBRequest<IDBValidKey[]>;
    /**
     * Retrieves the key of the first record matching the given key or key range in query.
     *
     * If successful, request's result will be the key, or undefined if there was no matching record.
     */
    getKey(query: IDBValidKey | IDBKeyRange): IDBRequest<IDBValidKey | undefined>;
    index(name: string): IDBIndex;
    /**
     * Opens a cursor over the records matching query, ordered by direction. If query is null, all records in store are matched.
     *
     * If successful, request's result will be an IDBCursorWithValue pointing at the first matching record, or null if there were no matching records.
     */
    openCursor(query?: IDBValidKey | IDBKeyRange | null, direction?: IDBCursorDirection): IDBRequest<IDBCursorWithValue | null>;
    /**
     * Opens a cursor with key only flag set over the records matching query, ordered by direction. If query is null, all records in store are matched.
     *
     * If successful, request's result will be an IDBCursor pointing at the first matching record, or null if there were no matching records.
     */
    openKeyCursor(query?: IDBValidKey | IDBKeyRange | null, direction?: IDBCursorDirection): IDBRequest<IDBCursor | null>;
    /**
     * Adds or updates a record in store with the given value and key.
     *
     * If the store uses in-line keys and key is specified a "DataError" DOMException will be thrown.
     *
     * If put() is used, any existing record with the key will be replaced. If add() is used, and if a record with the key already exists the request will fail, with request's error set to a "ConstraintError" DOMException.
     *
     * If successful, request's result will be the record's key.
     */
    put(value: any, key?: IDBValidKey): IDBRequest<IDBValidKey>;
}

declare var IDBObjectStore: {
    readonly prototype: IDBObjectStore;
    new(): IDBObjectStore;
};

interface IDBOpenDBRequestEventMap extends IDBRequestEventMap {
    "blocked": Event;
    "upgradeneeded": IDBVersionChangeEvent;
}

/** Also inherits methods from its parents IDBRequest and EventTarget. */
interface IDBOpenDBRequest extends IDBRequest<IDBDatabase> {
    onblocked: ((this: IDBOpenDBRequest, ev: Event) => any) | null;
    onupgradeneeded: ((this: IDBOpenDBRequest, ev: IDBVersionChangeEvent) => any) | null;
    addEventListener<K extends keyof IDBOpenDBRequestEventMap>(type: K, listener: (this: IDBOpenDBRequest, ev: IDBOpenDBRequestEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof IDBOpenDBRequestEventMap>(type: K, listener: (this: IDBOpenDBRequest, ev: IDBOpenDBRequestEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var IDBOpenDBRequest: {
    readonly prototype: IDBOpenDBRequest;
    new(): IDBOpenDBRequest;
};

interface IDBRequestEventMap {
    "error": Event;
    "success": Event;
}

/** The request object does not initially contain any information about the result of the operation, but once information becomes available, an event is fired on the request, and the information becomes available through the properties of the IDBRequest instance. */
interface IDBRequest<T = any> extends EventTarget {
    /**
     * When a request is completed, returns the error (a DOMException), or null if the request succeeded. Throws a "InvalidStateError" DOMException if the request is still pending.
     */
    readonly error: DOMException | null;
    onerror: ((this: IDBRequest<T>, ev: Event) => any) | null;
    onsuccess: ((this: IDBRequest<T>, ev: Event) => any) | null;
    /**
     * Returns "pending" until a request is complete, then returns "done".
     */
    readonly readyState: IDBRequestReadyState;
    /**
     * When a request is completed, returns the result, or undefined if the request failed. Throws a "InvalidStateError" DOMException if the request is still pending.
     */
    readonly result: T;
    /**
     * Returns the IDBObjectStore, IDBIndex, or IDBCursor the request was made against, or null if is was an open request.
     */
    readonly source: IDBObjectStore | IDBIndex | IDBCursor;
    /**
     * Returns the IDBTransaction the request was made within. If this as an open request, then it returns an upgrade transaction while it is running, or null otherwise.
     */
    readonly transaction: IDBTransaction | null;
    addEventListener<K extends keyof IDBRequestEventMap>(type: K, listener: (this: IDBRequest<T>, ev: IDBRequestEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof IDBRequestEventMap>(type: K, listener: (this: IDBRequest<T>, ev: IDBRequestEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var IDBRequest: {
    readonly prototype: IDBRequest;
    new(): IDBRequest;
};

interface IDBTransactionEventMap {
    "abort": Event;
    "complete": Event;
    "error": Event;
}

interface IDBTransaction extends EventTarget {
    /**
     * Returns the transaction's connection.
     */
    readonly db: IDBDatabase;
    /**
     * If the transaction was aborted, returns the error (a DOMException) providing the reason.
     */
    readonly error: DOMException | null;
    /**
     * Returns the mode the transaction was created with ("readonly" or "readwrite"), or "versionchange" for an upgrade transaction.
     */
    readonly mode: IDBTransactionMode;
    /**
     * Returns a list of the names of object stores in the transaction's scope. For an upgrade transaction this is all object stores in the database.
     */
    readonly objectStoreNames: DOMStringList;
    onabort: ((this: IDBTransaction, ev: Event) => any) | null;
    oncomplete: ((this: IDBTransaction, ev: Event) => any) | null;
    onerror: ((this: IDBTransaction, ev: Event) => any) | null;
    /**
     * Aborts the transaction. All pending requests will fail with a "AbortError" DOMException and all changes made to the database will be reverted.
     */
    abort(): void;
    commit(): void;
    /**
     * Returns an IDBObjectStore in the transaction's scope.
     */
    objectStore(name: string): IDBObjectStore;
    addEventListener<K extends keyof IDBTransactionEventMap>(type: K, listener: (this: IDBTransaction, ev: IDBTransactionEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof IDBTransactionEventMap>(type: K, listener: (this: IDBTransaction, ev: IDBTransactionEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var IDBTransaction: {
    readonly prototype: IDBTransaction;
    new(): IDBTransaction;
};

/** This IndexedDB API interface indicates that the version of the database has changed, as the result of an IDBOpenDBRequest.onupgradeneeded event handler function. */
interface IDBVersionChangeEvent extends Event {
    readonly newVersion: number | null;
    readonly oldVersion: number;
}

declare var IDBVersionChangeEvent: {
    readonly prototype: IDBVersionChangeEvent;
    new(type: string, eventInitDict?: IDBVersionChangeEventInit): IDBVersionChangeEvent;
};

/** The IIRFilterNode interface of the Web Audio API is a AudioNode processor which implements a general infinite impulse response (IIR)  filter; this type of filter can be used to implement tone control devices and graphic equalizers as well. It lets the parameters of the filter response be specified, so that it can be tuned as needed. */
interface IIRFilterNode extends AudioNode {
    getFrequencyResponse(frequencyHz: Float32Array, magResponse: Float32Array, phaseResponse: Float32Array): void;
}

declare var IIRFilterNode: {
    readonly prototype: IIRFilterNode;
    new(context: BaseAudioContext, options: IIRFilterOptions): IIRFilterNode;
};

interface IdleDeadline {
    readonly didTimeout: boolean;
    timeRemaining(): DOMHighResTimeStamp;
}

declare var IdleDeadline: {
    readonly prototype: IdleDeadline;
    new(): IdleDeadline;
};

interface ImageBitmap {
    /**
     * Returns the intrinsic height of the image, in CSS pixels.
     */
    readonly height: number;
    /**
     * Returns the intrinsic width of the image, in CSS pixels.
     */
    readonly width: number;
    /**
     * Releases imageBitmap's underlying bitmap data.
     */
    close(): void;
}

declare var ImageBitmap: {
    readonly prototype: ImageBitmap;
    new(): ImageBitmap;
};

interface ImageBitmapRenderingContext {
    /**
     * Returns the canvas element that the context is bound to.
     */
    readonly canvas: HTMLCanvasElement;
    /**
     * Transfers the underlying bitmap data from imageBitmap to context, and the bitmap becomes the contents of the canvas element to which context is bound.
     */
    transferFromImageBitmap(bitmap: ImageBitmap | null): void;
}

declare var ImageBitmapRenderingContext: {
    readonly prototype: ImageBitmapRenderingContext;
    new(): ImageBitmapRenderingContext;
};

/** The underlying pixel data of an area of a <canvas> element. It is created using the ImageData() constructor or creator methods on the CanvasRenderingContext2D object associated with a canvas: createImageData() and getImageData(). It can also be used to set a part of the canvas by using putImageData(). */
interface ImageData {
    /**
     * Returns the one-dimensional array containing the data in RGBA order, as integers in the range 0 to 255.
     */
    readonly data: Uint8ClampedArray;
    /**
     * Returns the actual dimensions of the data in the ImageData object, in pixels.
     */
    readonly height: number;
    /**
     * Returns the actual dimensions of the data in the ImageData object, in pixels.
     */
    readonly width: number;
}

declare var ImageData: {
    readonly prototype: ImageData;
    new(sw: number, sh: number, settings?: ImageDataSettings): ImageData;
    new(data: Uint8ClampedArray, sw: number, sh?: number, settings?: ImageDataSettings): ImageData;
};

interface InnerHTML {
    innerHTML: string;
}

interface InputEvent extends UIEvent {
    readonly data: string | null;
    readonly dataTransfer: DataTransfer | null;
    readonly inputType: string;
    readonly isComposing: boolean;
    getTargetRanges(): StaticRange[];
}

declare var InputEvent: {
    readonly prototype: InputEvent;
    new(type: string, eventInitDict?: InputEventInit): InputEvent;
};

/** provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport. */
interface IntersectionObserver {
    readonly root: Element | Document | null;
    readonly rootMargin: string;
    readonly thresholds: ReadonlyArray<number>;
    disconnect(): void;
    observe(target: Element): void;
    takeRecords(): IntersectionObserverEntry[];
    unobserve(target: Element): void;
}

declare var IntersectionObserver: {
    readonly prototype: IntersectionObserver;
    new(callback: IntersectionObserverCallback, options?: IntersectionObserverInit): IntersectionObserver;
};

/** This Intersection Observer API interface describes the intersection between the target element and its root container at a specific moment of transition. */
interface IntersectionObserverEntry {
    readonly boundingClientRect: DOMRectReadOnly;
    readonly intersectionRatio: number;
    readonly intersectionRect: DOMRectReadOnly;
    readonly isIntersecting: boolean;
    readonly rootBounds: DOMRectReadOnly | null;
    readonly target: Element;
    readonly time: DOMHighResTimeStamp;
}

declare var IntersectionObserverEntry: {
    readonly prototype: IntersectionObserverEntry;
    new(intersectionObserverEntryInit: IntersectionObserverEntryInit): IntersectionObserverEntry;
};

interface KHR_parallel_shader_compile {
    readonly COMPLETION_STATUS_KHR: GLenum;
}

/** KeyboardEvent objects describe a user interaction with the keyboard; each event describes a single interaction between the user and a key (or combination of a key with modifier keys) on the keyboard. */
interface KeyboardEvent extends UIEvent {
    readonly altKey: boolean;
    /** @deprecated */
    readonly charCode: number;
    readonly code: string;
    readonly ctrlKey: boolean;
    readonly isComposing: boolean;
    readonly key: string;
    /** @deprecated */
    readonly keyCode: number;
    readonly location: number;
    readonly metaKey: boolean;
    readonly repeat: boolean;
    readonly shiftKey: boolean;
    getModifierState(keyArg: string): boolean;
    readonly DOM_KEY_LOCATION_LEFT: number;
    readonly DOM_KEY_LOCATION_NUMPAD: number;
    readonly DOM_KEY_LOCATION_RIGHT: number;
    readonly DOM_KEY_LOCATION_STANDARD: number;
}

declare var KeyboardEvent: {
    readonly prototype: KeyboardEvent;
    new(type: string, eventInitDict?: KeyboardEventInit): KeyboardEvent;
    readonly DOM_KEY_LOCATION_LEFT: number;
    readonly DOM_KEY_LOCATION_NUMPAD: number;
    readonly DOM_KEY_LOCATION_RIGHT: number;
    readonly DOM_KEY_LOCATION_STANDARD: number;
};

interface KeyframeEffect extends AnimationEffect {
    composite: CompositeOperation;
    iterationComposite: IterationCompositeOperation;
    pseudoElement: string | null;
    target: Element | null;
    getKeyframes(): ComputedKeyframe[];
    setKeyframes(keyframes: Keyframe[] | PropertyIndexedKeyframes | null): void;
}

declare var KeyframeEffect: {
    readonly prototype: KeyframeEffect;
    new(target: Element | null, keyframes: Keyframe[] | PropertyIndexedKeyframes | null, options?: number | KeyframeEffectOptions): KeyframeEffect;
    new(source: KeyframeEffect): KeyframeEffect;
};

interface LinkStyle {
    readonly sheet: CSSStyleSheet | null;
}

/** The location (URL) of the object it is linked to. Changes done on it are reflected on the object it relates to. Both the Document and Window interface have such a linked Location, accessible via Document.location and Window.location respectively. */
interface Location {
    /**
     * Returns a DOMStringList object listing the origins of the ancestor browsing contexts, from the parent browsing context to the top-level browsing context.
     */
    readonly ancestorOrigins: DOMStringList;
    /**
     * Returns the Location object's URL's fragment (includes leading "#" if non-empty).
     *
     * Can be set, to navigate to the same URL with a changed fragment (ignores leading "#").
     */
    hash: string;
    /**
     * Returns the Location object's URL's host and port (if different from the default port for the scheme).
     *
     * Can be set, to navigate to the same URL with a changed host and port.
     */
    host: string;
    /**
     * Returns the Location object's URL's host.
     *
     * Can be set, to navigate to the same URL with a changed host.
     */
    hostname: string;
    /**
     * Returns the Location object's URL.
     *
     * Can be set, to navigate to the given URL.
     */
    href: string;
    toString(): string;
    /**
     * Returns the Location object's URL's origin.
     */
    readonly origin: string;
    /**
     * Returns the Location object's URL's path.
     *
     * Can be set, to navigate to the same URL with a changed path.
     */
    pathname: string;
    /**
     * Returns the Location object's URL's port.
     *
     * Can be set, to navigate to the same URL with a changed port.
     */
    port: string;
    /**
     * Returns the Location object's URL's scheme.
     *
     * Can be set, to navigate to the same URL with a changed scheme.
     */
    protocol: string;
    /**
     * Returns the Location object's URL's query (includes leading "?" if non-empty).
     *
     * Can be set, to navigate to the same URL with a changed query (ignores leading "?").
     */
    search: string;
    /**
     * Navigates to the given URL.
     */
    assign(url: string | URL): void;
    /**
     * Reloads the current page.
     */
    reload(): void;
    /**
     * Removes the current page from the session history and navigates to the given URL.
     */
    replace(url: string | URL): void;
}

declare var Location: {
    readonly prototype: Location;
    new(): Location;
};

interface MathMLElementEventMap extends ElementEventMap, DocumentAndElementEventHandlersEventMap, GlobalEventHandlersEventMap {
}

interface MathMLElement extends Element, DocumentAndElementEventHandlers, ElementCSSInlineStyle, GlobalEventHandlers, HTMLOrSVGElement {
    addEventListener<K extends keyof MathMLElementEventMap>(type: K, listener: (this: MathMLElement, ev: MathMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof MathMLElementEventMap>(type: K, listener: (this: MathMLElement, ev: MathMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var MathMLElement: {
    readonly prototype: MathMLElement;
    new(): MathMLElement;
};

interface MediaCapabilities {
    decodingInfo(configuration: MediaDecodingConfiguration): Promise<MediaCapabilitiesDecodingInfo>;
    encodingInfo(configuration: MediaEncodingConfiguration): Promise<MediaCapabilitiesEncodingInfo>;
}

declare var MediaCapabilities: {
    readonly prototype: MediaCapabilities;
    new(): MediaCapabilities;
};

/** The MediaDevicesInfo interface contains information that describes a single media input or output device. */
interface MediaDeviceInfo {
    readonly deviceId: string;
    readonly groupId: string;
    readonly kind: MediaDeviceKind;
    readonly label: string;
    toJSON(): any;
}

declare var MediaDeviceInfo: {
    readonly prototype: MediaDeviceInfo;
    new(): MediaDeviceInfo;
};

interface MediaDevicesEventMap {
    "devicechange": Event;
}

/** Provides access to connected media input devices like cameras and microphones, as well as screen sharing. In essence, it lets you obtain access to any hardware source of media data. */
interface MediaDevices extends EventTarget {
    ondevicechange: ((this: MediaDevices, ev: Event) => any) | null;
    enumerateDevices(): Promise<MediaDeviceInfo[]>;
    getDisplayMedia(constraints?: DisplayMediaStreamConstraints): Promise<MediaStream>;
    getSupportedConstraints(): MediaTrackSupportedConstraints;
    getUserMedia(constraints?: MediaStreamConstraints): Promise<MediaStream>;
    addEventListener<K extends keyof MediaDevicesEventMap>(type: K, listener: (this: MediaDevices, ev: MediaDevicesEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof MediaDevicesEventMap>(type: K, listener: (this: MediaDevices, ev: MediaDevicesEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var MediaDevices: {
    readonly prototype: MediaDevices;
    new(): MediaDevices;
};

/** A MediaElementSourceNode has no inputs and exactly one output, and is created using the AudioContext.createMediaElementSource method. The amount of channels in the output equals the number of channels of the audio referenced by the HTMLMediaElement used in the creation of the node, or is 1 if the HTMLMediaElement has no audio. */
interface MediaElementAudioSourceNode extends AudioNode {
    readonly mediaElement: HTMLMediaElement;
}

declare var MediaElementAudioSourceNode: {
    readonly prototype: MediaElementAudioSourceNode;
    new(context: AudioContext, options: MediaElementAudioSourceOptions): MediaElementAudioSourceNode;
};

interface MediaEncryptedEvent extends Event {
    readonly initData: ArrayBuffer | null;
    readonly initDataType: string;
}

declare var MediaEncryptedEvent: {
    readonly prototype: MediaEncryptedEvent;
    new(type: string, eventInitDict?: MediaEncryptedEventInit): MediaEncryptedEvent;
};

/** An error which occurred while handling media in an HTML media element based on HTMLMediaElement, such as <audio> or <video>. */
interface MediaError {
    readonly code: number;
    readonly message: string;
    readonly MEDIA_ERR_ABORTED: number;
    readonly MEDIA_ERR_DECODE: number;
    readonly MEDIA_ERR_NETWORK: number;
    readonly MEDIA_ERR_SRC_NOT_SUPPORTED: number;
}

declare var MediaError: {
    readonly prototype: MediaError;
    new(): MediaError;
    readonly MEDIA_ERR_ABORTED: number;
    readonly MEDIA_ERR_DECODE: number;
    readonly MEDIA_ERR_NETWORK: number;
    readonly MEDIA_ERR_SRC_NOT_SUPPORTED: number;
};

/** This EncryptedMediaExtensions API interface contains the content and related data when the content decryption module generates a message for the session. */
interface MediaKeyMessageEvent extends Event {
    readonly message: ArrayBuffer;
    readonly messageType: MediaKeyMessageType;
}

declare var MediaKeyMessageEvent: {
    readonly prototype: MediaKeyMessageEvent;
    new(type: string, eventInitDict: MediaKeyMessageEventInit): MediaKeyMessageEvent;
};

interface MediaKeySessionEventMap {
    "keystatuseschange": Event;
    "message": MediaKeyMessageEvent;
}

/** This EncryptedMediaExtensions API interface represents a context for message exchange with a content decryption module (CDM). */
interface MediaKeySession extends EventTarget {
    readonly closed: Promise<undefined>;
    readonly expiration: number;
    readonly keyStatuses: MediaKeyStatusMap;
    onkeystatuseschange: ((this: MediaKeySession, ev: Event) => any) | null;
    onmessage: ((this: MediaKeySession, ev: MediaKeyMessageEvent) => any) | null;
    readonly sessionId: string;
    close(): Promise<void>;
    generateRequest(initDataType: string, initData: BufferSource): Promise<void>;
    load(sessionId: string): Promise<boolean>;
    remove(): Promise<void>;
    update(response: BufferSource): Promise<void>;
    addEventListener<K extends keyof MediaKeySessionEventMap>(type: K, listener: (this: MediaKeySession, ev: MediaKeySessionEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof MediaKeySessionEventMap>(type: K, listener: (this: MediaKeySession, ev: MediaKeySessionEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var MediaKeySession: {
    readonly prototype: MediaKeySession;
    new(): MediaKeySession;
};

/** This EncryptedMediaExtensions API interface is a read-only map of media key statuses by key IDs. */
interface MediaKeyStatusMap {
    readonly size: number;
    get(keyId: BufferSource): MediaKeyStatus | undefined;
    has(keyId: BufferSource): boolean;
    forEach(callbackfn: (value: MediaKeyStatus, key: BufferSource, parent: MediaKeyStatusMap) => void, thisArg?: any): void;
}

declare var MediaKeyStatusMap: {
    readonly prototype: MediaKeyStatusMap;
    new(): MediaKeyStatusMap;
};

/** This EncryptedMediaExtensions API interface provides access to a Key System for decryption and/or a content protection provider. You can request an instance of this object using the Navigator.requestMediaKeySystemAccess method. */
interface MediaKeySystemAccess {
    readonly keySystem: string;
    createMediaKeys(): Promise<MediaKeys>;
    getConfiguration(): MediaKeySystemConfiguration;
}

declare var MediaKeySystemAccess: {
    readonly prototype: MediaKeySystemAccess;
    new(): MediaKeySystemAccess;
};

/** This EncryptedMediaExtensions API interface the represents a set of keys that an associated HTMLMediaElement can use for decryption of media data during playback. */
interface MediaKeys {
    createSession(sessionType?: MediaKeySessionType): MediaKeySession;
    setServerCertificate(serverCertificate: BufferSource): Promise<boolean>;
}

declare var MediaKeys: {
    readonly prototype: MediaKeys;
    new(): MediaKeys;
};

interface MediaList {
    readonly length: number;
    mediaText: string;
    toString(): string;
    appendMedium(medium: string): void;
    deleteMedium(medium: string): void;
    item(index: number): string | null;
    [index: number]: string;
}

declare var MediaList: {
    readonly prototype: MediaList;
    new(): MediaList;
};

interface MediaMetadata {
    album: string;
    artist: string;
    artwork: ReadonlyArray<MediaImage>;
    title: string;
}

declare var MediaMetadata: {
    readonly prototype: MediaMetadata;
    new(init?: MediaMetadataInit): MediaMetadata;
};

interface MediaQueryListEventMap {
    "change": MediaQueryListEvent;
}

/** Stores information on a media query applied to a document, and handles sending notifications to listeners when the media query state change (i.e. when the media query test starts or stops evaluating to true). */
interface MediaQueryList extends EventTarget {
    readonly matches: boolean;
    readonly media: string;
    onchange: ((this: MediaQueryList, ev: MediaQueryListEvent) => any) | null;
    /** @deprecated */
    addListener(callback: ((this: MediaQueryList, ev: MediaQueryListEvent) => any) | null): void;
    /** @deprecated */
    removeListener(callback: ((this: MediaQueryList, ev: MediaQueryListEvent) => any) | null): void;
    addEventListener<K extends keyof MediaQueryListEventMap>(type: K, listener: (this: MediaQueryList, ev: MediaQueryListEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof MediaQueryListEventMap>(type: K, listener: (this: MediaQueryList, ev: MediaQueryListEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var MediaQueryList: {
    readonly prototype: MediaQueryList;
    new(): MediaQueryList;
};

interface MediaQueryListEvent extends Event {
    readonly matches: boolean;
    readonly media: string;
}

declare var MediaQueryListEvent: {
    readonly prototype: MediaQueryListEvent;
    new(type: string, eventInitDict?: MediaQueryListEventInit): MediaQueryListEvent;
};

interface MediaRecorderEventMap {
    "dataavailable": BlobEvent;
    "error": Event;
    "pause": Event;
    "resume": Event;
    "start": Event;
    "stop": Event;
}

interface MediaRecorder extends EventTarget {
    readonly audioBitsPerSecond: number;
    readonly mimeType: string;
    ondataavailable: ((this: MediaRecorder, ev: BlobEvent) => any) | null;
    onerror: ((this: MediaRecorder, ev: Event) => any) | null;
    onpause: ((this: MediaRecorder, ev: Event) => any) | null;
    onresume: ((this: MediaRecorder, ev: Event) => any) | null;
    onstart: ((this: MediaRecorder, ev: Event) => any) | null;
    onstop: ((this: MediaRecorder, ev: Event) => any) | null;
    readonly state: RecordingState;
    readonly stream: MediaStream;
    readonly videoBitsPerSecond: number;
    pause(): void;
    requestData(): void;
    resume(): void;
    start(timeslice?: number): void;
    stop(): void;
    addEventListener<K extends keyof MediaRecorderEventMap>(type: K, listener: (this: MediaRecorder, ev: MediaRecorderEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof MediaRecorderEventMap>(type: K, listener: (this: MediaRecorder, ev: MediaRecorderEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var MediaRecorder: {
    readonly prototype: MediaRecorder;
    new(stream: MediaStream, options?: MediaRecorderOptions): MediaRecorder;
    isTypeSupported(type: string): boolean;
};

interface MediaRecorderErrorEvent extends Event {
    readonly error: DOMException;
}

declare var MediaRecorderErrorEvent: {
    readonly prototype: MediaRecorderErrorEvent;
    new(type: string, eventInitDict: MediaRecorderErrorEventInit): MediaRecorderErrorEvent;
};

interface MediaSession {
    metadata: MediaMetadata | null;
    playbackState: MediaSessionPlaybackState;
    setActionHandler(action: MediaSessionAction, handler: MediaSessionActionHandler | null): void;
    setPositionState(state?: MediaPositionState): void;
}

declare var MediaSession: {
    readonly prototype: MediaSession;
    new(): MediaSession;
};

interface MediaSourceEventMap {
    "sourceclose": Event;
    "sourceended": Event;
    "sourceopen": Event;
}

/** This Media Source Extensions API interface represents a source of media data for an HTMLMediaElement object. A MediaSource object can be attached to a HTMLMediaElement to be played in the user agent. */
interface MediaSource extends EventTarget {
    readonly activeSourceBuffers: SourceBufferList;
    duration: number;
    onsourceclose: ((this: MediaSource, ev: Event) => any) | null;
    onsourceended: ((this: MediaSource, ev: Event) => any) | null;
    onsourceopen: ((this: MediaSource, ev: Event) => any) | null;
    readonly readyState: ReadyState;
    readonly sourceBuffers: SourceBufferList;
    addSourceBuffer(type: string): SourceBuffer;
    clearLiveSeekableRange(): void;
    endOfStream(error?: EndOfStreamError): void;
    removeSourceBuffer(sourceBuffer: SourceBuffer): void;
    setLiveSeekableRange(start: number, end: number): void;
    addEventListener<K extends keyof MediaSourceEventMap>(type: K, listener: (this: MediaSource, ev: MediaSourceEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof MediaSourceEventMap>(type: K, listener: (this: MediaSource, ev: MediaSourceEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var MediaSource: {
    readonly prototype: MediaSource;
    new(): MediaSource;
    isTypeSupported(type: string): boolean;
};

interface MediaStreamEventMap {
    "addtrack": MediaStreamTrackEvent;
    "removetrack": MediaStreamTrackEvent;
}

/** A stream of media content. A stream consists of several tracks such as video or audio tracks. Each track is specified as an instance of MediaStreamTrack. */
interface MediaStream extends EventTarget {
    readonly active: boolean;
    readonly id: string;
    onaddtrack: ((this: MediaStream, ev: MediaStreamTrackEvent) => any) | null;
    onremovetrack: ((this: MediaStream, ev: MediaStreamTrackEvent) => any) | null;
    addTrack(track: MediaStreamTrack): void;
    clone(): MediaStream;
    getAudioTracks(): MediaStreamTrack[];
    getTrackById(trackId: string): MediaStreamTrack | null;
    getTracks(): MediaStreamTrack[];
    getVideoTracks(): MediaStreamTrack[];
    removeTrack(track: MediaStreamTrack): void;
    addEventListener<K extends keyof MediaStreamEventMap>(type: K, listener: (this: MediaStream, ev: MediaStreamEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof MediaStreamEventMap>(type: K, listener: (this: MediaStream, ev: MediaStreamEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var MediaStream: {
    readonly prototype: MediaStream;
    new(): MediaStream;
    new(stream: MediaStream): MediaStream;
    new(tracks: MediaStreamTrack[]): MediaStream;
};

interface MediaStreamAudioDestinationNode extends AudioNode {
    readonly stream: MediaStream;
}

declare var MediaStreamAudioDestinationNode: {
    readonly prototype: MediaStreamAudioDestinationNode;
    new(context: AudioContext, options?: AudioNodeOptions): MediaStreamAudioDestinationNode;
};

/** A type of AudioNode which operates as an audio source whose media is received from a MediaStream obtained using the WebRTC or Media Capture and Streams APIs. */
interface MediaStreamAudioSourceNode extends AudioNode {
    readonly mediaStream: MediaStream;
}

declare var MediaStreamAudioSourceNode: {
    readonly prototype: MediaStreamAudioSourceNode;
    new(context: AudioContext, options: MediaStreamAudioSourceOptions): MediaStreamAudioSourceNode;
};

interface MediaStreamTrackEventMap {
    "ended": Event;
    "mute": Event;
    "unmute": Event;
}

/** A single media track within a stream; typically, these are audio or video tracks, but other track types may exist as well. */
interface MediaStreamTrack extends EventTarget {
    contentHint: string;
    enabled: boolean;
    readonly id: string;
    readonly kind: string;
    readonly label: string;
    readonly muted: boolean;
    onended: ((this: MediaStreamTrack, ev: Event) => any) | null;
    onmute: ((this: MediaStreamTrack, ev: Event) => any) | null;
    onunmute: ((this: MediaStreamTrack, ev: Event) => any) | null;
    readonly readyState: MediaStreamTrackState;
    applyConstraints(constraints?: MediaTrackConstraints): Promise<void>;
    clone(): MediaStreamTrack;
    getCapabilities(): MediaTrackCapabilities;
    getConstraints(): MediaTrackConstraints;
    getSettings(): MediaTrackSettings;
    stop(): void;
    addEventListener<K extends keyof MediaStreamTrackEventMap>(type: K, listener: (this: MediaStreamTrack, ev: MediaStreamTrackEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof MediaStreamTrackEventMap>(type: K, listener: (this: MediaStreamTrack, ev: MediaStreamTrackEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var MediaStreamTrack: {
    readonly prototype: MediaStreamTrack;
    new(): MediaStreamTrack;
};

/** Events which indicate that a MediaStream has had tracks added to or removed from the stream through calls to Media Stream API methods. These events are sent to the stream when these changes occur. */
interface MediaStreamTrackEvent extends Event {
    readonly track: MediaStreamTrack;
}

declare var MediaStreamTrackEvent: {
    readonly prototype: MediaStreamTrackEvent;
    new(type: string, eventInitDict: MediaStreamTrackEventInit): MediaStreamTrackEvent;
};

/** This Channel Messaging API interface allows us to create a new message channel and send data through it via its two MessagePort properties. */
interface MessageChannel {
    /**
     * Returns the first MessagePort object.
     */
    readonly port1: MessagePort;
    /**
     * Returns the second MessagePort object.
     */
    readonly port2: MessagePort;
}

declare var MessageChannel: {
    readonly prototype: MessageChannel;
    new(): MessageChannel;
};

/** A message received by a target object. */
interface MessageEvent<T = any> extends Event {
    /**
     * Returns the data of the message.
     */
    readonly data: T;
    /**
     * Returns the last event ID string, for server-sent events.
     */
    readonly lastEventId: string;
    /**
     * Returns the origin of the message, for server-sent events and cross-document messaging.
     */
    readonly origin: string;
    /**
     * Returns the MessagePort array sent with the message, for cross-document messaging and channel messaging.
     */
    readonly ports: ReadonlyArray<MessagePort>;
    /**
     * Returns the WindowProxy of the source window, for cross-document messaging, and the MessagePort being attached, in the connect event fired at SharedWorkerGlobalScope objects.
     */
    readonly source: MessageEventSource | null;
    /** @deprecated */
    initMessageEvent(type: string, bubbles?: boolean, cancelable?: boolean, data?: any, origin?: string, lastEventId?: string, source?: MessageEventSource | null, ports?: MessagePort[]): void;
}

declare var MessageEvent: {
    readonly prototype: MessageEvent;
    new<T>(type: string, eventInitDict?: MessageEventInit<T>): MessageEvent<T>;
};

interface MessagePortEventMap {
    "message": MessageEvent;
    "messageerror": MessageEvent;
}

/** This Channel Messaging API interface represents one of the two ports of a MessageChannel, allowing messages to be sent from one port and listening out for them arriving at the other. */
interface MessagePort extends EventTarget {
    onmessage: ((this: MessagePort, ev: MessageEvent) => any) | null;
    onmessageerror: ((this: MessagePort, ev: MessageEvent) => any) | null;
    /**
     * Disconnects the port, so that it is no longer active.
     */
    close(): void;
    /**
     * Posts a message through the channel. Objects listed in transfer are transferred, not just cloned, meaning that they are no longer usable on the sending side.
     *
     * Throws a "DataCloneError" DOMException if transfer contains duplicate objects or port, or if message could not be cloned.
     */
    postMessage(message: any, transfer: Transferable[]): void;
    postMessage(message: any, options?: PostMessageOptions): void;
    /**
     * Begins dispatching messages received on the port.
     */
    start(): void;
    addEventListener<K extends keyof MessagePortEventMap>(type: K, listener: (this: MessagePort, ev: MessagePortEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof MessagePortEventMap>(type: K, listener: (this: MessagePort, ev: MessagePortEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var MessagePort: {
    readonly prototype: MessagePort;
    new(): MessagePort;
};

/** Proporciona información sobre un tipo MIME asociado con un complemento en particular. NavigatorPlugins.mimeTypes devuelve un arreglo de este objeto. */
/** @deprecated */
interface MimeType {
    /**
     * Returns the MIME type's description.
     */
    /** @deprecated */
    readonly description: undefined;
    /**
     * Returns the Plugin object that implements this MIME type.
     */
    /** @deprecated */
    readonly enabledPlugin: undefined;
    /**
     * Returns the MIME type's typical file extensions, in a comma-separated list.
     */
    /** @deprecated */
    readonly suffixes: undefined;
    /**
     * Returns the MIME type.
     */
    /** @deprecated */
    readonly type: undefined;
}

/** @deprecated */
declare var MimeType: {
    readonly prototype: MimeType;
    new(): MimeType;
};

/** Returns an array of MimeType instances, each of which contains information about a supported browser plugins. This object is returned by NavigatorPlugins.mimeTypes. */
/** @deprecated */
interface MimeTypeArray {
    /** @deprecated */
    readonly length: number;
    /** @deprecated */
    item(index: number): any;
    /** @deprecated */
    namedItem(name: string): any;
    [index: number]: any;
}

/** @deprecated */
declare var MimeTypeArray: {
    readonly prototype: MimeTypeArray;
    new(): MimeTypeArray;
};

/** Events that occur due to the user interacting with a pointing device (such as a mouse). Common events using this interface include click, dblclick, mouseup, mousedown. */
interface MouseEvent extends UIEvent {
    readonly altKey: boolean;
    readonly button: number;
    readonly buttons: number;
    readonly clientX: number;
    readonly clientY: number;
    readonly ctrlKey: boolean;
    readonly metaKey: boolean;
    readonly movementX: number;
    readonly movementY: number;
    readonly offsetX: number;
    readonly offsetY: number;
    readonly pageX: number;
    readonly pageY: number;
    readonly relatedTarget: EventTarget | null;
    readonly screenX: number;
    readonly screenY: number;
    readonly shiftKey: boolean;
    readonly x: number;
    readonly y: number;
    getModifierState(keyArg: string): boolean;
    /** @deprecated */
    initMouseEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, ctrlKeyArg: boolean, altKeyArg: boolean, shiftKeyArg: boolean, metaKeyArg: boolean, buttonArg: number, relatedTargetArg: EventTarget | null): void;
}

declare var MouseEvent: {
    readonly prototype: MouseEvent;
    new(type: string, eventInitDict?: MouseEventInit): MouseEvent;
};

/** Provides event properties that are specific to modifications to the Document Object Model (DOM) hierarchy and nodes.
 * @deprecated DOM4 [DOM] provides a new mechanism using a MutationObserver interface which addresses the use cases that mutation events solve, but in a more performant manner. Thus, this specification describes mutation events for reference and completeness of legacy behavior, but deprecates the use of the MutationEvent interface. */
interface MutationEvent extends Event {
    readonly attrChange: number;
    readonly attrName: string;
    readonly newValue: string;
    readonly prevValue: string;
    readonly relatedNode: Node | null;
    initMutationEvent(typeArg: string, bubblesArg?: boolean, cancelableArg?: boolean, relatedNodeArg?: Node | null, prevValueArg?: string, newValueArg?: string, attrNameArg?: string, attrChangeArg?: number): void;
    readonly ADDITION: number;
    readonly MODIFICATION: number;
    readonly REMOVAL: number;
}

declare var MutationEvent: {
    readonly prototype: MutationEvent;
    new(): MutationEvent;
    readonly ADDITION: number;
    readonly MODIFICATION: number;
    readonly REMOVAL: number;
};

/** Provides the ability to watch for changes being made to the DOM tree. It is designed as a replacement for the older Mutation Events feature which was part of the DOM3 Events specification. */
interface MutationObserver {
    /**
     * Stops observer from observing any mutations. Until the observe() method is used again, observer's callback will not be invoked.
     */
    disconnect(): void;
    /**
     * Instructs the user agent to observe a given target (a node) and report any mutations based on the criteria given by options (an object).
     *
     * The options argument allows for setting mutation observation options via object members.
     */
    observe(target: Node, options?: MutationObserverInit): void;
    /**
     * Empties the record queue and returns what was in there.
     */
    takeRecords(): MutationRecord[];
}

declare var MutationObserver: {
    readonly prototype: MutationObserver;
    new(callback: MutationCallback): MutationObserver;
};

/** A MutationRecord represents an individual DOM mutation. It is the object that is passed to MutationObserver's callback. */
interface MutationRecord {
    /**
     * Return the nodes added and removed respectively.
     */
    readonly addedNodes: NodeList;
    /**
     * Returns the local name of the changed attribute, and null otherwise.
     */
    readonly attributeName: string | null;
    /**
     * Returns the namespace of the changed attribute, and null otherwise.
     */
    readonly attributeNamespace: string | null;
    /**
     * Return the previous and next sibling respectively of the added or removed nodes, and null otherwise.
     */
    readonly nextSibling: Node | null;
    /**
     * The return value depends on type. For "attributes", it is the value of the changed attribute before the change. For "characterData", it is the data of the changed node before the change. For "childList", it is null.
     */
    readonly oldValue: string | null;
    /**
     * Return the previous and next sibling respectively of the added or removed nodes, and null otherwise.
     */
    readonly previousSibling: Node | null;
    /**
     * Return the nodes added and removed respectively.
     */
    readonly removedNodes: NodeList;
    /**
     * Returns the node the mutation affected, depending on the type. For "attributes", it is the element whose attribute changed. For "characterData", it is the CharacterData node. For "childList", it is the node whose children changed.
     */
    readonly target: Node;
    /**
     * Returns "attributes" if it was an attribute mutation. "characterData" if it was a mutation to a CharacterData node. And "childList" if it was a mutation to the tree of nodes.
     */
    readonly type: MutationRecordType;
}

declare var MutationRecord: {
    readonly prototype: MutationRecord;
    new(): MutationRecord;
};

/** A collection of Attr objects. Objects inside a NamedNodeMap are not in any particular order, unlike NodeList, although they may be accessed by an index as in an array. */
interface NamedNodeMap {
    readonly length: number;
    getNamedItem(qualifiedName: string): Attr | null;
    getNamedItemNS(namespace: string | null, localName: string): Attr | null;
    item(index: number): Attr | null;
    removeNamedItem(qualifiedName: string): Attr;
    removeNamedItemNS(namespace: string | null, localName: string): Attr;
    setNamedItem(attr: Attr): Attr | null;
    setNamedItemNS(attr: Attr): Attr | null;
    [index: number]: Attr;
}

declare var NamedNodeMap: {
    readonly prototype: NamedNodeMap;
    new(): NamedNodeMap;
};

/** The state and the identity of the user agent. It allows scripts to query it and to register themselves to carry on some activities. */
interface Navigator extends NavigatorAutomationInformation, NavigatorConcurrentHardware, NavigatorContentUtils, NavigatorCookies, NavigatorID, NavigatorLanguage, NavigatorNetworkInformation, NavigatorOnLine, NavigatorPlugins, NavigatorStorage {
    readonly clipboard: Clipboard;
    readonly credentials: CredentialsContainer;
    readonly doNotTrack: string | null;
    readonly geolocation: Geolocation;
    readonly maxTouchPoints: number;
    readonly mediaCapabilities: MediaCapabilities;
    readonly mediaDevices: MediaDevices;
    readonly mediaSession: MediaSession;
    readonly permissions: Permissions;
    readonly pointerEnabled: boolean;
    readonly serviceWorker: ServiceWorkerContainer;
    getGamepads(): (Gamepad | null)[];
    requestMediaKeySystemAccess(keySystem: string, supportedConfigurations: MediaKeySystemConfiguration[]): Promise<MediaKeySystemAccess>;
    sendBeacon(url: string | URL, data?: BodyInit | null): boolean;
    share(data?: ShareData): Promise<void>;
    vibrate(pattern: VibratePattern): boolean;
}

declare var Navigator: {
    readonly prototype: Navigator;
    new(): Navigator;
};

interface NavigatorAutomationInformation {
    readonly webdriver: boolean;
}

interface NavigatorConcurrentHardware {
    readonly hardwareConcurrency: number;
}

interface NavigatorContentUtils {
    registerProtocolHandler(scheme: string, url: string | URL): void;
}

interface NavigatorCookies {
    readonly cookieEnabled: boolean;
}

interface NavigatorID {
    /** @deprecated */
    readonly appCodeName: string;
    /** @deprecated */
    readonly appName: string;
    /** @deprecated */
    readonly appVersion: string;
    /** @deprecated */
    readonly platform: string;
    /** @deprecated */
    readonly product: string;
    /** @deprecated */
    readonly productSub: string;
    readonly userAgent: string;
    readonly vendor: string;
    /** @deprecated */
    readonly vendorSub: string;
}

interface NavigatorLanguage {
    readonly language: string;
    readonly languages: ReadonlyArray<string>;
}

interface NavigatorNetworkInformation {
    readonly connection: NetworkInformation;
}

interface NavigatorOnLine {
    readonly onLine: boolean;
}

/** @deprecated */
interface NavigatorPlugins {
    /** @deprecated */
    readonly mimeTypes: MimeTypeArray;
    /** @deprecated */
    readonly plugins: PluginArray;
    /** @deprecated */
    javaEnabled(): boolean;
}

interface NavigatorStorage {
    readonly storage: StorageManager;
}

interface NetworkInformation extends EventTarget {
    readonly type: ConnectionType;
}

declare var NetworkInformation: {
    readonly prototype: NetworkInformation;
    new(): NetworkInformation;
};

/** Node is an interface from which a number of DOM API object types inherit. It allows those types to be treated similarly; for example, inheriting the same set of methods, or being tested in the same way. */
interface Node extends EventTarget {
    /**
     * Returns node's node document's document base URL.
     */
    readonly baseURI: string;
    /**
     * Returns the children.
     */
    readonly childNodes: NodeListOf<ChildNode & Node>;
    /**
     * Returns the first child.
     */
    readonly firstChild: (ChildNode & Node) | null;
    /**
     * Returns true if node is connected and false otherwise.
     */
    readonly isConnected: boolean;
    /**
     * Returns the last child.
     */
    readonly lastChild: (ChildNode & Node) | null;
    /**
     * Returns the next sibling.
     */
    readonly nextSibling: (ChildNode & Node) | null;
    /**
     * Returns a string appropriate for the type of node.
     */
    readonly nodeName: string;
    /**
     * Returns the type of node.
     */
    readonly nodeType: number;
    nodeValue: string | null;
    /**
     * Returns the node document. Returns null for documents.
     */
    readonly ownerDocument: Document | null;
    /**
     * Returns the parent element.
     */
    readonly parentElement: HTMLElement | null;
    /**
     * Returns the parent.
     */
    readonly parentNode: (Node & ParentNode) | null;
    /**
     * Returns the previous sibling.
     */
    readonly previousSibling: (ChildNode & Node) | null;
    textContent: string | null;
    appendChild<T extends Node>(node: T): T;
    /**
     * Devuelve una copia de node. Si deep es true, la copia también incluye los descendientes del nodo.
     */
    cloneNode(deep?: boolean): Node;
    /**
     * Returns a bitmask indicating the position of other relative to node.
     */
    compareDocumentPosition(other: Node): number;
    /**
     * Returns true if other is an inclusive descendant of node, and false otherwise.
     */
    contains(other: Node | null): boolean;
    /**
     * Returns node's root.
     */
    getRootNode(options?: GetRootNodeOptions): Node;
    /**
     * Returns whether node has children.
     */
    hasChildNodes(): boolean;
    insertBefore<T extends Node>(node: T, child: Node | null): T;
    isDefaultNamespace(namespace: string | null): boolean;
    /**
     * Returns whether node and otherNode have the same properties.
     */
    isEqualNode(otherNode: Node | null): boolean;
    isSameNode(otherNode: Node | null): boolean;
    lookupNamespaceURI(prefix: string | null): string | null;
    lookupPrefix(namespace: string | null): string | null;
    /**
     * Removes empty exclusive Text nodes and concatenates the data of remaining contiguous exclusive Text nodes into the first of their nodes.
     */
    normalize(): void;
    removeChild<T extends Node>(child: T): T;
    replaceChild<T extends Node>(node: Node, child: T): T;
    readonly ATTRIBUTE_NODE: number;
    /**
     * node is a CDATASection node.
     */
    readonly CDATA_SECTION_NODE: number;
    /**
     * node is a Comment node.
     */
    readonly COMMENT_NODE: number;
    /**
     * node is a DocumentFragment node.
     */
    readonly DOCUMENT_FRAGMENT_NODE: number;
    /**
     * node is a document.
     */
    readonly DOCUMENT_NODE: number;
    /**
     * Se establece cuando el otro es un descendiente de nodo.
     */
    readonly DOCUMENT_POSITION_CONTAINED_BY: number;
    /**
     * Se establece cuando el otro es un antepasado de nodo.
     */
    readonly DOCUMENT_POSITION_CONTAINS: number;
    /**
     * Se establece cuando el nodo y otros no están en el mismo árbol.
     */
    readonly DOCUMENT_POSITION_DISCONNECTED: number;
    /**
     * Se establece cuando otro es el siguiente nodo.
     */
    readonly DOCUMENT_POSITION_FOLLOWING: number;
    readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
    /**
     * Se establece cuando otro es el nodo anterior.
     */
    readonly DOCUMENT_POSITION_PRECEDING: number;
    /**
     * node es un doctype.
     */
    readonly DOCUMENT_TYPE_NODE: number;
    /**
     * node es un element.
     */
    readonly ELEMENT_NODE: number;
    readonly ENTITY_NODE: number;
    readonly ENTITY_REFERENCE_NODE: number;
    readonly NOTATION_NODE: number;
    /**
     * node es un node ProcessingInstruction.
     */
    readonly PROCESSING_INSTRUCTION_NODE: number;
    /**
     * node is a Text node.
     */
    readonly TEXT_NODE: number;
}

declare var Node: {
    readonly prototype: Node;
    new(): Node;
    readonly ATTRIBUTE_NODE: number;
    /**
     * node is a CDATASection node.
     */
    readonly CDATA_SECTION_NODE: number;
    /**
     * node is a Comment node.
     */
    readonly COMMENT_NODE: number;
    /**
     * node is a DocumentFragment node.
     */
    readonly DOCUMENT_FRAGMENT_NODE: number;
    /**
     * node is a document.
     */
    readonly DOCUMENT_NODE: number;
    /**
     * Se establece cuando el otro es un descendiente de nodo.
     */
    readonly DOCUMENT_POSITION_CONTAINED_BY: number;
    /**
     * Se establece cuando el otro es un antepasado de nodo.
     */
    readonly DOCUMENT_POSITION_CONTAINS: number;
    /**
     * Se establece cuando el nodo y otros no están en el mismo árbol.
     */
    readonly DOCUMENT_POSITION_DISCONNECTED: number;
    /**
     * Se establece cuando otro es el siguiente nodo.
     */
    readonly DOCUMENT_POSITION_FOLLOWING: number;
    readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
    /**
     * Se establece cuando otro es el nodo anterior.
     */
    readonly DOCUMENT_POSITION_PRECEDING: number;
    /**
     * node es un doctype.
     */
    readonly DOCUMENT_TYPE_NODE: number;
    /**
     * node es un element.
     */
    readonly ELEMENT_NODE: number;
    readonly ENTITY_NODE: number;
    readonly ENTITY_REFERENCE_NODE: number;
    readonly NOTATION_NODE: number;
    /**
     * node es un node ProcessingInstruction.
     */
    readonly PROCESSING_INSTRUCTION_NODE: number;
    /**
     * node is a Text node.
     */
    readonly TEXT_NODE: number;
};

/** An iterator over the members of a list of the nodes in a subtree of the DOM. The nodes will be returned in document order. */
interface NodeIterator {
    readonly filter: NodeFilter | null;
    readonly pointerBeforeReferenceNode: boolean;
    readonly referenceNode: Node;
    readonly root: Node;
    readonly whatToShow: number;
    /** @deprecated */
    detach(): void;
    nextNode(): Node | null;
    previousNode(): Node | null;
}

declare var NodeIterator: {
    readonly prototype: NodeIterator;
    new(): NodeIterator;
};

/** NodeList objects are collections of nodes, usually returned by properties such as Node.childNodes and methods such as document.querySelectorAll(). */
interface NodeList {
    /**
     * Returns the number of nodes in the collection.
     */
    readonly length: number;
    /**
     * Returns the node with index index from the collection. The nodes are sorted in tree order.
     */
    item(index: number): Node | null;
    /**
     * Performs the specified action for each node in an list.
     * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the list.
     * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     */
    forEach(callbackfn: (value: Node, key: number, parent: NodeList) => void, thisArg?: any): void;
    [index: number]: Node;
}

declare var NodeList: {
    readonly prototype: NodeList;
    new(): NodeList;
};

interface NodeListOf<TNode extends Node> extends NodeList {
    item(index: number): TNode;
    /**
     * Performs the specified action for each node in an list.
     * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the list.
     * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     */
    forEach(callbackfn: (value: TNode, key: number, parent: NodeListOf<TNode>) => void, thisArg?: any): void;
    [index: number]: TNode;
}

interface NonDocumentTypeChildNode {
    /**
     * Returns the first following sibling that is an element, and null otherwise.
     */
    readonly nextElementSibling: Element | null;
    /**
     * Returns the first preceding sibling that is an element, and null otherwise.
     */
    readonly previousElementSibling: Element | null;
}

interface NonElementParentNode {
    /**
     * Returns the first element within node's descendants whose ID is elementId.
     */
    getElementById(elementId: string): Element | null;
}

interface NotificationEventMap {
    "click": Event;
    "close": Event;
    "error": Event;
    "show": Event;
}

/** This Notifications API interface is used to configure and display desktop notifications to the user. */
interface Notification extends EventTarget {
    readonly body: string;
    readonly data: any;
    readonly dir: NotificationDirection;
    readonly icon: string;
    readonly lang: string;
    onclick: ((this: Notification, ev: Event) => any) | null;
    onclose: ((this: Notification, ev: Event) => any) | null;
    onerror: ((this: Notification, ev: Event) => any) | null;
    onshow: ((this: Notification, ev: Event) => any) | null;
    readonly tag: string;
    readonly title: string;
    close(): void;
    addEventListener<K extends keyof NotificationEventMap>(type: K, listener: (this: Notification, ev: NotificationEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof NotificationEventMap>(type: K, listener: (this: Notification, ev: NotificationEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var Notification: {
    readonly prototype: Notification;
    new(title: string, options?: NotificationOptions): Notification;
    readonly permission: NotificationPermission;
    requestPermission(deprecatedCallback?: NotificationPermissionCallback): Promise<NotificationPermission>;
};

/** The OES_element_index_uint extension is part of the WebGL API and adds support for gl.UNSIGNED_INT types to WebGLRenderingContext.drawElements(). */
interface OES_element_index_uint {
}

interface OES_fbo_render_mipmap {
}

/** The OES_standard_derivatives extension is part of the WebGL API and adds the GLSL derivative functions dFdx, dFdy, and fwidth. */
interface OES_standard_derivatives {
    readonly FRAGMENT_SHADER_DERIVATIVE_HINT_OES: GLenum;
}

/** The OES_texture_float extension is part of the WebGL API and exposes floating-point pixel types for textures. */
interface OES_texture_float {
}

/** The OES_texture_float_linear extension is part of the WebGL API and allows linear filtering with floating-point pixel types for textures. */
interface OES_texture_float_linear {
}

/** The OES_texture_half_float extension is part of the WebGL API and adds texture formats with 16- (aka half float) and 32-bit floating-point components. */
interface OES_texture_half_float {
    readonly HALF_FLOAT_OES: GLenum;
}

/** The OES_texture_half_float_linear extension is part of the WebGL API and allows linear filtering with half floating-point pixel types for textures. */
interface OES_texture_half_float_linear {
}

interface OES_vertex_array_object {
    bindVertexArrayOES(arrayObject: WebGLVertexArrayObjectOES | null): void;
    createVertexArrayOES(): WebGLVertexArrayObjectOES | null;
    deleteVertexArrayOES(arrayObject: WebGLVertexArrayObjectOES | null): void;
    isVertexArrayOES(arrayObject: WebGLVertexArrayObjectOES | null): GLboolean;
    readonly VERTEX_ARRAY_BINDING_OES: GLenum;
}

interface OVR_multiview2 {
    framebufferTextureMultiviewOVR(target: GLenum, attachment: GLenum, texture: WebGLTexture | null, level: GLint, baseViewIndex: GLint, numViews: GLsizei): void;
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_BASE_VIEW_INDEX_OVR: GLenum;
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_NUM_VIEWS_OVR: GLenum;
    readonly FRAMEBUFFER_INCOMPLETE_VIEW_TARGETS_OVR: GLenum;
    readonly MAX_VIEWS_OVR: GLenum;
}

/** The Web Audio API OfflineAudioCompletionEvent interface represents events that occur when the processing of an OfflineAudioContext is terminated. The complete event implements this interface. */
interface OfflineAudioCompletionEvent extends Event {
    readonly renderedBuffer: AudioBuffer;
}

declare var OfflineAudioCompletionEvent: {
    readonly prototype: OfflineAudioCompletionEvent;
    new(type: string, eventInitDict: OfflineAudioCompletionEventInit): OfflineAudioCompletionEvent;
};

interface OfflineAudioContextEventMap extends BaseAudioContextEventMap {
    "complete": OfflineAudioCompletionEvent;
}

/** An AudioContext interface representing an audio-processing graph built from linked together AudioNodes. In contrast with a standard AudioContext, an OfflineAudioContext doesn't render the audio to the device hardware; instead, it generates it, as fast as it can, and outputs the result to an AudioBuffer. */
interface OfflineAudioContext extends BaseAudioContext {
    readonly length: number;
    oncomplete: ((this: OfflineAudioContext, ev: OfflineAudioCompletionEvent) => any) | null;
    resume(): Promise<void>;
    startRendering(): Promise<AudioBuffer>;
    suspend(suspendTime: number): Promise<void>;
    addEventListener<K extends keyof OfflineAudioContextEventMap>(type: K, listener: (this: OfflineAudioContext, ev: OfflineAudioContextEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof OfflineAudioContextEventMap>(type: K, listener: (this: OfflineAudioContext, ev: OfflineAudioContextEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var OfflineAudioContext: {
    readonly prototype: OfflineAudioContext;
    new(contextOptions: OfflineAudioContextOptions): OfflineAudioContext;
    new(numberOfChannels: number, length: number, sampleRate: number): OfflineAudioContext;
};

/** The OscillatorNode interface represents a periodic waveform, such as a sine wave. It is an AudioScheduledSourceNode audio-processing module that causes a specified frequency of a given wave to be created—in effect, a constant tone. */
interface OscillatorNode extends AudioScheduledSourceNode {
    readonly detune: AudioParam;
    readonly frequency: AudioParam;
    type: OscillatorType;
    setPeriodicWave(periodicWave: PeriodicWave): void;
    addEventListener<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: OscillatorNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: OscillatorNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var OscillatorNode: {
    readonly prototype: OscillatorNode;
    new(context: BaseAudioContext, options?: OscillatorOptions): OscillatorNode;
};

interface OverconstrainedError extends Error {
    readonly constraint: string;
}

declare var OverconstrainedError: {
    readonly prototype: OverconstrainedError;
    new(constraint: string, message?: string): OverconstrainedError;
};

/** The PageTransitionEvent is fired when a document is being loaded or unloaded. */
interface PageTransitionEvent extends Event {
    /**
     * For the pageshow event, returns false if the page is newly being loaded (and the load event will fire). Otherwise, returns true.
     *
     * For the pagehide event, returns false if the page is going away for the last time. Otherwise, returns true, meaning that (if nothing conspires to make the page unsalvageable) the page might be reused if the user navigates back to this page.
     *
     * Things that can cause the page to be unsalvageable include:
     *
     * The user agent decided to not keep the Document alive in a session history entry after unload
     * Having iframes that are not salvageable
     * Active WebSocket objects
     * Aborting a Document
     */
    readonly persisted: boolean;
}

declare var PageTransitionEvent: {
    readonly prototype: PageTransitionEvent;
    new(type: string, eventInitDict?: PageTransitionEventInit): PageTransitionEvent;
};

/** A PannerNode always has exactly one input and one output: the input can be mono or stereo but the output is always stereo (2 channels); you can't have panning effects without at least two audio channels! */
interface PannerNode extends AudioNode {
    coneInnerAngle: number;
    coneOuterAngle: number;
    coneOuterGain: number;
    distanceModel: DistanceModelType;
    maxDistance: number;
    readonly orientationX: AudioParam;
    readonly orientationY: AudioParam;
    readonly orientationZ: AudioParam;
    panningModel: PanningModelType;
    readonly positionX: AudioParam;
    readonly positionY: AudioParam;
    readonly positionZ: AudioParam;
    refDistance: number;
    rolloffFactor: number;
    /** @deprecated */
    setOrientation(x: number, y: number, z: number): void;
    /** @deprecated */
    setPosition(x: number, y: number, z: number): void;
}

declare var PannerNode: {
    readonly prototype: PannerNode;
    new(context: BaseAudioContext, options?: PannerOptions): PannerNode;
};

interface ParentNode {
    readonly childElementCount: number;
    /**
     * Returns the child elements.
     */
    readonly children: HTMLCollection;
    /**
     * Returns the first child that is an element, and null otherwise.
     */
    readonly firstElementChild: Element | null;
    /**
     * Returns the last child that is an element, and null otherwise.
     */
    readonly lastElementChild: Element | null;
    /**
     * Inserts nodes after the last child of node, while replacing strings in nodes with equivalent Text nodes.
     *
     * Lanza una DOMException "HierarchyRequestError" si se violan las restricciones del árbol de nodos.
     */
    append(...nodes: (Node | string)[]): void;
    /**
     * Inserts nodes before the first child of node, while replacing strings in nodes with equivalent Text nodes.
     *
     * Lanza una DOMException "HierarchyRequestError" si se violan las restricciones del árbol de nodos.
     */
    prepend(...nodes: (Node | string)[]): void;
    /**
     * Devuelve el primer elemento que es descendiente de un nodo que
 * coincide con los selectores.
     */
    querySelector<K extends keyof HTMLElementTagNameMap>(selectors: K): HTMLElementTagNameMap[K] | null;
    querySelector<K extends keyof SVGElementTagNameMap>(selectors: K): SVGElementTagNameMap[K] | null;
    querySelector<E extends Element = Element>(selectors: string): E | null;
    /**
     * Devuelve todos los elementos descendientes del nodo que
 * coinciden con los selectores.
     */
    querySelectorAll<K extends keyof HTMLElementTagNameMap>(selectors: K): NodeListOf<HTMLElementTagNameMap[K]>;
    querySelectorAll<K extends keyof SVGElementTagNameMap>(selectors: K): NodeListOf<SVGElementTagNameMap[K]>;
    querySelectorAll<E extends Element = Element>(selectors: string): NodeListOf<E>;
    /**
     * Replace all children of node with nodes, while replacing strings in nodes with equivalent Text nodes.
     *
     * Lanza una DOMException "HierarchyRequestError" si se violan las restricciones del árbol de nodos.
     */
    replaceChildren(...nodes: (Node | string)[]): void;
}

/** This Canvas 2D API interface is used to declare a path that can then be used on a CanvasRenderingContext2D object. The path methods of the CanvasRenderingContext2D interface are also present on this interface, which gives you the convenience of being able to retain and replay your path whenever desired. */
interface Path2D extends CanvasPath {
    /**
     * Adds to the path the path given by the argument.
     */
    addPath(path: Path2D, transform?: DOMMatrix2DInit): void;
}

declare var Path2D: {
    readonly prototype: Path2D;
    new(path?: Path2D | string): Path2D;
};

/** This Payment Request API interface is used to store shipping or payment address information. */
/** @deprecated */
interface PaymentAddress {
    /** @deprecated */
    readonly addressLine: ReadonlyArray<string>;
    /** @deprecated */
    readonly city: string;
    /** @deprecated */
    readonly country: string;
    /** @deprecated */
    readonly dependentLocality: string;
    /** @deprecated */
    readonly organization: string;
    /** @deprecated */
    readonly phone: string;
    /** @deprecated */
    readonly postalCode: string;
    /** @deprecated */
    readonly recipient: string;
    /** @deprecated */
    readonly region: string;
    /** @deprecated */
    readonly sortingCode: string;
    /** @deprecated */
    toJSON(): any;
}

/** @deprecated */
declare var PaymentAddress: {
    readonly prototype: PaymentAddress;
    new(): PaymentAddress;
};

interface PaymentMethodChangeEvent extends PaymentRequestUpdateEvent {
    readonly methodDetails: any;
    readonly methodName: string;
}

declare var PaymentMethodChangeEvent: {
    readonly prototype: PaymentMethodChangeEvent;
    new(type: string, eventInitDict?: PaymentMethodChangeEventInit): PaymentMethodChangeEvent;
};

interface PaymentRequestEventMap {
    "paymentmethodchange": Event;
}

/** This Payment Request API interface is the primary access point into the API, and lets web content and apps accept payments from the end user. */
interface PaymentRequest extends EventTarget {
    readonly id: string;
    onpaymentmethodchange: ((this: PaymentRequest, ev: Event) => any) | null;
    abort(): Promise<void>;
    canMakePayment(): Promise<boolean>;
    show(detailsPromise?: PaymentDetailsUpdate | PromiseLike<PaymentDetailsUpdate>): Promise<PaymentResponse>;
    addEventListener<K extends keyof PaymentRequestEventMap>(type: K, listener: (this: PaymentRequest, ev: PaymentRequestEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof PaymentRequestEventMap>(type: K, listener: (this: PaymentRequest, ev: PaymentRequestEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var PaymentRequest: {
    readonly prototype: PaymentRequest;
    new(methodData: PaymentMethodData[], details: PaymentDetailsInit): PaymentRequest;
};

/** This Payment Request API interface enables a web page to update the details of a PaymentRequest in response to a user action. */
interface PaymentRequestUpdateEvent extends Event {
    updateWith(detailsPromise: PaymentDetailsUpdate | PromiseLike<PaymentDetailsUpdate>): void;
}

declare var PaymentRequestUpdateEvent: {
    readonly prototype: PaymentRequestUpdateEvent;
    new(type: string, eventInitDict?: PaymentRequestUpdateEventInit): PaymentRequestUpdateEvent;
};

/** This Payment Request API interface is returned after a user selects a payment method and approves a payment request. */
interface PaymentResponse extends EventTarget {
    readonly details: any;
    readonly methodName: string;
    readonly requestId: string;
    complete(result?: PaymentComplete): Promise<void>;
    retry(errorFields?: PaymentValidationErrors): Promise<void>;
    toJSON(): any;
}

declare var PaymentResponse: {
    readonly prototype: PaymentResponse;
    new(): PaymentResponse;
};

interface PerformanceEventMap {
    "resourcetimingbufferfull": Event;
}

/** Provides access to performance-related information for the current page. It's part of the High Resolution Time API, but is enhanced by the Performance Timeline API, the Navigation Timing API, the User Timing API, and the Resource Timing API. */
interface Performance extends EventTarget {
    /** @deprecated */
    readonly navigation: PerformanceNavigation;
    onresourcetimingbufferfull: ((this: Performance, ev: Event) => any) | null;
    readonly timeOrigin: DOMHighResTimeStamp;
    /** @deprecated */
    readonly timing: PerformanceTiming;
    clearMarks(markName?: string): void;
    clearMeasures(measureName?: string): void;
    clearResourceTimings(): void;
    getEntries(): PerformanceEntryList;
    getEntriesByName(name: string, type?: string): PerformanceEntryList;
    getEntriesByType(type: string): PerformanceEntryList;
    mark(markName: string, markOptions?: PerformanceMarkOptions): PerformanceMark;
    measure(measureName: string, startOrMeasureOptions?: string | PerformanceMeasureOptions, endMark?: string): PerformanceMeasure;
    now(): DOMHighResTimeStamp;
    setResourceTimingBufferSize(maxSize: number): void;
    toJSON(): any;
    addEventListener<K extends keyof PerformanceEventMap>(type: K, listener: (this: Performance, ev: PerformanceEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof PerformanceEventMap>(type: K, listener: (this: Performance, ev: PerformanceEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var Performance: {
    readonly prototype: Performance;
    new(): Performance;
};

/** Encapsulates a single performance metric that is part of the performance timeline. A performance entry can be directly created by making a performance mark or measure (for example by calling the mark() method) at an explicit point in an application. Performance entries are also created in indirect ways such as loading a resource (such as an image). */
interface PerformanceEntry {
    readonly duration: DOMHighResTimeStamp;
    readonly entryType: string;
    readonly name: string;
    readonly startTime: DOMHighResTimeStamp;
    toJSON(): any;
}

declare var PerformanceEntry: {
    readonly prototype: PerformanceEntry;
    new(): PerformanceEntry;
};

interface PerformanceEventTiming extends PerformanceEntry {
    readonly cancelable: boolean;
    readonly processingEnd: DOMHighResTimeStamp;
    readonly processingStart: DOMHighResTimeStamp;
    readonly target: Node | null;
}

declare var PerformanceEventTiming: {
    readonly prototype: PerformanceEventTiming;
    new(): PerformanceEventTiming;
};

/** PerformanceMark is an abstract interface for PerformanceEntry objects with an entryType of "mark". Entries of this type are created by calling performance.mark() to add a named DOMHighResTimeStamp (the mark) to the browser's performance timeline. */
interface PerformanceMark extends PerformanceEntry {
    readonly detail: any;
}

declare var PerformanceMark: {
    readonly prototype: PerformanceMark;
    new(markName: string, markOptions?: PerformanceMarkOptions): PerformanceMark;
};

/** PerformanceMeasure is an abstract interface for PerformanceEntry objects with an entryType of "measure". Entries of this type are created by calling performance.measure() to add a named DOMHighResTimeStamp (the measure) between two marks to the browser's performance timeline. */
interface PerformanceMeasure extends PerformanceEntry {
    readonly detail: any;
}

declare var PerformanceMeasure: {
    readonly prototype: PerformanceMeasure;
    new(): PerformanceMeasure;
};

/** The legacy PerformanceNavigation interface represents information about how the navigation to the current document was done.
 * @deprecated This interface is deprecated in the Navigation Timing Level 2 specification. Please use the PerformanceNavigationTiming interface instead. */
interface PerformanceNavigation {
    /** @deprecated */
    readonly redirectCount: number;
    /** @deprecated */
    readonly type: number;
    /** @deprecated */
    toJSON(): any;
    readonly TYPE_BACK_FORWARD: number;
    readonly TYPE_NAVIGATE: number;
    readonly TYPE_RELOAD: number;
    readonly TYPE_RESERVED: number;
}

/** @deprecated */
declare var PerformanceNavigation: {
    readonly prototype: PerformanceNavigation;
    new(): PerformanceNavigation;
    readonly TYPE_BACK_FORWARD: number;
    readonly TYPE_NAVIGATE: number;
    readonly TYPE_RELOAD: number;
    readonly TYPE_RESERVED: number;
};

/** Provides methods and properties to store and retrieve metrics regarding the browser's document navigation events. For example, this interface can be used to determine how much time it takes to load or unload a document. */
interface PerformanceNavigationTiming extends PerformanceResourceTiming {
    readonly domComplete: DOMHighResTimeStamp;
    readonly domContentLoadedEventEnd: DOMHighResTimeStamp;
    readonly domContentLoadedEventStart: DOMHighResTimeStamp;
    readonly domInteractive: DOMHighResTimeStamp;
    readonly loadEventEnd: DOMHighResTimeStamp;
    readonly loadEventStart: DOMHighResTimeStamp;
    readonly redirectCount: number;
    readonly type: NavigationType;
    readonly unloadEventEnd: DOMHighResTimeStamp;
    readonly unloadEventStart: DOMHighResTimeStamp;
    toJSON(): any;
}

declare var PerformanceNavigationTiming: {
    readonly prototype: PerformanceNavigationTiming;
    new(): PerformanceNavigationTiming;
};

interface PerformanceObserver {
    disconnect(): void;
    observe(options?: PerformanceObserverInit): void;
    takeRecords(): PerformanceEntryList;
}

declare var PerformanceObserver: {
    readonly prototype: PerformanceObserver;
    new(callback: PerformanceObserverCallback): PerformanceObserver;
    readonly supportedEntryTypes: ReadonlyArray<string>;
};

interface PerformanceObserverEntryList {
    getEntries(): PerformanceEntryList;
    getEntriesByName(name: string, type?: string): PerformanceEntryList;
    getEntriesByType(type: string): PerformanceEntryList;
}

declare var PerformanceObserverEntryList: {
    readonly prototype: PerformanceObserverEntryList;
    new(): PerformanceObserverEntryList;
};

interface PerformancePaintTiming extends PerformanceEntry {
}

declare var PerformancePaintTiming: {
    readonly prototype: PerformancePaintTiming;
    new(): PerformancePaintTiming;
};

/** Enables retrieval and analysis of detailed network timing data regarding the loading of an application's resources. An application can use the timing metrics to determine, for example, the length of time it takes to fetch a specific resource, such as an XMLHttpRequest, <SVG>, image, or script. */
interface PerformanceResourceTiming extends PerformanceEntry {
    readonly connectEnd: DOMHighResTimeStamp;
    readonly connectStart: DOMHighResTimeStamp;
    readonly decodedBodySize: number;
    readonly domainLookupEnd: DOMHighResTimeStamp;
    readonly domainLookupStart: DOMHighResTimeStamp;
    readonly encodedBodySize: number;
    readonly fetchStart: DOMHighResTimeStamp;
    readonly initiatorType: string;
    readonly nextHopProtocol: string;
    readonly redirectEnd: DOMHighResTimeStamp;
    readonly redirectStart: DOMHighResTimeStamp;
    readonly requestStart: DOMHighResTimeStamp;
    readonly responseEnd: DOMHighResTimeStamp;
    readonly responseStart: DOMHighResTimeStamp;
    readonly secureConnectionStart: DOMHighResTimeStamp;
    readonly serverTiming: ReadonlyArray<PerformanceServerTiming>;
    readonly transferSize: number;
    readonly workerStart: DOMHighResTimeStamp;
    toJSON(): any;
}

declare var PerformanceResourceTiming: {
    readonly prototype: PerformanceResourceTiming;
    new(): PerformanceResourceTiming;
};

interface PerformanceServerTiming {
    readonly description: string;
    readonly duration: DOMHighResTimeStamp;
    readonly name: string;
    toJSON(): any;
}

declare var PerformanceServerTiming: {
    readonly prototype: PerformanceServerTiming;
    new(): PerformanceServerTiming;
};

/** A legacy interface kept for backwards compatibility and contains properties that offer performance timing information for various events which occur during the loading and use of the current page. You get a PerformanceTiming object describing your page using the window.performance.timing property.
 * @deprecated This interface is deprecated in the Navigation Timing Level 2 specification. Please use the PerformanceNavigationTiming interface instead. */
interface PerformanceTiming {
    /** @deprecated */
    readonly connectEnd: number;
    /** @deprecated */
    readonly connectStart: number;
    /** @deprecated */
    readonly domComplete: number;
    /** @deprecated */
    readonly domContentLoadedEventEnd: number;
    /** @deprecated */
    readonly domContentLoadedEventStart: number;
    /** @deprecated */
    readonly domInteractive: number;
    /** @deprecated */
    readonly domLoading: number;
    /** @deprecated */
    readonly domainLookupEnd: number;
    /** @deprecated */
    readonly domainLookupStart: number;
    /** @deprecated */
    readonly fetchStart: number;
    /** @deprecated */
    readonly loadEventEnd: number;
    /** @deprecated */
    readonly loadEventStart: number;
    /** @deprecated */
    readonly navigationStart: number;
    /** @deprecated */
    readonly redirectEnd: number;
    /** @deprecated */
    readonly redirectStart: number;
    /** @deprecated */
    readonly requestStart: number;
    /** @deprecated */
    readonly responseEnd: number;
    /** @deprecated */
    readonly responseStart: number;
    /** @deprecated */
    readonly secureConnectionStart: number;
    /** @deprecated */
    readonly unloadEventEnd: number;
    /** @deprecated */
    readonly unloadEventStart: number;
    /** @deprecated */
    toJSON(): any;
}

/** @deprecated */
declare var PerformanceTiming: {
    readonly prototype: PerformanceTiming;
    new(): PerformanceTiming;
};

/** PeriodicWave has no inputs or outputs; it is used to define custom oscillators when calling OscillatorNode.setPeriodicWave(). The PeriodicWave itself is created/returned by AudioContext.createPeriodicWave(). */
interface PeriodicWave {
}

declare var PeriodicWave: {
    readonly prototype: PeriodicWave;
    new(context: BaseAudioContext, options?: PeriodicWaveOptions): PeriodicWave;
};

interface PermissionStatusEventMap {
    "change": Event;
}

interface PermissionStatus extends EventTarget {
    onchange: ((this: PermissionStatus, ev: Event) => any) | null;
    readonly state: PermissionState;
    addEventListener<K extends keyof PermissionStatusEventMap>(type: K, listener: (this: PermissionStatus, ev: PermissionStatusEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof PermissionStatusEventMap>(type: K, listener: (this: PermissionStatus, ev: PermissionStatusEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var PermissionStatus: {
    readonly prototype: PermissionStatus;
    new(): PermissionStatus;
};

interface Permissions {
    query(permissionDesc: PermissionDescriptor): Promise<PermissionStatus>;
}

declare var Permissions: {
    readonly prototype: Permissions;
    new(): Permissions;
};

interface PictureInPictureWindowEventMap {
    "resize": Event;
}

interface PictureInPictureWindow extends EventTarget {
    readonly height: number;
    onresize: ((this: PictureInPictureWindow, ev: Event) => any) | null;
    readonly width: number;
    addEventListener<K extends keyof PictureInPictureWindowEventMap>(type: K, listener: (this: PictureInPictureWindow, ev: PictureInPictureWindowEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof PictureInPictureWindowEventMap>(type: K, listener: (this: PictureInPictureWindow, ev: PictureInPictureWindowEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var PictureInPictureWindow: {
    readonly prototype: PictureInPictureWindow;
    new(): PictureInPictureWindow;
};

/** Provides information about a browser plugin. */
/** @deprecated */
interface Plugin {
    /**
     * Returns the plugin's description.
     */
    /** @deprecated */
    readonly description: undefined;
    /**
     * Returns the plugin library's filename, if applicable on the current platform.
     */
    /** @deprecated */
    readonly filename: undefined;
    /**
     * Returns the number of MIME types, represented by MimeType objects, supported by the plugin.
     */
    /** @deprecated */
    readonly length: undefined;
    /**
     * Returns the plugin's name.
     */
    /** @deprecated */
    readonly name: undefined;
    /**
     * Returns the specified MimeType object.
     */
    /** @deprecated */
    item(index: number): void;
    /** @deprecated */
    namedItem(name: string): void;
    [index: number]: undefined;
}

/** @deprecated */
declare var Plugin: {
    readonly prototype: Plugin;
    new(): Plugin;
};

/** Used to store a list of Plugin objects describing the available plugins; it's returned by the window.navigator.plugins property. The PluginArray is not a JavaScript array, but has the length property and supports accessing individual items using bracket notation (plugins[2]), as well as via item(index) and namedItem("name") methods. */
/** @deprecated */
interface PluginArray {
    /** @deprecated */
    readonly length: number;
    /** @deprecated */
    item(index: number): any;
    /** @deprecated */
    namedItem(name: string): any;
    /** @deprecated */
    refresh(): void;
    [index: number]: any;
}

/** @deprecated */
declare var PluginArray: {
    readonly prototype: PluginArray;
    new(): PluginArray;
};

/** The state of a DOM event produced by a pointer such as the geometry of the contact point, the device type that generated the event, the amount of pressure that was applied on the contact surface, etc. */
interface PointerEvent extends MouseEvent {
    readonly height: number;
    readonly isPrimary: boolean;
    readonly pointerId: number;
    readonly pointerType: string;
    readonly pressure: number;
    readonly tangentialPressure: number;
    readonly tiltX: number;
    readonly tiltY: number;
    readonly twist: number;
    readonly width: number;
    getCoalescedEvents(): PointerEvent[];
}

declare var PointerEvent: {
    readonly prototype: PointerEvent;
    new(type: string, eventInitDict?: PointerEventInit): PointerEvent;
};

/** PopStateEvent is an event handler for the popstate event on the window. */
interface PopStateEvent extends Event {
    /**
     * Returns a copy of the information that was provided to pushState() or replaceState().
     */
    readonly state: any;
}

declare var PopStateEvent: {
    readonly prototype: PopStateEvent;
    new(type: string, eventInitDict?: PopStateEventInit): PopStateEvent;
};

/** A processing instruction embeds application-specific instructions in XML which can be ignored by other applications that don't recognize them. */
interface ProcessingInstruction extends CharacterData, LinkStyle {
    readonly ownerDocument: Document;
    readonly target: string;
}

declare var ProcessingInstruction: {
    readonly prototype: ProcessingInstruction;
    new(): ProcessingInstruction;
};

/** Events measuring progress of an underlying process, like an HTTP request (for an XMLHttpRequest, or the loading of the underlying resource of an <img>, <audio>, <video>, <style> or <link>). */
interface ProgressEvent<T extends EventTarget = EventTarget> extends Event {
    readonly lengthComputable: boolean;
    readonly loaded: number;
    readonly target: T | null;
    readonly total: number;
}

declare var ProgressEvent: {
    readonly prototype: ProgressEvent;
    new(type: string, eventInitDict?: ProgressEventInit): ProgressEvent;
};

interface PromiseRejectionEvent extends Event {
    readonly promise: Promise<any>;
    readonly reason: any;
}

declare var PromiseRejectionEvent: {
    readonly prototype: PromiseRejectionEvent;
    new(type: string, eventInitDict: PromiseRejectionEventInit): PromiseRejectionEvent;
};

interface PublicKeyCredential extends Credential {
    readonly rawId: ArrayBuffer;
    readonly response: AuthenticatorResponse;
    getClientExtensionResults(): AuthenticationExtensionsClientOutputs;
}

declare var PublicKeyCredential: {
    readonly prototype: PublicKeyCredential;
    new(): PublicKeyCredential;
    isUserVerifyingPlatformAuthenticatorAvailable(): Promise<boolean>;
};

/** This Push API interface provides a way to receive notifications from third-party servers as well as request URLs for push notifications. */
interface PushManager {
    getSubscription(): Promise<PushSubscription | null>;
    permissionState(options?: PushSubscriptionOptionsInit): Promise<PushPermissionState>;
    subscribe(options?: PushSubscriptionOptionsInit): Promise<PushSubscription>;
}

declare var PushManager: {
    readonly prototype: PushManager;
    new(): PushManager;
    readonly supportedContentEncodings: ReadonlyArray<string>;
};

/** This Push API interface provides a subcription's URL endpoint and allows unsubscription from a push service. */
interface PushSubscription {
    readonly endpoint: string;
    readonly options: PushSubscriptionOptions;
    getKey(name: PushEncryptionKeyName): ArrayBuffer | null;
    toJSON(): PushSubscriptionJSON;
    unsubscribe(): Promise<boolean>;
}

declare var PushSubscription: {
    readonly prototype: PushSubscription;
    new(): PushSubscription;
};

interface PushSubscriptionOptions {
    readonly applicationServerKey: ArrayBuffer | null;
}

declare var PushSubscriptionOptions: {
    readonly prototype: PushSubscriptionOptions;
    new(): PushSubscriptionOptions;
};

interface RTCCertificate {
    readonly expires: DOMTimeStamp;
    getFingerprints(): RTCDtlsFingerprint[];
}

declare var RTCCertificate: {
    readonly prototype: RTCCertificate;
    new(): RTCCertificate;
};

interface RTCDTMFSenderEventMap {
    "tonechange": RTCDTMFToneChangeEvent;
}

interface RTCDTMFSender extends EventTarget {
    readonly canInsertDTMF: boolean;
    ontonechange: ((this: RTCDTMFSender, ev: RTCDTMFToneChangeEvent) => any) | null;
    readonly toneBuffer: string;
    insertDTMF(tones: string, duration?: number, interToneGap?: number): void;
    addEventListener<K extends keyof RTCDTMFSenderEventMap>(type: K, listener: (this: RTCDTMFSender, ev: RTCDTMFSenderEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof RTCDTMFSenderEventMap>(type: K, listener: (this: RTCDTMFSender, ev: RTCDTMFSenderEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var RTCDTMFSender: {
    readonly prototype: RTCDTMFSender;
    new(): RTCDTMFSender;
};

/** Events sent to indicate that DTMF tones have started or finished playing. This interface is used by the tonechange event. */
interface RTCDTMFToneChangeEvent extends Event {
    readonly tone: string;
}

declare var RTCDTMFToneChangeEvent: {
    readonly prototype: RTCDTMFToneChangeEvent;
    new(type: string, eventInitDict?: RTCDTMFToneChangeEventInit): RTCDTMFToneChangeEvent;
};

interface RTCDataChannelEventMap {
    "bufferedamountlow": Event;
    "close": Event;
    "error": Event;
    "message": MessageEvent;
    "open": Event;
}

interface RTCDataChannel extends EventTarget {
    binaryType: BinaryType;
    readonly bufferedAmount: number;
    bufferedAmountLowThreshold: number;
    readonly id: number | null;
    readonly label: string;
    readonly maxPacketLifeTime: number | null;
    readonly maxRetransmits: number | null;
    readonly negotiated: boolean;
    onbufferedamountlow: ((this: RTCDataChannel, ev: Event) => any) | null;
    onclose: ((this: RTCDataChannel, ev: Event) => any) | null;
    onerror: ((this: RTCDataChannel, ev: Event) => any) | null;
    onmessage: ((this: RTCDataChannel, ev: MessageEvent) => any) | null;
    onopen: ((this: RTCDataChannel, ev: Event) => any) | null;
    readonly ordered: boolean;
    readonly protocol: string;
    readonly readyState: RTCDataChannelState;
    close(): void;
    send(data: string): void;
    send(data: Blob): void;
    send(data: ArrayBuffer): void;
    send(data: ArrayBufferView): void;
    addEventListener<K extends keyof RTCDataChannelEventMap>(type: K, listener: (this: RTCDataChannel, ev: RTCDataChannelEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof RTCDataChannelEventMap>(type: K, listener: (this: RTCDataChannel, ev: RTCDataChannelEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var RTCDataChannel: {
    readonly prototype: RTCDataChannel;
    new(): RTCDataChannel;
};

interface RTCDataChannelEvent extends Event {
    readonly channel: RTCDataChannel;
}

declare var RTCDataChannelEvent: {
    readonly prototype: RTCDataChannelEvent;
    new(type: string, eventInitDict: RTCDataChannelEventInit): RTCDataChannelEvent;
};

interface RTCDtlsTransportEventMap {
    "statechange": Event;
}

interface RTCDtlsTransport extends EventTarget {
    onstatechange: ((this: RTCDtlsTransport, ev: Event) => any) | null;
    readonly state: RTCDtlsTransportState;
    addEventListener<K extends keyof RTCDtlsTransportEventMap>(type: K, listener: (this: RTCDtlsTransport, ev: RTCDtlsTransportEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof RTCDtlsTransportEventMap>(type: K, listener: (this: RTCDtlsTransport, ev: RTCDtlsTransportEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var RTCDtlsTransport: {
    readonly prototype: RTCDtlsTransport;
    new(): RTCDtlsTransport;
};

/** The RTCIceCandidate interface—part of the WebRTC API—represents a candidate Internet Connectivity Establishment (ICE) configuration which may be used to establish an RTCPeerConnection. */
interface RTCIceCandidate {
    readonly address: string | null;
    readonly candidate: string;
    readonly component: RTCIceComponent | null;
    readonly foundation: string | null;
    readonly port: number | null;
    readonly priority: number | null;
    readonly protocol: RTCIceProtocol | null;
    readonly relatedAddress: string | null;
    readonly relatedPort: number | null;
    readonly sdpMLineIndex: number | null;
    readonly sdpMid: string | null;
    readonly tcpType: RTCIceTcpCandidateType | null;
    readonly type: RTCIceCandidateType | null;
    readonly usernameFragment: string | null;
    toJSON(): RTCIceCandidateInit;
}

declare var RTCIceCandidate: {
    readonly prototype: RTCIceCandidate;
    new(candidateInitDict?: RTCIceCandidateInit): RTCIceCandidate;
};

/** Provides access to information about the ICE transport layer over which the data is being sent and received. */
interface RTCIceTransport extends EventTarget {
    readonly gatheringState: RTCIceGathererState;
    readonly state: RTCIceTransportState;
}

declare var RTCIceTransport: {
    readonly prototype: RTCIceTransport;
    new(): RTCIceTransport;
};

interface RTCPeerConnectionEventMap {
    "connectionstatechange": Event;
    "datachannel": RTCDataChannelEvent;
    "icecandidate": RTCPeerConnectionIceEvent;
    "iceconnectionstatechange": Event;
    "icegatheringstatechange": Event;
    "negotiationneeded": Event;
    "signalingstatechange": Event;
    "track": RTCTrackEvent;
}

/** A WebRTC connection between the local computer and a remote peer. It provides methods to connect to a remote peer, maintain and monitor the connection, and close the connection once it's no longer needed. */
interface RTCPeerConnection extends EventTarget {
    readonly canTrickleIceCandidates: boolean | null;
    readonly connectionState: RTCPeerConnectionState;
    readonly currentLocalDescription: RTCSessionDescription | null;
    readonly currentRemoteDescription: RTCSessionDescription | null;
    readonly iceConnectionState: RTCIceConnectionState;
    readonly iceGatheringState: RTCIceGatheringState;
    readonly localDescription: RTCSessionDescription | null;
    onconnectionstatechange: ((this: RTCPeerConnection, ev: Event) => any) | null;
    ondatachannel: ((this: RTCPeerConnection, ev: RTCDataChannelEvent) => any) | null;
    onicecandidate: ((this: RTCPeerConnection, ev: RTCPeerConnectionIceEvent) => any) | null;
    oniceconnectionstatechange: ((this: RTCPeerConnection, ev: Event) => any) | null;
    onicegatheringstatechange: ((this: RTCPeerConnection, ev: Event) => any) | null;
    onnegotiationneeded: ((this: RTCPeerConnection, ev: Event) => any) | null;
    onsignalingstatechange: ((this: RTCPeerConnection, ev: Event) => any) | null;
    ontrack: ((this: RTCPeerConnection, ev: RTCTrackEvent) => any) | null;
    readonly pendingLocalDescription: RTCSessionDescription | null;
    readonly pendingRemoteDescription: RTCSessionDescription | null;
    readonly remoteDescription: RTCSessionDescription | null;
    readonly signalingState: RTCSignalingState;
    addIceCandidate(candidate?: RTCIceCandidateInit): Promise<void>;
    /** @deprecated */
    addIceCandidate(candidate: RTCIceCandidateInit, successCallback: VoidFunction, failureCallback: RTCPeerConnectionErrorCallback): Promise<void>;
    addTrack(track: MediaStreamTrack, ...streams: MediaStream[]): RTCRtpSender;
    addTransceiver(trackOrKind: MediaStreamTrack | string, init?: RTCRtpTransceiverInit): RTCRtpTransceiver;
    close(): void;
    createAnswer(options?: RTCAnswerOptions): Promise<RTCSessionDescriptionInit>;
    /** @deprecated */
    createAnswer(successCallback: RTCSessionDescriptionCallback, failureCallback: RTCPeerConnectionErrorCallback): Promise<void>;
    createDataChannel(label: string, dataChannelDict?: RTCDataChannelInit): RTCDataChannel;
    createOffer(options?: RTCOfferOptions): Promise<RTCSessionDescriptionInit>;
    /** @deprecated */
    createOffer(successCallback: RTCSessionDescriptionCallback, failureCallback: RTCPeerConnectionErrorCallback, options?: RTCOfferOptions): Promise<void>;
    getConfiguration(): RTCConfiguration;
    getReceivers(): RTCRtpReceiver[];
    getSenders(): RTCRtpSender[];
    getStats(selector?: MediaStreamTrack | null): Promise<RTCStatsReport>;
    getTransceivers(): RTCRtpTransceiver[];
    removeTrack(sender: RTCRtpSender): void;
    restartIce(): void;
    setConfiguration(configuration?: RTCConfiguration): void;
    setLocalDescription(description?: RTCLocalSessionDescriptionInit): Promise<void>;
    /** @deprecated */
    setLocalDescription(description: RTCLocalSessionDescriptionInit, successCallback: VoidFunction, failureCallback: RTCPeerConnectionErrorCallback): Promise<void>;
    setRemoteDescription(description: RTCSessionDescriptionInit): Promise<void>;
    /** @deprecated */
    setRemoteDescription(description: RTCSessionDescriptionInit, successCallback: VoidFunction, failureCallback: RTCPeerConnectionErrorCallback): Promise<void>;
    addEventListener<K extends keyof RTCPeerConnectionEventMap>(type: K, listener: (this: RTCPeerConnection, ev: RTCPeerConnectionEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof RTCPeerConnectionEventMap>(type: K, listener: (this: RTCPeerConnection, ev: RTCPeerConnectionEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var RTCPeerConnection: {
    readonly prototype: RTCPeerConnection;
    new(configuration?: RTCConfiguration): RTCPeerConnection;
    generateCertificate(keygenAlgorithm: AlgorithmIdentifier): Promise<RTCCertificate>;
};

interface RTCPeerConnectionIceErrorEvent extends Event {
    readonly errorCode: number;
    readonly errorText: string;
    readonly url: string;
}

declare var RTCPeerConnectionIceErrorEvent: {
    readonly prototype: RTCPeerConnectionIceErrorEvent;
    new(type: string, eventInitDict: RTCPeerConnectionIceErrorEventInit): RTCPeerConnectionIceErrorEvent;
};

/** Events that occurs in relation to ICE candidates with the target, usually an RTCPeerConnection. Only one event is of this type: icecandidate. */
interface RTCPeerConnectionIceEvent extends Event {
    readonly candidate: RTCIceCandidate | null;
}

declare var RTCPeerConnectionIceEvent: {
    readonly prototype: RTCPeerConnectionIceEvent;
    new(type: string, eventInitDict?: RTCPeerConnectionIceEventInit): RTCPeerConnectionIceEvent;
};

/** This WebRTC API interface manages the reception and decoding of data for a MediaStreamTrack on an RTCPeerConnection. */
interface RTCRtpReceiver {
    readonly track: MediaStreamTrack;
    readonly transport: RTCDtlsTransport | null;
    getContributingSources(): RTCRtpContributingSource[];
    getParameters(): RTCRtpReceiveParameters;
    getStats(): Promise<RTCStatsReport>;
    getSynchronizationSources(): RTCRtpSynchronizationSource[];
}

declare var RTCRtpReceiver: {
    readonly prototype: RTCRtpReceiver;
    new(): RTCRtpReceiver;
    getCapabilities(kind: string): RTCRtpCapabilities | null;
};

/** Provides the ability to control and obtain details about how a particular MediaStreamTrack is encoded and sent to a remote peer. */
interface RTCRtpSender {
    readonly dtmf: RTCDTMFSender | null;
    readonly track: MediaStreamTrack | null;
    readonly transport: RTCDtlsTransport | null;
    getParameters(): RTCRtpSendParameters;
    getStats(): Promise<RTCStatsReport>;
    replaceTrack(withTrack: MediaStreamTrack | null): Promise<void>;
    setParameters(parameters: RTCRtpSendParameters): Promise<void>;
    setStreams(...streams: MediaStream[]): void;
}

declare var RTCRtpSender: {
    readonly prototype: RTCRtpSender;
    new(): RTCRtpSender;
    getCapabilities(kind: string): RTCRtpCapabilities | null;
};

interface RTCRtpTransceiver {
    readonly currentDirection: RTCRtpTransceiverDirection | null;
    direction: RTCRtpTransceiverDirection;
    readonly mid: string | null;
    readonly receiver: RTCRtpReceiver;
    readonly sender: RTCRtpSender;
    stop(): void;
}

declare var RTCRtpTransceiver: {
    readonly prototype: RTCRtpTransceiver;
    new(): RTCRtpTransceiver;
};

/** One end of a connection—or potential connection—and how it's configured. Each RTCSessionDescription consists of a description type indicating which part of the offer/answer negotiation process it describes and of the SDP descriptor of the session. */
interface RTCSessionDescription {
    readonly sdp: string;
    readonly type: RTCSdpType;
    toJSON(): any;
}

declare var RTCSessionDescription: {
    readonly prototype: RTCSessionDescription;
    new(descriptionInitDict: RTCSessionDescriptionInit): RTCSessionDescription;
};

interface RTCStatsReport {
    forEach(callbackfn: (value: any, key: string, parent: RTCStatsReport) => void, thisArg?: any): void;
}

declare var RTCStatsReport: {
    readonly prototype: RTCStatsReport;
    new(): RTCStatsReport;
};

interface RTCTrackEvent extends Event {
    readonly receiver: RTCRtpReceiver;
    readonly streams: ReadonlyArray<MediaStream>;
    readonly track: MediaStreamTrack;
    readonly transceiver: RTCRtpTransceiver;
}

declare var RTCTrackEvent: {
    readonly prototype: RTCTrackEvent;
    new(type: string, eventInitDict: RTCTrackEventInit): RTCTrackEvent;
};

interface RadioNodeList extends NodeList {
    value: string;
}

declare var RadioNodeList: {
    readonly prototype: RadioNodeList;
    new(): RadioNodeList;
};

/** A fragment of a document that can contain nodes and parts of text nodes. */
interface Range extends AbstractRange {
    /**
     * Returns the node, furthest away from the document, that is an ancestor of both range's start node and end node.
     */
    readonly commonAncestorContainer: Node;
    cloneContents(): DocumentFragment;
    cloneRange(): Range;
    collapse(toStart?: boolean): void;
    compareBoundaryPoints(how: number, sourceRange: Range): number;
    /**
     * Returns −1 if the point is before the range, 0 if the point is in the range, and 1 if the point is after the range.
     */
    comparePoint(node: Node, offset: number): number;
    createContextualFragment(fragment: string): DocumentFragment;
    deleteContents(): void;
    detach(): void;
    extractContents(): DocumentFragment;
    getBoundingClientRect(): DOMRect;
    getClientRects(): DOMRectList;
    insertNode(node: Node): void;
    /**
     * Returns whether range intersects node.
     */
    intersectsNode(node: Node): boolean;
    isPointInRange(node: Node, offset: number): boolean;
    selectNode(node: Node): void;
    selectNodeContents(node: Node): void;
    setEnd(node: Node, offset: number): void;
    setEndAfter(node: Node): void;
    setEndBefore(node: Node): void;
    setStart(node: Node, offset: number): void;
    setStartAfter(node: Node): void;
    setStartBefore(node: Node): void;
    surroundContents(newParent: Node): void;
    toString(): string;
    readonly END_TO_END: number;
    readonly END_TO_START: number;
    readonly START_TO_END: number;
    readonly START_TO_START: number;
}

declare var Range: {
    readonly prototype: Range;
    new(): Range;
    readonly END_TO_END: number;
    readonly END_TO_START: number;
    readonly START_TO_END: number;
    readonly START_TO_START: number;
    toString(): string;
};

/** This Streams API interface represents a readable stream of byte data. The Fetch API offers a concrete instance of a ReadableStream through the body property of a Response object. */
interface ReadableStream<R = any> {
    readonly locked: boolean;
    cancel(reason?: any): Promise<void>;
    getReader(): ReadableStreamDefaultReader<R>;
    pipeThrough<T>(transform: ReadableWritablePair<T, R>, options?: StreamPipeOptions): ReadableStream<T>;
    pipeTo(destination: WritableStream<R>, options?: StreamPipeOptions): Promise<void>;
    tee(): [ReadableStream<R>, ReadableStream<R>];
    forEach(callbackfn: (value: any, key: number, parent: ReadableStream<R>) => void, thisArg?: any): void;
}

declare var ReadableStream: {
    readonly prototype: ReadableStream;
    new<R = any>(underlyingSource?: UnderlyingSource<R>, strategy?: QueuingStrategy<R>): ReadableStream<R>;
};

interface ReadableStreamDefaultController<R = any> {
    readonly desiredSize: number | null;
    close(): void;
    enqueue(chunk?: R): void;
    error(e?: any): void;
}

declare var ReadableStreamDefaultController: {
    readonly prototype: ReadableStreamDefaultController;
    new(): ReadableStreamDefaultController;
};

interface ReadableStreamDefaultReader<R = any> extends ReadableStreamGenericReader {
    read(): Promise<ReadableStreamDefaultReadResult<R>>;
    releaseLock(): void;
}

declare var ReadableStreamDefaultReader: {
    readonly prototype: ReadableStreamDefaultReader;
    new<R = any>(stream: ReadableStream<R>): ReadableStreamDefaultReader<R>;
};

interface ReadableStreamGenericReader {
    readonly closed: Promise<undefined>;
    cancel(reason?: any): Promise<void>;
}

interface RemotePlaybackEventMap {
    "connect": Event;
    "connecting": Event;
    "disconnect": Event;
}

interface RemotePlayback extends EventTarget {
    onconnect: ((this: RemotePlayback, ev: Event) => any) | null;
    onconnecting: ((this: RemotePlayback, ev: Event) => any) | null;
    ondisconnect: ((this: RemotePlayback, ev: Event) => any) | null;
    readonly state: RemotePlaybackState;
    cancelWatchAvailability(id?: number): Promise<void>;
    prompt(): Promise<void>;
    watchAvailability(callback: RemotePlaybackAvailabilityCallback): Promise<number>;
    addEventListener<K extends keyof RemotePlaybackEventMap>(type: K, listener: (this: RemotePlayback, ev: RemotePlaybackEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof RemotePlaybackEventMap>(type: K, listener: (this: RemotePlayback, ev: RemotePlaybackEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var RemotePlayback: {
    readonly prototype: RemotePlayback;
    new(): RemotePlayback;
};

/** This Fetch API interface represents a resource request. */
interface Request extends Body {
    /**
     * Returns the cache mode associated with request, which is a string indicating how the request will interact with the browser's cache when fetching.
     */
    readonly cache: RequestCache;
    /**
     * Returns the credentials mode associated with request, which is a string indicating whether credentials will be sent with the request always, never, or only when sent to a same-origin URL.
     */
    readonly credentials: RequestCredentials;
    /**
     * Returns the kind of resource requested by request, e.g., "document" or "script".
     */
    readonly destination: RequestDestination;
    /**
     * Returns a Headers object consisting of the headers associated with request. Note that headers added in the network layer by the user agent will not be accounted for in this object, e.g., the "Host" header.
     */
    readonly headers: Headers;
    /**
     * Returns request's subresource integrity metadata, which is a cryptographic hash of the resource being fetched. Its value consists of multiple hashes separated by whitespace. [SRI]
     */
    readonly integrity: string;
    /**
     * Returns a boolean indicating whether or not request can outlive the global in which it was created.
     */
    readonly keepalive: boolean;
    /**
     * Returns request's HTTP method, which is "GET" by default.
     */
    readonly method: string;
    /**
     * Returns the mode associated with request, which is a string indicating whether the request will use CORS, or will be restricted to same-origin URLs.
     */
    readonly mode: RequestMode;
    /**
     * Returns the redirect mode associated with request, which is a string indicating how redirects for the request will be handled during fetching. A request will follow redirects by default.
     */
    readonly redirect: RequestRedirect;
    /**
     * Returns the referrer of request. Its value can be a same-origin URL if explicitly set in init, the empty string to indicate no referrer, and "about:client" when defaulting to the global's default. This is used during fetching to determine the value of the `Referer` header of the request being made.
     */
    readonly referrer: string;
    /**
     * Returns the referrer policy associated with request. This is used during fetching to compute the value of the request's referrer.
     */
    readonly referrerPolicy: ReferrerPolicy;
    /**
     * Returns the signal associated with request, which is an AbortSignal object indicating whether or not request has been aborted, and its abort event handler.
     */
    readonly signal: AbortSignal;
    /**
     * Returns the URL of request as a string.
     */
    readonly url: string;
    clone(): Request;
}

declare var Request: {
    readonly prototype: Request;
    new(input: RequestInfo, init?: RequestInit): Request;
};

interface ResizeObserver {
    disconnect(): void;
    observe(target: Element, options?: ResizeObserverOptions): void;
    unobserve(target: Element): void;
}

declare var ResizeObserver: {
    readonly prototype: ResizeObserver;
    new(callback: ResizeObserverCallback): ResizeObserver;
};

interface ResizeObserverEntry {
    readonly borderBoxSize: ReadonlyArray<ResizeObserverSize>;
    readonly contentBoxSize: ReadonlyArray<ResizeObserverSize>;
    readonly contentRect: DOMRectReadOnly;
    readonly target: Element;
}

declare var ResizeObserverEntry: {
    readonly prototype: ResizeObserverEntry;
    new(): ResizeObserverEntry;
};

interface ResizeObserverSize {
    readonly blockSize: number;
    readonly inlineSize: number;
}

declare var ResizeObserverSize: {
    readonly prototype: ResizeObserverSize;
    new(): ResizeObserverSize;
};

/** This Fetch API interface represents the response to a request. */
interface Response extends Body {
    readonly headers: Headers;
    readonly ok: boolean;
    readonly redirected: boolean;
    readonly status: number;
    readonly statusText: string;
    readonly type: ResponseType;
    readonly url: string;
    clone(): Response;
}

declare var Response: {
    readonly prototype: Response;
    new(body?: BodyInit | null, init?: ResponseInit): Response;
    error(): Response;
    redirect(url: string | URL, status?: number): Response;
};

/** Provides access to the properties of <a> element, as well as methods to manipulate them. */
interface SVGAElement extends SVGGraphicsElement, SVGURIReference {
    rel: string;
    readonly relList: DOMTokenList;
    readonly target: SVGAnimatedString;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGAElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGAElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGAElement: {
    readonly prototype: SVGAElement;
    new(): SVGAElement;
};

/** Used to represent a value that can be an <angle> or <number> value. An SVGAngle reflected through the animVal attribute is always read only. */
interface SVGAngle {
    readonly unitType: number;
    value: number;
    valueAsString: string;
    valueInSpecifiedUnits: number;
    convertToSpecifiedUnits(unitType: number): void;
    newValueSpecifiedUnits(unitType: number, valueInSpecifiedUnits: number): void;
    readonly SVG_ANGLETYPE_DEG: number;
    readonly SVG_ANGLETYPE_GRAD: number;
    readonly SVG_ANGLETYPE_RAD: number;
    readonly SVG_ANGLETYPE_UNKNOWN: number;
    readonly SVG_ANGLETYPE_UNSPECIFIED: number;
}

declare var SVGAngle: {
    readonly prototype: SVGAngle;
    new(): SVGAngle;
    readonly SVG_ANGLETYPE_DEG: number;
    readonly SVG_ANGLETYPE_GRAD: number;
    readonly SVG_ANGLETYPE_RAD: number;
    readonly SVG_ANGLETYPE_UNKNOWN: number;
    readonly SVG_ANGLETYPE_UNSPECIFIED: number;
};

interface SVGAnimateElement extends SVGAnimationElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGAnimateElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGAnimateElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGAnimateElement: {
    readonly prototype: SVGAnimateElement;
    new(): SVGAnimateElement;
};

interface SVGAnimateMotionElement extends SVGAnimationElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGAnimateMotionElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGAnimateMotionElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGAnimateMotionElement: {
    readonly prototype: SVGAnimateMotionElement;
    new(): SVGAnimateMotionElement;
};

interface SVGAnimateTransformElement extends SVGAnimationElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGAnimateTransformElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGAnimateTransformElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGAnimateTransformElement: {
    readonly prototype: SVGAnimateTransformElement;
    new(): SVGAnimateTransformElement;
};

/** Used for attributes of basic type <angle> which can be animated. */
interface SVGAnimatedAngle {
    readonly animVal: SVGAngle;
    readonly baseVal: SVGAngle;
}

declare var SVGAnimatedAngle: {
    readonly prototype: SVGAnimatedAngle;
    new(): SVGAnimatedAngle;
};

/** Used for attributes of type boolean which can be animated. */
interface SVGAnimatedBoolean {
    readonly animVal: boolean;
    baseVal: boolean;
}

declare var SVGAnimatedBoolean: {
    readonly prototype: SVGAnimatedBoolean;
    new(): SVGAnimatedBoolean;
};

/** Used for attributes whose value must be a constant from a particular enumeration and which can be animated. */
interface SVGAnimatedEnumeration {
    readonly animVal: number;
    baseVal: number;
}

declare var SVGAnimatedEnumeration: {
    readonly prototype: SVGAnimatedEnumeration;
    new(): SVGAnimatedEnumeration;
};

/** Used for attributes of basic type <integer> which can be animated. */
interface SVGAnimatedInteger {
    readonly animVal: number;
    baseVal: number;
}

declare var SVGAnimatedInteger: {
    readonly prototype: SVGAnimatedInteger;
    new(): SVGAnimatedInteger;
};

/** Used for attributes of basic type <length> which can be animated. */
interface SVGAnimatedLength {
    readonly animVal: SVGLength;
    readonly baseVal: SVGLength;
}

declare var SVGAnimatedLength: {
    readonly prototype: SVGAnimatedLength;
    new(): SVGAnimatedLength;
};

/** Used for attributes of type SVGLengthList which can be animated. */
interface SVGAnimatedLengthList {
    readonly animVal: SVGLengthList;
    readonly baseVal: SVGLengthList;
}

declare var SVGAnimatedLengthList: {
    readonly prototype: SVGAnimatedLengthList;
    new(): SVGAnimatedLengthList;
};

/** Used for attributes of basic type <Number> which can be animated. */
interface SVGAnimatedNumber {
    readonly animVal: number;
    baseVal: number;
}

declare var SVGAnimatedNumber: {
    readonly prototype: SVGAnimatedNumber;
    new(): SVGAnimatedNumber;
};

/** The SVGAnimatedNumber interface is used for attributes which take a list of numbers and which can be animated. */
interface SVGAnimatedNumberList {
    readonly animVal: SVGNumberList;
    readonly baseVal: SVGNumberList;
}

declare var SVGAnimatedNumberList: {
    readonly prototype: SVGAnimatedNumberList;
    new(): SVGAnimatedNumberList;
};

interface SVGAnimatedPoints {
    readonly animatedPoints: SVGPointList;
    readonly points: SVGPointList;
}

/** Used for attributes of type SVGPreserveAspectRatio which can be animated. */
interface SVGAnimatedPreserveAspectRatio {
    readonly animVal: SVGPreserveAspectRatio;
    readonly baseVal: SVGPreserveAspectRatio;
}

declare var SVGAnimatedPreserveAspectRatio: {
    readonly prototype: SVGAnimatedPreserveAspectRatio;
    new(): SVGAnimatedPreserveAspectRatio;
};

/** Used for attributes of basic SVGRect which can be animated. */
interface SVGAnimatedRect {
    readonly animVal: DOMRectReadOnly;
    readonly baseVal: DOMRect;
}

declare var SVGAnimatedRect: {
    readonly prototype: SVGAnimatedRect;
    new(): SVGAnimatedRect;
};

/** The SVGAnimatedString interface represents string attributes which can be animated from each SVG declaration. You need to create SVG attribute before doing anything else, everything should be declared inside this. */
interface SVGAnimatedString {
    readonly animVal: string;
    baseVal: string;
}

declare var SVGAnimatedString: {
    readonly prototype: SVGAnimatedString;
    new(): SVGAnimatedString;
};

/** Used for attributes which take a list of numbers and which can be animated. */
interface SVGAnimatedTransformList {
    readonly animVal: SVGTransformList;
    readonly baseVal: SVGTransformList;
}

declare var SVGAnimatedTransformList: {
    readonly prototype: SVGAnimatedTransformList;
    new(): SVGAnimatedTransformList;
};

interface SVGAnimationElement extends SVGElement, SVGTests {
    readonly targetElement: SVGElement | null;
    beginElement(): void;
    beginElementAt(offset: number): void;
    endElement(): void;
    endElementAt(offset: number): void;
    getCurrentTime(): number;
    getSimpleDuration(): number;
    getStartTime(): number;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGAnimationElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGAnimationElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGAnimationElement: {
    readonly prototype: SVGAnimationElement;
    new(): SVGAnimationElement;
};

/** An interface for the <circle> element. The circle element is defined by the cx and cy attributes that denote the coordinates of the centre of the circle. */
interface SVGCircleElement extends SVGGeometryElement {
    readonly cx: SVGAnimatedLength;
    readonly cy: SVGAnimatedLength;
    readonly r: SVGAnimatedLength;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGCircleElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGCircleElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGCircleElement: {
    readonly prototype: SVGCircleElement;
    new(): SVGCircleElement;
};

/** Provides access to the properties of <clipPath> elements, as well as methods to manipulate them. */
interface SVGClipPathElement extends SVGElement {
    readonly clipPathUnits: SVGAnimatedEnumeration;
    readonly transform: SVGAnimatedTransformList;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGClipPathElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGClipPathElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGClipPathElement: {
    readonly prototype: SVGClipPathElement;
    new(): SVGClipPathElement;
};

/** A base interface used by the component transfer function interfaces. */
interface SVGComponentTransferFunctionElement extends SVGElement {
    readonly amplitude: SVGAnimatedNumber;
    readonly exponent: SVGAnimatedNumber;
    readonly intercept: SVGAnimatedNumber;
    readonly offset: SVGAnimatedNumber;
    readonly slope: SVGAnimatedNumber;
    readonly tableValues: SVGAnimatedNumberList;
    readonly type: SVGAnimatedEnumeration;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE: number;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_GAMMA: number;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY: number;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_LINEAR: number;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_TABLE: number;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN: number;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGComponentTransferFunctionElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGComponentTransferFunctionElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGComponentTransferFunctionElement: {
    readonly prototype: SVGComponentTransferFunctionElement;
    new(): SVGComponentTransferFunctionElement;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE: number;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_GAMMA: number;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY: number;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_LINEAR: number;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_TABLE: number;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN: number;
};

interface SVGCursorElement extends SVGElement {
    readonly x: SVGAnimatedLength;
    readonly y: SVGAnimatedLength;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGCursorElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGCursorElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGCursorElement: {
    readonly prototype: SVGCursorElement;
    new(): SVGCursorElement;
};

/** Corresponds to the <defs> element. */
interface SVGDefsElement extends SVGGraphicsElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGDefsElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGDefsElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGDefsElement: {
    readonly prototype: SVGDefsElement;
    new(): SVGDefsElement;
};

/** Corresponds to the <desc> element. */
interface SVGDescElement extends SVGElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGDescElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGDescElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGDescElement: {
    readonly prototype: SVGDescElement;
    new(): SVGDescElement;
};

interface SVGElementEventMap extends ElementEventMap, DocumentAndElementEventHandlersEventMap, GlobalEventHandlersEventMap {
}

/** All of the SVG DOM interfaces that correspond directly to elements in the SVG language derive from the SVGElement interface. */
interface SVGElement extends Element, DocumentAndElementEventHandlers, DocumentAndElementEventHandlers, ElementCSSInlineStyle, GlobalEventHandlers, GlobalEventHandlers, HTMLOrSVGElement {
    /** @deprecated */
    readonly className: any;
    readonly ownerSVGElement: SVGSVGElement | null;
    readonly viewportElement: SVGElement | null;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGElement: {
    readonly prototype: SVGElement;
    new(): SVGElement;
};

/** Provides access to the properties of <ellipse> elements. */
interface SVGEllipseElement extends SVGGeometryElement {
    readonly cx: SVGAnimatedLength;
    readonly cy: SVGAnimatedLength;
    readonly rx: SVGAnimatedLength;
    readonly ry: SVGAnimatedLength;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGEllipseElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGEllipseElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGEllipseElement: {
    readonly prototype: SVGEllipseElement;
    new(): SVGEllipseElement;
};

/** Corresponds to the <feBlend> element. */
interface SVGFEBlendElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly in1: SVGAnimatedString;
    readonly in2: SVGAnimatedString;
    readonly mode: SVGAnimatedEnumeration;
    readonly SVG_FEBLEND_MODE_COLOR: number;
    readonly SVG_FEBLEND_MODE_COLOR_BURN: number;
    readonly SVG_FEBLEND_MODE_COLOR_DODGE: number;
    readonly SVG_FEBLEND_MODE_DARKEN: number;
    readonly SVG_FEBLEND_MODE_DIFFERENCE: number;
    readonly SVG_FEBLEND_MODE_EXCLUSION: number;
    readonly SVG_FEBLEND_MODE_HARD_LIGHT: number;
    readonly SVG_FEBLEND_MODE_HUE: number;
    readonly SVG_FEBLEND_MODE_LIGHTEN: number;
    readonly SVG_FEBLEND_MODE_LUMINOSITY: number;
    readonly SVG_FEBLEND_MODE_MULTIPLY: number;
    readonly SVG_FEBLEND_MODE_NORMAL: number;
    readonly SVG_FEBLEND_MODE_OVERLAY: number;
    readonly SVG_FEBLEND_MODE_SATURATION: number;
    readonly SVG_FEBLEND_MODE_SCREEN: number;
    readonly SVG_FEBLEND_MODE_SOFT_LIGHT: number;
    readonly SVG_FEBLEND_MODE_UNKNOWN: number;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEBlendElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEBlendElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGFEBlendElement: {
    readonly prototype: SVGFEBlendElement;
    new(): SVGFEBlendElement;
    readonly SVG_FEBLEND_MODE_COLOR: number;
    readonly SVG_FEBLEND_MODE_COLOR_BURN: number;
    readonly SVG_FEBLEND_MODE_COLOR_DODGE: number;
    readonly SVG_FEBLEND_MODE_DARKEN: number;
    readonly SVG_FEBLEND_MODE_DIFFERENCE: number;
    readonly SVG_FEBLEND_MODE_EXCLUSION: number;
    readonly SVG_FEBLEND_MODE_HARD_LIGHT: number;
    readonly SVG_FEBLEND_MODE_HUE: number;
    readonly SVG_FEBLEND_MODE_LIGHTEN: number;
    readonly SVG_FEBLEND_MODE_LUMINOSITY: number;
    readonly SVG_FEBLEND_MODE_MULTIPLY: number;
    readonly SVG_FEBLEND_MODE_NORMAL: number;
    readonly SVG_FEBLEND_MODE_OVERLAY: number;
    readonly SVG_FEBLEND_MODE_SATURATION: number;
    readonly SVG_FEBLEND_MODE_SCREEN: number;
    readonly SVG_FEBLEND_MODE_SOFT_LIGHT: number;
    readonly SVG_FEBLEND_MODE_UNKNOWN: number;
};

/** Corresponds to the <feColorMatrix> element. */
interface SVGFEColorMatrixElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly in1: SVGAnimatedString;
    readonly type: SVGAnimatedEnumeration;
    readonly values: SVGAnimatedNumberList;
    readonly SVG_FECOLORMATRIX_TYPE_HUEROTATE: number;
    readonly SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA: number;
    readonly SVG_FECOLORMATRIX_TYPE_MATRIX: number;
    readonly SVG_FECOLORMATRIX_TYPE_SATURATE: number;
    readonly SVG_FECOLORMATRIX_TYPE_UNKNOWN: number;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEColorMatrixElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEColorMatrixElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGFEColorMatrixElement: {
    readonly prototype: SVGFEColorMatrixElement;
    new(): SVGFEColorMatrixElement;
    readonly SVG_FECOLORMATRIX_TYPE_HUEROTATE: number;
    readonly SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA: number;
    readonly SVG_FECOLORMATRIX_TYPE_MATRIX: number;
    readonly SVG_FECOLORMATRIX_TYPE_SATURATE: number;
    readonly SVG_FECOLORMATRIX_TYPE_UNKNOWN: number;
};

/** Corresponds to the <feComponentTransfer> element. */
interface SVGFEComponentTransferElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly in1: SVGAnimatedString;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEComponentTransferElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEComponentTransferElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGFEComponentTransferElement: {
    readonly prototype: SVGFEComponentTransferElement;
    new(): SVGFEComponentTransferElement;
};

/** Corresponds to the <feComposite> element. */
interface SVGFECompositeElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly in1: SVGAnimatedString;
    readonly in2: SVGAnimatedString;
    readonly k1: SVGAnimatedNumber;
    readonly k2: SVGAnimatedNumber;
    readonly k3: SVGAnimatedNumber;
    readonly k4: SVGAnimatedNumber;
    readonly operator: SVGAnimatedEnumeration;
    readonly SVG_FECOMPOSITE_OPERATOR_ARITHMETIC: number;
    readonly SVG_FECOMPOSITE_OPERATOR_ATOP: number;
    readonly SVG_FECOMPOSITE_OPERATOR_IN: number;
    readonly SVG_FECOMPOSITE_OPERATOR_OUT: number;
    readonly SVG_FECOMPOSITE_OPERATOR_OVER: number;
    readonly SVG_FECOMPOSITE_OPERATOR_UNKNOWN: number;
    readonly SVG_FECOMPOSITE_OPERATOR_XOR: number;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFECompositeElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFECompositeElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGFECompositeElement: {
    readonly prototype: SVGFECompositeElement;
    new(): SVGFECompositeElement;
    readonly SVG_FECOMPOSITE_OPERATOR_ARITHMETIC: number;
    readonly SVG_FECOMPOSITE_OPERATOR_ATOP: number;
    readonly SVG_FECOMPOSITE_OPERATOR_IN: number;
    readonly SVG_FECOMPOSITE_OPERATOR_OUT: number;
    readonly SVG_FECOMPOSITE_OPERATOR_OVER: number;
    readonly SVG_FECOMPOSITE_OPERATOR_UNKNOWN: number;
    readonly SVG_FECOMPOSITE_OPERATOR_XOR: number;
};

/** Corresponds to the <feConvolveMatrix> element. */
interface SVGFEConvolveMatrixElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly bias: SVGAnimatedNumber;
    readonly divisor: SVGAnimatedNumber;
    readonly edgeMode: SVGAnimatedEnumeration;
    readonly in1: SVGAnimatedString;
    readonly kernelMatrix: SVGAnimatedNumberList;
    readonly kernelUnitLengthX: SVGAnimatedNumber;
    readonly kernelUnitLengthY: SVGAnimatedNumber;
    readonly orderX: SVGAnimatedInteger;
    readonly orderY: SVGAnimatedInteger;
    readonly preserveAlpha: SVGAnimatedBoolean;
    readonly targetX: SVGAnimatedInteger;
    readonly targetY: SVGAnimatedInteger;
    readonly SVG_EDGEMODE_DUPLICATE: number;
    readonly SVG_EDGEMODE_NONE: number;
    readonly SVG_EDGEMODE_UNKNOWN: number;
    readonly SVG_EDGEMODE_WRAP: number;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEConvolveMatrixElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEConvolveMatrixElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGFEConvolveMatrixElement: {
    readonly prototype: SVGFEConvolveMatrixElement;
    new(): SVGFEConvolveMatrixElement;
    readonly SVG_EDGEMODE_DUPLICATE: number;
    readonly SVG_EDGEMODE_NONE: number;
    readonly SVG_EDGEMODE_UNKNOWN: number;
    readonly SVG_EDGEMODE_WRAP: number;
};

/** Corresponds to the <feDiffuseLighting> element. */
interface SVGFEDiffuseLightingElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly diffuseConstant: SVGAnimatedNumber;
    readonly in1: SVGAnimatedString;
    readonly kernelUnitLengthX: SVGAnimatedNumber;
    readonly kernelUnitLengthY: SVGAnimatedNumber;
    readonly surfaceScale: SVGAnimatedNumber;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEDiffuseLightingElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEDiffuseLightingElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGFEDiffuseLightingElement: {
    readonly prototype: SVGFEDiffuseLightingElement;
    new(): SVGFEDiffuseLightingElement;
};

/** Corresponds to the <feDisplacementMap> element. */
interface SVGFEDisplacementMapElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly in1: SVGAnimatedString;
    readonly in2: SVGAnimatedString;
    readonly scale: SVGAnimatedNumber;
    readonly xChannelSelector: SVGAnimatedEnumeration;
    readonly yChannelSelector: SVGAnimatedEnumeration;
    readonly SVG_CHANNEL_A: number;
    readonly SVG_CHANNEL_B: number;
    readonly SVG_CHANNEL_G: number;
    readonly SVG_CHANNEL_R: number;
    readonly SVG_CHANNEL_UNKNOWN: number;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEDisplacementMapElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEDisplacementMapElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGFEDisplacementMapElement: {
    readonly prototype: SVGFEDisplacementMapElement;
    new(): SVGFEDisplacementMapElement;
    readonly SVG_CHANNEL_A: number;
    readonly SVG_CHANNEL_B: number;
    readonly SVG_CHANNEL_G: number;
    readonly SVG_CHANNEL_R: number;
    readonly SVG_CHANNEL_UNKNOWN: number;
};

/** Corresponds to the <feDistantLight> element. */
interface SVGFEDistantLightElement extends SVGElement {
    readonly azimuth: SVGAnimatedNumber;
    readonly elevation: SVGAnimatedNumber;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEDistantLightElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEDistantLightElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGFEDistantLightElement: {
    readonly prototype: SVGFEDistantLightElement;
    new(): SVGFEDistantLightElement;
};

interface SVGFEDropShadowElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly dx: SVGAnimatedNumber;
    readonly dy: SVGAnimatedNumber;
    readonly in1: SVGAnimatedString;
    readonly stdDeviationX: SVGAnimatedNumber;
    readonly stdDeviationY: SVGAnimatedNumber;
    setStdDeviation(stdDeviationX: number, stdDeviationY: number): void;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEDropShadowElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEDropShadowElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGFEDropShadowElement: {
    readonly prototype: SVGFEDropShadowElement;
    new(): SVGFEDropShadowElement;
};

/** Corresponds to the <feFlood> element. */
interface SVGFEFloodElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEFloodElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEFloodElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGFEFloodElement: {
    readonly prototype: SVGFEFloodElement;
    new(): SVGFEFloodElement;
};

/** Corresponds to the <feFuncA> element. */
interface SVGFEFuncAElement extends SVGComponentTransferFunctionElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEFuncAElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEFuncAElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGFEFuncAElement: {
    readonly prototype: SVGFEFuncAElement;
    new(): SVGFEFuncAElement;
};

/** Corresponds to the <feFuncB> element. */
interface SVGFEFuncBElement extends SVGComponentTransferFunctionElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEFuncBElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEFuncBElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGFEFuncBElement: {
    readonly prototype: SVGFEFuncBElement;
    new(): SVGFEFuncBElement;
};

/** Corresponds to the <feFuncG> element. */
interface SVGFEFuncGElement extends SVGComponentTransferFunctionElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEFuncGElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEFuncGElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGFEFuncGElement: {
    readonly prototype: SVGFEFuncGElement;
    new(): SVGFEFuncGElement;
};

/** Corresponds to the <feFuncR> element. */
interface SVGFEFuncRElement extends SVGComponentTransferFunctionElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEFuncRElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEFuncRElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGFEFuncRElement: {
    readonly prototype: SVGFEFuncRElement;
    new(): SVGFEFuncRElement;
};

/** Corresponds to the <feGaussianBlur> element. */
interface SVGFEGaussianBlurElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly in1: SVGAnimatedString;
    readonly stdDeviationX: SVGAnimatedNumber;
    readonly stdDeviationY: SVGAnimatedNumber;
    setStdDeviation(stdDeviationX: number, stdDeviationY: number): void;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEGaussianBlurElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEGaussianBlurElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGFEGaussianBlurElement: {
    readonly prototype: SVGFEGaussianBlurElement;
    new(): SVGFEGaussianBlurElement;
};

/** Corresponds to the <feImage> element. */
interface SVGFEImageElement extends SVGElement, SVGFilterPrimitiveStandardAttributes, SVGURIReference {
    readonly preserveAspectRatio: SVGAnimatedPreserveAspectRatio;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEImageElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEImageElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGFEImageElement: {
    readonly prototype: SVGFEImageElement;
    new(): SVGFEImageElement;
};

/** Corresponds to the <feMerge> element. */
interface SVGFEMergeElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEMergeElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEMergeElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGFEMergeElement: {
    readonly prototype: SVGFEMergeElement;
    new(): SVGFEMergeElement;
};

/** Corresponds to the <feMergeNode> element. */
interface SVGFEMergeNodeElement extends SVGElement {
    readonly in1: SVGAnimatedString;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEMergeNodeElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEMergeNodeElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGFEMergeNodeElement: {
    readonly prototype: SVGFEMergeNodeElement;
    new(): SVGFEMergeNodeElement;
};

/** Corresponds to the <feMorphology> element. */
interface SVGFEMorphologyElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly in1: SVGAnimatedString;
    readonly operator: SVGAnimatedEnumeration;
    readonly radiusX: SVGAnimatedNumber;
    readonly radiusY: SVGAnimatedNumber;
    readonly SVG_MORPHOLOGY_OPERATOR_DILATE: number;
    readonly SVG_MORPHOLOGY_OPERATOR_ERODE: number;
    readonly SVG_MORPHOLOGY_OPERATOR_UNKNOWN: number;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEMorphologyElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEMorphologyElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGFEMorphologyElement: {
    readonly prototype: SVGFEMorphologyElement;
    new(): SVGFEMorphologyElement;
    readonly SVG_MORPHOLOGY_OPERATOR_DILATE: number;
    readonly SVG_MORPHOLOGY_OPERATOR_ERODE: number;
    readonly SVG_MORPHOLOGY_OPERATOR_UNKNOWN: number;
};

/** Corresponds to the <feOffset> element. */
interface SVGFEOffsetElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly dx: SVGAnimatedNumber;
    readonly dy: SVGAnimatedNumber;
    readonly in1: SVGAnimatedString;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEOffsetElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEOffsetElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGFEOffsetElement: {
    readonly prototype: SVGFEOffsetElement;
    new(): SVGFEOffsetElement;
};

/** Corresponds to the <fePointLight> element. */
interface SVGFEPointLightElement extends SVGElement {
    readonly x: SVGAnimatedNumber;
    readonly y: SVGAnimatedNumber;
    readonly z: SVGAnimatedNumber;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEPointLightElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEPointLightElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGFEPointLightElement: {
    readonly prototype: SVGFEPointLightElement;
    new(): SVGFEPointLightElement;
};

/** Corresponds to the <feSpecularLighting> element. */
interface SVGFESpecularLightingElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly in1: SVGAnimatedString;
    readonly kernelUnitLengthX: SVGAnimatedNumber;
    readonly kernelUnitLengthY: SVGAnimatedNumber;
    readonly specularConstant: SVGAnimatedNumber;
    readonly specularExponent: SVGAnimatedNumber;
    readonly surfaceScale: SVGAnimatedNumber;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFESpecularLightingElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFESpecularLightingElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGFESpecularLightingElement: {
    readonly prototype: SVGFESpecularLightingElement;
    new(): SVGFESpecularLightingElement;
};

/** Corresponds to the <feSpotLight> element. */
interface SVGFESpotLightElement extends SVGElement {
    readonly limitingConeAngle: SVGAnimatedNumber;
    readonly pointsAtX: SVGAnimatedNumber;
    readonly pointsAtY: SVGAnimatedNumber;
    readonly pointsAtZ: SVGAnimatedNumber;
    readonly specularExponent: SVGAnimatedNumber;
    readonly x: SVGAnimatedNumber;
    readonly y: SVGAnimatedNumber;
    readonly z: SVGAnimatedNumber;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFESpotLightElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFESpotLightElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGFESpotLightElement: {
    readonly prototype: SVGFESpotLightElement;
    new(): SVGFESpotLightElement;
};

/** Corresponds to the <feTile> element. */
interface SVGFETileElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly in1: SVGAnimatedString;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFETileElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFETileElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGFETileElement: {
    readonly prototype: SVGFETileElement;
    new(): SVGFETileElement;
};

/** Corresponds to the <feTurbulence> element. */
interface SVGFETurbulenceElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly baseFrequencyX: SVGAnimatedNumber;
    readonly baseFrequencyY: SVGAnimatedNumber;
    readonly numOctaves: SVGAnimatedInteger;
    readonly seed: SVGAnimatedNumber;
    readonly stitchTiles: SVGAnimatedEnumeration;
    readonly type: SVGAnimatedEnumeration;
    readonly SVG_STITCHTYPE_NOSTITCH: number;
    readonly SVG_STITCHTYPE_STITCH: number;
    readonly SVG_STITCHTYPE_UNKNOWN: number;
    readonly SVG_TURBULENCE_TYPE_FRACTALNOISE: number;
    readonly SVG_TURBULENCE_TYPE_TURBULENCE: number;
    readonly SVG_TURBULENCE_TYPE_UNKNOWN: number;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFETurbulenceElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFETurbulenceElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGFETurbulenceElement: {
    readonly prototype: SVGFETurbulenceElement;
    new(): SVGFETurbulenceElement;
    readonly SVG_STITCHTYPE_NOSTITCH: number;
    readonly SVG_STITCHTYPE_STITCH: number;
    readonly SVG_STITCHTYPE_UNKNOWN: number;
    readonly SVG_TURBULENCE_TYPE_FRACTALNOISE: number;
    readonly SVG_TURBULENCE_TYPE_TURBULENCE: number;
    readonly SVG_TURBULENCE_TYPE_UNKNOWN: number;
};

/** Provides access to the properties of <filter> elements, as well as methods to manipulate them. */
interface SVGFilterElement extends SVGElement, SVGURIReference {
    readonly filterUnits: SVGAnimatedEnumeration;
    readonly height: SVGAnimatedLength;
    readonly primitiveUnits: SVGAnimatedEnumeration;
    readonly width: SVGAnimatedLength;
    readonly x: SVGAnimatedLength;
    readonly y: SVGAnimatedLength;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFilterElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFilterElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGFilterElement: {
    readonly prototype: SVGFilterElement;
    new(): SVGFilterElement;
};

interface SVGFilterPrimitiveStandardAttributes {
    readonly height: SVGAnimatedLength;
    readonly result: SVGAnimatedString;
    readonly width: SVGAnimatedLength;
    readonly x: SVGAnimatedLength;
    readonly y: SVGAnimatedLength;
}

interface SVGFitToViewBox {
    readonly preserveAspectRatio: SVGAnimatedPreserveAspectRatio;
    readonly viewBox: SVGAnimatedRect;
}

/** Provides access to the properties of <foreignObject> elements, as well as methods to manipulate them. */
interface SVGForeignObjectElement extends SVGGraphicsElement {
    readonly height: SVGAnimatedLength;
    readonly width: SVGAnimatedLength;
    readonly x: SVGAnimatedLength;
    readonly y: SVGAnimatedLength;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGForeignObjectElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGForeignObjectElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGForeignObjectElement: {
    readonly prototype: SVGForeignObjectElement;
    new(): SVGForeignObjectElement;
};

/** Corresponds to the <g> element. */
interface SVGGElement extends SVGGraphicsElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGGElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGGElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGGElement: {
    readonly prototype: SVGGElement;
    new(): SVGGElement;
};

interface SVGGeometryElement extends SVGGraphicsElement {
    readonly pathLength: SVGAnimatedNumber;
    getPointAtLength(distance: number): DOMPoint;
    getTotalLength(): number;
    isPointInFill(point?: DOMPointInit): boolean;
    isPointInStroke(point?: DOMPointInit): boolean;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGGeometryElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGGeometryElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGGeometryElement: {
    readonly prototype: SVGGeometryElement;
    new(): SVGGeometryElement;
};

/** The SVGGradient interface is a base interface used by SVGLinearGradientElement and SVGRadialGradientElement. */
interface SVGGradientElement extends SVGElement, SVGURIReference {
    readonly gradientTransform: SVGAnimatedTransformList;
    readonly gradientUnits: SVGAnimatedEnumeration;
    readonly spreadMethod: SVGAnimatedEnumeration;
    readonly SVG_SPREADMETHOD_PAD: number;
    readonly SVG_SPREADMETHOD_REFLECT: number;
    readonly SVG_SPREADMETHOD_REPEAT: number;
    readonly SVG_SPREADMETHOD_UNKNOWN: number;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGGradientElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGGradientElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGGradientElement: {
    readonly prototype: SVGGradientElement;
    new(): SVGGradientElement;
    readonly SVG_SPREADMETHOD_PAD: number;
    readonly SVG_SPREADMETHOD_REFLECT: number;
    readonly SVG_SPREADMETHOD_REPEAT: number;
    readonly SVG_SPREADMETHOD_UNKNOWN: number;
};

/** SVG elements whose primary purpose is to directly render graphics into a group. */
interface SVGGraphicsElement extends SVGElement, SVGTests {
    readonly transform: SVGAnimatedTransformList;
    getBBox(options?: SVGBoundingBoxOptions): DOMRect;
    getCTM(): DOMMatrix | null;
    getScreenCTM(): DOMMatrix | null;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGGraphicsElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGGraphicsElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGGraphicsElement: {
    readonly prototype: SVGGraphicsElement;
    new(): SVGGraphicsElement;
};

/** Corresponds to the <image> element. */
interface SVGImageElement extends SVGGraphicsElement, SVGURIReference {
    readonly height: SVGAnimatedLength;
    readonly preserveAspectRatio: SVGAnimatedPreserveAspectRatio;
    readonly width: SVGAnimatedLength;
    readonly x: SVGAnimatedLength;
    readonly y: SVGAnimatedLength;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGImageElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGImageElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGImageElement: {
    readonly prototype: SVGImageElement;
    new(): SVGImageElement;
};

/** Correspond to the <length> basic data type. */
interface SVGLength {
    readonly unitType: number;
    value: number;
    valueAsString: string;
    valueInSpecifiedUnits: number;
    convertToSpecifiedUnits(unitType: number): void;
    newValueSpecifiedUnits(unitType: number, valueInSpecifiedUnits: number): void;
    readonly SVG_LENGTHTYPE_CM: number;
    readonly SVG_LENGTHTYPE_EMS: number;
    readonly SVG_LENGTHTYPE_EXS: number;
    readonly SVG_LENGTHTYPE_IN: number;
    readonly SVG_LENGTHTYPE_MM: number;
    readonly SVG_LENGTHTYPE_NUMBER: number;
    readonly SVG_LENGTHTYPE_PC: number;
    readonly SVG_LENGTHTYPE_PERCENTAGE: number;
    readonly SVG_LENGTHTYPE_PT: number;
    readonly SVG_LENGTHTYPE_PX: number;
    readonly SVG_LENGTHTYPE_UNKNOWN: number;
}

declare var SVGLength: {
    readonly prototype: SVGLength;
    new(): SVGLength;
    readonly SVG_LENGTHTYPE_CM: number;
    readonly SVG_LENGTHTYPE_EMS: number;
    readonly SVG_LENGTHTYPE_EXS: number;
    readonly SVG_LENGTHTYPE_IN: number;
    readonly SVG_LENGTHTYPE_MM: number;
    readonly SVG_LENGTHTYPE_NUMBER: number;
    readonly SVG_LENGTHTYPE_PC: number;
    readonly SVG_LENGTHTYPE_PERCENTAGE: number;
    readonly SVG_LENGTHTYPE_PT: number;
    readonly SVG_LENGTHTYPE_PX: number;
    readonly SVG_LENGTHTYPE_UNKNOWN: number;
};

/** The SVGLengthList defines a list of SVGLength objects. */
interface SVGLengthList {
    readonly length: number;
    readonly numberOfItems: number;
    appendItem(newItem: SVGLength): SVGLength;
    clear(): void;
    getItem(index: number): SVGLength;
    initialize(newItem: SVGLength): SVGLength;
    insertItemBefore(newItem: SVGLength, index: number): SVGLength;
    removeItem(index: number): SVGLength;
    replaceItem(newItem: SVGLength, index: number): SVGLength;
    [index: number]: SVGLength;
}

declare var SVGLengthList: {
    readonly prototype: SVGLengthList;
    new(): SVGLengthList;
};

/** Provides access to the properties of <line> elements, as well as methods to manipulate them. */
interface SVGLineElement extends SVGGeometryElement {
    readonly x1: SVGAnimatedLength;
    readonly x2: SVGAnimatedLength;
    readonly y1: SVGAnimatedLength;
    readonly y2: SVGAnimatedLength;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGLineElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGLineElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGLineElement: {
    readonly prototype: SVGLineElement;
    new(): SVGLineElement;
};

/** Corresponds to the <linearGradient> element. */
interface SVGLinearGradientElement extends SVGGradientElement {
    readonly x1: SVGAnimatedLength;
    readonly x2: SVGAnimatedLength;
    readonly y1: SVGAnimatedLength;
    readonly y2: SVGAnimatedLength;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGLinearGradientElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGLinearGradientElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGLinearGradientElement: {
    readonly prototype: SVGLinearGradientElement;
    new(): SVGLinearGradientElement;
};

interface SVGMPathElement extends SVGElement, SVGURIReference {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGMPathElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGMPathElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGMPathElement: {
    readonly prototype: SVGMPathElement;
    new(): SVGMPathElement;
};

interface SVGMarkerElement extends SVGElement, SVGFitToViewBox {
    readonly markerHeight: SVGAnimatedLength;
    readonly markerUnits: SVGAnimatedEnumeration;
    readonly markerWidth: SVGAnimatedLength;
    readonly orientAngle: SVGAnimatedAngle;
    readonly orientType: SVGAnimatedEnumeration;
    readonly refX: SVGAnimatedLength;
    readonly refY: SVGAnimatedLength;
    setOrientToAngle(angle: SVGAngle): void;
    setOrientToAuto(): void;
    readonly SVG_MARKERUNITS_STROKEWIDTH: number;
    readonly SVG_MARKERUNITS_UNKNOWN: number;
    readonly SVG_MARKERUNITS_USERSPACEONUSE: number;
    readonly SVG_MARKER_ORIENT_ANGLE: number;
    readonly SVG_MARKER_ORIENT_AUTO: number;
    readonly SVG_MARKER_ORIENT_UNKNOWN: number;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGMarkerElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGMarkerElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGMarkerElement: {
    readonly prototype: SVGMarkerElement;
    new(): SVGMarkerElement;
    readonly SVG_MARKERUNITS_STROKEWIDTH: number;
    readonly SVG_MARKERUNITS_UNKNOWN: number;
    readonly SVG_MARKERUNITS_USERSPACEONUSE: number;
    readonly SVG_MARKER_ORIENT_ANGLE: number;
    readonly SVG_MARKER_ORIENT_AUTO: number;
    readonly SVG_MARKER_ORIENT_UNKNOWN: number;
};

/** Provides access to the properties of <mask> elements, as well as methods to manipulate them. */
interface SVGMaskElement extends SVGElement {
    readonly height: SVGAnimatedLength;
    readonly maskContentUnits: SVGAnimatedEnumeration;
    readonly maskUnits: SVGAnimatedEnumeration;
    readonly width: SVGAnimatedLength;
    readonly x: SVGAnimatedLength;
    readonly y: SVGAnimatedLength;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGMaskElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGMaskElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGMaskElement: {
    readonly prototype: SVGMaskElement;
    new(): SVGMaskElement;
};

/** Corresponds to the <metadata> element. */
interface SVGMetadataElement extends SVGElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGMetadataElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGMetadataElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGMetadataElement: {
    readonly prototype: SVGMetadataElement;
    new(): SVGMetadataElement;
};

/** Corresponds to the <number> basic data type. */
interface SVGNumber {
    value: number;
}

declare var SVGNumber: {
    readonly prototype: SVGNumber;
    new(): SVGNumber;
};

/** The SVGNumberList defines a list of SVGNumber objects. */
interface SVGNumberList {
    readonly length: number;
    readonly numberOfItems: number;
    appendItem(newItem: SVGNumber): SVGNumber;
    clear(): void;
    getItem(index: number): SVGNumber;
    initialize(newItem: SVGNumber): SVGNumber;
    insertItemBefore(newItem: SVGNumber, index: number): SVGNumber;
    removeItem(index: number): SVGNumber;
    replaceItem(newItem: SVGNumber, index: number): SVGNumber;
    [index: number]: SVGNumber;
}

declare var SVGNumberList: {
    readonly prototype: SVGNumberList;
    new(): SVGNumberList;
};

/** Corresponds to the <path> element. */
interface SVGPathElement extends SVGGeometryElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGPathElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGPathElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGPathElement: {
    readonly prototype: SVGPathElement;
    new(): SVGPathElement;
};

/** Corresponds to the <pattern> element. */
interface SVGPatternElement extends SVGElement, SVGFitToViewBox, SVGURIReference {
    readonly height: SVGAnimatedLength;
    readonly patternContentUnits: SVGAnimatedEnumeration;
    readonly patternTransform: SVGAnimatedTransformList;
    readonly patternUnits: SVGAnimatedEnumeration;
    readonly width: SVGAnimatedLength;
    readonly x: SVGAnimatedLength;
    readonly y: SVGAnimatedLength;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGPatternElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGPatternElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGPatternElement: {
    readonly prototype: SVGPatternElement;
    new(): SVGPatternElement;
};

interface SVGPointList {
    readonly length: number;
    readonly numberOfItems: number;
    appendItem(newItem: DOMPoint): DOMPoint;
    clear(): void;
    getItem(index: number): DOMPoint;
    initialize(newItem: DOMPoint): DOMPoint;
    insertItemBefore(newItem: DOMPoint, index: number): DOMPoint;
    removeItem(index: number): DOMPoint;
    replaceItem(newItem: DOMPoint, index: number): DOMPoint;
    [index: number]: DOMPoint;
}

declare var SVGPointList: {
    readonly prototype: SVGPointList;
    new(): SVGPointList;
};

/** Provides access to the properties of <polygon> elements, as well as methods to manipulate them. */
interface SVGPolygonElement extends SVGGeometryElement, SVGAnimatedPoints {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGPolygonElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGPolygonElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGPolygonElement: {
    readonly prototype: SVGPolygonElement;
    new(): SVGPolygonElement;
};

/** Provides access to the properties of <polyline> elements, as well as methods to manipulate them. */
interface SVGPolylineElement extends SVGGeometryElement, SVGAnimatedPoints {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGPolylineElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGPolylineElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGPolylineElement: {
    readonly prototype: SVGPolylineElement;
    new(): SVGPolylineElement;
};

/** Corresponds to the preserveAspectRatio attribute, which is available for some of SVG's elements. */
interface SVGPreserveAspectRatio {
    align: number;
    meetOrSlice: number;
    readonly SVG_MEETORSLICE_MEET: number;
    readonly SVG_MEETORSLICE_SLICE: number;
    readonly SVG_MEETORSLICE_UNKNOWN: number;
    readonly SVG_PRESERVEASPECTRATIO_NONE: number;
    readonly SVG_PRESERVEASPECTRATIO_UNKNOWN: number;
    readonly SVG_PRESERVEASPECTRATIO_XMAXYMAX: number;
    readonly SVG_PRESERVEASPECTRATIO_XMAXYMID: number;
    readonly SVG_PRESERVEASPECTRATIO_XMAXYMIN: number;
    readonly SVG_PRESERVEASPECTRATIO_XMIDYMAX: number;
    readonly SVG_PRESERVEASPECTRATIO_XMIDYMID: number;
    readonly SVG_PRESERVEASPECTRATIO_XMIDYMIN: number;
    readonly SVG_PRESERVEASPECTRATIO_XMINYMAX: number;
    readonly SVG_PRESERVEASPECTRATIO_XMINYMID: number;
    readonly SVG_PRESERVEASPECTRATIO_XMINYMIN: number;
}

declare var SVGPreserveAspectRatio: {
    readonly prototype: SVGPreserveAspectRatio;
    new(): SVGPreserveAspectRatio;
    readonly SVG_MEETORSLICE_MEET: number;
    readonly SVG_MEETORSLICE_SLICE: number;
    readonly SVG_MEETORSLICE_UNKNOWN: number;
    readonly SVG_PRESERVEASPECTRATIO_NONE: number;
    readonly SVG_PRESERVEASPECTRATIO_UNKNOWN: number;
    readonly SVG_PRESERVEASPECTRATIO_XMAXYMAX: number;
    readonly SVG_PRESERVEASPECTRATIO_XMAXYMID: number;
    readonly SVG_PRESERVEASPECTRATIO_XMAXYMIN: number;
    readonly SVG_PRESERVEASPECTRATIO_XMIDYMAX: number;
    readonly SVG_PRESERVEASPECTRATIO_XMIDYMID: number;
    readonly SVG_PRESERVEASPECTRATIO_XMIDYMIN: number;
    readonly SVG_PRESERVEASPECTRATIO_XMINYMAX: number;
    readonly SVG_PRESERVEASPECTRATIO_XMINYMID: number;
    readonly SVG_PRESERVEASPECTRATIO_XMINYMIN: number;
};

/** Corresponds to the <RadialGradient> element. */
interface SVGRadialGradientElement extends SVGGradientElement {
    readonly cx: SVGAnimatedLength;
    readonly cy: SVGAnimatedLength;
    readonly fr: SVGAnimatedLength;
    readonly fx: SVGAnimatedLength;
    readonly fy: SVGAnimatedLength;
    readonly r: SVGAnimatedLength;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGRadialGradientElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGRadialGradientElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGRadialGradientElement: {
    readonly prototype: SVGRadialGradientElement;
    new(): SVGRadialGradientElement;
};

/** Provides access to the properties of <rect> elements, as well as methods to manipulate them. */
interface SVGRectElement extends SVGGeometryElement {
    readonly height: SVGAnimatedLength;
    readonly rx: SVGAnimatedLength;
    readonly ry: SVGAnimatedLength;
    readonly width: SVGAnimatedLength;
    readonly x: SVGAnimatedLength;
    readonly y: SVGAnimatedLength;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGRectElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGRectElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGRectElement: {
    readonly prototype: SVGRectElement;
    new(): SVGRectElement;
};

interface SVGSVGElementEventMap extends SVGElementEventMap, WindowEventHandlersEventMap {
}

/** Provides access to the properties of <svg> elements, as well as methods to manipulate them. This interface contains also various miscellaneous commonly-used utility methods, such as matrix operations and the ability to control the time of redraw on visual rendering devices. */
interface SVGSVGElement extends SVGGraphicsElement, SVGFitToViewBox, WindowEventHandlers {
    currentScale: number;
    readonly currentTranslate: DOMPointReadOnly;
    readonly height: SVGAnimatedLength;
    readonly width: SVGAnimatedLength;
    readonly x: SVGAnimatedLength;
    readonly y: SVGAnimatedLength;
    animationsPaused(): boolean;
    checkEnclosure(element: SVGElement, rect: DOMRectReadOnly): boolean;
    checkIntersection(element: SVGElement, rect: DOMRectReadOnly): boolean;
    createSVGAngle(): SVGAngle;
    createSVGLength(): SVGLength;
    createSVGMatrix(): DOMMatrix;
    createSVGNumber(): SVGNumber;
    createSVGPoint(): DOMPoint;
    createSVGRect(): DOMRect;
    createSVGTransform(): SVGTransform;
    createSVGTransformFromMatrix(matrix?: DOMMatrix2DInit): SVGTransform;
    deselectAll(): void;
    /** @deprecated */
    forceRedraw(): void;
    getCurrentTime(): number;
    getElementById(elementId: string): Element;
    getEnclosureList(rect: DOMRectReadOnly, referenceElement: SVGElement | null): NodeListOf<SVGCircleElement | SVGEllipseElement | SVGImageElement | SVGLineElement | SVGPathElement | SVGPolygonElement | SVGPolylineElement | SVGRectElement | SVGTextElement | SVGUseElement>;
    getIntersectionList(rect: DOMRectReadOnly, referenceElement: SVGElement | null): NodeListOf<SVGCircleElement | SVGEllipseElement | SVGImageElement | SVGLineElement | SVGPathElement | SVGPolygonElement | SVGPolylineElement | SVGRectElement | SVGTextElement | SVGUseElement>;
    pauseAnimations(): void;
    setCurrentTime(seconds: number): void;
    /** @deprecated */
    suspendRedraw(maxWaitMilliseconds: number): number;
    unpauseAnimations(): void;
    /** @deprecated */
    unsuspendRedraw(suspendHandleID: number): void;
    /** @deprecated */
    unsuspendRedrawAll(): void;
    addEventListener<K extends keyof SVGSVGElementEventMap>(type: K, listener: (this: SVGSVGElement, ev: SVGSVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGSVGElementEventMap>(type: K, listener: (this: SVGSVGElement, ev: SVGSVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGSVGElement: {
    readonly prototype: SVGSVGElement;
    new(): SVGSVGElement;
};

/** Corresponds to the SVG <script> element. */
interface SVGScriptElement extends SVGElement, SVGURIReference {
    type: string;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGScriptElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGScriptElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGScriptElement: {
    readonly prototype: SVGScriptElement;
    new(): SVGScriptElement;
};

interface SVGSetElement extends SVGAnimationElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGSetElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGSetElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGSetElement: {
    readonly prototype: SVGSetElement;
    new(): SVGSetElement;
};

/** Corresponds to the <stop> element. */
interface SVGStopElement extends SVGElement {
    readonly offset: SVGAnimatedNumber;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGStopElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGStopElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGStopElement: {
    readonly prototype: SVGStopElement;
    new(): SVGStopElement;
};

/** The SVGStringList defines a list of DOMString objects. */
interface SVGStringList {
    readonly length: number;
    readonly numberOfItems: number;
    appendItem(newItem: string): string;
    clear(): void;
    getItem(index: number): string;
    initialize(newItem: string): string;
    insertItemBefore(newItem: string, index: number): string;
    removeItem(index: number): string;
    replaceItem(newItem: string, index: number): string;
    [index: number]: string;
}

declare var SVGStringList: {
    readonly prototype: SVGStringList;
    new(): SVGStringList;
};

/** Corresponds to the SVG <style> element. */
interface SVGStyleElement extends SVGElement, LinkStyle {
    disabled: boolean;
    media: string;
    title: string;
    type: string;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGStyleElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGStyleElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGStyleElement: {
    readonly prototype: SVGStyleElement;
    new(): SVGStyleElement;
};

/** Corresponds to the <switch> element. */
interface SVGSwitchElement extends SVGGraphicsElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGSwitchElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGSwitchElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGSwitchElement: {
    readonly prototype: SVGSwitchElement;
    new(): SVGSwitchElement;
};

/** Corresponds to the <symbol> element. */
interface SVGSymbolElement extends SVGElement, SVGFitToViewBox {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGSymbolElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGSymbolElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGSymbolElement: {
    readonly prototype: SVGSymbolElement;
    new(): SVGSymbolElement;
};

/** A <tspan> element. */
interface SVGTSpanElement extends SVGTextPositioningElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTSpanElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTSpanElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGTSpanElement: {
    readonly prototype: SVGTSpanElement;
    new(): SVGTSpanElement;
};

interface SVGTests {
    readonly requiredExtensions: SVGStringList;
    readonly systemLanguage: SVGStringList;
}

/** Implemented by elements that support rendering child text content. It is inherited by various text-related interfaces, such as SVGTextElement, SVGTSpanElement, SVGTRefElement, SVGAltGlyphElement and SVGTextPathElement. */
interface SVGTextContentElement extends SVGGraphicsElement {
    readonly lengthAdjust: SVGAnimatedEnumeration;
    readonly textLength: SVGAnimatedLength;
    getCharNumAtPosition(point?: DOMPointInit): number;
    getComputedTextLength(): number;
    getEndPositionOfChar(charnum: number): DOMPoint;
    getExtentOfChar(charnum: number): DOMRect;
    getNumberOfChars(): number;
    getRotationOfChar(charnum: number): number;
    getStartPositionOfChar(charnum: number): DOMPoint;
    getSubStringLength(charnum: number, nchars: number): number;
    /** @deprecated */
    selectSubString(charnum: number, nchars: number): void;
    readonly LENGTHADJUST_SPACING: number;
    readonly LENGTHADJUST_SPACINGANDGLYPHS: number;
    readonly LENGTHADJUST_UNKNOWN: number;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTextContentElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTextContentElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGTextContentElement: {
    readonly prototype: SVGTextContentElement;
    new(): SVGTextContentElement;
    readonly LENGTHADJUST_SPACING: number;
    readonly LENGTHADJUST_SPACINGANDGLYPHS: number;
    readonly LENGTHADJUST_UNKNOWN: number;
};

/** Corresponds to the <text> elements. */
interface SVGTextElement extends SVGTextPositioningElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTextElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTextElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGTextElement: {
    readonly prototype: SVGTextElement;
    new(): SVGTextElement;
};

/** Corresponds to the <textPath> element. */
interface SVGTextPathElement extends SVGTextContentElement, SVGURIReference {
    readonly method: SVGAnimatedEnumeration;
    readonly spacing: SVGAnimatedEnumeration;
    readonly startOffset: SVGAnimatedLength;
    readonly TEXTPATH_METHODTYPE_ALIGN: number;
    readonly TEXTPATH_METHODTYPE_STRETCH: number;
    readonly TEXTPATH_METHODTYPE_UNKNOWN: number;
    readonly TEXTPATH_SPACINGTYPE_AUTO: number;
    readonly TEXTPATH_SPACINGTYPE_EXACT: number;
    readonly TEXTPATH_SPACINGTYPE_UNKNOWN: number;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTextPathElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTextPathElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGTextPathElement: {
    readonly prototype: SVGTextPathElement;
    new(): SVGTextPathElement;
    readonly TEXTPATH_METHODTYPE_ALIGN: number;
    readonly TEXTPATH_METHODTYPE_STRETCH: number;
    readonly TEXTPATH_METHODTYPE_UNKNOWN: number;
    readonly TEXTPATH_SPACINGTYPE_AUTO: number;
    readonly TEXTPATH_SPACINGTYPE_EXACT: number;
    readonly TEXTPATH_SPACINGTYPE_UNKNOWN: number;
};

/** Implemented by elements that support attributes that position individual text glyphs. It is inherited by SVGTextElement, SVGTSpanElement, SVGTRefElement and SVGAltGlyphElement. */
interface SVGTextPositioningElement extends SVGTextContentElement {
    readonly dx: SVGAnimatedLengthList;
    readonly dy: SVGAnimatedLengthList;
    readonly rotate: SVGAnimatedNumberList;
    readonly x: SVGAnimatedLengthList;
    readonly y: SVGAnimatedLengthList;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTextPositioningElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTextPositioningElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGTextPositioningElement: {
    readonly prototype: SVGTextPositioningElement;
    new(): SVGTextPositioningElement;
};

/** Corresponds to the <title> element. */
interface SVGTitleElement extends SVGElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTitleElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTitleElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGTitleElement: {
    readonly prototype: SVGTitleElement;
    new(): SVGTitleElement;
};

/** SVGTransform is the interface for one of the component transformations within an SVGTransformList; thus, an SVGTransform object corresponds to a single component (e.g., scale(…) or matrix(…)) within a transform attribute. */
interface SVGTransform {
    readonly angle: number;
    readonly matrix: DOMMatrix;
    readonly type: number;
    setMatrix(matrix?: DOMMatrix2DInit): void;
    setRotate(angle: number, cx: number, cy: number): void;
    setScale(sx: number, sy: number): void;
    setSkewX(angle: number): void;
    setSkewY(angle: number): void;
    setTranslate(tx: number, ty: number): void;
    readonly SVG_TRANSFORM_MATRIX: number;
    readonly SVG_TRANSFORM_ROTATE: number;
    readonly SVG_TRANSFORM_SCALE: number;
    readonly SVG_TRANSFORM_SKEWX: number;
    readonly SVG_TRANSFORM_SKEWY: number;
    readonly SVG_TRANSFORM_TRANSLATE: number;
    readonly SVG_TRANSFORM_UNKNOWN: number;
}

declare var SVGTransform: {
    readonly prototype: SVGTransform;
    new(): SVGTransform;
    readonly SVG_TRANSFORM_MATRIX: number;
    readonly SVG_TRANSFORM_ROTATE: number;
    readonly SVG_TRANSFORM_SCALE: number;
    readonly SVG_TRANSFORM_SKEWX: number;
    readonly SVG_TRANSFORM_SKEWY: number;
    readonly SVG_TRANSFORM_TRANSLATE: number;
    readonly SVG_TRANSFORM_UNKNOWN: number;
};

/** The SVGTransformList defines a list of SVGTransform objects. */
interface SVGTransformList {
    readonly length: number;
    readonly numberOfItems: number;
    appendItem(newItem: SVGTransform): SVGTransform;
    clear(): void;
    consolidate(): SVGTransform | null;
    createSVGTransformFromMatrix(matrix?: DOMMatrix2DInit): SVGTransform;
    getItem(index: number): SVGTransform;
    initialize(newItem: SVGTransform): SVGTransform;
    insertItemBefore(newItem: SVGTransform, index: number): SVGTransform;
    removeItem(index: number): SVGTransform;
    replaceItem(newItem: SVGTransform, index: number): SVGTransform;
    [index: number]: SVGTransform;
}

declare var SVGTransformList: {
    readonly prototype: SVGTransformList;
    new(): SVGTransformList;
};

interface SVGURIReference {
    readonly href: SVGAnimatedString;
}

/** A commonly used set of constants used for reflecting gradientUnits, patternContentUnits and other similar attributes. */
interface SVGUnitTypes {
    readonly SVG_UNIT_TYPE_OBJECTBOUNDINGBOX: number;
    readonly SVG_UNIT_TYPE_UNKNOWN: number;
    readonly SVG_UNIT_TYPE_USERSPACEONUSE: number;
}

declare var SVGUnitTypes: {
    readonly prototype: SVGUnitTypes;
    new(): SVGUnitTypes;
    readonly SVG_UNIT_TYPE_OBJECTBOUNDINGBOX: number;
    readonly SVG_UNIT_TYPE_UNKNOWN: number;
    readonly SVG_UNIT_TYPE_USERSPACEONUSE: number;
};

/** Corresponds to the <use> element. */
interface SVGUseElement extends SVGGraphicsElement, SVGURIReference {
    readonly height: SVGAnimatedLength;
    readonly width: SVGAnimatedLength;
    readonly x: SVGAnimatedLength;
    readonly y: SVGAnimatedLength;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGUseElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGUseElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGUseElement: {
    readonly prototype: SVGUseElement;
    new(): SVGUseElement;
};

/** Provides access to the properties of <view> elements, as well as methods to manipulate them. */
interface SVGViewElement extends SVGElement, SVGFitToViewBox {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGViewElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGViewElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SVGViewElement: {
    readonly prototype: SVGViewElement;
    new(): SVGViewElement;
};

/** A screen, usually the one on which the current window is being rendered, and is obtained using window.screen. */
interface Screen {
    readonly availHeight: number;
    readonly availWidth: number;
    readonly colorDepth: number;
    readonly height: number;
    readonly orientation: ScreenOrientation;
    readonly pixelDepth: number;
    readonly width: number;
}

declare var Screen: {
    readonly prototype: Screen;
    new(): Screen;
};

interface ScreenOrientationEventMap {
    "change": Event;
}

interface ScreenOrientation extends EventTarget {
    readonly angle: number;
    onchange: ((this: ScreenOrientation, ev: Event) => any) | null;
    readonly type: OrientationType;
    lock(orientation: OrientationLockType): Promise<void>;
    unlock(): void;
    addEventListener<K extends keyof ScreenOrientationEventMap>(type: K, listener: (this: ScreenOrientation, ev: ScreenOrientationEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof ScreenOrientationEventMap>(type: K, listener: (this: ScreenOrientation, ev: ScreenOrientationEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var ScreenOrientation: {
    readonly prototype: ScreenOrientation;
    new(): ScreenOrientation;
};

interface ScriptProcessorNodeEventMap {
    "audioprocess": AudioProcessingEvent;
}

/** Allows the generation, processing, or analyzing of audio using JavaScript.
 * @deprecated As of the August 29 2014 Web Audio API spec publication, this feature has been marked as deprecated, and was replaced by AudioWorklet (see AudioWorkletNode). */
interface ScriptProcessorNode extends AudioNode {
    /** @deprecated */
    readonly bufferSize: number;
    /** @deprecated */
    onaudioprocess: ((this: ScriptProcessorNode, ev: AudioProcessingEvent) => any) | null;
    addEventListener<K extends keyof ScriptProcessorNodeEventMap>(type: K, listener: (this: ScriptProcessorNode, ev: ScriptProcessorNodeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof ScriptProcessorNodeEventMap>(type: K, listener: (this: ScriptProcessorNode, ev: ScriptProcessorNodeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

/** @deprecated */
declare var ScriptProcessorNode: {
    readonly prototype: ScriptProcessorNode;
    new(): ScriptProcessorNode;
};

/** Inherits from Event, and represents the event object of an event sent on a document or worker when its content security policy is violated. */
interface SecurityPolicyViolationEvent extends Event {
    readonly blockedURI: string;
    readonly columnNumber: number;
    readonly disposition: SecurityPolicyViolationEventDisposition;
    readonly documentURI: string;
    readonly effectiveDirective: string;
    readonly lineNumber: number;
    readonly originalPolicy: string;
    readonly referrer: string;
    readonly sample: string;
    readonly sourceFile: string;
    readonly statusCode: number;
    readonly violatedDirective: string;
}

declare var SecurityPolicyViolationEvent: {
    readonly prototype: SecurityPolicyViolationEvent;
    new(type: string, eventInitDict?: SecurityPolicyViolationEventInit): SecurityPolicyViolationEvent;
};

/** A Selection object represents the range of text selected by the user or the current position of the caret. To obtain a Selection object for examination or modification, call Window.getSelection(). */
interface Selection {
    readonly anchorNode: Node | null;
    readonly anchorOffset: number;
    readonly focusNode: Node | null;
    readonly focusOffset: number;
    readonly isCollapsed: boolean;
    readonly rangeCount: number;
    readonly type: string;
    addRange(range: Range): void;
    collapse(node: Node | null, offset?: number): void;
    collapseToEnd(): void;
    collapseToStart(): void;
    containsNode(node: Node, allowPartialContainment?: boolean): boolean;
    deleteFromDocument(): void;
    empty(): void;
    extend(node: Node, offset?: number): void;
    getRangeAt(index: number): Range;
    removeAllRanges(): void;
    removeRange(range: Range): void;
    selectAllChildren(node: Node): void;
    setBaseAndExtent(anchorNode: Node, anchorOffset: number, focusNode: Node, focusOffset: number): void;
    setPosition(node: Node | null, offset?: number): void;
    toString(): string;
}

declare var Selection: {
    readonly prototype: Selection;
    new(): Selection;
    toString(): string;
};

interface ServiceWorkerEventMap extends AbstractWorkerEventMap {
    "statechange": Event;
}

/** This ServiceWorker API interface provides a reference to a service worker. Multiple browsing contexts (e.g. pages, workers, etc.) can be associated with the same service worker, each through a unique ServiceWorker object. */
interface ServiceWorker extends EventTarget, AbstractWorker {
    onstatechange: ((this: ServiceWorker, ev: Event) => any) | null;
    readonly scriptURL: string;
    readonly state: ServiceWorkerState;
    postMessage(message: any, transfer: Transferable[]): void;
    postMessage(message: any, options?: PostMessageOptions): void;
    addEventListener<K extends keyof ServiceWorkerEventMap>(type: K, listener: (this: ServiceWorker, ev: ServiceWorkerEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof ServiceWorkerEventMap>(type: K, listener: (this: ServiceWorker, ev: ServiceWorkerEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var ServiceWorker: {
    readonly prototype: ServiceWorker;
    new(): ServiceWorker;
};

interface ServiceWorkerContainerEventMap {
    "controllerchange": Event;
    "message": MessageEvent;
    "messageerror": MessageEvent;
}

/** The ServiceWorkerContainer interface of the ServiceWorker API provides an object representing the service worker as an overall unit in the network ecosystem, including facilities to register, unregister and update service workers, and access the state of service workers and their registrations. */
interface ServiceWorkerContainer extends EventTarget {
    readonly controller: ServiceWorker | null;
    oncontrollerchange: ((this: ServiceWorkerContainer, ev: Event) => any) | null;
    onmessage: ((this: ServiceWorkerContainer, ev: MessageEvent) => any) | null;
    onmessageerror: ((this: ServiceWorkerContainer, ev: MessageEvent) => any) | null;
    readonly ready: Promise<ServiceWorkerRegistration>;
    getRegistration(clientURL?: string | URL): Promise<ServiceWorkerRegistration | undefined>;
    getRegistrations(): Promise<ReadonlyArray<ServiceWorkerRegistration>>;
    register(scriptURL: string | URL, options?: RegistrationOptions): Promise<ServiceWorkerRegistration>;
    startMessages(): void;
    addEventListener<K extends keyof ServiceWorkerContainerEventMap>(type: K, listener: (this: ServiceWorkerContainer, ev: ServiceWorkerContainerEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof ServiceWorkerContainerEventMap>(type: K, listener: (this: ServiceWorkerContainer, ev: ServiceWorkerContainerEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var ServiceWorkerContainer: {
    readonly prototype: ServiceWorkerContainer;
    new(): ServiceWorkerContainer;
};

interface ServiceWorkerRegistrationEventMap {
    "updatefound": Event;
}

/** This ServiceWorker API interface represents the service worker registration. You register a service worker to control one or more pages that share the same origin. */
interface ServiceWorkerRegistration extends EventTarget {
    readonly active: ServiceWorker | null;
    readonly installing: ServiceWorker | null;
    onupdatefound: ((this: ServiceWorkerRegistration, ev: Event) => any) | null;
    readonly pushManager: PushManager;
    readonly scope: string;
    readonly updateViaCache: ServiceWorkerUpdateViaCache;
    readonly waiting: ServiceWorker | null;
    getNotifications(filter?: GetNotificationOptions): Promise<Notification[]>;
    showNotification(title: string, options?: NotificationOptions): Promise<void>;
    unregister(): Promise<boolean>;
    update(): Promise<void>;
    addEventListener<K extends keyof ServiceWorkerRegistrationEventMap>(type: K, listener: (this: ServiceWorkerRegistration, ev: ServiceWorkerRegistrationEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof ServiceWorkerRegistrationEventMap>(type: K, listener: (this: ServiceWorkerRegistration, ev: ServiceWorkerRegistrationEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var ServiceWorkerRegistration: {
    readonly prototype: ServiceWorkerRegistration;
    new(): ServiceWorkerRegistration;
};

interface ShadowRoot extends DocumentFragment, DocumentOrShadowRoot, InnerHTML {
    readonly host: Element;
    readonly mode: ShadowRootMode;
    /**
     * Throws a "NotSupportedError" DOMException if context object is a shadow root.
     */
}

declare var ShadowRoot: {
    readonly prototype: ShadowRoot;
    new(): ShadowRoot;
};

interface SharedWorker extends EventTarget, AbstractWorker {
    /**
     * Returns sharedWorker's MessagePort object which can be used to communicate with the global environment.
     */
    readonly port: MessagePort;
    addEventListener<K extends keyof AbstractWorkerEventMap>(type: K, listener: (this: SharedWorker, ev: AbstractWorkerEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof AbstractWorkerEventMap>(type: K, listener: (this: SharedWorker, ev: AbstractWorkerEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SharedWorker: {
    readonly prototype: SharedWorker;
    new(scriptURL: string | URL, options?: string | WorkerOptions): SharedWorker;
};

interface Slottable {
    readonly assignedSlot: HTMLSlotElement | null;
}

interface SourceBufferEventMap {
    "abort": Event;
    "error": Event;
    "update": Event;
    "updateend": Event;
    "updatestart": Event;
}

/** A chunk of media to be passed into an HTMLMediaElement and played, via a MediaSource object. This can be made up of one or several media segments. */
interface SourceBuffer extends EventTarget {
    appendWindowEnd: number;
    appendWindowStart: number;
    readonly buffered: TimeRanges;
    mode: AppendMode;
    onabort: ((this: SourceBuffer, ev: Event) => any) | null;
    onerror: ((this: SourceBuffer, ev: Event) => any) | null;
    onupdate: ((this: SourceBuffer, ev: Event) => any) | null;
    onupdateend: ((this: SourceBuffer, ev: Event) => any) | null;
    onupdatestart: ((this: SourceBuffer, ev: Event) => any) | null;
    timestampOffset: number;
    readonly updating: boolean;
    abort(): void;
    appendBuffer(data: BufferSource): void;
    changeType(type: string): void;
    remove(start: number, end: number): void;
    addEventListener<K extends keyof SourceBufferEventMap>(type: K, listener: (this: SourceBuffer, ev: SourceBufferEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SourceBufferEventMap>(type: K, listener: (this: SourceBuffer, ev: SourceBufferEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SourceBuffer: {
    readonly prototype: SourceBuffer;
    new(): SourceBuffer;
};

interface SourceBufferListEventMap {
    "addsourcebuffer": Event;
    "removesourcebuffer": Event;
}

/** A simple container list for multiple SourceBuffer objects. */
interface SourceBufferList extends EventTarget {
    readonly length: number;
    onaddsourcebuffer: ((this: SourceBufferList, ev: Event) => any) | null;
    onremovesourcebuffer: ((this: SourceBufferList, ev: Event) => any) | null;
    addEventListener<K extends keyof SourceBufferListEventMap>(type: K, listener: (this: SourceBufferList, ev: SourceBufferListEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SourceBufferListEventMap>(type: K, listener: (this: SourceBufferList, ev: SourceBufferListEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
    [index: number]: SourceBuffer;
}

declare var SourceBufferList: {
    readonly prototype: SourceBufferList;
    new(): SourceBufferList;
};

interface SpeechRecognitionAlternative {
    readonly confidence: number;
    readonly transcript: string;
}

declare var SpeechRecognitionAlternative: {
    readonly prototype: SpeechRecognitionAlternative;
    new(): SpeechRecognitionAlternative;
};

interface SpeechRecognitionErrorEvent extends Event {
    readonly error: SpeechRecognitionErrorCode;
    readonly message: string;
}

declare var SpeechRecognitionErrorEvent: {
    readonly prototype: SpeechRecognitionErrorEvent;
    new(type: string, eventInitDict: SpeechRecognitionErrorEventInit): SpeechRecognitionErrorEvent;
};

interface SpeechRecognitionResult {
    readonly isFinal: boolean;
    readonly length: number;
    item(index: number): SpeechRecognitionAlternative;
    [index: number]: SpeechRecognitionAlternative;
}

declare var SpeechRecognitionResult: {
    readonly prototype: SpeechRecognitionResult;
    new(): SpeechRecognitionResult;
};

interface SpeechRecognitionResultList {
    readonly length: number;
    item(index: number): SpeechRecognitionResult;
    [index: number]: SpeechRecognitionResult;
}

declare var SpeechRecognitionResultList: {
    readonly prototype: SpeechRecognitionResultList;
    new(): SpeechRecognitionResultList;
};

interface SpeechSynthesisEventMap {
    "voiceschanged": Event;
}

/** This Web Speech API interface is the controller interface for the speech service; this can be used to retrieve information about the synthesis voices available on the device, start and pause speech, and other commands besides. */
interface SpeechSynthesis extends EventTarget {
    onvoiceschanged: ((this: SpeechSynthesis, ev: Event) => any) | null;
    readonly paused: boolean;
    readonly pending: boolean;
    readonly speaking: boolean;
    cancel(): void;
    getVoices(): SpeechSynthesisVoice[];
    pause(): void;
    resume(): void;
    speak(utterance: SpeechSynthesisUtterance): void;
    addEventListener<K extends keyof SpeechSynthesisEventMap>(type: K, listener: (this: SpeechSynthesis, ev: SpeechSynthesisEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SpeechSynthesisEventMap>(type: K, listener: (this: SpeechSynthesis, ev: SpeechSynthesisEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SpeechSynthesis: {
    readonly prototype: SpeechSynthesis;
    new(): SpeechSynthesis;
};

interface SpeechSynthesisErrorEvent extends SpeechSynthesisEvent {
    readonly error: SpeechSynthesisErrorCode;
}

declare var SpeechSynthesisErrorEvent: {
    readonly prototype: SpeechSynthesisErrorEvent;
    new(type: string, eventInitDict: SpeechSynthesisErrorEventInit): SpeechSynthesisErrorEvent;
};

/** This Web Speech API interface contains information about the current state of SpeechSynthesisUtterance objects that have been processed in the speech service. */
interface SpeechSynthesisEvent extends Event {
    readonly charIndex: number;
    readonly charLength: number;
    readonly elapsedTime: number;
    readonly name: string;
    readonly utterance: SpeechSynthesisUtterance;
}

declare var SpeechSynthesisEvent: {
    readonly prototype: SpeechSynthesisEvent;
    new(type: string, eventInitDict: SpeechSynthesisEventInit): SpeechSynthesisEvent;
};

interface SpeechSynthesisUtteranceEventMap {
    "boundary": SpeechSynthesisEvent;
    "end": SpeechSynthesisEvent;
    "error": SpeechSynthesisErrorEvent;
    "mark": SpeechSynthesisEvent;
    "pause": SpeechSynthesisEvent;
    "resume": SpeechSynthesisEvent;
    "start": SpeechSynthesisEvent;
}

/** This Web Speech API interface represents a speech request. It contains the content the speech service should read and information about how to read it (e.g. language, pitch and volume.) */
interface SpeechSynthesisUtterance extends EventTarget {
    lang: string;
    onboundary: ((this: SpeechSynthesisUtterance, ev: SpeechSynthesisEvent) => any) | null;
    onend: ((this: SpeechSynthesisUtterance, ev: SpeechSynthesisEvent) => any) | null;
    onerror: ((this: SpeechSynthesisUtterance, ev: SpeechSynthesisErrorEvent) => any) | null;
    onmark: ((this: SpeechSynthesisUtterance, ev: SpeechSynthesisEvent) => any) | null;
    onpause: ((this: SpeechSynthesisUtterance, ev: SpeechSynthesisEvent) => any) | null;
    onresume: ((this: SpeechSynthesisUtterance, ev: SpeechSynthesisEvent) => any) | null;
    onstart: ((this: SpeechSynthesisUtterance, ev: SpeechSynthesisEvent) => any) | null;
    pitch: number;
    rate: number;
    text: string;
    voice: SpeechSynthesisVoice | null;
    volume: number;
    addEventListener<K extends keyof SpeechSynthesisUtteranceEventMap>(type: K, listener: (this: SpeechSynthesisUtterance, ev: SpeechSynthesisUtteranceEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SpeechSynthesisUtteranceEventMap>(type: K, listener: (this: SpeechSynthesisUtterance, ev: SpeechSynthesisUtteranceEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var SpeechSynthesisUtterance: {
    readonly prototype: SpeechSynthesisUtterance;
    new(text?: string): SpeechSynthesisUtterance;
};

/** This Web Speech API interface represents a voice that the system supports. Every SpeechSynthesisVoice has its own relative speech service including information about language, name and URI. */
interface SpeechSynthesisVoice {
    readonly default: boolean;
    readonly lang: string;
    readonly localService: boolean;
    readonly name: string;
    readonly voiceURI: string;
}

declare var SpeechSynthesisVoice: {
    readonly prototype: SpeechSynthesisVoice;
    new(): SpeechSynthesisVoice;
};

interface StaticRange extends AbstractRange {
}

declare var StaticRange: {
    readonly prototype: StaticRange;
    new(init: StaticRangeInit): StaticRange;
};

/** The pan property takes a unitless value between -1 (full left pan) and 1 (full right pan). This interface was introduced as a much simpler way to apply a simple panning effect than having to use a full PannerNode. */
interface StereoPannerNode extends AudioNode {
    readonly pan: AudioParam;
}

declare var StereoPannerNode: {
    readonly prototype: StereoPannerNode;
    new(context: BaseAudioContext, options?: StereoPannerOptions): StereoPannerNode;
};

/** This Web Storage API interface provides access to a particular domain's session or local storage. It allows, for example, the addition, modification, or deletion of stored data items. */
interface Storage {
    /**
     * Returns the number of key/value pairs.
     */
    readonly length: number;
    /**
     * Removes all key/value pairs, if there are any.
     *
     * Envía un evento de almacenamiento en los objetos Window que contienen un objeto de almacenamiento equivalente.
     */
    clear(): void;
    /**
     * Returns the current value associated with the given key, or null if the given key does not exist.
     */
    getItem(key: string): string | null;
    /**
     * Returns the name of the nth key, or null if n is greater than or equal to the number of key/value pairs.
     */
    key(index: number): string | null;
    /**
     * Removes the key/value pair with the given key, if a key/value pair with the given key exists.
     *
     * Envía un evento de almacenamiento en los objetos Window que contienen un objeto de almacenamiento equivalente.
     */
    removeItem(key: string): void;
    /**
     * Establece el valor del par identificado por clave a valor, creando un nuevo par de clave/valor si anteriormente no existía para la clave.
     *
     * Lanza una excepción "ciotaExceedError" de Domexception si el nuevo valor no se puede establecer. (La configuración podría fallar si, por ejemplo, el usuario ha deshabilitado el almacenamiento para el sitio, o si se ha excedido la cuota).
     *
     * Envía un evento de almacenamiento en los objetos Window que contienen un objeto de almacenamiento equivalente.
     */
    setItem(key: string, value: string): void;
    [name: string]: any;
}

declare var Storage: {
    readonly prototype: Storage;
    new(): Storage;
};

/** A StorageEvent is sent to a window when a storage area it has access to is changed within the context of another document. */
interface StorageEvent extends Event {
    /**
     * Returns the key of the storage item being changed.
     */
    readonly key: string | null;
    /**
     * Returns the new value of the key of the storage item whose value is being changed.
     */
    readonly newValue: string | null;
    /**
     * Returns the old value of the key of the storage item whose value is being changed.
     */
    readonly oldValue: string | null;
    /**
     * Returns the Storage object that was affected.
     */
    readonly storageArea: Storage | null;
    /**
     * Returns the URL of the document whose storage item changed.
     */
    readonly url: string;
    initStorageEvent(type: string, bubbles?: boolean, cancelable?: boolean, key?: string | null, oldValue?: string | null, newValue?: string | null, url?: string | URL, storageArea?: Storage | null): void;
}

declare var StorageEvent: {
    readonly prototype: StorageEvent;
    new(type: string, eventInitDict?: StorageEventInit): StorageEvent;
};

interface StorageManager {
    estimate(): Promise<StorageEstimate>;
    persist(): Promise<boolean>;
    persisted(): Promise<boolean>;
}

declare var StorageManager: {
    readonly prototype: StorageManager;
    new(): StorageManager;
};

/** A single style sheet. CSS style sheets will further implement the more specialized CSSStyleSheet interface. */
interface StyleSheet {
    disabled: boolean;
    readonly href: string | null;
    readonly media: MediaList;
    readonly ownerNode: Element | ProcessingInstruction | null;
    readonly parentStyleSheet: CSSStyleSheet | null;
    readonly title: string | null;
    readonly type: string;
}

declare var StyleSheet: {
    readonly prototype: StyleSheet;
    new(): StyleSheet;
};

/** A list of StyleSheet. */
interface StyleSheetList {
    readonly length: number;
    item(index: number): CSSStyleSheet | null;
    [index: number]: CSSStyleSheet;
}

declare var StyleSheetList: {
    readonly prototype: StyleSheetList;
    new(): StyleSheetList;
};

interface SubmitEvent extends Event {
    /**
     * Returns the element representing the submit button that triggered the form submission, or null if the submission was not triggered by a button.
     */
    readonly submitter: HTMLElement | null;
}

declare var SubmitEvent: {
    readonly prototype: SubmitEvent;
    new(type: string, eventInitDict?: SubmitEventInit): SubmitEvent;
};

/** This Web Crypto API interface provides a number of low-level cryptographic functions. It is accessed via the Crypto.subtle properties available in a window context (via Window.crypto). */
interface SubtleCrypto {
    decrypt(algorithm: AlgorithmIdentifier | RsaOaepParams | AesCtrParams | AesCbcParams | AesGcmParams, key: CryptoKey, data: BufferSource): Promise<any>;
    deriveBits(algorithm: AlgorithmIdentifier | EcdhKeyDeriveParams | HkdfParams | Pbkdf2Params, baseKey: CryptoKey, length: number): Promise<ArrayBuffer>;
    deriveKey(algorithm: AlgorithmIdentifier | EcdhKeyDeriveParams | HkdfParams | Pbkdf2Params, baseKey: CryptoKey, derivedKeyType: AlgorithmIdentifier | AesDerivedKeyParams | HmacImportParams | HkdfParams | Pbkdf2Params, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKey>;
    digest(algorithm: AlgorithmIdentifier, data: BufferSource): Promise<ArrayBuffer>;
    encrypt(algorithm: AlgorithmIdentifier | RsaOaepParams | AesCtrParams | AesCbcParams | AesGcmParams, key: CryptoKey, data: BufferSource): Promise<any>;
    exportKey(format: "jwk", key: CryptoKey): Promise<JsonWebKey>;
    exportKey(format: Exclude<KeyFormat, "jwk">, key: CryptoKey): Promise<ArrayBuffer>;
    generateKey(algorithm: RsaHashedKeyGenParams | EcKeyGenParams, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKeyPair>;
    generateKey(algorithm: AesKeyGenParams | HmacKeyGenParams | Pbkdf2Params, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKey>;
    generateKey(algorithm: AlgorithmIdentifier, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKeyPair | CryptoKey>;
    importKey(format: "jwk", keyData: JsonWebKey, algorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | AesKeyAlgorithm, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKey>;
    importKey(format: Exclude<KeyFormat, "jwk">, keyData: BufferSource, algorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | AesKeyAlgorithm, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKey>;
    sign(algorithm: AlgorithmIdentifier | RsaPssParams | EcdsaParams, key: CryptoKey, data: BufferSource): Promise<ArrayBuffer>;
    unwrapKey(format: KeyFormat, wrappedKey: BufferSource, unwrappingKey: CryptoKey, unwrapAlgorithm: AlgorithmIdentifier | RsaOaepParams | AesCtrParams | AesCbcParams | AesGcmParams, unwrappedKeyAlgorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | AesKeyAlgorithm, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKey>;
    verify(algorithm: AlgorithmIdentifier | RsaPssParams | EcdsaParams, key: CryptoKey, signature: BufferSource, data: BufferSource): Promise<boolean>;
    wrapKey(format: KeyFormat, key: CryptoKey, wrappingKey: CryptoKey, wrapAlgorithm: AlgorithmIdentifier | RsaOaepParams | AesCtrParams | AesCbcParams | AesGcmParams): Promise<ArrayBuffer>;
}

declare var SubtleCrypto: {
    readonly prototype: SubtleCrypto;
    new(): SubtleCrypto;
};

/** The textual content of Element or Attr. If an element has no markup within its content, it has a single child implementing Text that contains the element's text. However, if the element contains markup, it is parsed into information items and Text nodes that form its children. */
interface Text extends CharacterData, Slottable {
    readonly assignedSlot: HTMLSlotElement | null;
    /**
     * Returns the combined data of all direct Text node siblings.
     */
    readonly wholeText: string;
    /**
     * Splits data at the given offset and returns the remainder as Text node.
     */
    splitText(offset: number): Text;
}

declare var Text: {
    readonly prototype: Text;
    new(data?: string): Text;
};

/** A decoder for a specific method, that is a specific character encoding, like utf-8, iso-8859-2, koi8, cp1261, gbk, etc. A decoder takes a stream of bytes as input and emits a stream of code points. For a more scalable, non-native library, see StringView – a C-like representation of strings based on typed arrays. */
interface TextDecoder extends TextDecoderCommon {
    /**
     * Returns the result of running encoding's decoder. The method can be invoked zero or more times with options's stream set to true, and then once without options's stream (or set to false), to process a fragmented input. If the invocation without options's stream (or set to false) has no input, it's clearest to omit both arguments.
     *
     * ```
     * var string = "", decoder = new TextDecoder(encoding), buffer;
     * while(buffer = next_chunk()) {
     *   string += decoder.decode(buffer, {stream:true});
     * }
     * string += decoder.decode(); // end-of-queue
     * ```
     *
     * If the error mode is "fatal" and encoding's decoder returns error, throws a TypeError.
     */
    decode(input?: BufferSource, options?: TextDecodeOptions): string;
}

declare var TextDecoder: {
    readonly prototype: TextDecoder;
    new(label?: string, options?: TextDecoderOptions): TextDecoder;
};

interface TextDecoderCommon {
    /**
     * Returns encoding's name, lowercased.
     */
    readonly encoding: string;
    /**
     * Returns true if error mode is "fatal", otherwise false.
     */
    readonly fatal: boolean;
    /**
     * Returns the value of ignore BOM.
     */
    readonly ignoreBOM: boolean;
}

interface TextDecoderStream extends GenericTransformStream, TextDecoderCommon {
    readonly readable: ReadableStream<string>;
    readonly writable: WritableStream<BufferSource>;
}

declare var TextDecoderStream: {
    readonly prototype: TextDecoderStream;
    new(label?: string, options?: TextDecoderOptions): TextDecoderStream;
};

/** TextEncoder takes a stream of code points as input and emits a stream of bytes. For a more scalable, non-native library, see StringView – a C-like representation of strings based on typed arrays. */
interface TextEncoder extends TextEncoderCommon {
    /**
     * Returns the result of running UTF-8's encoder.
     */
    encode(input?: string): Uint8Array;
    /**
     * Runs the UTF-8 encoder on source, stores the result of that operation into destination, and returns the progress made as an object wherein read is the number of converted code units of source and written is the number of bytes modified in destination.
     */
    encodeInto(source: string, destination: Uint8Array): TextEncoderEncodeIntoResult;
}

declare var TextEncoder: {
    readonly prototype: TextEncoder;
    new(): TextEncoder;
};

interface TextEncoderCommon {
    /**
     * Returns "utf-8".
     */
    readonly encoding: string;
}

interface TextEncoderStream extends GenericTransformStream, TextEncoderCommon {
    readonly readable: ReadableStream<Uint8Array>;
    readonly writable: WritableStream<string>;
}

declare var TextEncoderStream: {
    readonly prototype: TextEncoderStream;
    new(): TextEncoderStream;
};

/** The dimensions of a piece of text in the canvas, as created by the CanvasRenderingContext2D.measureText() method. */
interface TextMetrics {
    /**
     * Returns the measurement described below.
     */
    readonly actualBoundingBoxAscent: number;
    /**
     * Returns the measurement described below.
     */
    readonly actualBoundingBoxDescent: number;
    /**
     * Returns the measurement described below.
     */
    readonly actualBoundingBoxLeft: number;
    /**
     * Returns the measurement described below.
     */
    readonly actualBoundingBoxRight: number;
    /**
     * Returns the measurement described below.
     */
    readonly fontBoundingBoxAscent: number;
    /**
     * Returns the measurement described below.
     */
    readonly fontBoundingBoxDescent: number;
    /**
     * Returns the measurement described below.
     */
    readonly width: number;
}

declare var TextMetrics: {
    readonly prototype: TextMetrics;
    new(): TextMetrics;
};

interface TextTrackEventMap {
    "cuechange": Event;
}

/** This interface also inherits properties from EventTarget. */
interface TextTrack extends EventTarget {
    /**
     * Returns the text track cues from the text track list of cues that are currently active (i.e. that start before the current playback position and end after it), as a TextTrackCueList object.
     */
    readonly activeCues: TextTrackCueList | null;
    /**
     * Returns the text track list of cues, as a TextTrackCueList object.
     */
    readonly cues: TextTrackCueList | null;
    /**
     * Returns the ID of the given track.
     *
     * For in-band tracks, this is the ID that can be used with a fragment if the format supports media fragment syntax, and that can be used with the getTrackById() method.
     *
     * For TextTrack objects corresponding to track elements, this is the ID of the track element.
     */
    readonly id: string;
    /**
     * Returns the text track in-band metadata track dispatch type string.
     */
    readonly inBandMetadataTrackDispatchType: string;
    /**
     * Returns the text track kind string.
     */
    readonly kind: TextTrackKind;
    /**
     * Returns the text track label, if there is one, or the empty string otherwise (indicating that a custom label probably needs to be generated from the other attributes of the object if the object is exposed to the user).
     */
    readonly label: string;
    /**
     * Returns the text track language string.
     */
    readonly language: string;
    /**
     * Returns the text track mode, represented by a string from the following list:
     *
     * Can be set, to change the mode.
     */
    mode: TextTrackMode;
    oncuechange: ((this: TextTrack, ev: Event) => any) | null;
    /**
     * Adds the given cue to textTrack's text track list of cues.
     */
    addCue(cue: TextTrackCue): void;
    /**
     * Removes the given cue from textTrack's text track list of cues.
     */
    removeCue(cue: TextTrackCue): void;
    addEventListener<K extends keyof TextTrackEventMap>(type: K, listener: (this: TextTrack, ev: TextTrackEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof TextTrackEventMap>(type: K, listener: (this: TextTrack, ev: TextTrackEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var TextTrack: {
    readonly prototype: TextTrack;
    new(): TextTrack;
};

interface TextTrackCueEventMap {
    "enter": Event;
    "exit": Event;
}

/** TextTrackCues represent a string of text that will be displayed for some duration of time on a TextTrack. This includes the start and end times that the cue will be displayed. A TextTrackCue cannot be used directly, instead one of the derived types (e.g. VTTCue) must be used. */
interface TextTrackCue extends EventTarget {
    /**
     * Returns the text track cue end time, in seconds.
     *
     * Can be set.
     */
    endTime: number;
    /**
     * Returns the text track cue identifier.
     *
     * Can be set.
     */
    id: string;
    onenter: ((this: TextTrackCue, ev: Event) => any) | null;
    onexit: ((this: TextTrackCue, ev: Event) => any) | null;
    /**
     * Returns true if the text track cue pause-on-exit flag is set, false otherwise.
     *
     * Can be set.
     */
    pauseOnExit: boolean;
    /**
     * Returns the text track cue start time, in seconds.
     *
     * Can be set.
     */
    startTime: number;
    /**
     * Returns the TextTrack object to which this text track cue belongs, if any, or null otherwise.
     */
    readonly track: TextTrack | null;
    addEventListener<K extends keyof TextTrackCueEventMap>(type: K, listener: (this: TextTrackCue, ev: TextTrackCueEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof TextTrackCueEventMap>(type: K, listener: (this: TextTrackCue, ev: TextTrackCueEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var TextTrackCue: {
    readonly prototype: TextTrackCue;
    new(): TextTrackCue;
};

interface TextTrackCueList {
    /**
     * Returns the number of cues in the list.
     */
    readonly length: number;
    /**
     * Returns the first text track cue (in text track cue order) with text track cue identifier id.
     *
     * Returns null if none of the cues have the given identifier or if the argument is the empty string.
     */
    getCueById(id: string): TextTrackCue | null;
    [index: number]: TextTrackCue;
}

declare var TextTrackCueList: {
    readonly prototype: TextTrackCueList;
    new(): TextTrackCueList;
};

interface TextTrackListEventMap {
    "addtrack": TrackEvent;
    "change": Event;
    "removetrack": TrackEvent;
}

interface TextTrackList extends EventTarget {
    readonly length: number;
    onaddtrack: ((this: TextTrackList, ev: TrackEvent) => any) | null;
    onchange: ((this: TextTrackList, ev: Event) => any) | null;
    onremovetrack: ((this: TextTrackList, ev: TrackEvent) => any) | null;
    getTrackById(id: string): TextTrack | null;
    addEventListener<K extends keyof TextTrackListEventMap>(type: K, listener: (this: TextTrackList, ev: TextTrackListEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof TextTrackListEventMap>(type: K, listener: (this: TextTrackList, ev: TextTrackListEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
    [index: number]: TextTrack;
}

declare var TextTrackList: {
    readonly prototype: TextTrackList;
    new(): TextTrackList;
};

/** Used to represent a set of time ranges, primarily for the purpose of tracking which portions of media have been buffered when loading it for use by the <audio> and <video> elements. */
interface TimeRanges {
    /**
     * Returns the number of ranges in the object.
     */
    readonly length: number;
    /**
     * Returns the time for the end of the range with the given index.
     *
     * Throws an "IndexSizeError" DOMException if the index is out of range.
     */
    end(index: number): number;
    /**
     * Returns the time for the start of the range with the given index.
     *
     * Throws an "IndexSizeError" DOMException if the index is out of range.
     */
    start(index: number): number;
}

declare var TimeRanges: {
    readonly prototype: TimeRanges;
    new(): TimeRanges;
};

/** A single contact point on a touch-sensitive device. The contact point is commonly a finger or stylus and the device may be a touchscreen or trackpad. */
interface Touch {
    readonly clientX: number;
    readonly clientY: number;
    readonly force: number;
    readonly identifier: number;
    readonly pageX: number;
    readonly pageY: number;
    readonly radiusX: number;
    readonly radiusY: number;
    readonly rotationAngle: number;
    readonly screenX: number;
    readonly screenY: number;
    readonly target: EventTarget;
}

declare var Touch: {
    readonly prototype: Touch;
    new(touchInitDict: TouchInit): Touch;
};

/** An event sent when the state of contacts with a touch-sensitive surface changes. This surface can be a touch screen or trackpad, for example. The event can describe one or more points of contact with the screen and includes support for detecting movement, addition and removal of contact points, and so forth. */
interface TouchEvent extends UIEvent {
    readonly altKey: boolean;
    readonly changedTouches: TouchList;
    readonly ctrlKey: boolean;
    readonly metaKey: boolean;
    readonly shiftKey: boolean;
    readonly targetTouches: TouchList;
    readonly touches: TouchList;
}

declare var TouchEvent: {
    readonly prototype: TouchEvent;
    new(type: string, eventInitDict?: TouchEventInit): TouchEvent;
};

/** A list of contact points on a touch surface. For example, if the user has three fingers on the touch surface (such as a screen or trackpad), the corresponding TouchList object would have one Touch object for each finger, for a total of three entries. */
interface TouchList {
    readonly length: number;
    item(index: number): Touch | null;
    [index: number]: Touch;
}

declare var TouchList: {
    readonly prototype: TouchList;
    new(): TouchList;
};

/** The TrackEvent interface, part of the HTML DOM specification, is used for events which represent changes to the set of available tracks on an HTML media element; these events are addtrack and removetrack. */
interface TrackEvent extends Event {
    /**
     * Returns the track object (TextTrack, AudioTrack, or VideoTrack) to which the event relates.
     */
    readonly track: TextTrack | null;
}

declare var TrackEvent: {
    readonly prototype: TrackEvent;
    new(type: string, eventInitDict?: TrackEventInit): TrackEvent;
};

interface TransformStream<I = any, O = any> {
    readonly readable: ReadableStream<O>;
    readonly writable: WritableStream<I>;
}

declare var TransformStream: {
    readonly prototype: TransformStream;
    new<I = any, O = any>(transformer?: Transformer<I, O>, writableStrategy?: QueuingStrategy<I>, readableStrategy?: QueuingStrategy<O>): TransformStream<I, O>;
};

interface TransformStreamDefaultController<O = any> {
    readonly desiredSize: number | null;
    enqueue(chunk?: O): void;
    error(reason?: any): void;
    terminate(): void;
}

declare var TransformStreamDefaultController: {
    readonly prototype: TransformStreamDefaultController;
    new(): TransformStreamDefaultController;
};

/** Events providing information related to transitions. */
interface TransitionEvent extends Event {
    readonly elapsedTime: number;
    readonly propertyName: string;
    readonly pseudoElement: string;
}

declare var TransitionEvent: {
    readonly prototype: TransitionEvent;
    new(type: string, transitionEventInitDict?: TransitionEventInit): TransitionEvent;
};

/** The nodes of a document subtree and a position within them. */
interface TreeWalker {
    currentNode: Node;
    readonly filter: NodeFilter | null;
    readonly root: Node;
    readonly whatToShow: number;
    firstChild(): Node | null;
    lastChild(): Node | null;
    nextNode(): Node | null;
    nextSibling(): Node | null;
    parentNode(): Node | null;
    previousNode(): Node | null;
    previousSibling(): Node | null;
}

declare var TreeWalker: {
    readonly prototype: TreeWalker;
    new(): TreeWalker;
};

/** Simple user interface events. */
interface UIEvent extends Event {
    readonly detail: number;
    readonly view: Window | null;
    /** @deprecated */
    readonly which: number;
    /** @deprecated */
    initUIEvent(typeArg: string, bubblesArg?: boolean, cancelableArg?: boolean, viewArg?: Window | null, detailArg?: number): void;
}

declare var UIEvent: {
    readonly prototype: UIEvent;
    new(type: string, eventInitDict?: UIEventInit): UIEvent;
};

/** The URL interface represents an object providing static methods used for creating object URLs. */
interface URL {
    hash: string;
    host: string;
    hostname: string;
    href: string;
    toString(): string;
    readonly origin: string;
    password: string;
    pathname: string;
    port: string;
    protocol: string;
    search: string;
    readonly searchParams: URLSearchParams;
    username: string;
    toJSON(): string;
}

declare var URL: {
    readonly prototype: URL;
    new(url: string | URL, base?: string | URL): URL;
    createObjectURL(object: any): string;
    revokeObjectURL(url: string): void;
};

type webkitURL = URL;
declare var webkitURL: typeof URL;

interface URLSearchParams {
    /**
     * Appends a specified key/value pair as a new search parameter.
     */
    append(name: string, value: string): void;
    /**
     * Deletes the given search parameter, and its associated value, from the list of all search parameters.
     */
    delete(name: string): void;
    /**
     * Returns the first value associated to the given search parameter.
     */
    get(name: string): string | null;
    /**
     * Returns all the values association with a given search parameter.
     */
    getAll(name: string): string[];
    /**
     * Returns a Boolean indicating if such a search parameter exists.
     */
    has(name: string): boolean;
    /**
     * Sets the value associated to a given search parameter to the given value. If there were several values, delete the others.
     */
    set(name: string, value: string): void;
    sort(): void;
    /**
     * Returns a string containing a query string suitable for use in a URL. Does not include the question mark.
     */
    toString(): string;
    forEach(callbackfn: (value: string, key: string, parent: URLSearchParams) => void, thisArg?: any): void;
}

declare var URLSearchParams: {
    readonly prototype: URLSearchParams;
    new(init?: string[][] | Record<string, string> | string | URLSearchParams): URLSearchParams;
    toString(): string;
};

interface VTTCue extends TextTrackCue {
    align: AlignSetting;
    line: LineAndPositionSetting;
    lineAlign: LineAlignSetting;
    position: LineAndPositionSetting;
    positionAlign: PositionAlignSetting;
    region: VTTRegion | null;
    size: number;
    snapToLines: boolean;
    text: string;
    vertical: DirectionSetting;
    getCueAsHTML(): DocumentFragment;
    addEventListener<K extends keyof TextTrackCueEventMap>(type: K, listener: (this: VTTCue, ev: TextTrackCueEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof TextTrackCueEventMap>(type: K, listener: (this: VTTCue, ev: TextTrackCueEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var VTTCue: {
    readonly prototype: VTTCue;
    new(startTime: number, endTime: number, text: string): VTTCue;
};

interface VTTRegion {
    id: string;
    lines: number;
    regionAnchorX: number;
    regionAnchorY: number;
    scroll: ScrollSetting;
    viewportAnchorX: number;
    viewportAnchorY: number;
    width: number;
}

declare var VTTRegion: {
    readonly prototype: VTTRegion;
    new(): VTTRegion;
};

/** The validity states that an element can be in, with respect to constraint validation. Together, they help explain why an element's value fails to validate, if it's not valid. */
interface ValidityState {
    readonly badInput: boolean;
    readonly customError: boolean;
    readonly patternMismatch: boolean;
    readonly rangeOverflow: boolean;
    readonly rangeUnderflow: boolean;
    readonly stepMismatch: boolean;
    readonly tooLong: boolean;
    readonly tooShort: boolean;
    readonly typeMismatch: boolean;
    readonly valid: boolean;
    readonly valueMissing: boolean;
}

declare var ValidityState: {
    readonly prototype: ValidityState;
    new(): ValidityState;
};

/** Returned by the HTMLVideoElement.getVideoPlaybackQuality() method and contains metrics that can be used to determine the playback quality of a video. */
interface VideoPlaybackQuality {
    /** @deprecated */
    readonly corruptedVideoFrames: number;
    readonly creationTime: DOMHighResTimeStamp;
    readonly droppedVideoFrames: number;
    readonly totalVideoFrames: number;
}

declare var VideoPlaybackQuality: {
    readonly prototype: VideoPlaybackQuality;
    new(): VideoPlaybackQuality;
};

interface VisualViewportEventMap {
    "resize": Event;
    "scroll": Event;
}

interface VisualViewport extends EventTarget {
    readonly height: number;
    readonly offsetLeft: number;
    readonly offsetTop: number;
    onresize: ((this: VisualViewport, ev: Event) => any) | null;
    onscroll: ((this: VisualViewport, ev: Event) => any) | null;
    readonly pageLeft: number;
    readonly pageTop: number;
    readonly scale: number;
    readonly width: number;
    addEventListener<K extends keyof VisualViewportEventMap>(type: K, listener: (this: VisualViewport, ev: VisualViewportEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof VisualViewportEventMap>(type: K, listener: (this: VisualViewport, ev: VisualViewportEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var VisualViewport: {
    readonly prototype: VisualViewport;
    new(): VisualViewport;
};

interface WEBGL_color_buffer_float {
    readonly FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT: GLenum;
    readonly RGBA32F_EXT: GLenum;
    readonly UNSIGNED_NORMALIZED_EXT: GLenum;
}

interface WEBGL_compressed_texture_astc {
    getSupportedProfiles(): string[];
    readonly COMPRESSED_RGBA_ASTC_10x10_KHR: GLenum;
    readonly COMPRESSED_RGBA_ASTC_10x5_KHR: GLenum;
    readonly COMPRESSED_RGBA_ASTC_10x6_KHR: GLenum;
    readonly COMPRESSED_RGBA_ASTC_10x8_KHR: GLenum;
    readonly COMPRESSED_RGBA_ASTC_12x10_KHR: GLenum;
    readonly COMPRESSED_RGBA_ASTC_12x12_KHR: GLenum;
    readonly COMPRESSED_RGBA_ASTC_4x4_KHR: GLenum;
    readonly COMPRESSED_RGBA_ASTC_5x4_KHR: GLenum;
    readonly COMPRESSED_RGBA_ASTC_5x5_KHR: GLenum;
    readonly COMPRESSED_RGBA_ASTC_6x5_KHR: GLenum;
    readonly COMPRESSED_RGBA_ASTC_6x6_KHR: GLenum;
    readonly COMPRESSED_RGBA_ASTC_8x5_KHR: GLenum;
    readonly COMPRESSED_RGBA_ASTC_8x6_KHR: GLenum;
    readonly COMPRESSED_RGBA_ASTC_8x8_KHR: GLenum;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR: GLenum;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR: GLenum;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR: GLenum;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR: GLenum;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR: GLenum;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR: GLenum;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR: GLenum;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR: GLenum;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR: GLenum;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR: GLenum;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR: GLenum;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR: GLenum;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR: GLenum;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR: GLenum;
}

interface WEBGL_compressed_texture_etc {
    readonly COMPRESSED_R11_EAC: GLenum;
    readonly COMPRESSED_RG11_EAC: GLenum;
    readonly COMPRESSED_RGB8_ETC2: GLenum;
    readonly COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2: GLenum;
    readonly COMPRESSED_RGBA8_ETC2_EAC: GLenum;
    readonly COMPRESSED_SIGNED_R11_EAC: GLenum;
    readonly COMPRESSED_SIGNED_RG11_EAC: GLenum;
    readonly COMPRESSED_SRGB8_ALPHA8_ETC2_EAC: GLenum;
    readonly COMPRESSED_SRGB8_ETC2: GLenum;
    readonly COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2: GLenum;
}

interface WEBGL_compressed_texture_etc1 {
    readonly COMPRESSED_RGB_ETC1_WEBGL: GLenum;
}

interface WEBGL_compressed_texture_pvrtc {
    readonly COMPRESSED_RGBA_PVRTC_2BPPV1_IMG: GLenum;
    readonly COMPRESSED_RGBA_PVRTC_4BPPV1_IMG: GLenum;
    readonly COMPRESSED_RGB_PVRTC_2BPPV1_IMG: GLenum;
    readonly COMPRESSED_RGB_PVRTC_4BPPV1_IMG: GLenum;
}

/** The WEBGL_compressed_texture_s3tc extension is part of the WebGL API and exposes four S3TC compressed texture formats. */
interface WEBGL_compressed_texture_s3tc {
    readonly COMPRESSED_RGBA_S3TC_DXT1_EXT: GLenum;
    readonly COMPRESSED_RGBA_S3TC_DXT3_EXT: GLenum;
    readonly COMPRESSED_RGBA_S3TC_DXT5_EXT: GLenum;
    readonly COMPRESSED_RGB_S3TC_DXT1_EXT: GLenum;
}

interface WEBGL_compressed_texture_s3tc_srgb {
    readonly COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT: GLenum;
    readonly COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT: GLenum;
    readonly COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT: GLenum;
    readonly COMPRESSED_SRGB_S3TC_DXT1_EXT: GLenum;
}

/** The WEBGL_debug_renderer_info extension is part of the WebGL API and exposes two constants with information about the graphics driver for debugging purposes. */
interface WEBGL_debug_renderer_info {
    readonly UNMASKED_RENDERER_WEBGL: GLenum;
    readonly UNMASKED_VENDOR_WEBGL: GLenum;
}

interface WEBGL_debug_shaders {
    getTranslatedShaderSource(shader: WebGLShader): string;
}

/** The WEBGL_depth_texture extension is part of the WebGL API and defines 2D depth and depth-stencil textures. */
interface WEBGL_depth_texture {
    readonly UNSIGNED_INT_24_8_WEBGL: GLenum;
}

interface WEBGL_draw_buffers {
    drawBuffersWEBGL(buffers: GLenum[]): void;
    readonly COLOR_ATTACHMENT0_WEBGL: GLenum;
    readonly COLOR_ATTACHMENT10_WEBGL: GLenum;
    readonly COLOR_ATTACHMENT11_WEBGL: GLenum;
    readonly COLOR_ATTACHMENT12_WEBGL: GLenum;
    readonly COLOR_ATTACHMENT13_WEBGL: GLenum;
    readonly COLOR_ATTACHMENT14_WEBGL: GLenum;
    readonly COLOR_ATTACHMENT15_WEBGL: GLenum;
    readonly COLOR_ATTACHMENT1_WEBGL: GLenum;
    readonly COLOR_ATTACHMENT2_WEBGL: GLenum;
    readonly COLOR_ATTACHMENT3_WEBGL: GLenum;
    readonly COLOR_ATTACHMENT4_WEBGL: GLenum;
    readonly COLOR_ATTACHMENT5_WEBGL: GLenum;
    readonly COLOR_ATTACHMENT6_WEBGL: GLenum;
    readonly COLOR_ATTACHMENT7_WEBGL: GLenum;
    readonly COLOR_ATTACHMENT8_WEBGL: GLenum;
    readonly COLOR_ATTACHMENT9_WEBGL: GLenum;
    readonly DRAW_BUFFER0_WEBGL: GLenum;
    readonly DRAW_BUFFER10_WEBGL: GLenum;
    readonly DRAW_BUFFER11_WEBGL: GLenum;
    readonly DRAW_BUFFER12_WEBGL: GLenum;
    readonly DRAW_BUFFER13_WEBGL: GLenum;
    readonly DRAW_BUFFER14_WEBGL: GLenum;
    readonly DRAW_BUFFER15_WEBGL: GLenum;
    readonly DRAW_BUFFER1_WEBGL: GLenum;
    readonly DRAW_BUFFER2_WEBGL: GLenum;
    readonly DRAW_BUFFER3_WEBGL: GLenum;
    readonly DRAW_BUFFER4_WEBGL: GLenum;
    readonly DRAW_BUFFER5_WEBGL: GLenum;
    readonly DRAW_BUFFER6_WEBGL: GLenum;
    readonly DRAW_BUFFER7_WEBGL: GLenum;
    readonly DRAW_BUFFER8_WEBGL: GLenum;
    readonly DRAW_BUFFER9_WEBGL: GLenum;
    readonly MAX_COLOR_ATTACHMENTS_WEBGL: GLenum;
    readonly MAX_DRAW_BUFFERS_WEBGL: GLenum;
}

interface WEBGL_lose_context {
    loseContext(): void;
    restoreContext(): void;
}

/** A WaveShaperNode always has exactly one input and one output. */
interface WaveShaperNode extends AudioNode {
    curve: Float32Array | null;
    oversample: OverSampleType;
}

declare var WaveShaperNode: {
    readonly prototype: WaveShaperNode;
    new(context: BaseAudioContext, options?: WaveShaperOptions): WaveShaperNode;
};

interface WebGL2RenderingContext extends WebGL2RenderingContextBase, WebGL2RenderingContextOverloads, WebGLRenderingContextBase {
}

declare var WebGL2RenderingContext: {
    readonly prototype: WebGL2RenderingContext;
    new(): WebGL2RenderingContext;
    readonly ACTIVE_UNIFORM_BLOCKS: GLenum;
    readonly ALREADY_SIGNALED: GLenum;
    readonly ANY_SAMPLES_PASSED: GLenum;
    readonly ANY_SAMPLES_PASSED_CONSERVATIVE: GLenum;
    readonly COLOR: GLenum;
    readonly COLOR_ATTACHMENT1: GLenum;
    readonly COLOR_ATTACHMENT10: GLenum;
    readonly COLOR_ATTACHMENT11: GLenum;
    readonly COLOR_ATTACHMENT12: GLenum;
    readonly COLOR_ATTACHMENT13: GLenum;
    readonly COLOR_ATTACHMENT14: GLenum;
    readonly COLOR_ATTACHMENT15: GLenum;
    readonly COLOR_ATTACHMENT2: GLenum;
    readonly COLOR_ATTACHMENT3: GLenum;
    readonly COLOR_ATTACHMENT4: GLenum;
    readonly COLOR_ATTACHMENT5: GLenum;
    readonly COLOR_ATTACHMENT6: GLenum;
    readonly COLOR_ATTACHMENT7: GLenum;
    readonly COLOR_ATTACHMENT8: GLenum;
    readonly COLOR_ATTACHMENT9: GLenum;
    readonly COMPARE_REF_TO_TEXTURE: GLenum;
    readonly CONDITION_SATISFIED: GLenum;
    readonly COPY_READ_BUFFER: GLenum;
    readonly COPY_READ_BUFFER_BINDING: GLenum;
    readonly COPY_WRITE_BUFFER: GLenum;
    readonly COPY_WRITE_BUFFER_BINDING: GLenum;
    readonly CURRENT_QUERY: GLenum;
    readonly DEPTH: GLenum;
    readonly DEPTH24_STENCIL8: GLenum;
    readonly DEPTH32F_STENCIL8: GLenum;
    readonly DEPTH_COMPONENT24: GLenum;
    readonly DEPTH_COMPONENT32F: GLenum;
    readonly DRAW_BUFFER0: GLenum;
    readonly DRAW_BUFFER1: GLenum;
    readonly DRAW_BUFFER10: GLenum;
    readonly DRAW_BUFFER11: GLenum;
    readonly DRAW_BUFFER12: GLenum;
    readonly DRAW_BUFFER13: GLenum;
    readonly DRAW_BUFFER14: GLenum;
    readonly DRAW_BUFFER15: GLenum;
    readonly DRAW_BUFFER2: GLenum;
    readonly DRAW_BUFFER3: GLenum;
    readonly DRAW_BUFFER4: GLenum;
    readonly DRAW_BUFFER5: GLenum;
    readonly DRAW_BUFFER6: GLenum;
    readonly DRAW_BUFFER7: GLenum;
    readonly DRAW_BUFFER8: GLenum;
    readonly DRAW_BUFFER9: GLenum;
    readonly DRAW_FRAMEBUFFER: GLenum;
    readonly DRAW_FRAMEBUFFER_BINDING: GLenum;
    readonly DYNAMIC_COPY: GLenum;
    readonly DYNAMIC_READ: GLenum;
    readonly FLOAT_32_UNSIGNED_INT_24_8_REV: GLenum;
    readonly FLOAT_MAT2x3: GLenum;
    readonly FLOAT_MAT2x4: GLenum;
    readonly FLOAT_MAT3x2: GLenum;
    readonly FLOAT_MAT3x4: GLenum;
    readonly FLOAT_MAT4x2: GLenum;
    readonly FLOAT_MAT4x3: GLenum;
    readonly FRAGMENT_SHADER_DERIVATIVE_HINT: GLenum;
    readonly FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE: GLenum;
    readonly FRAMEBUFFER_ATTACHMENT_BLUE_SIZE: GLenum;
    readonly FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING: GLenum;
    readonly FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE: GLenum;
    readonly FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE: GLenum;
    readonly FRAMEBUFFER_ATTACHMENT_GREEN_SIZE: GLenum;
    readonly FRAMEBUFFER_ATTACHMENT_RED_SIZE: GLenum;
    readonly FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE: GLenum;
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER: GLenum;
    readonly FRAMEBUFFER_DEFAULT: GLenum;
    readonly FRAMEBUFFER_INCOMPLETE_MULTISAMPLE: GLenum;
    readonly HALF_FLOAT: GLenum;
    readonly INTERLEAVED_ATTRIBS: GLenum;
    readonly INT_2_10_10_10_REV: GLenum;
    readonly INT_SAMPLER_2D: GLenum;
    readonly INT_SAMPLER_2D_ARRAY: GLenum;
    readonly INT_SAMPLER_3D: GLenum;
    readonly INT_SAMPLER_CUBE: GLenum;
    readonly INVALID_INDEX: GLenum;
    readonly MAX: GLenum;
    readonly MAX_3D_TEXTURE_SIZE: GLenum;
    readonly MAX_ARRAY_TEXTURE_LAYERS: GLenum;
    readonly MAX_CLIENT_WAIT_TIMEOUT_WEBGL: GLenum;
    readonly MAX_COLOR_ATTACHMENTS: GLenum;
    readonly MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS: GLenum;
    readonly MAX_COMBINED_UNIFORM_BLOCKS: GLenum;
    readonly MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS: GLenum;
    readonly MAX_DRAW_BUFFERS: GLenum;
    readonly MAX_ELEMENTS_INDICES: GLenum;
    readonly MAX_ELEMENTS_VERTICES: GLenum;
    readonly MAX_ELEMENT_INDEX: GLenum;
    readonly MAX_FRAGMENT_INPUT_COMPONENTS: GLenum;
    readonly MAX_FRAGMENT_UNIFORM_BLOCKS: GLenum;
    readonly MAX_FRAGMENT_UNIFORM_COMPONENTS: GLenum;
    readonly MAX_PROGRAM_TEXEL_OFFSET: GLenum;
    readonly MAX_SAMPLES: GLenum;
    readonly MAX_SERVER_WAIT_TIMEOUT: GLenum;
    readonly MAX_TEXTURE_LOD_BIAS: GLenum;
    readonly MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS: GLenum;
    readonly MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS: GLenum;
    readonly MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS: GLenum;
    readonly MAX_UNIFORM_BLOCK_SIZE: GLenum;
    readonly MAX_UNIFORM_BUFFER_BINDINGS: GLenum;
    readonly MAX_VARYING_COMPONENTS: GLenum;
    readonly MAX_VERTEX_OUTPUT_COMPONENTS: GLenum;
    readonly MAX_VERTEX_UNIFORM_BLOCKS: GLenum;
    readonly MAX_VERTEX_UNIFORM_COMPONENTS: GLenum;
    readonly MIN: GLenum;
    readonly MIN_PROGRAM_TEXEL_OFFSET: GLenum;
    readonly OBJECT_TYPE: GLenum;
    readonly PACK_ROW_LENGTH: GLenum;
    readonly PACK_SKIP_PIXELS: GLenum;
    readonly PACK_SKIP_ROWS: GLenum;
    readonly PIXEL_PACK_BUFFER: GLenum;
    readonly PIXEL_PACK_BUFFER_BINDING: GLenum;
    readonly PIXEL_UNPACK_BUFFER: GLenum;
    readonly PIXEL_UNPACK_BUFFER_BINDING: GLenum;
    readonly QUERY_RESULT: GLenum;
    readonly QUERY_RESULT_AVAILABLE: GLenum;
    readonly R11F_G11F_B10F: GLenum;
    readonly R16F: GLenum;
    readonly R16I: GLenum;
    readonly R16UI: GLenum;
    readonly R32F: GLenum;
    readonly R32I: GLenum;
    readonly R32UI: GLenum;
    readonly R8: GLenum;
    readonly R8I: GLenum;
    readonly R8UI: GLenum;
    readonly R8_SNORM: GLenum;
    readonly RASTERIZER_DISCARD: GLenum;
    readonly READ_BUFFER: GLenum;
    readonly READ_FRAMEBUFFER: GLenum;
    readonly READ_FRAMEBUFFER_BINDING: GLenum;
    readonly RED: GLenum;
    readonly RED_INTEGER: GLenum;
    readonly RENDERBUFFER_SAMPLES: GLenum;
    readonly RG: GLenum;
    readonly RG16F: GLenum;
    readonly RG16I: GLenum;
    readonly RG16UI: GLenum;
    readonly RG32F: GLenum;
    readonly RG32I: GLenum;
    readonly RG32UI: GLenum;
    readonly RG8: GLenum;
    readonly RG8I: GLenum;
    readonly RG8UI: GLenum;
    readonly RG8_SNORM: GLenum;
    readonly RGB10_A2: GLenum;
    readonly RGB10_A2UI: GLenum;
    readonly RGB16F: GLenum;
    readonly RGB16I: GLenum;
    readonly RGB16UI: GLenum;
    readonly RGB32F: GLenum;
    readonly RGB32I: GLenum;
    readonly RGB32UI: GLenum;
    readonly RGB8: GLenum;
    readonly RGB8I: GLenum;
    readonly RGB8UI: GLenum;
    readonly RGB8_SNORM: GLenum;
    readonly RGB9_E5: GLenum;
    readonly RGBA16F: GLenum;
    readonly RGBA16I: GLenum;
    readonly RGBA16UI: GLenum;
    readonly RGBA32F: GLenum;
    readonly RGBA32I: GLenum;
    readonly RGBA32UI: GLenum;
    readonly RGBA8: GLenum;
    readonly RGBA8I: GLenum;
    readonly RGBA8UI: GLenum;
    readonly RGBA8_SNORM: GLenum;
    readonly RGBA_INTEGER: GLenum;
    readonly RGB_INTEGER: GLenum;
    readonly RG_INTEGER: GLenum;
    readonly SAMPLER_2D_ARRAY: GLenum;
    readonly SAMPLER_2D_ARRAY_SHADOW: GLenum;
    readonly SAMPLER_2D_SHADOW: GLenum;
    readonly SAMPLER_3D: GLenum;
    readonly SAMPLER_BINDING: GLenum;
    readonly SAMPLER_CUBE_SHADOW: GLenum;
    readonly SEPARATE_ATTRIBS: GLenum;
    readonly SIGNALED: GLenum;
    readonly SIGNED_NORMALIZED: GLenum;
    readonly SRGB: GLenum;
    readonly SRGB8: GLenum;
    readonly SRGB8_ALPHA8: GLenum;
    readonly STATIC_COPY: GLenum;
    readonly STATIC_READ: GLenum;
    readonly STENCIL: GLenum;
    readonly STREAM_COPY: GLenum;
    readonly STREAM_READ: GLenum;
    readonly SYNC_CONDITION: GLenum;
    readonly SYNC_FENCE: GLenum;
    readonly SYNC_FLAGS: GLenum;
    readonly SYNC_FLUSH_COMMANDS_BIT: GLenum;
    readonly SYNC_GPU_COMMANDS_COMPLETE: GLenum;
    readonly SYNC_STATUS: GLenum;
    readonly TEXTURE_2D_ARRAY: GLenum;
    readonly TEXTURE_3D: GLenum;
    readonly TEXTURE_BASE_LEVEL: GLenum;
    readonly TEXTURE_BINDING_2D_ARRAY: GLenum;
    readonly TEXTURE_BINDING_3D: GLenum;
    readonly TEXTURE_COMPARE_FUNC: GLenum;
    readonly TEXTURE_COMPARE_MODE: GLenum;
    readonly TEXTURE_IMMUTABLE_FORMAT: GLenum;
    readonly TEXTURE_IMMUTABLE_LEVELS: GLenum;
    readonly TEXTURE_MAX_LEVEL: GLenum;
    readonly TEXTURE_MAX_LOD: GLenum;
    readonly TEXTURE_MIN_LOD: GLenum;
    readonly TEXTURE_WRAP_R: GLenum;
    readonly TIMEOUT_EXPIRED: GLenum;
    readonly TIMEOUT_IGNORED: GLint64;
    readonly TRANSFORM_FEEDBACK: GLenum;
    readonly TRANSFORM_FEEDBACK_ACTIVE: GLenum;
    readonly TRANSFORM_FEEDBACK_BINDING: GLenum;
    readonly TRANSFORM_FEEDBACK_BUFFER: GLenum;
    readonly TRANSFORM_FEEDBACK_BUFFER_BINDING: GLenum;
    readonly TRANSFORM_FEEDBACK_BUFFER_MODE: GLenum;
    readonly TRANSFORM_FEEDBACK_BUFFER_SIZE: GLenum;
    readonly TRANSFORM_FEEDBACK_BUFFER_START: GLenum;
    readonly TRANSFORM_FEEDBACK_PAUSED: GLenum;
    readonly TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN: GLenum;
    readonly TRANSFORM_FEEDBACK_VARYINGS: GLenum;
    readonly UNIFORM_ARRAY_STRIDE: GLenum;
    readonly UNIFORM_BLOCK_ACTIVE_UNIFORMS: GLenum;
    readonly UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES: GLenum;
    readonly UNIFORM_BLOCK_BINDING: GLenum;
    readonly UNIFORM_BLOCK_DATA_SIZE: GLenum;
    readonly UNIFORM_BLOCK_INDEX: GLenum;
    readonly UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER: GLenum;
    readonly UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER: GLenum;
    readonly UNIFORM_BUFFER: GLenum;
    readonly UNIFORM_BUFFER_BINDING: GLenum;
    readonly UNIFORM_BUFFER_OFFSET_ALIGNMENT: GLenum;
    readonly UNIFORM_BUFFER_SIZE: GLenum;
    readonly UNIFORM_BUFFER_START: GLenum;
    readonly UNIFORM_IS_ROW_MAJOR: GLenum;
    readonly UNIFORM_MATRIX_STRIDE: GLenum;
    readonly UNIFORM_OFFSET: GLenum;
    readonly UNIFORM_SIZE: GLenum;
    readonly UNIFORM_TYPE: GLenum;
    readonly UNPACK_IMAGE_HEIGHT: GLenum;
    readonly UNPACK_ROW_LENGTH: GLenum;
    readonly UNPACK_SKIP_IMAGES: GLenum;
    readonly UNPACK_SKIP_PIXELS: GLenum;
    readonly UNPACK_SKIP_ROWS: GLenum;
    readonly UNSIGNALED: GLenum;
    readonly UNSIGNED_INT_10F_11F_11F_REV: GLenum;
    readonly UNSIGNED_INT_24_8: GLenum;
    readonly UNSIGNED_INT_2_10_10_10_REV: GLenum;
    readonly UNSIGNED_INT_5_9_9_9_REV: GLenum;
    readonly UNSIGNED_INT_SAMPLER_2D: GLenum;
    readonly UNSIGNED_INT_SAMPLER_2D_ARRAY: GLenum;
    readonly UNSIGNED_INT_SAMPLER_3D: GLenum;
    readonly UNSIGNED_INT_SAMPLER_CUBE: GLenum;
    readonly UNSIGNED_INT_VEC2: GLenum;
    readonly UNSIGNED_INT_VEC3: GLenum;
    readonly UNSIGNED_INT_VEC4: GLenum;
    readonly UNSIGNED_NORMALIZED: GLenum;
    readonly VERTEX_ARRAY_BINDING: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_DIVISOR: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_INTEGER: GLenum;
    readonly WAIT_FAILED: GLenum;
    readonly ACTIVE_ATTRIBUTES: GLenum;
    readonly ACTIVE_TEXTURE: GLenum;
    readonly ACTIVE_UNIFORMS: GLenum;
    readonly ALIASED_LINE_WIDTH_RANGE: GLenum;
    readonly ALIASED_POINT_SIZE_RANGE: GLenum;
    readonly ALPHA: GLenum;
    readonly ALPHA_BITS: GLenum;
    readonly ALWAYS: GLenum;
    readonly ARRAY_BUFFER: GLenum;
    readonly ARRAY_BUFFER_BINDING: GLenum;
    readonly ATTACHED_SHADERS: GLenum;
    readonly BACK: GLenum;
    readonly BLEND: GLenum;
    readonly BLEND_COLOR: GLenum;
    readonly BLEND_DST_ALPHA: GLenum;
    readonly BLEND_DST_RGB: GLenum;
    readonly BLEND_EQUATION: GLenum;
    readonly BLEND_EQUATION_ALPHA: GLenum;
    readonly BLEND_EQUATION_RGB: GLenum;
    readonly BLEND_SRC_ALPHA: GLenum;
    readonly BLEND_SRC_RGB: GLenum;
    readonly BLUE_BITS: GLenum;
    readonly BOOL: GLenum;
    readonly BOOL_VEC2: GLenum;
    readonly BOOL_VEC3: GLenum;
    readonly BOOL_VEC4: GLenum;
    readonly BROWSER_DEFAULT_WEBGL: GLenum;
    readonly BUFFER_SIZE: GLenum;
    readonly BUFFER_USAGE: GLenum;
    readonly BYTE: GLenum;
    readonly CCW: GLenum;
    readonly CLAMP_TO_EDGE: GLenum;
    readonly COLOR_ATTACHMENT0: GLenum;
    readonly COLOR_BUFFER_BIT: GLenum;
    readonly COLOR_CLEAR_VALUE: GLenum;
    readonly COLOR_WRITEMASK: GLenum;
    readonly COMPILE_STATUS: GLenum;
    readonly COMPRESSED_TEXTURE_FORMATS: GLenum;
    readonly CONSTANT_ALPHA: GLenum;
    readonly CONSTANT_COLOR: GLenum;
    readonly CONTEXT_LOST_WEBGL: GLenum;
    readonly CULL_FACE: GLenum;
    readonly CULL_FACE_MODE: GLenum;
    readonly CURRENT_PROGRAM: GLenum;
    readonly CURRENT_VERTEX_ATTRIB: GLenum;
    readonly CW: GLenum;
    readonly DECR: GLenum;
    readonly DECR_WRAP: GLenum;
    readonly DELETE_STATUS: GLenum;
    readonly DEPTH_ATTACHMENT: GLenum;
    readonly DEPTH_BITS: GLenum;
    readonly DEPTH_BUFFER_BIT: GLenum;
    readonly DEPTH_CLEAR_VALUE: GLenum;
    readonly DEPTH_COMPONENT: GLenum;
    readonly DEPTH_COMPONENT16: GLenum;
    readonly DEPTH_FUNC: GLenum;
    readonly DEPTH_RANGE: GLenum;
    readonly DEPTH_STENCIL: GLenum;
    readonly DEPTH_STENCIL_ATTACHMENT: GLenum;
    readonly DEPTH_TEST: GLenum;
    readonly DEPTH_WRITEMASK: GLenum;
    readonly DITHER: GLenum;
    readonly DONT_CARE: GLenum;
    readonly DST_ALPHA: GLenum;
    readonly DST_COLOR: GLenum;
    readonly DYNAMIC_DRAW: GLenum;
    readonly ELEMENT_ARRAY_BUFFER: GLenum;
    readonly ELEMENT_ARRAY_BUFFER_BINDING: GLenum;
    readonly EQUAL: GLenum;
    readonly FASTEST: GLenum;
    readonly FLOAT: GLenum;
    readonly FLOAT_MAT2: GLenum;
    readonly FLOAT_MAT3: GLenum;
    readonly FLOAT_MAT4: GLenum;
    readonly FLOAT_VEC2: GLenum;
    readonly FLOAT_VEC3: GLenum;
    readonly FLOAT_VEC4: GLenum;
    readonly FRAGMENT_SHADER: GLenum;
    readonly FRAMEBUFFER: GLenum;
    readonly FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: GLenum;
    readonly FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: GLenum;
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: GLenum;
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: GLenum;
    readonly FRAMEBUFFER_BINDING: GLenum;
    readonly FRAMEBUFFER_COMPLETE: GLenum;
    readonly FRAMEBUFFER_INCOMPLETE_ATTACHMENT: GLenum;
    readonly FRAMEBUFFER_INCOMPLETE_DIMENSIONS: GLenum;
    readonly FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: GLenum;
    readonly FRAMEBUFFER_UNSUPPORTED: GLenum;
    readonly FRONT: GLenum;
    readonly FRONT_AND_BACK: GLenum;
    readonly FRONT_FACE: GLenum;
    readonly FUNC_ADD: GLenum;
    readonly FUNC_REVERSE_SUBTRACT: GLenum;
    readonly FUNC_SUBTRACT: GLenum;
    readonly GENERATE_MIPMAP_HINT: GLenum;
    readonly GEQUAL: GLenum;
    readonly GREATER: GLenum;
    readonly GREEN_BITS: GLenum;
    readonly HIGH_FLOAT: GLenum;
    readonly HIGH_INT: GLenum;
    readonly IMPLEMENTATION_COLOR_READ_FORMAT: GLenum;
    readonly IMPLEMENTATION_COLOR_READ_TYPE: GLenum;
    readonly INCR: GLenum;
    readonly INCR_WRAP: GLenum;
    readonly INT: GLenum;
    readonly INT_VEC2: GLenum;
    readonly INT_VEC3: GLenum;
    readonly INT_VEC4: GLenum;
    readonly INVALID_ENUM: GLenum;
    readonly INVALID_FRAMEBUFFER_OPERATION: GLenum;
    readonly INVALID_OPERATION: GLenum;
    readonly INVALID_VALUE: GLenum;
    readonly INVERT: GLenum;
    readonly KEEP: GLenum;
    readonly LEQUAL: GLenum;
    readonly LESS: GLenum;
    readonly LINEAR: GLenum;
    readonly LINEAR_MIPMAP_LINEAR: GLenum;
    readonly LINEAR_MIPMAP_NEAREST: GLenum;
    readonly LINES: GLenum;
    readonly LINE_LOOP: GLenum;
    readonly LINE_STRIP: GLenum;
    readonly LINE_WIDTH: GLenum;
    readonly LINK_STATUS: GLenum;
    readonly LOW_FLOAT: GLenum;
    readonly LOW_INT: GLenum;
    readonly LUMINANCE: GLenum;
    readonly LUMINANCE_ALPHA: GLenum;
    readonly MAX_COMBINED_TEXTURE_IMAGE_UNITS: GLenum;
    readonly MAX_CUBE_MAP_TEXTURE_SIZE: GLenum;
    readonly MAX_FRAGMENT_UNIFORM_VECTORS: GLenum;
    readonly MAX_RENDERBUFFER_SIZE: GLenum;
    readonly MAX_TEXTURE_IMAGE_UNITS: GLenum;
    readonly MAX_TEXTURE_SIZE: GLenum;
    readonly MAX_VARYING_VECTORS: GLenum;
    readonly MAX_VERTEX_ATTRIBS: GLenum;
    readonly MAX_VERTEX_TEXTURE_IMAGE_UNITS: GLenum;
    readonly MAX_VERTEX_UNIFORM_VECTORS: GLenum;
    readonly MAX_VIEWPORT_DIMS: GLenum;
    readonly MEDIUM_FLOAT: GLenum;
    readonly MEDIUM_INT: GLenum;
    readonly MIRRORED_REPEAT: GLenum;
    readonly NEAREST: GLenum;
    readonly NEAREST_MIPMAP_LINEAR: GLenum;
    readonly NEAREST_MIPMAP_NEAREST: GLenum;
    readonly NEVER: GLenum;
    readonly NICEST: GLenum;
    readonly NONE: GLenum;
    readonly NOTEQUAL: GLenum;
    readonly NO_ERROR: GLenum;
    readonly ONE: GLenum;
    readonly ONE_MINUS_CONSTANT_ALPHA: GLenum;
    readonly ONE_MINUS_CONSTANT_COLOR: GLenum;
    readonly ONE_MINUS_DST_ALPHA: GLenum;
    readonly ONE_MINUS_DST_COLOR: GLenum;
    readonly ONE_MINUS_SRC_ALPHA: GLenum;
    readonly ONE_MINUS_SRC_COLOR: GLenum;
    readonly OUT_OF_MEMORY: GLenum;
    readonly PACK_ALIGNMENT: GLenum;
    readonly POINTS: GLenum;
    readonly POLYGON_OFFSET_FACTOR: GLenum;
    readonly POLYGON_OFFSET_FILL: GLenum;
    readonly POLYGON_OFFSET_UNITS: GLenum;
    readonly RED_BITS: GLenum;
    readonly RENDERBUFFER: GLenum;
    readonly RENDERBUFFER_ALPHA_SIZE: GLenum;
    readonly RENDERBUFFER_BINDING: GLenum;
    readonly RENDERBUFFER_BLUE_SIZE: GLenum;
    readonly RENDERBUFFER_DEPTH_SIZE: GLenum;
    readonly RENDERBUFFER_GREEN_SIZE: GLenum;
    readonly RENDERBUFFER_HEIGHT: GLenum;
    readonly RENDERBUFFER_INTERNAL_FORMAT: GLenum;
    readonly RENDERBUFFER_RED_SIZE: GLenum;
    readonly RENDERBUFFER_STENCIL_SIZE: GLenum;
    readonly RENDERBUFFER_WIDTH: GLenum;
    readonly RENDERER: GLenum;
    readonly REPEAT: GLenum;
    readonly REPLACE: GLenum;
    readonly RGB: GLenum;
    readonly RGB565: GLenum;
    readonly RGB5_A1: GLenum;
    readonly RGBA: GLenum;
    readonly RGBA4: GLenum;
    readonly SAMPLER_2D: GLenum;
    readonly SAMPLER_CUBE: GLenum;
    readonly SAMPLES: GLenum;
    readonly SAMPLE_ALPHA_TO_COVERAGE: GLenum;
    readonly SAMPLE_BUFFERS: GLenum;
    readonly SAMPLE_COVERAGE: GLenum;
    readonly SAMPLE_COVERAGE_INVERT: GLenum;
    readonly SAMPLE_COVERAGE_VALUE: GLenum;
    readonly SCISSOR_BOX: GLenum;
    readonly SCISSOR_TEST: GLenum;
    readonly SHADER_TYPE: GLenum;
    readonly SHADING_LANGUAGE_VERSION: GLenum;
    readonly SHORT: GLenum;
    readonly SRC_ALPHA: GLenum;
    readonly SRC_ALPHA_SATURATE: GLenum;
    readonly SRC_COLOR: GLenum;
    readonly STATIC_DRAW: GLenum;
    readonly STENCIL_ATTACHMENT: GLenum;
    readonly STENCIL_BACK_FAIL: GLenum;
    readonly STENCIL_BACK_FUNC: GLenum;
    readonly STENCIL_BACK_PASS_DEPTH_FAIL: GLenum;
    readonly STENCIL_BACK_PASS_DEPTH_PASS: GLenum;
    readonly STENCIL_BACK_REF: GLenum;
    readonly STENCIL_BACK_VALUE_MASK: GLenum;
    readonly STENCIL_BACK_WRITEMASK: GLenum;
    readonly STENCIL_BITS: GLenum;
    readonly STENCIL_BUFFER_BIT: GLenum;
    readonly STENCIL_CLEAR_VALUE: GLenum;
    readonly STENCIL_FAIL: GLenum;
    readonly STENCIL_FUNC: GLenum;
    readonly STENCIL_INDEX8: GLenum;
    readonly STENCIL_PASS_DEPTH_FAIL: GLenum;
    readonly STENCIL_PASS_DEPTH_PASS: GLenum;
    readonly STENCIL_REF: GLenum;
    readonly STENCIL_TEST: GLenum;
    readonly STENCIL_VALUE_MASK: GLenum;
    readonly STENCIL_WRITEMASK: GLenum;
    readonly STREAM_DRAW: GLenum;
    readonly SUBPIXEL_BITS: GLenum;
    readonly TEXTURE: GLenum;
    readonly TEXTURE0: GLenum;
    readonly TEXTURE1: GLenum;
    readonly TEXTURE10: GLenum;
    readonly TEXTURE11: GLenum;
    readonly TEXTURE12: GLenum;
    readonly TEXTURE13: GLenum;
    readonly TEXTURE14: GLenum;
    readonly TEXTURE15: GLenum;
    readonly TEXTURE16: GLenum;
    readonly TEXTURE17: GLenum;
    readonly TEXTURE18: GLenum;
    readonly TEXTURE19: GLenum;
    readonly TEXTURE2: GLenum;
    readonly TEXTURE20: GLenum;
    readonly TEXTURE21: GLenum;
    readonly TEXTURE22: GLenum;
    readonly TEXTURE23: GLenum;
    readonly TEXTURE24: GLenum;
    readonly TEXTURE25: GLenum;
    readonly TEXTURE26: GLenum;
    readonly TEXTURE27: GLenum;
    readonly TEXTURE28: GLenum;
    readonly TEXTURE29: GLenum;
    readonly TEXTURE3: GLenum;
    readonly TEXTURE30: GLenum;
    readonly TEXTURE31: GLenum;
    readonly TEXTURE4: GLenum;
    readonly TEXTURE5: GLenum;
    readonly TEXTURE6: GLenum;
    readonly TEXTURE7: GLenum;
    readonly TEXTURE8: GLenum;
    readonly TEXTURE9: GLenum;
    readonly TEXTURE_2D: GLenum;
    readonly TEXTURE_BINDING_2D: GLenum;
    readonly TEXTURE_BINDING_CUBE_MAP: GLenum;
    readonly TEXTURE_CUBE_MAP: GLenum;
    readonly TEXTURE_CUBE_MAP_NEGATIVE_X: GLenum;
    readonly TEXTURE_CUBE_MAP_NEGATIVE_Y: GLenum;
    readonly TEXTURE_CUBE_MAP_NEGATIVE_Z: GLenum;
    readonly TEXTURE_CUBE_MAP_POSITIVE_X: GLenum;
    readonly TEXTURE_CUBE_MAP_POSITIVE_Y: GLenum;
    readonly TEXTURE_CUBE_MAP_POSITIVE_Z: GLenum;
    readonly TEXTURE_MAG_FILTER: GLenum;
    readonly TEXTURE_MIN_FILTER: GLenum;
    readonly TEXTURE_WRAP_S: GLenum;
    readonly TEXTURE_WRAP_T: GLenum;
    readonly TRIANGLES: GLenum;
    readonly TRIANGLE_FAN: GLenum;
    readonly TRIANGLE_STRIP: GLenum;
    readonly UNPACK_ALIGNMENT: GLenum;
    readonly UNPACK_COLORSPACE_CONVERSION_WEBGL: GLenum;
    readonly UNPACK_FLIP_Y_WEBGL: GLenum;
    readonly UNPACK_PREMULTIPLY_ALPHA_WEBGL: GLenum;
    readonly UNSIGNED_BYTE: GLenum;
    readonly UNSIGNED_INT: GLenum;
    readonly UNSIGNED_SHORT: GLenum;
    readonly UNSIGNED_SHORT_4_4_4_4: GLenum;
    readonly UNSIGNED_SHORT_5_5_5_1: GLenum;
    readonly UNSIGNED_SHORT_5_6_5: GLenum;
    readonly VALIDATE_STATUS: GLenum;
    readonly VENDOR: GLenum;
    readonly VERSION: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_ENABLED: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_NORMALIZED: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_POINTER: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_SIZE: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_STRIDE: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_TYPE: GLenum;
    readonly VERTEX_SHADER: GLenum;
    readonly VIEWPORT: GLenum;
    readonly ZERO: GLenum;
};

interface WebGL2RenderingContextBase {
    beginQuery(target: GLenum, query: WebGLQuery): void;
    beginTransformFeedback(primitiveMode: GLenum): void;
    bindBufferBase(target: GLenum, index: GLuint, buffer: WebGLBuffer | null): void;
    bindBufferRange(target: GLenum, index: GLuint, buffer: WebGLBuffer | null, offset: GLintptr, size: GLsizeiptr): void;
    bindSampler(unit: GLuint, sampler: WebGLSampler | null): void;
    bindTransformFeedback(target: GLenum, tf: WebGLTransformFeedback | null): void;
    bindVertexArray(array: WebGLVertexArrayObject | null): void;
    blitFramebuffer(srcX0: GLint, srcY0: GLint, srcX1: GLint, srcY1: GLint, dstX0: GLint, dstY0: GLint, dstX1: GLint, dstY1: GLint, mask: GLbitfield, filter: GLenum): void;
    clearBufferfi(buffer: GLenum, drawbuffer: GLint, depth: GLfloat, stencil: GLint): void;
    clearBufferfv(buffer: GLenum, drawbuffer: GLint, values: Float32List, srcOffset?: GLuint): void;
    clearBufferiv(buffer: GLenum, drawbuffer: GLint, values: Int32List, srcOffset?: GLuint): void;
    clearBufferuiv(buffer: GLenum, drawbuffer: GLint, values: Uint32List, srcOffset?: GLuint): void;
    clientWaitSync(sync: WebGLSync, flags: GLbitfield, timeout: GLuint64): GLenum;
    compressedTexImage3D(target: GLenum, level: GLint, internalformat: GLenum, width: GLsizei, height: GLsizei, depth: GLsizei, border: GLint, imageSize: GLsizei, offset: GLintptr): void;
    compressedTexImage3D(target: GLenum, level: GLint, internalformat: GLenum, width: GLsizei, height: GLsizei, depth: GLsizei, border: GLint, srcData: ArrayBufferView, srcOffset?: GLuint, srcLengthOverride?: GLuint): void;
    compressedTexSubImage3D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, zoffset: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, format: GLenum, imageSize: GLsizei, offset: GLintptr): void;
    compressedTexSubImage3D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, zoffset: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, format: GLenum, srcData: ArrayBufferView, srcOffset?: GLuint, srcLengthOverride?: GLuint): void;
    copyBufferSubData(readTarget: GLenum, writeTarget: GLenum, readOffset: GLintptr, writeOffset: GLintptr, size: GLsizeiptr): void;
    copyTexSubImage3D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, zoffset: GLint, x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
    createQuery(): WebGLQuery | null;
    createSampler(): WebGLSampler | null;
    createTransformFeedback(): WebGLTransformFeedback | null;
    createVertexArray(): WebGLVertexArrayObject | null;
    deleteQuery(query: WebGLQuery | null): void;
    deleteSampler(sampler: WebGLSampler | null): void;
    deleteSync(sync: WebGLSync | null): void;
    deleteTransformFeedback(tf: WebGLTransformFeedback | null): void;
    deleteVertexArray(vertexArray: WebGLVertexArrayObject | null): void;
    drawArraysInstanced(mode: GLenum, first: GLint, count: GLsizei, instanceCount: GLsizei): void;
    drawBuffers(buffers: GLenum[]): void;
    drawElementsInstanced(mode: GLenum, count: GLsizei, type: GLenum, offset: GLintptr, instanceCount: GLsizei): void;
    drawRangeElements(mode: GLenum, start: GLuint, end: GLuint, count: GLsizei, type: GLenum, offset: GLintptr): void;
    endQuery(target: GLenum): void;
    endTransformFeedback(): void;
    fenceSync(condition: GLenum, flags: GLbitfield): WebGLSync | null;
    framebufferTextureLayer(target: GLenum, attachment: GLenum, texture: WebGLTexture | null, level: GLint, layer: GLint): void;
    getActiveUniformBlockName(program: WebGLProgram, uniformBlockIndex: GLuint): string | null;
    getActiveUniformBlockParameter(program: WebGLProgram, uniformBlockIndex: GLuint, pname: GLenum): any;
    getActiveUniforms(program: WebGLProgram, uniformIndices: GLuint[], pname: GLenum): any;
    getBufferSubData(target: GLenum, srcByteOffset: GLintptr, dstBuffer: ArrayBufferView, dstOffset?: GLuint, length?: GLuint): void;
    getFragDataLocation(program: WebGLProgram, name: string): GLint;
    getIndexedParameter(target: GLenum, index: GLuint): any;
    getInternalformatParameter(target: GLenum, internalformat: GLenum, pname: GLenum): any;
    getQuery(target: GLenum, pname: GLenum): WebGLQuery | null;
    getQueryParameter(query: WebGLQuery, pname: GLenum): any;
    getSamplerParameter(sampler: WebGLSampler, pname: GLenum): any;
    getSyncParameter(sync: WebGLSync, pname: GLenum): any;
    getTransformFeedbackVarying(program: WebGLProgram, index: GLuint): WebGLActiveInfo | null;
    getUniformBlockIndex(program: WebGLProgram, uniformBlockName: string): GLuint;
    getUniformIndices(program: WebGLProgram, uniformNames: string[]): GLuint[] | null;
    invalidateFramebuffer(target: GLenum, attachments: GLenum[]): void;
    invalidateSubFramebuffer(target: GLenum, attachments: GLenum[], x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
    isQuery(query: WebGLQuery | null): GLboolean;
    isSampler(sampler: WebGLSampler | null): GLboolean;
    isSync(sync: WebGLSync | null): GLboolean;
    isTransformFeedback(tf: WebGLTransformFeedback | null): GLboolean;
    isVertexArray(vertexArray: WebGLVertexArrayObject | null): GLboolean;
    pauseTransformFeedback(): void;
    readBuffer(src: GLenum): void;
    renderbufferStorageMultisample(target: GLenum, samples: GLsizei, internalformat: GLenum, width: GLsizei, height: GLsizei): void;
    resumeTransformFeedback(): void;
    samplerParameterf(sampler: WebGLSampler, pname: GLenum, param: GLfloat): void;
    samplerParameteri(sampler: WebGLSampler, pname: GLenum, param: GLint): void;
    texImage3D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, border: GLint, format: GLenum, type: GLenum, pboOffset: GLintptr): void;
    texImage3D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, border: GLint, format: GLenum, type: GLenum, source: TexImageSource): void;
    texImage3D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, border: GLint, format: GLenum, type: GLenum, srcData: ArrayBufferView | null): void;
    texImage3D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, border: GLint, format: GLenum, type: GLenum, srcData: ArrayBufferView, srcOffset: GLuint): void;
    texStorage2D(target: GLenum, levels: GLsizei, internalformat: GLenum, width: GLsizei, height: GLsizei): void;
    texStorage3D(target: GLenum, levels: GLsizei, internalformat: GLenum, width: GLsizei, height: GLsizei, depth: GLsizei): void;
    texSubImage3D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, zoffset: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, format: GLenum, type: GLenum, pboOffset: GLintptr): void;
    texSubImage3D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, zoffset: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, format: GLenum, type: GLenum, source: TexImageSource): void;
    texSubImage3D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, zoffset: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, format: GLenum, type: GLenum, srcData: ArrayBufferView | null, srcOffset?: GLuint): void;
    transformFeedbackVaryings(program: WebGLProgram, varyings: string[], bufferMode: GLenum): void;
    uniform1ui(location: WebGLUniformLocation | null, v0: GLuint): void;
    uniform1uiv(location: WebGLUniformLocation | null, data: Uint32List, srcOffset?: GLuint, srcLength?: GLuint): void;
    uniform2ui(location: WebGLUniformLocation | null, v0: GLuint, v1: GLuint): void;
    uniform2uiv(location: WebGLUniformLocation | null, data: Uint32List, srcOffset?: GLuint, srcLength?: GLuint): void;
    uniform3ui(location: WebGLUniformLocation | null, v0: GLuint, v1: GLuint, v2: GLuint): void;
    uniform3uiv(location: WebGLUniformLocation | null, data: Uint32List, srcOffset?: GLuint, srcLength?: GLuint): void;
    uniform4ui(location: WebGLUniformLocation | null, v0: GLuint, v1: GLuint, v2: GLuint, v3: GLuint): void;
    uniform4uiv(location: WebGLUniformLocation | null, data: Uint32List, srcOffset?: GLuint, srcLength?: GLuint): void;
    uniformBlockBinding(program: WebGLProgram, uniformBlockIndex: GLuint, uniformBlockBinding: GLuint): void;
    uniformMatrix2x3fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: GLuint, srcLength?: GLuint): void;
    uniformMatrix2x4fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: GLuint, srcLength?: GLuint): void;
    uniformMatrix3x2fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: GLuint, srcLength?: GLuint): void;
    uniformMatrix3x4fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: GLuint, srcLength?: GLuint): void;
    uniformMatrix4x2fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: GLuint, srcLength?: GLuint): void;
    uniformMatrix4x3fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: GLuint, srcLength?: GLuint): void;
    vertexAttribDivisor(index: GLuint, divisor: GLuint): void;
    vertexAttribI4i(index: GLuint, x: GLint, y: GLint, z: GLint, w: GLint): void;
    vertexAttribI4iv(index: GLuint, values: Int32List): void;
    vertexAttribI4ui(index: GLuint, x: GLuint, y: GLuint, z: GLuint, w: GLuint): void;
    vertexAttribI4uiv(index: GLuint, values: Uint32List): void;
    vertexAttribIPointer(index: GLuint, size: GLint, type: GLenum, stride: GLsizei, offset: GLintptr): void;
    waitSync(sync: WebGLSync, flags: GLbitfield, timeout: GLint64): void;
    readonly ACTIVE_UNIFORM_BLOCKS: GLenum;
    readonly ALREADY_SIGNALED: GLenum;
    readonly ANY_SAMPLES_PASSED: GLenum;
    readonly ANY_SAMPLES_PASSED_CONSERVATIVE: GLenum;
    readonly COLOR: GLenum;
    readonly COLOR_ATTACHMENT1: GLenum;
    readonly COLOR_ATTACHMENT10: GLenum;
    readonly COLOR_ATTACHMENT11: GLenum;
    readonly COLOR_ATTACHMENT12: GLenum;
    readonly COLOR_ATTACHMENT13: GLenum;
    readonly COLOR_ATTACHMENT14: GLenum;
    readonly COLOR_ATTACHMENT15: GLenum;
    readonly COLOR_ATTACHMENT2: GLenum;
    readonly COLOR_ATTACHMENT3: GLenum;
    readonly COLOR_ATTACHMENT4: GLenum;
    readonly COLOR_ATTACHMENT5: GLenum;
    readonly COLOR_ATTACHMENT6: GLenum;
    readonly COLOR_ATTACHMENT7: GLenum;
    readonly COLOR_ATTACHMENT8: GLenum;
    readonly COLOR_ATTACHMENT9: GLenum;
    readonly COMPARE_REF_TO_TEXTURE: GLenum;
    readonly CONDITION_SATISFIED: GLenum;
    readonly COPY_READ_BUFFER: GLenum;
    readonly COPY_READ_BUFFER_BINDING: GLenum;
    readonly COPY_WRITE_BUFFER: GLenum;
    readonly COPY_WRITE_BUFFER_BINDING: GLenum;
    readonly CURRENT_QUERY: GLenum;
    readonly DEPTH: GLenum;
    readonly DEPTH24_STENCIL8: GLenum;
    readonly DEPTH32F_STENCIL8: GLenum;
    readonly DEPTH_COMPONENT24: GLenum;
    readonly DEPTH_COMPONENT32F: GLenum;
    readonly DRAW_BUFFER0: GLenum;
    readonly DRAW_BUFFER1: GLenum;
    readonly DRAW_BUFFER10: GLenum;
    readonly DRAW_BUFFER11: GLenum;
    readonly DRAW_BUFFER12: GLenum;
    readonly DRAW_BUFFER13: GLenum;
    readonly DRAW_BUFFER14: GLenum;
    readonly DRAW_BUFFER15: GLenum;
    readonly DRAW_BUFFER2: GLenum;
    readonly DRAW_BUFFER3: GLenum;
    readonly DRAW_BUFFER4: GLenum;
    readonly DRAW_BUFFER5: GLenum;
    readonly DRAW_BUFFER6: GLenum;
    readonly DRAW_BUFFER7: GLenum;
    readonly DRAW_BUFFER8: GLenum;
    readonly DRAW_BUFFER9: GLenum;
    readonly DRAW_FRAMEBUFFER: GLenum;
    readonly DRAW_FRAMEBUFFER_BINDING: GLenum;
    readonly DYNAMIC_COPY: GLenum;
    readonly DYNAMIC_READ: GLenum;
    readonly FLOAT_32_UNSIGNED_INT_24_8_REV: GLenum;
    readonly FLOAT_MAT2x3: GLenum;
    readonly FLOAT_MAT2x4: GLenum;
    readonly FLOAT_MAT3x2: GLenum;
    readonly FLOAT_MAT3x4: GLenum;
    readonly FLOAT_MAT4x2: GLenum;
    readonly FLOAT_MAT4x3: GLenum;
    readonly FRAGMENT_SHADER_DERIVATIVE_HINT: GLenum;
    readonly FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE: GLenum;
    readonly FRAMEBUFFER_ATTACHMENT_BLUE_SIZE: GLenum;
    readonly FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING: GLenum;
    readonly FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE: GLenum;
    readonly FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE: GLenum;
    readonly FRAMEBUFFER_ATTACHMENT_GREEN_SIZE: GLenum;
    readonly FRAMEBUFFER_ATTACHMENT_RED_SIZE: GLenum;
    readonly FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE: GLenum;
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER: GLenum;
    readonly FRAMEBUFFER_DEFAULT: GLenum;
    readonly FRAMEBUFFER_INCOMPLETE_MULTISAMPLE: GLenum;
    readonly HALF_FLOAT: GLenum;
    readonly INTERLEAVED_ATTRIBS: GLenum;
    readonly INT_2_10_10_10_REV: GLenum;
    readonly INT_SAMPLER_2D: GLenum;
    readonly INT_SAMPLER_2D_ARRAY: GLenum;
    readonly INT_SAMPLER_3D: GLenum;
    readonly INT_SAMPLER_CUBE: GLenum;
    readonly INVALID_INDEX: GLenum;
    readonly MAX: GLenum;
    readonly MAX_3D_TEXTURE_SIZE: GLenum;
    readonly MAX_ARRAY_TEXTURE_LAYERS: GLenum;
    readonly MAX_CLIENT_WAIT_TIMEOUT_WEBGL: GLenum;
    readonly MAX_COLOR_ATTACHMENTS: GLenum;
    readonly MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS: GLenum;
    readonly MAX_COMBINED_UNIFORM_BLOCKS: GLenum;
    readonly MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS: GLenum;
    readonly MAX_DRAW_BUFFERS: GLenum;
    readonly MAX_ELEMENTS_INDICES: GLenum;
    readonly MAX_ELEMENTS_VERTICES: GLenum;
    readonly MAX_ELEMENT_INDEX: GLenum;
    readonly MAX_FRAGMENT_INPUT_COMPONENTS: GLenum;
    readonly MAX_FRAGMENT_UNIFORM_BLOCKS: GLenum;
    readonly MAX_FRAGMENT_UNIFORM_COMPONENTS: GLenum;
    readonly MAX_PROGRAM_TEXEL_OFFSET: GLenum;
    readonly MAX_SAMPLES: GLenum;
    readonly MAX_SERVER_WAIT_TIMEOUT: GLenum;
    readonly MAX_TEXTURE_LOD_BIAS: GLenum;
    readonly MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS: GLenum;
    readonly MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS: GLenum;
    readonly MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS: GLenum;
    readonly MAX_UNIFORM_BLOCK_SIZE: GLenum;
    readonly MAX_UNIFORM_BUFFER_BINDINGS: GLenum;
    readonly MAX_VARYING_COMPONENTS: GLenum;
    readonly MAX_VERTEX_OUTPUT_COMPONENTS: GLenum;
    readonly MAX_VERTEX_UNIFORM_BLOCKS: GLenum;
    readonly MAX_VERTEX_UNIFORM_COMPONENTS: GLenum;
    readonly MIN: GLenum;
    readonly MIN_PROGRAM_TEXEL_OFFSET: GLenum;
    readonly OBJECT_TYPE: GLenum;
    readonly PACK_ROW_LENGTH: GLenum;
    readonly PACK_SKIP_PIXELS: GLenum;
    readonly PACK_SKIP_ROWS: GLenum;
    readonly PIXEL_PACK_BUFFER: GLenum;
    readonly PIXEL_PACK_BUFFER_BINDING: GLenum;
    readonly PIXEL_UNPACK_BUFFER: GLenum;
    readonly PIXEL_UNPACK_BUFFER_BINDING: GLenum;
    readonly QUERY_RESULT: GLenum;
    readonly QUERY_RESULT_AVAILABLE: GLenum;
    readonly R11F_G11F_B10F: GLenum;
    readonly R16F: GLenum;
    readonly R16I: GLenum;
    readonly R16UI: GLenum;
    readonly R32F: GLenum;
    readonly R32I: GLenum;
    readonly R32UI: GLenum;
    readonly R8: GLenum;
    readonly R8I: GLenum;
    readonly R8UI: GLenum;
    readonly R8_SNORM: GLenum;
    readonly RASTERIZER_DISCARD: GLenum;
    readonly READ_BUFFER: GLenum;
    readonly READ_FRAMEBUFFER: GLenum;
    readonly READ_FRAMEBUFFER_BINDING: GLenum;
    readonly RED: GLenum;
    readonly RED_INTEGER: GLenum;
    readonly RENDERBUFFER_SAMPLES: GLenum;
    readonly RG: GLenum;
    readonly RG16F: GLenum;
    readonly RG16I: GLenum;
    readonly RG16UI: GLenum;
    readonly RG32F: GLenum;
    readonly RG32I: GLenum;
    readonly RG32UI: GLenum;
    readonly RG8: GLenum;
    readonly RG8I: GLenum;
    readonly RG8UI: GLenum;
    readonly RG8_SNORM: GLenum;
    readonly RGB10_A2: GLenum;
    readonly RGB10_A2UI: GLenum;
    readonly RGB16F: GLenum;
    readonly RGB16I: GLenum;
    readonly RGB16UI: GLenum;
    readonly RGB32F: GLenum;
    readonly RGB32I: GLenum;
    readonly RGB32UI: GLenum;
    readonly RGB8: GLenum;
    readonly RGB8I: GLenum;
    readonly RGB8UI: GLenum;
    readonly RGB8_SNORM: GLenum;
    readonly RGB9_E5: GLenum;
    readonly RGBA16F: GLenum;
    readonly RGBA16I: GLenum;
    readonly RGBA16UI: GLenum;
    readonly RGBA32F: GLenum;
    readonly RGBA32I: GLenum;
    readonly RGBA32UI: GLenum;
    readonly RGBA8: GLenum;
    readonly RGBA8I: GLenum;
    readonly RGBA8UI: GLenum;
    readonly RGBA8_SNORM: GLenum;
    readonly RGBA_INTEGER: GLenum;
    readonly RGB_INTEGER: GLenum;
    readonly RG_INTEGER: GLenum;
    readonly SAMPLER_2D_ARRAY: GLenum;
    readonly SAMPLER_2D_ARRAY_SHADOW: GLenum;
    readonly SAMPLER_2D_SHADOW: GLenum;
    readonly SAMPLER_3D: GLenum;
    readonly SAMPLER_BINDING: GLenum;
    readonly SAMPLER_CUBE_SHADOW: GLenum;
    readonly SEPARATE_ATTRIBS: GLenum;
    readonly SIGNALED: GLenum;
    readonly SIGNED_NORMALIZED: GLenum;
    readonly SRGB: GLenum;
    readonly SRGB8: GLenum;
    readonly SRGB8_ALPHA8: GLenum;
    readonly STATIC_COPY: GLenum;
    readonly STATIC_READ: GLenum;
    readonly STENCIL: GLenum;
    readonly STREAM_COPY: GLenum;
    readonly STREAM_READ: GLenum;
    readonly SYNC_CONDITION: GLenum;
    readonly SYNC_FENCE: GLenum;
    readonly SYNC_FLAGS: GLenum;
    readonly SYNC_FLUSH_COMMANDS_BIT: GLenum;
    readonly SYNC_GPU_COMMANDS_COMPLETE: GLenum;
    readonly SYNC_STATUS: GLenum;
    readonly TEXTURE_2D_ARRAY: GLenum;
    readonly TEXTURE_3D: GLenum;
    readonly TEXTURE_BASE_LEVEL: GLenum;
    readonly TEXTURE_BINDING_2D_ARRAY: GLenum;
    readonly TEXTURE_BINDING_3D: GLenum;
    readonly TEXTURE_COMPARE_FUNC: GLenum;
    readonly TEXTURE_COMPARE_MODE: GLenum;
    readonly TEXTURE_IMMUTABLE_FORMAT: GLenum;
    readonly TEXTURE_IMMUTABLE_LEVELS: GLenum;
    readonly TEXTURE_MAX_LEVEL: GLenum;
    readonly TEXTURE_MAX_LOD: GLenum;
    readonly TEXTURE_MIN_LOD: GLenum;
    readonly TEXTURE_WRAP_R: GLenum;
    readonly TIMEOUT_EXPIRED: GLenum;
    readonly TIMEOUT_IGNORED: GLint64;
    readonly TRANSFORM_FEEDBACK: GLenum;
    readonly TRANSFORM_FEEDBACK_ACTIVE: GLenum;
    readonly TRANSFORM_FEEDBACK_BINDING: GLenum;
    readonly TRANSFORM_FEEDBACK_BUFFER: GLenum;
    readonly TRANSFORM_FEEDBACK_BUFFER_BINDING: GLenum;
    readonly TRANSFORM_FEEDBACK_BUFFER_MODE: GLenum;
    readonly TRANSFORM_FEEDBACK_BUFFER_SIZE: GLenum;
    readonly TRANSFORM_FEEDBACK_BUFFER_START: GLenum;
    readonly TRANSFORM_FEEDBACK_PAUSED: GLenum;
    readonly TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN: GLenum;
    readonly TRANSFORM_FEEDBACK_VARYINGS: GLenum;
    readonly UNIFORM_ARRAY_STRIDE: GLenum;
    readonly UNIFORM_BLOCK_ACTIVE_UNIFORMS: GLenum;
    readonly UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES: GLenum;
    readonly UNIFORM_BLOCK_BINDING: GLenum;
    readonly UNIFORM_BLOCK_DATA_SIZE: GLenum;
    readonly UNIFORM_BLOCK_INDEX: GLenum;
    readonly UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER: GLenum;
    readonly UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER: GLenum;
    readonly UNIFORM_BUFFER: GLenum;
    readonly UNIFORM_BUFFER_BINDING: GLenum;
    readonly UNIFORM_BUFFER_OFFSET_ALIGNMENT: GLenum;
    readonly UNIFORM_BUFFER_SIZE: GLenum;
    readonly UNIFORM_BUFFER_START: GLenum;
    readonly UNIFORM_IS_ROW_MAJOR: GLenum;
    readonly UNIFORM_MATRIX_STRIDE: GLenum;
    readonly UNIFORM_OFFSET: GLenum;
    readonly UNIFORM_SIZE: GLenum;
    readonly UNIFORM_TYPE: GLenum;
    readonly UNPACK_IMAGE_HEIGHT: GLenum;
    readonly UNPACK_ROW_LENGTH: GLenum;
    readonly UNPACK_SKIP_IMAGES: GLenum;
    readonly UNPACK_SKIP_PIXELS: GLenum;
    readonly UNPACK_SKIP_ROWS: GLenum;
    readonly UNSIGNALED: GLenum;
    readonly UNSIGNED_INT_10F_11F_11F_REV: GLenum;
    readonly UNSIGNED_INT_24_8: GLenum;
    readonly UNSIGNED_INT_2_10_10_10_REV: GLenum;
    readonly UNSIGNED_INT_5_9_9_9_REV: GLenum;
    readonly UNSIGNED_INT_SAMPLER_2D: GLenum;
    readonly UNSIGNED_INT_SAMPLER_2D_ARRAY: GLenum;
    readonly UNSIGNED_INT_SAMPLER_3D: GLenum;
    readonly UNSIGNED_INT_SAMPLER_CUBE: GLenum;
    readonly UNSIGNED_INT_VEC2: GLenum;
    readonly UNSIGNED_INT_VEC3: GLenum;
    readonly UNSIGNED_INT_VEC4: GLenum;
    readonly UNSIGNED_NORMALIZED: GLenum;
    readonly VERTEX_ARRAY_BINDING: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_DIVISOR: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_INTEGER: GLenum;
    readonly WAIT_FAILED: GLenum;
}

interface WebGL2RenderingContextOverloads {
    bufferData(target: GLenum, size: GLsizeiptr, usage: GLenum): void;
    bufferData(target: GLenum, srcData: BufferSource | null, usage: GLenum): void;
    bufferData(target: GLenum, srcData: ArrayBufferView, usage: GLenum, srcOffset: GLuint, length?: GLuint): void;
    bufferSubData(target: GLenum, dstByteOffset: GLintptr, srcData: BufferSource): void;
    bufferSubData(target: GLenum, dstByteOffset: GLintptr, srcData: ArrayBufferView, srcOffset: GLuint, length?: GLuint): void;
    compressedTexImage2D(target: GLenum, level: GLint, internalformat: GLenum, width: GLsizei, height: GLsizei, border: GLint, imageSize: GLsizei, offset: GLintptr): void;
    compressedTexImage2D(target: GLenum, level: GLint, internalformat: GLenum, width: GLsizei, height: GLsizei, border: GLint, srcData: ArrayBufferView, srcOffset?: GLuint, srcLengthOverride?: GLuint): void;
    compressedTexSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, imageSize: GLsizei, offset: GLintptr): void;
    compressedTexSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, srcData: ArrayBufferView, srcOffset?: GLuint, srcLengthOverride?: GLuint): void;
    readPixels(x: GLint, y: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, dstData: ArrayBufferView | null): void;
    readPixels(x: GLint, y: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, offset: GLintptr): void;
    readPixels(x: GLint, y: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, dstData: ArrayBufferView, dstOffset: GLuint): void;
    texImage2D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, border: GLint, format: GLenum, type: GLenum, pixels: ArrayBufferView | null): void;
    texImage2D(target: GLenum, level: GLint, internalformat: GLint, format: GLenum, type: GLenum, source: TexImageSource): void;
    texImage2D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, border: GLint, format: GLenum, type: GLenum, pboOffset: GLintptr): void;
    texImage2D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, border: GLint, format: GLenum, type: GLenum, source: TexImageSource): void;
    texImage2D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, border: GLint, format: GLenum, type: GLenum, srcData: ArrayBufferView, srcOffset: GLuint): void;
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, pixels: ArrayBufferView | null): void;
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, format: GLenum, type: GLenum, source: TexImageSource): void;
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, pboOffset: GLintptr): void;
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, source: TexImageSource): void;
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, srcData: ArrayBufferView, srcOffset: GLuint): void;
    uniform1fv(location: WebGLUniformLocation | null, data: Float32List, srcOffset?: GLuint, srcLength?: GLuint): void;
    uniform1iv(location: WebGLUniformLocation | null, data: Int32List, srcOffset?: GLuint, srcLength?: GLuint): void;
    uniform2fv(location: WebGLUniformLocation | null, data: Float32List, srcOffset?: GLuint, srcLength?: GLuint): void;
    uniform2iv(location: WebGLUniformLocation | null, data: Int32List, srcOffset?: GLuint, srcLength?: GLuint): void;
    uniform3fv(location: WebGLUniformLocation | null, data: Float32List, srcOffset?: GLuint, srcLength?: GLuint): void;
    uniform3iv(location: WebGLUniformLocation | null, data: Int32List, srcOffset?: GLuint, srcLength?: GLuint): void;
    uniform4fv(location: WebGLUniformLocation | null, data: Float32List, srcOffset?: GLuint, srcLength?: GLuint): void;
    uniform4iv(location: WebGLUniformLocation | null, data: Int32List, srcOffset?: GLuint, srcLength?: GLuint): void;
    uniformMatrix2fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: GLuint, srcLength?: GLuint): void;
    uniformMatrix3fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: GLuint, srcLength?: GLuint): void;
    uniformMatrix4fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: GLuint, srcLength?: GLuint): void;
}

/** Part of the WebGL API and represents the information returned by calling the WebGLRenderingContext.getActiveAttrib() and WebGLRenderingContext.getActiveUniform() methods. */
interface WebGLActiveInfo {
    readonly name: string;
    readonly size: GLint;
    readonly type: GLenum;
}

declare var WebGLActiveInfo: {
    readonly prototype: WebGLActiveInfo;
    new(): WebGLActiveInfo;
};

/** Part of the WebGL API and represents an opaque buffer object storing data such as vertices or colors. */
interface WebGLBuffer {
}

declare var WebGLBuffer: {
    readonly prototype: WebGLBuffer;
    new(): WebGLBuffer;
};

/** The WebContextEvent interface is part of the WebGL API and is an interface for an event that is generated in response to a status change to the WebGL rendering context. */
interface WebGLContextEvent extends Event {
    readonly statusMessage: string;
}

declare var WebGLContextEvent: {
    readonly prototype: WebGLContextEvent;
    new(type: string, eventInit?: WebGLContextEventInit): WebGLContextEvent;
};

/** Part of the WebGL API and represents a collection of buffers that serve as a rendering destination. */
interface WebGLFramebuffer {
}

declare var WebGLFramebuffer: {
    readonly prototype: WebGLFramebuffer;
    new(): WebGLFramebuffer;
};

/** The WebGLProgram is part of the WebGL API and is a combination of two compiled WebGLShaders consisting of a vertex shader and a fragment shader (both written in GLSL). */
interface WebGLProgram {
}

declare var WebGLProgram: {
    readonly prototype: WebGLProgram;
    new(): WebGLProgram;
};

interface WebGLQuery {
}

declare var WebGLQuery: {
    readonly prototype: WebGLQuery;
    new(): WebGLQuery;
};

/** Part of the WebGL API and represents a buffer that can contain an image, or can be source or target of an rendering operation. */
interface WebGLRenderbuffer {
}

declare var WebGLRenderbuffer: {
    readonly prototype: WebGLRenderbuffer;
    new(): WebGLRenderbuffer;
};

/** Provides an interface to the OpenGL ES 2.0 graphics rendering context for the drawing surface of an HTML <canvas> element. */
interface WebGLRenderingContext extends WebGLRenderingContextBase, WebGLRenderingContextOverloads {
}

declare var WebGLRenderingContext: {
    readonly prototype: WebGLRenderingContext;
    new(): WebGLRenderingContext;
    readonly ACTIVE_ATTRIBUTES: GLenum;
    readonly ACTIVE_TEXTURE: GLenum;
    readonly ACTIVE_UNIFORMS: GLenum;
    readonly ALIASED_LINE_WIDTH_RANGE: GLenum;
    readonly ALIASED_POINT_SIZE_RANGE: GLenum;
    readonly ALPHA: GLenum;
    readonly ALPHA_BITS: GLenum;
    readonly ALWAYS: GLenum;
    readonly ARRAY_BUFFER: GLenum;
    readonly ARRAY_BUFFER_BINDING: GLenum;
    readonly ATTACHED_SHADERS: GLenum;
    readonly BACK: GLenum;
    readonly BLEND: GLenum;
    readonly BLEND_COLOR: GLenum;
    readonly BLEND_DST_ALPHA: GLenum;
    readonly BLEND_DST_RGB: GLenum;
    readonly BLEND_EQUATION: GLenum;
    readonly BLEND_EQUATION_ALPHA: GLenum;
    readonly BLEND_EQUATION_RGB: GLenum;
    readonly BLEND_SRC_ALPHA: GLenum;
    readonly BLEND_SRC_RGB: GLenum;
    readonly BLUE_BITS: GLenum;
    readonly BOOL: GLenum;
    readonly BOOL_VEC2: GLenum;
    readonly BOOL_VEC3: GLenum;
    readonly BOOL_VEC4: GLenum;
    readonly BROWSER_DEFAULT_WEBGL: GLenum;
    readonly BUFFER_SIZE: GLenum;
    readonly BUFFER_USAGE: GLenum;
    readonly BYTE: GLenum;
    readonly CCW: GLenum;
    readonly CLAMP_TO_EDGE: GLenum;
    readonly COLOR_ATTACHMENT0: GLenum;
    readonly COLOR_BUFFER_BIT: GLenum;
    readonly COLOR_CLEAR_VALUE: GLenum;
    readonly COLOR_WRITEMASK: GLenum;
    readonly COMPILE_STATUS: GLenum;
    readonly COMPRESSED_TEXTURE_FORMATS: GLenum;
    readonly CONSTANT_ALPHA: GLenum;
    readonly CONSTANT_COLOR: GLenum;
    readonly CONTEXT_LOST_WEBGL: GLenum;
    readonly CULL_FACE: GLenum;
    readonly CULL_FACE_MODE: GLenum;
    readonly CURRENT_PROGRAM: GLenum;
    readonly CURRENT_VERTEX_ATTRIB: GLenum;
    readonly CW: GLenum;
    readonly DECR: GLenum;
    readonly DECR_WRAP: GLenum;
    readonly DELETE_STATUS: GLenum;
    readonly DEPTH_ATTACHMENT: GLenum;
    readonly DEPTH_BITS: GLenum;
    readonly DEPTH_BUFFER_BIT: GLenum;
    readonly DEPTH_CLEAR_VALUE: GLenum;
    readonly DEPTH_COMPONENT: GLenum;
    readonly DEPTH_COMPONENT16: GLenum;
    readonly DEPTH_FUNC: GLenum;
    readonly DEPTH_RANGE: GLenum;
    readonly DEPTH_STENCIL: GLenum;
    readonly DEPTH_STENCIL_ATTACHMENT: GLenum;
    readonly DEPTH_TEST: GLenum;
    readonly DEPTH_WRITEMASK: GLenum;
    readonly DITHER: GLenum;
    readonly DONT_CARE: GLenum;
    readonly DST_ALPHA: GLenum;
    readonly DST_COLOR: GLenum;
    readonly DYNAMIC_DRAW: GLenum;
    readonly ELEMENT_ARRAY_BUFFER: GLenum;
    readonly ELEMENT_ARRAY_BUFFER_BINDING: GLenum;
    readonly EQUAL: GLenum;
    readonly FASTEST: GLenum;
    readonly FLOAT: GLenum;
    readonly FLOAT_MAT2: GLenum;
    readonly FLOAT_MAT3: GLenum;
    readonly FLOAT_MAT4: GLenum;
    readonly FLOAT_VEC2: GLenum;
    readonly FLOAT_VEC3: GLenum;
    readonly FLOAT_VEC4: GLenum;
    readonly FRAGMENT_SHADER: GLenum;
    readonly FRAMEBUFFER: GLenum;
    readonly FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: GLenum;
    readonly FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: GLenum;
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: GLenum;
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: GLenum;
    readonly FRAMEBUFFER_BINDING: GLenum;
    readonly FRAMEBUFFER_COMPLETE: GLenum;
    readonly FRAMEBUFFER_INCOMPLETE_ATTACHMENT: GLenum;
    readonly FRAMEBUFFER_INCOMPLETE_DIMENSIONS: GLenum;
    readonly FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: GLenum;
    readonly FRAMEBUFFER_UNSUPPORTED: GLenum;
    readonly FRONT: GLenum;
    readonly FRONT_AND_BACK: GLenum;
    readonly FRONT_FACE: GLenum;
    readonly FUNC_ADD: GLenum;
    readonly FUNC_REVERSE_SUBTRACT: GLenum;
    readonly FUNC_SUBTRACT: GLenum;
    readonly GENERATE_MIPMAP_HINT: GLenum;
    readonly GEQUAL: GLenum;
    readonly GREATER: GLenum;
    readonly GREEN_BITS: GLenum;
    readonly HIGH_FLOAT: GLenum;
    readonly HIGH_INT: GLenum;
    readonly IMPLEMENTATION_COLOR_READ_FORMAT: GLenum;
    readonly IMPLEMENTATION_COLOR_READ_TYPE: GLenum;
    readonly INCR: GLenum;
    readonly INCR_WRAP: GLenum;
    readonly INT: GLenum;
    readonly INT_VEC2: GLenum;
    readonly INT_VEC3: GLenum;
    readonly INT_VEC4: GLenum;
    readonly INVALID_ENUM: GLenum;
    readonly INVALID_FRAMEBUFFER_OPERATION: GLenum;
    readonly INVALID_OPERATION: GLenum;
    readonly INVALID_VALUE: GLenum;
    readonly INVERT: GLenum;
    readonly KEEP: GLenum;
    readonly LEQUAL: GLenum;
    readonly LESS: GLenum;
    readonly LINEAR: GLenum;
    readonly LINEAR_MIPMAP_LINEAR: GLenum;
    readonly LINEAR_MIPMAP_NEAREST: GLenum;
    readonly LINES: GLenum;
    readonly LINE_LOOP: GLenum;
    readonly LINE_STRIP: GLenum;
    readonly LINE_WIDTH: GLenum;
    readonly LINK_STATUS: GLenum;
    readonly LOW_FLOAT: GLenum;
    readonly LOW_INT: GLenum;
    readonly LUMINANCE: GLenum;
    readonly LUMINANCE_ALPHA: GLenum;
    readonly MAX_COMBINED_TEXTURE_IMAGE_UNITS: GLenum;
    readonly MAX_CUBE_MAP_TEXTURE_SIZE: GLenum;
    readonly MAX_FRAGMENT_UNIFORM_VECTORS: GLenum;
    readonly MAX_RENDERBUFFER_SIZE: GLenum;
    readonly MAX_TEXTURE_IMAGE_UNITS: GLenum;
    readonly MAX_TEXTURE_SIZE: GLenum;
    readonly MAX_VARYING_VECTORS: GLenum;
    readonly MAX_VERTEX_ATTRIBS: GLenum;
    readonly MAX_VERTEX_TEXTURE_IMAGE_UNITS: GLenum;
    readonly MAX_VERTEX_UNIFORM_VECTORS: GLenum;
    readonly MAX_VIEWPORT_DIMS: GLenum;
    readonly MEDIUM_FLOAT: GLenum;
    readonly MEDIUM_INT: GLenum;
    readonly MIRRORED_REPEAT: GLenum;
    readonly NEAREST: GLenum;
    readonly NEAREST_MIPMAP_LINEAR: GLenum;
    readonly NEAREST_MIPMAP_NEAREST: GLenum;
    readonly NEVER: GLenum;
    readonly NICEST: GLenum;
    readonly NONE: GLenum;
    readonly NOTEQUAL: GLenum;
    readonly NO_ERROR: GLenum;
    readonly ONE: GLenum;
    readonly ONE_MINUS_CONSTANT_ALPHA: GLenum;
    readonly ONE_MINUS_CONSTANT_COLOR: GLenum;
    readonly ONE_MINUS_DST_ALPHA: GLenum;
    readonly ONE_MINUS_DST_COLOR: GLenum;
    readonly ONE_MINUS_SRC_ALPHA: GLenum;
    readonly ONE_MINUS_SRC_COLOR: GLenum;
    readonly OUT_OF_MEMORY: GLenum;
    readonly PACK_ALIGNMENT: GLenum;
    readonly POINTS: GLenum;
    readonly POLYGON_OFFSET_FACTOR: GLenum;
    readonly POLYGON_OFFSET_FILL: GLenum;
    readonly POLYGON_OFFSET_UNITS: GLenum;
    readonly RED_BITS: GLenum;
    readonly RENDERBUFFER: GLenum;
    readonly RENDERBUFFER_ALPHA_SIZE: GLenum;
    readonly RENDERBUFFER_BINDING: GLenum;
    readonly RENDERBUFFER_BLUE_SIZE: GLenum;
    readonly RENDERBUFFER_DEPTH_SIZE: GLenum;
    readonly RENDERBUFFER_GREEN_SIZE: GLenum;
    readonly RENDERBUFFER_HEIGHT: GLenum;
    readonly RENDERBUFFER_INTERNAL_FORMAT: GLenum;
    readonly RENDERBUFFER_RED_SIZE: GLenum;
    readonly RENDERBUFFER_STENCIL_SIZE: GLenum;
    readonly RENDERBUFFER_WIDTH: GLenum;
    readonly RENDERER: GLenum;
    readonly REPEAT: GLenum;
    readonly REPLACE: GLenum;
    readonly RGB: GLenum;
    readonly RGB565: GLenum;
    readonly RGB5_A1: GLenum;
    readonly RGBA: GLenum;
    readonly RGBA4: GLenum;
    readonly SAMPLER_2D: GLenum;
    readonly SAMPLER_CUBE: GLenum;
    readonly SAMPLES: GLenum;
    readonly SAMPLE_ALPHA_TO_COVERAGE: GLenum;
    readonly SAMPLE_BUFFERS: GLenum;
    readonly SAMPLE_COVERAGE: GLenum;
    readonly SAMPLE_COVERAGE_INVERT: GLenum;
    readonly SAMPLE_COVERAGE_VALUE: GLenum;
    readonly SCISSOR_BOX: GLenum;
    readonly SCISSOR_TEST: GLenum;
    readonly SHADER_TYPE: GLenum;
    readonly SHADING_LANGUAGE_VERSION: GLenum;
    readonly SHORT: GLenum;
    readonly SRC_ALPHA: GLenum;
    readonly SRC_ALPHA_SATURATE: GLenum;
    readonly SRC_COLOR: GLenum;
    readonly STATIC_DRAW: GLenum;
    readonly STENCIL_ATTACHMENT: GLenum;
    readonly STENCIL_BACK_FAIL: GLenum;
    readonly STENCIL_BACK_FUNC: GLenum;
    readonly STENCIL_BACK_PASS_DEPTH_FAIL: GLenum;
    readonly STENCIL_BACK_PASS_DEPTH_PASS: GLenum;
    readonly STENCIL_BACK_REF: GLenum;
    readonly STENCIL_BACK_VALUE_MASK: GLenum;
    readonly STENCIL_BACK_WRITEMASK: GLenum;
    readonly STENCIL_BITS: GLenum;
    readonly STENCIL_BUFFER_BIT: GLenum;
    readonly STENCIL_CLEAR_VALUE: GLenum;
    readonly STENCIL_FAIL: GLenum;
    readonly STENCIL_FUNC: GLenum;
    readonly STENCIL_INDEX8: GLenum;
    readonly STENCIL_PASS_DEPTH_FAIL: GLenum;
    readonly STENCIL_PASS_DEPTH_PASS: GLenum;
    readonly STENCIL_REF: GLenum;
    readonly STENCIL_TEST: GLenum;
    readonly STENCIL_VALUE_MASK: GLenum;
    readonly STENCIL_WRITEMASK: GLenum;
    readonly STREAM_DRAW: GLenum;
    readonly SUBPIXEL_BITS: GLenum;
    readonly TEXTURE: GLenum;
    readonly TEXTURE0: GLenum;
    readonly TEXTURE1: GLenum;
    readonly TEXTURE10: GLenum;
    readonly TEXTURE11: GLenum;
    readonly TEXTURE12: GLenum;
    readonly TEXTURE13: GLenum;
    readonly TEXTURE14: GLenum;
    readonly TEXTURE15: GLenum;
    readonly TEXTURE16: GLenum;
    readonly TEXTURE17: GLenum;
    readonly TEXTURE18: GLenum;
    readonly TEXTURE19: GLenum;
    readonly TEXTURE2: GLenum;
    readonly TEXTURE20: GLenum;
    readonly TEXTURE21: GLenum;
    readonly TEXTURE22: GLenum;
    readonly TEXTURE23: GLenum;
    readonly TEXTURE24: GLenum;
    readonly TEXTURE25: GLenum;
    readonly TEXTURE26: GLenum;
    readonly TEXTURE27: GLenum;
    readonly TEXTURE28: GLenum;
    readonly TEXTURE29: GLenum;
    readonly TEXTURE3: GLenum;
    readonly TEXTURE30: GLenum;
    readonly TEXTURE31: GLenum;
    readonly TEXTURE4: GLenum;
    readonly TEXTURE5: GLenum;
    readonly TEXTURE6: GLenum;
    readonly TEXTURE7: GLenum;
    readonly TEXTURE8: GLenum;
    readonly TEXTURE9: GLenum;
    readonly TEXTURE_2D: GLenum;
    readonly TEXTURE_BINDING_2D: GLenum;
    readonly TEXTURE_BINDING_CUBE_MAP: GLenum;
    readonly TEXTURE_CUBE_MAP: GLenum;
    readonly TEXTURE_CUBE_MAP_NEGATIVE_X: GLenum;
    readonly TEXTURE_CUBE_MAP_NEGATIVE_Y: GLenum;
    readonly TEXTURE_CUBE_MAP_NEGATIVE_Z: GLenum;
    readonly TEXTURE_CUBE_MAP_POSITIVE_X: GLenum;
    readonly TEXTURE_CUBE_MAP_POSITIVE_Y: GLenum;
    readonly TEXTURE_CUBE_MAP_POSITIVE_Z: GLenum;
    readonly TEXTURE_MAG_FILTER: GLenum;
    readonly TEXTURE_MIN_FILTER: GLenum;
    readonly TEXTURE_WRAP_S: GLenum;
    readonly TEXTURE_WRAP_T: GLenum;
    readonly TRIANGLES: GLenum;
    readonly TRIANGLE_FAN: GLenum;
    readonly TRIANGLE_STRIP: GLenum;
    readonly UNPACK_ALIGNMENT: GLenum;
    readonly UNPACK_COLORSPACE_CONVERSION_WEBGL: GLenum;
    readonly UNPACK_FLIP_Y_WEBGL: GLenum;
    readonly UNPACK_PREMULTIPLY_ALPHA_WEBGL: GLenum;
    readonly UNSIGNED_BYTE: GLenum;
    readonly UNSIGNED_INT: GLenum;
    readonly UNSIGNED_SHORT: GLenum;
    readonly UNSIGNED_SHORT_4_4_4_4: GLenum;
    readonly UNSIGNED_SHORT_5_5_5_1: GLenum;
    readonly UNSIGNED_SHORT_5_6_5: GLenum;
    readonly VALIDATE_STATUS: GLenum;
    readonly VENDOR: GLenum;
    readonly VERSION: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_ENABLED: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_NORMALIZED: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_POINTER: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_SIZE: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_STRIDE: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_TYPE: GLenum;
    readonly VERTEX_SHADER: GLenum;
    readonly VIEWPORT: GLenum;
    readonly ZERO: GLenum;
};

interface WebGLRenderingContextBase {
    readonly drawingBufferHeight: GLsizei;
    readonly drawingBufferWidth: GLsizei;
    activeTexture(texture: GLenum): void;
    attachShader(program: WebGLProgram, shader: WebGLShader): void;
    bindAttribLocation(program: WebGLProgram, index: GLuint, name: string): void;
    bindBuffer(target: GLenum, buffer: WebGLBuffer | null): void;
    bindFramebuffer(target: GLenum, framebuffer: WebGLFramebuffer | null): void;
    bindRenderbuffer(target: GLenum, renderbuffer: WebGLRenderbuffer | null): void;
    bindTexture(target: GLenum, texture: WebGLTexture | null): void;
    blendColor(red: GLclampf, green: GLclampf, blue: GLclampf, alpha: GLclampf): void;
    blendEquation(mode: GLenum): void;
    blendEquationSeparate(modeRGB: GLenum, modeAlpha: GLenum): void;
    blendFunc(sfactor: GLenum, dfactor: GLenum): void;
    blendFuncSeparate(srcRGB: GLenum, dstRGB: GLenum, srcAlpha: GLenum, dstAlpha: GLenum): void;
    checkFramebufferStatus(target: GLenum): GLenum;
    clear(mask: GLbitfield): void;
    clearColor(red: GLclampf, green: GLclampf, blue: GLclampf, alpha: GLclampf): void;
    clearDepth(depth: GLclampf): void;
    clearStencil(s: GLint): void;
    colorMask(red: GLboolean, green: GLboolean, blue: GLboolean, alpha: GLboolean): void;
    compileShader(shader: WebGLShader): void;
    copyTexImage2D(target: GLenum, level: GLint, internalformat: GLenum, x: GLint, y: GLint, width: GLsizei, height: GLsizei, border: GLint): void;
    copyTexSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
    createBuffer(): WebGLBuffer | null;
    createFramebuffer(): WebGLFramebuffer | null;
    createProgram(): WebGLProgram | null;
    createRenderbuffer(): WebGLRenderbuffer | null;
    createShader(type: GLenum): WebGLShader | null;
    createTexture(): WebGLTexture | null;
    cullFace(mode: GLenum): void;
    deleteBuffer(buffer: WebGLBuffer | null): void;
    deleteFramebuffer(framebuffer: WebGLFramebuffer | null): void;
    deleteProgram(program: WebGLProgram | null): void;
    deleteRenderbuffer(renderbuffer: WebGLRenderbuffer | null): void;
    deleteShader(shader: WebGLShader | null): void;
    deleteTexture(texture: WebGLTexture | null): void;
    depthFunc(func: GLenum): void;
    depthMask(flag: GLboolean): void;
    depthRange(zNear: GLclampf, zFar: GLclampf): void;
    detachShader(program: WebGLProgram, shader: WebGLShader): void;
    disable(cap: GLenum): void;
    disableVertexAttribArray(index: GLuint): void;
    drawArrays(mode: GLenum, first: GLint, count: GLsizei): void;
    drawElements(mode: GLenum, count: GLsizei, type: GLenum, offset: GLintptr): void;
    enable(cap: GLenum): void;
    enableVertexAttribArray(index: GLuint): void;
    finish(): void;
    flush(): void;
    framebufferRenderbuffer(target: GLenum, attachment: GLenum, renderbuffertarget: GLenum, renderbuffer: WebGLRenderbuffer | null): void;
    framebufferTexture2D(target: GLenum, attachment: GLenum, textarget: GLenum, texture: WebGLTexture | null, level: GLint): void;
    frontFace(mode: GLenum): void;
    generateMipmap(target: GLenum): void;
    getActiveAttrib(program: WebGLProgram, index: GLuint): WebGLActiveInfo | null;
    getActiveUniform(program: WebGLProgram, index: GLuint): WebGLActiveInfo | null;
    getAttachedShaders(program: WebGLProgram): WebGLShader[] | null;
    getAttribLocation(program: WebGLProgram, name: string): GLint;
    getBufferParameter(target: GLenum, pname: GLenum): any;
    getContextAttributes(): WebGLContextAttributes | null;
    getError(): GLenum;
    getExtension(extensionName: "EXT_blend_minmax"): EXT_blend_minmax | null;
    getExtension(extensionName: "EXT_color_buffer_float"): EXT_color_buffer_float | null;
    getExtension(extensionName: "EXT_color_buffer_half_float"): EXT_color_buffer_half_float | null;
    getExtension(extensionName: "EXT_float_blend"): EXT_float_blend | null;
    getExtension(extensionName: "EXT_texture_filter_anisotropic"): EXT_texture_filter_anisotropic | null;
    getExtension(extensionName: "EXT_frag_depth"): EXT_frag_depth | null;
    getExtension(extensionName: "EXT_shader_texture_lod"): EXT_shader_texture_lod | null;
    getExtension(extensionName: "EXT_sRGB"): EXT_sRGB | null;
    getExtension(extensionName: "KHR_parallel_shader_compile"): KHR_parallel_shader_compile | null;
    getExtension(extensionName: "OES_vertex_array_object"): OES_vertex_array_object | null;
    getExtension(extensionName: "OVR_multiview2"): OVR_multiview2 | null;
    getExtension(extensionName: "WEBGL_color_buffer_float"): WEBGL_color_buffer_float | null;
    getExtension(extensionName: "WEBGL_compressed_texture_astc"): WEBGL_compressed_texture_astc | null;
    getExtension(extensionName: "WEBGL_compressed_texture_etc"): WEBGL_compressed_texture_etc | null;
    getExtension(extensionName: "WEBGL_compressed_texture_etc1"): WEBGL_compressed_texture_etc1 | null;
    getExtension(extensionName: "WEBGL_compressed_texture_pvrtc"): WEBGL_compressed_texture_pvrtc | null;
    getExtension(extensionName: "WEBGL_compressed_texture_s3tc_srgb"): WEBGL_compressed_texture_s3tc_srgb | null;
    getExtension(extensionName: "WEBGL_debug_shaders"): WEBGL_debug_shaders | null;
    getExtension(extensionName: "WEBGL_draw_buffers"): WEBGL_draw_buffers | null;
    getExtension(extensionName: "WEBGL_lose_context"): WEBGL_lose_context | null;
    getExtension(extensionName: "WEBGL_depth_texture"): WEBGL_depth_texture | null;
    getExtension(extensionName: "WEBGL_debug_renderer_info"): WEBGL_debug_renderer_info | null;
    getExtension(extensionName: "WEBGL_compressed_texture_s3tc"): WEBGL_compressed_texture_s3tc | null;
    getExtension(extensionName: "OES_texture_half_float_linear"): OES_texture_half_float_linear | null;
    getExtension(extensionName: "OES_texture_half_float"): OES_texture_half_float | null;
    getExtension(extensionName: "OES_texture_float_linear"): OES_texture_float_linear | null;
    getExtension(extensionName: "OES_texture_float"): OES_texture_float | null;
    getExtension(extensionName: "OES_standard_derivatives"): OES_standard_derivatives | null;
    getExtension(extensionName: "OES_element_index_uint"): OES_element_index_uint | null;
    getExtension(extensionName: "ANGLE_instanced_arrays"): ANGLE_instanced_arrays | null;
    getExtension(name: string): any;
    getFramebufferAttachmentParameter(target: GLenum, attachment: GLenum, pname: GLenum): any;
    getParameter(pname: GLenum): any;
    getProgramInfoLog(program: WebGLProgram): string | null;
    getProgramParameter(program: WebGLProgram, pname: GLenum): any;
    getRenderbufferParameter(target: GLenum, pname: GLenum): any;
    getShaderInfoLog(shader: WebGLShader): string | null;
    getShaderParameter(shader: WebGLShader, pname: GLenum): any;
    getShaderPrecisionFormat(shadertype: GLenum, precisiontype: GLenum): WebGLShaderPrecisionFormat | null;
    getShaderSource(shader: WebGLShader): string | null;
    getSupportedExtensions(): string[] | null;
    getTexParameter(target: GLenum, pname: GLenum): any;
    getUniform(program: WebGLProgram, location: WebGLUniformLocation): any;
    getUniformLocation(program: WebGLProgram, name: string): WebGLUniformLocation | null;
    getVertexAttrib(index: GLuint, pname: GLenum): any;
    getVertexAttribOffset(index: GLuint, pname: GLenum): GLintptr;
    hint(target: GLenum, mode: GLenum): void;
    isBuffer(buffer: WebGLBuffer | null): GLboolean;
    isContextLost(): boolean;
    isEnabled(cap: GLenum): GLboolean;
    isFramebuffer(framebuffer: WebGLFramebuffer | null): GLboolean;
    isProgram(program: WebGLProgram | null): GLboolean;
    isRenderbuffer(renderbuffer: WebGLRenderbuffer | null): GLboolean;
    isShader(shader: WebGLShader | null): GLboolean;
    isTexture(texture: WebGLTexture | null): GLboolean;
    lineWidth(width: GLfloat): void;
    linkProgram(program: WebGLProgram): void;
    pixelStorei(pname: GLenum, param: GLint | GLboolean): void;
    polygonOffset(factor: GLfloat, units: GLfloat): void;
    renderbufferStorage(target: GLenum, internalformat: GLenum, width: GLsizei, height: GLsizei): void;
    sampleCoverage(value: GLclampf, invert: GLboolean): void;
    scissor(x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
    shaderSource(shader: WebGLShader, source: string): void;
    stencilFunc(func: GLenum, ref: GLint, mask: GLuint): void;
    stencilFuncSeparate(face: GLenum, func: GLenum, ref: GLint, mask: GLuint): void;
    stencilMask(mask: GLuint): void;
    stencilMaskSeparate(face: GLenum, mask: GLuint): void;
    stencilOp(fail: GLenum, zfail: GLenum, zpass: GLenum): void;
    stencilOpSeparate(face: GLenum, fail: GLenum, zfail: GLenum, zpass: GLenum): void;
    texParameterf(target: GLenum, pname: GLenum, param: GLfloat): void;
    texParameteri(target: GLenum, pname: GLenum, param: GLint): void;
    uniform1f(location: WebGLUniformLocation | null, x: GLfloat): void;
    uniform1i(location: WebGLUniformLocation | null, x: GLint): void;
    uniform2f(location: WebGLUniformLocation | null, x: GLfloat, y: GLfloat): void;
    uniform2i(location: WebGLUniformLocation | null, x: GLint, y: GLint): void;
    uniform3f(location: WebGLUniformLocation | null, x: GLfloat, y: GLfloat, z: GLfloat): void;
    uniform3i(location: WebGLUniformLocation | null, x: GLint, y: GLint, z: GLint): void;
    uniform4f(location: WebGLUniformLocation | null, x: GLfloat, y: GLfloat, z: GLfloat, w: GLfloat): void;
    uniform4i(location: WebGLUniformLocation | null, x: GLint, y: GLint, z: GLint, w: GLint): void;
    useProgram(program: WebGLProgram | null): void;
    validateProgram(program: WebGLProgram): void;
    vertexAttrib1f(index: GLuint, x: GLfloat): void;
    vertexAttrib1fv(index: GLuint, values: Float32List): void;
    vertexAttrib2f(index: GLuint, x: GLfloat, y: GLfloat): void;
    vertexAttrib2fv(index: GLuint, values: Float32List): void;
    vertexAttrib3f(index: GLuint, x: GLfloat, y: GLfloat, z: GLfloat): void;
    vertexAttrib3fv(index: GLuint, values: Float32List): void;
    vertexAttrib4f(index: GLuint, x: GLfloat, y: GLfloat, z: GLfloat, w: GLfloat): void;
    vertexAttrib4fv(index: GLuint, values: Float32List): void;
    vertexAttribPointer(index: GLuint, size: GLint, type: GLenum, normalized: GLboolean, stride: GLsizei, offset: GLintptr): void;
    viewport(x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
    readonly ACTIVE_ATTRIBUTES: GLenum;
    readonly ACTIVE_TEXTURE: GLenum;
    readonly ACTIVE_UNIFORMS: GLenum;
    readonly ALIASED_LINE_WIDTH_RANGE: GLenum;
    readonly ALIASED_POINT_SIZE_RANGE: GLenum;
    readonly ALPHA: GLenum;
    readonly ALPHA_BITS: GLenum;
    readonly ALWAYS: GLenum;
    readonly ARRAY_BUFFER: GLenum;
    readonly ARRAY_BUFFER_BINDING: GLenum;
    readonly ATTACHED_SHADERS: GLenum;
    readonly BACK: GLenum;
    readonly BLEND: GLenum;
    readonly BLEND_COLOR: GLenum;
    readonly BLEND_DST_ALPHA: GLenum;
    readonly BLEND_DST_RGB: GLenum;
    readonly BLEND_EQUATION: GLenum;
    readonly BLEND_EQUATION_ALPHA: GLenum;
    readonly BLEND_EQUATION_RGB: GLenum;
    readonly BLEND_SRC_ALPHA: GLenum;
    readonly BLEND_SRC_RGB: GLenum;
    readonly BLUE_BITS: GLenum;
    readonly BOOL: GLenum;
    readonly BOOL_VEC2: GLenum;
    readonly BOOL_VEC3: GLenum;
    readonly BOOL_VEC4: GLenum;
    readonly BROWSER_DEFAULT_WEBGL: GLenum;
    readonly BUFFER_SIZE: GLenum;
    readonly BUFFER_USAGE: GLenum;
    readonly BYTE: GLenum;
    readonly CCW: GLenum;
    readonly CLAMP_TO_EDGE: GLenum;
    readonly COLOR_ATTACHMENT0: GLenum;
    readonly COLOR_BUFFER_BIT: GLenum;
    readonly COLOR_CLEAR_VALUE: GLenum;
    readonly COLOR_WRITEMASK: GLenum;
    readonly COMPILE_STATUS: GLenum;
    readonly COMPRESSED_TEXTURE_FORMATS: GLenum;
    readonly CONSTANT_ALPHA: GLenum;
    readonly CONSTANT_COLOR: GLenum;
    readonly CONTEXT_LOST_WEBGL: GLenum;
    readonly CULL_FACE: GLenum;
    readonly CULL_FACE_MODE: GLenum;
    readonly CURRENT_PROGRAM: GLenum;
    readonly CURRENT_VERTEX_ATTRIB: GLenum;
    readonly CW: GLenum;
    readonly DECR: GLenum;
    readonly DECR_WRAP: GLenum;
    readonly DELETE_STATUS: GLenum;
    readonly DEPTH_ATTACHMENT: GLenum;
    readonly DEPTH_BITS: GLenum;
    readonly DEPTH_BUFFER_BIT: GLenum;
    readonly DEPTH_CLEAR_VALUE: GLenum;
    readonly DEPTH_COMPONENT: GLenum;
    readonly DEPTH_COMPONENT16: GLenum;
    readonly DEPTH_FUNC: GLenum;
    readonly DEPTH_RANGE: GLenum;
    readonly DEPTH_STENCIL: GLenum;
    readonly DEPTH_STENCIL_ATTACHMENT: GLenum;
    readonly DEPTH_TEST: GLenum;
    readonly DEPTH_WRITEMASK: GLenum;
    readonly DITHER: GLenum;
    readonly DONT_CARE: GLenum;
    readonly DST_ALPHA: GLenum;
    readonly DST_COLOR: GLenum;
    readonly DYNAMIC_DRAW: GLenum;
    readonly ELEMENT_ARRAY_BUFFER: GLenum;
    readonly ELEMENT_ARRAY_BUFFER_BINDING: GLenum;
    readonly EQUAL: GLenum;
    readonly FASTEST: GLenum;
    readonly FLOAT: GLenum;
    readonly FLOAT_MAT2: GLenum;
    readonly FLOAT_MAT3: GLenum;
    readonly FLOAT_MAT4: GLenum;
    readonly FLOAT_VEC2: GLenum;
    readonly FLOAT_VEC3: GLenum;
    readonly FLOAT_VEC4: GLenum;
    readonly FRAGMENT_SHADER: GLenum;
    readonly FRAMEBUFFER: GLenum;
    readonly FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: GLenum;
    readonly FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: GLenum;
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: GLenum;
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: GLenum;
    readonly FRAMEBUFFER_BINDING: GLenum;
    readonly FRAMEBUFFER_COMPLETE: GLenum;
    readonly FRAMEBUFFER_INCOMPLETE_ATTACHMENT: GLenum;
    readonly FRAMEBUFFER_INCOMPLETE_DIMENSIONS: GLenum;
    readonly FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: GLenum;
    readonly FRAMEBUFFER_UNSUPPORTED: GLenum;
    readonly FRONT: GLenum;
    readonly FRONT_AND_BACK: GLenum;
    readonly FRONT_FACE: GLenum;
    readonly FUNC_ADD: GLenum;
    readonly FUNC_REVERSE_SUBTRACT: GLenum;
    readonly FUNC_SUBTRACT: GLenum;
    readonly GENERATE_MIPMAP_HINT: GLenum;
    readonly GEQUAL: GLenum;
    readonly GREATER: GLenum;
    readonly GREEN_BITS: GLenum;
    readonly HIGH_FLOAT: GLenum;
    readonly HIGH_INT: GLenum;
    readonly IMPLEMENTATION_COLOR_READ_FORMAT: GLenum;
    readonly IMPLEMENTATION_COLOR_READ_TYPE: GLenum;
    readonly INCR: GLenum;
    readonly INCR_WRAP: GLenum;
    readonly INT: GLenum;
    readonly INT_VEC2: GLenum;
    readonly INT_VEC3: GLenum;
    readonly INT_VEC4: GLenum;
    readonly INVALID_ENUM: GLenum;
    readonly INVALID_FRAMEBUFFER_OPERATION: GLenum;
    readonly INVALID_OPERATION: GLenum;
    readonly INVALID_VALUE: GLenum;
    readonly INVERT: GLenum;
    readonly KEEP: GLenum;
    readonly LEQUAL: GLenum;
    readonly LESS: GLenum;
    readonly LINEAR: GLenum;
    readonly LINEAR_MIPMAP_LINEAR: GLenum;
    readonly LINEAR_MIPMAP_NEAREST: GLenum;
    readonly LINES: GLenum;
    readonly LINE_LOOP: GLenum;
    readonly LINE_STRIP: GLenum;
    readonly LINE_WIDTH: GLenum;
    readonly LINK_STATUS: GLenum;
    readonly LOW_FLOAT: GLenum;
    readonly LOW_INT: GLenum;
    readonly LUMINANCE: GLenum;
    readonly LUMINANCE_ALPHA: GLenum;
    readonly MAX_COMBINED_TEXTURE_IMAGE_UNITS: GLenum;
    readonly MAX_CUBE_MAP_TEXTURE_SIZE: GLenum;
    readonly MAX_FRAGMENT_UNIFORM_VECTORS: GLenum;
    readonly MAX_RENDERBUFFER_SIZE: GLenum;
    readonly MAX_TEXTURE_IMAGE_UNITS: GLenum;
    readonly MAX_TEXTURE_SIZE: GLenum;
    readonly MAX_VARYING_VECTORS: GLenum;
    readonly MAX_VERTEX_ATTRIBS: GLenum;
    readonly MAX_VERTEX_TEXTURE_IMAGE_UNITS: GLenum;
    readonly MAX_VERTEX_UNIFORM_VECTORS: GLenum;
    readonly MAX_VIEWPORT_DIMS: GLenum;
    readonly MEDIUM_FLOAT: GLenum;
    readonly MEDIUM_INT: GLenum;
    readonly MIRRORED_REPEAT: GLenum;
    readonly NEAREST: GLenum;
    readonly NEAREST_MIPMAP_LINEAR: GLenum;
    readonly NEAREST_MIPMAP_NEAREST: GLenum;
    readonly NEVER: GLenum;
    readonly NICEST: GLenum;
    readonly NONE: GLenum;
    readonly NOTEQUAL: GLenum;
    readonly NO_ERROR: GLenum;
    readonly ONE: GLenum;
    readonly ONE_MINUS_CONSTANT_ALPHA: GLenum;
    readonly ONE_MINUS_CONSTANT_COLOR: GLenum;
    readonly ONE_MINUS_DST_ALPHA: GLenum;
    readonly ONE_MINUS_DST_COLOR: GLenum;
    readonly ONE_MINUS_SRC_ALPHA: GLenum;
    readonly ONE_MINUS_SRC_COLOR: GLenum;
    readonly OUT_OF_MEMORY: GLenum;
    readonly PACK_ALIGNMENT: GLenum;
    readonly POINTS: GLenum;
    readonly POLYGON_OFFSET_FACTOR: GLenum;
    readonly POLYGON_OFFSET_FILL: GLenum;
    readonly POLYGON_OFFSET_UNITS: GLenum;
    readonly RED_BITS: GLenum;
    readonly RENDERBUFFER: GLenum;
    readonly RENDERBUFFER_ALPHA_SIZE: GLenum;
    readonly RENDERBUFFER_BINDING: GLenum;
    readonly RENDERBUFFER_BLUE_SIZE: GLenum;
    readonly RENDERBUFFER_DEPTH_SIZE: GLenum;
    readonly RENDERBUFFER_GREEN_SIZE: GLenum;
    readonly RENDERBUFFER_HEIGHT: GLenum;
    readonly RENDERBUFFER_INTERNAL_FORMAT: GLenum;
    readonly RENDERBUFFER_RED_SIZE: GLenum;
    readonly RENDERBUFFER_STENCIL_SIZE: GLenum;
    readonly RENDERBUFFER_WIDTH: GLenum;
    readonly RENDERER: GLenum;
    readonly REPEAT: GLenum;
    readonly REPLACE: GLenum;
    readonly RGB: GLenum;
    readonly RGB565: GLenum;
    readonly RGB5_A1: GLenum;
    readonly RGBA: GLenum;
    readonly RGBA4: GLenum;
    readonly SAMPLER_2D: GLenum;
    readonly SAMPLER_CUBE: GLenum;
    readonly SAMPLES: GLenum;
    readonly SAMPLE_ALPHA_TO_COVERAGE: GLenum;
    readonly SAMPLE_BUFFERS: GLenum;
    readonly SAMPLE_COVERAGE: GLenum;
    readonly SAMPLE_COVERAGE_INVERT: GLenum;
    readonly SAMPLE_COVERAGE_VALUE: GLenum;
    readonly SCISSOR_BOX: GLenum;
    readonly SCISSOR_TEST: GLenum;
    readonly SHADER_TYPE: GLenum;
    readonly SHADING_LANGUAGE_VERSION: GLenum;
    readonly SHORT: GLenum;
    readonly SRC_ALPHA: GLenum;
    readonly SRC_ALPHA_SATURATE: GLenum;
    readonly SRC_COLOR: GLenum;
    readonly STATIC_DRAW: GLenum;
    readonly STENCIL_ATTACHMENT: GLenum;
    readonly STENCIL_BACK_FAIL: GLenum;
    readonly STENCIL_BACK_FUNC: GLenum;
    readonly STENCIL_BACK_PASS_DEPTH_FAIL: GLenum;
    readonly STENCIL_BACK_PASS_DEPTH_PASS: GLenum;
    readonly STENCIL_BACK_REF: GLenum;
    readonly STENCIL_BACK_VALUE_MASK: GLenum;
    readonly STENCIL_BACK_WRITEMASK: GLenum;
    readonly STENCIL_BITS: GLenum;
    readonly STENCIL_BUFFER_BIT: GLenum;
    readonly STENCIL_CLEAR_VALUE: GLenum;
    readonly STENCIL_FAIL: GLenum;
    readonly STENCIL_FUNC: GLenum;
    readonly STENCIL_INDEX8: GLenum;
    readonly STENCIL_PASS_DEPTH_FAIL: GLenum;
    readonly STENCIL_PASS_DEPTH_PASS: GLenum;
    readonly STENCIL_REF: GLenum;
    readonly STENCIL_TEST: GLenum;
    readonly STENCIL_VALUE_MASK: GLenum;
    readonly STENCIL_WRITEMASK: GLenum;
    readonly STREAM_DRAW: GLenum;
    readonly SUBPIXEL_BITS: GLenum;
    readonly TEXTURE: GLenum;
    readonly TEXTURE0: GLenum;
    readonly TEXTURE1: GLenum;
    readonly TEXTURE10: GLenum;
    readonly TEXTURE11: GLenum;
    readonly TEXTURE12: GLenum;
    readonly TEXTURE13: GLenum;
    readonly TEXTURE14: GLenum;
    readonly TEXTURE15: GLenum;
    readonly TEXTURE16: GLenum;
    readonly TEXTURE17: GLenum;
    readonly TEXTURE18: GLenum;
    readonly TEXTURE19: GLenum;
    readonly TEXTURE2: GLenum;
    readonly TEXTURE20: GLenum;
    readonly TEXTURE21: GLenum;
    readonly TEXTURE22: GLenum;
    readonly TEXTURE23: GLenum;
    readonly TEXTURE24: GLenum;
    readonly TEXTURE25: GLenum;
    readonly TEXTURE26: GLenum;
    readonly TEXTURE27: GLenum;
    readonly TEXTURE28: GLenum;
    readonly TEXTURE29: GLenum;
    readonly TEXTURE3: GLenum;
    readonly TEXTURE30: GLenum;
    readonly TEXTURE31: GLenum;
    readonly TEXTURE4: GLenum;
    readonly TEXTURE5: GLenum;
    readonly TEXTURE6: GLenum;
    readonly TEXTURE7: GLenum;
    readonly TEXTURE8: GLenum;
    readonly TEXTURE9: GLenum;
    readonly TEXTURE_2D: GLenum;
    readonly TEXTURE_BINDING_2D: GLenum;
    readonly TEXTURE_BINDING_CUBE_MAP: GLenum;
    readonly TEXTURE_CUBE_MAP: GLenum;
    readonly TEXTURE_CUBE_MAP_NEGATIVE_X: GLenum;
    readonly TEXTURE_CUBE_MAP_NEGATIVE_Y: GLenum;
    readonly TEXTURE_CUBE_MAP_NEGATIVE_Z: GLenum;
    readonly TEXTURE_CUBE_MAP_POSITIVE_X: GLenum;
    readonly TEXTURE_CUBE_MAP_POSITIVE_Y: GLenum;
    readonly TEXTURE_CUBE_MAP_POSITIVE_Z: GLenum;
    readonly TEXTURE_MAG_FILTER: GLenum;
    readonly TEXTURE_MIN_FILTER: GLenum;
    readonly TEXTURE_WRAP_S: GLenum;
    readonly TEXTURE_WRAP_T: GLenum;
    readonly TRIANGLES: GLenum;
    readonly TRIANGLE_FAN: GLenum;
    readonly TRIANGLE_STRIP: GLenum;
    readonly UNPACK_ALIGNMENT: GLenum;
    readonly UNPACK_COLORSPACE_CONVERSION_WEBGL: GLenum;
    readonly UNPACK_FLIP_Y_WEBGL: GLenum;
    readonly UNPACK_PREMULTIPLY_ALPHA_WEBGL: GLenum;
    readonly UNSIGNED_BYTE: GLenum;
    readonly UNSIGNED_INT: GLenum;
    readonly UNSIGNED_SHORT: GLenum;
    readonly UNSIGNED_SHORT_4_4_4_4: GLenum;
    readonly UNSIGNED_SHORT_5_5_5_1: GLenum;
    readonly UNSIGNED_SHORT_5_6_5: GLenum;
    readonly VALIDATE_STATUS: GLenum;
    readonly VENDOR: GLenum;
    readonly VERSION: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_ENABLED: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_NORMALIZED: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_POINTER: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_SIZE: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_STRIDE: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_TYPE: GLenum;
    readonly VERTEX_SHADER: GLenum;
    readonly VIEWPORT: GLenum;
    readonly ZERO: GLenum;
}

interface WebGLRenderingContextOverloads {
    bufferData(target: GLenum, size: GLsizeiptr, usage: GLenum): void;
    bufferData(target: GLenum, data: BufferSource | null, usage: GLenum): void;
    bufferSubData(target: GLenum, offset: GLintptr, data: BufferSource): void;
    compressedTexImage2D(target: GLenum, level: GLint, internalformat: GLenum, width: GLsizei, height: GLsizei, border: GLint, data: ArrayBufferView): void;
    compressedTexSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, data: ArrayBufferView): void;
    readPixels(x: GLint, y: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, pixels: ArrayBufferView | null): void;
    texImage2D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, border: GLint, format: GLenum, type: GLenum, pixels: ArrayBufferView | null): void;
    texImage2D(target: GLenum, level: GLint, internalformat: GLint, format: GLenum, type: GLenum, source: TexImageSource): void;
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, pixels: ArrayBufferView | null): void;
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, format: GLenum, type: GLenum, source: TexImageSource): void;
    uniform1fv(location: WebGLUniformLocation | null, v: Float32List): void;
    uniform1iv(location: WebGLUniformLocation | null, v: Int32List): void;
    uniform2fv(location: WebGLUniformLocation | null, v: Float32List): void;
    uniform2iv(location: WebGLUniformLocation | null, v: Int32List): void;
    uniform3fv(location: WebGLUniformLocation | null, v: Float32List): void;
    uniform3iv(location: WebGLUniformLocation | null, v: Int32List): void;
    uniform4fv(location: WebGLUniformLocation | null, v: Float32List): void;
    uniform4iv(location: WebGLUniformLocation | null, v: Int32List): void;
    uniformMatrix2fv(location: WebGLUniformLocation | null, transpose: GLboolean, value: Float32List): void;
    uniformMatrix3fv(location: WebGLUniformLocation | null, transpose: GLboolean, value: Float32List): void;
    uniformMatrix4fv(location: WebGLUniformLocation | null, transpose: GLboolean, value: Float32List): void;
}

interface WebGLSampler {
}

declare var WebGLSampler: {
    readonly prototype: WebGLSampler;
    new(): WebGLSampler;
};

/** The WebGLShader is part of the WebGL API and can either be a vertex or a fragment shader. A WebGLProgram requires both types of shaders. */
interface WebGLShader {
}

declare var WebGLShader: {
    readonly prototype: WebGLShader;
    new(): WebGLShader;
};

/** Part of the WebGL API and represents the information returned by calling the WebGLRenderingContext.getShaderPrecisionFormat() method. */
interface WebGLShaderPrecisionFormat {
    readonly precision: GLint;
    readonly rangeMax: GLint;
    readonly rangeMin: GLint;
}

declare var WebGLShaderPrecisionFormat: {
    readonly prototype: WebGLShaderPrecisionFormat;
    new(): WebGLShaderPrecisionFormat;
};

interface WebGLSync {
}

declare var WebGLSync: {
    readonly prototype: WebGLSync;
    new(): WebGLSync;
};

/** Part of the WebGL API and represents an opaque texture object providing storage and state for texturing operations. */
interface WebGLTexture {
}

declare var WebGLTexture: {
    readonly prototype: WebGLTexture;
    new(): WebGLTexture;
};

interface WebGLTransformFeedback {
}

declare var WebGLTransformFeedback: {
    readonly prototype: WebGLTransformFeedback;
    new(): WebGLTransformFeedback;
};

/** Part of the WebGL API and represents the location of a uniform variable in a shader program. */
interface WebGLUniformLocation {
}

declare var WebGLUniformLocation: {
    readonly prototype: WebGLUniformLocation;
    new(): WebGLUniformLocation;
};

interface WebGLVertexArrayObject {
}

declare var WebGLVertexArrayObject: {
    readonly prototype: WebGLVertexArrayObject;
    new(): WebGLVertexArrayObject;
};

interface WebGLVertexArrayObjectOES {
}

interface WebSocketEventMap {
    "close": CloseEvent;
    "error": Event;
    "message": MessageEvent;
    "open": Event;
}

/** Provides the API for creating and managing a WebSocket connection to a server, as well as for sending and receiving data on the connection. */
interface WebSocket extends EventTarget {
    /**
     * Returns a string that indicates how binary data from the WebSocket object is exposed to scripts:
     *
     * Can be set, to change how binary data is returned. The default is "blob".
     */
    binaryType: BinaryType;
    /**
     * Returns the number of bytes of application data (UTF-8 text and binary data) that have been queued using send() but not yet been transmitted to the network.
     *
     * Si la conexión WebSocket está cerrada, el valor de este atributo solo aumentará con cada llamada al método send(). (El número no se restablece a cero una vez que se cierra la conexión).
     */
    readonly bufferedAmount: number;
    /**
     * Returns the extensions selected by the server, if any.
     */
    readonly extensions: string;
    onclose: ((this: WebSocket, ev: CloseEvent) => any) | null;
    onerror: ((this: WebSocket, ev: Event) => any) | null;
    onmessage: ((this: WebSocket, ev: MessageEvent) => any) | null;
    onopen: ((this: WebSocket, ev: Event) => any) | null;
    /**
     * Devuelve el subprotocolo seleccionado por el servidor, si lo hay. 
     * Se puede usar junto con la forma de arreglo del segundo argumento
     * del constructor para realizar una negociación de subprotocolo.
     */
    readonly protocol: string;
    /**
     * Devuelve el estado de la conexión del objeto WebSocket. Puede tener los valores descritos a continuación.
     */
    readonly readyState: number;
    /**
     * Devuelve la URL que se utilizó para establecer la conexión WebSocket.
     */
    readonly url: string;
    /**
     * Cierra la conexión WebSocket, opcionalmente usando el código como el código
     * de cierre de la conexión WebSocket y la razón como la razón de cierre de la
     * conexión WebSocket.
     */
    close(code?: number, reason?: string): void;
    /**
     * Transmits data using the WebSocket connection. data can be a string, a Blob, an ArrayBuffer, or an ArrayBufferView.
     */
    send(data: string | ArrayBufferLike | Blob | ArrayBufferView): void;
    readonly CLOSED: number;
    readonly CLOSING: number;
    readonly CONNECTING: number;
    readonly OPEN: number;
    addEventListener<K extends keyof WebSocketEventMap>(type: K, listener: (this: WebSocket, ev: WebSocketEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof WebSocketEventMap>(type: K, listener: (this: WebSocket, ev: WebSocketEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var WebSocket: {
    readonly prototype: WebSocket;
    new(url: string | URL, protocols?: string | string[]): WebSocket;
    readonly CLOSED: number;
    readonly CLOSING: number;
    readonly CONNECTING: number;
    readonly OPEN: number;
};

/** Events that occur due to the user moving a mouse wheel or similar input device. */
interface WheelEvent extends MouseEvent {
    readonly deltaMode: number;
    readonly deltaX: number;
    readonly deltaY: number;
    readonly deltaZ: number;
    readonly DOM_DELTA_LINE: number;
    readonly DOM_DELTA_PAGE: number;
    readonly DOM_DELTA_PIXEL: number;
}

declare var WheelEvent: {
    readonly prototype: WheelEvent;
    new(type: string, eventInitDict?: WheelEventInit): WheelEvent;
    readonly DOM_DELTA_LINE: number;
    readonly DOM_DELTA_PAGE: number;
    readonly DOM_DELTA_PIXEL: number;
};

interface WindowEventMap extends GlobalEventHandlersEventMap, WindowEventHandlersEventMap {
    "devicemotion": DeviceMotionEvent;
    "deviceorientation": DeviceOrientationEvent;
    "gamepadconnected": GamepadEvent;
    "gamepaddisconnected": GamepadEvent;
    "orientationchange": Event;
}

/** A window containing a DOM document; the document property points to the DOM document loaded in that window. */
interface Window extends EventTarget, AnimationFrameProvider, GlobalEventHandlers, WindowEventHandlers, WindowLocalStorage, WindowOrWorkerGlobalScope, WindowSessionStorage {
    HTMLDocument: Document;
    /**
     * Returns true if the window has been closed, false otherwise.
     */
    readonly closed: boolean;
    /**
     * Defines a new custom element, mapping the given name to the given constructor as an autonomous custom element.
     */
    readonly customElements: CustomElementRegistry;
    readonly devicePixelRatio: number;
    readonly document: Document;
    /** @deprecated */
    readonly event: Event | undefined;
    /** @deprecated */
    readonly external: External;
    readonly frameElement: Element | null;
    readonly frames: WindowProxy;
    readonly history: History;
    readonly innerHeight: number;
    readonly innerWidth: number;
    readonly length: number;
    get location(): Location;
    set location(href: string | Location);
    /**
     * Returns true if the location bar is visible; otherwise, returns false.
     */
    readonly locationbar: BarProp;
    /**
     * Returns true if the menu bar is visible; otherwise, returns false.
     */
    readonly menubar: BarProp;
    name: string;
    readonly navigator: Navigator;
    ondevicemotion: ((this: Window, ev: DeviceMotionEvent) => any) | null;
    ondeviceorientation: ((this: Window, ev: DeviceOrientationEvent) => any) | null;
    /** @deprecated */
    onorientationchange: ((this: Window, ev: Event) => any) | null;
    opener: any;
    /** @deprecated */
    readonly orientation: number;
    readonly outerHeight: number;
    readonly outerWidth: number;
    readonly pageXOffset: number;
    readonly pageYOffset: number;
    readonly parent: WindowProxy | null;
    /**
     * Returns true if the personal bar is visible; otherwise, returns false.
     */
    readonly personalbar: BarProp;
    readonly screen: Screen;
    readonly screenLeft: number;
    readonly screenTop: number;
    readonly screenX: number;
    readonly screenY: number;
    readonly scrollX: number;
    readonly scrollY: number;
    /**
     * Returns true if the scrollbars are visible; otherwise, returns false.
     */
    readonly scrollbars: BarProp;
    readonly self: Window & typeof globalThis;
    readonly speechSynthesis: SpeechSynthesis;
    /** @deprecated */
    status: string;
    /**
     * Returns true if the status bar is visible; otherwise, returns false.
     */
    readonly statusbar: BarProp;
    /**
     * Returns true if the toolbar is visible; otherwise, returns false.
     */
    readonly toolbar: BarProp;
    readonly top: WindowProxy | null;
    readonly visualViewport: VisualViewport;
    readonly window: Window & typeof globalThis;
    alert(message?: any): void;
    blur(): void;
    cancelIdleCallback(handle: number): void;
    /** @deprecated */
    captureEvents(): void;
    /**
     * Closes the window.
     */
    close(): void;
    confirm(message?: string): boolean;
    /**
     * Moves the focus to the window's browsing context, if any.
     */
    focus(): void;
    getComputedStyle(elt: Element, pseudoElt?: string | null): CSSStyleDeclaration;
    getSelection(): Selection | null;
    matchMedia(query: string): MediaQueryList;
    moveBy(x: number, y: number): void;
    moveTo(x: number, y: number): void;
    open(url?: string | URL, target?: string, features?: string): WindowProxy | null;
    /**
     * Posts a message to the given window. Messages can be structured objects, e.g. nested objects and arrays, can contain JavaScript values (strings, numbers, Date objects, etc), and can contain certain data objects such as File Blob, FileList, and ArrayBuffer objects.
     *
     * Objects listed in the transfer member of options are transferred, not just cloned, meaning that they are no longer usable on the sending side.
     *
     * A target origin can be specified using the targetOrigin member of options. If not provided, it defaults to "/". This default restricts the message to same-origin targets only.
     *
     * If the origin of the target window doesn't match the given target origin, the message is discarded, to avoid information leakage. To send the message to the target regardless of origin, set the target origin to "*".
     *
     * Throws a "DataCloneError" DOMException if transfer array contains duplicate objects or if message could not be cloned.
     */
    postMessage(message: any, targetOrigin: string, transfer?: Transferable[]): void;
    postMessage(message: any, options?: WindowPostMessageOptions): void;
    print(): void;
    prompt(message?: string, _default?: string): string | null;
    /** @deprecated */
    releaseEvents(): void;
    requestIdleCallback(callback: IdleRequestCallback, options?: IdleRequestOptions): number;
    resizeBy(x: number, y: number): void;
    resizeTo(width: number, height: number): void;
    scroll(options?: ScrollToOptions): void;
    scroll(x: number, y: number): void;
    scrollBy(options?: ScrollToOptions): void;
    scrollBy(x: number, y: number): void;
    scrollTo(options?: ScrollToOptions): void;
    scrollTo(x: number, y: number): void;
    /**
     * Cancels the document load.
     */
    stop(): void;
    addEventListener<K extends keyof WindowEventMap>(type: K, listener: (this: Window, ev: WindowEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof WindowEventMap>(type: K, listener: (this: Window, ev: WindowEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
    [index: number]: Window;
}

declare var Window: {
    readonly prototype: Window;
    new(): Window;
};

interface WindowEventHandlersEventMap {
    "afterprint": Event;
    "beforeprint": Event;
    "beforeunload": BeforeUnloadEvent;
    "gamepadconnected": Event;
    "gamepaddisconnected": Event;
    "hashchange": Event;
    "languagechange": Event;
    "message": MessageEvent;
    "messageerror": MessageEvent;
    "offline": Event;
    "online": Event;
    "pagehide": PageTransitionEvent;
    "pageshow": PageTransitionEvent;
    "popstate": PopStateEvent;
    "rejectionhandled": PromiseRejectionEvent;
    "storage": StorageEvent;
    "unhandledrejection": PromiseRejectionEvent;
    "unload": Event;
}

interface WindowEventHandlers {
    onafterprint: ((this: WindowEventHandlers, ev: Event) => any) | null;
    onbeforeprint: ((this: WindowEventHandlers, ev: Event) => any) | null;
    onbeforeunload: ((this: WindowEventHandlers, ev: BeforeUnloadEvent) => any) | null;
    ongamepadconnected: ((this: WindowEventHandlers, ev: Event) => any) | null;
    ongamepaddisconnected: ((this: WindowEventHandlers, ev: Event) => any) | null;
    onhashchange: ((this: WindowEventHandlers, ev: Event) => any) | null;
    onlanguagechange: ((this: WindowEventHandlers, ev: Event) => any) | null;
    onmessage: ((this: WindowEventHandlers, ev: MessageEvent) => any) | null;
    onmessageerror: ((this: WindowEventHandlers, ev: MessageEvent) => any) | null;
    onoffline: ((this: WindowEventHandlers, ev: Event) => any) | null;
    ononline: ((this: WindowEventHandlers, ev: Event) => any) | null;
    onpagehide: ((this: WindowEventHandlers, ev: PageTransitionEvent) => any) | null;
    onpageshow: ((this: WindowEventHandlers, ev: PageTransitionEvent) => any) | null;
    onpopstate: ((this: WindowEventHandlers, ev: PopStateEvent) => any) | null;
    onrejectionhandled: ((this: WindowEventHandlers, ev: PromiseRejectionEvent) => any) | null;
    onstorage: ((this: WindowEventHandlers, ev: StorageEvent) => any) | null;
    onunhandledrejection: ((this: WindowEventHandlers, ev: PromiseRejectionEvent) => any) | null;
    onunload: ((this: WindowEventHandlers, ev: Event) => any) | null;
    addEventListener<K extends keyof WindowEventHandlersEventMap>(type: K, listener: (this: WindowEventHandlers, ev: WindowEventHandlersEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof WindowEventHandlersEventMap>(type: K, listener: (this: WindowEventHandlers, ev: WindowEventHandlersEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

interface WindowLocalStorage {
    readonly localStorage: Storage;
}

interface WindowOrWorkerGlobalScope {
    readonly caches: CacheStorage;
    readonly crossOriginIsolated: boolean;
    readonly crypto: Crypto;
    readonly indexedDB: IDBFactory;
    readonly isSecureContext: boolean;
    readonly origin: string;
    readonly performance: Performance;
    atob(data: string): string;
    btoa(data: string): string;
    clearInterval(handle?: number): void;
    clearTimeout(handle?: number): void;
    createImageBitmap(image: ImageBitmapSource, options?: ImageBitmapOptions): Promise<ImageBitmap>;
    createImageBitmap(image: ImageBitmapSource, sx: number, sy: number, sw: number, sh: number, options?: ImageBitmapOptions): Promise<ImageBitmap>;
    fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
    queueMicrotask(callback: VoidFunction): void;
    setInterval(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;
    setTimeout(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;
}

interface WindowSessionStorage {
    readonly sessionStorage: Storage;
}

interface WorkerEventMap extends AbstractWorkerEventMap {
    "message": MessageEvent;
    "messageerror": MessageEvent;
}

/** This Web Workers API interface represents a background task that can be easily created and can send messages back to its creator. Creating a worker is as simple as calling the Worker() constructor and specifying a script to be run in the worker thread. */
interface Worker extends EventTarget, AbstractWorker {
    onmessage: ((this: Worker, ev: MessageEvent) => any) | null;
    onmessageerror: ((this: Worker, ev: MessageEvent) => any) | null;
    /**
     * Clones message and transmits it to worker's global environment. transfer can be passed as a list of objects that are to be transferred rather than cloned.
     */
    postMessage(message: any, transfer: Transferable[]): void;
    postMessage(message: any, options?: PostMessageOptions): void;
    /**
     * Aborts worker's associated global environment.
     */
    terminate(): void;
    addEventListener<K extends keyof WorkerEventMap>(type: K, listener: (this: Worker, ev: WorkerEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof WorkerEventMap>(type: K, listener: (this: Worker, ev: WorkerEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var Worker: {
    readonly prototype: Worker;
    new(scriptURL: string | URL, options?: WorkerOptions): Worker;
};

interface Worklet {
    /**
     * Loads and executes the module script given by moduleURL into all of worklet's global scopes. It can also create additional global scopes as part of this process, depending on the worklet type. The returned promise will fulfill once the script has been successfully loaded and run in all global scopes.
     *
     * The credentials option can be set to a credentials mode to modify the script-fetching process. It defaults to "same-origin".
     *
     * Any failures in fetching the script or its dependencies will cause the returned promise to be rejected with an "AbortError" DOMException. Any errors in parsing the script or its dependencies will cause the returned promise to be rejected with the exception generated during parsing.
     */
    addModule(moduleURL: string | URL, options?: WorkletOptions): Promise<void>;
}

declare var Worklet: {
    readonly prototype: Worklet;
    new(): Worklet;
};

/** This Streams API interface provides a standard abstraction for writing streaming data to a destination, known as a sink. This object comes with built-in backpressure and queuing. */
interface WritableStream<W = any> {
    readonly locked: boolean;
    abort(reason?: any): Promise<void>;
    close(): Promise<void>;
    getWriter(): WritableStreamDefaultWriter<W>;
}

declare var WritableStream: {
    readonly prototype: WritableStream;
    new<W = any>(underlyingSink?: UnderlyingSink<W>, strategy?: QueuingStrategy<W>): WritableStream<W>;
};

/** This Streams API interface represents a controller allowing control of a WritableStream's state. When constructing a WritableStream, the underlying sink is given a corresponding WritableStreamDefaultController instance to manipulate. */
interface WritableStreamDefaultController {
    error(e?: any): void;
}

declare var WritableStreamDefaultController: {
    readonly prototype: WritableStreamDefaultController;
    new(): WritableStreamDefaultController;
};

/** This Streams API interface is the object returned by WritableStream.getWriter() and once created locks the < writer to the WritableStream ensuring that no other streams can write to the underlying sink. */
interface WritableStreamDefaultWriter<W = any> {
    readonly closed: Promise<undefined>;
    readonly desiredSize: number | null;
    readonly ready: Promise<undefined>;
    abort(reason?: any): Promise<void>;
    close(): Promise<void>;
    releaseLock(): void;
    write(chunk?: W): Promise<void>;
}

declare var WritableStreamDefaultWriter: {
    readonly prototype: WritableStreamDefaultWriter;
    new<W = any>(stream: WritableStream<W>): WritableStreamDefaultWriter<W>;
};

/** An XML document. It inherits from the generic Document and does not add any specific methods or properties to it: nevertheless, several algorithms behave differently with the two types of documents. */
interface XMLDocument extends Document {
    addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: XMLDocument, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: XMLDocument, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var XMLDocument: {
    readonly prototype: XMLDocument;
    new(): XMLDocument;
};

interface XMLHttpRequestEventMap extends XMLHttpRequestEventTargetEventMap {
    "readystatechange": Event;
}

/** Use XMLHttpRequest (XHR) objects to interact with servers. You can retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just part of a page without disrupting what the user is doing. */
interface XMLHttpRequest extends XMLHttpRequestEventTarget {
    onreadystatechange: ((this: XMLHttpRequest, ev: Event) => any) | null;
    /**
     * Returns client's state.
     */
    readonly readyState: number;
    /**
     * Returns the response body.
     */
    readonly response: any;
    /**
     * Returns response as text.
     *
     * Throws an "InvalidStateError" DOMException if responseType is not the empty string or "text".
     */
    readonly responseText: string;
    /**
     * Returns the response type.
     *
     * Can be set to change the response type. Values are: the empty string (default), "arraybuffer", "blob", "document", "json", and "text".
     *
     * When set: setting to "document" is ignored if current global object is not a Window object.
     *
     * When set: throws an "InvalidStateError" DOMException if state is loading or done.
     *
     * When set: throws an "InvalidAccessError" DOMException if the synchronous flag is set and current global object is a Window object.
     */
    responseType: XMLHttpRequestResponseType;
    readonly responseURL: string;
    /**
     * Returns the response as document.
     *
     * Throws an "InvalidStateError" DOMException if responseType is not the empty string or "document".
     */
    readonly responseXML: Document | null;
    readonly status: number;
    readonly statusText: string;
    /**
     * Can be set to a time in milliseconds. When set to a non-zero value will cause fetching to terminate after the given time has passed. When the time has passed, the request has not yet completed, and this's synchronous flag is unset, a timeout event will then be dispatched, or a "TimeoutError" DOMException will be thrown otherwise (for the send() method).
     *
     * When set: throws an "InvalidAccessError" DOMException if the synchronous flag is set and current global object is a Window object.
     */
    timeout: number;
    /**
     * Returns the associated XMLHttpRequestUpload object. It can be used to gather transmission information when data is transferred to a server.
     */
    readonly upload: XMLHttpRequestUpload;
    /**
     * True when credentials are to be included in a cross-origin request. False when they are to be excluded in a cross-origin request and when cookies are to be ignored in its response. Initially false.
     *
     * When set: throws an "InvalidStateError" DOMException if state is not unsent or opened, or if the send() flag is set.
     */
    withCredentials: boolean;
    /**
     * Cancels any network activity.
     */
    abort(): void;
    getAllResponseHeaders(): string;
    getResponseHeader(name: string): string | null;
    /**
     * Sets the request method, request URL, and synchronous flag.
     *
     * Throws a "SyntaxError" DOMException if either method is not a valid method or url cannot be parsed.
     *
     * Throws a "SecurityError" DOMException if method is a case-insensitive match for `CONNECT`, `TRACE`, or `TRACK`.
     *
     * Throws an "InvalidAccessError" DOMException if async is false, current global object is a Window object, and the timeout attribute is not zero or the responseType attribute is not the empty string.
     */
    open(method: string, url: string | URL): void;
    open(method: string, url: string | URL, async: boolean, username?: string | null, password?: string | null): void;
    /**
     * Actúa como si el valor de encabezado `Content-Type` para una respuesta sea mime. 
     * (No cambia el encabezado).
     *
     * Lanza un "InvalidStateError" de Domexception si el estado es loading o se ha hecho.
     */
    overrideMimeType(mime: string): void;
    /**
     * Inicia la solicitud. El argumento del cuerpo proporciona el cuerpo de la solicitud, si lo hay, y se ignora si el método de la solicitud es GET o HEAD.
     *
     * Lanza un "InvalidStateError" de Domexception si no se abre ninguno de los estados o se establece el indicador send().
     */
    send(body?: Document | XMLHttpRequestBodyInit | null): void;
    /**
     * Combines a header in author request headers.
     *
     * Lanza un "InvalidStateError" de Domexception si no se abre ninguno de los estados o se establece el indicador send().
     *
     * Throws a "SyntaxError" DOMException if name is not a header name or if value is not a header value.
     */
    setRequestHeader(name: string, value: string): void;
    readonly DONE: number;
    readonly HEADERS_RECEIVED: number;
    readonly LOADING: number;
    readonly OPENED: number;
    readonly UNSENT: number;
    addEventListener<K extends keyof XMLHttpRequestEventMap>(type: K, listener: (this: XMLHttpRequest, ev: XMLHttpRequestEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof XMLHttpRequestEventMap>(type: K, listener: (this: XMLHttpRequest, ev: XMLHttpRequestEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var XMLHttpRequest: {
    readonly prototype: XMLHttpRequest;
    new(): XMLHttpRequest;
    readonly DONE: number;
    readonly HEADERS_RECEIVED: number;
    readonly LOADING: number;
    readonly OPENED: number;
    readonly UNSENT: number;
};

interface XMLHttpRequestEventTargetEventMap {
    "abort": ProgressEvent<XMLHttpRequestEventTarget>;
    "error": ProgressEvent<XMLHttpRequestEventTarget>;
    "load": ProgressEvent<XMLHttpRequestEventTarget>;
    "loadend": ProgressEvent<XMLHttpRequestEventTarget>;
    "loadstart": ProgressEvent<XMLHttpRequestEventTarget>;
    "progress": ProgressEvent<XMLHttpRequestEventTarget>;
    "timeout": ProgressEvent<XMLHttpRequestEventTarget>;
}

interface XMLHttpRequestEventTarget extends EventTarget {
    onabort: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    onerror: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    onload: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    onloadend: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    onloadstart: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    onprogress: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    ontimeout: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    addEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestEventTarget, ev: XMLHttpRequestEventTargetEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestEventTarget, ev: XMLHttpRequestEventTargetEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var XMLHttpRequestEventTarget: {
    readonly prototype: XMLHttpRequestEventTarget;
    new(): XMLHttpRequestEventTarget;
};

interface XMLHttpRequestUpload extends XMLHttpRequestEventTarget {
    addEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestUpload, ev: XMLHttpRequestEventTargetEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestUpload, ev: XMLHttpRequestEventTargetEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
}

declare var XMLHttpRequestUpload: {
    readonly prototype: XMLHttpRequestUpload;
    new(): XMLHttpRequestUpload;
};

/** Provides the serializeToString() method to construct an XML string representing a DOM tree. */
interface XMLSerializer {
    serializeToString(root: Node): string;
}

declare var XMLSerializer: {
    readonly prototype: XMLSerializer;
    new(): XMLSerializer;
};

/** The XPathEvaluator interface allows to compile and evaluate XPath expressions. */
interface XPathEvaluator extends XPathEvaluatorBase {
}

declare var XPathEvaluator: {
    readonly prototype: XPathEvaluator;
    new(): XPathEvaluator;
};

interface XPathEvaluatorBase {
    createExpression(expression: string, resolver?: XPathNSResolver | null): XPathExpression;
    createNSResolver(nodeResolver: Node): XPathNSResolver;
    evaluate(expression: string, contextNode: Node, resolver?: XPathNSResolver | null, type?: number, result?: XPathResult | null): XPathResult;
}

/** This interface is a compiled XPath expression that can be evaluated on a document or specific node to return information its DOM tree. */
interface XPathExpression {
    evaluate(contextNode: Node, type?: number, result?: XPathResult | null): XPathResult;
}

declare var XPathExpression: {
    readonly prototype: XPathExpression;
    new(): XPathExpression;
};

/** The results generated by evaluating an XPath expression within the context of a given node. */
interface XPathResult {
    readonly booleanValue: boolean;
    readonly invalidIteratorState: boolean;
    readonly numberValue: number;
    readonly resultType: number;
    readonly singleNodeValue: Node | null;
    readonly snapshotLength: number;
    readonly stringValue: string;
    iterateNext(): Node | null;
    snapshotItem(index: number): Node | null;
    readonly ANY_TYPE: number;
    readonly ANY_UNORDERED_NODE_TYPE: number;
    readonly BOOLEAN_TYPE: number;
    readonly FIRST_ORDERED_NODE_TYPE: number;
    readonly NUMBER_TYPE: number;
    readonly ORDERED_NODE_ITERATOR_TYPE: number;
    readonly ORDERED_NODE_SNAPSHOT_TYPE: number;
    readonly STRING_TYPE: number;
    readonly UNORDERED_NODE_ITERATOR_TYPE: number;
    readonly UNORDERED_NODE_SNAPSHOT_TYPE: number;
}

declare var XPathResult: {
    readonly prototype: XPathResult;
    new(): XPathResult;
    readonly ANY_TYPE: number;
    readonly ANY_UNORDERED_NODE_TYPE: number;
    readonly BOOLEAN_TYPE: number;
    readonly FIRST_ORDERED_NODE_TYPE: number;
    readonly NUMBER_TYPE: number;
    readonly ORDERED_NODE_ITERATOR_TYPE: number;
    readonly ORDERED_NODE_SNAPSHOT_TYPE: number;
    readonly STRING_TYPE: number;
    readonly UNORDERED_NODE_ITERATOR_TYPE: number;
    readonly UNORDERED_NODE_SNAPSHOT_TYPE: number;
};

/** An XSLTProcessor applies an XSLT stylesheet transformation to an XML document to produce a new XML document as output. It has methods to load the XSLT stylesheet, to manipulate <xsl:param> parameter values, and to apply the transformation to documents. */
interface XSLTProcessor {
    clearParameters(): void;
    getParameter(namespaceURI: string | null, localName: string): any;
    importStylesheet(style: Node): void;
    removeParameter(namespaceURI: string | null, localName: string): void;
    reiniciar(): void;
    setParameter(namespaceURI: string | null, localName: string, value: any): void;
    transformToDocument(source: Node): Document;
    transformToFragment(source: Node, output: Document): DocumentFragment;
}

declare var XSLTProcessor: {
    readonly prototype: XSLTProcessor;
    new(): XSLTProcessor;
};

interface Console {
    assert(condition?: boolean, ...data: any[]): void;
    clear(): void;
    count(label?: string): void;
    countReset(label?: string): void;
    debug(...data: any[]): void;
    dir(item?: any, options?: any): void;
    dirxml(...data: any[]): void;
    error(...data: any[]): void;
    group(...data: any[]): void;
    groupCollapsed(...data: any[]): void;
    groupEnd(): void;
    info(...data: any[]): void;
    log(...data: any[]): void;
    table(tabularData?: any, properties?: string[]): void;
    time(label?: string): void;
    timeEnd(label?: string): void;
    timeLog(label?: string, ...data: any[]): void;
    timeStamp(label?: string): void;
    trace(...data: any[]): void;
    warn(...data: any[]): void;
}

declare var console: Console;

/** Holds useful CSS-related methods. No object with this interface are implemented: it contains only static methods and therefore is a utilitarian interface. */
declare namespace CSS {
    function escape(ident: string): string;
    function supports(property: string, value: string): boolean;
    function supports(conditionText: string): boolean;
}

declare namespace WebAssembly {
    interface CompileError extends Error {
    }

    var CompileError: {
        readonly prototype: CompileError;
        new(): CompileError;
    };

    interface Global {
        value: any;
        valueOf(): any;
    }

    var Global: {
        readonly prototype: Global;
        new(descriptor: GlobalDescriptor, v?: any): Global;
    };

    interface Instance {
        readonly exports: Exports;
    }

    var Instance: {
        readonly prototype: Instance;
        new(module: Module, importObject?: Imports): Instance;
    };

    interface LinkError extends Error {
    }

    var LinkError: {
        readonly prototype: LinkError;
        new(): LinkError;
    };

    interface Memory {
        readonly buffer: ArrayBuffer;
        grow(delta: number): number;
    }

    var Memory: {
        readonly prototype: Memory;
        new(descriptor: MemoryDescriptor): Memory;
    };

    interface Module {
    }

    var Module: {
        readonly prototype: Module;
        new(bytes: BufferSource): Module;
        customSections(moduleObject: Module, sectionName: string): ArrayBuffer[];
        exports(moduleObject: Module): ModuleExportDescriptor[];
        imports(moduleObject: Module): ModuleImportDescriptor[];
    };

    interface RuntimeError extends Error {
    }

    var RuntimeError: {
        readonly prototype: RuntimeError;
        new(): RuntimeError;
    };

    interface Table {
        readonly length: number;
        get(index: number): any;
        grow(delta: number, value?: any): number;
        set(index: number, value?: any): void;
    }

    var Table: {
        readonly prototype: Table;
        new(descriptor: TableDescriptor, value?: any): Table;
    };

    interface GlobalDescriptor {
        mutable?: boolean;
        value: ValueType;
    }

    interface MemoryDescriptor {
        initial: number;
        maximum?: number;
        shared?: boolean;
    }

    interface ModuleExportDescriptor {
        kind: ImportExportKind;
        name: string;
    }

    interface ModuleImportDescriptor {
        kind: ImportExportKind;
        module: string;
        name: string;
    }

    interface TableDescriptor {
        element: TableKind;
        initial: number;
        maximum?: number;
    }

    interface WebAssemblyInstantiatedSource {
        instance: Instance;
        module: Module;
    }

    type ImportExportKind = "function" | "global" | "memory" | "table";
    type TableKind = "anyfunc" | "externref";
    type ValueType = "anyfunc" | "externref" | "f32" | "f64" | "i32" | "i64";
    type ExportValue = Function | Global | Memory | Table;
    type Exports = Record<string, ExportValue>;
    type ImportValue = ExportValue | number;
    type Imports = Record<string, ModuleImports>;
    type ModuleImports = Record<string, ImportValue>;
    function compile(bytes: BufferSource): Promise<Module>;
    function compileStreaming(source: Response | PromiseLike<Response>): Promise<Module>;
    function instantiate(bytes: BufferSource, importObject?: Imports): Promise<WebAssemblyInstantiatedSource>;
    function instantiate(moduleObject: Module, importObject?: Imports): Promise<Instance>;
    function instantiateStreaming(source: Response | PromiseLike<Response>, importObject?: Imports): Promise<WebAssemblyInstantiatedSource>;
    function validate(bytes: BufferSource): boolean;
}

interface BlobCallback {
    (blob: Blob | null): void;
}

interface CustomElementConstructor {
    new (...params: any[]): HTMLElement;
}

interface DecodeErrorCallback {
    (error: DOMException): void;
}

interface DecodeSuccessCallback {
    (decodedData: AudioBuffer): void;
}

interface ErrorCallback {
    (err: DOMException): void;
}

interface FileCallback {
    (file: File): void;
}

interface FileSystemEntriesCallback {
    (entries: FileSystemEntry[]): void;
}

interface FileSystemEntryCallback {
    (entry: FileSystemEntry): void;
}

interface FrameRequestCallback {
    (time: DOMHighResTimeStamp): void;
}

interface FunctionStringCallback {
    (data: string): void;
}

interface IdleRequestCallback {
    (deadline: IdleDeadline): void;
}

interface IntersectionObserverCallback {
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver): void;
}

interface MediaSessionActionHandler {
    (details: MediaSessionActionDetails): void;
}

interface MutationCallback {
    (mutations: MutationRecord[], observer: MutationObserver): void;
}

interface NotificationPermissionCallback {
    (permission: NotificationPermission): void;
}

interface OnBeforeUnloadEventHandlerNonNull {
    (event: Event): string | null;
}

interface OnErrorEventHandlerNonNull {
    (event: Event | string, source?: string, lineno?: number, colno?: number, error?: Error): any;
}

interface PerformanceObserverCallback {
    (entries: PerformanceObserverEntryList, observer: PerformanceObserver): void;
}

interface PositionCallback {
    (position: GeolocationPosition): void;
}

interface PositionErrorCallback {
    (positionError: GeolocationPositionError): void;
}

interface QueuingStrategySize<T = any> {
    (chunk?: T): number;
}

interface RTCPeerConnectionErrorCallback {
    (error: DOMException): void;
}

interface RTCSessionDescriptionCallback {
    (description: RTCSessionDescriptionInit): void;
}

interface RemotePlaybackAvailabilityCallback {
    (available: boolean): void;
}

interface ResizeObserverCallback {
    (entries: ResizeObserverEntry[], observer: ResizeObserver): void;
}

interface TransformerFlushCallback<O> {
    (controller: TransformStreamDefaultController<O>): void | PromiseLike<void>;
}

interface TransformerStartCallback<O> {
    (controller: TransformStreamDefaultController<O>): any;
}

interface TransformerTransformCallback<I, O> {
    (chunk: I, controller: TransformStreamDefaultController<O>): void | PromiseLike<void>;
}

interface UnderlyingSinkAbortCallback {
    (reason?: any): void | PromiseLike<void>;
}

interface UnderlyingSinkCloseCallback {
    (): void | PromiseLike<void>;
}

interface UnderlyingSinkStartCallback {
    (controller: WritableStreamDefaultController): any;
}

interface UnderlyingSinkWriteCallback<W> {
    (chunk: W, controller: WritableStreamDefaultController): void | PromiseLike<void>;
}

interface UnderlyingSourceCancelCallback {
    (reason?: any): void | PromiseLike<void>;
}

interface UnderlyingSourcePullCallback<R> {
    (controller: ReadableStreamController<R>): void | PromiseLike<void>;
}

interface UnderlyingSourceStartCallback<R> {
    (controller: ReadableStreamController<R>): any;
}

interface VoidFunction {
    (): void;
}

interface HTMLElementTagNameMap {
    "a": HTMLAnchorElement;
    "abbr": HTMLElement;
    "address": HTMLElement;
    "area": HTMLAreaElement;
    "article": HTMLElement;
    "aside": HTMLElement;
    "audio": HTMLAudioElement;
    "b": HTMLElement;
    "base": HTMLBaseElement;
    "bdi": HTMLElement;
    "bdo": HTMLElement;
    "blockquote": HTMLQuoteElement;
    "body": HTMLBodyElement;
    "br": HTMLBRElement;
    "button": HTMLButtonElement;
    "canvas": HTMLCanvasElement;
    "caption": HTMLTableCaptionElement;
    "cite": HTMLElement;
    "code": HTMLElement;
    "col": HTMLTableColElement;
    "colgroup": HTMLTableColElement;
    "data": HTMLDataElement;
    "datalist": HTMLDataListElement;
    "dd": HTMLElement;
    "del": HTMLModElement;
    "details": HTMLDetailsElement;
    "dfn": HTMLElement;
    "dir": HTMLDirectoryElement;
    "div": HTMLDivElement;
    "dl": HTMLDListElement;
    "dt": HTMLElement;
    "em": HTMLElement;
    "embed": HTMLEmbedElement;
    "fieldset": HTMLFieldSetElement;
    "figcaption": HTMLElement;
    "figure": HTMLElement;
    "font": HTMLFontElement;
    "footer": HTMLElement;
    "form": HTMLFormElement;
    "frame": HTMLFrameElement;
    "frameset": HTMLFrameSetElement;
    "h1": HTMLHeadingElement;
    "h2": HTMLHeadingElement;
    "h3": HTMLHeadingElement;
    "h4": HTMLHeadingElement;
    "h5": HTMLHeadingElement;
    "h6": HTMLHeadingElement;
    "head": HTMLHeadElement;
    "header": HTMLElement;
    "hgroup": HTMLElement;
    "hr": HTMLHRElement;
    "html": HTMLHtmlElement;
    "i": HTMLElement;
    "iframe": HTMLIFrameElement;
    "img": HTMLImageElement;
    "input": HTMLInputElement;
    "ins": HTMLModElement;
    "kbd": HTMLElement;
    "label": HTMLLabelElement;
    "legend": HTMLLegendElement;
    "li": HTMLLIElement;
    "link": HTMLLinkElement;
    "principal": HTMLElement;
    "map": HTMLMapElement;
    "mark": HTMLElement;
    "marquee": HTMLMarqueeElement;
    "menu": HTMLMenuElement;
    "meta": HTMLMetaElement;
    "meter": HTMLMeterElement;
    "nav": HTMLElement;
    "noscript": HTMLElement;
    "object": HTMLObjectElement;
    "ol": HTMLOListElement;
    "optgroup": HTMLOptGroupElement;
    "option": HTMLOptionElement;
    "output": HTMLOutputElement;
    "p": HTMLParagraphElement;
    "param": HTMLParamElement;
    "picture": HTMLPictureElement;
    "pre": HTMLPreElement;
    "progress": HTMLProgressElement;
    "q": HTMLQuoteElement;
    "rp": HTMLElement;
    "rt": HTMLElement;
    "ruby": HTMLElement;
    "s": HTMLElement;
    "samp": HTMLElement;
    "script": HTMLScriptElement;
    "section": HTMLElement;
    "select": HTMLSelectElement;
    "slot": HTMLSlotElement;
    "small": HTMLElement;
    "source": HTMLSourceElement;
    "span": HTMLSpanElement;
    "strong": HTMLElement;
    "style": HTMLStyleElement;
    "sub": HTMLElement;
    "summary": HTMLElement;
    "sup": HTMLElement;
    "table": HTMLTableElement;
    "tbody": HTMLTableSectionElement;
    "td": HTMLTableCellElement;
    "template": HTMLTemplateElement;
    "textarea": HTMLTextAreaElement;
    "tfoot": HTMLTableSectionElement;
    "th": HTMLTableCellElement;
    "thead": HTMLTableSectionElement;
    "time": HTMLTimeElement;
    "title": HTMLTitleElement;
    "tr": HTMLTableRowElement;
    "track": HTMLTrackElement;
    "u": HTMLElement;
    "ul": HTMLUListElement;
    "var": HTMLElement;
    "video": HTMLVideoElement;
    "wbr": HTMLElement;
}

interface HTMLElementDeprecatedTagNameMap {
    "listing": HTMLPreElement;
    "xmp": HTMLPreElement;
}

interface SVGElementTagNameMap {
    "a": SVGAElement;
    "animate": SVGAnimateElement;
    "animateMotion": SVGAnimateMotionElement;
    "animateTransform": SVGAnimateTransformElement;
    "circle": SVGCircleElement;
    "clipPath": SVGClipPathElement;
    "defs": SVGDefsElement;
    "desc": SVGDescElement;
    "ellipse": SVGEllipseElement;
    "feBlend": SVGFEBlendElement;
    "feColorMatrix": SVGFEColorMatrixElement;
    "feComponentTransfer": SVGFEComponentTransferElement;
    "feComposite": SVGFECompositeElement;
    "feConvolveMatrix": SVGFEConvolveMatrixElement;
    "feDiffuseLighting": SVGFEDiffuseLightingElement;
    "feDisplacementMap": SVGFEDisplacementMapElement;
    "feDistantLight": SVGFEDistantLightElement;
    "feDropShadow": SVGFEDropShadowElement;
    "feFlood": SVGFEFloodElement;
    "feFuncA": SVGFEFuncAElement;
    "feFuncB": SVGFEFuncBElement;
    "feFuncG": SVGFEFuncGElement;
    "feFuncR": SVGFEFuncRElement;
    "feGaussianBlur": SVGFEGaussianBlurElement;
    "feImage": SVGFEImageElement;
    "feMerge": SVGFEMergeElement;
    "feMergeNode": SVGFEMergeNodeElement;
    "feMorphology": SVGFEMorphologyElement;
    "feOffset": SVGFEOffsetElement;
    "fePointLight": SVGFEPointLightElement;
    "feSpecularLighting": SVGFESpecularLightingElement;
    "feSpotLight": SVGFESpotLightElement;
    "feTile": SVGFETileElement;
    "feTurbulence": SVGFETurbulenceElement;
    "filter": SVGFilterElement;
    "foreignObject": SVGForeignObjectElement;
    "g": SVGGElement;
    "image": SVGImageElement;
    "line": SVGLineElement;
    "linearGradient": SVGLinearGradientElement;
    "marker": SVGMarkerElement;
    "mask": SVGMaskElement;
    "metadata": SVGMetadataElement;
    "mpath": SVGMPathElement;
    "path": SVGPathElement;
    "pattern": SVGPatternElement;
    "polygon": SVGPolygonElement;
    "polyline": SVGPolylineElement;
    "radialGradient": SVGRadialGradientElement;
    "rect": SVGRectElement;
    "script": SVGScriptElement;
    "set": SVGSetElement;
    "stop": SVGStopElement;
    "style": SVGStyleElement;
    "svg": SVGSVGElement;
    "switch": SVGSwitchElement;
    "symbol": SVGSymbolElement;
    "text": SVGTextElement;
    "textPath": SVGTextPathElement;
    "title": SVGTitleElement;
    "tspan": SVGTSpanElement;
    "use": SVGUseElement;
    "view": SVGViewElement;
}

/** @deprecated Directly use HTMLElementTagNameMap or SVGElementTagNameMap as appropriate, instead. */
type ElementTagNameMap = HTMLElementTagNameMap & Pick<SVGElementTagNameMap, Exclude<keyof SVGElementTagNameMap, keyof HTMLElementTagNameMap>>;

declare var Audio: {
    new(src?: string): HTMLAudioElement;
};
declare var Image: {
    new(width?: number, height?: number): HTMLImageElement;
};
declare var Option: {
    new(text?: string, value?: string, defaultSelected?: boolean, selected?: boolean): HTMLOptionElement;
};
declare var HTMLDocument: Document;
/**
 * Returns true if the window has been closed, false otherwise.
 */
declare var closed: boolean;
/**
 * Defines a new custom element, mapping the given name to the given constructor as an autonomous custom element.
 */
declare var customElements: CustomElementRegistry;
declare var devicePixelRatio: number;
declare var document: Document;
/** @deprecated */
declare var event: Event | undefined;
/** @deprecated */
declare var external: External;
declare var frameElement: Element | null;
declare var frames: WindowProxy;
declare var history: History;
declare var innerHeight: number;
declare var innerWidth: number;
declare var length: number;
declare var location: Location;
/**
 * Returns true if the location bar is visible; otherwise, returns false.
 */
declare var locationbar: BarProp;
/**
 * Returns true if the menu bar is visible; otherwise, returns false.
 */
declare var menubar: BarProp;
/** @deprecated */
declare const name: void;
declare var navigator: Navigator;
declare var ondevicemotion: ((this: Window, ev: DeviceMotionEvent) => any) | null;
declare var ondeviceorientation: ((this: Window, ev: DeviceOrientationEvent) => any) | null;
/** @deprecated */
declare var onorientationchange: ((this: Window, ev: Event) => any) | null;
declare var opener: any;
/** @deprecated */
declare var orientation: number;
declare var outerHeight: number;
declare var outerWidth: number;
declare var pageXOffset: number;
declare var pageYOffset: number;
declare var parent: WindowProxy | null;
/**
 * Returns true if the personal bar is visible; otherwise, returns false.
 */
declare var personalbar: BarProp;
declare var screen: Screen;
declare var screenLeft: number;
declare var screenTop: number;
declare var screenX: number;
declare var screenY: number;
declare var scrollX: number;
declare var scrollY: number;
/**
 * Returns true if the scrollbars are visible; otherwise, returns false.
 */
declare var scrollbars: BarProp;
declare var self: Window & typeof globalThis;
declare var speechSynthesis: SpeechSynthesis;
/** @deprecated */
declare var status: string;
/**
 * Returns true if the status bar is visible; otherwise, returns false.
 */
declare var statusbar: BarProp;
/**
 * Returns true if the toolbar is visible; otherwise, returns false.
 */
declare var toolbar: BarProp;
declare var top: WindowProxy | null;
declare var visualViewport: VisualViewport;
declare var window: Window & typeof globalThis;
declare function alert(message?: any): void;
declare function blur(): void;
declare function cancelIdleCallback(handle: number): void;
/** @deprecated */
declare function captureEvents(): void;
/**
 * Closes the window.
 */
declare function close(): void;
declare function confirm(message?: string): boolean;
/**
 * Moves the focus to the window's browsing context, if any.
 */
declare function focus(): void;
declare function getComputedStyle(elt: Element, pseudoElt?: string | null): CSSStyleDeclaration;
declare function getSelection(): Selection | null;
declare function matchMedia(query: string): MediaQueryList;
declare function moveBy(x: number, y: number): void;
declare function moveTo(x: number, y: number): void;
declare function open(url?: string | URL, target?: string, features?: string): WindowProxy | null;
/**
 * Posts a message to the given window. Messages can be structured objects, e.g. nested objects and arrays, can contain JavaScript values (strings, numbers, Date objects, etc), and can contain certain data objects such as File Blob, FileList, and ArrayBuffer objects.
 *
 * Objects listed in the transfer member of options are transferred, not just cloned, meaning that they are no longer usable on the sending side.
 *
 * A target origin can be specified using the targetOrigin member of options. If not provided, it defaults to "/". This default restricts the message to same-origin targets only.
 *
 * If the origin of the target window doesn't match the given target origin, the message is discarded, to avoid information leakage. To send the message to the target regardless of origin, set the target origin to "*".
 *
 * Throws a "DataCloneError" DOMException if transfer array contains duplicate objects or if message could not be cloned.
 */
declare function postMessage(message: any, targetOrigin: string, transfer?: Transferable[]): void;
declare function postMessage(message: any, options?: WindowPostMessageOptions): void;
declare function print(): void;
declare function prompt(message?: string, _default?: string): string | null;
/** @deprecated */
declare function releaseEvents(): void;
declare function requestIdleCallback(callback: IdleRequestCallback, options?: IdleRequestOptions): number;
declare function resizeBy(x: number, y: number): void;
declare function resizeTo(width: number, height: number): void;
declare function scroll(options?: ScrollToOptions): void;
declare function scroll(x: number, y: number): void;
declare function scrollBy(options?: ScrollToOptions): void;
declare function scrollBy(x: number, y: number): void;
declare function scrollTo(options?: ScrollToOptions): void;
declare function scrollTo(x: number, y: number): void;
/**
 * Cancels the document load.
 */
declare function stop(): void;
declare function toString(): string;
/**
 * Envía un evento de evento sintético al destino y devuelve true si el valor del atributo cancelable de cualquiera de los eventos es false o si no se invocó a su método preventDefault(), y false en caso contrario.
 */
declare function dispatchEvent(event: Event): boolean;
declare function cancelAnimationFrame(handle: number): void;
declare function requestAnimationFrame(callback: FrameRequestCallback): number;
/**
 * Se dispara cuando el usuario aborta la descarga.
 * @param ev El evento.
 */
declare var onabort: ((this: Window, ev: UIEvent) => any) | null;
declare var onanimationcancel: ((this: Window, ev: AnimationEvent) => any) | null;
declare var onanimationend: ((this: Window, ev: AnimationEvent) => any) | null;
declare var onanimationiteration: ((this: Window, ev: AnimationEvent) => any) | null;
declare var onanimationstart: ((this: Window, ev: AnimationEvent) => any) | null;
declare var onauxclick: ((this: Window, ev: MouseEvent) => any) | null;
/**
 * Se dispara cuando el objeto pierde el foco de entrada.
 * @param ev El evento focus.
 */
declare var onblur: ((this: Window, ev: FocusEvent) => any) | null;
/**
 * Ocurre cuando la reproducción es posible, pero requeriría más almacenamiento en búfer.
 * @param ev El evento.
 */
declare var oncanplay: ((this: Window, ev: Event) => any) | null;
declare var oncanplaythrough: ((this: Window, ev: Event) => any) | null;
/**
 * Se activa cuando el contenido del objeto o la selección ha cambiado.
 * @param ev El evento.
 */
declare var onchange: ((this: Window, ev: Event) => any) | null;
/**
 * Se dispara cuando el usuario hace clic con el botón izquierdo del mouse en el objeto
 * @param ev El evento del mouse.
 */
declare var onclick: ((this: Window, ev: MouseEvent) => any) | null;
declare var onclose: ((this: Window, ev: Event) => any) | null;
/**
 * Se dispara cuando el usuario hace clic con el botón derecho del mouse en el área del cliente, abriendo el menú contextual.
 * @param ev El evento del mouse.
 */
declare var oncontextmenu: ((this: Window, ev: MouseEvent) => any) | null;
declare var oncuechange: ((this: Window, ev: Event) => any) | null;
/**
 * Se activa cuando el usuario hace doble clic en el objeto.
 * @param ev El evento del mouse.
 */
declare var ondblclick: ((this: Window, ev: MouseEvent) => any) | null;
/**
 * Se dispara en el objeto fuente de forma continua durante una operación de arrastre.
 * @param ev El evento.
 */
declare var ondrag: ((this: Window, ev: DragEvent) => any) | null;
/**
 * Se activa en el objeto fuente cuando el usuario suelta el mouse al finalizar una operación de arrastre.
 * @param ev El evento.
 */
declare var ondragend: ((this: Window, ev: DragEvent) => any) | null;
/**
 * Se activa en el elemento destino cuando el usuario arrastra el objeto a un destino de colocación válido.
 * @param ev El evento drag.
 */
declare var ondragenter: ((this: Window, ev: DragEvent) => any) | null;
/**
 * Se activa en el objeto destino cuando el usuario mueve el mouse fuera de un destino de colocación válido durante una operación de arrastre.
 * @param ev El evento drag.
 */
declare var ondragleave: ((this: Window, ev: DragEvent) => any) | null;
/**
 * Se dispara continuamente en el elemento destino mientras el usuario arrastra el objeto sobre un destino de colocación válido.
 * @param ev El evento.
 */
declare var ondragover: ((this: Window, ev: DragEvent) => any) | null;
/**
 * Se activa en el objeto fuente cuando el usuario comienza a arrastrar una selección de texto o un objeto seleccionado.
 * @param ev El evento.
 */
declare var ondragstart: ((this: Window, ev: DragEvent) => any) | null;
declare var ondrop: ((this: Window, ev: DragEvent) => any) | null;
/**
 * Ocurre cuando se actualiza el atributo duration.
 * @param ev El evento.
 */
declare var ondurationchange: ((this: Window, ev: Event) => any) | null;
/**
 * Ocurre cuando el elemento multimedia se restablece a su estado inicial.
 * @param ev El evento.
 */
declare var onemptied: ((this: Window, ev: Event) => any) | null;
/**
 * Ocurre cuando se llega al final de la reproducción.
 * @param ev El evento
 */
declare var onended: ((this: Window, ev: Event) => any) | null;
/**
 * Se activa cuando se produce un error durante la carga del objeto.
 * @param ev El evento.
 */
declare var onerror: OnErrorEventHandler;
/**
 * Se dispara cuando el objeto recibe el foco.
 * @param ev El evento.
 */
declare var onfocus: ((this: Window, ev: FocusEvent) => any) | null;
declare var onformdata: ((this: Window, ev: FormDataEvent) => any) | null;
declare var ongotpointercapture: ((this: Window, ev: PointerEvent) => any) | null;
declare var oninput: ((this: Window, ev: Event) => any) | null;
declare var oninvalid: ((this: Window, ev: Event) => any) | null;
/**
 * Se dispara cuando el usuario presiona una tecla.
 * @param ev El evento del teclado
 */
declare var onkeydown: ((this: Window, ev: KeyboardEvent) => any) | null;
/**
 * Se activa cuando el usuario pulsa una tecla alfanumérica.
 * @param ev El evento.
 */
/** @deprecated */
declare var onkeypress: ((this: Window, ev: KeyboardEvent) => any) | null;
/**
 * Se dispara cuando el usuario suelta una tecla.
 * @param ev El evento del teclado
 */
declare var onkeyup: ((this: Window, ev: KeyboardEvent) => any) | null;
/**
 * Se activa inmediatamente después de que el navegador carga el objeto.
 * @param ev El evento.
 */
declare var onload: ((this: Window, ev: Event) => any) | null;
/**
 * Ocurre cuando los datos multimedia se cargan en la posición de reproducción actual.
 * @param ev El evento.
 */
declare var onloadeddata: ((this: Window, ev: Event) => any) | null;
/**
 * Ocurre cuando se han determinado la duración y las dimensiones del medio.
 * @param ev El evento.
 */
declare var onloadedmetadata: ((this: Window, ev: Event) => any) | null;
/**
 * Ocurre cuando Internet Explorer comienza a buscar datos multimedia.
 * @param ev El evento.
 */
declare var onloadstart: ((this: Window, ev: Event) => any) | null;
declare var onlostpointercapture: ((this: Window, ev: PointerEvent) => any) | null;
/**
 * Se activa cuando el usuario hace clic en el objeto con cualquiera de los botones del mouse.
 * @param ev El evento del mouse.
 */
declare var onmousedown: ((this: Window, ev: MouseEvent) => any) | null;
declare var onmouseenter: ((this: Window, ev: MouseEvent) => any) | null;
declare var onmouseleave: ((this: Window, ev: MouseEvent) => any) | null;
/**
 * Se dispara cuando el usuario mueve el mouse sobre el objeto.
 * @param ev El evento del mouse.
 */
declare var onmousemove: ((this: Window, ev: MouseEvent) => any) | null;
/**
 * Se activa cuando el usuario mueve el puntero del mouse fuera de los límites del objeto.
 * @param ev El evento del mouse.
 */
declare var onmouseout: ((this: Window, ev: MouseEvent) => any) | null;
/**
 * Se activa cuando el usuario mueve el puntero del mouse hacia el objeto.
 * @param ev El evento del mouse.
 */
declare var onmouseover: ((this: Window, ev: MouseEvent) => any) | null;
/**
 * Se activa cuando el usuario suelta un botón del mouse mientras el mouse está sobre el objeto.
 * @param ev El evento del mouse.
 */
declare var onmouseup: ((this: Window, ev: MouseEvent) => any) | null;
/**
 * Ocurre cuando la reproducción está en pausa.
 * @param ev El evento.
 */
declare var onpause: ((this: Window, ev: Event) => any) | null;
/**
 * Ocurre cuando se solicita el método de reproducción.
 * @param ev El evento.
 */
declare var onplay: ((this: Window, ev: Event) => any) | null;
/**
 * Ocurre cuando el audio o video se ha comenzado a reproducir.
 * @param ev El evento.
 */
declare var onplaying: ((this: Window, ev: Event) => any) | null;
declare var onpointercancel: ((this: Window, ev: PointerEvent) => any) | null;
declare var onpointerdown: ((this: Window, ev: PointerEvent) => any) | null;
declare var onpointerenter: ((this: Window, ev: PointerEvent) => any) | null;
declare var onpointerleave: ((this: Window, ev: PointerEvent) => any) | null;
declare var onpointermove: ((this: Window, ev: PointerEvent) => any) | null;
declare var onpointerout: ((this: Window, ev: PointerEvent) => any) | null;
declare var onpointerover: ((this: Window, ev: PointerEvent) => any) | null;
declare var onpointerup: ((this: Window, ev: PointerEvent) => any) | null;
/**
 * Ocurre para indicar el progreso durante la descarga de datos multimedia.
 * @param ev El evento.
 */
declare var onprogress: ((this: Window, ev: ProgressEvent) => any) | null;
/**
 * Ocurre cuando la velocidad de reproducción aumenta o disminuye.
 * @param ev El evento.
 */
declare var onratechange: ((this: Window, ev: Event) => any) | null;
/**
 * Se activa cuando el usuario restablece un formulario.
 * @param ev El evento.
 */
declare var onreset: ((this: Window, ev: Event) => any) | null;
declare var onresize: ((this: Window, ev: UIEvent) => any) | null;
/**
 * Se activa cuando el usuario cambia la posición del cuadro de desplazamiento en la barra de desplazamiento del objeto.
 * @param ev El evento.
 */
declare var onscroll: ((this: Window, ev: Event) => any) | null;
/**
 * Se produce cuando finaliza la operación de búsqueda.
 * @param ev El evento.
 */
declare var onseeked: ((this: Window, ev: Event) => any) | null;
/**
 * Se produce cuando se mueve la posición de reproducción actual.
 * @param ev El evento.
 */
declare var onseeking: ((this: Window, ev: Event) => any) | null;
/**
 * Se dispara cuando cambia la selección actual.
 * @param ev El evento.
 */
declare var onselect: ((this: Window, ev: Event) => any) | null;
declare var onselectionchange: ((this: Window, ev: Event) => any) | null;
declare var onselectstart: ((this: Window, ev: Event) => any) | null;
/**
 * Ocurre cuando la descarga se ha detenido.
 * @param ev El evento.
 */
declare var onstalled: ((this: Window, ev: Event) => any) | null;
declare var onsubmit: ((this: Window, ev: Event) => any) | null;
/**
 * Ocurre si la operación de carga se detuvo intencionalmente.
 * @param ev El evento.
 */
declare var onsuspend: ((this: Window, ev: Event) => any) | null;
/**
 * Se produce para indicar la posición de reproducción actual.
 * @param ev El evento.
 */
declare var ontimeupdate: ((this: Window, ev: Event) => any) | null;
declare var ontoggle: ((this: Window, ev: Event) => any) | null;
declare var ontouchcancel: ((this: Window, ev: TouchEvent) => any) | null | undefined;
declare var ontouchend: ((this: Window, ev: TouchEvent) => any) | null | undefined;
declare var ontouchmove: ((this: Window, ev: TouchEvent) => any) | null | undefined;
declare var ontouchstart: ((this: Window, ev: TouchEvent) => any) | null | undefined;
declare var ontransitioncancel: ((this: Window, ev: TransitionEvent) => any) | null;
declare var ontransitionend: ((this: Window, ev: TransitionEvent) => any) | null;
declare var ontransitionrun: ((this: Window, ev: TransitionEvent) => any) | null;
declare var ontransitionstart: ((this: Window, ev: TransitionEvent) => any) | null;
/**
 * Ocurre cuando se cambia el volumen o se silencia o activa la reproducción.
 * @param ev El evento.
 */
declare var onvolumechange: ((this: Window, ev: Event) => any) | null;
/**
 * Ocurre cuando la reproducción se detiene porque el siguiente cuadro de un recurso de video no está disponible.
 * @param ev El evento.
 */
declare var onwaiting: ((this: Window, ev: Event) => any) | null;
declare var onwebkitanimationend: ((this: Window, ev: Event) => any) | null;
declare var onwebkitanimationiteration: ((this: Window, ev: Event) => any) | null;
declare var onwebkitanimationstart: ((this: Window, ev: Event) => any) | null;
declare var onwebkittransitionend: ((this: Window, ev: Event) => any) | null;
declare var onwheel: ((this: Window, ev: WheelEvent) => any) | null;
declare var onafterprint: ((this: Window, ev: Event) => any) | null;
declare var onbeforeprint: ((this: Window, ev: Event) => any) | null;
declare var onbeforeunload: ((this: Window, ev: BeforeUnloadEvent) => any) | null;
declare var ongamepadconnected: ((this: Window, ev: Event) => any) | null;
declare var ongamepaddisconnected: ((this: Window, ev: Event) => any) | null;
declare var onhashchange: ((this: Window, ev: Event) => any) | null;
declare var onlanguagechange: ((this: Window, ev: Event) => any) | null;
declare var onmessage: ((this: Window, ev: MessageEvent) => any) | null;
declare var onmessageerror: ((this: Window, ev: MessageEvent) => any) | null;
declare var onoffline: ((this: Window, ev: Event) => any) | null;
declare var ononline: ((this: Window, ev: Event) => any) | null;
declare var onpagehide: ((this: Window, ev: PageTransitionEvent) => any) | null;
declare var onpageshow: ((this: Window, ev: PageTransitionEvent) => any) | null;
declare var onpopstate: ((this: Window, ev: PopStateEvent) => any) | null;
declare var onrejectionhandled: ((this: Window, ev: PromiseRejectionEvent) => any) | null;
declare var onstorage: ((this: Window, ev: StorageEvent) => any) | null;
declare var onunhandledrejection: ((this: Window, ev: PromiseRejectionEvent) => any) | null;
declare var onunload: ((this: Window, ev: Event) => any) | null;
declare var localStorage: Storage;
declare var caches: CacheStorage;
declare var crossOriginIsolated: boolean;
declare var crypto: Crypto;
declare var indexedDB: IDBFactory;
declare var isSecureContext: boolean;
declare var origin: string;
declare var performance: Performance;
declare function atob(data: string): string;
declare function btoa(data: string): string;
declare function clearInterval(handle?: number): void;
declare function clearTimeout(handle?: number): void;
declare function createImageBitmap(image: ImageBitmapSource, options?: ImageBitmapOptions): Promise<ImageBitmap>;
declare function createImageBitmap(image: ImageBitmapSource, sx: number, sy: number, sw: number, sh: number, options?: ImageBitmapOptions): Promise<ImageBitmap>;
declare function fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
declare function queueMicrotask(callback: VoidFunction): void;
declare function setInterval(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;
declare function setTimeout(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;
declare var sessionStorage: Storage;
declare function addEventListener<K extends keyof WindowEventMap>(type: K, listener: (this: Window, ev: WindowEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
declare function addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
declare function removeEventListener<K extends keyof WindowEventMap>(type: K, listener: (this: Window, ev: WindowEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
declare function removeEventListener(type: string, listener: EventListener, options?: boolean | EventListenerOptions): void;
type AlgorithmIdentifier = Algorithm | string;
type BigInteger = Uint8Array;
type BinaryData = ArrayBuffer | ArrayBufferView;
type BlobPart = BufferSource | Blob | string;
type BodyInit = ReadableStream | XMLHttpRequestBodyInit;
type BufferSource = ArrayBufferView | ArrayBuffer;
type COSEAlgorithmIdentifier = number;
type CanvasImageSource = HTMLOrSVGImageElement | HTMLVideoElement | HTMLCanvasElement | ImageBitmap;
type ClipboardItemData = Promise<ClipboardItemDataType>;
type ClipboardItemDataType = string | Blob;
type ClipboardItems = ClipboardItem[];
type ConstrainBoolean = boolean | ConstrainBooleanParameters;
type ConstrainDOMString = string | string[] | ConstrainDOMStringParameters;
type ConstrainDouble = number | ConstrainDoubleRange;
type ConstrainULong = number | ConstrainULongRange;
type DOMHighResTimeStamp = number;
type DOMTimeStamp = number;
type Float32List = Float32Array | GLfloat[];
type FormDataEntryValue = File | string;
type GLbitfield = number;
type GLboolean = boolean;
type GLclampf = number;
type GLenum = number;
type GLfloat = number;
type GLint = number;
type GLint64 = number;
type GLintptr = number;
type GLsizei = number;
type GLsizeiptr = number;
type GLuint = number;
type GLuint64 = number;
type HTMLOrSVGImageElement = HTMLImageElement | SVGImageElement;
type HTMLOrSVGScriptElement = HTMLScriptElement | SVGScriptElement;
type HashAlgorithmIdentifier = AlgorithmIdentifier;
type HeadersInit = string[][] | Record<string, string> | Headers;
type IDBValidKey = number | string | Date | BufferSource | IDBValidKey[];
type ImageBitmapSource = CanvasImageSource | Blob | ImageData;
type InsertPosition = "beforebegin" | "afterbegin" | "beforeend" | "afterend";
type Int32List = Int32Array | GLint[];
type LineAndPositionSetting = number | AutoKeyword;
type MediaProvider = MediaStream | MediaSource | Blob;
type MessageEventSource = WindowProxy | MessagePort | ServiceWorker;
type MutationRecordType = "attributes" | "characterData" | "childList";
type NamedCurve = string;
type OnBeforeUnloadEventHandler = OnBeforeUnloadEventHandlerNonNull | null;
type OnErrorEventHandler = OnErrorEventHandlerNonNull | null;
type PerformanceEntryList = PerformanceEntry[];
type ReadableStreamController<T> = ReadableStreamDefaultController<T>;
type ReadableStreamDefaultReadResult<T> = ReadableStreamDefaultReadValueResult<T> | ReadableStreamDefaultReadDoneResult;
type ReadableStreamReader<T> = ReadableStreamDefaultReader<T>;
type RenderingContext = CanvasRenderingContext2D | ImageBitmapRenderingContext | WebGLRenderingContext | WebGL2RenderingContext;
type RequestInfo = Request | string;
type TexImageSource = ImageBitmap | ImageData | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
type TimerHandler = string | Function;
type Transferable = ArrayBuffer | MessagePort | ImageBitmap;
type Uint32List = Uint32Array | GLuint[];
type UvmEntries = UvmEntry[];
type UvmEntry = number[];
type VibratePattern = number | number[];
type WindowProxy = Window;
type XMLHttpRequestBodyInit = Blob | BufferSource | FormData | URLSearchParams | string;
type AlignSetting = "center" | "end" | "left" | "right" | "start";
type AnimationPlayState = "finished" | "idle" | "paused" | "running";
type AnimationReplaceState = "active" | "persisted" | "removed";
type AppendMode = "segments" | "sequence";
type AttestationConveyancePreference = "direct" | "enterprise" | "indirect" | "none";
type AudioContextLatencyCategory = "balanced" | "interactive" | "playback";
type AudioContextState = "closed" | "running" | "suspended";
type AuthenticatorAttachment = "cross-platform" | "platform";
type AuthenticatorTransport = "ble" | "internal" | "nfc" | "usb";
type AutoKeyword = "auto";
type AutomationRate = "a-rate" | "k-rate";
type BinaryType = "arraybuffer" | "blob";
type BiquadFilterType = "allpass" | "bandpass" | "highpass" | "highshelf" | "lowpass" | "lowshelf" | "notch" | "peaking";
type CanPlayTypeResult = "" | "maybe" | "probably";
type CanvasDirection = "inherit" | "ltr" | "rtl";
type CanvasFillRule = "evenodd" | "nonzero";
type CanvasFontKerning = "auto" | "none" | "normal";
type CanvasFontStretch = "condensed" | "expanded" | "extra-condensed" | "extra-expanded" | "normal" | "semi-condensed" | "semi-expanded" | "ultra-condensed" | "ultra-expanded";
type CanvasFontVariantCaps = "all-petite-caps" | "all-small-caps" | "normal" | "petite-caps" | "small-caps" | "titling-caps" | "unicase";
type CanvasLineCap = "butt" | "round" | "square";
type CanvasLineJoin = "bevel" | "miter" | "round";
type CanvasTextAlign = "center" | "end" | "left" | "right" | "start";
type CanvasTextBaseline = "alphabetic" | "bottom" | "hanging" | "ideographic" | "middle" | "top";
type CanvasTextRendering = "auto" | "geometricPrecision" | "optimizeLegibility" | "optimizeSpeed";
type ChannelCountMode = "clamped-max" | "explicit" | "max";
type ChannelInterpretation = "discrete" | "speakers";
type ClientTypes = "all" | "sharedworker" | "window" | "worker";
type ColorGamut = "p3" | "rec2020" | "srgb";
type ColorSpaceConversion = "default" | "none";
type CompositeOperation = "accumulate" | "add" | "replace";
type CompositeOperationOrAuto = "accumulate" | "add" | "auto" | "replace";
type ConnectionType = "bluetooth" | "cellular" | "ethernet" | "mixed" | "none" | "other" | "unknown" | "wifi";
type CredentialMediationRequirement = "optional" | "required" | "silent";
type DOMParserSupportedType = "application/xhtml+xml" | "application/xml" | "image/svg+xml" | "text/html" | "text/xml";
type DirectionSetting = "" | "lr" | "rl";
type DisplayCaptureSurfaceType = "application" | "browser" | "monitor" | "window";
type DistanceModelType = "exponential" | "inverse" | "linear";
type DocumentReadyState = "complete" | "interactive" | "loading";
type EndOfStreamError = "decode" | "network";
type EndingType = "native" | "transparent";
type FillMode = "auto" | "backwards" | "both" | "forwards" | "none";
type FontFaceLoadStatus = "error" | "loaded" | "loading" | "unloaded";
type FontFaceSetLoadStatus = "loaded" | "loading";
type FullscreenNavigationUI = "auto" | "hide" | "show";
type GamepadHapticActuatorType = "vibration";
type GamepadMappingType = "" | "standard" | "xr-standard";
type HdrMetadataType = "smpteSt2086" | "smpteSt2094-10" | "smpteSt2094-40";
type IDBCursorDirection = "next" | "nextunique" | "prev" | "prevunique";
type IDBRequestReadyState = "done" | "pending";
type IDBTransactionMode = "readonly" | "readwrite" | "versionchange";
type ImageOrientation = "flipY" | "none";
type ImageSmoothingQuality = "high" | "low" | "medium";
type IterationCompositeOperation = "accumulate" | "replace";
type KeyFormat = "jwk" | "pkcs8" | "raw" | "spki";
type KeyType = "private" | "public" | "secret";
type KeyUsage = "decrypt" | "deriveBits" | "deriveKey" | "encrypt" | "sign" | "unwrapKey" | "verify" | "wrapKey";
type LineAlignSetting = "center" | "end" | "start";
type MediaDecodingType = "file" | "media-source" | "webrtc";
type MediaDeviceKind = "audioinput" | "audiooutput" | "videoinput";
type MediaEncodingType = "record" | "webrtc";
type MediaKeyMessageType = "individualization-request" | "license-release" | "license-renewal" | "license-request";
type MediaKeySessionType = "persistent-license" | "temporary";
type MediaKeyStatus = "expired" | "internal-error" | "output-downscaled" | "output-restricted" | "released" | "status-pending" | "usable" | "usable-in-future";
type MediaKeysRequirement = "not-allowed" | "optional" | "required";
type MediaSessionAction = "hangup" | "nexttrack" | "pause" | "play" | "previoustrack" | "seekbackward" | "seekforward" | "seekto" | "skipad" | "stop" | "togglecamera" | "togglemicrophone";
type MediaSessionPlaybackState = "none" | "paused" | "playing";
type MediaStreamTrackState = "ended" | "live";
type NavigationType = "back_forward" | "navigate" | "prerender" | "reload";
type NotificationDirection = "auto" | "ltr" | "rtl";
type NotificationPermission = "default" | "denied" | "granted";
type OrientationLockType = "any" | "landscape" | "landscape-primary" | "landscape-secondary" | "natural" | "portrait" | "portrait-primary" | "portrait-secondary";
type OrientationType = "landscape-primary" | "landscape-secondary" | "portrait-primary" | "portrait-secondary";
type OscillatorType = "custom" | "sawtooth" | "sine" | "square" | "triangle";
type OverSampleType = "2x" | "4x" | "none";
type PanningModelType = "HRTF" | "equalpower";
type PaymentComplete = "fail" | "success" | "unknown";
type PermissionName = "geolocation" | "notifications" | "persistent-storage" | "push";
type PermissionState = "denied" | "granted" | "prompt";
type PlaybackDirection = "alternate" | "alternate-reverse" | "normal" | "reverse";
type PositionAlignSetting = "auto" | "center" | "line-left" | "line-right";
type PredefinedColorSpace = "display-p3" | "srgb";
type PremultiplyAlpha = "default" | "none" | "premultiply";
type PresentationStyle = "attachment" | "inline" | "unspecified";
type PublicKeyCredentialType = "public-key";
type PushEncryptionKeyName = "auth" | "p256dh";
type PushPermissionState = "denied" | "granted" | "prompt";
type RTCBundlePolicy = "balanced" | "max-bundle" | "max-compat";
type RTCDataChannelState = "closed" | "closing" | "connecting" | "open";
type RTCDegradationPreference = "balanced" | "maintain-framerate" | "maintain-resolution";
type RTCDtlsTransportState = "closed" | "connected" | "connecting" | "failed" | "new";
type RTCIceCandidateType = "host" | "prflx" | "relay" | "srflx";
type RTCIceComponent = "rtcp" | "rtp";
type RTCIceConnectionState = "checking" | "closed" | "completed" | "connected" | "disconnected" | "failed" | "new";
type RTCIceCredentialType = "password";
type RTCIceGathererState = "complete" | "gathering" | "new";
type RTCIceGatheringState = "complete" | "gathering" | "new";
type RTCIceProtocol = "tcp" | "udp";
type RTCIceTcpCandidateType = "active" | "passive" | "so";
type RTCIceTransportPolicy = "all" | "relay";
type RTCIceTransportState = "checking" | "closed" | "completed" | "connected" | "disconnected" | "failed" | "new";
type RTCPeerConnectionState = "closed" | "connected" | "connecting" | "disconnected" | "failed" | "new";
type RTCPriorityType = "high" | "low" | "medium" | "very-low";
type RTCRtcpMuxPolicy = "require";
type RTCRtpTransceiverDirection = "inactive" | "recvonly" | "sendonly" | "sendrecv" | "stopped";
type RTCSdpType = "answer" | "offer" | "pranswer" | "rollback";
type RTCSignalingState = "closed" | "have-local-offer" | "have-local-pranswer" | "have-remote-offer" | "have-remote-pranswer" | "stable";
type RTCStatsIceCandidatePairState = "failed" | "frozen" | "in-progress" | "inprogress" | "succeeded" | "waiting";
type RTCStatsType = "candidate-pair" | "certificate" | "codec" | "csrc" | "data-channel" | "inbound-rtp" | "local-candidate" | "media-source" | "outbound-rtp" | "peer-connection" | "remote-candidate" | "remote-inbound-rtp" | "remote-outbound-rtp" | "track" | "transport";
type ReadyState = "closed" | "ended" | "open";
type RecordingState = "inactive" | "paused" | "recording";
type ReferrerPolicy = "" | "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url";
type RemotePlaybackState = "connected" | "connecting" | "disconnected";
type RequestCache = "default" | "force-cache" | "no-cache" | "no-store" | "only-if-cached" | "reload";
type RequestCredentials = "include" | "omit" | "same-origin";
type RequestDestination = "" | "audio" | "audioworklet" | "document" | "embed" | "font" | "frame" | "iframe" | "image" | "manifest" | "object" | "paintworklet" | "report" | "script" | "sharedworker" | "style" | "track" | "video" | "worker" | "xslt";
type RequestMode = "cors" | "navigate" | "no-cors" | "same-origin";
type RequestRedirect = "error" | "follow" | "manual";
type ResidentKeyRequirement = "discouraged" | "preferred" | "required";
type ResizeObserverBoxOptions = "border-box" | "content-box" | "device-pixel-content-box";
type ResizeQuality = "high" | "low" | "medium" | "pixelated";
type ResponseType = "basic" | "cors" | "default" | "error" | "opaque" | "opaqueredirect";
type ScrollBehavior = "auto" | "smooth";
type ScrollLogicalPosition = "center" | "end" | "nearest" | "start";
type ScrollRestoration = "auto" | "manual";
type ScrollSetting = "" | "up";
type SecurityPolicyViolationEventDisposition = "enforce" | "report";
type SelectionMode = "end" | "preserve" | "select" | "start";
type ServiceWorkerState = "activated" | "activating" | "installed" | "installing" | "parsed" | "redundant";
type ServiceWorkerUpdateViaCache = "all" | "imports" | "none";
type ShadowRootMode = "closed" | "open";
type SlotAssignmentMode = "manual" | "named";
type SpeechRecognitionErrorCode = "aborted" | "audio-capture" | "bad-grammar" | "language-not-supported" | "network" | "no-speech" | "not-allowed" | "service-not-allowed";
type SpeechSynthesisErrorCode = "audio-busy" | "audio-hardware" | "canceled" | "interrupted" | "invalid-argument" | "language-unavailable" | "network" | "not-allowed" | "synthesis-failed" | "synthesis-unavailable" | "text-too-long" | "voice-unavailable";
type TextTrackKind = "captions" | "chapters" | "descriptions" | "metadata" | "subtitles";
type TextTrackMode = "disabled" | "hidden" | "showing";
type TouchType = "direct" | "stylus";
type TransferFunction = "hlg" | "pq" | "srgb";
type UserVerificationRequirement = "discouraged" | "preferred" | "required";
type VideoFacingModeEnum = "environment" | "left" | "right" | "user";
type VisibilityState = "hidden" | "visible";
type WebGLPowerPreference = "default" | "high-performance" | "low-power";
type WorkerType = "classic" | "module";
type XMLHttpRequestResponseType = "" | "arraybuffer" | "blob" | "document" | "json" | "text";
