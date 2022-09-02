import React from "react"

// Tomado de https://github.com/microsoft/fluentui-system-icons
// No tienen una tubería web, así que solo hice C&P directamente
// Tiene licencia MIT
// https://github.com/microsoft/fluentui-system-icons/blob/master/LICENSE

export const LikeFilledSVG = () => <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.4829 1.70386C11.6841 0.866733 10.3913 1.317 10.052 2.2943C9.77205 3.10056 9.4084 4.06607 9.05406 4.77696C7.99442 6.90288 7.37583 8.11247 5.66974 9.62598C5.44337 9.8268 5.15163 9.98862 4.82905 10.1161C3.69991 10.5625 2.63809 11.7322 2.91581 13.1208L3.26885 14.886C3.45455 15.8145 4.14894 16.5585 5.06251 16.8076L10.6622 18.3348C13.2078 19.0291 15.8017 17.3943 16.2737 14.7984L16.9576 11.0367C17.2924 9.19515 15.8777 7.50001 14.006 7.50001H13.1225L13.1328 7.44778C13.2129 7.0396 13.3093 6.47747 13.3738 5.86485C13.438 5.25459 13.4721 4.58046 13.4218 3.95233C13.3725 3.33596 13.2379 2.70317 12.9176 2.22266C12.8081 2.05844 12.6455 1.87428 12.4829 1.70386Z"  />
</svg>

export const LikeUnfilledSVG = () => <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10.052 2.29429C10.3913 1.31699 11.6841 0.866721 12.4829 1.70385C12.6455 1.87427 12.8081 2.05843 12.9176 2.22265C13.2379 2.70316 13.3725 3.33595 13.4218 3.95232C13.4721 4.58045 13.438 5.25457 13.3738 5.86484C13.3093 6.47746 13.2129 7.03959 13.1328 7.44777C13.1294 7.46547 13.1259 7.48288 13.1225 7.5H14.006C15.8777 7.5 17.2924 9.19514 16.9576 11.0367L16.2737 14.7984C15.8017 17.3943 13.2078 19.0291 10.6622 18.3348L5.06251 16.8076C4.14894 16.5585 3.45455 15.8145 3.26885 14.886L2.91581 13.1208C2.63809 11.7322 3.69991 10.5624 4.82905 10.1161C5.15163 9.98861 5.44337 9.82679 5.66974 9.62597C7.37583 8.11245 7.99442 6.90287 9.05406 4.77695C9.4084 4.06605 9.77205 3.10054 10.052 2.29429ZM12.0165 7.87862L12.0169 7.87707L12.0187 7.86973L12.0262 7.83863C12.0328 7.81079 12.0426 7.76903 12.0549 7.71494C12.0793 7.60669 12.1135 7.4493 12.1515 7.25536C12.2277 6.86666 12.3188 6.33504 12.3793 5.76016C12.4401 5.18293 12.4685 4.5758 12.425 4.03206C12.3806 3.47655 12.2652 3.04684 12.0855 2.77735C12.0264 2.6887 11.9138 2.55604 11.7594 2.39421C11.5605 2.18576 11.1314 2.23428 10.9967 2.62228C10.7141 3.43609 10.3334 4.45194 9.94904 5.22305C8.88216 7.36349 8.19326 8.72408 6.33336 10.374C5.99304 10.6759 5.58878 10.8911 5.19665 11.0461C4.31631 11.3941 3.75035 12.1945 3.89639 12.9247L4.24943 14.6899C4.36085 15.247 4.77748 15.6934 5.32562 15.8428L10.9254 17.3701C12.9052 17.91 14.9227 16.6385 15.2898 14.6195L15.9738 10.8578C16.197 9.63009 15.2538 8.5 14.006 8.5H12.5015C12.3476 8.5 12.2022 8.42906 12.1074 8.30771C12.0127 8.18638 11.9792 8.02796 12.0165 7.87862C12.0165 7.87858 12.0165 7.87866 12.0165 7.87862Z"  />
</svg>

export const DislikeFilledSVG = () => <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.4829 18.2961C11.6841 19.1333 10.3913 18.683 10.052 17.7057C9.77205 16.8994 9.4084 15.9339 9.05406 15.223C7.99442 13.0971 7.37583 11.8875 5.66974 10.374C5.44337 10.1732 5.15163 10.0114 4.82905 9.88387C3.69991 9.43755 2.63809 8.26778 2.91581 6.87917L3.26885 5.114C3.45455 4.18545 4.14894 3.44153 5.06251 3.19238L10.6622 1.66517C13.2078 0.970938 15.8017 2.60568 16.2737 5.20163L16.9576 8.96333C17.2924 10.8048 15.8777 12.5 14.006 12.5H13.1225L13.1328 12.5522C13.2129 12.9604 13.3093 13.5225 13.3738 14.1351C13.438 14.7454 13.4721 15.4195 13.4218 16.0477C13.3725 16.664 13.2379 17.2968 12.9176 17.7773C12.8081 17.9416 12.6455 18.1257 12.4829 18.2961Z"  />
</svg>

export const DislikeUnfilledSVG = () => <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10.052 17.7057C10.3913 18.683 11.6841 19.1333 12.4829 18.2962C12.6455 18.1257 12.8081 17.9416 12.9176 17.7773C13.2379 17.2968 13.3725 16.664 13.4218 16.0477C13.4721 15.4195 13.438 14.7454 13.3738 14.1352C13.3093 13.5225 13.2129 12.9604 13.1328 12.5522C13.1294 12.5345 13.1259 12.5171 13.1225 12.5H14.006C15.8777 12.5 17.2924 10.8049 16.9576 8.96334L16.2737 5.20164C15.8017 2.60569 13.2078 0.970948 10.6622 1.66518L5.06251 3.19238C4.14894 3.44154 3.45455 4.18546 3.26885 5.11401L2.91581 6.87918C2.63809 8.26779 3.69991 9.43756 4.82905 9.88388C5.15163 10.0114 5.44337 10.1732 5.66974 10.374C7.37583 11.8875 7.99442 13.0971 9.05406 15.223C9.4084 15.9339 9.77205 16.8995 10.052 17.7057ZM12.0165 12.1214L12.0169 12.1229L12.0187 12.1303L12.0262 12.1614C12.0328 12.1892 12.0426 12.231 12.0549 12.2851C12.0793 12.3933 12.1135 12.5507 12.1515 12.7446C12.2277 13.1333 12.3188 13.665 12.3793 14.2398C12.4401 14.8171 12.4685 15.4242 12.425 15.9679C12.3806 16.5234 12.2652 16.9532 12.0855 17.2226C12.0264 17.3113 11.9138 17.444 11.7594 17.6058C11.5605 17.8142 11.1314 17.7657 10.9967 17.3777C10.7141 16.5639 10.3334 15.5481 9.94904 14.777C8.88216 12.6365 8.19326 11.2759 6.33336 9.62597C5.99304 9.32406 5.58878 9.1089 5.19665 8.9539C4.31631 8.60592 3.75035 7.80549 3.89639 7.0753L4.24943 5.31012C4.36085 4.753 4.77748 4.30664 5.32562 4.15715L10.9254 2.62995C12.9052 2.08999 14.9227 3.36145 15.2898 5.38052L15.9738 9.14222C16.197 10.3699 15.2538 11.5 14.006 11.5H12.5015C12.3476 11.5 12.2022 11.5709 12.1074 11.6923C12.0127 11.8136 11.9792 11.972 12.0165 12.1214C12.0165 12.1214 12.0165 12.1213 12.0165 12.1214Z"  />
</svg>

