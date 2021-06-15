import {
  FolderSpecialIcon,
  PaymentIcon,
  PeopleIcon,
  SettingsIcon,
  TouchAppIcon,
} from "../Icons";

export const getListIcon = (type) => {
  if (type === "Integrations") {
    return <TouchAppIcon />;
  } else if (type === "Reports") {
    return <FolderSpecialIcon />;
  } else if (type === "Users") {
    return <PeopleIcon />;
  } else if (type === "Account") {
    return <SettingsIcon />;
  } else if (type === "Billing") {
    return <PaymentIcon />;
  } else {
    throw new Error("Type not supported");
  }
};
