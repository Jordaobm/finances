import React from "react";
import Svg, { Path } from "react-native-svg";

interface IconProps {
  color: string;
}

export const ChartIcon = ({ color }: IconProps) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M10.11 11.15H7.45999C6.82999 11.15 6.32001 11.66 6.32001 12.29V17.41H10.11V11.15V11.15Z"
        stroke={color}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12.7613 6.59998H11.2412C10.6112 6.59998 10.1013 7.10999 10.1013 7.73999V17.4H13.8913V7.73999C13.8913 7.10999 13.3913 6.59998 12.7613 6.59998Z"
        stroke={color}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M16.5481 12.85H13.8981V17.4H17.6881V13.99C17.6781 13.36 17.1681 12.85 16.5481 12.85Z"
        stroke={color}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const TagIcon = ({ color }: IconProps) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M4.16989 15.3L8.69989 19.83C10.5599 21.69 13.5799 21.69 15.4499 19.83L19.8399 15.44C21.6999 13.58 21.6999 10.56 19.8399 8.69005L15.2999 4.17005C14.3499 3.22005 13.0399 2.71005 11.6999 2.78005L6.69989 3.02005C4.69989 3.11005 3.10989 4.70005 3.00989 6.69005L2.76989 11.69C2.70989 13.04 3.21989 14.35 4.16989 15.3Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9.49988 12.0001C10.8806 12.0001 11.9999 10.8808 11.9999 9.50006C11.9999 8.11935 10.8806 7.00006 9.49988 7.00006C8.11917 7.00006 6.99988 8.11935 6.99988 9.50006C6.99988 10.8808 8.11917 12.0001 9.49988 12.0001Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </Svg>
  );
};

export const WalletIcon = ({ color }: IconProps) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M12.66 2.51814L12.63 2.58814L9.73002 9.31814H6.88002C6.20002 9.31814 5.55002 9.45814 4.96002 9.70814L6.71002 5.52814L6.75002 5.42814L6.82002 5.26814C6.84002 5.20814 6.86002 5.14814 6.89002 5.09814C8.20002 2.06814 9.68002 1.37814 12.66 2.51814Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M18.05 9.51813C17.6 9.37813 17.12 9.31813 16.64 9.31813H9.72998L12.63 2.58813L12.66 2.51813C12.81 2.56813 12.95 2.63813 13.1 2.69813L15.31 3.62813C16.54 4.13813 17.4 4.66813 17.92 5.30813C18.02 5.42813 18.1 5.53813 18.17 5.66813C18.26 5.80813 18.33 5.94813 18.37 6.09813C18.41 6.18813 18.44 6.27813 18.46 6.35813C18.73 7.19813 18.57 8.22813 18.05 9.51813Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M21.5217 14.1984V16.1484C21.5217 16.3484 21.5117 16.5484 21.5017 16.7484C21.3117 20.2384 19.3617 21.9984 15.6617 21.9984H7.86172C7.62172 21.9984 7.38172 21.9784 7.15172 21.9484C3.97172 21.7384 2.27172 20.0384 2.06172 16.8584C2.03172 16.6284 2.01172 16.3884 2.01172 16.1484V14.1984C2.01172 12.1884 3.23172 10.4584 4.97172 9.70836C5.57172 9.45836 6.21172 9.31836 6.89172 9.31836H16.6517C17.1417 9.31836 17.6217 9.38836 18.0617 9.51836C20.0517 10.1284 21.5217 11.9884 21.5217 14.1984Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M6.71 5.52814L4.96 9.70814C3.22 10.4581 2 12.1881 2 14.1981V11.2681C2 8.42814 4.02 6.05814 6.71 5.52814Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M21.5186 11.2677V14.1977C21.5186 11.9977 20.0586 10.1277 18.0586 9.52766C18.5786 8.22766 18.7286 7.20766 18.4786 6.35766C18.4586 6.26766 18.4286 6.17766 18.3886 6.09766C20.2486 7.05766 21.5186 9.02766 21.5186 11.2677Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const MoneyIcon = ({ color }: IconProps) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M19.3 7.91998V13.07C19.3 16.15 17.54 17.47 14.9 17.47H6.10995C5.65995 17.47 5.22996 17.43 4.82996 17.34C4.57996 17.3 4.33996 17.23 4.11996 17.15C2.61996 16.59 1.70996 15.29 1.70996 13.07V7.91998C1.70996 4.83998 3.46995 3.52002 6.10995 3.52002H14.9C17.14 3.52002 18.75 4.47001 19.18 6.64001C19.25 7.04001 19.3 7.44998 19.3 7.91998Z"
        stroke={color}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M22.3011 10.9201V16.0701C22.3011 19.1501 20.5411 20.4701 17.9011 20.4701H9.11105C8.37105 20.4701 7.70106 20.3701 7.12106 20.1501C5.93106 19.7101 5.12105 18.8001 4.83105 17.3401C5.23105 17.4301 5.66105 17.4701 6.11105 17.4701H14.9011C17.5411 17.4701 19.3011 16.1501 19.3011 13.0701V7.9201C19.3011 7.4501 19.2611 7.03014 19.1811 6.64014C21.0811 7.04014 22.3011 8.38011 22.3011 10.9201Z"
        stroke={color}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10.4984 13.1399C11.9564 13.1399 13.1384 11.9579 13.1384 10.4999C13.1384 9.04185 11.9564 7.85986 10.4984 7.85986C9.04038 7.85986 7.8584 9.04185 7.8584 10.4999C7.8584 11.9579 9.04038 13.1399 10.4984 13.1399Z"
        stroke={color}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M4.77997 8.29999V12.7"
        stroke={color}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M16.2217 8.30029V12.7003"
        stroke={color}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const HomeIcon = ({ color }: IconProps) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M9.02 2.84001L3.63 7.04001C2.73 7.74001 2 9.23001 2 10.36V17.77C2 20.09 3.89 21.99 6.21 21.99H17.79C20.11 21.99 22 20.09 22 17.78V10.5C22 9.29001 21.19 7.74001 20.2 7.05001L14.02 2.72001C12.62 1.74001 10.37 1.79001 9.02 2.84001Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12 17.99V14.99"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
