let isAdmin = true;
let isLoggedIn = true;

if (isLoggedIn && isAdmin) {
    console.log("Welcome, Admin!");
} else if (isLoggedIn || isAdmin) {
    console.log("Partial access granted.");
} else {
    console.log("Please log in first.");
}