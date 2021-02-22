function displayPosition(company,job, description) {
    console.log(job+ " at "+company+" - "+description);
}
function displaySkill(skill, isCool) {
    if (isCool) {
        console.log("BAM "+skill);
    } else {
        console.log(skill);
    }
}






console.log("Dustin Ashley".toUpperCase());
console.log("Frontend Software Dev");
console.log("Gym enthustiast, friendly, soft-spoken, and willing to help!");
console.log("My Interests");
console.log("Piano");
console.log("Programming");
console.log("Travel");
console.log("My Experience")
displayPosition("Costco","Food Service", "Served and prepared food for customers.");
displayPosition("Ashley Construction","Labour Assistant" ,"Cleaned job sights, supervised workers, and worked on construction remodeling projects.");
console.log("My Skills")
displaySkill("Pianoist(12 years)",false);
displaySkill("Calistenics training(2 years)",true);
displaySkill("Soon to be software dev",false);


