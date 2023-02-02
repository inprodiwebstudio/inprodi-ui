import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgRow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 1034 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.23.774c-.711 0-1.422.269-1.962.808L7.295 3.556c-.933.933-1.01 2.357-.328 3.429l-.755.756c-1.072-.682-2.497-.607-3.43.326L.81 10.041a2.784 2.784 0 0 0 0 3.924 2.784 2.784 0 0 0 3.924 0l1.973-1.974c.933-.933 1.008-2.357.327-3.429l.756-.756c1.072.682 2.496.606 3.429-.327l1.973-1.974a2.783 2.783 0 0 0 0-3.923A2.765 2.765 0 0 0 11.23.774Zm0 1.154c.411 0 .823.159 1.14.476a1.604 1.604 0 0 1 0 2.28l-1.974 1.973a1.595 1.595 0 0 1-1.787.33l1.27-1.27a.58.58 0 1 0-.822-.821l-1.27 1.269c-.263-.591-.159-1.3.33-1.788l1.973-1.973a1.607 1.607 0 0 1 1.14-.476ZM4.745 8.414c.221 0 .44.054.647.147l-1.27 1.268a.581.581 0 1 0 .822.822l1.269-1.269c.263.591.16 1.299-.328 1.787L3.91 13.143a1.604 1.604 0 0 1-2.28 0 1.603 1.603 0 0 1 0-2.28L3.605 8.89a1.606 1.606 0 0 1 1.14-.475ZM36.139.774A2.148 2.148 0 0 0 34 2.912v9.723c0 1.174.965 2.139 2.139 2.139h7a2.148 2.148 0 0 0 2.139-2.14.583.583 0 1 0-1.167 0 .964.964 0 0 1-.972.973h-7a.964.964 0 0 1-.972-.972V2.912c0-.543.428-.972.972-.972h7c.544 0 .972.429.972.972a.584.584 0 1 0 1.167 0 2.148 2.148 0 0 0-2.14-2.138h-7Zm8.55 3.688a.583.583 0 0 0-.407 1.002l1.727 1.726h-8.315a.583.583 0 1 0 0 1.167h8.314l-1.726 1.726a.584.584 0 1 0 .825.825l2.722-2.722a.583.583 0 0 0 0-.825L45.107 4.64a.584.584 0 0 0-.419-.177ZM81.486 3.176a.5.5 0 0 0-.344.15l-8.639 8.64-3.643-3.644a.498.498 0 0 0-.819.545.5.5 0 0 0 .113.162l3.996 3.996a.5.5 0 0 0 .707 0l8.992-8.992a.5.5 0 0 0-.363-.857ZM112.66.774a.522.522 0 0 0-.486.327.522.522 0 0 0 .12.573l1.203 1.203h-9.574A1.927 1.927 0 0 0 102 4.8v5.644l1.049-1.049V4.8c0-.482.392-.874.874-.874h9.574l-1.203 1.203a.534.534 0 0 0-.161.373.51.51 0 0 0 .154.376.525.525 0 0 0 .749-.007l2.098-2.098a.525.525 0 0 0 0-.742L113.036.933a.522.522 0 0 0-.376-.16Zm2.628 4.327-1.049 1.049v4.595a.875.875 0 0 1-.875.874h-9.573l1.202-1.203a.524.524 0 1 0-.741-.741l-2.098 2.098a.522.522 0 0 0 0 .741l2.098 2.098a.521.521 0 0 0 .749.008.54.54 0 0 0 .154-.376.52.52 0 0 0-.162-.373l-1.202-1.203h9.573c1.06 0 1.924-.864 1.924-1.923V5.1ZM142.993.774c-2.689 0-5.166 1.207-6.85 3.072a.542.542 0 0 0-.142.398.542.542 0 0 0 .181.382.553.553 0 0 0 .78-.04c1.482-1.64 3.674-2.708 6.031-2.708 2.356 0 4.552 1.069 6.038 2.71a.553.553 0 1 0 .818-.742c-1.688-1.865-4.168-3.072-6.856-3.072Zm6.034 6.619a.555.555 0 0 0-.508.418c-.591 2.217-2.916 4.009-5.526 4.009s-4.929-1.79-5.52-4.009a.557.557 0 0 0-.522-.417.55.55 0 0 0-.556.446.553.553 0 0 0 .011.256c.176.663.474 1.282.86 1.846l-1.049.874a.568.568 0 0 0-.185.594.563.563 0 0 0 .275.33.554.554 0 0 0 .618-.076l1.101-.918c.4.413.829.776 1.328 1.082l-.675 1.17a.548.548 0 0 0-.055.42.559.559 0 0 0 .257.335.557.557 0 0 0 .613-.04.543.543 0 0 0 .142-.163l.699-1.212c.668.277 1.362.482 2.109.541v1.334a.54.54 0 0 0 .159.396.542.542 0 0 0 .393.165.55.55 0 0 0 .513-.347.559.559 0 0 0 .04-.214V12.88c.745-.06 1.439-.266 2.107-.542l.7 1.213a.557.557 0 0 0 .551.272.553.553 0 0 0 .406-.824l-.676-1.172a6.745 6.745 0 0 0 1.328-1.081l1.102.919a.559.559 0 0 0 .408.136.55.55 0 0 0 .506-.608.543.543 0 0 0-.206-.376l-1.049-.875a6.028 6.028 0 0 0 .861-1.845.557.557 0 0 0-.304-.655.554.554 0 0 0-.256-.048ZM176.926.774a.468.468 0 0 0-.327.12s-2.335 2.057-5.132 2.057a.465.465 0 0 0-.467.467v3.814c0 2.078.961 5.496 5.73 7.505a.466.466 0 0 0 .362 0c4.769-2.009 5.73-5.427 5.73-7.505V3.418a.465.465 0 0 0-.467-.467c-2.797 0-5.132-2.058-5.132-2.058a.468.468 0 0 0-.297-.12Zm-.015 1.066c.642.516 2.523 1.839 4.978 2.006v3.386c0 1.787-.687 4.669-4.978 6.554-4.291-1.885-4.978-4.767-4.978-6.554V3.846c2.455-.167 4.336-1.49 4.978-2.006Zm0 2.667a3.118 3.118 0 0 0-3.111 3.111 3.118 3.118 0 0 0 3.111 3.111 3.118 3.118 0 0 0 3.111-3.111 3.118 3.118 0 0 0-3.111-3.111Zm0 .933c.432 0 .81.156 1.148.37l-2.956 2.956c-.214-.338-.37-.716-.37-1.148 0-1.208.97-2.178 2.178-2.178Zm1.808 1.03c.214.338.37.716.37 1.148 0 1.208-.97 2.178-2.178 2.178-.432 0-.81-.156-1.148-.37l2.956-2.956ZM217.369 1.174a.618.618 0 0 0-.431.19L211 7.3l-5.938-5.938a.621.621 0 0 0-.443-.187.617.617 0 0 0-.429 1.06l5.938 5.938-5.938 5.938a.612.612 0 0 0-.009.881.616.616 0 0 0 .881-.01L211 9.047l5.938 5.938a.62.62 0 0 0 .678.144.616.616 0 0 0 .194-1.016l-5.938-5.938 5.938-5.938a.612.612 0 0 0 .143-.683.615.615 0 0 0-.584-.38ZM238.921 1.774a.929.929 0 0 0-.921.92v1.841c0 .502.418.92.921.92h1.841c.502 0 .92-.418.92-.92v-1.84a.928.928 0 0 0-.92-.921h-1.841Zm.184 1.104h1.472v1.473h-1.472V2.878Zm4.234.369a.555.555 0 0 0-.56.552.548.548 0 0 0 .56.552h8.101A.554.554 0 0 0 252 3.8a.557.557 0 0 0-.346-.513.555.555 0 0 0-.214-.04h-8.101Zm-4.418 2.945a.929.929 0 0 0-.921.92v1.842c0 .502.418.92.921.92h1.841c.502 0 .92-.418.92-.92V7.113a.928.928 0 0 0-.92-.92h-1.841Zm.184 1.105h1.472V8.77h-1.472V7.297Zm4.234.368a.554.554 0 0 0-.56.552.548.548 0 0 0 .56.552h8.101a.554.554 0 0 0 .56-.552.557.557 0 0 0-.346-.512.554.554 0 0 0-.214-.04h-8.101Zm-4.418 2.946a.928.928 0 0 0-.921.92v1.841c0 .502.418.92.921.92h1.841c.502 0 .92-.418.92-.92v-1.84a.928.928 0 0 0-.92-.921h-1.841Zm.184 1.104h1.472v1.473h-1.472v-1.473Zm4.234.369a.555.555 0 0 0-.56.552.548.548 0 0 0 .56.552h8.101a.555.555 0 0 0 .56-.552.557.557 0 0 0-.346-.513.555.555 0 0 0-.214-.04h-8.101ZM278.996 3.774c-3.302 0-6.211 2.288-6.982 5.287a.437.437 0 1 0 .847.217c.665-2.584 3.242-4.63 6.135-4.63s5.478 2.047 6.143 4.63a.434.434 0 0 0 .532.315.436.436 0 0 0 .315-.532c-.772-3-3.688-5.287-6.99-5.287Zm.005 2.333a2.825 2.825 0 0 0-2.819 2.818 2.826 2.826 0 0 0 2.819 2.82 2.826 2.826 0 0 0 2.819-2.82 2.826 2.826 0 0 0-2.819-2.818Zm0 .875c1.078 0 1.944.865 1.944 1.943a1.938 1.938 0 0 1-1.944 1.945 1.937 1.937 0 0 1-1.944-1.944c0-1.08.865-1.944 1.944-1.944ZM308.147.774a2.147 2.147 0 0 0-2.139 2.139v6.904a.546.546 0 0 0 0 .189v2.629c0 1.174.964 2.139 2.139 2.139h9.722a2.148 2.148 0 0 0 2.139-2.14v-2.626a.6.6 0 0 0 0-.189V2.913a2.148 2.148 0 0 0-2.139-2.14h-9.722Zm0 1.166h4.277v3.111h-5.25V2.913c0-.544.429-.973.973-.973Zm5.444 0h4.278c.544 0 .972.429.972.973V5.05h-5.25v-3.11Zm-6.417 4.278h5.25V9.33h-5.25V6.22Zm6.417 0h5.25V9.33h-5.25V6.22Zm-6.417 4.278h5.25v3.111h-4.277a.964.964 0 0 1-.973-.972v-2.14Zm6.417 0h5.25v2.139a.963.963 0 0 1-.972.972h-4.278v-3.111ZM347 1.174c-1.54 0-2.8 1.26-2.8 2.8v1.4h-1.225c-.864 0-1.575.71-1.575 1.575v6.65c0 .863.711 1.575 1.575 1.575h8.05c.864 0 1.575-.712 1.575-1.575v-6.65c0-.864-.711-1.575-1.575-1.575H349.8v-1.4c0-1.54-1.26-2.8-2.8-2.8Zm0 1.05c.973 0 1.75.777 1.75 1.75v1.4h-3.5v-1.4c0-.973.777-1.75 1.75-1.75Zm-4.025 4.2h8.05c.296 0 .525.228.525.525v6.65a.517.517 0 0 1-.525.525h-8.05a.517.517 0 0 1-.525-.525v-6.65c0-.297.229-.525.525-.525Zm4.025 2.8a1.048 1.048 0 0 0-1.05 1.05 1.05 1.05 0 1 0 1.05-1.05ZM375.424 1.774a.481.481 0 0 0-.069.006h-.56a.472.472 0 0 0-.341.138.49.49 0 0 0-.143.34.485.485 0 0 0 .143.34.473.473 0 0 0 .341.137h.16v6.078c-.533.081-.955.528-.955 1.081v3.5a.475.475 0 0 0 .477.477h8.909a.479.479 0 0 0 .478-.477v-3.5c0-.553-.422-1-.955-1.081V2.735h.159a.48.48 0 0 0 .447-.293.467.467 0 0 0 0-.369.471.471 0 0 0-.262-.258.48.48 0 0 0-.185-.035h-.558a.479.479 0 0 0-.155 0h-6.845a.475.475 0 0 0-.086-.006Zm.485.96h6.046v6.524a.479.479 0 0 0 .477.477h.318c.094 0 .159.065.159.159v3.023h-3.182v-1.91a.318.318 0 0 0-.318-.317h-.954a.319.319 0 0 0-.319.318v1.909h-3.181V9.894c0-.094.065-.16.159-.16h.318a.476.476 0 0 0 .477-.476V2.735Zm1.591 1.274a.318.318 0 0 0-.318.318v.636c0 .176.142.318.318.318h.636a.319.319 0 0 0 .319-.318v-.636a.319.319 0 0 0-.319-.318h-.636Zm2.227 0a.319.319 0 0 0-.318.318v.636c0 .176.143.318.318.318h.637a.319.319 0 0 0 .318-.318v-.636a.319.319 0 0 0-.318-.318h-.637Zm3.818 0v.954h2.705c.439 0 .795.357.795.796v7.159H384.5v.636a.958.958 0 0 1-.058.318h3.081a.476.476 0 0 0 .477-.477V5.758c0-.964-.786-1.75-1.75-1.75h-2.705ZM377.5 6.235a.318.318 0 0 0-.318.318v.636c0 .176.142.319.318.319h.636a.319.319 0 0 0 .319-.319v-.636a.319.319 0 0 0-.319-.318h-.636Zm2.227 0a.319.319 0 0 0-.318.318v.636c0 .176.143.319.318.319h.637a.319.319 0 0 0 .318-.319v-.636a.319.319 0 0 0-.318-.318h-.637Zm5.409 0a.319.319 0 0 0-.318.318v.636c0 .176.143.319.318.319h.637a.319.319 0 0 0 .318-.319v-.636a.319.319 0 0 0-.318-.318h-.637ZM377.5 8.462a.318.318 0 0 0-.318.318v.637c0 .175.142.318.318.318h.636a.319.319 0 0 0 .319-.318V8.78a.319.319 0 0 0-.319-.318h-.636Zm2.227 0a.319.319 0 0 0-.318.318v.637c0 .175.143.318.318.318h.637a.319.319 0 0 0 .318-.318V8.78a.319.319 0 0 0-.318-.318h-.637Zm5.409 0a.319.319 0 0 0-.318.318v.637c0 .175.143.318.318.318h.637a.319.319 0 0 0 .318-.318V8.78a.319.319 0 0 0-.318-.318h-.637Zm-8.909 2.228a.319.319 0 0 0-.318.318v.636c0 .176.143.318.318.318h.637a.319.319 0 0 0 .318-.318v-.636a.319.319 0 0 0-.318-.318h-.637Zm4.773 0a.318.318 0 0 0-.318.318v.636c0 .176.142.318.318.318h.636a.319.319 0 0 0 .319-.318v-.636a.319.319 0 0 0-.319-.318H381Zm4.136 0a.319.319 0 0 0-.318.318v.636c0 .176.143.318.318.318h.637a.319.319 0 0 0 .318-.318v-.636a.319.319 0 0 0-.318-.318h-.637ZM418.681.774a.58.58 0 0 0-.574.59V9.67l-1.724-1.725a.587.587 0 0 0-.641-.136.579.579 0 0 0-.319.32.584.584 0 0 0 .136.64l2.719 2.72a.581.581 0 0 0 .824 0l2.719-2.72a.584.584 0 0 0-.41-1.003.583.583 0 0 0-.414.18l-1.724 1.724V1.365a.592.592 0 0 0-.171-.421.583.583 0 0 0-.421-.17Zm-10.09.396a.587.587 0 0 0-.546.358.579.579 0 0 0 .129.64.586.586 0 0 0 .417.168h1.165a.587.587 0 0 0 .546-.358.579.579 0 0 0-.128-.64.59.59 0 0 0-.418-.168h-1.165Zm0 3.108a.587.587 0 0 0-.546.358.579.579 0 0 0 .129.64.586.586 0 0 0 .417.167h2.719a.579.579 0 0 0 .546-.358.598.598 0 0 0 0-.45.587.587 0 0 0-.546-.357h-2.719Zm0 3.107a.587.587 0 0 0-.546.358.579.579 0 0 0 .129.64.586.586 0 0 0 .417.167h4.273a.582.582 0 1 0 0-1.165h-4.273Zm0 3.108a.587.587 0 0 0-.546.357.579.579 0 0 0 .129.64.587.587 0 0 0 .417.168h5.826a.583.583 0 1 0 0-1.165h-5.826Zm0 3.107a.589.589 0 0 0-.417.168.589.589 0 0 0-.174.415.58.58 0 0 0 .591.582h7.38a.58.58 0 0 0 .591-.582.579.579 0 0 0-.366-.541.58.58 0 0 0-.225-.042h-7.38ZM442.591.774a.587.587 0 0 0-.546.357.579.579 0 0 0 .129.64.586.586 0 0 0 .417.168h7.38a.579.579 0 0 0 .546-.358.579.579 0 0 0-.129-.64.58.58 0 0 0-.417-.167h-7.38Zm10.09 2.904a.58.58 0 0 0-.574.591v8.499l-1.724-1.725a.588.588 0 0 0-.641-.136.578.578 0 0 0-.319.32.584.584 0 0 0 .136.64l2.719 2.72a.582.582 0 0 0 .824 0l2.719-2.72a.584.584 0 0 0-.635-.955.588.588 0 0 0-.189.131l-1.724 1.725V4.269a.592.592 0 0 0-.171-.42.583.583 0 0 0-.421-.17Zm-10.09.203a.587.587 0 0 0-.546.358.579.579 0 0 0 .129.64.586.586 0 0 0 .417.167h5.826a.584.584 0 1 0 0-1.165h-5.826Zm0 3.107a.587.587 0 0 0-.546.358.579.579 0 0 0 .129.64.586.586 0 0 0 .417.168h4.273a.582.582 0 1 0 0-1.166h-4.273Zm0 3.108a.587.587 0 0 0-.546.357.579.579 0 0 0 .129.64.587.587 0 0 0 .417.168h2.719a.578.578 0 0 0 .546-.358.598.598 0 0 0 0-.45.587.587 0 0 0-.546-.357h-2.719Zm0 3.107a.587.587 0 0 0-.546.358.579.579 0 0 0 .129.64.587.587 0 0 0 .417.167h1.165a.587.587 0 0 0 .546-.357.579.579 0 0 0-.128-.64.59.59 0 0 0-.418-.168h-1.165ZM483 .774c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7Zm0 1.05a5.942 5.942 0 0 1 5.95 5.95 5.942 5.942 0 0 1-5.95 5.95 5.942 5.942 0 0 1-5.95-5.95 5.942 5.942 0 0 1 5.95-5.95Zm0 2.45a.699.699 0 1 0 0 1.398.699.699 0 0 0 0-1.398Zm-.008 2.442a.526.526 0 0 0-.517.533v3.85a.524.524 0 1 0 1.05 0v-3.85a.516.516 0 0 0-.154-.38.53.53 0 0 0-.379-.153ZM512.275 2.574A2.283 2.283 0 0 0 510 4.849v6.65a2.283 2.283 0 0 0 2.275 2.275h9.45A2.283 2.283 0 0 0 524 11.499v-6.65a2.283 2.283 0 0 0-2.275-2.275h-9.45Zm0 1.05h9.45c.683 0 1.225.542 1.225 1.225v.386L517 8.452l-5.95-3.217V4.85c0-.683.542-1.225 1.225-1.225Zm-1.225 2.805 5.7 3.082a.528.528 0 0 0 .5 0l5.7-3.082v5.07c0 .682-.542 1.225-1.225 1.225h-9.45a1.217 1.217 0 0 1-1.225-1.225v-5.07ZM546.915.774a.523.523 0 0 0-.517.532V8.23c-.363.098-.692.254-.916.506-.329.37-.482.844-.482 1.31 0 .466.153.94.482 1.31.224.252.553.408.916.506v2.38a.542.542 0 0 0 .151.375.52.52 0 0 0 .374.156.524.524 0 0 0 .524-.531v-2.38c.364-.098.693-.254.917-.506.329-.37.482-.844.482-1.31 0-.466-.153-.94-.482-1.31-.224-.252-.553-.408-.917-.506V1.306a.532.532 0 0 0-.153-.38.53.53 0 0 0-.379-.152Zm4.37 0a.524.524 0 0 0-.516.532v1.68c-.364.098-.693.254-.917.506-.329.37-.482.844-.482 1.31 0 .466.153.94.482 1.31.224.252.553.408.917.506v7.624a.523.523 0 0 0 .727.49.527.527 0 0 0 .322-.49V6.618c.363-.098.692-.254.916-.506.329-.37.482-.844.482-1.31 0-.466-.153-.94-.482-1.31-.224-.252-.553-.408-.916-.506v-1.68a.515.515 0 0 0-.154-.38.53.53 0 0 0-.379-.152Zm4.37 0a.524.524 0 0 0-.516.532V8.93c-.363.097-.692.254-.916.506-.33.37-.482.843-.482 1.31 0 .466.152.939.482 1.31.224.251.553.408.916.505v1.68a.523.523 0 0 0 .727.492.527.527 0 0 0 .322-.491v-1.68c.363-.098.692-.255.916-.507.33-.37.482-.843.482-1.31 0-.466-.152-.939-.482-1.31-.224-.251-.553-.408-.916-.505V1.306a.515.515 0 0 0-.154-.38.53.53 0 0 0-.379-.152Zm-4.395 3.16a.53.53 0 0 0 .066 0c.31.008.493.107.624.255.137.154.217.38.217.613 0 .233-.08.459-.217.613-.137.154-.322.26-.657.26s-.52-.106-.657-.26a.935.935 0 0 1-.217-.613c0-.233.08-.46.217-.613.132-.148.315-.247.624-.255Zm-4.37 5.244a.534.534 0 0 0 .066 0c.31.008.492.107.624.255.137.154.217.38.217.613 0 .233-.08.46-.217.613-.132.148-.314.247-.624.255a.52.52 0 0 0-.066 0c-.31-.008-.493-.107-.624-.255a.935.935 0 0 1-.217-.613c0-.233.08-.459.217-.613.131-.148.314-.247.624-.255Zm8.741.7a.515.515 0 0 0 .065 0c.31.008.493.106.624.254.137.154.218.38.218.613 0 .234-.081.46-.218.614-.131.147-.314.246-.624.254a.504.504 0 0 0-.065 0c-.31-.008-.493-.107-.624-.254a.936.936 0 0 1-.218-.614c0-.233.081-.459.218-.613.131-.148.314-.246.624-.255ZM583.075 1.774c-.67 0-1.225.554-1.225 1.225v.875h-2.625c-.67 0-1.225.554-1.225 1.225v8.4c0 .67.555 1.224 1.225 1.224h11.55c.67 0 1.225-.554 1.225-1.225v-8.4c0-.67-.555-1.224-1.225-1.224h-2.625v-.875c0-.67-.555-1.225-1.225-1.225h-3.85Zm0 1.05h3.85c.103 0 .175.071.175.175v.875h-4.2v-.875c0-.104.072-.175.175-.175Zm-3.85 2.1h11.55c.103 0 .175.071.175.175v4.725h-4.9v-.175a.525.525 0 0 0-.525-.525h-1.05a.525.525 0 0 0-.525.525v.175h-4.9V5.099c0-.104.072-.175.175-.175Zm-.175 5.95h4.9v.175c0 .29.235.524.525.524h1.05c.29 0 .525-.235.525-.524v-.175h4.9v2.624a.167.167 0 0 1-.175.176h-11.55a.167.167 0 0 1-.175-.175v-2.626ZM619 1.774a1.56 1.56 0 0 0-1.384.797l-5.424 9.798c-.572 1.034.203 2.35 1.384 2.35h10.848c1.181 0 1.956-1.316 1.384-2.35l-5.425-9.798A1.56 1.56 0 0 0 619 1.774Zm0 1.014c.178 0 .356.097.464.292l5.424 9.798c.208.376-.036.79-.464.79h-10.848c-.428 0-.672-.414-.464-.79l5.424-9.798a.53.53 0 0 1 .464-.292Zm-.009 2.814a.526.526 0 0 0-.517.533v3.503a.525.525 0 1 0 1.051 0V6.135a.534.534 0 0 0-.154-.38.53.53 0 0 0-.38-.153Zm.009 5.613a.703.703 0 0 0-.701.7.702.702 0 0 0 1.196.496.698.698 0 0 0 0-.991.7.7 0 0 0-.495-.205ZM650.268 2.007a.503.503 0 0 0-.379.174l-1.388 1.621a.5.5 0 0 0-.168.375V6.34l-1.219-1.496a.51.51 0 0 1 .003-.649l.66-.792a.167.167 0 0 1 .136-.063c.019 0 .047.009.076.023l.604-.797a1.165 1.165 0 0 0-1.584.197l-.66.792a1.513 1.513 0 0 0-.01 1.921l1.327 1.628v5.42c0 1.008.827 1.834 1.834 1.834h.001l6.999-.017a1.841 1.841 0 0 0 1.834-1.833V7.103l1.327-1.627a1.513 1.513 0 0 0-.011-1.921l-.659-.792a1.165 1.165 0 0 0-1.584-.197l.603.797a.2.2 0 0 1 .077-.023.168.168 0 0 1 .136.063l.66.792c.156.188.157.46.003.65l-1.219 1.494V4.176l-.001-.023-.003-.035a.491.491 0 0 0-.142-.296l-1.224-1.617a.496.496 0 0 0-.398-.198h-5.631Zm.231 1h5.151l.511.675h-6.241l.579-.675Zm-1.166 1.675h7.334v1.659h-7.334V4.682Zm-.667 2.659h8.668v5.167a.826.826 0 0 1-.834.833h-.001l-6.999.017a.827.827 0 0 1-.834-.833V7.34Zm2.834 1.333a.505.505 0 0 0-.358.144.494.494 0 0 0-.149.356.493.493 0 0 0 .149.356.5.5 0 0 0 .358.144h3a.502.502 0 0 0 .469-.693.496.496 0 0 0-.275-.27.502.502 0 0 0-.194-.037h-3ZM686.6.774a3.508 3.508 0 0 0-3.5 3.5c0 1.926 1.573 3.5 3.5 3.5s3.5-1.574 3.5-3.5c0-1.927-1.573-3.5-3.5-3.5Zm0 1.05c1.359 0 2.45 1.09 2.45 2.45 0 1.359-1.091 2.45-2.45 2.45a2.442 2.442 0 0 1-2.45-2.45c0-1.36 1.091-2.45 2.45-2.45Zm-4.208 7.35A1.4 1.4 0 0 0 681 10.566v.532c0 1.262.798 2.238 1.857 2.822 1.06.585 2.402.854 3.743.854 1.341 0 2.683-.269 3.743-.854.903-.498 1.583-1.295 1.774-2.296h.084v-1.058c0-.763-.631-1.392-1.393-1.392h-8.416Zm0 1.05h8.416c.195 0 .343.147.343.342v.007h-.001v.525c0 .84-.471 1.438-1.315 1.904-.843.465-2.039.721-3.235.721-1.196 0-2.392-.256-3.235-.721-.844-.466-1.315-1.065-1.315-1.904v-.532c0-.195.147-.343.342-.343Z"
        fill={props.color || `currentColor`}
      />
      <g clipPath="url(#Row_svg__a)">
        <path
          d="M716.985 1.174a.522.522 0 0 0-.494.322.525.525 0 0 0-.041.203v1.639a2.284 2.284 0 0 0-1.75 2.21v7.35a2.283 2.283 0 0 0 2.275 2.276h8.05a2.283 2.283 0 0 0 2.275-2.275v-7.35c0-1.07-.751-1.972-1.75-2.211v-1.64a.523.523 0 0 0-.484-.523.523.523 0 0 0-.254.044l-1.312.583-.809-.54a.525.525 0 0 0-.526-.033L721 1.812l-1.166-.583a.523.523 0 0 0-.525.033l-.81.54-1.311-.583a.522.522 0 0 0-.203-.045Zm2.653 1.13 1.127.564a.53.53 0 0 0 .469 0l1.128-.564.797.532a.52.52 0 0 0 .504.043l.837-.372v1.206a.54.54 0 0 0 0 .17v1.84h-7V3.886a.54.54 0 0 0 0-.17V2.507l.837.372a.523.523 0 0 0 .504-.043l.797-.532Zm-3.188 2.14V6.25a.523.523 0 0 0 .525.525h8.05a.524.524 0 0 0 .525-.525V4.444c.414.195.7.612.7 1.105v6.125h-10.5V5.549c0-.493.285-.91.7-1.105Zm2.1 3.03a.699.699 0 1 0 0 1.398.699.699 0 0 0 0-1.398Zm2.45 0a.699.699 0 1 0 0 1.398.699.699 0 0 0 0-1.398Zm2.45 0a.699.699 0 1 0 0 1.398.699.699 0 0 0 0-1.398Zm-4.9 2.1a.699.699 0 1 0 0 1.398.699.699 0 0 0 0-1.398Zm2.45 0a.699.699 0 1 0 0 1.398.699.699 0 0 0 0-1.398Zm2.45 0a.699.699 0 1 0 0 1.398.699.699 0 0 0 0-1.398Zm-7.7 3.15h10.5v.175c0 .682-.543 1.225-1.225 1.225h-3.326a.696.696 0 0 0-.699-.7.7.7 0 0 0-.699.7h-3.326a1.217 1.217 0 0 1-1.225-1.225v-.175Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <path
        d="M750.833.774A1.841 1.841 0 0 0 749 2.607c0 1.006.827 1.833 1.833 1.833a1.841 1.841 0 0 0 1.834-1.833 1.841 1.841 0 0 0-1.834-1.833Zm0 1c.466 0 .834.367.834.833a.827.827 0 0 1-.834.833.826.826 0 0 1-.833-.833c0-.466.367-.833.833-.833Zm3.834.666c-.059 0-.116.001-.17.003a.501.501 0 1 0 .026 1l.144-.003c1.574 0 2.946.836 3.706 2.087a.499.499 0 0 0 .913-.141.493.493 0 0 0-.058-.379 5.336 5.336 0 0 0-4.561-2.567Zm-5.5 2.667c-.639 0-1.167.528-1.167 1.167v.5c0 .989.995 2 2.833 2s2.834-1.011 2.834-2v-.5c0-.639-.529-1.167-1.167-1.167h-3.333Zm0 1h3.333a.16.16 0 0 1 .167.167v.5c0 .299-.338 1-1.834 1-1.495 0-1.833-.701-1.833-1v-.5a.16.16 0 0 1 .167-.167Zm10 .667a1.841 1.841 0 0 0-1.834 1.833c0 1.006.827 1.833 1.834 1.833A1.841 1.841 0 0 0 761 8.607a1.841 1.841 0 0 0-1.833-1.833Zm0 1c.466 0 .833.367.833.833a.826.826 0 0 1-.833.833.826.826 0 0 1-.834-.833c0-.466.367-.833.834-.833Zm-8.952 2a.5.5 0 0 0-.443.766 5.336 5.336 0 0 0 4.73 2.564.497.497 0 0 0 .468-.317.503.503 0 0 0-.493-.682l-.144.002a4.327 4.327 0 0 1-3.706-2.087.503.503 0 0 0-.412-.246Zm7.285 1.333c-.638 0-1.167.528-1.167 1.167v.5c0 .989.996 2 2.834 2 1.837 0 2.833-1.011 2.833-2v-.5c0-.639-.528-1.167-1.167-1.167H757.5Zm0 1h3.333a.16.16 0 0 1 .167.167v.5c0 .299-.338 1-1.833 1-1.496 0-1.834-.701-1.834-1v-.5a.16.16 0 0 1 .167-.167ZM793.848.774c-.554 0-1.037.227-1.345.573-.308.347-.45.788-.45 1.221 0 .216.036.433.109.64l-2.34 1.839c-.283-.187-.611-.325-.999-.325-.492 0-.908.197-1.215.48l-2.079-1.187c.025-.123.064-.245.064-.37 0-.434-.142-.875-.45-1.221-.309-.347-.792-.574-1.345-.574-.553 0-1.037.227-1.345.574-.308.346-.45.787-.45 1.221 0 .434.142.875.45 1.221.308.347.792.574 1.345.574a1.78 1.78 0 0 0 1.215-.48l2.078 1.186c-.024.124-.063.246-.063.37 0 .434.142.875.45 1.222.308.346.792.573 1.345.573.553 0 1.036-.227 1.344-.573.308-.347.45-.788.45-1.222 0-.215-.035-.432-.108-.639l2.34-1.84c.283.187.61.326.999.326.553 0 1.036-.227 1.344-.574.308-.346.45-.787.45-1.22 0-.434-.142-.875-.45-1.222-.308-.346-.791-.573-1.344-.573Zm0 1.076c.284 0 .429.088.54.212.11.125.178.312.178.506a.778.778 0 0 1-.178.506c-.111.125-.256.212-.54.212-.267 0-.399-.086-.507-.198a.548.548 0 0 0-.06-.091.765.765 0 0 1-.151-.429c0-.194.067-.381.178-.506.111-.124.256-.212.54-.212Zm-10.05 1.077c.284 0 .429.087.54.212.11.124.178.312.178.506a.778.778 0 0 1-.178.506c-.111.125-.256.212-.54.212-.284 0-.429-.087-.54-.212a.778.778 0 0 1-.178-.506c0-.194.068-.382.178-.506.111-.125.256-.212.54-.212Zm5.025 2.872c.267 0 .398.085.507.198a.548.548 0 0 0 .06.091c.082.12.151.264.151.428a.778.778 0 0 1-.178.507c-.111.124-.256.211-.54.211-.284 0-.429-.087-.54-.211a.773.773 0 0 1-.178-.507c0-.194.067-.381.178-.506.111-.124.256-.211.54-.211Zm5.023 0c-.986 0-1.796.81-1.796 1.796v5.382c0 .986.81 1.797 1.796 1.797.985 0 1.796-.811 1.796-1.797V7.595c0-.986-.811-1.796-1.796-1.796Zm0 1.076c.404 0 .72.316.72.72v5.382c0 .404-.316.72-.72.72a.712.712 0 0 1-.72-.72V7.595c0-.404.316-.72.72-.72Zm-10.05.002c-.986 0-1.796.81-1.796 1.796v4.304c0 .986.81 1.797 1.796 1.797s1.797-.811 1.797-1.797V8.673c0-.985-.811-1.796-1.797-1.796Zm0 1.077c.404 0 .72.315.72.72v4.303c0 .404-.316.72-.72.72a.711.711 0 0 1-.719-.72V8.673a.71.71 0 0 1 .719-.719Zm5.027 1.793c-.986 0-1.797.81-1.797 1.796v1.434c0 .986.811 1.797 1.797 1.797.986 0 1.797-.811 1.797-1.797v-1.434c0-.985-.811-1.796-1.797-1.796Zm0 1.076c.404 0 .72.316.72.72v1.434c0 .404-.316.72-.72.72a.712.712 0 0 1-.72-.72v-1.434c0-.404.316-.72.72-.72ZM816.532 2.774a.521.521 0 0 0-.491.322.522.522 0 0 0 .288.689.521.521 0 0 0 .203.037h12.936a.528.528 0 0 0 .491-.322.522.522 0 0 0-.288-.689.528.528 0 0 0-.203-.037h-12.936Zm0 4.72a.521.521 0 0 0-.491.322.522.522 0 0 0 .288.689.521.521 0 0 0 .203.037h12.936a.528.528 0 0 0 .491-.322.522.522 0 0 0-.288-.689.528.528 0 0 0-.203-.037h-12.936Zm0 4.72a.521.521 0 0 0-.491.322.521.521 0 0 0 .288.689.521.521 0 0 0 .203.037h12.936a.528.528 0 0 0 .491-.322.522.522 0 0 0-.491-.726h-12.936ZM857 1.774c-.656 0-1.215.265-1.574.668a2.149 2.149 0 0 0-.526 1.432c0 .51.168 1.027.526 1.431.359.404.918.669 1.574.669s1.215-.265 1.574-.669c.358-.404.526-.921.526-1.431s-.168-1.028-.526-1.432c-.359-.403-.918-.668-1.574-.668Zm-4.55.7c-.54 0-1.011.22-1.311.559a1.78 1.78 0 0 0-.439 1.19c0 .423.138.853.439 1.191.3.338.771.56 1.311.56.539 0 1.011-.222 1.311-.56.3-.338.439-.768.439-1.19 0-.423-.139-.853-.439-1.191-.3-.338-.772-.56-1.311-.56Zm9.1 0c-.54 0-1.011.22-1.311.559a1.78 1.78 0 0 0-.439 1.19c0 .423.138.853.439 1.191.3.338.771.56 1.311.56.539 0 1.011-.222 1.311-.56.3-.338.439-.768.439-1.19 0-.423-.139-.853-.439-1.191-.3-.338-.772-.56-1.311-.56Zm-4.55.35c.394 0 .622.128.789.315.166.187.261.457.261.735 0 .277-.095.547-.261.734-.167.187-.395.316-.789.316s-.623-.13-.789-.316a1.119 1.119 0 0 1-.261-.734c0-.278.095-.548.261-.735.166-.187.395-.315.789-.315Zm-4.55.7c.277 0 .418.085.526.206a.755.755 0 0 1 .174.494c0 .19-.066.372-.174.493-.108.122-.249.207-.526.207s-.419-.085-.526-.207a.755.755 0 0 1-.174-.493c0-.19.066-.373.174-.494.107-.121.249-.206.526-.206Zm9.1 0c.277 0 .418.085.526.206a.755.755 0 0 1 .174.494c0 .19-.066.372-.174.493-.108.122-.249.207-.526.207s-.419-.085-.526-.207a.755.755 0 0 1-.174-.493c0-.19.066-.373.174-.494.107-.121.249-.206.526-.206Zm-10.325 3.15c-.676 0-1.225.549-1.225 1.225v2.275a2.803 2.803 0 0 0 3.521 2.705 3.89 3.89 0 0 1-.315-1.005 1.75 1.75 0 0 1-2.156-1.7V7.899c0-.098.077-.175.175-.175h1.935c.035-.4.189-.76.431-1.05h-2.366Zm3.85 0c-.67 0-1.225.554-1.225 1.225v3.324a3.158 3.158 0 0 0 3.15 3.15 3.158 3.158 0 0 0 3.15-3.15V7.9c0-.67-.555-1.225-1.225-1.225h-3.85Zm5.334 0c.241.29.396.65.431 1.05h1.935c.098 0 .175.077.175.175v2.275a1.75 1.75 0 0 1-2.156 1.7c-.06.354-.168.69-.315 1.005A2.804 2.804 0 0 0 864 10.173V7.9c0-.676-.55-1.225-1.225-1.225h-2.366Zm-5.334 1.05h1.246l.321.642.005.007-.002.005-.341 1.97a.26.26 0 0 0 .051.204l.437.569a.263.263 0 0 0 .416 0l.437-.569a.264.264 0 0 0 .051-.205l-.341-1.969-.002-.005.004-.007.321-.642h1.247c.103 0 .175.071.175.175v3.324c0 1.166-.934 2.1-2.1 2.1s-2.1-.934-2.1-2.1V7.9c0-.104.072-.175.175-.175ZM890.014.774c-.403 0-.805.13-1.137.392l-4.686 3.692a.497.497 0 0 0-.163.558.5.5 0 0 0 .473.337h11.025a.499.499 0 0 0 .473-.337.503.503 0 0 0-.163-.558l-4.685-3.692a1.836 1.836 0 0 0-1.137-.392Zm0 1a.83.83 0 0 1 .516.18l3.551 2.797h-8.135l3.551-2.797a.831.831 0 0 1 .517-.18Zm0 .972a.667.667 0 1 0-.002 1.335.667.667 0 0 0 .002-1.335Zm-4.845 3.675v4.384A1.504 1.504 0 0 0 884 12.268c0 .829.675 1.503 1.503 1.503h3.508V12.77h-3.508a.5.5 0 1 1 0-1.002h3.508v-1.002h-.668V6.42h-1.002v4.343h-1.17V6.421h-1.002Zm4.343 0v2.553c.188-.137.421-.214.669-.214h.334V6.42h-1.003Zm2.172 0V8.76h1.002V6.42h-1.002Zm2.172 0V8.76h1.002V6.42h-1.002Zm-3.341 3.007a.843.843 0 0 0-.836.835v3.675c0 .456.38.836.836.836h6.013c.456 0 .836-.38.836-.836v-3.675a.843.843 0 0 0-.836-.835h-6.013Zm.167 1.002h5.679v.669h-5.679v-.669Zm0 1.67h5.679v1.671h-5.679v-1.67ZM931.75 4.525a.504.504 0 0 0-.312-.463.498.498 0 0 0-.546.115l-6.141 6.14-6.141-6.14a.499.499 0 1 0-.706.706l6.494 6.494a.5.5 0 0 0 .706 0l6.495-6.494a.498.498 0 0 0 .151-.358ZM958.646 1.174c-.52 0-1.039.121-1.514.364l-.001.001-4.088 2.104A1.928 1.928 0 0 0 952 5.354v5.639c0 .72.403 1.38 1.043 1.71l4.088 2.105a3.325 3.325 0 0 0 3.029 0h.001l4.088-2.105a1.926 1.926 0 0 0 1.042-1.71V5.354c0-.72-.403-1.38-1.042-1.71h-.001l-4.087-2.105a3.328 3.328 0 0 0-1.515-.365Zm0 1.049c.355 0 .711.083 1.036.25l4.086 2.104a.87.87 0 0 1 .474.777v5.639a.872.872 0 0 1-.474.777l-4.086 2.104a2.272 2.272 0 0 1-2.071 0h-.001l-4.087-2.104a.873.873 0 0 1-.474-.777V5.354c0-.33.182-.627.474-.777l4.087-2.104c.326-.167.681-.25 1.036-.25Zm-4.383 2.624a.525.525 0 0 0-.231.993l3.089 1.606c.317.165.656.254 1 .31v5.14a.524.524 0 0 0 1.012.203.524.524 0 0 0 .038-.203v-5.14c.343-.056.682-.145.999-.31h.001l3.089-1.605a.524.524 0 1 0-.484-.932l-3.09 1.606a2.254 2.254 0 0 1-1.05.252 2.256 2.256 0 0 1-1.031-.252l-3.09-1.605a.523.523 0 0 0-.252-.063Zm8.747 2.97a.524.524 0 0 0-.516.531v1.898c0 .007-.002.01-.009.014l-1.456.75a.521.521 0 0 0-.283.51.523.523 0 0 0 .363.456.528.528 0 0 0 .401-.033l1.455-.75c.354-.183.578-.55.578-.947V8.348a.515.515 0 0 0-.154-.378.529.529 0 0 0-.379-.154ZM987.833 2.774A1.841 1.841 0 0 0 986 4.607v7.667c0 1.006.827 1.833 1.833 1.833h10.334a1.841 1.841 0 0 0 1.833-1.833V4.607a1.841 1.841 0 0 0-1.833-1.833h-10.334Zm0 1h10.334c.466 0 .833.367.833.833v7.667a.826.826 0 0 1-.833.833h-10.334a.826.826 0 0 1-.833-.833V4.607c0-.466.367-.833.833-.833Zm7.324 1.995a.501.501 0 0 0-.344.151l-4.333 4.334a.494.494 0 0 0-.154.355.497.497 0 0 0 .505.505.497.497 0 0 0 .356-.154l4.333-4.333a.501.501 0 0 0-.363-.858Zm-3.99.005a.836.836 0 0 0-.834.833.834.834 0 1 0 .834-.833Zm3.666 3.666a.832.832 0 1 0 0 1.665.832.832 0 0 0 0-1.665ZM1027 .774c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7Zm0 1.05c3.29 0 5.95 2.657 5.95 5.95 0 3.292-2.66 5.95-5.95 5.95a5.944 5.944 0 0 1-5.95-5.95c0-3.293 2.66-5.95 5.95-5.95Zm0 2.8a3.16 3.16 0 0 0-3.15 3.15 3.16 3.16 0 0 0 3.15 3.15 3.16 3.16 0 0 0 3.15-3.15 3.16 3.16 0 0 0-3.15-3.15Zm0 1.05c1.17 0 2.1.934 2.1 2.1s-.93 2.1-2.1 2.1a2.09 2.09 0 0 1-2.1-2.1c0-1.166.93-2.1 2.1-2.1Z"
        fill={props.color || `currentColor`}
      />
      <defs>
        <clipPath id="Row_svg__a">
          <path
            fill="#fff"
            transform="translate(714 1.174)"
            d="M0 0h14v14H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgRow);
