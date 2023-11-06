const today = "3shanbe";
if (today === "shanbe") {
  console.log("فوتبال");
} else if (today === "2shanbe") {
  console.log("پیانو");
} else if (today === "4shanbe") {
  console.log("برنامه‌نویسی");
} else {
  console.log("بیکار!");
}

switch (today) {
  case "shanbe":
    console.log("فوتبال");
    break;
  case "2shanbe":
    console.log("پیانو");
    break;
  case "4shanbe":
    console.log("برنامه‌نویسی");
    break;
  default:
    console.log("بیکار!");
}
