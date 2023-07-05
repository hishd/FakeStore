import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin-User",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("Idmcc3", 10),
    isAdmin: true,
    isVendor: false,
  },
  {
    name: "User",
    email: "user@gmail.com",
    password: bcrypt.hashSync("Idmcc3", 10),
    isAdmin: false,
    isVendor: false,
  },
  {
    name: "Vendor",
    email: "vendor@gmail.com",
    password: bcrypt.hashSync("Idmcc3", 10),
    isAdmin: false,
    isVendor: true,
  },
];

export default users;
