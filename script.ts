//listing element
document
.getElementById('resumeForm')?.addEventListener('submit', function(event) {
event.preventDefault();

    //Getting each elements of the form:
const profilePictureInput = document.getElementById(
    "profilePicture"
)  as HTMLInputElement;
const nameElement = document.getElementById("name") as HTMLInputElement;
const emailElement = document.getElementById("email") as HTMLInputElement;
const phoneElement = document.getElementById("phone") as HTMLInputElement;
const educationElement = document.getElementById(
    "education"
) as HTMLInputElement;
const experienceElement = document.getElementById(
    "experience"
) as HTMLInputElement;
const skillsElement = document.getElementById(
    "skills"
) as HTMLInputElement;

//ensuring elements are present:
if (
profilePictureInput && 
nameElement &&
emailElement && 
phoneElement &&
educationElement && 
experienceElement && 
skillsElement  
) {  
    //Getting each values of the form:********************************************************************** */
const name = nameElement.value;
const email = emailElement.value;
const phone = phoneElement.value;
const education = educationElement.value;
const experience = experienceElement.value;
const skills = skillsElement.value;

// elements of profile image
const profilePictureFile = profilePictureInput.files?.[0];
const profilePictureURL = profilePictureFile 
? URL.createObjectURL(profilePictureFile)
: '';

//making html output of resume
const resumeHTML = `
<h2>Resume</h2>
${
profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Image" class="profilePicture">` 
: ''
}
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone Number:</strong> ${phone}</p>
<h3>Education</h3>
<p>${education}</p>
<h3>Experience</h3>
<p>${experience}</p>
<h3>Skills</h3>
<p>${skills}</p>
`;

//display of resume output:
const resumeOutputElement = document.getElementById("resumeOutput");
if (resumeOutputElement) {
resumeOutputElement.innerHTML = resumeHTML;
resumeOutputElement.classList.remove("hidden");

//coding for buttons:
const buttonsContainer = document.createElement("div");
buttonsContainer.id = "buttonsContainer";
resumeOutputElement.appendChild(buttonsContainer);

//coding for Milestone 5 addition - Download PDF requirements:
const downloadButton = document.createElement("button");
downloadButton.textContent = "Download in PDF";
downloadButton.addEventListener("click", () => {
window.print(); // this will open 'print dialog' so that we can save in PDF. 
});
buttonsContainer.appendChild(downloadButton);

//Shareable Link button:
const shareableLinkButton = document.createElement("button");
shareableLinkButton.textContent = "Copy Shareable Link";
shareableLinkButton.addEventListener("click", async () => {
try{
//trigger the creation of a unique shareable link:
const shareableLink = `${"https://hackathon-1-milestone5-p2-pdf.vercel.app"}/resume/${name.replace(
/\s+/g,
 "_")}_resume.html`;

//use the 'navigator clipbord Api' to copy the above sharable link:
await navigator.clipboard.writeText(shareableLink);
alert("Shareable link is now copied to clipboard!"); 
} catch(error) {
console.error("Failure in copying link to clipboard ;(", error);
alert("Failure in copying link to clipboard. Re-click to try again!");
}
});
buttonsContainer.appendChild(shareableLinkButton);
} else {
 console.error(" Resume output container not found");
} 
} else {
console.error("One or more form elements are missing");
};
});